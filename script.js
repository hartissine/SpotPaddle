    // 1. Config
    const apiKey = "b5d51e383a9219e83fa41ab4f6776e06";

    // Système de couleurs et zones géographiques par région
    const regionConfig = {
        "Mauricie": { color: "#3b82f6", zone: "Centre", emoji: "🌲" },
        "Laurentides": { color: "#8b5cf6", zone: "Nord", emoji: "⛰️" },
        "Estrie": { color: "#ec4899", zone: "Sud-Est", emoji: "🏔️" },
        "Saguenay-Lac-Saint-Jean": { color: "#06b6d4", zone: "Nord-Est", emoji: "❄️" },
        "Gaspésie": { color: "#f97316", zone: "Est", emoji: "🌊" },
        "Québec": { color: "#06b6d4", zone: "Est", emoji: "🏛️" },
        "Outaouais": { color: "#10b981", zone: "Ouest", emoji: "🌳" },
        "Montréal": { color: "#d97706", zone: "Centre-Est", emoji: "🏙️" }
    };

    function getRegionColor(region) {
        return regionConfig[region]?.color || "#64748b";
    }

    function getRegionEmoji(region) {
        return regionConfig[region]?.emoji || "📍";
    }

    function getRegionZone(region) {
        return regionConfig[region]?.zone || "Autres";
    }

    // Fonction pour obtenir les statistiques d'une région
    function getRegionStats(region) {
        const regionSpots = spots.filter(s => s.region === region);
        const freeCount = regionSpots.filter(s => s.isFree).length;
        const paidCount = regionSpots.length - freeCount;
        const easyCount = regionSpots.filter(s => s.level === 'facile').length;
        const sportCount = regionSpots.filter(s => s.level === 'sportif').length;
        return { total: regionSpots.length, free: freeCount, paid: paidCount, easy: easyCount, sport: sportCount };
    }

    // Fonction pour créer un marqueur SVG coloré par région
    function createRegionMarkerIcon(color) {
        const svg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" width="32" height="40">
            <path fill="${color}" d="M16 0C8.3 0 2 6.3 2 14c0 9 14 26 14 26s14-17 14-26c0-7.7-6.3-14-14-14z"/>
            <circle cx="16" cy="14" r="5" fill="white"/>
        </svg>`);
        return 'data:image/svg+xml;base64,' + btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" width="32" height="40">
            <path fill="${color}" d="M16 0C8.3 0 2 6.3 2 14c0 9 14 26 14 26s14-17 14-26c0-7.7-6.3-14-14-14z"/>
            <circle cx="16" cy="14" r="5" fill="white"/>
        </svg>`);
    }

    // 2. Map Setup
    const initialView = { lat: 46.8, lon: -71.5, zoom: 6 };
    var map = L.map('map').setView([initialView.lat, initialView.lon], initialView.zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Close popup when clicking on map
    map.on('click', function() {
        map.closePopup();
    });

    // 3. Spots Data
    const spots = [
        { 
            name: "Lac à la Tortue (Plage)",
            region: "Mauricie",
            lat: 46.6110, lon: -72.6240, 
            image: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement au Parc Municipal (Plage).", 
            prix: "Accès public gratuit.", 
            info: "Zone de décollage d'hydravions, restez vigilant près du centre.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Sacacomie", 
            region: "Mauricie",
            lat: 46.5285, lon: -73.2010, 
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement accessible (accès plage).", 
            prix: "Frais d'accès (Environ 15$).", 
            info: "Réputé pour son eau d'une clarté exceptionnelle et ses 42 km de rivage sauvage.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Rivière St-Maurice (TR)", 
            region: "Mauricie",
            lat: 46.3548, lon: -72.5342, 
            image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
            parking: "Grand stationnement à l'Île Saint-Quentin.", 
            prix: "Frais d'accès au parc de l'île.", 
            info: "Parfait pour éviter les forts courants du centre de la rivière.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Lac Saint-Pierre", 
            region: "Mauricie",
            lat: 46.2295, lon: -72.9180, 
            image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
            parking: "Accès via le Domaine du Lac St-Pierre à Louiseville.", 
            prix: "Frais de mise à l'eau applicables.", 
            info: "Réserve de biosphère. Très exposé au vent d'Ouest.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Parc National - Wapizagonke", 
            region: "Mauricie",
            lat: 46.6735, lon: -72.9805, 
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            parking: "Secteur Esker / Aire de pique-nique.", 
            prix: "Entrée Parc National + Lavage obligatoire.", 
            info: "Naviguez au pied des falaises. Chutes Waber accessibles par ce lac.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac Taureau (Plage Pointe-Fine)", 
            region: "Mauricie",
            lat: 46.7468, lon: -73.6505, 
            image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement au Parc régional (Pointe-Fine).", 
            prix: "Frais d'accès au parc régional.", 
            info: "Plages de sable magnifiques. Attention à la navigation moteur.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Lac Maskinongé (St-Gabriel)", 
            region: "Mauricie",
            lat: 46.3330, lon: -73.3865, 
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            parking: "Plage municipale de Saint-Gabriel.", 
            prix: "Stationnement payant en haute saison.", 
            info: "Grand lac peu profond par endroits, idéal pour les familles.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac des Piles (Baie-Martin)", 
            region: "Mauricie",
            lat: 46.5925, lon: -72.8235,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            parking: "Accès payant via le Camping Baie-Martin.", 
            prix: "Accès payant selon la saison.",
            info: "Eau cristalline exceptionnelle (source d'eau potable de la ville).",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac-aux-Sables", 
            region: "Mauricie",
            lat: 46.8738, lon: -72.3942,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement à la plage municipale.", 
            prix: "Accès public gratuit.",
            info: "Sable fin et eau claire. Très fréquenté durant l'été.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Parc National - Lac Édouard", 
            region: "Mauricie",
            lat: 46.7882, lon: -72.8575,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement de la plage du Lac-Édouard.", 
            prix: "Entrée Parc National + Lavage obligatoire.", 
            info: "Plage surveillée et eaux calmes. Parfait pour le paddle yoga.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac Tremblant", 
            region: "Laurentides",
            lat: 46.1402, lon: -74.6172,
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement au village piétonnier de Tremblant.", 
            prix: "Accès payant (frais journaliers pour non-résidents).", 
            info: "Naviguez sur un magnifique lac au pied de la célèbre montagne de ski. Paysage somptueux.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Rivière Rouge (Labelle)", 
            region: "Laurentides",
            lat: 46.2762, lon: -74.7298,
            image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement gratuit au Parc de la Gare de Labelle.", 
            prix: "Accès public gratuit.", 
            info: "Eaux calmes serpentant entre de magnifiques plages de sable fin, parfaites pour le pique-nique.",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Lac Stukely (Mont-Orford)", 
            region: "Estrie",
            lat: 45.3795, lon: -72.2205,
            image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement au Centre de services Le Cerisier.", 
            prix: "Entrée de parc de la SEPAQ obligatoire.", 
            info: "Eau calme et très propre au cœur du parc national. Navigation sauvage protégée du vent.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac Memphrémagog (Magog)", 
            region: "Estrie",
            lat: 45.2648, lon: -72.1535,
            image: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement à la plage des Cantons à Magog.", 
            prix: "Accès public gratuit (stationnement payant en saison).", 
            info: "Vue extraordinaire sur le Mont Orford. Attention au vent de face et aux bateaux à moteur.",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Fjord du Saguenay (L'Anse)", 
            region: "Saguenay-Lac-Saint-Jean",
            lat: 48.2450, lon: -70.2815,
            image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement au quai municipal de L'Anse-Saint-Jean.", 
            prix: "Accès libre et gratuit.", 
            info: "Naviguez au milieu de falaises géantes de 300m. Réservé aux experts (marées et vents forts).",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Lac Saint-Jean (Alma)", 
            region: "Saguenay-Lac-Saint-Jean",
            lat: 48.5695, lon: -71.6505,
            image: "https://images.unsplash.com/photo-1439853949127-fa647821ebb0?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement de la plage Dam-en-Terre à Alma.", 
            prix: "Accès public gratuit.", 
            info: "Une véritable mer intérieure. Vagues importantes par vent d'Est.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Rivière Bonaventure", 
            region: "Gaspésie",
            lat: 48.0625, lon: -65.5165,
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
            parking: "Accès public sous le pont de la route 132.", 
            prix: "Gratuit pour navigation autonome.", 
            info: "Considérée comme l'une des rivières les plus limpides au monde. Sensation de léviter sur l'eau.",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Parc National Forillon", 
            region: "Gaspésie",
            lat: 48.8305, lon: -64.2165,
            image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement au Havre de Grande-Grave.", 
            prix: "Tarification d'entrée de Parc Canada applicable.", 
            info: "Naviguez dans une baie magnifique avec possibilité d'observer des phoques et baleines au loin.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Lac Beauport", 
            region: "Québec",
            lat: 46.9435, lon: -71.2935,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement au Club Nautique de Lac-Beauport.", 
            prix: "Frais d'accès journalier requis.", 
            info: "Le point de ralliement des paddlers de la région de Québec. Plan d'eau très calme et abrité.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Marais du Nord (St-Charles)", 
            region: "Québec",
            lat: 46.9395, lon: -71.3835,
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement principal du site d'interprétation.", 
            prix: "Frais d'accès pour la conservation du site.", 
            info: "Explorez un labyrinthe d'eau calme d'une biodiversité exceptionnelle. Calme absolu garanti.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac Meech (Gatineau)", 
            region: "Outaouais",
            lat: 45.5305, lon: -75.8435,
            image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement P11 (Plage O'Brien).", 
            prix: "Accès gratuit au lac (stationnement payant en été).", 
            info: "Plan d'eau très calme niché dans les collines de la Gatineau. Très populaire en été.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Îles-de-Boucherville", 
            region: "Montréal",
            lat: 45.6135, lon: -73.4735,
            image: "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&q=80&w=800",
            parking: "Grand stationnement au Centre de services de l'île.", 
            prix: "Frais d'accès quotidiens de la SEPAQ.", 
            info: "Naviguez dans des chenaux étroits et calmes du Saint-Laurent. Il est fréquent de croiser des cerfs !",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Canal de Lachine", 
            region: "Montréal",
            lat: 45.4810, lon: -73.5765,
            image: "https://images.unsplash.com/photo-1513829096960-ef048298497a?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement près du Marché Atwater.", 
            prix: "Navigation libre et gratuite (permis d'écluse optionnel).", 
            info: "Parcours urbain historique au cœur de Montréal. Eaux calmes sans aucun courant.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Tremblant Nord", 
            region: "Laurentides",
            lat: 46.1535, lon: -74.6438,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement au complexe touristique de Tremblant.", 
            prix: "Accès payant (frais journaliers).", 
            info: "Extension nord du lac Tremblant, moins fréquentée mais tout aussi magnifique.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Rivière des Outaouais (Arundel)", 
            region: "Laurentides",
            lat: 46.0795, lon: -74.9218,
            image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
            parking: "Accès gratuit au parc Arundel.", 
            prix: "Accès public gratuit.", 
            info: "Rivière paisible idéale pour débuter, paysages forestiers exceptionnels.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac du Diable (Laurentides)", 
            region: "Laurentides",
            lat: 46.2295, lon: -74.5568,
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement de la base de plein air.", 
            prix: "Forfait journalier (environ 10$).", 
            info: "Eau cristalline et faible fréquentation. Parfait pour les kayakistes qui cherchent la tranquillité.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Lac Mégantic", 
            region: "Estrie",
            lat: 45.5585, lon: -71.1415,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement municipal à Mégantic.", 
            prix: "Accès gratuit (rampe de mise à l'eau).", 
            info: "Grand lac pittoresque avec petites îles. Secteur très sécuritaire pour débuter.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Aylmer (Val-Racine)", 
            region: "Estrie",
            lat: 45.3135, lon: -71.8865,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement de la base de plein air.", 
            prix: "Accès payant (environ 8$).", 
            info: "Petit lac tranquille entouré de montagnes boisées. Excellente expérience de paddle.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac Brome", 
            region: "Estrie",
            lat: 45.4185, lon: -72.3305,
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement public à Lac-Brome.", 
            prix: "Gratuit ou petit frais selon l'endroit.", 
            info: "Réputé pour sa clarté exceptionnelle, communauté de paddlers très active.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Rivière Chicoutimi", 
            region: "Saguenay-Lac-Saint-Jean",
            lat: 48.4215, lon: -71.0605,
            image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800",
            parking: "Accès gratuit au parc de la rivière.", 
            prix: "Accès public gratuit.", 
            info: "Rivière serpentant entre les montagnes, faible courant en amont.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Kénogami", 
            region: "Saguenay-Lac-Saint-Jean",
            lat: 48.3865, lon: -71.2365,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement aux chutes Kénogami.", 
            prix: "Accès gratuit.", 
            info: "Lac magnifique avec cascades accessibles. Eau très claire et froide.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Rivière Ashuapmushuan", 
            region: "Saguenay-Lac-Saint-Jean",
            lat: 48.6415, lon: -72.6875,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            parking: "Accès à partir du parc Ashuapmushuan.", 
            prix: "Frais d'accès minimaux.", 
            info: "Rivière de classe mondiale, sections calmes accessibles aux débutants.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Baie de Percé", 
            region: "Gaspésie",
            lat: 48.7525, lon: -64.2135,
            image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement en centre-ville de Percé.", 
            prix: "À proximité du fameux rocher percé (gratuit).", 
            info: "Baie abritée avec vue sur le rocher Percé. Observation de phoques possible.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac du Cap-aux-Os", 
            region: "Gaspésie",
            lat: 48.3795, lon: -64.8905,
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement municipal (stationnement payant en été).", 
            prix: "Environ 5$ pour le stationnement.", 
            info: "Petit lac côtier avec faible fréquentation, eau froide mais cristalline.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Rivière Cascapédia", 
            region: "Gaspésie",
            lat: 48.0245, lon: -65.9165,
            image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
            parking: "Accès public gratuit (plusieurs rampes).", 
            prix: "Gratuit pour la navigation autonome.", 
            info: "Rivière réputée pour sa grande clarté et ses courants modérés.",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Lac des Îles (Québec)", 
            region: "Québec",
            lat: 46.8865, lon: -71.3105,
            image: "https://images.unsplash.com/photo-1470070459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement gratuit  à proximité du lac.", 
            prix: "Accès public gratuit.", 
            info: "Petit lac urbain avec îles, parfait pour sortie courte depuis Québec.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Marais de l'Île-Madame", 
            region: "Québec",
            lat: 46.9465, lon: -71.2665,
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement du site de conservation.", 
            prix: "Frais d'accès minimaux (environ 3$).", 
            info: "Marais protégé avec une biodiversité exceptionnelle, observation d'oiseaux.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Rivière Sainte-Anne (Québec)", 
            region: "Québec",
            lat: 46.9495, lon: -71.0865,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement gratuit du parc. ", 
            prix: "Accès public gratuit.", 
            info: "Rivière pittoresque avec sections très calmes, prairies et forêts alentour.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Leamy (Gatineau)", 
            region: "Outaouais",
            lat: 45.4395, lon: -75.6765,
            image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement du parc de la Gatineau.", 
            prix: "Accès gratuit au parc (stationnement payant).", 
            info: "Lac tranquille au cœur du parc de la Gatineau, très populaire en week-end.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Rivière des Outaouais (Chelsea)", 
            region: "Outaouais",
            lat: 45.4655, lon: -75.7065,
            image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement à Chelsea.", 
            prix: "Accès gratuit.", 
            info: "Section calme de la rivière majeure de la région, idéale pour débuter.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Pink (Outaouais)", 
            region: "Outaouais",
            lat: 45.3465, lon: -75.4105,
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
            parking: "Petit stationnement d'accès public.", 
            prix: "Gratuit.", 
            info: "Petit lac privé-ish mais accessible. Eau claire et calme, peu connu.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Philippe (Outaouais)", 
            region: "Outaouais",
            lat: 45.5795, lon: -75.5305,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement du parc provinc.", 
            prix: "Frais d'accès (environ 7$).", 
            info: "Lac de parc provincial avec plages aménagées et zones protégées.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Bassin de Lachine (Montréal)", 
            region: "Montréal",
            lat: 45.4665, lon: -73.5575,
            image: "https://images.unsplash.com/photo-1513829096960-ef048298497a?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement du Centre Nautique.", 
            prix: "Navigation libre et gratuite.", 
            info: "Plan d'eau urbain parfait pour les sorties courtes, bien développé.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Fleuve Saint-Laurent (Île Sainte-Hélène)", 
            region: "Montréal",
            lat: 45.4980, lon: -73.5370,
            image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement près du circuit Gilles Villeneuve.", 
            prix: "Accès gratuit depuis la côte.", 
            info: "Fjord urbain magnifique, eaux un peu plus agitées (niveau intermédiaire).",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Lac Masson (Montréal - Parc Jean Drapeau)", 
            region: "Montréal",
            lat: 45.5095, lon: -73.5410,
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
            parking: "Stationnement du parc Jean Drapeau.", 
            prix: "Frais d'accès au parc (environ 5$).", 
            info: "Lac de parc urbain, calme et sécuritaire pour les débutants.",
            isFree: false,
            level: "facile"
        }
    ];
    // 4. Weather Emoji Function
    function getWeatherEmoji(iconCode) {
        const emojiMap = {
            '01d': '☀️', '01n': '🌙',
            '02d': '⛅', '02n': '☁️',
            '03d': '☁️', '03n': '☁️',
            '04d': '☁️', '04n': '☁️',
            '09d': '🌦️', '09n': '🌦️',
            '10d': '🌧️', '10n': '🌧️',
            '11d': '⛈️', '11n': '⛈️',
            '13d': '❄️', '13n': '❄️',
            '50d': '🌫️', '50n': '🌫️'
        };
        return emojiMap[iconCode] || '❓';
    }

    // 5. API Logic
    async function getMeteo(lat, lon, name, marker) {
        if(!apiKey || apiKey === "VOTRE_CLE_API_ICI") {
            marker.bindPopup(`<b>${name}</b><br>⚠️ Clé API manquante.`).openPopup();
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`;

        try {
            const response = await fetch(url);
            const data = await response.json();
        
            const temp = Math.round(data.main.temp);
            const vent = Math.round(data.wind.speed * 3.6); 
            const tempEau = temp - 4;   
            const desc = data.weather[0].description;
            const iconCode = data.weather[0].icon;

            let statusColor = "bg-green-500";
            let statusText = "Conditions Idéales 🟢";

            if (vent > 18) {
                statusColor = "bg-red-500";
                statusText = "Navigation Déconseillée 🔴";
            } else if (vent >= 10) {
                statusColor = "bg-yellow-500";
                statusText = "Prudence : Vent modéré 🟡";
            }

                marker.bindPopup(`
        <div class="text-sm p-1">
            <h3 class="text-lg text-blue-800 font-bold italic mb-1 border-b border-blue-100 pb-1">${name}</h3>
            
            <div class="flex items-center mb-2 bg-blue-50 dark:bg-slate-800/50 p-2 rounded-lg border border-slate-200">
                <span class="text-xl mr-2">${getWeatherEmoji(iconCode)}</span>
                <span class="text-slate-900 dark:text-white capitalize text-[11px] font-bold leading-tight">
                    ${desc}
                </span>
            </div>

            <div class="mb-2 p-1.5 rounded-lg text-white text-center font-bold text-[10px] uppercase tracking-wider ${statusColor}">
                ${statusText}
            </div>

            <div class="grid grid-cols-2 gap-2 text-center mb-2">
                <div class="bg-slate-100 p-1 rounded-lg border border-slate-200">
                    <span class="block text-[9px] text-slate-500 uppercase">Air</span>
                    <b class="text-xs">${temp}°C</b>
                </div>
                <div class="bg-slate-100 p-1 rounded-lg border border-slate-200">
                    <span class="block text-[9px] text-slate-500 uppercase">Vent</span>
                    <b class="text-xs">${vent} km/h</b>
                </div>
            </div>

            <div class="flex flex-col gap-1.5">
                <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}', '_blank')" 
                    class="w-full py-2 bg-slate-800 text-white rounded-md font-bold text-[10px] uppercase hover:bg-black transition-colors flex items-center justify-center gap-1">
                    🚗 Itinéraire
                </button>
                
                <div class="grid grid-cols-2 gap-1.5">
                    <button onclick="ouvrirSidebar('${name}')" class="py-2 bg-blue-600 text-white rounded-md font-bold text-[10px] uppercase hover:bg-blue-700 transition-colors">
                        📍 Infos
                    </button>
                    <button onclick="toggleFavorite('${name}')" class="py-2 border border-yellow-500 text-yellow-600 rounded-md font-bold text-[10px] uppercase hover:bg-yellow-50 transition-colors">
                        ⭐ Favori
                    </button>
                </div>
            </div>
        </div>
    `, { 
        maxWidth: 260, 
        minWidth: 220,
        className: 'custom-popup' 
    }).openPopup();
            
            // Forcer la mise à jour de la carte pour corriger l'affichage des tuiles et popups
            setTimeout(() => map.invalidateSize(), 100);
        } catch (error) {
            console.error("Erreur:", error);
        }
    }

    function geolocaliser(event) {
    if (!navigator.geolocation) {
        alert("La géolocalisation n'est pas supportée par votre navigateur.");
        return;
    }

    // On affiche un petit message de chargement
    const btn = event.currentTarget;
    btn.innerText = "⌛";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // 1. On centre la carte sur l'utilisateur avec un zoom plus proche
            map.setView([lat, lon], 12);

            // 2. On ajoute un marqueur spécial pour l'utilisateur
            L.marker([lat, lon], {
                icon: L.divIcon({
                    className: 'custom-div-icon',
                    html: "<div style='background-color:#3b82f6; width:15px; height:15px; border-radius:50%; border:2px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);'></div>",
                    iconSize: [15, 15],
                    iconAnchor: [7, 7]
                })
            }).addTo(map).bindPopup("<b>Vous êtes ici</b>").openPopup();

            btn.innerText = "📍";
        },
        () => {
            alert("Impossible de récupérer votre position. Vérifiez vos autorisations.");
            btn.innerText = "📍";
        }
    );
    }

    // 5. Markers init
    let markers = [];
    spots.forEach(spot => {
        const regionColor = getRegionColor(spot.region);
        let marker = L.marker([spot.lat, spot.lon], {
            icon: L.icon({
                iconUrl: createRegionMarkerIcon(regionColor),
                shadowUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAASCAYAAACiyhI2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6klEQVR4nO2VQQrCMBBF/0VsxZNexB4qXkWt4tGbCIJY3URD2BmSDknJZpbFggfee97LhE2WJXEymUwmu1HXdaIoSjKZTCb/yXa71Xg81uVySZvNRpfLRafTSYfDQZfLRe73u+73u06nk+73u+73e1UUheq6riqKQsfjUYvFQo/HQ9frVY/HQ7vdTpvNRl3XVUURRZGO44jiONbhcFDXdaqqimq1mqpoGo31el3lcpn1+12n00nH41Hz+VzHcbTb7dRsNlOpVKqqqkql0kRRRHEcT1VVlRZFoZOTE63Xa+32e9V13Ylms5nG47GWy6X2+71Op5OqVCoajUay7dt2u5Xjn5hMJpv/x9fX1z/B4uO7fX/i2bS+/wPO0HX9PXV9P9P3cZwwjuMatrP8pBv8BrMCcbqf0wAAAABJRU5ErkJggg==',
                iconSize: [32, 40],
                shadowSize: [41, 16],
                iconAnchor: [16, 40],
                shadowAnchor: [12, 16],
                popupAnchor: [0, -30],
                className: 'marker-' + (spot.region?.toLowerCase().replace(/[ -]/g, '_') || 'mauricie')
            })
        }).addTo(map);
        
        marker.spotType = getSpotType(spot.name);
        marker.isFree = spot.isFree;
        marker.level = spot.level;
        marker.region = spot.region || "Mauricie";
        marker.regionColor = regionColor;
        markers.push(marker);
        marker.on('click', function() {
            getMeteo(spot.lat, spot.lon, spot.name, marker);
        });
    });

    // Initialiser dynamiquement le sélecteur de spot et le filtre de région
    initSpotSelect();
    initRegionFilter();

    // Fonction pour déterminer le type de spot
    function getSpotType(name) {
        if (name.includes('Lac')) return 'lac';
        if (name.includes('Rivière')) return 'riviere';
        if (name.includes('Parc')) return 'parc';
        return 'lac'; // Défaut
    }

    // État global des filtres
    let currentFilters = {
        region: 'all',
        type: 'all',
        freeOnly: false,
        level: 'all'
    };

    // Fonction de filtrage multi-critères
    function appliquerFiltres() {
        markers.forEach(marker => {
            const matchesRegion = currentFilters.region === 'all' || marker.region === currentFilters.region;
            const matchesType = currentFilters.type === 'all' || marker.spotType === currentFilters.type;
            const matchesFree = !currentFilters.freeOnly || marker.isFree === true;
            const matchesLevel = currentFilters.level === 'all' || marker.level === currentFilters.level;

            if (matchesRegion && matchesType && matchesFree && matchesLevel) {
                map.addLayer(marker);
            } else {
                map.removeLayer(marker);
            }
        });
    }

    function filterRegion(region) {
        currentFilters.region = region;
        
        // Afficher/masquer les stats selon la sélection
        const statsDiv = document.getElementById('regionStats');
        if (region === 'all') {
            statsDiv.classList.add('hidden');
            // Revenir à la vue initiale
            map.setView([initialView.lat, initialView.lon], initialView.zoom);
        } else {
            statsDiv.classList.remove('hidden');
            const stats = getRegionStats(region);
            document.getElementById('statTotal').textContent = stats.total;
            document.getElementById('statFree').textContent = stats.free;
            document.getElementById('statEasy').textContent = stats.easy;
            document.getElementById('statSport').textContent = stats.sport;
            
            // Centrer la map sur la région sélectionnée
            const regionMarkers = markers.filter(m => m.region === region);
            if (regionMarkers.length > 0) {
                const bounds = L.latLngBounds(regionMarkers.map(m => m.getLatLng()));
                map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });
            }
        }
        
        appliquerFiltres();
    }

    // Actions interactives pour les filtres
    function filterSpots(type) {
        currentFilters.type = type;
        
        document.querySelectorAll('.filter-type-btn').forEach(btn => {
            if (btn.getAttribute('data-type') === type) {
                btn.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'scale-105');
                btn.classList.remove('bg-white/70', 'text-slate-700', 'dark:bg-slate-800/70', 'dark:text-slate-200');
            } else {
                btn.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'scale-105');
                btn.classList.add('bg-white/70', 'text-slate-700', 'dark:bg-slate-800/70', 'dark:text-slate-200');
            }
        });
        
        appliquerFiltres();
    }

    function filterLevel(level) {
        currentFilters.level = level;
        
        document.querySelectorAll('.filter-level-btn').forEach(btn => {
            if (btn.getAttribute('data-level') === level) {
                btn.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'scale-105');
                btn.classList.remove('bg-white/70', 'text-slate-700', 'dark:bg-slate-800/70', 'dark:text-slate-200');
            } else {
                btn.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'scale-105');
                btn.classList.add('bg-white/70', 'text-slate-700', 'dark:bg-slate-800/70', 'dark:text-slate-200');
            }
        });
        
        appliquerFiltres();
    }

    function toggleFreeFilter(checked) {
        currentFilters.freeOnly = checked;
        appliquerFiltres();
    }

    // Fonction toggle thème
    function toggleTheme() {
        const body = document.body;
        const button = document.getElementById('themeToggle');
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            button.innerText = '☀️ clair';
        } else {
            button.innerText = '🌙 sombre';
        }
    }

    // Bascule ouvrir/fermer le panneau de filtres
    function toggleFilterCollapse() {
        const content = document.getElementById('filterContent');
        const btn = document.getElementById('filterToggleBtn');

        const isOpen = !content.classList.contains('hidden');

        if (isOpen) {
            // Fermer : replier le contenu, revenir à une pilule ronde
            content.classList.add('hidden');
            btn.classList.remove('rounded-t-2xl');
            btn.classList.add('rounded-full');
        } else {
            // Ouvrir : afficher le contenu, arrondir seulement le haut du bouton
            content.classList.remove('hidden');
            btn.classList.remove('rounded-full');
            btn.classList.add('rounded-t-2xl');
        }
    }

    // Fonction pour vérifier si un spot est favori
    function isFavorite(name) {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        return favorites.includes(name);
    }

    // Fonction pour ajouter/retirer des favoris
    function toggleFavorite(name) {
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (favorites.includes(name)) {
            favorites = favorites.filter(fav => fav !== name);
            alert(`${name} retiré des favoris.`);
        } else {
            favorites.push(name);
            alert(`${name} ajouté aux favoris !`);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    // Fonction pour afficher les favoris
    function showFavorites() {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const list = document.getElementById('favoritesList');
        const noFav = document.getElementById('noFavorites');
        
        list.innerHTML = '';
        
        if (favorites.length === 0) {
            noFav.style.display = 'block';
        } else {
            noFav.style.display = 'none';
            favorites.forEach(name => {
        const spot = spots.find(s => s.name === name);
        if (spot) {
            const item = document.createElement('div');
            // On garde les classes pour le style du rectangle
            item.className = 'bg-yellow-50 p-4 rounded-xl border border-yellow-100 hover:bg-yellow-100 transition cursor-pointer mb-3';
            
            // On enlève le bouton ici, on garde juste le texte
            item.innerHTML = `
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="font-bold text-yellow-800">${name}</h4>
                        <p class="text-sm text-slate-600">${spot.parking || 'Accès disponible'}</p>
                    </div>
                    <span class="text-yellow-500 text-xl">📍</span>
                </div>
            `;
            
            // C'est cette ligne qui rend tout le rectangle cliquable
            item.onclick = () => goToFavorite(name);
            list.appendChild(item);
        }
    });
        }
        
        // Ouvrir la sidebar
        document.getElementById('favoritesSidebar').classList.remove('translate-x-full');
        document.getElementById('overlay').classList.remove('hidden');
    }

    // Fonction pour aller à un favori
    function goToFavorite(name) {
        const spot = spots.find(s => s.name === name);
        if (spot) {
            // 1. Fermer la sidebar des favoris et l'overlay
            fermerFavoritesSidebar();

            // 2. Faire défiler la page jusqu'à la carte (pour être sûr de la voir)
            const carteElement = document.getElementById('carte');
            if (carteElement) {
                carteElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // 3. Centrer la carte sur le spot
            map.setView([spot.lat, spot.lon], 13);

            // 4. OUVRIR LA PAGE D'INFORMATION (la sidebar de gauche/droite selon ton code)
            // On utilise ta fonction existante ouvrirSidebar
            ouvrirSidebar(name);

            // 5. Simuler un clic pour ouvrir le popup météo sur la carte
            // On cherche le marqueur correspondant aux coordonnées
            map.eachLayer(layer => {
                if (layer instanceof L.Marker) {
                    const latLng = layer.getLatLng();
                    // On vérifie si les coordonnées correspondent (avec une petite marge pour la précision)
                    if (Math.abs(latLng.lat - spot.lat) < 0.001 && Math.abs(latLng.lng - spot.lon) < 0.001) {
                        layer.fire('click');
                    }
                }
            });
        }
    }

    // Fonction pour fermer la sidebar des favoris
    function fermerFavoritesSidebar() {
        document.getElementById('favoritesSidebar').classList.add('translate-x-full');
        document.getElementById('overlay').classList.add('hidden');
    }

    // Fonction pour gérer le menu mobile
    function toggleMobileMenu() {
        const menu = document.getElementById('mobileMenu');
        menu.classList.toggle('hidden');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');

        if (menuToggle) {
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation(); // Empêche le clic de "remonter" jusqu'au document
                toggleMobileMenu();
            });
        }

        // Fermer le menu mobile en cliquant ailleurs sur la page
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });

        // Gérer le partage de spot via le hash de l'URL au chargement
        const hash = window.location.hash;
        if (hash && hash.startsWith('#spot-')) {
            const slug = hash.replace('#spot-', '');
            const spot = spots.find(s => getSpotSlug(s.name) === slug);
            if (spot) {
                setTimeout(() => {
                    selectSpot(spot.name);
                }, 1200); // Délai de sécurité pour s'assurer que Leaflet et la carte sont pleinement chargés
            }
        }
    });

    // 6. UI Functions
    function ouvrirSidebar(nom) {
        const lac = spots.find(s => s.name === nom);
        const water = getWaterCondition(); // <--- On récupère les infos ici

        if(lac) {
            const sidebar = document.getElementById('sidebar');
            
            sidebar.innerHTML = `
                <div class="relative h-64 w-full">
                    <img src="${lac.image}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    <button onclick="fermerSidebar()" class="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center">✕</button>
                    <h3 class="absolute bottom-6 left-6 text-white text-3xl font-black italic">${lac.name}</h3>
                </div>

                <div class="p-6 space-y-6">
                    <div class="flex items-start gap-4">
                        <div class="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl text-2xl">🚗</div>
                        <div>
                            <h4 class="font-bold text-slate-900 dark:text-white">Accès & Parking</h4>
                            <p class="text-slate-600 dark:text-slate-400 text-sm">${lac.parking}</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div class="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl text-2xl">💰</div>
                        <div>
                            <h4 class="font-bold text-slate-900 dark:text-white">Tarification</h4>
                            <p class="text-slate-600 dark:text-slate-400 text-sm">${lac.prix}</p>
                        </div>
                    </div>

                    <div class="bg-slate-900 dark:bg-blue-900/50 text-white p-5 rounded-3xl flex items-center gap-4 shadow-xl border border-white/5">
                        <div class="text-3xl bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">🌡️</div>
                        <div>
                            <h4 class="text-[10px] uppercase font-black tracking-widest text-blue-400">Eau estimée : ${water.temp}</h4>
                            <p class="text-sm font-medium leading-tight">${water.conseil}</p>
                        </div>
                    </div>

                    <!-- Section Prévisions Live 3 Jours -->
                    <div id="sidebar-forecast" class="space-y-3">
                        <div class="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
                            <h4 class="font-black text-blue-600 dark:text-blue-400 uppercase text-[10px] tracking-widest flex items-center gap-1.5">
                                📅 Prévisions 3 jours (Paddle Live)
                            </h4>
                            <span class="text-[9px] bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Vent max 💨</span>
                        </div>
                        
                        <!-- Skeleton Loader -->
                        <div class="forecast-card animate-pulse-custom space-y-4">
                            <div class="flex items-center justify-between">
                                <div class="h-4 bg-slate-300 dark:bg-slate-700 rounded w-24"></div>
                                <div class="h-4 bg-slate-300 dark:bg-slate-700 rounded w-16"></div>
                                <div class="h-6 bg-slate-300 dark:bg-slate-700 rounded w-16"></div>
                            </div>
                            <div class="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-3">
                                <div class="h-4 bg-slate-300 dark:bg-slate-700 rounded w-24"></div>
                                <div class="h-4 bg-slate-300 dark:bg-slate-700 rounded w-16"></div>
                                <div class="h-6 bg-slate-300 dark:bg-slate-700 rounded w-16"></div>
                            </div>
                            <div class="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-3">
                                <div class="h-4 bg-slate-300 dark:bg-slate-700 rounded w-24"></div>
                                <div class="h-4 bg-slate-300 dark:bg-slate-700 rounded w-16"></div>
                                <div class="h-6 bg-slate-300 dark:bg-slate-700 rounded w-16"></div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-800/10 dark:bg-white/5 p-5 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
                        <h4 class="font-black text-blue-600 dark:text-blue-400 uppercase text-[10px] mb-2 tracking-widest">
                            💡 Conseil d'expert
                        </h4>
                        <p class="text-slate-700 dark:text-slate-200 text-sm italic leading-relaxed">
                            "${lac.info}"
                        </p>
                    </div>

                    <div class="flex gap-3">
                        <button onclick="partagerSpot('${lac.name.replace(/'/g, "\\'")}', ${lac.lat}, ${lac.lon})" 
                                class="flex-1 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10 active:scale-95"
                                title="Partager ce spot">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg>
                            <span>PARTAGER</span>
                        </button>
                        <button onclick="window.open('https://www.google.com/maps?q=${lac.lat},${lac.lon}', '_blank')" 
                                class="flex-[1.4] py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            <span>CAP SUR CE SPOT</span>
                        </button>
                    </div>
                </div>
            `;
            
            sidebar.classList.remove('translate-x-full');
            document.getElementById('overlay').classList.remove('hidden');

            // Charger les prévisions météo réelles
            chargerPrevisions(lac.lat, lac.lon);
        }
    }

    async function chargerPrevisions(lat, lon) {
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`;
        const container = document.getElementById('sidebar-forecast');
        if (!container) return;

        try {
            const response = await fetch(forecastUrl);
            const data = await response.json();
            
            if (data.cod !== "200") {
                container.innerHTML = `
                    <div class="p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-2xl text-xs text-center border border-red-100 dark:border-red-900/30">
                        ⚠️ Impossible de charger les prévisions météo.
                    </div>
                `;
                return;
            }

            // Regrouper par jour
            const dailyData = {};
            data.list.forEach(item => {
                const dateKey = item.dt_txt.split(' ')[0];
                if (!dailyData[dateKey]) {
                    dailyData[dateKey] = [];
                }
                dailyData[dateKey].push(item);
            });

            // Extraire les 3 premiers jours disponibles
            const sortedDates = Object.keys(dailyData).sort();
            const selectedDates = sortedDates.slice(0, 3);
            
            let forecastHTML = `<div class="forecast-card space-y-1">`;

            selectedDates.forEach((dateKey) => {
                const dayRecords = dailyData[dateKey];
                
                let minTemp = Infinity;
                let maxTemp = -Infinity;
                let maxWind = 0;
                
                dayRecords.forEach(rec => {
                    if (rec.main.temp_min < minTemp) minTemp = rec.main.temp_min;
                    if (rec.main.temp_max > maxTemp) maxTemp = rec.main.temp_max;
                    
                    const windKmh = rec.wind.speed * 3.6;
                    if (windKmh > maxWind) maxWind = windKmh;
                });
                
                minTemp = Math.round(minTemp);
                maxTemp = Math.round(maxTemp);
                maxWind = Math.round(maxWind);

                // Trouver un record représentatif pour l'icône de la journée (12:00, 15:00 ou autre)
                let repRecord = dayRecords.find(rec => rec.dt_txt.includes("12:00:00")) 
                                || dayRecords.find(rec => rec.dt_txt.includes("15:00:00"))
                                || dayRecords.find(rec => rec.dt_txt.includes("09:00:00"))
                                || dayRecords[Math.floor(dayRecords.length / 2)] 
                                || dayRecords[0];

                const icon = repRecord.weather[0].icon;
                const desc = repRecord.weather[0].description;
                
                // Formater la date en Français : "Lun. 1 juin"
                const dateObj = new Date(repRecord.dt * 1000);
                let dateStr = dateObj.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
                dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
                dateStr = dateStr.replace('.', '');

                // Couleur du badge de vent
                let badgeClass = "forecast-badge-green";
                let statusDot = "🟢";
                
                if (maxWind > 18) {
                    badgeClass = "forecast-badge-red";
                    statusDot = "🔴";
                } else if (maxWind >= 10) {
                    badgeClass = "forecast-badge-yellow";
                    statusDot = "🟡";
                }

                forecastHTML += `
                    <div class="forecast-row">
                        <div class="flex flex-col">
                            <span class="font-bold text-sm text-slate-800 dark:text-white leading-tight">${dateStr}</span>
                            <span class="text-[10px] text-slate-500 capitalize leading-none mt-0.5">${desc}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">${getWeatherEmoji(icon)}</span>
                            <div class="text-right">
                                <span class="text-xs font-semibold text-slate-700 dark:text-slate-300 block">${minTemp}° / ${maxTemp}°C</span>
                            </div>
                            <div class="px-2.5 py-1 rounded-full text-[10px] font-bold ${badgeClass} min-w-[70px] text-center flex items-center justify-center gap-1 shadow-sm">
                                <span>${statusDot}</span>
                                <span>${maxWind} <span class="text-[8px]">km/h</span></span>
                            </div>
                        </div>
                    </div>
                `;
            });

            forecastHTML += `</div>`;
            container.innerHTML = `
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
                    <h4 class="font-black text-blue-600 dark:text-blue-400 uppercase text-[10px] tracking-widest flex items-center gap-1.5">
                        📅 Prévisions 3 jours (Paddle Live)
                    </h4>
                    <span class="text-[9px] bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Vent max 💨</span>
                </div>
                ${forecastHTML}
            `;
            
        } catch (error) {
            console.error("Erreur lors du chargement des prévisions:", error);
            container.innerHTML = `
                <div class="p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-2xl text-xs text-center border border-red-100 dark:border-red-900/30">
                    ⚠️ Erreur réseau lors du chargement.
                </div>
            `;
        }
    }

    function getWaterCondition() {
        const month = new Date().getMonth(); // 0 = Janvier, 3 = Avril, 4 = Mai...
        
        const conditions = {
            3: { temp: "4-8°C", conseil: "Eau glaciale. Sortie déconseillée sans équipement pro." },
            4: { temp: "8-14°C", conseil: "Eau très froide. Wetsuit complet (4/3mm) obligatoire." },
            5: { temp: "15-19°C", conseil: "Eau fraîche. Un shorty ou néoprène léger est recommandé." },
            6: { temp: "20-24°C", conseil: "Eau parfaite ! Profitez-en, maillot de bain suffisant." },
            7: { temp: "21-25°C", conseil: "Eau chaude. Idéal pour la baignade et le paddle." },
            8: { temp: "18-22°C", conseil: "L'eau commence à rafraîchir. Apportez un coupe-vent." },
            9: { temp: "12-16°C", conseil: "L'automne est là. Wetsuit recommandé." }
        };

        return conditions[month] || { temp: "Non dispo", conseil: "Vérifiez les conditions locales." };
    }

    function selectSpot(name) {
        if (!name) return;
        const lac = spots.find(s => s.name === name);
        if (!lac) return;

        map.setView([lac.lat, lac.lon], 12);
        document.getElementById('carte').scrollIntoView({ behavior: 'smooth', block: 'start' });
        ouvrirSidebar(name);
        document.getElementById('spotSelect').value = "";
    }

    function resetView() {
        map.closePopup(); // Fermer tout popup ouvert
        map.setView([initialView.lat, initialView.lon], initialView.zoom);
    }

    function fermerSidebar() {
        document.getElementById('sidebar').classList.add('translate-x-full');
        document.getElementById('overlay').classList.add('hidden');
    }

    function getSpotSlug(name) {
        return name.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
            .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with -
            .replace(/^-+|-+$/g, ''); // trim -
    }

    async function partagerSpot(nom, lat, lon) {
        const slug = getSpotSlug(nom);
        const shareUrl = window.location.href.split('#')[0] + '#spot-' + slug;
        const textMessage = `Découvrez le spot de paddle "${nom}" en Mauricie ! Météo en direct, vent et conseils :`;
        
        // Détecter si on est sur mobile pour utiliser Web Share, sinon copier le lien directement sur desktop
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile && navigator.share) {
            try {
                await navigator.share({
                    title: `Spot Paddle : ${nom}`,
                    text: textMessage,
                    url: shareUrl
                });
                afficherToast("✨ Partagé avec succès !");
            } catch (err) {
                // Si l'utilisateur annule le partage, on ne fait rien. Sinon fallback clipboard
                if (err.name !== 'AbortError') {
                    copierDansPressePapier(shareUrl);
                }
            }
        } else {
            copierDansPressePapier(shareUrl);
        }
    }

    function copierDansPressePapier(text) {
        navigator.clipboard.writeText(text).then(() => {
            afficherToast("✅ Lien copié !");
        }).catch(err => {
            console.error("Impossible de copier : ", err);
            afficherToast("❌ Échec de la copie.");
        });
    }

    function afficherToast(message) {
        // Supprimer les toasts existants pour éviter la superposition
        const existingToasts = document.querySelectorAll('.custom-toast');
        existingToasts.forEach(toast => toast.remove());

        const toast = document.createElement('div');
        // Custom premium toast using tailwind & blur
        toast.className = 'custom-toast fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000] px-6 py-4 bg-slate-900/95 dark:bg-white text-white dark:text-slate-900 rounded-3xl flex items-center gap-3 backdrop-blur-md transition-all duration-300 transform translate-y-12 opacity-0 font-black text-xs uppercase tracking-wider shadow-2xl border border-white/10 dark:border-black/5';
        toast.innerHTML = `
            <span class="text-base">🏄‍♂️</span>
            <span>${message}</span>
        `;
        document.body.appendChild(toast);

        // Déclencher l'animation d'entrée
        requestAnimationFrame(() => {
            toast.style.transform = 'translate(-50%, 0)';
            toast.style.opacity = '1';
        });

        // Supprimer après 3 secondes
        setTimeout(() => {
            toast.style.transform = 'translate(-50%, 24px)';
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

    function initSpotSelect() {
        const select = document.getElementById('spotSelect');
        if (!select) return;

        // Réinitialiser en conservant le premier choix
        select.innerHTML = '<option value="" selected class="text-slate-900">📍 Choisir un spot</option>';

        // Regrouper par région
        const spotsByRegion = {};
        spots.forEach(spot => {
            const reg = spot.region || "Mauricie";
            if (!spotsByRegion[reg]) {
                spotsByRegion[reg] = [];
            }
            spotsByRegion[reg].push(spot);
        });

        // Générer le HTML trié par région
        const sortedRegions = Object.keys(spotsByRegion).sort();
        sortedRegions.forEach(reg => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = `🌲 ${reg}`;
            optgroup.className = 'text-slate-900 font-bold';

            spotsByRegion[reg].forEach(spot => {
                const option = document.createElement('option');
                option.value = spot.name;
                option.textContent = spot.name;
                option.className = 'text-slate-900 font-normal';
                optgroup.appendChild(option);
            });

            select.appendChild(optgroup);
        });
    }

    function initRegionFilter() {
        const filter = document.getElementById('regionFilter');
        if (!filter) return;

        // Réinitialiser en conservant le premier choix
        filter.innerHTML = '<option value="all">📍 Toutes les régions</option>';

        // Grouper les régions par zone géographique
        const zoneGroups = {};
        const regionsSet = new Set();
        spots.forEach(spot => {
            if (spot.region) regionsSet.add(spot.region);
        });

        // Organiser par zone
        Array.from(regionsSet).forEach(region => {
            const zone = getRegionZone(region);
            if (!zoneGroups[zone]) zoneGroups[zone] = [];
            zoneGroups[zone].push(region);
        });

        // Ajouter les options groupées par zone
        const sortedZones = Object.keys(zoneGroups).sort();
        sortedZones.forEach(zone => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = zone;
            optgroup.style.fontWeight = 'bold';

            zoneGroups[zone].sort().forEach(region => {
                const stats = getRegionStats(region);
                const option = document.createElement('option');
                option.value = region;
                option.textContent = getRegionEmoji(region) + ' ' + region + ' (' + stats.total + ')';
                option.className = 'text-slate-900 font-bold';
                option.style.paddingLeft = '10px';
                optgroup.appendChild(option);
            });
            filter.appendChild(optgroup);
        });
    }

    // Fonction pour réinitialiser les filtres
    function resetFilters() {
        currentFilters.region = 'all';
        currentFilters.type = 'all';
        currentFilters.freeOnly = false;
        currentFilters.level = 'all';

        // Réinitialiser les boutons et sélecteurs
        document.getElementById('regionFilter').value = 'all';
        document.getElementById('freeOnlyCheckbox').checked = false;

        document.querySelectorAll('.filter-type-btn').forEach(btn => {
            if (btn.getAttribute('data-type') === 'all') {
                btn.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'scale-105');
                btn.classList.remove('bg-white/70', 'text-slate-700', 'dark:bg-slate-800/70', 'dark:text-slate-200');
            } else {
                btn.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'scale-105');
                btn.classList.add('bg-white/70', 'text-slate-700', 'dark:bg-slate-800/70', 'dark:text-slate-200');
            }
        });

        document.querySelectorAll('.filter-level-btn').forEach(btn => {
            if (btn.getAttribute('data-level') === 'all') {
                btn.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'scale-105');
                btn.classList.remove('bg-white/70', 'text-slate-700', 'dark:bg-slate-800/70', 'dark:text-slate-200');
            } else {
                btn.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'scale-105');
                btn.classList.add('bg-white/70', 'text-slate-700', 'dark:bg-slate-800/70', 'dark:text-slate-200');
            }
        });

        appliquerFiltres();
    }

    // ========== NOUVELLES FONCTIONNALITÉS SPOT PADDLE ==========

    /**
     * Trouve les 2 lacs/spots les plus proches de l'utilisateur
     */
    function findNearestSpots() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const nearestSpots = getNearestLakes(latitude, longitude);
                    
                    if (nearestSpots.length > 0) {
                        const html = `
                            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl z-[10000] max-w-md">
                                <div class="text-6xl mb-4 text-center">🎯</div>
                                <h2 class="text-2xl font-bold mb-4">2 Spots les Plus Proches</h2>
                                <div class="space-y-4 mb-6">
                                    ${nearestSpots.map((spot, idx) => `
                                        <a href="lac.html?lake=${spot.slug}" class="block bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 p-4 rounded-lg hover:shadow-lg transition">
                                            <div class="font-bold">${idx + 1}. ${spot.name}</div>
                                            <div class="text-sm text-slate-600 dark:text-slate-400">${spot.region}</div>
                                            <div class="text-sm font-bold text-blue-600 dark:text-blue-400">${spot.distance.toFixed(1)} km</div>
                                        </a>
                                    `).join('')}
                                </div>
                                <button onclick="this.parentElement.parentElement.removeChild(this.parentElement)" class="w-full bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-bold py-2 px-4 rounded-lg">
                                    Fermer
                                </button>
                            </div>
                        `;
                        
                        const modal = document.createElement('div');
                        modal.innerHTML = html;
                        document.body.appendChild(modal.firstElementChild);
                    } else {
                        alert('Impossible de trouver les lacs proches.');
                    }
                },
                (error) => {
                    alert('Pour utiliser cette fonction, veuillez autoriser l\'accès à votre localisation.');
                }
            );
        } else {
            alert('La géolocalisation n\'est pas supportée par votre navigateur.');
        }
    }

    // Expose functions globally for dynamic onclick attributes
    window.partagerSpot = partagerSpot;
    window.getSpotSlug = getSpotSlug;
    window.filterRegion = filterRegion;
    window.initSpotSelect = initSpotSelect;
    window.initRegionFilter = initRegionFilter;
    window.resetFilters = resetFilters;
    window.findNearestSpots = findNearestSpots;