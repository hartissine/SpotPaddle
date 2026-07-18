<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function sendHealthJson(int $statusCode, array $payload): void
{
    http_response_code($statusCode);

    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'HEAD') {
        echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    exit;
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if (!in_array($method, ['GET', 'HEAD'], true)) {
    header('Allow: GET, HEAD');
    sendHealthJson(405, [
        'status' => 'error',
        'service' => 'spotpaddle-weather',
        'error' => 'Methode non autorisee.',
        'timestamp' => gmdate('c')
    ]);
}

$hasOpenWeatherKey = trim((string) getenv('OPENWEATHER_API_KEY')) !== '';
$checks = [
    'php' => true,
    'openweather_api_key' => $hasOpenWeatherKey
];

sendHealthJson($hasOpenWeatherKey ? 200 : 503, [
    'status' => $hasOpenWeatherKey ? 'ok' : 'unhealthy',
    'service' => 'spotpaddle-weather',
    'checks' => $checks,
    'timestamp' => gmdate('c')
]);
