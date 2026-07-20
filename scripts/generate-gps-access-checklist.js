const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const context = {};
vm.createContext(context);
vm.runInContext(`${fs.readFileSync(path.join(root, 'data.js'), 'utf8')}; this.lakes = lacDatabase;`, context);

const lakes = context.lakes.slice().sort((a, b) =>
  String(a.region).localeCompare(String(b.region), 'fr') || String(a.name).localeCompare(String(b.name), 'fr')
);

const value = (input, fallback = 'À vérifier') => {
  const text = String(input ?? '').trim();
  return text || fallback;
};

const lines = [
  'LISTE INTERNE - VÉRIFICATION GPS ET ACCÈS À L’EAU',
  `Générée le : ${new Date().toISOString().slice(0, 10)}`,
  `Nombre de spots : ${lakes.length}`,
  '',
  'LÉGENDE',
  '[ ] À vérifier  [x] Vérifié manuellement',
  'Contrôler : point sur l’eau, plage/quai/rampe, accès automobile, stationnement proche et caractère public.',
  'Ce fichier est interne et n’est utilisé par aucune page du site.',
  '',
  '======================================================================',
  ''
];

lakes.forEach((lake, index) => {
  const access = lake.accessPoint || { lat: lake.lat, lon: lake.lon };
  const parking = lake.parkingPoint;
  const washStation = lake.washStationPoint;
  const accessLat = Number(access.lat);
  const accessLon = Number(access.lon);
  const mapQuery = `${accessLat},${accessLon}`;
  const warnings = Array.isArray(lake.warnings) && lake.warnings.length
    ? lake.warnings.join(' | ')
    : 'Aucun avertissement inscrit';

  lines.push(
    `${String(index + 1).padStart(3, '0')}. [ ] ${value(lake.name)}`,
    `Région : ${value(lake.region)}`,
    `Type d’accès déclaré : ${value(lake.access?.type)}`,
    `Adresse / point d’accès : ${value(lake.access?.description || lake.access?.launchPoint)}`,
    `Coordonnées d’accès : ${accessLat}, ${accessLon}`,
    `Confiance GPS actuelle : ${value(access.confidence, 'à vérifier')}`,
    `Stationnement déclaré : ${value(lake.parking?.location)}`,
    `Stationnement GPS distinct : ${parking ? `${parking.lat}, ${parking.lon}` : 'Non défini'}`,
    `Distance stationnement-eau : ${parking?.distanceToAccessMeters != null ? `${Math.round(parking.distanceToAccessMeters)} m` : 'À vérifier'}`,
    `Station de lavage : ${washStation ? `${washStation.name} — ${washStation.lat}, ${washStation.lon}` : 'Non définie'}`,
    `Coût / condition : ${value(lake.cost || lake.parking?.cost, lake.isFree ? 'Gratuit selon la fiche' : 'À vérifier')}`,
    `Restrictions : ${warnings}`,
    `Google Maps : https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
    `OpenStreetMap : https://www.openstreetmap.org/?mlat=${accessLat}&mlon=${accessLon}#map=18/${accessLat}/${accessLon}`,
    'Résultat de ma vérification : [ ] adéquat  [ ] à corriger  [ ] accès privé  [ ] stationnement absent',
    'Coordonnées corrigées : ______________________________',
    'Notes : ________________________________________________________________',
    '',
    '----------------------------------------------------------------------',
    ''
  );
});

fs.writeFileSync(path.join(root, 'LISTE_VERIFICATION_GPS_ACCES.txt'), `${lines.join('\r\n')}\r\n`, 'utf8');
