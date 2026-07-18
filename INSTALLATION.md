# 🚀 Spot Paddle - Guide d'Installation & Test

## 📥 Installation Rapide

### Prérequis
- Un navigateur moderne (Chrome, Firefox, Safari, Edge)
- Un serveur web local (Python, Node.js, ou VS Code Live Server)
- Une connexion Internet (pour OpenWeatherMap API et cartes)

### Étapes

#### 1. **Télécharger les fichiers**
```bash
git clone https://github.com/spotpaddle/site.git
cd projet-mauricie
```

#### 2. **Lancer un serveur local**

**Option A: Python (3.x)**
```bash
python -m http.server 8000
# Puis visitez: http://localhost:8000
```

**Option B: Python (2.x)**
```bash
python -m SimpleHTTPServer 8000
```

**Option C: Node.js (http-server)**
```bash
npx http-server -p 8000
```

**Option D: VS Code Live Server**
- Installer l'extension "Live Server" (Ritwick Dey)
- Clic droit sur `index.html` → "Open with Live Server"
- Ouvre automatiquement http://127.0.0.1:5500

#### 3. **Tester les fonctionnalités**

### 🧪 Checklist de Test

#### Page d'Accueil
- [ ] Logo "🚣 Spot Paddle" visible
- [ ] 3 cartes de lacs avec badges Paddle Score (🟢 88, 85, 75)
- [ ] Bouton "Trouver mes 2 Spots" fonctionne (clique → modal)
- [ ] Liens vers pages individuelles (lac.html?lake=...)
- [ ] Boutons navigation secondaires visibles
- [ ] Mode sombre/clair toggle fonctionne

#### Pages Individuelles (lac.html?lake=...)
- [ ] Image hero avec Paddle Score™ gros
- [ ] Galerie photos fonctionnelle (flèches/clics)
- [ ] Carte interactive Leaflet chargée
- [ ] Conditions météo affichées (temp/vent/humidité)
- [ ] FAQs déroulantes
- [ ] Section "Lacs proches" en bas à droite
- [ ] Boutons "Me diriger" et "Partager" actifs

#### Carte Interactive
- [ ] Filtres par région, difficulté, type
- [ ] Filtres par "Accès gratuit" toggle
- [ ] Épingles pour chaque lac
- [ ] Popup affichant nom + région
- [ ] Bouton 📍 pour localisation (demande permission)
- [ ] Bouton 🔄 pour réinitialiser vue

#### Géolocalisation
- [ ] Clic "Trouver mes 2 Spots" → demande permission
- [ ] Après permission → modal affiche 2 lacs proches
- [ ] Distances calculées correctement

#### Mode Sombre
- [ ] Toggle 🌙 en haut à droite
- [ ] Couleurs sombres appliquées
- [ ] Contraste acceptable
- [ ] Toggle persiste après reload

---

## 🐛 Dépannage

### "Fetch API Error" ou "CORS Error"
**Problème:** L'API OpenWeatherMap ne charge pas  
**Solution:** 
- Vérifier la connexion Internet
- Vérifier que `https://meteo.spotpaddle.ca/meteo.php` répond
- Vérifier que la variable serveur `OPENWEATHER_API_KEY` est configurée sur l'hébergement PHP
- Ne jamais placer la clé OpenWeather dans `script.js`, `lac.html`, GitHub ou un fichier public

### Géolocalisation ne fonctionne pas
**Problème:** Permission refusée ou navigateur sans geolocation  
**Solution:**
- Safari/iOS: Préférences → Confidentialité → Localisation → Autoriser
- Firefox: about:preferences → Confidentialité → Permissions → Localisation
- Simuler en console: 
```javascript
// Fake geolocation pour test
navigator.geolocation.getCurrentPosition = function(ok) {
    ok({coords: {latitude: 46.8, longitude: -71.5}});
};
```

### Images floutées ou non chargées
**Problème:** URLs Unsplash bloquées  
**Solution:** C'est normal en offline, tester avec serveur local

### Paddle Score™ pas calculé
**Problème:** Les scores n'apparaissent pas  
**Solution:**
- Vérifier que `data.js` charge (Devtools → Network)
- Vérifier la console pour les erreurs (F12 → Console)

---

## 📊 Données de Test

### Lacs/Spots Disponibles

| Lac | Région | Slug | Paddle Score |
|-----|--------|------|--------------|
| Lac des Piles | Mauricie | `lac-des-piles` | 88 |
| Wapizagonke | Mauricie | `parc-national-wapizagonke` | 85 |
| St-Maurice (TR) | Mauricie | `riviere-st-maurice` | 75 |
| Lac à la Tortue | Mauricie | `lac-a-la-tortue` | 78 |
| Sacacomie | Mauricie | `lac-sacacomie` | 82 |
| Lac Saint-Pierre | Mauricie | `lac-saint-pierre` | 65 |
| Lac Taureau | Mauricie | `lac-taureau` | 79 |
| Maskinongé | Mauricie | `lac-maskinonge` | 76 |
| Lac-aux-Sables | Mauricie | `lac-aux-sables` | 74 |
| Lac Édouard | Mauricie | `parc-national-lac-edouard` | 81 |
| ... | Autres régions | ... | ... |

### Liens de Test

```
http://localhost:8000/
http://localhost:8000/lac.html?lake=lac-des-piles
http://localhost:8000/lac.html?lake=lac-sacacomie
http://localhost:8000/lac.html?lake=riviere-st-maurice
```

---

## 🔍 Console JavaScript pour Tests Avancés

### Tester Paddle Score™
```javascript
// Simulation données météo
const weather = {temp: 15, wind: 12, rain: 30, waves: 0.8};
const score = calculatePaddleScore(weather, 78);
console.log(`Score: ${score}/100`);
getPaddleScoreBadge(score); // Voir couleur
```

### Tester Géolocalisation Manuelle
```javascript
// Exemple: Montréal
const userLat = 45.5, userLon = -73.6;
const nearest = getNearestLakes(userLat, userLon);
console.table(nearest);
```

### Vérifier Données
```javascript
// Affacher tous les lacs
console.table(lacDatabase.map(l => ({
    name: l.name,
    region: l.region,
    score: l.paddleScore,
    difficulty: l.difficulty
})));
```

---

## 📈 Performance

### Chargement
- Initial: ~500ms (dépend de la vitesse réseau)
- Avec cache: ~100ms
- API Météo: ~500-1000ms par appel

### Optimisations
- Images optimisées (Unsplash resize)
- CSS Tailwind compilé et minifié localement dans `assets/tailwind.css`
- Lazy loading des images
- Debounce des appels API

Après une modification des classes HTML ou JavaScript:

```bash
npm install
npm run build:css
```

---

## 🌍 Déploiement en Production

### Hébergement Recommandé
1. **Netlify** (gratuit, autodeploy depuis Git)
2. **Vercel** (idéal pour Next.js, gratuit)
3. **GitHub Pages** (statique gratuit)
4. **AWS S3 + CloudFront** (scalable)

### DNS: spotpaddle.ca
- Pointer A record vers votre hébergement
- HTTPS automatique recommandé

### Configuration sécurisée de la météo

Le site public appelle uniquement `https://meteo.spotpaddle.ca/meteo.php`. La clé OpenWeather doit rester sur ce serveur PHP et être fournie par une variable d'environnement:

```text
OPENWEATHER_API_KEY=votre_nouvelle_cle
```

- Configurez cette variable dans le panneau de l'hébergeur, Apache, PHP-FPM ou le conteneur.
- Avec Docker: transmettez-la au démarrage avec `--env OPENWEATHER_API_KEY=...`; ne l'inscrivez pas dans l'image.
- Le relais accepte `spotpaddle.ca`, `www.spotpaddle.ca`, `hartissine.github.io`, `localhost` et `127.0.0.1`.
- Si le domaine change, mettez à jour la liste `allowedOrigins` dans `meteo.php`.
- Le relais reconnaît l'adresse réelle des visiteurs transmise par Cloudflare. Pour empêcher l'usurpation de cet en-tête, limitez idéalement l'accès direct au serveur d'origine aux adresses IP de Cloudflare.
- Comme l'ancienne clé a déjà été publiée dans Git, créez une nouvelle clé, configurez-la sur l'hébergement, déployez et testez le relais sécurisé, puis désactivez l'ancienne clé. Cet ordre évite une interruption météo.

GitHub Pages ne peut pas exécuter PHP. Le sous-domaine `meteo.spotpaddle.ca` doit donc rester sur un hébergement PHP séparé.

### Health check Render

Configurez le chemin de vérification du service météo Render sur:

```text
/health.php
```

Ce point de contrôle retourne `200` si PHP répond et si `OPENWEATHER_API_KEY` est disponible au runtime. Il retourne `503` si la clé manque. Il ne contacte pas OpenWeather afin d'éviter de consommer le quota API à chaque health check.

### Checklist Déploiement
Voir aussi `PRODUCTION_CHECKLIST.md` pour la checklist courte à utiliser après chaque mise en ligne.

- [ ] Retirer console.log() de debug
- [ ] Tester tous les liens
- [ ] Vérifier HTTPS
- [ ] Configurer `OPENWEATHER_API_KEY` sur le serveur météo
- [ ] Configurer le health check Render sur `/health.php`
- [ ] Lancer `node scripts/generate-sitemap.js` après ajout/modification de spots
- [ ] Lancer `node scripts/smoke-check.js` après déploiement
- [ ] Vérifier que la clé OpenWeather n'apparaît dans aucun fichier suivi par Git
- [ ] Analytics (Google Analytics, Fathom)
- [x] Sitemaps XML pour SEO
- [x] robots.txt
- [ ] Favicons (logo.png, logo.ico)

---

## 📝 Notes

- **Géolocalisation** fonctionne sur HTTP localhost et HTTPS uniquement
- **OpenWeatherMap Free API** limité à ~60 appels/min
- **Photos** utilise Unsplash (peuvent être lentes selon région)
- **Leaflet** permet déplacement/zoom sur cartes
- **Paddle Score™** recalculé à chaque chargement (conditions réelles)

---

## 📞 Support

Pour tout problème:
1. Vérifier la console (F12 → Console)
2. Vérifier Network tab pour erreurs API
3. Tester sur un autre navigateur
4. Effacer cache (Ctrl+Shift+Delete ou Cmd+Shift+Delete)

---

**Prêt à tester? Lancez le serveur et navigez vers http://localhost:8000 !** 🚣
