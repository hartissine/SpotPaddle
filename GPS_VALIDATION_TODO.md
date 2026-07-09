# Validation GPS des accès et stationnements

Dernière passe: 2026-07-09

## État actuel

- 102 spots sont publiés.
- 93 spots possèdent maintenant une destination d'itinéraire distincte ou explicitement référencée.
- Selon la règle du projet, toute destination présente dans le HAR fourni est considérée comme GPS confirmé.
- 96 destinations sont classées `high` et une seule demeure `medium`.
- Les autres spots conservent leur accès actuel, mais l'itinéraire de stationnement reste à vérifier.
- L'audit GPS automatique affiche 96 destinations `high`, 1 destination `medium` et 5 destinations `needs_verification`.

## Recoupement La Vie SUP du 5 juillet 2026

- Source: export HAR de la carte publique La Vie SUP, contenant 247 destinations « Itinéraire ».
- Lac-aux-Sables: le débarcadère municipal La Vie SUP est à 16 m du point d'accès actuel. L'accès et la destination d'itinéraire passent à `high`.
- Rivière Bonaventure: la Plage de la Piouke La Vie SUP est à 37 m du point actuel. L'accès passe de `medium` à `high`.
- Lac Saint-Pierre: le Domaine du Lac Saint-Pierre devient une destination routière `high`, à environ 430 m de la mise à l'eau actuelle.
- Marais du Nord: le point du 1100 chemin de la Grande Ligne devient une destination `high`.
- Memphrémagog/Magog est aligné sur la destination HAR « Rivière Magog / Capitainerie ».
- Lac Meech est aligné sur la destination HAR P12 du parc de la Gatineau.
- Wapizagonke, Lac Beauport, Lac Kénogami, Rivière Ashuapmushuan, Canal de Lachine et Bassin de Lachine sont confirmés à partir de leurs destinations HAR.
- Lac Philippe conserve son accès actuel: la plage Parent du HAR représente un autre secteur du lac.

## Ajout de 50 destinations du 6 juillet 2026

- 247 destinations « Itinéraire » ont été extraites du HAR fourni par l'utilisateur.
- 50 destinations québécoises supplémentaires ont été retenues après exclusion des marqueurs fermés, interdits, douteux et des doublons avec le catalogue existant.
- Le HAR ne contient aucune statistique de fréquentation. Les nouveaux spots sont donc décrits comme populaires ou reconnus, sans classement officiel de fréquentation.
- Les 50 nouveaux GPS sont classés `high`, conformément à la décision du projet de considérer le HAR fourni comme source de confirmation.
- Les coordonnées GPS et destinations d'itinéraire sont confirmées; les frais, capacités, horaires et restrictions saisonnières restent des informations distinctes à vérifier.

## Règle de publication

Le bouton d'itinéraire doit viser un stationnement accessible par la route, jamais le centre du lac ni un point posé directement sur la rive.

Une destination est classée `high` si elle est présente dans le HAR La Vie SUP fourni, ou si les éléments suivants sont réunis:

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
- Lac Mégantic: accès et destination confirmés à la Station touristique Baie-des-Sables (`45.58784810132125, -70.92756741709933`). La page officielle confirme la plage aménagée, la location nautique, la descente de bateaux, les quais visiteurs et les règlements de la zone de baignade.
- Baie de Percé: ancien point générique remplacé par l'accès confirmé fourni par l'utilisateur (`48.81722205280654, -64.4120404941832`). Le stationnement, le tarif et les conditions maritimes restent à vérifier avant la sortie.
- Lac du Cap-aux-Os: accès confirmé à `48.827258274795376, -64.3099938078322`; le stationnement adjacent sur la route 132 est également confirmé par l'utilisateur, sans distance précise ni tarif confirmé.
- Parc national Forillon: plage confirmée à `48.80506447087035, -64.24512015509676`; le lien Google Maps fourni confirme le stationnement du sentier du mont Saint-Alban à `48.8054277, -64.2452039`, environ 41 m plus loin de l'autre côté de la rue.
- Lac Matapédia — Baie de Charlie: accès plage confirmé par le lien Google Maps fourni à `48.5868597, -67.6347988`; stationnement OSM `way 745807742` à `48.58805, -67.63394`, environ 146 m plus loin. La Municipalité de Sayabec confirme la plage de sable, les installations et l'absence de surveillance.
- Lac des Îles: ancien point générique de Québec remplacé par le quai public de la Baie Poulin (`46.408652633180225, -75.5163500723817`) confirmé par l'utilisateur.
- Lac Forbes: remplace l'ancien point du Lac du Diable; point GPS confirmé par l'utilisateur à `46.49046390419786, -74.17010356318994`. Les frais, le stationnement et les règles locales restent à vérifier sur place.
- Lac Tremblant: point générique remplacé par le secteur du Centre nautique Pierre Plouffe; la destination d'itinéraire mène au point de lavage obligatoire confirmé par l'utilisateur (`46.227230443496815, -74.62875777620965`). La fiche Lac Tremblant Nord a été supprimée, car le même accès est valable pour ce secteur.
- Parc Monseigneur-Vel / Île du Marais: ancien point du Marais de l'Île-Madame remplacé par le Parc Monseigneur-Vel (`45.26844395845996, -72.0478460433003`), confirmé par l'utilisateur comme stationnement et accès.
- Petit-Lac-Magog: nouveau spot ajouté au Parc de la Plage-Municipale (`45.33464687563523, -72.02350158716727`), point GPS fourni par l'utilisateur et nom du parc recoupé avec OpenStreetMap relation `3662202`.

## Prochaine passe manuelle

Priorité aux 5 spots encore marqués `needs_verification`. Le seul itinéraire `medium` restant est celui de la rivière Chicoutimi; il n'a pas de correspondance dans le HAR fourni.
