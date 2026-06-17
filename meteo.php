<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); // Indispensable pour que votre site GitHub puisse lire ce fichier

$lat = $_GET['lat'] ?? null;
$lon = $_GET['lon'] ?? null;
$type = $_GET['type'] ?? 'weather'; // Permet de gérer la météo actuelle ou les prévisions

if (empty($lat) || empty($lon)) {
    http_response_code(400);
    echo json_encode(["error" => "Coordonnées manquantes."]);
    exit;
}

$apiKey = "b5d51e383a9219e83fa41ab4f6776e06";
$endpoint = ($type === 'forecast') ? 'forecast' : 'weather';
$url = "https://api.openweathermap.org/data/2.5/{$endpoint}?lat={$lat}&lon={$lon}&appid={$apiKey}&units=metric&lang=fr";

$response = @file_get_contents($url);

if ($response === false) {
    http_response_code(500);
    echo json_encode(["error" => "Erreur API météo."]);
} else {
    echo $response;
}
?>