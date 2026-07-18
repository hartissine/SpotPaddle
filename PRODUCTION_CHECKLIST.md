# Spot Paddle - Checklist production

Cette checklist sert avant et après chaque déploiement public.

## 1. Météo et santé du service

- `https://meteo.spotpaddle.ca/health.php` retourne `status: ok`.
- `https://meteo.spotpaddle.ca/meteo.php?lat=48.47962&lon=-71.79344` retourne un JSON OpenWeather avec `cod: 200`.
- Dans Render, le `Health Check Path` du service météo est `/health.php`.
- `OPENWEATHER_API_KEY` est configurée dans Render et n'apparaît dans aucun fichier public.

## 2. Smoke test rapide

Après déploiement, lancer:

```bash
node scripts/smoke-check.js
```

Le résultat attendu est:

```text
[OK] Site home
[OK] Weather health
[OK] Weather API
```

## 3. SEO

- `sitemap.xml` contient les pages principales et toutes les fiches de spots.
- `sitemap.xml` ne contient pas d'URL avec redirection, comme `/index.html`.
- `robots.txt` pointe vers `https://spotpaddle.ca/sitemap.xml`.
- `site.webmanifest`, les icones et `assets/spotpaddle-social.jpg` sont accessibles apres deploiement.
- Les apercus de partage utilisent une image locale `https://spotpaddle.ca/assets/spotpaddle-social.jpg`.
- Après ajout ou modification de spots, lancer:

```bash
node scripts/generate-sitemap.js
```

- Soumettre `https://spotpaddle.ca/sitemap.xml` dans Google Search Console.
- Dans Google Search Console, cliquer sur "Valider la correction" pour les problèmes "Page avec redirection" et "Bloquée par le fichier robots.txt" après déploiement.

## 4. Mobile

- Ouvrir la carte sur téléphone.
- Cliquer un spot.
- Vérifier que la fiche mobile du spot s'affiche au complet.
- Vérifier que filtres, zoom, localisation et mode carte ne cachent plus les détails.
- Vérifier que le bouton de fermeture fonctionne.

## 5. Performance à surveiller

- La vidéo `mixkit-Lac.mp4` pèse environ 15 MB. Elle charge sur Wi-Fi/ethernet quand le navigateur expose l'information réseau; sur données mobiles, économiseur de données, réduction d'animations ou réseau inconnu sur mobile, le poster local reste affiché.
- Le service Docker/Apache active la compression gzip et des headers de cache pour les assets statiques.
- Tailwind est servi localement via `assets/tailwind.css`; après modification des classes HTML/JS, lancer `npm run build:css`.
- Leaflet est servi localement via `assets/vendor/leaflet`; après une mise à jour npm de Leaflet, lancer `npm run vendor:leaflet`.
- `data.js` et `script.js` sont servis en production via `assets/data.min.js` et `assets/script.min.js`; après modification, lancer `npm run build`.
- Prochain chantier possible: découper `data.js` par région ou charger les fiches de spots à la demande.

## 6. Données

- Vérifier les nouveaux spots avec un accès réel: plage, quai, marina, rampe ou stationnement.
- Garder les statuts GPS à jour: confirmé, moyen, ou à vérifier.
- Revalider les tarifs saisonniers avant la haute saison.
