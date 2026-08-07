# Audit rapide - SpotPaddle

Date: 2026-08-07

## Résumé
- Risques principaux: usages de `innerHTML` et attributs `onclick` (XSS potentiel), `console.log` présents, sorties PHP non-explicitement encodées.
- Correctifs appliqués (non-intrusifs):
  - Ajout de `assets/js/env.js` pour neutraliser `console.log`/`debug`/`info` en production.
  - Ajout d'une meta CSP en `report-only` dans `index.html` pour surveiller les violations sans bloquer le site.
  - Ajout des fichiers de configuration `/.eslintrc.json`, `/.prettierrc`, `/.eslintignore`.
  - Ajout d'un workflow GitHub `/.github/workflows/lint.yml` et d'un script `lint` dans `package.json`.

## Détails par fichier

- `index.html`: insertion de la meta `spotpaddle-env` (production), meta CSP `Content-Security-Policy-Report-Only`, et inclusion de `assets/js/env.js` avant `assets/data.min.js`.
  - Raison: neutraliser les `console.log` en production et collecter des rapports CSP sans bloquer.

- `assets/js/env.js`: script non intrusif qui expose `window.SpotPaddleEnv` et désactive `console.log`, `console.debug`, `console.info` si `spotpaddle-env` === `production`.

- `package.json`: ajout d'un script `lint` (utilise `npx eslint`) pour faciliter l'exécution locale sans modifier les dépendances actuelles.

## Recommandations suivantes (à planifier)

- Remplacer progressivement les `innerHTML` par `textContent`/DOM APIs ou utiliser un template engine côté client.
- Remplacer attributs `onclick` par `addEventListener` (plus accessible et testable).
- Valider toutes les sorties PHP: utiliser `htmlspecialchars()` pour sortie HTML ou `json_encode()` pour APIs; vérifier les entêtes `Content-Type`.
- Ajouter ESLint/Prettier aux dépendances de développement et intégrer le lint dans `npm ci` (mettre à jour `package.json` `devDependencies`).
- Configurer un endpoint serveur pour recevoir les rapports CSP (optionnel) ou utiliser un service tiers.

## Notes de sécurité

- Les changements appliqués sont en grande partie non‑intrusifs et en mode surveillance (`report-only`) pour éviter tout bris fonctionnel.
