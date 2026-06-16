<?php
// meteo.php - À placer à la racine de ton site
header('Content-Type: application/json');

// Récupérer les paramètres passés par ton frontend
$lat = $_GET['lat'] ?? '';
$lon = $_GET['lon'] ?? '';

// Ta clé API reste cachée sur le serveur !
$apiKey = "b5d51e383a9219e83fa41ab4f6776e06"; 

// Construire l'URL sécurisée
$url = "https://api.openweathermap.org/data/2.5/weather?lat={$lat}&lon={$lon}&appid={$apiKey}&units=metric&lang=fr";

// Faire l'appel depuis le serveur et renvoyer au frontend
$response = file_get_contents($url);
echo $response;
?>