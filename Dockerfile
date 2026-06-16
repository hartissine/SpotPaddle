# Utilise une image PHP officielle avec Apache
FROM php:8.2-apache

# Copie votre fichier meteo.php dans le dossier web du serveur
COPY meteo.php /var/www/html/meteo.php

# Donne les bonnes permissions
RUN chown -R www-data:www-data /var/www/html