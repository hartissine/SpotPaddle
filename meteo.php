<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('Vary: Origin');

function sendJson(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
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
    $rateFile = $storageDir . DIRECTORY_SEPARATOR . 'rate-' . hash('sha256', $clientAddress) . '.json';
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

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    if (!isAllowedOrigin($origin)) {
        sendJson(403, ['error' => 'Origine non autorisee.']);
    }
    header('Access-Control-Allow-Origin: ' . $origin);
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'OPTIONS') {
    header('Access-Control-Allow-Methods: GET, OPTIONS');
    header('Access-Control-Max-Age: 86400');
    http_response_code(204);
    exit;
}

if ($method !== 'GET') {
    header('Allow: GET, OPTIONS');
    sendJson(405, ['error' => 'Methode non autorisee.']);
}

$lat = filter_input(INPUT_GET, 'lat', FILTER_VALIDATE_FLOAT);
$lon = filter_input(INPUT_GET, 'lon', FILTER_VALIDATE_FLOAT);
$type = $_GET['type'] ?? 'weather';

if ($lat === false || $lat === null || $lon === false || $lon === null) {
    sendJson(400, ['error' => 'Coordonnees invalides.']);
}

// Spot Paddle couvre le Québec; cette limite réduit l'utilisation abusive du relais.
if ($lat < 44.5 || $lat > 62.6 || $lon < -79.8 || $lon > -57.0) {
    sendJson(400, ['error' => 'Coordonnees hors de la zone couverte.']);
}

if (!in_array($type, ['weather', 'forecast'], true)) {
    sendJson(400, ['error' => 'Type de prevision invalide.']);
}

$apiKey = trim((string) getenv('OPENWEATHER_API_KEY'));
if ($apiKey === '') {
    sendJson(503, ['error' => 'Service meteo non configure.']);
}

$endpoint = $type;
$ttl = $endpoint === 'forecast' ? 1800 : 600;
$storageDir = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'spotpaddle-weather';

if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0750, true);
}

$rate = consumeRateLimit($storageDir, 120, 600);
header('X-RateLimit-Limit: 120');
header('X-RateLimit-Remaining: ' . $rate['remaining']);

if (!$rate['allowed']) {
    header('Retry-After: ' . $rate['retryAfter']);
    sendJson(429, ['error' => 'Trop de requetes. Reessayez plus tard.']);
}

header('Cache-Control: public, max-age=' . $ttl . ', stale-while-revalidate=60');

$cacheKey = hash('sha256', $endpoint . ':' . round($lat, 4) . ':' . round($lon, 4));
$cacheFile = $storageDir . DIRECTORY_SEPARATOR . 'weather-' . $cacheKey . '.json';

if (is_readable($cacheFile) && (time() - filemtime($cacheFile)) < $ttl) {
    $cachedResponse = @file_get_contents($cacheFile);
    if ($cachedResponse !== false && json_decode($cachedResponse, true) !== null) {
        header('X-SpotPaddle-Cache: HIT');
        echo $cachedResponse;
        exit;
    }
}

$url = sprintf(
    'https://api.openweathermap.org/data/2.5/%s?lat=%s&lon=%s&appid=%s&units=metric&lang=fr',
    rawurlencode($endpoint),
    rawurlencode((string) $lat),
    rawurlencode((string) $lon),
    rawurlencode($apiKey)
);

$context = stream_context_create([
    'http' => [
        'timeout' => 4,
        'ignore_errors' => true,
        'header' => "Accept: application/json\r\n"
    ]
]);

$response = @file_get_contents($url, false, $context);
$statusCode = 0;

if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $matches)) {
    $statusCode = (int) $matches[1];
}

$decodedResponse = $response !== false ? json_decode($response, true) : null;
$upstreamCode = is_array($decodedResponse) ? (int) ($decodedResponse['cod'] ?? 0) : 0;

if ($response === false || $statusCode < 200 || $statusCode >= 300 || $upstreamCode !== 200) {
    sendJson(502, ['error' => 'Service meteo temporairement indisponible.']);
}

if (is_dir($storageDir) && is_writable($storageDir)) {
    @file_put_contents($cacheFile, $response, LOCK_EX);
}

header('X-SpotPaddle-Cache: MISS');
echo $response;
