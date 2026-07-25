<?php
declare(strict_types=1);

const SERVICE_NAME = 'spotpaddle-suggestions';
const DEFAULT_RECIPIENT_EMAIL = 'hartissine@gmail.com';
const MAX_PHOTOS = 5;
const MAX_PHOTO_BYTES = 18874368; // 18 MB
const MAX_PHOTO_TOTAL_BYTES = 18874368; // Keeps base64 MIME email below common 25 MB limits.
const MAX_POST_BYTES = 23068672; // 22 MB, leaves room for multipart overhead.

header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('Cache-Control: no-store');
header('Vary: Origin');

class UserInputException extends RuntimeException
{
}

function wantsJson(): bool
{
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    return stripos($accept, 'application/json') !== false || ($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') === 'XMLHttpRequest';
}

function escapeHtml(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function sendPayload(int $statusCode, array $payload): void
{
    http_response_code($statusCode);

    if (wantsJson()) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    $ok = $statusCode >= 200 && $statusCode < 300;
    $title = $ok ? 'Merci pour votre contribution' : 'Envoi impossible';
    $message = (string) ($payload['message'] ?? $payload['error'] ?? 'Une réponse a été générée.');
    $homeLink = $ok ? 'Retour à Spot Paddle' : 'Retour au formulaire';
    $homeHref = $ok ? 'https://spotpaddle.ca/' : 'https://spotpaddle.ca/contribuer.html#formulaire';

    header('Content-Type: text/html; charset=utf-8');
    echo '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo '<title>' . escapeHtml($title) . ' | Spot Paddle</title>';
    echo '<style>body{font-family:Arial,sans-serif;background:#f8fafc;color:#0f172a;margin:0;display:grid;min-height:100vh;place-items:center;padding:24px}.card{max-width:620px;background:#fff;border:1px solid #e2e8f0;border-radius:24px;padding:32px;box-shadow:0 24px 80px rgba(15,23,42,.14)}h1{margin:0 0 12px;font-size:30px}p{line-height:1.6;color:#475569}a{display:inline-flex;margin-top:18px;border-radius:16px;background:#2563eb;color:#fff;text-decoration:none;font-weight:800;padding:14px 18px}</style>';
    echo '</head><body><main class="card"><h1>' . escapeHtml($title) . '</h1><p>' . escapeHtml($message) . '</p><a href="' . escapeHtml($homeHref) . '">' . escapeHtml($homeLink) . '</a></main></body></html>';
    exit;
}

function isAllowedOrigin(string $origin): bool
{
    $allowedOrigins = [
        'https://spotpaddle.ca',
        'https://www.spotpaddle.ca',
        'https://hartissine.github.io'
    ];

    if (in_array($origin, $allowedOrigins, true)) {
        return true;
    }

    return preg_match('#^https?://(?:localhost|127\.0\.0\.1)(?::\d{1,5})?$#', $origin) === 1;
}

function getClientAddress(): string
{
    $cloudflareAddress = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? '';
    $hasCloudflareRay = isset($_SERVER['HTTP_CF_RAY']);

    if ($hasCloudflareRay && filter_var($cloudflareAddress, FILTER_VALIDATE_IP) !== false) {
        return $cloudflareAddress;
    }

    $remoteAddress = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    return filter_var($remoteAddress, FILTER_VALIDATE_IP) !== false ? $remoteAddress : 'unknown';
}

function consumeRateLimit(string $storageDir, int $limit, int $windowSeconds): array
{
    if (!is_dir($storageDir) || !is_writable($storageDir)) {
        return ['allowed' => true, 'remaining' => $limit, 'retryAfter' => 0];
    }

    $clientAddress = getClientAddress();
    $rateFile = $storageDir . DIRECTORY_SEPARATOR . 'suggestion-rate-' . hash('sha256', $clientAddress) . '.json';
    $handle = @fopen($rateFile, 'c+');

    if ($handle === false || !flock($handle, LOCK_EX)) {
        if (is_resource($handle)) {
            fclose($handle);
        }
        return ['allowed' => true, 'remaining' => $limit, 'retryAfter' => 0];
    }

    $now = time();
    $rawState = stream_get_contents($handle);
    $state = json_decode($rawState ?: '', true);

    if (!is_array($state) || !isset($state['startedAt'], $state['count']) || ($now - (int) $state['startedAt']) >= $windowSeconds) {
        $state = ['startedAt' => $now, 'count' => 0];
    }

    $elapsed = max(0, $now - (int) $state['startedAt']);
    $retryAfter = max(1, $windowSeconds - $elapsed);

    if ((int) $state['count'] >= $limit) {
        flock($handle, LOCK_UN);
        fclose($handle);
        return ['allowed' => false, 'remaining' => 0, 'retryAfter' => $retryAfter];
    }

    $state['count'] = (int) $state['count'] + 1;
    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, json_encode($state));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);

    return [
        'allowed' => true,
        'remaining' => max(0, $limit - (int) $state['count']),
        'retryAfter' => $retryAfter
    ];
}

function getField(string $name, int $maxBytes = 1000): string
{
    $value = trim((string) ($_POST[$name] ?? ''));
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? $value;

    if (strlen($value) > $maxBytes) {
        $value = substr($value, 0, $maxBytes);
    }

    return trim($value);
}

function addLine(array &$lines, string $label, string $value): void
{
    if ($value !== '') {
        $lines[] = $label . ': ' . $value;
    }
}

function sanitizeFilename(string $filename, string $fallback): string
{
    $filename = basename($filename);
    $filename = preg_replace('/[^A-Za-z0-9._-]+/', '-', $filename) ?? '';
    $filename = trim($filename, '.-');

    return $filename !== '' ? $filename : $fallback;
}

function collectPhotoAttachments(): array
{
    if (!isset($_FILES['photos'])) {
        return [];
    }

    $files = $_FILES['photos'];
    $names = is_array($files['name']) ? $files['name'] : [$files['name']];
    $types = is_array($files['type']) ? $files['type'] : [$files['type']];
    $tmpNames = is_array($files['tmp_name']) ? $files['tmp_name'] : [$files['tmp_name']];
    $errors = is_array($files['error']) ? $files['error'] : [$files['error']];
    $sizes = is_array($files['size']) ? $files['size'] : [$files['size']];
    $attachments = [];
    $allowedMimeTypes = [
        'image/jpeg',
        'image/png',
        'image/webp',
        'image/heic',
        'image/heif'
    ];

    foreach ($names as $index => $name) {
        $error = (int) ($errors[$index] ?? UPLOAD_ERR_NO_FILE);

        if ($error === UPLOAD_ERR_NO_FILE) {
            continue;
        }

        if (count($attachments) >= MAX_PHOTOS) {
            throw new UserInputException('Maximum ' . MAX_PHOTOS . ' photos par envoi.');
        }

        if ($error !== UPLOAD_ERR_OK) {
            throw new UserInputException('Une photo n’a pas pu être téléversée. Réessayez avec une image plus légère.');
        }

        $tmpName = (string) ($tmpNames[$index] ?? '');
        $size = (int) ($sizes[$index] ?? 0);

        if ($size <= 0 || $size > MAX_PHOTO_BYTES) {
            throw new UserInputException('Chaque photo doit faire 18 Mo ou moins.');
        }

        if ($tmpName === '' || !is_uploaded_file($tmpName)) {
            throw new UserInputException('Photo invalide.');
        }

        $mimeType = '';
        if (class_exists('finfo')) {
            $finfo = new finfo(FILEINFO_MIME_TYPE);
            $mimeType = (string) ($finfo->file($tmpName) ?: '');
        }
        if ($mimeType === '') {
            $mimeType = (string) ($types[$index] ?? '');
        }

        if (!in_array($mimeType, $allowedMimeTypes, true)) {
            throw new UserInputException('Formats acceptés: JPG, PNG, WebP ou HEIC.');
        }

        $content = file_get_contents($tmpName);
        if ($content === false) {
            throw new RuntimeException('Lecture de photo impossible.');
        }

        $attachments[] = [
            'filename' => sanitizeFilename((string) $name, 'photo-' . (count($attachments) + 1) . '.jpg'),
            'mime' => $mimeType,
            'content' => $content,
            'size' => $size
        ];
    }

    return $attachments;
}

function encodeMailHeader(string $value): string
{
    $value = str_replace(["\r", "\n"], '', $value);
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function formatMailbox(string $email, string $name = ''): string
{
    if ($name === '') {
        return $email;
    }

    return encodeMailHeader($name) . ' <' . $email . '>';
}

function buildMimeBody(string $bodyText, array $attachments, string $boundary): string
{
    $body = '';
    $body .= '--' . $boundary . "\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($bodyText)) . "\r\n";

    foreach ($attachments as $attachment) {
        $body .= '--' . $boundary . "\r\n";
        $body .= 'Content-Type: ' . $attachment['mime'] . '; name="' . addcslashes($attachment['filename'], '"\\') . '"' . "\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= 'Content-Disposition: attachment; filename="' . addcslashes($attachment['filename'], '"\\') . '"' . "\r\n\r\n";
        $body .= chunk_split(base64_encode($attachment['content'])) . "\r\n";
    }

    $body .= '--' . $boundary . "--\r\n";
    return $body;
}

function smtpRead($socket): array
{
    $response = '';

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (strlen($line) >= 4 && $line[3] === ' ') {
            break;
        }
    }

    return [(int) substr($response, 0, 3), $response];
}

function smtpCommand($socket, string $command, array $expectedCodes): string
{
    fwrite($socket, $command . "\r\n");
    [$code, $response] = smtpRead($socket);

    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('SMTP error ' . $code . ': ' . trim($response));
    }

    return $response;
}

function sendViaSmtp(string $toEmail, string $fromEmail, string $fromName, string $subject, string $mimeBody, string $boundary): void
{
    $host = trim((string) getenv('SMTP_HOST'));
    $secure = strtolower(trim((string) (getenv('SMTP_SECURE') ?: 'tls')));
    $port = (int) (getenv('SMTP_PORT') ?: ($secure === 'ssl' ? 465 : 587));
    $username = trim((string) getenv('SMTP_USERNAME'));
    $password = (string) getenv('SMTP_PASSWORD');

    if ($host === '') {
        throw new RuntimeException('SMTP non configuré.');
    }

    $target = $secure === 'ssl' ? 'ssl://' . $host : $host;
    $socket = @fsockopen($target, $port, $errno, $errstr, 15);

    if ($socket === false) {
        throw new RuntimeException('Connexion SMTP impossible: ' . $errstr);
    }

    stream_set_timeout($socket, 15);
    [$code, $response] = smtpRead($socket);
    if ($code !== 220) {
        fclose($socket);
        throw new RuntimeException('Accueil SMTP invalide: ' . trim($response));
    }

    $serverName = $_SERVER['SERVER_NAME'] ?? 'spotpaddle.ca';
    smtpCommand($socket, 'EHLO ' . $serverName, [250]);

    if ($secure === 'tls') {
        smtpCommand($socket, 'STARTTLS', [220]);
        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            fclose($socket);
            throw new RuntimeException('STARTTLS impossible.');
        }
        smtpCommand($socket, 'EHLO ' . $serverName, [250]);
    }

    if ($username !== '') {
        smtpCommand($socket, 'AUTH LOGIN', [334]);
        smtpCommand($socket, base64_encode($username), [334]);
        smtpCommand($socket, base64_encode($password), [235]);
    }

    $headers = [
        'Date: ' . date(DATE_RFC2822),
        'From: ' . formatMailbox($fromEmail, $fromName),
        'To: ' . $toEmail,
        'Subject: ' . encodeMailHeader($subject),
        'MIME-Version: 1.0',
        'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
        'X-Mailer: Spot Paddle Suggestions'
    ];
    $message = implode("\r\n", $headers) . "\r\n\r\n" . $mimeBody;
    $message = preg_replace('/^\./m', '..', $message) ?? $message;

    smtpCommand($socket, 'MAIL FROM:<' . $fromEmail . '>', [250]);
    smtpCommand($socket, 'RCPT TO:<' . $toEmail . '>', [250, 251]);
    smtpCommand($socket, 'DATA', [354]);
    fwrite($socket, $message . "\r\n.\r\n");
    [$dataCode, $dataResponse] = smtpRead($socket);
    if (!in_array($dataCode, [250, 251], true)) {
        fclose($socket);
        throw new RuntimeException('Envoi SMTP refusé: ' . trim($dataResponse));
    }

    smtpCommand($socket, 'QUIT', [221]);
    fclose($socket);
}

function sendContributionEmail(string $subject, string $bodyText, array $attachments): void
{
    $toEmail = trim((string) (getenv('SPOTPADDLE_TO_EMAIL') ?: DEFAULT_RECIPIENT_EMAIL));
    if (filter_var($toEmail, FILTER_VALIDATE_EMAIL) === false) {
        throw new RuntimeException('Adresse de réception invalide.');
    }

    $smtpUsername = trim((string) getenv('SMTP_USERNAME'));
    $fromEmail = trim((string) (getenv('SMTP_FROM_EMAIL') ?: ($smtpUsername !== '' ? $smtpUsername : 'noreply@spotpaddle.ca')));
    if (filter_var($fromEmail, FILTER_VALIDATE_EMAIL) === false) {
        throw new RuntimeException('Adresse expéditeur invalide.');
    }

    $fromName = trim((string) (getenv('SMTP_FROM_NAME') ?: 'Spot Paddle'));
    $boundary = 'spotpaddle-' . bin2hex(random_bytes(12));
    $mimeBody = buildMimeBody($bodyText, $attachments, $boundary);

    if (trim((string) getenv('SMTP_HOST')) !== '') {
        sendViaSmtp($toEmail, $fromEmail, $fromName, $subject, $mimeBody, $boundary);
        return;
    }

    if (filter_var((string) getenv('SPOTPADDLE_ALLOW_PHP_MAIL'), FILTER_VALIDATE_BOOL) && function_exists('mail')) {
        $headers = [
            'From: ' . formatMailbox($fromEmail, $fromName),
            'MIME-Version: 1.0',
            'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
            'X-Mailer: Spot Paddle Suggestions'
        ];

        if (@mail($toEmail, encodeMailHeader($subject), $mimeBody, implode("\r\n", $headers))) {
            return;
        }
    }

    throw new RuntimeException('SMTP n’est pas configuré. La contribution n’a pas été marquée comme envoyée.');
}

function buildSubmissionText(array $fields, array $attachments): string
{
    $lines = ['Nouvelle contribution Spot Paddle', '', 'Spot'];

    addLine($lines, 'Nom ou endroit', $fields['spotName']);
    addLine($lines, 'Ville ou région', $fields['spotRegion']);
    addLine($lines, 'Lien Maps ou indication', $fields['spotMapLink']);
    addLine($lines, 'Détail utile', $fields['spotNotes']);

    $hasPhotoDetails = count($attachments) > 0 || $fields['photoTitle'] !== '' || $fields['photoCredit'] !== '' || $fields['photoPostText'] !== '';
    if ($hasPhotoDetails) {
        $lines[] = '';
        $lines[] = 'Photos';
        addLine($lines, 'Titre de la photo', $fields['photoTitle']);
        addLine($lines, 'Nom à afficher comme source', $fields['photoCredit']);
        addLine($lines, 'Utilisation souhaitée', $fields['photoUsage']);
        addLine($lines, 'Texte si publication', $fields['photoPostText']);
        $lines[] = 'Photos jointes: ' . (count($attachments) > 0 ? count($attachments) . ' fichier(s)' : 'Aucune');
    }

    $lines[] = '';
    $lines[] = 'Autorisation';
    $lines[] = "J’autorise Spot Paddle à utiliser les informations et, s'il y a lieu, les photos envoyées selon l’utilisation indiquée ci-dessus.";
    $lines[] = '';
    $lines[] = 'Technique';
    $lines[] = 'Date UTC: ' . gmdate('c');
    $lines[] = 'Source: ' . ($fields['sourcePage'] ?: 'contribuer.html');
    $lines[] = 'IP hash: ' . hash('sha256', getClientAddress());

    return implode("\n", $lines);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    if (!isAllowedOrigin($origin)) {
        sendPayload(403, ['error' => 'Origine non autorisée.']);
    }
    header('Access-Control-Allow-Origin: ' . $origin);
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'OPTIONS') {
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Accept, Content-Type, X-Requested-With');
    header('Access-Control-Max-Age: 86400');
    http_response_code(204);
    exit;
}

if ($method === 'GET' || $method === 'HEAD') {
    $recipientEmail = trim((string) (getenv('SPOTPADDLE_TO_EMAIL') ?: DEFAULT_RECIPIENT_EMAIL));
    sendPayload(200, [
        'status' => 'ok',
        'service' => SERVICE_NAME,
        'checks' => [
            'php' => true,
            'recipient_email' => filter_var($recipientEmail, FILTER_VALIDATE_EMAIL) !== false,
            'smtp_configured' => trim((string) getenv('SMTP_HOST')) !== '',
            'mail_function' => function_exists('mail')
        ],
        'timestamp' => gmdate('c')
    ]);
}

if ($method !== 'POST') {
    header('Allow: GET, HEAD, POST, OPTIONS');
    sendPayload(405, ['error' => 'Méthode non autorisée.']);
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > MAX_POST_BYTES) {
    sendPayload(413, ['error' => 'Envoi trop lourd. Maximum 18 Mo de photos au total.']);
}

$storageDir = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'spotpaddle-suggestions';
if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0750, true);
}

$rate = consumeRateLimit($storageDir, 8, 3600);
header('X-RateLimit-Limit: 8');
header('X-RateLimit-Remaining: ' . $rate['remaining']);

if (!$rate['allowed']) {
    header('Retry-After: ' . $rate['retryAfter']);
    sendPayload(429, ['error' => 'Trop d’envois. Réessayez plus tard.']);
}

try {
    if (getField('website', 200) !== '') {
        sendPayload(200, [
            'status' => 'ok',
            'message' => 'Merci, votre contribution a été reçue.'
        ]);
    }

    $fields = [
        'spotName' => getField('spotName', 160),
        'spotRegion' => getField('spotRegion', 160),
        'spotMapLink' => getField('spotMapLink', 500),
        'spotNotes' => getField('spotNotes', 2000),
        'photoTitle' => getField('photoTitle', 160),
        'photoCredit' => getField('photoCredit', 160),
        'photoUsage' => getField('photoUsage', 160),
        'photoPostText' => getField('photoPostText', 2000),
        'sourcePage' => getField('sourcePage', 200)
    ];

    $attachments = collectPhotoAttachments();
    $photoTotalBytes = array_reduce($attachments, static fn (int $total, array $attachment): int => $total + (int) $attachment['size'], 0);
    if ($photoTotalBytes > MAX_PHOTO_TOTAL_BYTES) {
        throw new UserInputException('Les photos doivent faire 18 Mo ou moins au total.');
    }

    $hasMinimumInfo = count($attachments) > 0;
    foreach (['spotName', 'spotRegion', 'spotMapLink', 'spotNotes', 'photoTitle', 'photoCredit', 'photoPostText'] as $fieldName) {
        if ($fields[$fieldName] !== '') {
            $hasMinimumInfo = true;
            break;
        }
    }

    if (!$hasMinimumInfo) {
        throw new UserInputException('Ajoutez au moins un nom, un lien, une note ou une photo.');
    }

    if (count($attachments) > 0 && $fields['photoTitle'] === '' && $fields['spotName'] === '' && $fields['spotRegion'] === '') {
        throw new UserInputException('Ajoutez un titre, un nom de spot ou une région pour identifier la photo.');
    }

    $subjectType = count($attachments) > 0 || $fields['photoTitle'] !== '' ? 'Contribution photo' : 'Suggestion de spot';
    $subjectName = $fields['spotName'] ?: ($fields['photoTitle'] ?: 'Nouvelle contribution');
    $subjectName = str_replace(["\r", "\n"], ' ', $subjectName);
    if (strlen($subjectName) > 80) {
        $subjectName = substr($subjectName, 0, 80);
    }
    $subject = '[SPOTPADDLE] ' . $subjectType . ' - ' . $subjectName;
    $bodyText = buildSubmissionText($fields, $attachments);

    sendContributionEmail($subject, $bodyText, $attachments);

    sendPayload(200, [
        'status' => 'ok',
        'message' => 'Merci! Votre contribution a été envoyée à Spot Paddle.',
        'request_id' => hash('sha256', $bodyText . microtime(true))
    ]);
} catch (UserInputException $error) {
    sendPayload(400, ['error' => $error->getMessage()]);
} catch (Throwable $error) {
    error_log('Spot Paddle suggestion error: ' . $error->getMessage());
    sendPayload(503, ['error' => 'L’envoi automatique n’est pas disponible pour le moment. Réessayez plus tard.']);
}
