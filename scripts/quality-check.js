const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const failures = [];

function read(file) {
    return fs.readFileSync(path.join(root, file), 'utf8');
}

function check(condition, message) {
    if (!condition) failures.push(message);
}

function checkInlineScripts(file, html) {
    const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
        .map(match => match[1])
        .filter(script => script.trim());

    scripts.forEach((script, index) => {
        try {
            new Function(script);
        } catch (error) {
            failures.push(`${file}: script intégré ${index + 1} invalide (${error.message})`);
        }
    });
}

const contributionHtml = read('contribuer.html');
const lakeHtml = read('lac.html');
const mainScript = read('script.js');
const suggestionPhp = read('suggestion.php');
const hydroPhp = read('hydro.php');

checkInlineScripts('contribuer.html', contributionHtml);
checkInlineScripts('lac.html', lakeHtml);

check(
    lakeHtml.includes('contribuer.html?mode=photo&spot=') &&
    lakeHtml.includes('📷 Partager une photo'),
    'lac.html: le bouton de partage photo par spot est absent'
);
check(
    mainScript.includes('📷 AJOUTER UNE PHOTO') &&
    mainScript.includes('contribuer.html?mode=photo&spot=${encodeURIComponent(lac.name)}'),
    'script.js: le bouton photo de la fiche cartographique est absent'
);
check(
    contributionHtml.includes("pageParams.get('mode') === 'photo'"),
    'contribuer.html: le mode photo court est absent'
);
check(
    contributionHtml.includes("spotNameInput.value = selectedSpotName"),
    'contribuer.html: le préremplissage du spot est absent'
);
check(
    !contributionHtml.includes('id="photoTitle"'),
    'contribuer.html: le champ titre de photo ne doit pas revenir'
);
check(
    contributionHtml.includes('photosInput.required = true'),
    'contribuer.html: une photo doit être obligatoire en mode photo'
);
check(
    suggestionPhp.includes("'spotSlug' => getField('spotSlug'"),
    'suggestion.php: l’identifiant du spot n’est pas traité'
);
check(
    lakeHtml.includes('id="hydrometricContent"') &&
    lakeHtml.includes('loadLakeHydrometry(currentLake)'),
    'lac.html: le panneau de niveau d’eau est absent'
);
check(
    hydroPhp.includes("'02OE012'") &&
    hydroPhp.includes('hydrometric-realtime/items'),
    'hydro.php: le relais hydrométrique officiel est incomplet'
);

if (failures.length) {
    failures.forEach(failure => console.error(`[FAIL] ${failure}`));
    process.exit(1);
}

console.log('[OK] Scripts HTML valides');
console.log('[OK] Parcours photo par spot protégé');
console.log('[OK] Formulaire complet conservé sans titre de photo');
console.log('[OK] Niveau d’eau officiel intégré aux fiches compatibles');
