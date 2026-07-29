<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('Vary: Origin');

const HYDRO_STATIONS = [
    '01BD004' => [
        'name' => 'Lac Matapédia à Val-Brillant',
        'waterbody' => 'Lac Matapédia'
    ],
    '01BG002' => [
        'name' => 'Rivière Bonaventure en amont du pont',
        'waterbody' => 'Rivière Bonaventure'
    ]
];

function sendHydroJson(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function isHydroOriginAllowed(string $origin): bool
{
    if (in_array($origin, [
        'https://spotpaddle.ca',
        'https://www.spotpaddle.ca',
        'https://hartissine.github.io'
    ], true)) {
        return true;
    }

    return preg_match('#^https?://(?:localhost|127\.0\.0\.1)(?::\d{1,5})?$#', $origin) === 1;
}

function parseUpstreamStatus(array $headers): int
{
    if (isset($headers[0]) && preg_match('/\s(\d{3})\s/', $headers[0], $matches)) {
        return (int) $matches[1];
    }

    return 0;
}

function unavailablePayload(string $stationNumber, array $station, string $reason): array
{
    return [
        'status' => 'ok',
        'available' => false,
        'station' => [
            'number' => $stationNumber,
            'name' => $station['name'],
            'waterbody' => $station['waterbody']
        ],
        'reason' => $reason,
        'source' => 'Environnement et Changement climatique Canada'
    ];
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    if (!isHydroOriginAllowed($origin)) {
        sendHydroJson(403, ['error' => 'Origine non autorisée.']);
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
    sendHydroJson(405, ['error' => 'Méthode non autorisée.']);
}

$stationNumber = strtoupper(trim((string) ($_GET['station'] ?? '')));
if (!isset(HYDRO_STATIONS[$stationNumber])) {
    sendHydroJson(400, ['error' => 'Station hydrométrique non autorisée.']);
}

$station = HYDRO_STATIONS[$stationNumber];
$ttl = 900;
$storageDir = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'spotpaddle-hydro';
$cacheFile = $storageDir . DIRECTORY_SEPARATOR . 'hydro-' . $stationNumber . '.json';

if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0750, true);
}

header('Cache-Control: public, max-age=' . $ttl . ', stale-while-revalidate=300');

if (is_readable($cacheFile) && (time() - filemtime($cacheFile)) < $ttl) {
    $cached = @file_get_contents($cacheFile);
    if ($cached !== false && json_decode($cached, true) !== null) {
        header('X-SpotPaddle-Cache: HIT');
        echo $cached;
        exit;
    }
}

$start = gmdate('Y-m-d\TH:i:s\Z', time() - 30 * 3600);
$end = gmdate('Y-m-d\TH:i:s\Z');
$url = 'https://api.weather.gc.ca/collections/hydrometric-realtime/items?' . http_build_query([
    'STATION_NUMBER' => $stationNumber,
    'datetime' => $start . '/' . $end,
    'limit' => 250,
    'f' => 'json'
], '', '&', PHP_QUERY_RFC3986);

$context = stream_context_create([
    'http' => [
        'timeout' => 7,
        'ignore_errors' => true,
        'header' => "Accept: application/geo+json, application/json\r\nUser-Agent: SpotPaddle/1.0\r\n"
    ]
]);

$response = @file_get_contents($url, false, $context);
$responseHeaders = $http_response_header ?? [];
$statusCode = parseUpstreamStatus($responseHeaders);
$decoded = $response !== false ? json_decode($response, true) : null;

if ($response === false || $statusCode < 200 || $statusCode >= 300 || !is_array($decoded)) {
    sendHydroJson(502, ['error' => 'Données hydrométriques temporairement indisponibles.']);
}

$observations = [];
foreach (($decoded['features'] ?? []) as $feature) {
    $properties = $feature['properties'] ?? [];
    $observedAt = (string) ($properties['DATETIME'] ?? '');
    if ($observedAt === '') {
        continue;
    }

    $observations[] = [
        'observedAt' => $observedAt,
        'level' => is_numeric($properties['LEVEL'] ?? null) ? (float) $properties['LEVEL'] : null,
        'discharge' => is_numeric($properties['DISCHARGE'] ?? null) ? (float) $properties['DISCHARGE'] : null,
        'stationName' => trim((string) ($properties['STATION_NAME'] ?? $station['name']))
    ];
}

usort($observations, static fn (array $a, array $b): int => strcmp($b['observedAt'], $a['observedAt']));

if ($observations === []) {
    $payload = unavailablePayload($stationNumber, $station, 'Aucune mesure récente transmise par cette station.');
} else {
    $latest = $observations[0];
    $oldest = $observations[count($observations) - 1];
    $metric = $latest['level'] !== null ? 'level' : 'discharge';
    $latestValue = $latest[$metric];
    $oldestValue = $oldest[$metric];
    $change = $latestValue !== null && $oldestValue !== null ? $latestValue - $oldestValue : null;
    $trend = 'unknown';

    if ($change !== null) {
        $threshold = $metric === 'level' ? 0.02 : max(0.2, abs($oldestValue) * 0.03);
        $trend = abs($change) < $threshold ? 'stable' : ($change > 0 ? 'rising' : 'falling');
    }

    $payload = [
        'status' => 'ok',
        'available' => true,
        'station' => [
            'number' => $stationNumber,
            'name' => $latest['stationName'] ?: $station['name'],
            'waterbody' => $station['waterbody']
        ],
        'measurement' => [
            'level' => $latest['level'],
            'discharge' => $latest['discharge'],
            'observed_at' => $latest['observedAt'],
            'trend' => $trend,
            'change_period_hours' => round((strtotime($latest['observedAt']) - strtotime($oldest['observedAt'])) / 3600, 1),
            'level_change' => $metric === 'level' ? $change : null,
            'discharge_change' => $metric === 'discharge' ? $change : null
        ],
        'provisional' => true,
        'source' => 'Environnement et Changement climatique Canada',
        'source_url' => 'https://eau.ec.gc.ca/report/real_time_f.html?stn=' . rawurlencode($stationNumber)
    ];
}

$encodedPayload = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
if (is_dir($storageDir) && is_writable($storageDir)) {
    @file_put_contents($cacheFile, $encodedPayload, LOCK_EX);
}

header('X-SpotPaddle-Cache: MISS');
echo $encodedPayload;
