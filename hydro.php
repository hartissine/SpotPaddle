<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('Vary: Origin');
header('X-SpotPaddle-Hydro-Version: 4');

const MSP_RESOURCE_ID = 'a85767fc-4533-403c-9485-503638339181';
const MSP_API_URL = 'https://www.donneesquebec.ca/recherche/api/3/action/datastore_search';
const HYDRO_STATIONS = [
    '01BD004' => 'Lac Matapédia',
    '01BG002' => 'Rivière Bonaventure',
    '02OE012' => 'Lac Memphrémagog',
    '02OA003' => 'Rivière des Mille Îles',
    '02OA016' => 'Fleuve Saint-Laurent',
    '02OA039' => 'Lac Saint-Louis',
    '02NG019' => 'Lac des Piles'
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

function hydroHttpContext(): mixed
{
    return stream_context_create([
        'http' => [
            'timeout' => 8,
            'ignore_errors' => true,
            'header' => "Accept: application/json\r\nUser-Agent: SpotPaddle/1.0\r\n"
        ]
    ]);
}

function normalizeWaterbody(string $value): string
{
    $value = trim($value);
    if (class_exists('Transliterator')) {
        $transliterator = Transliterator::create('NFD; [:Nonspacing Mark:] Remove; NFC');
        if ($transliterator !== null) {
            $value = $transliterator->transliterate($value);
        }
    } else {
        $converted = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $value);
        if ($converted !== false) {
            $value = $converted;
        }
    }
    $value = strtolower($value);
    return preg_replace('/[^a-z0-9]+/u', '', $value) ?? '';
}

function fetchMspRecords(string $query, mixed $context): ?array
{
    $url = MSP_API_URL . '?' . http_build_query([
        'resource_id' => MSP_RESOURCE_ID,
        'q' => $query,
        'limit' => 25
    ], '', '&', PHP_QUERY_RFC3986);
    $response = @file_get_contents($url, false, $context);
    $headers = $http_response_header ?? [];
    $status = parseUpstreamStatus($headers);
    $decoded = $response !== false ? json_decode($response, true) : null;

    if ($status < 200 || $status >= 300 || !is_array($decoded) || ($decoded['success'] ?? false) !== true) {
        return null;
    }
    return is_array($decoded['result']['records'] ?? null) ? $decoded['result']['records'] : [];
}

function selectMspStation(array $records, string $stationNumber, string $waterbody): ?array
{
    $targetWaterbody = normalizeWaterbody($waterbody);
    foreach ($records as $record) {
        if ($stationNumber !== '' && strcasecmp(trim((string) ($record['station'] ?? '')), $stationNumber) === 0) {
            return $record;
        }
        if ($stationNumber === ''
            && $targetWaterbody !== ''
            && normalizeWaterbody((string) ($record['plan_deau'] ?? '')) === $targetWaterbody) {
            return $record;
        }
    }
    return null;
}

function parseMspUtcDate(string $value): ?string
{
    $date = DateTimeImmutable::createFromFormat('!Y/m/d H:i:s', trim($value), new DateTimeZone('UTC'));
    return $date instanceof DateTimeImmutable ? $date->format(DateTimeInterface::ATOM) : null;
}

function fetchEcccCollection(string $collection, array $parameters, mixed $context): ?array
{
    $url = 'https://api.weather.gc.ca/collections/' . $collection . '/items?' . http_build_query(
        $parameters + ['f' => 'json'],
        '',
        '&',
        PHP_QUERY_RFC3986
    );
    $response = @file_get_contents($url, false, $context);
    $headers = $http_response_header ?? [];
    $status = parseUpstreamStatus($headers);
    $decoded = $response !== false ? json_decode($response, true) : null;
    return $status >= 200 && $status < 300 && is_array($decoded) ? $decoded : null;
}

function fetchEcccPayload(string $stationNumber, string $waterbody, mixed $context): ?array
{
    $start = gmdate('Y-m-d\TH:i:s\Z', time() - 30 * 3600);
    $end = gmdate('Y-m-d\TH:i:s\Z');
    $decoded = fetchEcccCollection('hydrometric-realtime', [
        'STATION_NUMBER' => $stationNumber,
        'datetime' => $start . '/' . $end,
        'limit' => 250,
        'sortby' => '-DATETIME'
    ], $context);
    $observations = [];
    foreach (($decoded['features'] ?? []) as $feature) {
        $properties = $feature['properties'] ?? [];
        if (empty($properties['DATETIME'])) {
            continue;
        }
        $observations[] = [
            'observedAt' => (string) $properties['DATETIME'],
            'level' => is_numeric($properties['LEVEL'] ?? null) ? (float) $properties['LEVEL'] : null,
            'discharge' => is_numeric($properties['DISCHARGE'] ?? null) ? (float) $properties['DISCHARGE'] : null,
            'name' => trim((string) ($properties['STATION_NAME'] ?? $waterbody))
        ];
    }
    usort($observations, static fn (array $a, array $b): int => strcmp($b['observedAt'], $a['observedAt']));

    $dataType = 'realtime';
    if ($observations === []) {
        $history = fetchEcccCollection('hydrometric-daily-mean', [
            'STATION_NUMBER' => $stationNumber,
            'limit' => 100,
            'sortby' => '-DATE'
        ], $context);
        foreach (($history['features'] ?? []) as $feature) {
            $properties = $feature['properties'] ?? [];
            $level = is_numeric($properties['LEVEL'] ?? null) ? (float) $properties['LEVEL'] : null;
            $discharge = is_numeric($properties['DISCHARGE'] ?? null) ? (float) $properties['DISCHARGE'] : null;
            if (($level !== null || $discharge !== null) && !empty($properties['DATE'])) {
                $observations[] = [
                    'observedAt' => (string) $properties['DATE'],
                    'level' => $level,
                    'discharge' => $discharge,
                    'name' => trim((string) ($properties['STATION_NAME'] ?? $waterbody))
                ];
                $dataType = 'historical';
                break;
            }
        }
    }
    if ($observations === []) {
        return null;
    }

    $latest = $observations[0];
    $trend = 'unknown';
    $levelChange = null;
    $dischargeChange = null;
    $period = null;
    if ($dataType === 'realtime' && count($observations) > 1) {
        $oldest = $observations[count($observations) - 1];
        $metric = $latest['level'] !== null ? 'level' : 'discharge';
        if ($latest[$metric] !== null && $oldest[$metric] !== null) {
            $change = $latest[$metric] - $oldest[$metric];
            $threshold = $metric === 'level' ? 0.02 : max(0.2, abs($oldest[$metric]) * 0.03);
            $trend = abs($change) < $threshold ? 'stable' : ($change > 0 ? 'rising' : 'falling');
            $levelChange = $metric === 'level' ? $change : null;
            $dischargeChange = $metric === 'discharge' ? $change : null;
            $period = round((strtotime($latest['observedAt']) - strtotime($oldest['observedAt'])) / 3600, 1);
        }
    }

    return [
        'status' => 'ok',
        'available' => true,
        'data_type' => $dataType,
        'station' => [
            'number' => $stationNumber,
            'name' => $latest['name'],
            'waterbody' => $waterbody,
            'association' => 'exact'
        ],
        'measurement' => [
            'level' => $latest['level'],
            'discharge' => $latest['discharge'],
            'observed_at' => $latest['observedAt'],
            'trend' => $trend,
            'change_period_hours' => $period,
            'level_change' => $levelChange,
            'discharge_change' => $dischargeChange
        ],
        'provisional' => $dataType === 'realtime',
        'source' => 'Environnement et Changement climatique Canada',
        'source_url' => $dataType === 'realtime'
            ? 'https://eau.ec.gc.ca/report/real_time_f.html?stn=' . rawurlencode($stationNumber)
            : 'https://eau.ec.gc.ca/report/historical_f.html?stn=' . rawurlencode($stationNumber)
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
$requestedWaterbody = trim((string) ($_GET['waterbody'] ?? ''));
if ($stationNumber !== '') {
    if (!isset(HYDRO_STATIONS[$stationNumber])) {
        sendHydroJson(400, ['error' => 'Station hydrométrique non autorisée.']);
    }
    $waterbody = HYDRO_STATIONS[$stationNumber];
    $query = $stationNumber;
} else {
    $waterbody = preg_replace('/\s*\([^)]*\)\s*$/u', '', $requestedWaterbody) ?? '';
    $waterbody = trim($waterbody);
    if ($waterbody === '' || strlen($waterbody) > 160) {
        sendHydroJson(400, ['error' => 'Nom du plan d’eau invalide.']);
    }
    $query = $waterbody;
}

$ttl = 900;
$cacheKey = $stationNumber !== '' ? $stationNumber : normalizeWaterbody($waterbody);
$storageDir = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'spotpaddle-hydro-v3';
$cacheFile = $storageDir . DIRECTORY_SEPARATOR . 'hydro-' . hash('sha256', $cacheKey) . '.json';
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

$context = hydroHttpContext();
$records = fetchMspRecords($query, $context);
if ($records === null) {
    if ($stationNumber !== '') {
        $fallbackPayload = fetchEcccPayload($stationNumber, $waterbody, $context);
        if ($fallbackPayload !== null) {
            sendHydroJson(200, $fallbackPayload);
        }
    }
    sendHydroJson(502, ['error' => 'Les services hydrométriques officiels sont temporairement indisponibles.']);
}

$record = selectMspStation($records, $stationNumber, $waterbody);
if ($record === null) {
    $payload = $stationNumber !== '' ? fetchEcccPayload($stationNumber, $waterbody, $context) : null;
    if ($payload === null) {
        $payload = [
            'status' => 'ok',
            'available' => false,
            'reason' => 'Aucune station officielle ne mesure directement ce plan d’eau.',
            'source' => 'Vigilance — Ministère de la Sécurité publique du Québec',
            'source_url' => 'https://vigilance.geo.msp.gouv.qc.ca/'
        ];
    }
} else {
    $level = is_numeric($record['dern_valeur_niv'] ?? null) ? (float) $record['dern_valeur_niv'] : null;
    $discharge = is_numeric($record['dern_valeur_deb'] ?? null) ? (float) $record['dern_valeur_deb'] : null;
    $observedAt = parseMspUtcDate((string) ($record['dern_date_prise_valeur_utc'] ?? ''));
    $disabled = normalizeWaterbody((string) ($record['etat'] ?? '')) === 'desactivee';

    if (($level === null && $discharge === null) || $observedAt === null || $disabled) {
        $payload = $stationNumber !== '' ? fetchEcccPayload($stationNumber, $waterbody, $context) : null;
        if ($payload === null) {
            $payload = [
                'status' => 'ok',
                'available' => false,
                'reason' => 'Cette station officielle ne transmet actuellement aucune mesure utilisable.',
                'source' => 'Vigilance — Ministère de la Sécurité publique du Québec',
                'source_url' => (string) ($record['url_vigilance'] ?? 'https://vigilance.geo.msp.gouv.qc.ca/')
            ];
        }
    } else {
        $payload = [
            'status' => 'ok',
            'available' => true,
            'data_type' => 'latest',
            'station' => [
                'number' => (string) ($record['station'] ?? ''),
                'name' => trim((string) ($record['plan_deau'] ?? $waterbody) . ' ' . (string) ($record['description'] ?? '')),
                'waterbody' => (string) ($record['plan_deau'] ?? $waterbody),
                'association' => 'exact'
            ],
            'measurement' => [
                'level' => $level,
                'discharge' => $discharge,
                'observed_at' => $observedAt,
                'trend' => 'unknown',
                'change_period_hours' => null,
                'level_change' => null,
                'discharge_change' => null
            ],
            'state' => (string) ($record['etat'] ?? ''),
            'provisional' => true,
            'source' => 'Vigilance — Ministère de la Sécurité publique du Québec',
            'source_url' => (string) ($record['url_vigilance'] ?? $record['fournisseur_url'] ?? 'https://vigilance.geo.msp.gouv.qc.ca/')
        ];
    }
}

$encodedPayload = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
if (is_dir($storageDir) && is_writable($storageDir)) {
    @file_put_contents($cacheFile, $encodedPayload, LOCK_EX);
}
header('X-SpotPaddle-Cache: MISS');
echo $encodedPayload;
