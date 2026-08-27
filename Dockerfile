FROM php:8.2-apache

# Active les modules utiles: réécriture, cache headers et compression texte.
RUN a2enmod rewrite headers deflate \
    && if [ -e /etc/apache2/mods-available/brotli.load ]; then a2enmod brotli; fi

# Copie tous vos fichiers dans le dossier web d'Apache
COPY . /var/www/html/
COPY apache-spotpaddle.conf /etc/apache2/conf-available/spotpaddle.conf
COPY spotpaddle.ini /usr/local/etc/php/conf.d/spotpaddle.ini

# Configure les headers de cache/compression et évite l'avertissement ServerName.
RUN a2enconf spotpaddle

# S'assure que les droits sont corrects pour l'utilisateur www-data (Apache)
RUN chown -R www-data:www-data /var/www/html
