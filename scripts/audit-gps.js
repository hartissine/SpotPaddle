#!/usr/bin/env node
/*
 * Audit GPS SpotPaddle
 *
 * Lit data.js, reconstruit les points GPS utilisés par le site, puis génère
 * un rapport Markdown avec les spots à confirmer/corriger en priorité.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const DATA_FILE = path.join(ROOT, "data.js");
const REPORT_FILE = path.join(ROOT, "GPS_AUDIT_REPORT.md");

const QUEBECISH_BOUNDS = {
    minLat: 44.0,
    maxLat: 53.8,
    minLon: -80.5,
    maxLon: -57.0
};

const SEVERITY_ORDER = {
    critical: 0,
    high: 1,
    medium: 2,
    low: 3
};

function loadSiteData() {
    const code = fs.readFileSync(DATA_FILE, "utf8");
    const wrapped = `
        (() => {
            ${code}
            return {
                lacDatabase,
                getLakeAccessPoint,
                getLakeParkingPoint,
                getLakeDirectionsPoint,
                calculateDistance
            };
        })()
    `;

    return vm.runInNewContext(wrapped, {
        console: {
            log() {},
            warn() {},
            error() {}
        }
    }, {
        filename: DATA_FILE
    });
}

function toNumber(value) {
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
}

function hasUsableCoordinates(point) {
    return point && toNumber(point.lat) !== null && toNumber(point.lon) !== null;
}

function isInsideExpectedBounds(point) {
    if (!hasUsableCoordinates(point)) return false;
    return point.lat >= QUEBECISH_BOUNDS.minLat
        && point.lat <= QUEBECISH_BOUNDS.maxLat
        && point.lon >= QUEBECISH_BOUNDS.minLon
        && point.lon <= QUEBECISH_BOUNDS.maxLon;
}

function haversineMeters(a, b) {
    if (!hasUsableCoordinates(a) || !hasUsableCoordinates(b)) return null;

    const radiusMeters = 6371000;
    const lat1 = a.lat * Math.PI / 180;
    const lat2 = b.lat * Math.PI / 180;
    const dLat = (b.lat - a.lat) * Math.PI / 180;
    const dLon = (b.lon - a.lon) * Math.PI / 180;

    const h = Math.sin(dLat / 2) ** 2
        + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

    return 2 * radiusMeters * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function roundedMeters(value) {
    if (value === null || !Number.isFinite(value)) return "n/a";
    return `${Math.round(value)} m`;
}

function roundCoord(value) {
    return Number(value).toFixed(6);
}

function coordKey(point) {
    if (!hasUsableCoordinates(point)) return "";
    return `${roundCoord(point.lat)},${roundCoord(point.lon)}`;
}

function md(value) {
    return String(value ?? "")
        .replace(/\|/g, "\\|")
        .replace(/\n/g, " ")
        .trim();
}

function isHighConfidence(point) {
    return point?.confidence === "high";
}

function sourceText(...points) {
    return points
        .map(point => point?.source || "")
        .join(" ")
        .toLowerCase();
}

function isExplicitlyConfirmed(...points) {
    const source = sourceText(...points);
    return source.includes("har la vie sup")
        || source.includes("confirmé")
        || source.includes("confirmee")
        || source.includes("coordonnées fournies")
        || source.includes("coordonnees fournies");
}

function addIssue(issues, lake, severity, category, problem, measure, nextStep) {
    issues.push({
        severity,
        category,
        lake: lake?.name || "(spot inconnu)",
        slug: lake?.slug || "",
        problem,
        measure,
        nextStep
    });
}

function confidenceBucket(point) {
    return point?.confidence || "missing";
}

function auditLake(lake, helpers, issues) {
    const access = helpers.getLakeAccessPoint(lake);
    const parking = helpers.getLakeParkingPoint(lake);
    const directions = helpers.getLakeDirectionsPoint(lake);

    if (!hasUsableCoordinates(lake)) {
        addIssue(
            issues,
            lake,
            "critical",
            "Coordonnées",
            "Coordonnées principales du spot invalides.",
            `lat=${lake.lat}, lon=${lake.lon}`,
            "Corriger les coordonnées du spot avant publication."
        );
    } else if (!isInsideExpectedBounds(lake)) {
        addIssue(
            issues,
            lake,
            "high",
            "Coordonnées",
            "Coordonnées principales hors de la zone attendue Québec / Est du Canada.",
            `${lake.lat}, ${lake.lon}`,
            "Vérifier si le point appartient vraiment au catalogue Québec."
        );
    }

    if (!hasUsableCoordinates(access)) {
        addIssue(
            issues,
            lake,
            "critical",
            "Accès",
            "Aucun point GPS d'accès utilisable.",
            "accessPoint absent ou invalide",
            "Ajouter un point de mise à l'eau, plage, quai ou accès nautique."
        );
        return;
    }

    if (!isInsideExpectedBounds(access)) {
        addIssue(
            issues,
            lake,
            "high",
            "Accès",
            "Point d'accès hors de la zone attendue.",
            `${access.lat}, ${access.lon}`,
            "Vérifier la source GPS et corriger le point."
        );
    }

    if (access.confidence === "needs_verification") {
        addIssue(
            issues,
            lake,
            "high",
            "Accès",
            "Point d'accès encore non confirmé.",
            access.source || "source absente",
            "Confirmer une plage, rampe, quai ou mise à l'eau publique avec source ou validation terrain."
        );
    } else if (access.confidence === "medium") {
        addIssue(
            issues,
            lake,
            "medium",
            "Accès",
            "Point d'accès partiellement confirmé.",
            access.source || "source absente",
            "Ajouter une seconde source ou une confirmation terrain pour passer à high."
        );
    }

    if (!hasUsableCoordinates(directions)) {
        addIssue(
            issues,
            lake,
            "critical",
            "Itinéraire",
            "Aucune destination d'itinéraire utilisable.",
            "directionsPoint absent ou invalide",
            "Ajouter un stationnement routier ou un accès routable."
        );
    } else if (directions.confidence === "needs_verification") {
        addIssue(
            issues,
            lake,
            "high",
            "Itinéraire",
            "La destination d'itinéraire est encore à vérifier.",
            directions.source || "source absente",
            "Confirmer que le bouton d'itinéraire mène à un stationnement ou accès routier réel."
        );
    } else if (directions.confidence === "medium") {
        addIssue(
            issues,
            lake,
            "medium",
            "Itinéraire",
            "La destination d'itinéraire est seulement medium.",
            directions.source || "source absente",
            "Chercher une source plus forte ou une confirmation terrain."
        );
    }

    if (!hasUsableCoordinates(parking)) {
        addIssue(
            issues,
            lake,
            isHighConfidence(access) ? "medium" : "high",
            "Stationnement",
            "Aucun stationnement GPS distinct n'est défini.",
            isHighConfidence(access)
                ? "Le site utilise l'accès comme destination de repli."
                : "Accès non confirmé et stationnement absent.",
            "Trouver/confirmer un stationnement routier proche de l'accès."
        );
        return;
    }

    if (!isInsideExpectedBounds(parking)) {
        addIssue(
            issues,
            lake,
            "high",
            "Stationnement",
            "Point de stationnement hors de la zone attendue.",
            `${parking.lat}, ${parking.lon}`,
            "Vérifier la source GPS et corriger le stationnement."
        );
    }

    if (parking.confidence === "needs_verification") {
        addIssue(
            issues,
            lake,
            "high",
            "Stationnement",
            "Stationnement encore non confirmé.",
            parking.source || "source absente",
            "Confirmer que le point est accessible par la route et autorisé pour les visiteurs."
        );
    } else if (parking.confidence === "medium") {
        addIssue(
            issues,
            lake,
            "medium",
            "Stationnement",
            "Stationnement partiellement confirmé.",
            parking.source || "source absente",
            "Ajouter une confirmation terrain, municipale, OSM ou Route bleue."
        );
    }

    const computedDistance = haversineMeters(access, parking);
    const declaredDistance = Number.isFinite(parking.distanceToAccessMeters)
        ? Number(parking.distanceToAccessMeters)
        : null;

    if (computedDistance !== null && declaredDistance === null) {
        addIssue(
            issues,
            lake,
            "low",
            "Distance",
            "Distance stationnement → accès calculable mais non inscrite.",
            `distance calculée: ${roundedMeters(computedDistance)}`,
            "Inscrire distanceToAccessMeters pour clarifier l'effort de portage."
        );
    }

    if (computedDistance !== null && declaredDistance !== null) {
        const delta = Math.abs(computedDistance - declaredDistance);
        const tolerance = Math.max(30, computedDistance * 0.25);

        if (delta > tolerance) {
            addIssue(
                issues,
                lake,
                "medium",
                "Distance",
                "Distance stationnement → accès incohérente avec les coordonnées.",
                `déclarée: ${Math.round(declaredDistance)} m; calculée: ${roundedMeters(computedDistance)}`,
                "Recalculer distanceToAccessMeters ou corriger un des deux points GPS."
            );
        }
    }

    if (computedDistance !== null && computedDistance > 500) {
        addIssue(
            issues,
            lake,
            "high",
            "Distance",
            "Stationnement éloigné de plus de 500 m de l'accès.",
            `distance calculée: ${roundedMeters(computedDistance)}`,
            "Vérifier s'il existe un stationnement plus proche ou indiquer clairement le portage."
        );
    } else if (computedDistance !== null && computedDistance > 250) {
        addIssue(
            issues,
            lake,
            "medium",
            "Distance",
            "Stationnement entre 250 m et 500 m de l'accès.",
            `distance calculée: ${roundedMeters(computedDistance)}`,
            "Confirmer que ce portage est volontaire et acceptable pour paddle."
        );
    }

    if (computedDistance !== null && computedDistance < 10 && !isExplicitlyConfirmed(access, parking)) {
        addIssue(
            issues,
            lake,
            "low",
            "Stationnement",
            "Stationnement et accès sont presque au même point, sans source explicitement confirmée.",
            `distance calculée: ${roundedMeters(computedDistance)}`,
            "Vérifier si le point représente vraiment le stationnement ou seulement la rive."
        );
    }
}

function sortIssues(issues) {
    return [...issues].sort((a, b) => {
        const severityDelta = SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity];
        if (severityDelta !== 0) return severityDelta;
        const categoryDelta = a.category.localeCompare(b.category, "fr");
        if (categoryDelta !== 0) return categoryDelta;
        return a.lake.localeCompare(b.lake, "fr");
    });
}

function summarize(spots, helpers, issues) {
    const routeConfidence = {};
    const accessConfidence = {};
    const parkingConfidence = {};
    let withParking = 0;
    let withDistinctParking = 0;

    spots.forEach(lake => {
        const access = helpers.getLakeAccessPoint(lake);
        const parking = helpers.getLakeParkingPoint(lake);
        const directions = helpers.getLakeDirectionsPoint(lake);

        routeConfidence[confidenceBucket(directions)] = (routeConfidence[confidenceBucket(directions)] || 0) + 1;
        accessConfidence[confidenceBucket(access)] = (accessConfidence[confidenceBucket(access)] || 0) + 1;
        parkingConfidence[confidenceBucket(parking)] = (parkingConfidence[confidenceBucket(parking)] || 0) + 1;

        if (hasUsableCoordinates(parking)) {
            withParking += 1;
            const distance = haversineMeters(access, parking);
            if (distance !== null && distance >= 10) withDistinctParking += 1;
        }
    });

    const issuesBySeverity = {};
    issues.forEach(issue => {
        issuesBySeverity[issue.severity] = (issuesBySeverity[issue.severity] || 0) + 1;
    });

    return {
        totalSpots: spots.length,
        withParking,
        withDistinctParking,
        routeConfidence,
        accessConfidence,
        parkingConfidence,
        issuesBySeverity
    };
}

function findDuplicateRoutePoints(spots, helpers) {
    const groups = new Map();

    spots.forEach(lake => {
        const point = helpers.getLakeDirectionsPoint(lake);
        if (!hasUsableCoordinates(point)) return;

        const key = coordKey(point);
        const existing = groups.get(key) || [];
        existing.push({ lake, point });
        groups.set(key, existing);
    });

    return [...groups.entries()]
        .filter(([, entries]) => entries.length > 1)
        .map(([key, entries]) => ({ key, entries }));
}

function formatBucket(bucket) {
    const order = ["high", "medium", "needs_verification", "missing"];
    return order
        .filter(key => bucket[key])
        .map(key => `${key}: ${bucket[key]}`)
        .join(", ") || "aucun";
}

function issueTable(issues) {
    if (issues.length === 0) return "_Aucun problème détecté dans cette section._\n";

    return [
        "| Priorité | Spot | Problème | Mesure / trace | Correctif proposé |",
        "|---|---|---|---|---|",
        ...issues.map(issue => `| ${md(issue.severity)} | ${md(issue.lake)} | ${md(issue.problem)} | ${md(issue.measure)} | ${md(issue.nextStep)} |`)
    ].join("\n") + "\n";
}

function groupedIssueTable(issues) {
    if (issues.length === 0) return "_Aucun spot prioritaire à traiter._\n";

    const groups = new Map();
    issues.forEach(issue => {
        const key = issue.slug || issue.lake;
        const current = groups.get(key) || {
            lake: issue.lake,
            severity: issue.severity,
            categories: new Set(),
            problems: [],
            nextSteps: new Set()
        };

        if (SEVERITY_ORDER[issue.severity] < SEVERITY_ORDER[current.severity]) {
            current.severity = issue.severity;
        }

        current.categories.add(issue.category);
        current.problems.push(issue.problem);
        current.nextSteps.add(issue.nextStep);
        groups.set(key, current);
    });

    const rows = [...groups.values()].sort((a, b) => {
        const severityDelta = SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity];
        if (severityDelta !== 0) return severityDelta;
        return a.lake.localeCompare(b.lake, "fr");
    });

    return [
        "| Priorité | Spot | Alertes détectées | Action terrain/source à obtenir |",
        "|---|---|---|---|",
        ...rows.map(group => {
            const alertSummary = `${[...group.categories].join(", ")} — ${[...new Set(group.problems)].join(" / ")}`;
            const nextSummary = [...group.nextSteps].join(" ");
            return `| ${md(group.severity)} | ${md(group.lake)} | ${md(alertSummary)} | ${md(nextSummary)} |`;
        })
    ].join("\n") + "\n";
}

function duplicateTable(duplicates) {
    if (duplicates.length === 0) return "_Aucun doublon exact de destination d'itinéraire._\n";

    return [
        "| Coordonnées | Spots concernés | Note |",
        "|---|---|---|",
        ...duplicates.map(group => {
            const spots = group.entries.map(entry => entry.lake.name).join(", ");
            const confirmed = group.entries.every(entry => isExplicitlyConfirmed(entry.point));
            const note = confirmed
                ? "Doublon accepté probable: destination explicitement confirmée."
                : "À vérifier si ces fiches ne devraient pas avoir des stationnements séparés.";
            return `| ${md(group.key)} | ${md(spots)} | ${md(note)} |`;
        })
    ].join("\n") + "\n";
}

function buildReport(spots, helpers, issues, duplicates) {
    const sortedIssues = sortIssues(issues);
    const summary = summarize(spots, helpers, issues);
    const highImpactIssues = sortedIssues.filter(issue => ["critical", "high"].includes(issue.severity));
    const mediumIssues = sortedIssues.filter(issue => issue.severity === "medium");
    const lowIssues = sortedIssues.filter(issue => issue.severity === "low");

    const generatedAt = new Date().toISOString();

    return `# Audit GPS automatique

Généré: ${generatedAt}

## Résumé

- Spots analysés: ${summary.totalSpots}
- Spots avec stationnement GPS: ${summary.withParking}
- Spots avec stationnement distinct de l'accès (≥ 10 m): ${summary.withDistinctParking}
- Confiance des destinations d'itinéraire: ${formatBucket(summary.routeConfidence)}
- Confiance des accès: ${formatBucket(summary.accessConfidence)}
- Confiance des stationnements: ${formatBucket(summary.parkingConfidence)}
- Problèmes détectés: critical ${summary.issuesBySeverity.critical || 0}, high ${summary.issuesBySeverity.high || 0}, medium ${summary.issuesBySeverity.medium || 0}, low ${summary.issuesBySeverity.low || 0}

## Spots prioritaires distincts

${groupedIssueTable(highImpactIssues)}
## Correctifs au plus fort impact — détails

${issueTable(highImpactIssues)}
## À confirmer ensuite

${issueTable(mediumIssues)}
## Nettoyage / qualité de données

${issueTable(lowIssues)}
## Doublons exacts de destination d'itinéraire

${duplicateTable(duplicates)}
## Règles appliquées

- Un point needs_verification est considéré comme un problème à corriger.
- Un point medium demande une source plus forte ou une confirmation terrain.
- Un stationnement manquant est prioritaire quand l'accès n'est pas confirmé; sinon il reste à confirmer pour améliorer l'itinéraire.
- Un stationnement à plus de 500 m de l'accès est signalé comme fort impact; entre 250 m et 500 m, il est à confirmer.
- Une destination présente dans le HAR La Vie SUP ou explicitement confirmée par l'utilisateur est traitée comme source forte, mais les frais, horaires et restrictions restent à vérifier séparément.

## Commande

\`\`\`powershell
& "C:\\Users\\Administrateur\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\bin\\node.exe" scripts/audit-gps.js
\`\`\`
`;
}

function main() {
    const helpers = loadSiteData();
    const spots = helpers.lacDatabase;
    const issues = [];

    spots.forEach(lake => auditLake(lake, helpers, issues));

    const duplicates = findDuplicateRoutePoints(spots, helpers);
    const report = buildReport(spots, helpers, issues, duplicates);
    fs.writeFileSync(REPORT_FILE, report, "utf8");

    const summary = summarize(spots, helpers, issues);
    console.log(`Audit GPS terminé: ${summary.totalSpots} spots analysés.`);
    console.log(`Rapport: ${REPORT_FILE}`);
    console.log(`Problèmes: critical ${summary.issuesBySeverity.critical || 0}, high ${summary.issuesBySeverity.high || 0}, medium ${summary.issuesBySeverity.medium || 0}, low ${summary.issuesBySeverity.low || 0}`);
    console.log(`Destinations: ${formatBucket(summary.routeConfidence)}`);
}

main();
