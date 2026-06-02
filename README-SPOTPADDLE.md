# 🚣 Spot Paddle - Guide Complet

**Version:** 2.0 avec Paddle Score™ et Pages Individuelles  
**Domaine:** spotpaddle.ca  
**Date:** Juin 2026

---

## 📋 Table des Matières

1. [Présentation](#présentation)
2. [Nouvelles Fonctionnalités](#nouvelles-fonctionnalités)
3. [Architecture](#architecture)
4. [Guide d'Utilisation](#guide-dutilisation)
5. [Fichiers Clés](#fichiers-clés)

---

## 🎯 Présentation

**Spot Paddle** est une plateforme complète pour les passionnés de paddle au Québec. Elle combine:

- 🟢 **Paddle Score™** : Évaluation en temps réel des conditions (vent, pluie, température, vagues)
- 📍 **Localisation intelligente** : Les 2 spots les plus proches de votre position GPS
- 🗺️ **Pages détaillées par lac** : Description complète, FAQs, galeries, carte interactive
- 🌤️ **Conditions météo** : Prévisions en direct via OpenWeatherMap
- ⚖️ **Guides de sécurité** : Réglementations, avertissements, aménagements

---

## ✨ Nouvelles Fonctionnalités

### 1. **Paddle Score™** 
Système propriétaire de notation 0-100 basé sur:
- **Vent** (impact majeur)
- **Pluie/Humidité**
- **Température**
- **Vagues**

**Code Couleur:**
- 🟢 **80-100** : Excellent
- 🟡 **60-79** : Bon
- 🟠 **40-59** : Modéré
- 🔴 **0-39** : Mauvais

### 2. **Pages Individuelles de Lacs**
Chaque lac a maintenant sa propre page détaillée : `lac.html?lake=[slug]`

**Paramètres inclus:**
- Description longue et détails complets
- Galerie de photos interactive
- Carte Leaflet avec localisation exacte
- Accès et stationnement complets
- Aménagements disponibles
- Avertissements de sécurité
- FAQ pour chaque lac
- Conditions météo en temps réel

### 3. **Géolocalisation des 2 Spots Proches**
Bouton "Trouver mes 2 Spots" utilisant:
- Géolocalisation navigateur
- Calcul distance Haversine
- Tri automatique
- Modal affichant les 2 plus proches

### 4. **Support du Mode Sombre**
Interface responsive en light/dark mode avec Tailwind CSS

---

## 🏗️ Architecture

### Fichiers Principaux

```
projet-mauricie/
├── index.html                 # Accueil avec hero, 3 lacs vedettes
├── lac.html                   # Template page individuelle lac
├── data.js                    # Base données lacs + algoritmes Paddle Score
├── script.js                  # Logique carte, filtres, geolocalisation
├── style.css                  # Styles custom (mode sombre, etc.)
├── mentions-legales.html
├── politique-confidentialite.html
└── mixkit-Lac.mp4            # Vidéo hero (si disponible)
```

### Base de Données (`data.js`)

Contient le tableau `lacDatabase` avec pour chaque lac:

```javascript
{
    id: "lac-des-piles",           // Identifiant unique
    slug: "lac-des-piles",        // URL-safe slug
    name: "Lac des Piles (Baie-Martin)",
    region: "Mauricie",
    lat: 46.5925,
    lon: -72.8235,
    mainImage: "...",             // Image hero
    gallery: [...],               // Photos additionnelles
    description: "...",           // Courte description
    longDescription: "...",       // Description complète
    difficulty: "facile",         // ou "sportif"
    paddleScore: 88,              // Score de base
    scoreFactors: {
        wind: 8,                  // 0-10
        rain: 9,
        temperature: 8,
        waves: 8
    },
    isFree: false,
    waterQuality: "Exceptionnelle",
    maxLength: "Circuit 10 km",
    season: "Mai à septembre",
    parking: {
        location: "...",
        spots: 60,
        accessible: false,
        cost: "..."
    },
    access: {
        description: "...",
        type: "...",
        difficulty: "Modéré",
        launchPoint: "..."
    },
    amenities: [...],             // Aménagements
    warnings: [...],              // Avertissements
    faq: [                        // Questions fréquentes
        { q: "...", a: "..." }
    ],
    highlights: [...]             // Points positifs
}
```

---

## 🎮 Guide d'Utilisation

### Pour les Utilisateurs

#### Page d'Accueil
1. Cliquez sur **"Trouver mes 2 Spots"** → Autorisez la géolocalisation
2. Modal affiche les 2 lacs les plus proches
3. Cliquez pour voir la page détaillée

#### Pages de Lacs Individuels
1. Voir **Paddle Score™** en gros sur l'image hero
2. Consulter la **galerie photos** (navigation clavier ← →)
3. Voir la **carte interactive** avec épingle de localisation
4. Lire les **FAQs** (dérouler les détails)
5. Vérifier les **conditions météo** actuelles
6. Consulter **aménagements** et **avertissements**
7. Boutons "Me diriger ici" → Google Maps
8. Bouton "Partager cette page" → Copie/Share nativ

#### Carte Interactive
1. Filtrez par région, difficulté, type
2. Toggle "Accès gratuit"
3. Cliquez sur épingle pour voir Paddle Score™ actuel
4. Bouton 📍 pour vous localiser
5. Bouton 🔄 pour réinitialiser la vue

### Pour les Administrateurs

#### Ajouter un Nouveau Lac

1. **Créer entrée dans `data.js`:**
```javascript
lacDatabase.push({
    id: "nouv eau-lac",
    slug: "nouveau-lac",
    name: "Nom du Lac",
    // ... tous les champs requis
});
```

2. **Ajouter à la carte interactive** dans `script.js`

3. **Page automatique** via `lac.html?lake=nouveau-lac`

#### Modifier le Paddle Score

Éditez `calculatePaddleScore()` dans `data.js`:
```javascript
function calculatePaddleScore(weather, baseScore = 75) {
    let score = baseScore;
    
    // Ajustements par facteur
    if (weather.wind > 20) score -= 20;
    // ... retour score 0-100
}
```

---

## 🔧 Fonctions Clés (data.js)

### `calculatePaddleScore(weather, baseScore)`
Calcule le Paddle Score™ ajusté selon conditions réelles.

**Paramètres:**
- `weather`: Object {temp, wind, rain, waves}
- `baseScore`: Score par défaut du lac

**Retour:** Score 0-100

### `getPaddleScoreBadge(score)`
Retourne emoji, label et couleur pour affichage.

**Retour:** {emoji: "🟢", label: "Excellent", color: "#10b981"}

### `calculateDistance(lat1, lon1, lat2, lon2)`
Distance Haversine entre deux points.

**Retour:** Distance en km

### `getNearestLakes(userLat, userLon)`
Trouve les 2 lacs les plus proches.

**Retour:** Array de 2 lacs avec distance property

---

## 🌐 Déploiement

### Structure URL pour Pages Individuelles

```
https://spotpaddle.ca/lac.html?lake=lac-des-piles
https://spotpaddle.ca/lac.html?lake=parc-national-wapizagonke
https://spotpaddle.ca/lac.html?lake=riviere-st-maurice
```

### Métadonnées

Chaque page a ses propres métadonnées:
```html
<title>[Nom Lac] - Spot Paddle</title>
<meta property="og:title" content="[Nom Lac]">
<meta property="og:description" content="[Description]">
<meta property="og:image" content="[mainImage]">
```

---

## 📱 Responsive Design

- **Mobile:** Stack vertical, navbar hamburger, modals adaptés
- **Tablet:** 2 colonnes max
- **Desktop:** Mise en page complète 3 colonnes

---

## 🔐 Sécurité & Conformité

- ✅ RGPD: Pas de stockage utilisateur permanent (localStorage pour thème seulement)
- ✅ Géolocalisation: Demande expression d'autorisation
- ✅ Externe: OpenWeatherMap API avec clé gratuite
- ✅ SEO: Métadonnées complètes, structured data prêt

---

## 🚀 Prochaines Améliorations

1. **Ratings utilisateurs** pour chaque lac
2. **Photos utilisateurs** avec modération
3. **Historique Paddle Score™** (tendances)
4. **API mobile native** (React Native)
5. **Prolaration d'autres régions** (Estrie, Laurentides, etc.)
6. **Blog de paddle** avec tutoriels
7. **Intégration avec Strava** pour statistiques

---

## 📞 Support

- Pour bugs ou suggestions: Via page de contact
- Données météo: OpenWeatherMap API
- Cartes: Leaflet + OpenStreetMap

---

## 📜 Licence & Attribution

- Paddle Score™ est une marque propriétaire de Spot Paddle
- Contenus: © 2026 Spot Paddle
- Données géo: © OpenStreetMap contributors
- Météo: © OpenWeatherMap
- Cartes: Leaflet.js (BSD 2-Clause)

---

**Prêt à pagayer!** 🚣‍♂️🚣‍♀️
