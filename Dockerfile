FROM php:8.2-apache

# Active le module rewrite d'Apache (souvent utile)
RUN a2enmod rewrite

# Copie tous vos fichiers dans le dossier web d'Apache
COPY . /var/www/html/

# S'assure que les droits sont corrects pour l'utilisateur www-data (Apache)
RUN chown -R www-data:www-data /var/www/html