# Validation GPS des accès et stationnements

Dernière passe: 2026-06-18

## État actuel

- 50 spots sont publiés.
- 23 spots possèdent maintenant un point de stationnement distinct du point de mise à l'eau.
- 17 stationnements sont classés `high` et 6 sont classés `medium`.
- Les 27 autres spots conservent leur accès actuel, mais l'itinéraire de stationnement reste à vérifier.

## Règle de publication

Le bouton d'itinéraire doit viser un stationnement accessible par la route, jamais le centre du lac ni un point posé directement sur la rive.

Un stationnement est classé `high` seulement si les éléments suivants sont réunis:

1. Le point se trouve normalement à moins de 250 m de la mise à l'eau pour une embarcation légère.
2. L'accès est public, réservé aux visiteurs du site ou clairement autorisé.
3. Le stationnement et la mise à l'eau sont situés dans le même secteur du même plan d'eau.
4. Deux sources concordent, ou une source officielle fournit un relevé GPS validé.
5. Les restrictions connues, le tarif et le permis requis sont affichés.

Entre 250 et 500 m, le point est généralement classé `medium`. Au-delà de 500 m, ou si l'accès est privé, le point reste à vérifier.

## Sources prioritaires

### 1. Canot Kayak Québec - Route bleue

- Carte interactive: https://experience.arcgis.com/experience/3948f1edb82d455eb47b13400e76ae60
- 6 149 accès actifs et 1 623 stationnements actifs observés le 18 juin 2026.
- Champs utiles: accès public ou privé, tarif, nombre de places, remorques, méthode GPS, qualité, validation et date de mise à jour.
- Usage: meilleure source pour associer un accès de pagaie à un stationnement voisin.

### 2. Données Québec - SIT Québec

- Jeu de données: https://www.donneesquebec.ca/recherche/dataset/sit-quebec-nature-sports-et-plein-air
- Licence CC BY 4.0.
- Usage: confirmer le nom officiel, la catégorie, l'adresse et la position des plages, marinas, parcs et lieux nautiques.
- Limite: le point peut représenter le centre du site plutôt que l'entrée du stationnement.

### 3. Données Québec - stations de nettoyage

- Jeu de données: https://www.donneesquebec.ca/recherche/dataset/station-de-nettoyage-des-embarcations
- Licence CC BY 4.0.
- Usage: confirmer une adresse routière et les services nautiques proches.
- Limite: une station de lavage n'est pas automatiquement une mise à l'eau.

### 4. OpenStreetMap

- Données: https://www.openstreetmap.org/
- Licence ODbL, attribution obligatoire.
- Éléments vérifiés: `amenity=parking`, `leisure=slipway`, `natural=beach`, `leisure=marina`, `access`, `fee` et `surface`.
- Usage: recouper la route d'accès, le stationnement, la rampe et les restrictions.

### 5. Sources municipales et Sépaq

- Usage: confirmer les règles saisonnières, permis, heures, tarifs et secteurs exacts.
- Exemple Shawinigan: https://cartes.shawinigan.ca/portal/apps/webappviewer/index.html?id=bc5c4696756342e69496dd9168543887
- Limite: plusieurs cartes municipales doivent être vérifiées manuellement et ne permettent pas toujours une réutilisation automatisée.

## Vérification importante

- Lac Maskinongé: le point fourni par l'utilisateur (`46.301840, -73.388597`) correspond au stationnement de la plage municipale. Canot Kayak Québec place le stationnement à environ 11 m et l'accès public à environ 71 m. Le bouton d'itinéraire conserve donc le point fourni par l'utilisateur.
- Lac des Piles: ancien point situé environ 7 km trop au sud remplacé par le Camping Plage Baie Martin (`46.6653731, -72.7901009`). Le centre du plan d'eau, le stationnement et la plage sont maintenant trois points distincts.
- Parc national de Plaisance: ancien point général remplacé par le stationnement de l'accueil et la mise à l'eau officielle, distants d'environ 43 m.
- Baie de Beauport: ancien point général déplacé vers le secteur nautique et son stationnement validé.
- Lac-aux-Sables, Oka, Yamaska et Poisson-Blanc: accès et stationnement maintenant séparés sur la carte.

## Prochaine passe manuelle

Priorité aux 27 spots sans stationnement GPS distinct. Il faut d'abord traiter les endroits marqués `needs_verification`, puis vérifier les changements saisonniers avant chaque début d'été.
