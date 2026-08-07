/**
 * Base de données complète des lacs et rivières
 * Inclut descriptions, FAQ, accès détaillés, photos et calcul Paddle Score™
 */

const lacDatabase = [
    {
        id: "lac-a-la-tortue",
        slug: "lac-a-la-tortue",
        name: "Lac à la Tortue (Plage)",
        region: "Mauricie",
        lat: 46.6110,
        lon: -72.6240,
        mainImage: "assets/spots/lac-a-la-tortue/paddle-coucher-soleil.jpg",
        gallery: [
            "assets/spots/lac-a-la-tortue/paddle-coucher-soleil.jpg",
            "assets/spots/lac-a-la-tortue/coucher-soleil-lac.jpg",
            "assets/spots/lac-a-la-tortue/plage.jpg",
            "assets/spots/lac-a-la-tortue/station-lavage-gratuite.jpg",
            "assets/spots/lac-a-la-tortue/stationnement.jpg"
        ],
        description: "Lac à la Tortue est un joyau populaire de la Mauricie, réputé pour ses eaux calmes et accessibles. Parfait pour les débutants, ce lac offre un environnement sécuritaire avec une infrastructure bien établie.",
        longDescription: "Situées en plein cœur de la Mauricie, les eaux de Lac à la Tortue offrent une expérience paddle accessible et agréable. Le lac est bien aménagé avec une plage publique, un stationnement et une station gratuite de décontamination des embarcations. Le lavage est obligatoire avant la mise à l'eau. Les conditions généralement calmes rendent le lac idéal pour les familles et les paddlers débutants. Attention toutefois à la zone de décollage des hydravions au centre du lac.",
        difficulty: "facile",
        paddleScore: 78,
        scoreFactors: {
            wind: 8,
            rain: 7,
            temperature: 8,
            waves: 9
        },
        isFree: true,
        waterQuality: "Très bonne",
        maxLength: "8 km",
        season: "Mai à septembre",
        parking: {
            location: "Stationnement au Parc Municipal de la Plage",
            spots: 150,
            accessible: true,
            cost: "Gratuit"
        },
        access: {
            description: "Accès facile via le Parc Municipal",
            type: "Plage aménagée",
            difficulty: "Accès facile",
            launchPoint: "Plage principale"
        },
        amenities: [
            "Toilettes publiques",
            "Aire de pique-nique",
            "Station de lavage gratuite",
            "Location d'équipement disponible",
            "Consignes pour paddleboard"
        ],
        warnings: [
            "⚠️ Lavage obligatoire avant la mise à l'eau — station gratuite sur place",
            "⚠️ Zone de décollage d'hydravions - Restez vigilant près du centre du lac",
            "⚠️ Navigation moteur autorisée - Restez prudent",
            "⚠️ Vitesse du vent peut augmenter rapidement l'après-midi"
        ],
        faq: [
            {
                q: "Puis-je louer un paddle board ici ?",
                a: "Oui, plusieurs entreprises proposent des locations sur place. Réservez en avance en haute saison (juillet-août)."
            },
            {
                q: "Le stationnement est-il payant ?",
                a: "Le stationnement est gratuit. Le parc offre 150 places régulièrement."
            },
            {
                q: "Quel est le meilleur moment pour venir ?",
                a: "Tôt le matin (avant 10h) pour éviter le vent et les hydravions. Le lac est aussi calme en fin d'après-midi."
            },
            {
                q: "Puis-je apporter mon propre équipement ?",
                a: "Absolument ! Le parc accueille les paddlers avec leur propre matériel. Le lavage de l'embarcation est toutefois obligatoire et gratuit à la station sur place."
            }
        ],
        highlights: [
            "🟢 Lac idéal pour débuter",
            "🟢 Infrastructure complète",
            "🟢 Zone très accessible",
            "🟢 Station de lavage gratuite",
            "⚠️ Hydravions à surveiller"
        ]
    },
    {
        id: "lac-sacacomie",
        slug: "lac-sacacomie",
        name: "Lac Sacacomie",
        region: "Mauricie",
        lat: 46.527974024663074,
        lon: -73.19878614418161,
        mainImage: "assets/spots/lac-forbes.jpg",
        gallery: [
            "assets/spots/lac-forbes.jpg",
            "assets/spots/lac-maskinonge.jpg"
        ],
        description: "Réputé pour son eau cristalline et ses 42 km de rivage sauvage, Lac Sacacomie est le paradis des paddlers en quête d'aventure. Une eau d'une clarté exceptionnelle vous permettra de voir 15 mètres de profondeur.",
        longDescription: "Avec une longueur de 42 km et une eau exceptionnellement claire, Lac Sacacomie offre l'une des plus belles expériences de paddle en Mauricie. Le rivage sauvage, parsemé d'îles verdoyantes et de baies secrètes, en fait un lieu de prédilection pour les explorateurs. L'eau cristalline permet une visibilité remarquable sous l'eau.",
        difficulty: "sportif",
        paddleScore: 82,
        scoreFactors: {
            wind: 6,
            rain: 8,
            temperature: 8,
            waves: 7
        },
        isFree: false,
        cost: "15$ - 25$ selon la saison",
        waterQuality: "Exceptionnelle (visibilité 15m)",
        maxLength: "42 km",
        season: "Mai à septembre",
        parking: {
            location: "Mise à l'eau OSM près du lac Sacacomie.",
            spots: 80,
            accessible: false,
            cost: "Inclus dans l'accès"
        },
        access: {
            description: "Mise à l'eau OSM près du lac Sacacomie.",
            type: "Mise à l'eau",
            difficulty: "Accès modéré",
            launchPoint: "Point OSM de mise à l'eau"
        },
        amenities: [
            "Centre d'interprétation",
            "Aire de repos",
            "Eau potable",
            "Toilettes"
        ],
        warnings: [
            "⚠️ Lac très long - Estimez vos efforts",
            "⚠️ Vent d'Ouest peut être violent l'après-midi",
            "⚠️ Faible profondeur par endroits"
        ],
        faq: [
            {
                q: "Combien coûte l'accès ?",
                a: "Entre 15$ et 25$ selon la saison. Les tarifs réduits s'appliquent en mai et septembre."
            },
            {
                q: "Puis-je faire une journée complète ?",
                a: "Oui, les toilettes et aire de repos sont disponibles toute la journée."
            },
            {
                q: "Quelle est la meilleure route pour explorer ?",
                a: "Commencez par le nord (plus calme) et explorez les baies latérales. Retour recommandé avant 16h."
            }
        ],
        highlights: [
            "🌊 Eau cristalline (visibilité 15m)",
            "🏝️ 42 km de rivage à explorer",
            "🟡 Pour paddlers intermédiaires+",
            "⭐ L'un des plus beaux lacs du Québec"
        ]
    },
    {
        id: "riviere-st-maurice",
        slug: "riviere-st-maurice",
        name: "Rivière St-Maurice (TR)",
        region: "Mauricie",
        lat: 46.35147138297579,
        lon: -72.52938180436846,
        mainImage: "assets/spots/lac-mercier-illustration-ia.jpg",
        gallery: [
            "assets/spots/lac-mercier-illustration-ia.jpg",
            "assets/spots/lac-maskinonge.jpg"
        ],
        description: "Naviguez autour de l'Île Saint-Quentin au coucher du soleil pour une expérience magique. Cette rivière mythique offre un équilibre parfait entre aventure et accessibilité.",
        longDescription: "La Rivière St-Maurice est un incontournable. L'Île Saint-Quentin offre un circuit de paddle idéal, permettant d'explorer l'histoire industrielle du Québec tout en pagayant. Les courants sont modérés hors du centre, et le paysage vire au magique en fin d'après-midi.",
        difficulty: "sportif",
        paddleScore: 75,
        scoreFactors: {
            wind: 7,
            rain: 6,
            temperature: 7,
            waves: 6
        },
        isFree: false,
        cost: "Frais d'accès au parc de l'île",
        waterQuality: "Bonne",
        maxLength: "Circuit 8 km",
        season: "Mai à octobre",
        parking: {
            location: "Mise à l'eau de l'Île Saint-Quentin / Avenue des Draveurs.",
            spots: 200,
            accessible: true,
            cost: "Inclus"
        },
        access: {
            description: "Mise à l'eau de l'Île Saint-Quentin / Avenue des Draveurs.",
            type: "Mise à l'eau",
            difficulty: "Accès facile",
            launchPoint: "Point OSM de mise à l'eau"
        },
        amenities: [
            "Centre d'information",
            "Toilettes de qualité",
            "Aire de pique-nique",
            "Hébergement (camping)"
        ],
        warnings: [
            "⚠️ Courants forts au centre - ÉVITEZ LE CENTRE",
            "⚠️ Bateaux à moteur présents",
            "⚠️ Marées influencent les courants"
        ],
        faq: [
            {
                q: "Comment éviter les forts courants ?",
                a: "Restez près des berges de l'île. Les courants principaux sont au centre de la rivière."
            },
            {
                q: "Quel est le meilleur circuit ?",
                a: "Circuit complet autour de l'île (8 km) - Environ 2-3h. Magnifique au coucher du soleil."
            },
            {
                q: "Puis-je faire du camping ?",
                a: "Oui, le parc offre des emplacements de camping avec services complets."
            }
        ],
        highlights: [
            "🌅 Paysage magique au coucher du soleil",
            "🏝️ Circuit pédestre de découverte",
            "🚣 Bonne introduction au paddle de rivière",
            "⭐ Histoire industrielle unique",
            "📍 GPS accès et stationnement validés"
        ]
    },
    {
        id: "lac-saint-pierre",
        slug: "lac-saint-pierre",
        name: "Lac Saint-Pierre",
        region: "Mauricie",
        lat: 46.22455,
        lon: -72.92234,
        mainImage: "assets/spots/lac-tremblant.jpg",
        gallery: [
            "assets/spots/lac-tremblant.jpg",
            "assets/spots/lac-maskinonge.jpg"
        ],
        description: "Réserve de biosphère UNESCO, Lac Saint-Pierre est un site d'importance mondiale pour la biodiversité. Préparez-vous pour les conditions venteuses - c'est un lac sportif !",
        longDescription: "Le Lac Saint-Pierre est bien plus qu'un lieu de paddle - c'est un site de conservation d'importance mondiale. La biosphère offre une faune et une flore remarquables. Cependant, ce lac est très exposé au vent d'Ouest et convient mieux aux paddlers expérimentés.",
        difficulty: "sportif",
        paddleScore: 65,
        scoreFactors: {
            wind: 4,
            rain: 6,
            temperature: 7,
            waves: 5
        },
        isFree: false,
        cost: "Frais de mise à l'eau variables",
        waterQuality: "Acceptable",
        maxLength: "Très grand (30+ km possible)",
        season: "Juin à septembre",
        parking: {
            location: "Rampe de mise à l'eau près du Domaine du Lac Saint-Pierre.",
            spots: 120,
            accessible: true,
            cost: "Gratuit"
        },
        access: {
            description: "Rampe de mise à l'eau près du Domaine du Lac Saint-Pierre.",
            type: "Rampe de mise à l'eau",
            difficulty: "Accès modéré",
            launchPoint: "Point OSM de mise à l'eau"
        },
        amenities: [
            "Centre de nature",
            "Toilettes",
            "Aire de pique-nique",
            "Point d'interprétation"
        ],
        warnings: [
            "⚠️ Très exposé au vent d'Ouest - VÉRIFIE LA MÉTÉO",
            "⚠️ Vagues importantes si vent > 15 km/h",
            "⚠️ Refuge d'oiseaux - Navigator doucement"
        ],
        faq: [
            {
                q: "Quelle est la meilleure condition de vent ?",
                a: "Cherchez des jours avec vent < 10 km/h. Vent du matin généralement meilleur."
            },
            {
                q: "Puis-je observer des oiseaux ?",
                a: "Oui ! C'est un refuge d'importance mondiale. Binoculaires recommandés."
            },
            {
                q: "C'est un bon lac pour débuter ?",
                a: "Non, réservé aux paddlers expérimentés. Le vent peut être très violent l'après-midi."
            }
        ],
        highlights: [
            "🦆 Biodiversité mondiale unique",
            "⚠️ Conditions très venteuses",
            "🟡 Réservé aux paddlers confirmés",
            "🌍 Site UNESCO"
        ]
    },
    {
        id: "parc-national-wapizagonke",
        slug: "parc-national-wapizagonke",
        name: "Parc National - Wapizagonke",
        region: "Mauricie",
        lat: 46.66976,
        lon: -73.00577,
        mainImage: "assets/spots/lac-maskinonge.jpg",
        gallery: [
            "assets/spots/lac-maskinonge.jpg"
        ],
        description: "Naviguez au pied de falaises mythiques dans le Parc National de la Mauricie. Les chutes Waber sont accessibles via ce lac - une expérience inoubliable !",
        longDescription: "Le Lac Wapizagonke offre une immersion totale dans la nature sauvage de la Mauricie. Les falaises imposantes, la faune diversifiée et l'accessibilité aux chutes Waber en font un destination de choix pour les amoureux de la nature.",
        difficulty: "facile",
        paddleScore: 85,
        scoreFactors: {
            wind: 8,
            rain: 7,
            temperature: 9,
            waves: 8
        },
        isFree: false,
        cost: "Entrée Parc National (35$ adulte) + Frais de mise à l'eau",
        waterQuality: "Excellente",
        maxLength: "Circuit complet 12 km",
        season: "Mai à octobre",
        parking: {
            location: "Mise à l'eau du secteur Wapizagonke.",
            spots: 80,
            accessible: false,
            cost: "Inclus dans l'entrée"
        },
        access: {
            description: "Mise à l'eau du secteur Wapizagonke.",
            type: "Mise à l'eau",
            difficulty: "Modéré (peut nécessiter portage)",
            launchPoint: "Point OSM de mise à l'eau"
        },
        amenities: [
            "Centre d'accueil",
            "Toilettes",
            "Eau potable",
            "Aire de mandala",
            "Tours en bateau"
        ],
        warnings: [
            "⚠️ Lavage des équipements obligatoire (contrôle des espèces aquatiques envahissantes)",
            "⚠️ Circulation limitée selon les saisons",
            "⚠️ Réservation recommandée en haute saison"
        ],
        faq: [
            {
                q: "Puis-je voir les chutes Waber ?",
                a: "Oui ! Navigation possible jusqu'au pied des chutes. Circuit incluant les chutes ~12 km."
            },
            {
                q: "Quel âge minimum pour paddle ?",
                a: "Pas de limite, mais gilet obligatoire et supervision pour enfants."
            },
            {
                q: "Lavage obligatoire - Combien de temps ?",
                a: "Environ 15-20 min. C'est pour protéger les écosystèmes du parc."
            }
        ],
        highlights: [
            "⛰️ Falaises spectaculaires",
            "💧 Chutes Waber accessibles",
            "🟢 Excellente pour familles",
            "⭐ Top destination Mauricie"
        ]
    },
    {
        id: "lac-taureau",
        slug: "lac-taureau",
        name: "Lac Taureau (Plage Pointe-Fine)",
        region: "Mauricie",
        lat: 46.6890634,
        lon: -73.9001922,
        mainImage: "assets/spots/lac-memphremagog-magog.jpg",
        gallery: [
            "assets/spots/lac-memphremagog-magog.jpg",
            "assets/spots/lac-maskinonge.jpg"
        ],
        description: "Plages de sable magnifiques et eaux profondes, Lac Taureau est le choix parfait pour un week-end en famille. Attention à la navigation moteur.",
        longDescription: "Avec ses plages de sable fin et ses installations modernes, Lac Taureau offre l'essence même du paddling québécois de détente. Le parc régional est bien équipé et accueillant.",
        difficulty: "sportif",
        paddleScore: 79,
        scoreFactors: {
            wind: 7,
            rain: 7,
            temperature: 8,
            waves: 7
        },
        isFree: false,
        cost: "Frais d'accès au parc régional (10$-15$)",
        waterQuality: "Bonne",
        maxLength: "25 km possible",
        season: "Mai à septembre",
        parking: {
            location: "Stationnement de la descente de bateaux du Réservoir Taureau",
            spots: "À vérifier",
            accessible: true,
            cost: "Gratuit"
        },
        access: {
            description: "Accès par la descente de bateaux du Réservoir Taureau",
            type: "Rampe de mise à l'eau",
            difficulty: "Accès facile",
            launchPoint: "Descente de bateaux du Réservoir Taureau"
        },
        amenities: [
            "Plage de sable",
            "Toilettes convenables",
            "Aire de pique-nique",
            "Chalet loué"
        ],
        warnings: [
            "⚠️ Navigation moteur autorisée - Restez visible",
            "⚠️ Beaucoup de baigneurs en été",
            "⚠️ Hauts-fonds par endroits"
        ],
        faq: [
            {
                q: "Le lac est-il bondé en été ?",
                a: "Oui, surtout juillet-août. Venez tôt (avant 10h) ou explorez les baies latérales plus calmes."
            },
            {
                q: "Y a-t-il des locations d'équipement ?",
                a: "Plusieurs pourvoiries à proximité proposent des locations."
            }
        ],
        highlights: [
            "🏖️ Plages de sable fin",
            "👨‍👩‍👧‍👦 Excellent pour les familles",
            "🟡 Entre sportif et loisir",
            "🛥️ Navigation moteur possible"
        ]
    },
    {
        id: "lac-maskinonge",
        slug: "lac-maskinonge",
        name: "Lac Maskinongé (Saint-Gabriel-de-Brandon)",
        region: "Lanaudière",
        lat: 46.33623,
        lon: -73.39885,
        mainImage: "assets/spots/lac-des-piles/vue-depuis-le-sup.jpg",
        gallery: [
            "assets/spots/lac-des-piles/vue-depuis-le-sup.jpg",
            "assets/spots/lac-des-piles/plage-baie-martin.jpg"
        ],
        description: "Grand lac accessible depuis la plage de Saint-Gabriel, au 333 rue du Parc. L'accès par la plage facilite l'arrivée avec une embarcation légère.",
        longDescription: "Le lac Maskinongé est accessible depuis la plage de Saint-Gabriel à Saint-Gabriel-de-Brandon. L'itinéraire mène au 333 rue du Parc, près de la plage, plutôt qu'au centre du lac. Le plan d'eau peut être exposé au vent et à la circulation nautique; vérifiez les conditions et les règles locales avant la mise à l'eau.",
        difficulty: "facile",
        paddleScore: 76,
        scoreFactors: {
            wind: 7,
            rain: 7,
            temperature: 8,
            waves: 8
        },
        isFree: false,
        cost: "Tarifs de plage et de stationnement à vérifier avant le départ",
        waterQuality: "Acceptable",
        maxLength: "15 km",
        season: "Mai à septembre",
        parking: {
            location: "Plage de Saint-Gabriel, 333 rue du Parc, Saint-Gabriel-de-Brandon, QC J0K 2N0.",
            spots: 100,
            accessible: true,
            cost: "Peut être payant en saison; tarif à vérifier"
        },
        access: {
            description: "Accès par la plage de Saint-Gabriel, au bout de la rue du Parc.",
            type: "Plage",
            difficulty: "Accès facile avec une embarcation légère",
            launchPoint: "Plage de Saint-Gabriel, 333 rue du Parc"
        },
        amenities: [
            "Toilettes",
            "Aire de pique-nique",
            "Douches",
            "Café"
        ],
        warnings: [
            "⚠️ Peu profond par endroits",
            "⚠️ Fond vaseux - Chaussures recommandées",
            "⚠️ Très fréquenté en été",
            "⚠️ Vérifier les règles locales de mise à l'eau à la plage"
        ],
        faq: [
            {
                q: "Combien de profondeur ?",
                a: "1-3 mètres. Faits attention aux hauts-fonds lors du retour à la plage."
            },
            {
                q: "Peut-on amener les enfants ?",
                a: "Absolument ! C'est l'endroit idéal pour débuter. Gilet obligatoire pour <10 ans."
            }
        ],
        highlights: [
            "🟢 Idéal pour débuter",
            "👨‍👩‍👧 Famille-friendly",
            "💰 Peu cher",
            "📍 Facile d'accès"
        ]
    },
    {
        id: "lac-des-piles",
        slug: "lac-des-piles",
        name: "Lac des Piles (Baie-Martin)",
        region: "Mauricie",
        lat: 46.6518317,
        lon: -72.7986336,
        mainImage: "assets/spots/lac-maskinonge.jpg",
        gallery: [
            "assets/spots/lac-maskinonge.jpg",
            "assets/spots/lac-forbes.jpg"
        ],
        description: "Grand lac de la Mauricie accessible par le Camping Plage Baie Martin, qui propose une plage ainsi que des activités de canot et de kayak.",
        longDescription: "Le lac des Piles offre un vaste plan d'eau entouré de relief boisé. L'accès présenté ici passe par le Camping Plage Baie Martin, au 1801 chemin de la Baie-Martin. Les conditions d'accès de jour et les tarifs doivent être confirmés auprès du camping avant le départ.",
        difficulty: "facile",
        paddleScore: 88,
        scoreFactors: {
            wind: 8,
            rain: 9,
            temperature: 8,
            waves: 8
        },
        isFree: false,
        cost: "Accès et tarif à confirmer auprès du camping",
        waterQuality: "À vérifier avant la sortie",
        maxLength: "Circuit 10 km",
        season: "Mai à septembre",
        parking: {
            location: "Camping Plage Baie Martin, 1801 chemin de la Baie-Martin",
            spots: null,
            accessible: false,
            cost: "À confirmer"
        },
        access: {
            description: "Accès via le Camping Baie-Martin",
            type: "Privé / Camping",
            difficulty: "Modéré",
            launchPoint: "Plage du camping"
        },
        amenities: [
            "Plage du camping",
            "Emplacements pour tentes et caravanes",
            "Canot et kayak sur place",
            "Pêche"
        ],
        warnings: [
            "⚠️ Accès situé sur un terrain de camping privé",
            "⚠️ Confirmer l'accès de jour, les heures et le tarif avant le départ",
            "⚠️ Partage du lac avec des embarcations motorisées"
        ],
        faq: [
            {
                q: "L'accès au lac est-il public ?",
                a: "Le point présenté se trouve au Camping Plage Baie Martin. Communiquez avec le camping pour confirmer l'accès de jour et le tarif."
            },
            {
                q: "Puis-je rester la nuit ?",
                a: "Le Camping Plage Baie Martin offre des emplacements pour tentes et caravanes. Vérifiez les disponibilités directement auprès du camping."
            },
            {
                q: "Peut-on y faire du kayak ?",
                a: "Oui. Tourisme Shawinigan mentionne le canot et le kayak parmi les activités offertes sur les lieux."
            }
        ],
        highlights: [
            "Plage au bord du lac",
            "Canot et kayak",
            "Camping pour tentes et caravanes",
            "GPS accès et stationnement validés"
        ]
    },
    {
        id: "lac-aux-sables",
        slug: "lac-aux-sables",
        name: "Lac-aux-Sables",
        region: "Mauricie",
        lat: 46.87022,
        lon: -72.39044,
        mainImage: "assets/spots/lac-raymond-val-morin.jpg",
        gallery: [
            "assets/spots/lac-raymond-val-morin.jpg",
            "assets/spots/lac-maskinonge.jpg"
        ],
        description: "Sable fin et eau claire. Très fréquenté durant l'été - arrivez tôt ! C'est LE spot familial.",
        longDescription: "Lac-aux-Sables est le cœur battant du paddle loisir en Mauricie. Plages de sable impeccables, eau claire et ambiance festive.",
        difficulty: "facile",
        paddleScore: 74,
        scoreFactors: {
            wind: 7,
            rain: 6,
            temperature: 8,
            waves: 8
        },
        isFree: true,
        cost: "Stationnement parfois payant (5$)",
        waterQuality: "Bonne",
        maxLength: "12 km",
        season: "Mai à septembre",
        parking: {
            location: "Marina / accès riverain de Lac-aux-Sables.",
            spots: 200,
            accessible: true,
            cost: "Gratuit (payant haute saison)"
        },
        access: {
            description: "Marina / accès riverain de Lac-aux-Sables.",
            type: "Marina / accès riverain",
            difficulty: "Très facile",
            launchPoint: "Point OSM de mise à l'eau"
        },
        amenities: [
            "Sauveteurs",
            "Toilettes",
            "Douches",
            "Cafétérias"
        ],
        warnings: [
            "⚠️ TRÈS fréquenté en été - Arrivez avant 9h",
            "⚠️ Beaucoup de baigneurs et plongeurs",
            "⚠️ Vitesse de bateaux limitée (zone de baignade)"
        ],
        faq: [
            {
                q: "Quel est le meilleur moment ?",
                a: "Avant 09h ou après 18h. Les fins de semaine sont très chargées."
            },
            {
                q: "Y a-t-il des moniteurs ?",
                a: "Oui, plusieurs écoles de paddle opèrent d'ici. Cours disponibles en saison."
            }
        ],
        highlights: [
            "👨‍👩‍👧‍👦 Super famille-friendly",
            "🎉 Ambiance festive",
            "🏖️ Belles plages",
            "🚓 Bien surveillé"
        ]
    },
    {
        id: "parc-national-lac-edouard",
        slug: "parc-national-lac-edouard",
        name: "Parc National - Lac Édouard",
        region: "Mauricie",
        lat: 46.7882,
        lon: -72.8575,
        mainImage: "assets/spots/lac-lyster.jpg",
        gallery: [
            "assets/spots/lac-lyster.jpg",
            "assets/spots/lac-maskinonge.jpg"
        ],
        description: "Plage surveillée et eaux calmes. Parfait pour le paddle yoga et la détente en parc national.",
        longDescription: "Lac Édouard offre le meilleur des deux mondes - la tranquillité d'un parc national et l'infrastructure d'une plage populaire.",
        difficulty: "facile",
        paddleScore: 81,
        scoreFactors: {
            wind: 8,
            rain: 7,
            temperature: 8,
            waves: 8
        },
        isFree: false,
        cost: "Entrée Parc National (35$ adulte)",
        waterQuality: "Excellente",
        maxLength: "8 km",
        season: "Mai à septembre",
        parking: {
            location: "Stationnement de la plage",
            spots: 100,
            accessible: true,
            cost: "Inclus"
        },
        access: {
            description: "Accès officiel via le parc",
            type: "Parc aménagé",
            difficulty: "Très facile",
            launchPoint: "Plage principale"
        },
        amenities: [
            "Sauveteurs",
            "Toilettes premium",
            "Douches",
            "Restaurant"
        ],
        warnings: [
            "⚠️ Entrée en haute saison peut être complète",
            "⚠️ Limite de stationnement",
            "⚠️ Lavage équipement obligatoire"
        ],
        faq: [
            {
                q: "Puis-je faire du paddle yoga ?",
                a: "Oui ! Classes disponibles les lundis et mercredis à 610h (juillet-août)."
            },
            {
                q: "C'est un bon spot pour débuter ?",
                a: "Excellent ! Agua calme, personnel de sauvetage et ambiance sécuritaire."
            }
        ],
        highlights: [
            "🧘 Paddle yoga disponible",
            "🟢 Eau super calme",
            "🚓 Bien surveillé",
            "⭐ Parc national premium"
        ]
    },
    {
        "id": "parc-national-oka",
        "slug": "parc-national-oka",
        "name": "Parc national d'Oka",
        "region": "Laurentides",
        "lat": 45.468056,
        "lon": -74.030556,
        "mainImage": "assets/spots/lac-memphremagog-magog.jpg",
        "gallery": [
            "assets/spots/lac-memphremagog-magog.jpg",
            "assets/spots/lac-megantic.jpg"
        ],
        "description": "Grand classique proche de Montréal, le parc national d'Oka donne accès au lac des Deux Montagnes avec plage, location nautique et secteurs adaptés au kayak et au surf à pagaie.",
        "longDescription": "Le parc national d'Oka est un des spots nautiques les plus fréquentés près de Montréal. La Sépaq y indique la location de kayak et de surf à pagaie, avec mise à l'eau possible à la Crête ou à la plage principale selon l'embarcation et la saison. Le plan d'eau est vaste: vérifiez le vent avant de partir.",
        "difficulty": "facile",
        "paddleScore": 78,
        "scoreFactors": { "wind": 7, "rain": 7, "temperature": 8, "waves": 7 },
        "isFree": false,
        "cost": "Droit d'accès Sépaq et stationnement de plage en saison.",
        "waterQuality": "À vérifier selon avis de plage",
        "maxLength": "Parcours variable sur le lac des Deux Montagnes",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement confirmé de la plage / secteur Le Littoral.",
            "spots": "Grand stationnement confirmé en saison",
            "accessible": true,
            "cost": "Stationnement payant en saison."
        },
        "access": {
            "description": "Mise à l'eau à la Crête ou à la plage principale selon les consignes Sépaq.",
            "type": "Plage / rampe de mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Rampe de la Crête ou extrémités de la plage principale"
        },
        "amenities": [
            "Plage surveillée en saison",
            "Location de kayak et surf à pagaie",
            "Toilettes et services Sépaq",
            "Aires de pique-nique"
        ],
        "warnings": [
            "Le lac des Deux Montagnes peut devenir venteux rapidement",
            "Stationnement très achalandé les fins de semaine d'été",
            "Respectez les zones de baignade et les consignes Sépaq"
        ],
        "faq": [
            { "q": "Peut-on louer sur place ?", "a": "Oui, la Sépaq indique de la location de kayak et de surf à pagaie au parc national d'Oka en saison." },
            { "q": "Les points GPS sont-ils confirmés ?", "a": "Oui. Le stationnement et l'accès à l'eau de la Grande Plage sont validés. La rampe de la Crête demeure une autre option selon les consignes Sépaq." }
        ],
        "highlights": [
            "Spot très fréquenté près de Montréal",
            "Location nautique sur place",
            "Plage et services complets",
            "GPS accès et stationnement validés"
        ]
    },
    {
        "id": "reservoir-choiniere-yamaska",
        "slug": "reservoir-choiniere-yamaska",
        "name": "Réservoir Choinière (Yamaska)",
        "region": "Estrie",
        "lat": 45.42668294095945,
        "lon": -72.61486447370173,
        "mainImage": "assets/spots/reservoir-choiniere-yamaska.jpg",
        "gallery": [
            "assets/spots/reservoir-choiniere-yamaska.jpg"
        ],
        "description": "Le réservoir Choinière, au parc national de la Yamaska, est un plan d'eau populaire pour le canot, le kayak, le pédalo et le surf à pagaie.",
        "longDescription": "Le parc national de la Yamaska entoure le réservoir Choinière, un vaste plan d'eau utilisé pour les activités nautiques. La Sépaq y mentionne le canot, le kayak, le surf à pagaie, le pédalo et la baignade surveillée en saison. C'est un bon choix pour une sortie encadrée et familiale en Estrie.",
        "difficulty": "facile",
        "paddleScore": 80,
        "scoreFactors": { "wind": 8, "rain": 7, "temperature": 8, "waves": 8 },
        "isFree": false,
        "cost": "Droit d'accès Sépaq et stationnement de plage en saison.",
        "waterQuality": "À vérifier selon avis du parc",
        "maxLength": "Réservoir d'environ 4,5 km²",
        "season": "Mai à septembre",
        "parking": {
            "location": "Centre de découverte et de services / plage du parc national de la Yamaska.",
            "spots": "Stationnement de parc",
            "accessible": true,
            "cost": "Payant selon tarification Sépaq."
        },
        "access": {
            "description": "Accès nautique au secteur de la plage et du centre de location du réservoir Choinière.",
            "type": "Plage / centre de location",
            "difficulty": "Facile",
            "launchPoint": "Centre de location Sépaq"
        },
        "amenities": [
            "Location de canot, kayak et surf à pagaie",
            "Plage surveillée en saison",
            "Toilettes et services Sépaq",
            "Pistes cyclables et aires de pique-nique"
        ],
        "warnings": [
            "Stationnement de plage payant et achalandé en été",
            "Dernières locations avant la fermeture du centre de location",
            "Consultez les avis de qualité d'eau et de météo"
        ],
        "faq": [
            { "q": "Est-ce un bon spot pour débuter ?", "a": "Oui, c'est un plan d'eau de parc avec services, location et plage, mais il faut toujours surveiller le vent." },
            { "q": "Le GPS pointe où ?", "a": "Le GPS distingue l'accès nautique du secteur plage et le stationnement du parc, tous deux validés." }
        ],
        "highlights": [
            "Spot familial très connu en Estrie",
            "Services Sépaq complets",
            "Location nautique disponible",
            "GPS accès et stationnement validés"
        ]
    },
    {
        "id": "reservoir-poisson-blanc",
        "slug": "reservoir-poisson-blanc",
        "name": "Réservoir Poisson-Blanc",
        "region": "Laurentides",
        "lat": 46.095,
        "lon": -75.67389,
        "mainImage": "assets/spots/lac-forbes.jpg",
        "gallery": [
            "assets/spots/lac-forbes.jpg"
        ],
        "description": "Le Poisson-Blanc est un incontournable des Laurentides pour les sorties de canot, kayak, SUP et camping sur les îles.",
        "longDescription": "Le parc régional du Poisson-Blanc est reconnu pour le canot, le kayak, le SUP-camping et les plages sauvages du réservoir. Le pavillon d'accueil Le Bastion à Notre-Dame-du-Laus offre des services et de la location nautique. C'est un spot magnifique, mais plus aventure que plage urbaine.",
        "difficulty": "sportif",
        "paddleScore": 84,
        "scoreFactors": { "wind": 7, "rain": 8, "temperature": 8, "waves": 7 },
        "isFree": false,
        "cost": "Frais de parc, stationnement ou location selon activité.",
        "waterQuality": "Généralement très bonne",
        "maxLength": "Grand réservoir, parcours variable",
        "season": "Mai à octobre",
        "parking": {
            "location": "Pavillon d'accueil Le Bastion, secteur Notre-Dame-du-Laus.",
            "spots": "Stationnement du parc",
            "accessible": true,
            "cost": "Selon tarification du parc."
        },
        "access": {
            "description": "Accès au réservoir via le pavillon Le Bastion et services du parc.",
            "type": "Pavillon d'accueil / mise à l'eau",
            "difficulty": "Modéré",
            "launchPoint": "Le Bastion"
        },
        "amenities": [
            "Location de canot, kayak et planche à pagaie",
            "Camping sur les îles",
            "Arrêts pique-nique",
            "Accueil et informations du parc"
        ],
        "warnings": [
            "Grand plan d'eau: prévoir vent, distance et autonomie",
            "Réservation recommandée pour camping et location",
            "Plus adapté aux sorties préparées qu'aux sorties improvisées"
        ],
        "faq": [
            { "q": "Est-ce bon pour une première sortie ?", "a": "Oui pour une courte sortie près de l'accueil par météo calme, mais le réservoir devient vite une sortie d'aventure." },
            { "q": "Peut-on louer sur place ?", "a": "Oui, le parc régional indique un service de location de canot, kayak et planche à pagaie au pavillon d'accueil." }
        ],
        "highlights": [
            "Un des grands classiques SUP/kayak des Laurentides",
            "Îles et plages sauvages",
            "Camping nautique très populaire",
            "GPS accès et stationnement validés"
        ]
    },
    {
        "id": "baie-de-beauport-quebec",
        "slug": "baie-de-beauport-quebec",
        "name": "Baie de Beauport",
        "region": "Québec",
        "lat": 46.84386285760057,
        "lon": -71.17843386608614,
        "mainImage": "assets/spots/lac-megantic.jpg",
        "gallery": [
            "assets/spots/lac-megantic.jpg"
        ],
        "description": "La Baie de Beauport est une destination estivale très fréquentée à Québec, avec grande plage, sports nautiques et stationnement sur place.",
        "longDescription": "La Baie de Beauport du Port de Québec propose une grande plage de sable, des activités nautiques et sportives, ainsi qu'un accès près du centre-ville de Québec. Le site est pratique pour une sortie urbaine, mais il faut tenir compte du vent et du caractère exposé du fleuve.",
        "difficulty": "sportif",
        "paddleScore": 74,
        "scoreFactors": { "wind": 6, "rain": 7, "temperature": 8, "waves": 6 },
        "isFree": true,
        "cost": "Accès au site gratuit; stationnement payant.",
        "waterQuality": "Variable selon conditions du fleuve",
        "maxLength": "Parcours côtier local",
        "season": "Mai à octobre",
        "parking": {
            "location": "1 chemin de la Baie-de-Beauport, Québec.",
            "spots": "Stationnement du site",
            "accessible": true,
            "cost": "Stationnement payant."
        },
        "access": {
            "description": "Accès par la plage de la Baie de Beauport.",
            "type": "Plage urbaine / activités nautiques",
            "difficulty": "Facile à modéré selon le vent",
            "launchPoint": "Plage de la Baie de Beauport"
        },
        "amenities": [
            "Grande plage",
            "Activités nautiques",
            "Stationnement sur place",
            "Services saisonniers"
        ],
        "warnings": [
            "Plan d'eau exposé au vent et aux conditions du fleuve",
            "Surveiller les avis de baignade et la qualité de l'eau",
            "Rester dans les zones autorisées"
        ],
        "faq": [
            { "q": "Est-ce gratuit ?", "a": "Le site indique un accès gratuit, mais le stationnement est payant." },
            { "q": "Est-ce adapté aux débutants ?", "a": "Oui par météo calme et dans les zones encadrées, mais le vent du fleuve peut rendre la sortie sportive." }
        ],
        "highlights": [
            "Spot très fréquenté à Québec",
            "Grande plage urbaine",
            "Activités nautiques sur place",
            "Stationnement payant"
        ]
    },
    {
        "id": "parc-national-plaisance",
        "slug": "parc-national-plaisance",
        "name": "Parc national de Plaisance",
        "region": "Outaouais",
        "lat": 45.6,
        "lon": -75.133333,
        "mainImage": "assets/spots/lac-forbes.jpg",
        "gallery": [
            "assets/spots/lac-forbes.jpg"
        ],
        "description": "Le parc national de Plaisance est un spot d'Outaouais reconnu pour les sorties calmes en canot, kayak et surf à pagaie dans les baies et marais.",
        "longDescription": "La Sépaq décrit le parc national de Plaisance comme un paysage de baies, d'étangs et de marécages en bordure de la rivière des Outaouais. Le parc offre canot, kayak, surf à pagaie et plusieurs débarcadères, notamment au centre de découverte et de services du secteur des Presqu'îles.",
        "difficulty": "facile",
        "paddleScore": 79,
        "scoreFactors": { "wind": 7, "rain": 7, "temperature": 8, "waves": 8 },
        "isFree": false,
        "cost": "Droit d'accès Sépaq.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Baies et parcours variables",
        "season": "Mai à septembre",
        "parking": {
            "location": "Centre de découverte et de services, 1001 chemin des Presqu'îles, Plaisance.",
            "spots": "Stationnement du parc",
            "accessible": true,
            "cost": "Payant selon tarification Sépaq."
        },
        "access": {
            "description": "Débarcadère du centre de découverte et de services, secteur des Presqu'îles.",
            "type": "Débarcadère",
            "difficulty": "Facile",
            "launchPoint": "Centre de découverte et de services"
        },
        "amenities": [
            "Location de canot, kayak et SUP",
            "Débarcadères aménagés",
            "Toilettes et services Sépaq",
            "Observation de la faune"
        ],
        "warnings": [
            "Zones de marais: rester dans les parcours autorisés",
            "Insectes possibles en saison",
            "Respecter les habitats sensibles"
        ],
        "faq": [
            { "q": "Peut-on mettre son propre kayak à l'eau ?", "a": "Oui, la Sépaq indique des débarcadères au centre de découverte, au camping et dans certains secteurs du parc." },
            { "q": "Le GPS pointe où ?", "a": "Le GPS distingue le débarcadère du centre de découverte et son stationnement, tous deux validés." }
        ],
        "highlights": [
            "Parcours calme dans les baies et marais",
            "Location nautique Sépaq",
            "Très bon pour observation de la faune",
            "GPS accès et stationnement validés"
        ]
    }
];

// Pages d?taill?es g?n?r?es depuis les spots de la carte.
// Ces fiches donnent un accès complet ? lac.html pour tous les spots,
// tout en conservant les fiches ?ditoriales plus riches d?j? pr?sentes ci-dessus.
const supplementalSpotDetails = [
    {
        id: "plage-maria-goretti",
        slug: "plage-maria-goretti",
        name: "Plage Maria-Goretti",
        region: "Lanaudière",
        lat: 46.0474285,
        lon: -73.440816,
        mainImage: "assets/spots/unique/plage-maria-goretti.jpg",
        gallery: ["assets/spots/unique/plage-maria-goretti.jpg"],
        description: "Accès facile à la rivière L'Assomption depuis la plage Maria-Goretti, à Saint-Charles-Borromée. Le faible courant convient particulièrement aux débutants et aux sorties avec des enfants.",
        longDescription: "La plage Maria-Goretti offre une mise à l'eau facile pour les embarcations légères sur la rivière L'Assomption. Le courant est généralement faible et le niveau de l'eau devient très bas en été. Le stationnement est gratuit, mais le fort achalandage à la plage et à la descente peut rendre une place difficile à trouver pendant les vacances estivales.",
        difficulty: "facile",
        paddleScore: 82,
        scoreFactors: { wind: 8, rain: 7, temperature: 8, waves: 9 },
        isFree: true,
        cost: "Accès et stationnement gratuits",
        waterQuality: "À vérifier localement",
        maxLength: "Parcours variable",
        season: "Mai à septembre",
        parking: {
            location: "Stationnement du parc Maria-Goretti, Saint-Charles-Borromée",
            spots: "Capacité limitée lors des journées achalandées",
            accessible: true,
            cost: "Gratuit"
        },
        access: {
            description: "Mise à l'eau depuis la plage Maria-Goretti",
            type: "Plage / mise à l'eau pour embarcations légères",
            difficulty: "Accès facile",
            launchPoint: "Plage Maria-Goretti"
        },
        amenities: ["Plage", "Stationnement gratuit", "Mise à l'eau facile"],
        warnings: [
            "Endroit très fréquenté pendant les vacances estivales",
            "Stationnement parfois difficile malgré sa gratuité",
            "Eau très basse en été — surveiller les hauts-fonds"
        ],
        faq: [
            { q: "Ce spot convient-il aux débutants et aux enfants ?", a: "Oui. La mise à l'eau est facile et le courant est généralement faible. Portez toujours un vêtement de flottaison individuel et surveillez les conditions du jour." },
            { q: "Le stationnement est-il gratuit ?", a: "Oui, mais les places peuvent être difficiles à trouver pendant les vacances estivales en raison du fort achalandage." },
            { q: "À quoi faut-il faire attention en été ?", a: "Le niveau de l'eau peut être très bas. Restez attentif aux hauts-fonds et aux obstacles près de la surface." }
        ],
        highlights: ["Mise à l'eau facile", "Peu de courant", "Idéal pour débutants et familles", "Stationnement gratuit"]
    },
    {
        "id": "riviere-macaza",
        "slug": "riviere-macaza",
        "name": "Rivière Macaza",
        "region": "Laurentides",
        "lat": 46.398759536928964,
        "lon": -74.72960327747677,
        "mainImage": "assets/spots/riviere-macaza/passage-sous-le-pont.jpg",
        "gallery": [
            "assets/spots/riviere-macaza/passage-sous-le-pont.jpg",
            "assets/spots/riviere-macaza/riviere-bordee-de-foret.jpg",
            "assets/spots/riviere-macaza/riviere-et-reflets.jpg"
        ],
        "photoCredit": "Refuges rustiques La Macaza",
        "description": "Accès à la rivière Macaza documenté par une contribution de la communauté et confirmé à l’aide de la carte de Canot Kayak Québec.",
        "longDescription": "Ce point donne accès au secteur calme de la rivière Macaza et au lac Macaza. La mise à l’eau est répertoriée par Canot Kayak Québec. Le stationnement confirmé se trouve à environ 32 m du point d’accès à l’eau. Le Paddle Score évalue seulement le secteur calme et le lac; il ne s’applique pas à la descente des rapides. Le tarif et les règles locales doivent être vérifiés sur place avant le départ.",
        "difficulty": "Intermédiaire",
        "paddleScore": 74,
        "scoreFactors": {
            "wind": 7,
            "rain": 7,
            "temperature": 7,
            "waves": 8
        },
        "isFree": null,
        "cost": "À vérifier",
        "waterQuality": "Non évaluée",
        "maxLength": "Secteur calme et lac Macaza",
        "season": "À vérifier",
        "parking": {
            "location": "Stationnement confirmé à proximité de l’accès",
            "spots": "Capacité à vérifier",
            "accessible": null,
            "cost": "À vérifier"
        },
        "access": {
            "description": "Accès à l’eau de la rivière Macaza",
            "type": "Accès riverain / mise à l’eau manuelle",
            "difficulty": "Intermédiaire; débutant possible sur le lac par météo calme",
            "launchPoint": "Rivière Macaza"
        },
        "amenities": [
            "Stationnement à proximité",
            "Accès à l’eau documenté"
        ],
        "warnings": [
            "Vérifiez le courant, le niveau de l’eau et la météo avant le départ",
            "Vérifiez le tarif du stationnement et les règles locales sur place",
            "Le Paddle Score couvre seulement le secteur calme et le lac Macaza; il n’évalue pas la descente de la rivière",
            "Ne remontez pas ou ne descendez pas au-delà du secteur calme sans consulter la carte de Canot Kayak Québec et posséder l’expérience requise",
            "La difficulté des rapides peut varier selon le niveau de l’eau",
            "Aucune mesure publique en direct n’est disponible pour la rivière Macaza; une vérification visuelle est requise avant le départ"
        ],
        "faq": [
            {
                "q": "Où faut-il stationner ?",
                "a": "Le stationnement indiqué se trouve à environ 32 m du point d’accès. Le bouton d’itinéraire mène à ce stationnement."
            },
            {
                "q": "Les conditions de navigation sont-elles confirmées ?",
                "a": "Non. Vérifiez les conditions actuelles et la réglementation locale avant de vous mettre à l’eau."
            }
        ],
        "highlights": [
            "Galerie de trois photos communautaires",
            "Mise à l’eau répertoriée par Canot Kayak Québec",
            "Accès à l’eau et stationnement indiqués séparément",
            "Secteur calme donnant accès au lac Macaza"
        ]
    },
    {
        "id": "lac-matapedia-baie-de-charlie",
        "slug": "lac-matapedia-baie-de-charlie",
        "name": "Lac Matapédia — Baie de Charlie",
        "region": "Bas-Saint-Laurent",
        "lat": 48.5868597,
        "lon": -67.6347988,
        "mainImage": "assets/spots/lac-matapedia-baie-de-charlie/panorama-baie.jpg",
        "gallery": [
            "assets/spots/lac-matapedia-baie-de-charlie/panorama-baie.jpg",
            "assets/spots/lac-matapedia-baie-de-charlie/rive-boisee.jpg",
            "assets/spots/lac-matapedia-baie-de-charlie/vue-depuis-la-planche.jpeg"
        ],
        "description": "Accès au lac Matapédia par la plage de sable du parc de la Baie-de-Charlie, à Sayabec. Le point GPS provient du lien Google Maps fourni et le site est confirmé par la municipalité.",
        "longDescription": "La Baie de Charlie est un accès aménagé au lac Matapédia dans le secteur de Sayabec. La plage descend doucement dans l'eau et le parc comprend des tables de pique-nique, un gazebo, des jeux et des sentiers. Le stationnement aménagé se trouve à environ 146 m de la plage. La baignade n'est pas surveillée et les conditions sur le lac doivent être vérifiées avant la mise à l'eau.",
        "difficulty": "facile",
        "paddleScore": 82,
        "scoreFactors": {
            "wind": 7,
            "rain": 7,
            "temperature": 8,
            "waves": 7
        },
        "isFree": true,
        "cost": "Accès libre; conditions à vérifier sur place",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable sur le lac Matapédia",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement du parc de la Baie-de-Charlie",
            "spots": "Capacité à vérifier",
            "accessible": true,
            "cost": "À vérifier"
        },
        "access": {
            "description": "Plage du parc de la Baie-de-Charlie",
            "type": "Plage / mise à l'eau manuelle",
            "difficulty": "Facile",
            "launchPoint": "Plage de sable non surveillée"
        },
        "amenities": [
            "Stationnement aménagé",
            "Tables de pique-nique et gazebo",
            "Jeux pour enfants et sentiers pédestres"
        ],
        "warnings": [
            "Plage non surveillée",
            "Vérifiez le vent et les conditions du lac avant le départ",
            "Confirmez les règles et services saisonniers sur place"
        ],
        "faq": [
            {
                "q": "Le point GPS est-il confirmé ?",
                "a": "Oui. Le point d'accès provient du lien Google Maps fourni et le parc de la Baie-de-Charlie est confirmé par la Municipalité de Sayabec."
            },
            {
                "q": "Où faut-il stationner ?",
                "a": "Le stationnement aménagé du parc se trouve à environ 146 m de la plage. Le bouton d'itinéraire mène à ce stationnement."
            },
            {
                "q": "La plage est-elle surveillée ?",
                "a": "Non. La Municipalité de Sayabec précise que la plage n'est pas surveillée."
            }
        ],
        "highlights": [
            "GPS d'accès confirmé par le lien fourni",
            "Plage de sable à pente douce",
            "GPS du stationnement validé",
            "Parc et sentiers aménagés"
        ]
    },
    {
        "id": "baie-de-shawinigan-parc-de-la-baie",
        "slug": "baie-de-shawinigan-parc-de-la-baie",
        "name": "Baie de Shawinigan (Parc de la Baie)",
        "region": "Mauricie",
        "lat": 46.528479,
        "lon": -72.7818462,
        "mainImage": "assets/spots/baie-de-shawinigan/panorama-principal.jpg",
        "gallery": [
            "assets/spots/baie-de-shawinigan/panorama-principal.jpg",
            "assets/spots/baie-de-shawinigan/acces-rive.jpg",
            "assets/spots/baie-de-shawinigan/mise-a-eau.jpg",
            "assets/spots/baie-de-shawinigan/paddle-sur-la-baie.jpg",
            "assets/spots/baie-de-shawinigan/paddle-au-coucher-du-soleil.jpg"
        ],
        "description": "Accès direct à la baie de Shawinigan depuis le stationnement du Parc de la Baie. Le chemin de la Baie mène à une mise à l'eau en gravier pratique pour le SUP, le kayak et le canot.",
        "longDescription": "Le Parc de la Baie donne accès à la baie de Shawinigan et à la rivière Saint-Maurice. Le point GPS mène directement au stationnement; la mise à l'eau en gravier se trouve à environ 21 mètres. Le départ est simple, mais il faut surveiller le vent, le courant et les embarcations motorisées une fois sur l'eau.",
        "difficulty": "sportif",
        "paddleScore": 76,
        "scoreFactors": {
            "wind": 7,
            "rain": 7,
            "temperature": 8,
            "waves": 7
        },
        "isFree": true,
        "cost": "Accès public; aucun frais indiqué (à confirmer sur place).",
        "waterQuality": "Bonne",
        "maxLength": "Parcours variable sur le Saint-Maurice",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement du Parc de la Baie, chemin de la Baie, Shawinigan.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Aucun frais indiqué (à confirmer sur place)."
        },
        "access": {
            "description": "Accès à l'eau du Parc de la Baie, au bout du stationnement.",
            "type": "Mise à l'eau en gravier",
            "difficulty": "Facile depuis le stationnement",
            "launchPoint": "Chemin de la Baie"
        },
        "amenities": [
            "Stationnement directement à l'accès",
            "Mise à l'eau en gravier",
            "Accès adapté aux embarcations légères"
        ],
        "warnings": [
            "Courant possible sur la rivière Saint-Maurice",
            "Présence possible d'embarcations motorisées",
            "Le vent peut lever des vagues dans la baie"
        ],
        "faq": [
            {
                "q": "Où mène le point GPS ?",
                "a": "Directement au stationnement du Parc de la Baie. La mise à l'eau est à environ 21 mètres."
            },
            {
                "q": "Peut-on mettre un SUP ou un kayak à l'eau ?",
                "a": "Oui. Une mise à l'eau en gravier est répertoriée au chemin de la Baie."
            }
        ],
        "highlights": [
            "Point GPS du stationnement validé",
            "Qualité de l'eau vérifiée sur place",
            "Mise à l'eau à environ 21 mètres",
            "Accès direct à la baie de Shawinigan",
            "Bon départ pour SUP, kayak et canot"
        ]
    },
    {
        "id": "lac-mercier",
        "slug": "lac-mercier",
        "name": "Lac Mercier",
        "region": "Laurentides",
        "lat": 46.193499,
        "lon": -74.631738,
        "mainImage": "assets/spots/lac-mercier/panorama-coucher-soleil.webp",
        "gallery": [
            "assets/spots/lac-mercier/panorama-coucher-soleil.webp",
            "assets/spots/lac-mercier/vue-depuis-le-sup.webp",
            "assets/spots/lac-mercier/quai-au-crepuscule.webp",
            "assets/spots/lac-mercier/stationnement.webp"
        ],
        "description": "Le lac Mercier, à Mont-Tremblant, offre un stationnement gratuit et une mise à l'eau située à gauche du quai.",
        "longDescription": "Ce point d'accès au lac Mercier a été confirmé par une personne contributrice. Le stationnement est gratuit et la mise à l'eau pour les embarcations légères se trouve à gauche du quai. Vérifiez les conditions et les règles locales avant le départ.",
        "difficulty": "facile",
        "paddleScore": 75,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Stationnement gratuit",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement gratuit près du quai du lac Mercier.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Mise à l'eau à gauche du quai.",
            "type": "Quai / mise à l'eau manuelle",
            "difficulty": "Facile",
            "launchPoint": "À gauche du quai du lac Mercier"
        },
        "amenities": [
            "Stationnement gratuit",
            "Quai",
            "Mise à l'eau pour embarcations légères"
        ],
        "warnings": [
            "Vérifiez les règles locales avant la mise à l'eau",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Où se trouve la mise à l'eau ?",
                "a": "La mise à l'eau se trouve à gauche du quai, au point GPS indiqué."
            },
            {
                "q": "Le stationnement est-il payant ?",
                "a": "Non. Le stationnement a été signalé comme gratuit par une personne contributrice."
            }
        ],
        "highlights": [
            "Accès confirmé par une personne contributrice",
            "Stationnement gratuit",
            "Mise à l'eau à gauche du quai"
        ]
    },
    {
        "id": "lac-tremblant",
        "slug": "lac-tremblant",
        "name": "Lac Tremblant",
        "region": "Laurentides",
        "lat": 46.20843802180653,
        "lon": -74.59551156749815,
        "mainImage": "assets/spots/lac-tremblant.jpg",
        "gallery": [
            "assets/spots/lac-tremblant.jpg"
        ],
        "description": "Lac Tremblant possède un accès par la plage avec stationnement distinct. Le lavage de l'embarcation est obligatoire avant la mise à l'eau.",
        "longDescription": "L'accès à l'eau du lac Tremblant se fait par la plage indiquée sur la carte, avec un stationnement distinct à proximité. IMPORTANT : le lavage de l'embarcation est obligatoire avant la mise à l'eau. Rendez-vous d'abord à la station de lavage du secteur Pierre Plouffe, clairement indiquée par un troisième marqueur sur la carte, puis dirigez-vous vers le stationnement et la plage. Vérifiez les heures, les frais et les règles locales avant le départ.",
        "difficulty": "facile",
        "paddleScore": 76,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Lavage d'embarcation obligatoire; frais d'accès et stationnement à vérifier.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement de la plage du lac Tremblant.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Frais à vérifier"
        },
        "access": {
            "description": "Accès à l'eau par la plage après le lavage obligatoire de l'embarcation.",
            "type": "Plage / accès à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Plage du lac Tremblant"
        },
        "washStationPoint": {
            "lat": 46.227230443496815,
            "lon": -74.62875777620965,
            "name": "Station de lavage obligatoire — secteur Pierre Plouffe",
            "type": "Station de lavage obligatoire",
            "confidence": "high",
            "source": "Coordonnées confirmées par l'utilisateur",
            "fee": "Frais à vérifier"
        },
        "amenities": [
            "Centre nautique Pierre Plouffe",
            "Station de lavage d'embarcation obligatoire",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Lavage d'embarcation obligatoire avant la mise à l'eau",
            "Vérifiez les frais, le stationnement et les règles locales avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Oui. Le secteur du Centre nautique Pierre Plouffe est utilisé comme accès, avec le point de lavage confirmé par l'utilisateur."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui, mais le lavage de l'embarcation est obligatoire avant la mise à l'eau. Vérifiez aussi les frais et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "Les frais d'accès, de stationnement et de lavage restent à vérifier sur place."
            }
        ],
        "highlights": [
            "Centre nautique Pierre Plouffe",
            "Lavage d'embarcation obligatoire",
            "Page générée depuis les données de la carte",
            "Point de lavage confirmé par l'utilisateur"
        ]
    },
    {
        "id": "riviere-rouge-labelle",
        "slug": "riviere-rouge-labelle",
        "name": "Rivière Rouge (Labelle)",
        "region": "Laurentides",
        "lat": 46.2762,
        "lon": -74.7298,
        "mainImage": "assets/spots/lac-lyster.jpg",
        "gallery": [
            "assets/spots/lac-lyster.jpg"
        ],
        "description": "Rivière Rouge (Labelle) est un spot de paddle de la région Laurentides. Eaux calmes serpentant entre de magnifiques plages de sable fin, parfaites pour le pique-nique.",
        "longDescription": "Rivière Rouge (Labelle) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Laurentides. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Eaux calmes serpentant entre de magnifiques plages de sable fin, parfaites pour le pique-nique.",
        "difficulty": "sportif",
        "paddleScore": 72,
        "scoreFactors": {
            "wind": 6,
            "rain": 7,
            "temperature": 7,
            "waves": 6
        },
        "isFree": true,
        "cost": "Accès public gratuit.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement gratuit au Parc de la Gare de Labelle.",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Stationnement gratuit au Parc de la Gare de Labelle.",
            "type": "Accès depuis stationnement",
            "difficulty": "Modéré à sportif",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Conditions variables: vent, courant ou vagues possibles",
            "Vérifiez les règles locales et l'accès exact avant de partir"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot à aborder avec prudence",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "lac-stukely-mont-orford",
        "slug": "lac-stukely-mont-orford",
        "name": "Lac Stukely (Mont-Orford)",
        "region": "Estrie",
        "lat": 45.363417803831844,
        "lon": -72.23536491401258,
        "mainImage": "assets/spots/lac-forbes.jpg",
        "gallery": [
            "assets/spots/lac-forbes.jpg"
        ],
        "description": "Lac Stukely (Mont-Orford) est un spot de paddle de la r?gion Estrie. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Mise à l'eau du lac Stukely, parc du Mont-Orford.",
        "longDescription": "Lac Stukely (Mont-Orford) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Estrie. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Eau calme et très propre au cœur du parc national. Navigation sauvage protégée du vent.",
        "difficulty": "facile",
        "paddleScore": 72,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Entrée de parc de la SEPAQ obligatoire.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Mise à l'eau du lac Stukely, parc du Mont-Orford.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Entrée de parc de la SEPAQ obligatoire."
        },
        "access": {
            "description": "Mise à l'eau du lac Stukely, parc du Mont-Orford.",
            "type": "Mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique: Entrée de parc de la SEPAQ obligatoire."
            }
        ],
        "highlights": [
            "Accès ou stationnement payant à prévoir",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "lac-memphremagog-magog",
        "slug": "lac-memphremagog-magog",
        "name": "Lac Memphrémagog (Magog)",
        "region": "Estrie",
        "lat": 45.2672900360233,
        "lon": -72.15984658219729,
        "mainImage": "assets/spots/lac-memphremagog-magog.jpg",
        "gallery": [
            "assets/spots/lac-memphremagog-magog.jpg"
        ],
        "description": "Lac Memphrémagog (Magog) est un spot de paddle de la région Estrie. Vue extraordinaire sur le Mont Orford. Attention au vent de face et aux bateaux à moteur.",
        "longDescription": "Lac Memphrémagog (Magog) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Estrie. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Vue extraordinaire sur le Mont Orford. Attention au vent de face et aux bateaux à moteur.",
        "difficulty": "sportif",
        "paddleScore": 64,
        "scoreFactors": {
            "wind": 6,
            "rain": 7,
            "temperature": 7,
            "waves": 6
        },
        "isFree": true,
        "cost": "Accès public gratuit (stationnement payant en saison).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement à la plage des Cantons à Magog.",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Stationnement à la plage des Cantons à Magog.",
            "type": "Plage / accès riverain",
            "difficulty": "Modéré à sportif",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Conditions variables: vent, courant ou vagues possibles",
            "Vérifiez les règles locales et l'accès exact avant de partir"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot à aborder avec prudence",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "petit-lac-magog-plage-municipale",
        "slug": "petit-lac-magog-plage-municipale",
        "name": "Petit-Lac-Magog — Parc de la Plage-Municipale",
        "region": "Estrie",
        "lat": 45.33441207629638,
        "lon": -72.02343277469295,
        "mainImage": "assets/spots/petit-lac-magog-plage-municipale.jpg",
        "gallery": [
            "assets/spots/petit-lac-magog-plage-municipale.jpg"
        ],
        "description": "Petit-Lac-Magog donne accès au lac Magog par le Parc de la Plage-Municipale, dans le secteur Deauville de Sherbrooke.",
        "longDescription": "Le Parc de la Plage-Municipale est ajouté comme spot confirmé de Petit-Lac-Magog. Les points GPS de l'accès à l'eau et du stationnement sont enregistrés séparément. OpenStreetMap confirme le parc sous le nom Parc de la Plage-Municipale à Deauville, Sherbrooke. Avant la sortie, validez les règles locales, la météo, le vent, les frais et la saison d'ouverture.",
        "difficulty": "facile",
        "paddleScore": 78,
        "scoreFactors": {
            "wind": 7,
            "rain": 7,
            "temperature": 8,
            "waves": 7
        },
        "isFree": true,
        "cost": "À vérifier sur place.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local sur le lac Magog",
        "season": "Mai à septembre",
        "parking": {
            "location": "Parc de la Plage-Municipale, secteur Deauville.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "À vérifier"
        },
        "access": {
            "description": "Accès par le Parc de la Plage-Municipale à Petit-Lac-Magog.",
            "type": "Parc municipal / plage",
            "difficulty": "Facile",
            "launchPoint": "Parc de la Plage-Municipale"
        },
        "amenities": [
            "Parc municipal confirmé",
            "Plage municipale",
            "Stationnement à vérifier sur place"
        ],
        "warnings": [
            "Vérifiez les règles locales, les frais et l'ouverture saisonnière avant de partir",
            "Lac exposé au vent et à la circulation nautique par moments"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il au Parc de la Plage-Municipale ?",
                "a": "Oui. Le point GPS a été fourni par l'utilisateur et le nom du parc est recoupé avec OpenStreetMap."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui, sous réserve des règles locales, des frais, du stationnement et des restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "À vérifier sur place; le bouton d'itinéraire utilise le point GPS distinct du stationnement."
            }
        ],
        "highlights": [
            "Nouveau spot confirmé",
            "Parc de la Plage-Municipale",
            "Accès et stationnement au même secteur",
            "Point GPS fourni par l'utilisateur"
        ]
    },
    {
        "id": "fjord-du-saguenay-l-anse",
        "slug": "fjord-du-saguenay-l-anse",
        "name": "Fjord du Saguenay (L'Anse)",
        "region": "Saguenay-Lac-Saint-Jean",
        "lat": 48.245,
        "lon": -70.2815,
        "mainImage": "assets/spots/lac-raymond-val-morin.jpg",
        "gallery": [
            "assets/spots/lac-raymond-val-morin.jpg"
        ],
        "description": "Fjord du Saguenay (L'Anse) est un spot de paddle de la région Saguenay-Lac-Saint-Jean. Naviguez au milieu de falaises géantes de 300m. Réservé aux experts (marées et vents forts).",
        "longDescription": "Fjord du Saguenay (L'Anse) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Saguenay-Lac-Saint-Jean. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Naviguez au milieu de falaises géantes de 300m. Réservé aux experts (marées et vents forts).",
        "difficulty": "sportif",
        "paddleScore": 60,
        "scoreFactors": {
            "wind": 6,
            "rain": 7,
            "temperature": 7,
            "waves": 6
        },
        "isFree": true,
        "cost": "Accès libre et gratuit.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement au quai municipal de L'Anse-Saint-Jean.",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Stationnement au quai municipal de L'Anse-Saint-Jean.",
            "type": "Quai / accès municipal",
            "difficulty": "Modéré à sportif",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Conditions variables: vent, courant ou vagues possibles",
            "Vérifiez les règles locales et l'accès exact avant de partir"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot à aborder avec prudence",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "lac-saint-jean-alma",
        "slug": "lac-saint-jean-alma",
        "name": "Lac Saint-Jean (Alma)",
        "region": "Saguenay-Lac-Saint-Jean",
        "lat": 48.47962,
        "lon": -71.79344,
        "mainImage": "assets/spots/lac-mercier-illustration-ia.jpg",
        "gallery": [
            "assets/spots/lac-mercier-illustration-ia.jpg"
        ],
        "description": "Lac Saint-Jean (Alma) est un spot de paddle de la r?gion Saguenay-Lac-Saint-Jean. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Marina St-Gédéon, mise à l'eau OSM près de la plage.",
        "longDescription": "Lac Saint-Jean (Alma) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Saguenay-Lac-Saint-Jean. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Une véritable mer intérieure. Vagues importantes par vent d'Est.",
        "difficulty": "facile",
        "paddleScore": 74,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Accès public gratuit.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Grand plan d'eau",
        "season": "Mai à septembre",
        "parking": {
            "location": "Marina St-Gédéon, mise à l'eau OSM près de la plage.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Marina St-Gédéon, mise à l'eau OSM près de la plage.",
            "type": "Marina / mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "riviere-bonaventure",
        "slug": "riviere-bonaventure",
        "name": "Rivière Bonaventure",
        "region": "Gaspésie",
        "lat": 48.0625,
        "lon": -65.5165,
        "mainImage": "assets/spots/lac-forbes.jpg",
        "gallery": [
            "assets/spots/lac-forbes.jpg"
        ],
        "description": "Rivière Bonaventure est un spot de paddle de la région Gaspésie. Considérée comme l'une des rivières les plus limpides au monde. Sensation de léviter sur l'eau.",
        "longDescription": "Rivière Bonaventure est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Gaspésie. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Considérée comme l'une des rivières les plus limpides au monde. Sensation de léviter sur l'eau.",
        "difficulty": "sportif",
        "paddleScore": 68,
        "scoreFactors": {
            "wind": 6,
            "rain": 7,
            "temperature": 7,
            "waves": 6
        },
        "isFree": true,
        "cost": "Gratuit pour navigation autonome.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Accès public sous le pont de la route 132.",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Accès public sous le pont de la route 132.",
            "type": "Accès depuis stationnement",
            "difficulty": "Modéré à sportif",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Conditions variables: vent, courant ou vagues possibles",
            "Vérifiez les règles locales et l'accès exact avant de partir"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot à aborder avec prudence",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "parc-national-forillon",
        "slug": "parc-national-forillon",
        "name": "Parc National Forillon",
        "region": "Gaspésie",
        "lat": 48.8305,
        "lon": -64.2165,
        "mainImage": "assets/spots/lac-matapedia-baie-de-charlie/rive-boisee.jpg",
        "gallery": [
            "assets/spots/lac-matapedia-baie-de-charlie/rive-boisee.jpg"
        ],
        "description": "Le point GPS de la plage du parc national Forillon est confirmé. Le stationnement se trouve de l'autre côté de la rue.",
        "longDescription": "Le point GPS confirmé mène à la plage du parc national Forillon. Le stationnement se trouve directement de l'autre côté de la rue. Avant une sortie, vérifiez les droits d'entrée de Parcs Canada, la météo marine, le vent, les vagues et les restrictions locales.",
        "difficulty": "sportif",
        "paddleScore": 66,
        "scoreFactors": {
            "wind": 6,
            "rain": 7,
            "temperature": 7,
            "waves": 6
        },
        "isFree": false,
        "cost": "Tarification d'entrée de Parc Canada applicable.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement du sentier du mont Saint-Alban, route 132",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "Tarification d'entrée de Parc Canada applicable."
        },
        "access": {
            "description": "Plage confirmée du parc national Forillon",
            "type": "Plage / accès nautique côtier",
            "difficulty": "Modéré à sportif",
            "launchPoint": "Coordonnées confirmées par l'utilisateur"
        },
        "amenities": [
            "GPS de plage confirmé",
            "Stationnement confirmé à environ 41 m, de l'autre côté de la rue",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Conditions variables: vent, courant ou vagues possibles",
            "Vérifiez les règles locales et l'accès exact avant de partir"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Oui. Le point de plage est confirmé et le stationnement du sentier du mont Saint-Alban se trouve à environ 41 m, de l'autre côté de la rue."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique: Tarification d'entrée de Parc Canada applicable."
            }
        ],
        "highlights": [
            "GPS de plage confirmé",
            "Stationnement exact à environ 41 m",
            "Droits d'entrée de Parcs Canada à prévoir",
            "Conditions maritimes à surveiller"
        ]
    },
    {
        "id": "lac-beauport",
        "slug": "lac-beauport",
        "name": "Lac Beauport",
        "region": "Québec",
        "lat": 46.9435,
        "lon": -71.2935,
        "mainImage": "assets/spots/lac-megantic.jpg",
        "gallery": [
            "assets/spots/lac-megantic.jpg"
        ],
        "description": "Lac Beauport est un spot de paddle de la région Québec. Le point de ralliement des paddlers de la région de Québec. Plan d'eau très calme et abrité.",
        "longDescription": "Lac Beauport est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Québec. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Le point de ralliement des paddlers de la région de Québec. Plan d'eau très calme et abrité.",
        "difficulty": "facile",
        "paddleScore": 80,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Frais d'accès journalier requis.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement au Club Nautique de Lac-Beauport.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Frais d'accès journalier requis."
        },
        "access": {
            "description": "Stationnement au Club Nautique de Lac-Beauport.",
            "type": "Accès depuis stationnement",
            "difficulty": "Facile",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique: Frais d'accès journalier requis."
            }
        ],
        "highlights": [
            "Accès ou stationnement payant à prévoir",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "marais-du-nord-st-charles",
        "slug": "marais-du-nord-st-charles",
        "name": "Marais du Nord (St-Charles)",
        "region": "Québec",
        "lat": 46.958743932978464, 
        "lon": -71.39128783083098,
        "mainImage": "assets/spots/lac-forbes.jpg",
        "gallery": [
            "assets/spots/lac-forbes.jpg"
        ],
        "description": "Marais du Nord (St-Charles) est un spot de paddle de la région Québec. Explorez un labyrinthe d'eau calme d'une biodiversité exceptionnelle. Calme absolu garanti.",
        "longDescription": "Marais du Nord (St-Charles) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Québec. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Explorez un labyrinthe d'eau calme d'une biodiversité exceptionnelle. Calme absolu garanti.",
        "difficulty": "facile",
        "paddleScore": 80,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Frais d'accès pour la conservation du site.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement principal du site d'interprétation.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Frais d'accès pour la conservation du site."
        },
        "access": {
            "description": "Stationnement principal du site d'interprétation.",
            "type": "Accès depuis stationnement",
            "difficulty": "Facile",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique: Frais d'accès pour la conservation du site."
            }
        ],
        "highlights": [
            "Accès ou stationnement payant à prévoir",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "lac-meech-gatineau",
        "slug": "lac-meech-gatineau",
        "name": "Lac Meech (Gatineau)",
        "region": "Outaouais",
        "lat": 45.5305,
        "lon": -75.8435,
        "mainImage": "assets/spots/lac-raymond-val-morin.jpg",
        "gallery": [
            "assets/spots/lac-raymond-val-morin.jpg"
        ],
        "description": "Lac Meech (Gatineau) est un spot de paddle de la région Outaouais. Plan d'eau très calme niché dans les collines de la Gatineau. Très populaire en été.",
        "longDescription": "Lac Meech (Gatineau) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Outaouais. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Plan d'eau très calme niché dans les collines de la Gatineau. Très populaire en été.",
        "difficulty": "facile",
        "paddleScore": 82,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Accès gratuit au lac (stationnement payant en été).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement P11 (Plage O'Brien).",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Stationnement P11 (Plage O'Brien).",
            "type": "Plage / accès riverain",
            "difficulty": "Facile",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "iles-de-boucherville",
        "slug": "iles-de-boucherville",
        "name": "Îles-de-Boucherville",
        "region": "Montréal",
        "lat": 45.61196,
        "lon": -73.45680,
        "mainImage": "assets/spots/lac-mercier-illustration-ia.jpg",
        "gallery": [
            "assets/spots/lac-mercier-illustration-ia.jpg"
        ],
        "description": "Îles-de-Boucherville est un spot de paddle de la r?gion Montréal. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Mise à l'eau du parc national des Îles-de-Boucherville.",
        "longDescription": "Îles-de-Boucherville est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Montréal. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Naviguez dans des chenaux étroits et calmes du Saint-Laurent. Il est fréquent de croiser des cerfs !",
        "difficulty": "facile",
        "paddleScore": 80,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Frais d'accès quotidiens de la SEPAQ.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Mise à l'eau du parc national des Îles-de-Boucherville.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Frais d'accès quotidiens de la SEPAQ."
        },
        "access": {
            "description": "Mise à l'eau du parc national des Îles-de-Boucherville.",
            "type": "Mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique: Frais d'accès quotidiens de la SEPAQ."
            }
        ],
        "highlights": [
            "Accès ou stationnement payant à prévoir",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "canal-de-lachine",
        "slug": "canal-de-lachine",
        "name": "Canal de Lachine",
        "region": "Montréal",
        "lat": 45.47895,
        "lon": -73.57404,
        "mainImage": "assets/spots/lac-mercier-illustration-ia.jpg",
        "gallery": [
            "assets/spots/lac-mercier-illustration-ia.jpg"
        ],
        "description": "Canal de Lachine est un spot de paddle de la r?gion Montréal. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Centre Nautique du Canal.",
        "longDescription": "Canal de Lachine est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Montréal. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Parcours urbain historique au cœur de Montréal. Eaux calmes sans aucun courant.",
        "difficulty": "facile",
        "paddleScore": 74,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Navigation libre et gratuite (permis d'écluse optionnel).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Centre Nautique du Canal.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Centre Nautique du Canal.",
            "type": "Centre nautique / marina",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "riviere-des-outaouais-arundel",
        "slug": "riviere-des-outaouais-arundel",
        "name": "Rivière des Outaouais (Arundel)",
        "region": "Laurentides",
        "lat": 46.0795,
        "lon": -74.9218,
        "mainImage": "assets/spots/lac-mercier-illustration-ia.jpg",
        "gallery": [
            "assets/spots/lac-mercier-illustration-ia.jpg"
        ],
        "description": "Rivière des Outaouais (Arundel) est un spot de paddle de la région Laurentides. Rivière paisible idéale pour débuter, paysages forestiers exceptionnels.",
        "longDescription": "Rivière des Outaouais (Arundel) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Laurentides. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Rivière paisible idéale pour débuter, paysages forestiers exceptionnels.",
        "difficulty": "facile",
        "paddleScore": 82,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Accès public gratuit.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Accès gratuit au parc Arundel.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Accès gratuit au parc Arundel.",
            "type": "Accès depuis stationnement",
            "difficulty": "Facile",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "lac-du-diable-laurentides",
        "slug": "lac-du-diable-laurentides",
        "name": "Lac Forbes (Laurentides)",
        "region": "Laurentides",
        "lat": 46.488844424555495,
        "lon": -74.17198999349367,
        "mainImage": "assets/spots/lac-forbes.jpg",
        "gallery": [
            "assets/spots/lac-forbes.jpg"
        ],
        "description": "Lac Forbes (Laurentides) remplace l'ancien point du Lac du Diable avec un point GPS confirmé par l'utilisateur.",
        "longDescription": "Lac Forbes (Laurentides) est référencé dans Spot Paddle comme point d'accès confirmé par l'utilisateur. Avant la sortie, validez les règles locales, la météo, le vent, le stationnement et les restrictions saisonnières sur place.",
        "difficulty": "facile",
        "paddleScore": 66,
        "scoreFactors": {
            "wind": 6,
            "rain": 7,
            "temperature": 7,
            "waves": 6
        },
        "isFree": true,
        "cost": "À vérifier sur place.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement à vérifier près de l'accès au Lac Forbes.",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "À vérifier"
        },
        "access": {
            "description": "Point GPS confirmé au Lac Forbes.",
            "type": "Accès nautique confirmé",
            "difficulty": "À vérifier sur place",
            "launchPoint": "Point confirmé par l'utilisateur"
        },
        "amenities": [
            "Point GPS confirmé par l'utilisateur",
            "Stationnement et services à vérifier sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Conditions variables: vent, courant ou vagues possibles",
            "Vérifiez les règles locales et l'accès exact avant de partir"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Oui. Le point a été remplacé par les coordonnées confirmées par l'utilisateur pour le Lac Forbes."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "Le tarif et les conditions de stationnement restent à vérifier sur place."
            }
        ],
        "highlights": [
            "Point GPS confirmé par l'utilisateur",
            "Remplace l'ancien point du Lac du Diable",
            "Page générée depuis les données de la carte",
            "Stationnement et règles locales à vérifier"
        ]
    },
    {
        "id": "lac-megantic",
        "slug": "lac-megantic",
        "name": "Lac Mégantic",
        "region": "Estrie",
        "lat": 45.58749460337366,
        "lon": -70.9277716473864,
        "mainImage": "assets/spots/lac-megantic.jpg",
        "gallery": [
            "assets/spots/lac-megantic.jpg"
        ],
        "description": "La Station touristique Baie-des-Sables donne accès au lac Mégantic par une plage aménagée avec location nautique, descente de bateaux et quais visiteurs.",
        "longDescription": "Le point GPS confirmé mène à la Station touristique Baie-des-Sables, sur le lac Mégantic. Le site officiel confirme une plage aménagée, de la location nautique, une descente de bateaux, des quais visiteurs, des espaces de pique-nique et un bâtiment sanitaire. Le départ en paddle doit se faire depuis le secteur nautique autorisé, à l'extérieur de la zone réservée à la baignade.",
        "difficulty": "facile",
        "paddleScore": 82,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Tarification de la Station touristique Baie-des-Sables à vérifier",
        "waterQuality": "À vérifier localement",
        "maxLength": "Grand plan d'eau",
        "season": "Mai à septembre",
        "parking": {
            "location": "Station touristique Baie-des-Sables",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "À vérifier"
        },
        "access": {
            "description": "Plage aménagée et secteur nautique de Baie-des-Sables",
            "type": "Plage aménagée / descente de bateaux",
            "difficulty": "Facile",
            "launchPoint": "Secteur nautique autorisé, hors de la zone de baignade"
        },
        "amenities": [
            "Plage aménagée",
            "Location nautique et descente de bateaux",
            "Quais visiteurs, pique-nique et bâtiment sanitaire"
        ],
        "warnings": [
            "Objets flottants interdits dans la zone de baignade, sauf VFI",
            "Il est interdit de stationner un véhicule sur la plage",
            "Présence interdite sur la plage entre 23 h et 6 h"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Oui. Le GPS mène à la Station touristique Baie-des-Sables, dont la page officielle confirme la plage, la descente de bateaux et les quais visiteurs."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Utilisez le secteur nautique ou la descente de bateaux et évitez la zone de baignade, où les objets flottants sont interdits sauf les VFI."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La page officielle consultée ne confirme pas la gratuité. Vérifiez la tarification en vigueur avant le déplacement."
            }
        ],
        "highlights": [
            "GPS confirmé à Baie-des-Sables",
            "Plage et services nautiques officiels",
            "Descente de bateaux et quais visiteurs",
            "Règlements de la zone de baignade à respecter"
        ]
    },
    {
        "id": "lac-aylmer-stratford",
        "slug": "lac-aylmer-stratford",
        "name": "Lac Aylmer (Stratford)",
        "region": "Estrie",
        "lat": 45.80647,
        "lon": -71.32590,
        "mainImage": "assets/spots/lac-lyster.jpg",
        "gallery": [
            "assets/spots/lac-lyster.jpg"
        ],
        "description": "Lac Aylmer (Stratford) est un spot de paddle de la r?gion Estrie. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Mise à l'eau Lac Aylmer, secteur Stratford.",
        "longDescription": "Lac Aylmer (Stratford) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Estrie. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Petit lac tranquille entouré de montagnes boisées. Excellente expérience de paddle.",
        "difficulty": "facile",
        "paddleScore": 76,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Accès payant (environ 8$).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Mise à l'eau Lac Aylmer, secteur Stratford.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Accès payant (environ 8$)."
        },
        "access": {
            "description": "Mise à l'eau Lac Aylmer, secteur Stratford.",
            "type": "Mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique: Accès payant (environ 8$)."
            }
        ],
        "highlights": [
            "Accès ou stationnement payant à prévoir",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "lac-brome",
        "slug": "lac-brome",
        "name": "Lac Brome",
        "region": "Estrie",
        "lat": 45.25649,
        "lon": -72.49532,
        "mainImage": "assets/spots/lac-forbes.jpg",
        "gallery": [
            "assets/spots/lac-forbes.jpg"
        ],
        "description": "Lac Brome est un spot de paddle de la r?gion Estrie. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Mise à l'eau du Lac Brome.",
        "longDescription": "Lac Brome est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Estrie. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Réputé pour sa clarté exceptionnelle, communauté de paddlers très active.",
        "difficulty": "facile",
        "paddleScore": 78,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Gratuit ou petit frais selon l'endroit.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Mise à l'eau du Lac Brome.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Mise à l'eau du Lac Brome.",
            "type": "Mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "riviere-chicoutimi",
        "slug": "riviere-chicoutimi",
        "name": "Rivière Chicoutimi",
        "region": "Saguenay-Lac-Saint-Jean",
        "lat": 48.43030,
        "lon": -71.05171,
        "mainImage": "assets/spots/lac-lyster.jpg",
        "gallery": [
            "assets/spots/lac-lyster.jpg"
        ],
        "description": "Rivière Chicoutimi est un spot de paddle de la r?gion Saguenay-Lac-Saint-Jean. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Marina Saguenay / mise à l'eau.",
        "longDescription": "Rivière Chicoutimi est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Saguenay-Lac-Saint-Jean. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Rivière serpentant entre les montagnes, faible courant en amont.",
        "difficulty": "facile",
        "paddleScore": 70,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Accès public gratuit.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Marina Saguenay / mise à l'eau.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Marina Saguenay / mise à l'eau.",
            "type": "Marina / mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "lac-kenogami",
        "slug": "lac-kenogami",
        "name": "Lac Kénogami",
        "region": "Saguenay-Lac-Saint-Jean",
        "lat": 48.3865,
        "lon": -71.2365,
        "mainImage": "assets/spots/lac-lyster.jpg",
        "gallery": [
            "assets/spots/lac-lyster.jpg"
        ],
        "description": "Lac Kénogami est un spot de paddle de la région Saguenay-Lac-Saint-Jean. Lac magnifique avec cascades accessibles. Eau très claire et froide.",
        "longDescription": "Lac Kénogami est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Saguenay-Lac-Saint-Jean. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Lac magnifique avec cascades accessibles. Eau très claire et froide.",
        "difficulty": "facile",
        "paddleScore": 78,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Accès gratuit.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement aux chutes Kénogami.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Stationnement aux chutes Kénogami.",
            "type": "Accès depuis stationnement",
            "difficulty": "Facile",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "riviere-ashuapmushuan",
        "slug": "riviere-ashuapmushuan",
        "name": "Rivière Ashuapmushuan",
        "region": "Saguenay-Lac-Saint-Jean",
        "lat": 48.6415,
        "lon": -72.6875,
        "mainImage": "assets/spots/lac-maskinonge.jpg",
        "gallery": [
            "assets/spots/lac-maskinonge.jpg"
        ],
        "description": "Rivière Ashuapmushuan est un spot de paddle de la région Saguenay-Lac-Saint-Jean. Rivière de classe mondiale, sections calmes accessibles aux débutants.",
        "longDescription": "Rivière Ashuapmushuan est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Saguenay-Lac-Saint-Jean. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Rivière de classe mondiale, sections calmes accessibles aux débutants.",
        "difficulty": "sportif",
        "paddleScore": 70,
        "scoreFactors": {
            "wind": 6,
            "rain": 7,
            "temperature": 7,
            "waves": 6
        },
        "isFree": false,
        "cost": "Frais d'accès minimaux.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Accès à partir du parc Ashuapmushuan.",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "Frais d'accès minimaux."
        },
        "access": {
            "description": "Accès à partir du parc Ashuapmushuan.",
            "type": "Accès depuis stationnement",
            "difficulty": "Modéré à sportif",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Conditions variables: vent, courant ou vagues possibles",
            "Vérifiez les règles locales et l'accès exact avant de partir"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique: Frais d'accès minimaux."
            }
        ],
        "highlights": [
            "Accès ou stationnement payant à prévoir",
            "Spot à aborder avec prudence",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "baie-de-perce",
        "slug": "baie-de-perce",
        "name": "Baie de Percé",
        "region": "Gaspésie",
        "lat": 48.517193260835136,
        "lon": -64.21663054575258,
        "mainImage": "assets/spots/lac-matapedia-baie-de-charlie/rive-boisee.jpg",
        "gallery": [
            "assets/spots/lac-matapedia-baie-de-charlie/rive-boisee.jpg"
        ],
        "description": "La Baie de Percé est un spot côtier de la Gaspésie. Le point GPS d'accès a été confirmé directement pour remplacer l'ancien point générique.",
        "longDescription": "Le point GPS confirmé mène au secteur d'accès fourni pour la Baie de Percé. Avant une sortie, vérifiez le stationnement, les droits d'accès, les marées, le vent et les conditions maritimes. Le secteur offre un décor côtier remarquable, mais exige une préparation adaptée au fleuve et à la météo gaspésienne.",
        "difficulty": "facile",
        "paddleScore": 78,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Tarif et conditions d'accès à vérifier",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement à vérifier près de l'accès à l'eau",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "À vérifier"
        },
        "access": {
            "description": "Point d'accès confirmé de la Baie de Percé",
            "type": "Accès nautique côtier",
            "difficulty": "Facile",
            "launchPoint": "Coordonnées confirmées par l'utilisateur"
        },
        "amenities": [
            "GPS d'accès confirmé",
            "Stationnement et services à vérifier",
            "Consultez le vent, les marées et la météo avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Oui. Les coordonnées du point d'accès ont été confirmées directement pour la Baie de Percé."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La gratuité n'est pas confirmée. Vérifiez les règles et la tarification locale avant le déplacement."
            }
        ],
        "highlights": [
            "GPS d'accès confirmé",
            "Paysage côtier gaspésien",
            "Conditions maritimes à surveiller",
            "Stationnement et tarif à vérifier"
        ]
    },
    {
        "id": "lac-du-cap-aux-os",
        "slug": "lac-du-cap-aux-os",
        "name": "Lac du Cap-aux-Os",
        "region": "Gaspésie",
        "lat": 48.3795,
        "lon": -64.8905,
        "mainImage": "assets/spots/lac-du-cap-aux-os.jpg",
        "gallery": [
            "assets/spots/lac-du-cap-aux-os.jpg"
        ],
        "description": "Le point GPS du Lac du Cap-aux-Os a été confirmé directement. Un stationnement se trouve juste à côté de l'accès, sur la route 132.",
        "longDescription": "Le point GPS confirmé mène à l'accès du Lac du Cap-aux-Os. Le stationnement adjacent se trouve sur la route 132. Avant une sortie, vérifiez les conditions locales, le vent, la température de l'eau et les éventuelles restrictions saisonnières.",
        "difficulty": "facile",
        "paddleScore": 76,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Tarification à vérifier",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement adjacent à l'accès sur la route 132",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "À vérifier"
        },
        "access": {
            "description": "Accès confirmé près du stationnement de la route 132",
            "type": "Accès nautique",
            "difficulty": "Facile",
            "launchPoint": "Coordonnées confirmées par l'utilisateur"
        },
        "amenities": [
            "GPS d'accès confirmé",
            "Stationnement adjacent sur la route 132",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Oui. Les coordonnées de l'accès ont été confirmées directement et le stationnement se trouve juste à côté sur la route 132."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La tarification n'est pas confirmée. Vérifiez les indications sur place."
            }
        ],
        "highlights": [
            "GPS d'accès confirmé",
            "Stationnement adjacent sur la route 132",
            "Accès généralement simple",
            "Tarification à vérifier"
        ]
    },
    {
        "id": "riviere-cascapedia",
        "slug": "riviere-cascapedia",
        "name": "Rivière Cascapédia",
        "region": "Gaspésie",
        "lat": 48.25311727909155,
        "lon": -65.90292651939353,
        "mainImage": "assets/spots/lac-mercier-illustration-ia.jpg",
        "gallery": [
            "assets/spots/lac-mercier-illustration-ia.jpg"
        ],
        "description": "Rivière Cascapédia est un spot de paddle de la région Gaspésie. Rivière réputée pour sa grande clarté et ses courants modérés.",
        "longDescription": "Rivière Cascapédia est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Gaspésie. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Rivière réputée pour sa grande clarté et ses courants modérés.",
        "difficulty": "sportif",
        "paddleScore": 60,
        "scoreFactors": {
            "wind": 6,
            "rain": 7,
            "temperature": 7,
            "waves": 6
        },
        "isFree": true,
        "cost": "Gratuit pour la navigation autonome.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Accès public gratuit (plusieurs rampes).",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Accès public gratuit (plusieurs rampes).",
            "type": "Rampe de mise à l'eau",
            "difficulty": "Modéré à sportif",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Point d'accès à l'eau confirmé",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Conditions variables: vent, courant ou vagues possibles",
            "Vérifiez les règles locales et l'accès exact avant de partir"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Oui. Les coordonnées de l'accès à l'eau ont été confirmées directement par l'utilisateur."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot à aborder avec prudence",
            "Page générée depuis les données de la carte",
            "Point d'accès à l'eau confirmé"
        ]
    },
    {
        "id": "lac-des-iles-quebec",
        "slug": "lac-des-iles-quebec",
        "name": "Lac des Îles (Laurentides)",
        "region": "Laurentides",
        "lat": 46.408652633180225,
        "lon": -75.5163500723817,
        "mainImage": "assets/spots/lac-des-iles-baie-poulin.jpg",
        "gallery": [
            "assets/spots/lac-des-iles-baie-poulin.jpg"
        ],
        "description": "Lac des Îles (Laurentides) est un spot de paddle accessible par le quai public de la Baie Poulin, dans le secteur Lac-des-Îles.",
        "longDescription": "Lac des Îles (Laurentides) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau depuis le quai public confirmé à la Baie Poulin. Avant la sortie, validez les règles locales, la météo, le vent et les conditions de stationnement sur place.",
        "difficulty": "facile",
        "paddleScore": 78,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Accès public gratuit.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Quai public de la Baie Poulin, à proximité du chemin de la Presqu'île.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Quai public confirmé à la Baie Poulin.",
            "type": "Quai public",
            "difficulty": "Facile",
            "launchPoint": "Quai public"
        },
        "amenities": [
            "Quai public confirmé par l'utilisateur",
            "Accès routier à proximité du chemin de la Presqu'île",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Oui. Le point GPS a été confirmé par l'utilisateur comme quai public à la Baie Poulin."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Quai public confirmé",
            "Accès routier à proximité",
            "Page générée depuis les données de la carte",
            "Conditions de stationnement à vérifier sur place"
        ]
    },
    {
        "id": "marais-de-l-ile-madame",
        "slug": "marais-de-l-ile-madame",
        "name": "Parc Monseigneur-Vel (Île du Marais)",
        "region": "Estrie",
        "lat": 45.268449928380484,
        "lon": -72.04829719674834,
        "mainImage": "assets/spots/lac-forbes.jpg",
        "gallery": [
            "assets/spots/lac-forbes.jpg"
        ],
        "description": "Le Parc Monseigneur-Vel remplace l'ancien point de l'Île du Marais avec un accès et un stationnement confirmés par l'utilisateur.",
        "longDescription": "Le Parc Monseigneur-Vel est référencé dans Spot Paddle comme point d'accès confirmé pour le secteur de l'Île du Marais / lac Magog. Le stationnement et l'accès à l'eau sont enregistrés séparément. Avant la sortie, validez les règles locales, la météo, le vent et les conditions du site.",
        "difficulty": "facile",
        "paddleScore": 80,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "À vérifier sur place.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Parc Monseigneur-Vel.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "À vérifier"
        },
        "access": {
            "description": "Accès à l'eau du Parc Monseigneur-Vel.",
            "type": "Parc / accès riverain",
            "difficulty": "Facile",
            "launchPoint": "Parc Monseigneur-Vel"
        },
        "amenities": [
            "Stationnement confirmé par l'utilisateur",
            "Accès confirmé par l'utilisateur",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Oui. Les points GPS de l'accès à l'eau et du stationnement ont été confirmés séparément par l'utilisateur."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "Les frais éventuels restent à vérifier sur place."
            }
        ],
        "highlights": [
            "Parc Monseigneur-Vel",
            "Stationnement et accès confirmés",
            "Page générée depuis les données de la carte",
            "Conditions locales à vérifier avant la sortie"
        ]
    },
    {
        "id": "riviere-sainte-anne-quebec",
        "slug": "riviere-sainte-anne-quebec",
        "name": "Rivière Sainte-Anne (Québec)",
        "region": "Québec",
        "lat": 46.9495,
        "lon": -71.0865,
        "mainImage": "assets/spots/lac-maskinonge.jpg",
        "gallery": [
            "assets/spots/lac-maskinonge.jpg"
        ],
        "description": "Rivière Sainte-Anne (Québec) est un spot de paddle de la région Québec. Rivière pittoresque avec sections très calmes, prairies et forêts alentour.",
        "longDescription": "Rivière Sainte-Anne (Québec) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Québec. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Rivière pittoresque avec sections très calmes, prairies et forêts alentour.",
        "difficulty": "facile",
        "paddleScore": 82,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Accès public gratuit.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement gratuit du parc. ",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Stationnement gratuit du parc. ",
            "type": "Accès depuis stationnement",
            "difficulty": "Facile",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "lac-leamy-gatineau",
        "slug": "lac-leamy-gatineau",
        "name": "Lac Leamy (Gatineau)",
        "region": "Outaouais",
        "lat": 45.43198,
        "lon": -75.70705,
        "mainImage": "assets/spots/lac-raymond-val-morin.jpg",
        "gallery": [
            "assets/spots/lac-raymond-val-morin.jpg"
        ],
        "description": "Lac Leamy (Gatineau) est un spot de paddle de la r?gion Outaouais. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Mise à l'eau du Lac Leamy.",
        "longDescription": "Lac Leamy (Gatineau) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Outaouais. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Lac tranquille au cœur du parc de la Gatineau, très populaire en week-end.",
        "difficulty": "facile",
        "paddleScore": 76,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Accès gratuit au parc (stationnement payant).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Mise à l'eau du Lac Leamy.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Accès gratuit au parc (stationnement payant)."
        },
        "access": {
            "description": "Mise à l'eau du Lac Leamy.",
            "type": "Mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique: Accès gratuit au parc (stationnement payant)."
            }
        ],
        "highlights": [
            "Accès ou stationnement payant à prévoir",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "riviere-des-outaouais-chelsea",
        "slug": "riviere-des-outaouais-chelsea",
        "name": "Rivière des Outaouais (Chelsea)",
        "region": "Outaouais",
        "lat": 45.46081,
        "lon": -75.68523,
        "mainImage": "assets/spots/lac-mercier-illustration-ia.jpg",
        "gallery": [
            "assets/spots/lac-mercier-illustration-ia.jpg"
        ],
        "description": "Rivière des Outaouais (Chelsea) est un spot de paddle de la r?gion Outaouais. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Mise à l'eau sur la rivière des Outaouais, secteur Gatineau/Chelsea.",
        "longDescription": "Rivière des Outaouais (Chelsea) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Outaouais. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Section calme de la rivière majeure de la région, idéale pour débuter.",
        "difficulty": "facile",
        "paddleScore": 82,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Accès gratuit.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Mise à l'eau sur la rivière des Outaouais, secteur Gatineau/Chelsea.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Mise à l'eau sur la rivière des Outaouais, secteur Gatineau/Chelsea.",
            "type": "Mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "lac-la-peche-outaouais",
        "slug": "lac-la-peche-outaouais",
        "name": "Lac la Pêche (Outaouais)",
        "region": "Outaouais",
        "lat": 45.62240,
        "lon": -76.17843,
        "mainImage": "assets/spots/lac-forbes.jpg",
        "gallery": [
            "assets/spots/lac-forbes.jpg"
        ],
        "description": "Lac la Pêche (Outaouais) est un spot de paddle de la r?gion Outaouais. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Mise à l'eau du lac la Pêche.",
        "longDescription": "Lac la Pêche (Outaouais) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Outaouais. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Lac du parc de la Gatineau avec activités de canotage; choix plus approprié que le lac Pink, protégé.",
        "difficulty": "facile",
        "paddleScore": 82,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Frais d'accès du parc.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Mise à l'eau du lac la Pêche.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Mise à l'eau du lac la Pêche.",
            "type": "Mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "lac-philippe-outaouais",
        "slug": "lac-philippe-outaouais",
        "name": "Lac Philippe (Outaouais)",
        "region": "Outaouais",
        "lat": 45.60212,
        "lon": -76.04355,
        "mainImage": "assets/spots/lac-lyster.jpg",
        "gallery": [
            "assets/spots/lac-lyster.jpg"
        ],
        "description": "Lac Philippe (Outaouais) est un spot de paddle de la r?gion Outaouais. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Mise à l'eau du lac Philippe, parc de la Gatineau.",
        "longDescription": "Lac Philippe (Outaouais) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Outaouais. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Lac de parc provincial avec plages aménagées et zones protégées.",
        "difficulty": "facile",
        "paddleScore": 80,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Frais d'accès (environ 7$).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Mise à l'eau du lac Philippe, parc de la Gatineau.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Frais d'accès (environ 7$)."
        },
        "access": {
            "description": "Mise à l'eau du lac Philippe, parc de la Gatineau.",
            "type": "Mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique: Frais d'accès (environ 7$)."
            }
        ],
        "highlights": [
            "Accès ou stationnement payant à prévoir",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "bassin-de-lachine-montreal",
        "slug": "bassin-de-lachine-montreal",
        "name": "Bassin de Lachine (Montréal)",
        "region": "Montréal",
        "lat": 45.48807,
        "lon": -73.56237,
        "mainImage": "assets/spots/lac-mercier-illustration-ia.jpg",
        "gallery": [
            "assets/spots/lac-mercier-illustration-ia.jpg"
        ],
        "description": "Bassin de Lachine (Montréal) est un spot de paddle de la région Montréal. Plan d'eau urbain parfait pour les sorties courtes, bien développé.",
        "longDescription": "Bassin de Lachine (Montréal) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Montréal. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Plan d'eau urbain parfait pour les sorties courtes, bien développé.",
        "difficulty": "facile",
        "paddleScore": 78,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Navigation libre et gratuite.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement du Centre Nautique.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Stationnement du Centre Nautique.",
            "type": "Accès depuis stationnement",
            "difficulty": "Facile",
            "launchPoint": "Point indiqué sur la carte"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "fleuve-saint-laurent-ile-sainte-helene",
        "slug": "fleuve-saint-laurent-ile-sainte-helene",
        "name": "Fleuve Saint-Laurent (Île Sainte-Hélène)",
        "region": "Montréal",
        "lat": 45.50176,
        "lon": -73.52360,
        "mainImage": "assets/spots/lac-matapedia-baie-de-charlie/rive-boisee.jpg",
        "gallery": [
            "assets/spots/lac-matapedia-baie-de-charlie/rive-boisee.jpg"
        ],
        "description": "Fleuve Saint-Laurent (Île Sainte-Hélène) est un spot de paddle de la r?gion Montréal. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Mise à l'eau du parc Jean-Drapeau / Île Sainte-Hélène.",
        "longDescription": "Fleuve Saint-Laurent (Île Sainte-Hélène) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Montréal. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Fjord urbain magnifique, eaux un peu plus agitées (niveau intermédiaire).",
        "difficulty": "sportif",
        "paddleScore": 60,
        "scoreFactors": {
            "wind": 6,
            "rain": 7,
            "temperature": 7,
            "waves": 6
        },
        "isFree": true,
        "cost": "Accès gratuit depuis la côte.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Mise à l'eau du parc Jean-Drapeau / Île Sainte-Hélène.",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Mise à l'eau du parc Jean-Drapeau / Île Sainte-Hélène.",
            "type": "Mise à l'eau",
            "difficulty": "Modéré à sportif",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Conditions variables: vent, courant ou vagues possibles",
            "Vérifiez les règles locales et l'accès exact avant de partir"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique un accès gratuit, mais certains stationnements peuvent devenir payants en haute saison."
            }
        ],
        "highlights": [
            "Accès indiqué gratuit dans la fiche",
            "Spot à aborder avec prudence",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    },
    {
        "id": "bassin-olympique-parc-jean-drapeau",
        "slug": "bassin-olympique-parc-jean-drapeau",
        "name": "Bassin olympique (Parc Jean-Drapeau)",
        "region": "Montréal",
        "lat": 45.50176,
        "lon": -73.52360,
        "mainImage": "assets/spots/lac-forbes.jpg",
        "gallery": [
            "assets/spots/lac-forbes.jpg"
        ],
        "description": "Bassin olympique (Parc Jean-Drapeau) est un spot de paddle de la r?gion Montréal. Le point cartographique a ?t? rapproch? d'un acc?s r?el: Mise à l'eau du parc Jean-Drapeau.",
        "longDescription": "Bassin olympique (Parc Jean-Drapeau) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Montréal. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Bassin calme du parc Jean-Drapeau, mieux identifié que l'ancien libellé Lac Masson.",
        "difficulty": "facile",
        "paddleScore": 80,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Frais d'accès au parc (environ 5$).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Parcours variable",
        "season": "Mai à septembre",
        "parking": {
            "location": "Mise à l'eau du parc Jean-Drapeau.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Frais d'accès au parc (environ 5$)."
        },
        "access": {
            "description": "Mise à l'eau du parc Jean-Drapeau.",
            "type": "Mise à l'eau",
            "difficulty": "Facile",
            "launchPoint": "Point OSM de mise à l'eau"
        },
        "amenities": [
            "Stationnement ou accès à proximité selon la fiche",
            "Mise à l'eau à confirmer sur place",
            "Consultez la météo et le vent avant le départ"
        ],
        "warnings": [
            "Vérifiez les règles locales et l'accès exact avant de partir",
            "Les conditions peuvent changer rapidement selon le vent"
        ],
        "faq": [
            {
                "q": "Le point indiqué correspond-il à une mise à l'eau officielle ?",
                "a": "Il correspond au point de départ référencé dans la carte Spot Paddle. Certains accès doivent encore être validés précisément sur place ou avec la municipalité/le gestionnaire du site."
            },
            {
                "q": "Puis-je apporter mon propre paddle ?",
                "a": "Oui dans la plupart des cas, mais vérifiez toujours les règles locales, les frais, le lavage obligatoire et les restrictions saisonnières."
            },
            {
                "q": "Le stationnement est-il gratuit ?",
                "a": "La fiche indique: Frais d'accès au parc (environ 5$)."
            }
        ],
        "highlights": [
            "Accès ou stationnement payant à prévoir",
            "Spot généralement accessible",
            "Page générée depuis les données de la carte",
            "Point d'accès à valider avant la sortie"
        ]
    }
];

// Destinations populaires supplémentaires extraites de la carte publique La Vie SUP.
// Le HAR fourni par l'utilisateur fait foi pour confirmer les destinations GPS.
// Il ne fournit toutefois aucune mesure permettant de classer leur fréquentation.
// Accès nautiques des Pays-d'en-Haut vérifiés auprès des gestionnaires (saison 2026).
const paysDenHautVerifiedSpots = [
    {
        id: "lac-du-mont-habitant-plage", slug: "lac-du-mont-habitant-plage", name: "Lac du Mont Habitant (plage)", region: "Laurentides", lat: 45.88072798572343, lon: -74.17963580639703,
        mainImage: "assets/spots/lac-du-mont-habitant-plage.jpg", gallery: ["assets/spots/lac-du-mont-habitant-plage.jpg"],
        description: "Plage payante de Saint-Sauveur avec location d'embarcations non motorisées.", longDescription: "La plage du Mont Habitant, au 12 chemin des Skieurs, permet la baignade et les activités nautiques non motorisées en été. La MRC confirme la location d'embarcations sur place. Vérifiez l'horaire, le tarif et les règles visant les embarcations personnelles avant le départ.",
        difficulty: "facile", paddleScore: 78, scoreFactors: { wind: 8, rain: 7, temperature: 8, waves: 9 }, isFree: false, cost: "Accès payant; tarif à confirmer", waterQuality: "À vérifier localement", maxLength: "Petit lac", season: "Été",
        parking: { location: "12, chemin des Skieurs, Saint-Sauveur", spots: null, accessible: true, cost: "À confirmer" }, access: { description: "Accès par la plage", type: "Plage / location", difficulty: "Accès facile", launchPoint: "Plage du Mont Habitant" },
        amenities: ["Plage", "Aire de pique-nique", "Location d'embarcations non motorisées"], warnings: ["Accès payant", "Confirmer les règles applicables aux embarcations personnelles", "Pêche et barbecues interdits"], faq: [{ q: "Peut-on louer une embarcation?", a: "Oui, la MRC confirme la location d'embarcations non motorisées sur place." }], highlights: ["Location sur place", "Plan d'eau abrité", "Accès 2026 vérifié"]
    },
    {
        id: "lac-saint-joseph-plage-gratton", slug: "lac-saint-joseph-plage-gratton", name: "Lac Saint-Joseph (plage Gratton)", region: "Laurentides", lat: 45.972370018135365, lon: -74.33935648574739,
        mainImage: "assets/spots/lac-saint-joseph-plage-gratton.jpg", gallery: ["assets/spots/lac-saint-joseph-plage-gratton.jpg"],
        description: "Plage municipale gratuite où la MRC confirme les activités nautiques non motorisées.", longDescription: "La plage Gratton, au 2000 chemin du Village, offre baignade surveillée, pique-nique, pavillon sanitaire et activités nautiques non motorisées.",
        difficulty: "facile", paddleScore: 80, scoreFactors: { wind: 7, rain: 7, temperature: 8, waves: 8 }, isFree: true, waterQuality: "À vérifier localement", maxLength: "Parcours variable", season: "Été",
        parking: { location: "2000, chemin du Village, Saint-Adolphe-d'Howard", spots: null, accessible: true, cost: "Gratuit" }, access: { description: "Accès depuis la plage Gratton", type: "Plage", difficulty: "Accès facile", launchPoint: "Plage Gratton" }, amenities: ["Plage surveillée", "Pique-nique", "Pavillon sanitaire", "Jeux"], warnings: ["Baignade interdite sans sauveteur", "Circulation motorisée", "Valider la mise à l'eau avec le personnel"], faq: [{ q: "L'accès est-il gratuit?", a: "Oui, selon la fiche MRC 2026." }], highlights: ["Accès gratuit", "Services familiaux", "Accès nautique vérifié"]
    },
    {
        id: "lac-rond-plage-jean-guy-caron", slug: "lac-rond-plage-jean-guy-caron", name: "Lac Rond (plage Jean-Guy-Caron)", region: "Laurentides", lat: 45.94967058887019, lon: -74.14095805832862,
        mainImage: "assets/spots/lac-rond-plage-jean-guy-caron.jpg", gallery: ["assets/spots/lac-rond-plage-jean-guy-caron.jpg"],
        description: "Plage avec location de SUP, kayaks et canots; depuis 2026, les embarcations personnelles sont réservées aux résidents.", longDescription: "La plage Jean-Guy-Caron, au 1080 chemin du Chantecler, loue des embarcations non motorisées. Depuis 2026, les non-résidents ne peuvent plus mettre leur propre embarcation à l'eau. Les résidents utilisent le quai du parc Lionel-Patry après nettoyage obligatoire à la station du stationnement de la plage.",
        difficulty: "facile", paddleScore: 82, scoreFactors: { wind: 8, rain: 7, temperature: 8, waves: 8 }, isFree: false, cost: "Plage et stationnement payants pour les non-résidents; location en sus", waterQuality: "Excellente (échantillons municipaux 2026)", maxLength: "Petit lac", season: "Été",
        parking: { location: "1080, chemin du Chantecler, Sainte-Adèle", spots: null, accessible: true, cost: "10 $ par bloc de 4 h sans vignette (2026)" }, access: { description: "Location à la plage; embarcation personnelle réservée aux résidents", type: "Plage / location", difficulty: "Accès réglementé", launchPoint: "Plage Jean-Guy-Caron" }, amenities: ["Plage", "Location de SUP, kayaks et canots", "Pique-nique", "Station de lavage"], warnings: ["Embarcations personnelles interdites aux non-résidents depuis 2026", "Nettoyage obligatoire pour les résidents", "Embarcations interdites dans la zone de baignade"], faq: [{ q: "Un non-résident peut-il apporter son SUP?", a: "Non depuis 2026, mais il peut en louer un sur place." }], highlights: ["Location de SUP", "Eau excellente en 2026", "Règles actuelles vérifiées"]
    },
    {
        id: "lac-des-seize-iles-debarcadere", slug: "lac-des-seize-iles-debarcadere", name: "Lac des Seize Îles (débarcadère municipal)", region: "Laurentides", lat: 45.9231495841278, lon: -74.46794202259929,
        mainImage: "assets/spots/lac-des-seize-iles-debarcadere.jpg", gallery: ["assets/spots/lac-des-seize-iles-debarcadere.jpg"],
        description: "Débarcadère municipal sur la rue Lapierre, accessible aux visiteurs sur rendez-vous avec lavage obligatoire.", longDescription: "Le débarcadère accepte les embarcations sans moteur. En 2026, l'accès visiteur coûte 10 $ par jour et exige un rendez-vous pour l'entrée et la sortie. Le nettoyage est obligatoire avant et après. La plage Joseph-Rodger n'est pas un accès alternatif: toute embarcation y est interdite.",
        difficulty: "facile", paddleScore: 79, scoreFactors: { wind: 7, rain: 7, temperature: 8, waves: 8 }, isFree: false, cost: "10 $/jour sans moteur (visiteur, 2026)", waterQuality: "À vérifier localement", maxLength: "Parcours variable", season: "Saison nautique",
        parking: { location: "Rue Lapierre, Lac-des-Seize-Îles", spots: null, accessible: false, cost: "À confirmer" }, access: { description: "Rue Lapierre, sur réservation seulement", type: "Débarcadère municipal", difficulty: "Réservation obligatoire", launchPoint: "Débarcadère et station de lavage du lac des Seize-Îles" }, amenities: ["Rampe", "Station de lavage"], warnings: ["Rendez-vous requis pour l'entrée et la sortie", "Lavage avant et après", "Embarcations interdites à la plage Joseph-Rodger"], faq: [{ q: "Faut-il réserver?", a: "Oui, au 450 226-3117." }], highlights: ["Accès sans moteur confirmé", "Tarif 2026", "Lavage obligatoire"]
    },
    {
        id: "lac-masson-plage-municipale", slug: "lac-masson-plage-municipale", name: "Lac Masson (débarcadère municipal)", region: "Laurentides", lat: 46.0753837, lon: -74.1033272,
        description: "Débarcadère au 70 chemin Masson; lavage obligatoire à la station du 70A chemin des Hauteurs et vignette requise.", longDescription: "Toutes les embarcations doivent porter une vignette et être lavées à la station du 70A chemin des Hauteurs avant la mise à l'eau au 70 chemin Masson. Les embarcations non motorisées sont gratuites pour résidents et non-résidents, sous réserve de la procédure et des heures d'ouverture.",
        difficulty: "facile", paddleScore: 81, scoreFactors: { wind: 7, rain: 7, temperature: 8, waves: 7 }, isFree: true, cost: "Gratuit sans moteur; vignette et lavage obligatoires", waterQuality: "À vérifier localement", maxLength: "Parcours variable", season: "30 avril au 31 octobre 2026 selon l'horaire",
        parking: { location: "70, chemin Masson, Sainte-Marguerite-du-Lac-Masson", spots: null, accessible: true, cost: "À confirmer" }, access: { description: "Lavage au 70A chemin des Hauteurs puis mise à l'eau au 70 chemin Masson", type: "Débarcadère municipal", difficulty: "Démarches préalables", launchPoint: "Débarcadère du lac Masson" }, amenities: ["Rampe", "Station de lavage"], warnings: ["Vignette et lavage obligatoires", "Prévoir jusqu'à 24 h ouvrables pour la demande", "Respecter l'horaire"], faq: [{ q: "Une embarcation non motorisée est-elle payante?", a: "Non, mais l'inscription, la vignette et le lavage restent obligatoires." }], highlights: ["Accès sans moteur gratuit", "Station de lavage", "Débarcadère municipal"]
    },
    {
        id: "riviere-du-nord-parc-chemin-du-pont", slug: "riviere-du-nord-parc-chemin-du-pont", name: "Rivière du Nord (parc du chemin du Pont)", region: "Laurentides", lat: 45.894893, lon: -74.115192,
        description: "Descente municipale pour canot et kayak sur la rivière du Nord à Piedmont.", longDescription: "Le parc du chemin du Pont longe la rivière du Nord et offre une descente pour canot et kayak accessible du printemps à l'automne. L'accès indiqué est situé au 199 chemin du Pont.",
        difficulty: "sportif", paddleScore: 77, scoreFactors: { wind: 8, rain: 6, temperature: 7, waves: 7 }, isFree: true, waterQuality: "À vérifier localement", maxLength: "Parcours de rivière variable", season: "Printemps à automne",
        parking: { location: "199, chemin du Pont, Piedmont", spots: null, accessible: true, cost: "Gratuit" }, access: { description: "Descente aménagée", type: "Descente canot-kayak", difficulty: "Vérifier le courant", launchPoint: "Parc du chemin du Pont" }, amenities: ["Quai", "Pique-nique", "P'tit Train du Nord"], warnings: ["Vérifier le débit et prévoir le retour ou une navette"], faq: [{ q: "Où se trouve l'accès?", a: "Au parc du chemin du Pont, au 199 chemin du Pont." }], highlights: ["Descente officielle", "Accès gratuit", "Canot et kayak"]
    },
    {
        id: "riviere-du-nord-parc-gilbert-aubin", slug: "riviere-du-nord-parc-gilbert-aubin", name: "Rivière du Nord (parc Gilbert-Aubin)", region: "Laurentides", lat: 45.9024651, lon: -74.1345495,
        description: "Quai municipal sur la rivière du Nord; fermeture temporaire annoncée de la fin de l'été à l'automne 2026.", longDescription: "Un sentier du parc Gilbert-Aubin mène au quai sur la rivière du Nord. Piedmont annonce toutefois la fermeture complète du parc de la fin de l'été à l'automne 2026 pour des travaux près du sentier du quai. Confirmez la réouverture avant de partir.",
        difficulty: "sportif", paddleScore: 72, scoreFactors: { wind: 8, rain: 6, temperature: 7, waves: 7 }, isFree: true, waterQuality: "À vérifier localement", maxLength: "Parcours de rivière variable", season: "Fermeture prévue fin été-automne 2026",
        parking: { location: "685, boulevard des Laurentides, Piedmont", spots: null, accessible: false, cost: "Gratuit hors fermeture" }, access: { description: "Sentier vers le quai", type: "Quai / portage", difficulty: "Portage et ouverture à vérifier", launchPoint: "Quai du parc Gilbert-Aubin" }, amenities: ["Quai", "Sentiers"], warnings: ["Fermeture complète prévue fin été-automne 2026", "Confirmer la réouverture", "Vérifier le débit et prévoir le retour ou une navette"], faq: [{ q: "Le parc est-il ouvert?", a: "Une fermeture est prévue de la fin de l'été à l'automne 2026; vérifiez auprès de Piedmont." }], highlights: ["Quai municipal", "Accès rivière", "Alerte fermeture 2026"]
    }
];

paysDenHautVerifiedSpots.forEach(spot => {
    if (!lacDatabase.some(lac => lac.id === spot.id || lac.slug === spot.slug)) lacDatabase.push(spot);
});

const laVieSupPopularSpotSeeds = [
    { slug: "riviere-bras-du-nord", name: "Rivière Bras-du-Nord", region: "Québec", lat: 47.075670956977106, lon: -71.89465673117994, accessName: "Vallée Bras-du-Nord", score: 82 },
    { slug: "saint-laurent-ile-orleans", name: "Saint-Laurent-de-l'Île-d'Orléans", region: "Québec", lat: 46.86012576891334, lon: -71.00394669345651, accessName: "Accès au fleuve de Saint-Laurent-de-l'Île-d'Orléans", score: 78 },
    { slug: "anse-cap-rouge-parc-jean-dery", name: "Anse de Cap-Rouge (Parc Jean-Déry)", region: "Québec", lat: 46.7478181, lon: -71.343989, accessName: "Parc Jean-Déry", score: 80 },
    { slug: "lac-delage", name: "Lac Delage", region: "Québec", lat: 46.96853569873607, lon: -71.4026251968102, accessName: "Manoir du Lac Delage", score: 78 },
    { slug: "lac-saint-charles-centre-agiro", name: "Lac Saint-Charles (Centre Agiro)", region: "Québec", lat: 46.91136225783032, lon: -71.37185683996404, accessName: "Centre Agiro", score: 80 },
    { slug: "riviere-jacques-cartier-grand-heron", name: "Rivière Jacques-Cartier (Grand Héron)", region: "Québec", lat: 46.846126478496146, lon: -71.62536305388318, accessName: "Parc de glisse du Grand Héron", score: 81 },
    { slug: "lac-saint-augustin", name: "Lac Saint-Augustin", region: "Québec", lat: 46.74343047963627, lon: -71.3951573802442, accessName: "Parc riverain du Lac Saint-Augustin", score: 79 },
    { slug: "lac-saint-joseph-duchesnay", name: "Lac Saint-Joseph (Duchesnay)", region: "Québec", lat: 46.87058677113481, lon: -71.63576502200156, accessName: "Station touristique Duchesnay", score: 83 },
    { slug: "riviere-sainte-anne-portneuf", name: "Rivière Sainte-Anne (Portneuf)", region: "Québec", lat: 46.71183084326505, lon: -72.07568348873885, accessName: "Parc régional de Portneuf", score: 80 },
    { slug: "lac-sept-iles-portneuf", name: "Lac Sept-Îles (Portneuf)", region: "Québec", lat: 46.92257165399806, lon: -71.74192057534863, accessName: "Camp Portneuf", score: 78 },
    { slug: "lac-temiscouata-parc-national", name: "Lac Témiscouata", region: "Bas-Saint-Laurent", lat: 47.695538106839365, lon: -68.84352824507407, accessName: "Parc national du Lac-Témiscouata", score: 85 },
    { slug: "lac-long-portneuf", name: "Lac Long (Portneuf)", region: "Québec", lat: 46.83427797469136, lon: -72.14731880866188, accessName: "Parc régional de Portneuf", score: 80 },
    { slug: "lac-etchemin", name: "Lac Etchemin", region: "Chaudière-Appalaches", lat: 46.39506950939851, lon: -70.50892871733326, accessName: "Éco-Parc des Etchemins", score: 79 },
    { slug: "plage-berthier-sur-mer", name: "Berthier-sur-Mer", region: "Chaudière-Appalaches", lat: 46.934895957447615, lon: -70.7167548313723, accessName: "Plage de Berthier-sur-Mer", score: 78 },
    { slug: "lac-simon-portneuf", name: "Lac Simon (Portneuf)", region: "Québec", lat: 46.89838628655255, lon: -72.01959501428937, accessName: "Plage Eau Claire", score: 78 },
    { slug: "anse-a-l-orme", name: "L'Anse-à-l'Orme", region: "Montréal", lat: 45.45359666837751, lon: -73.93795110678688, accessName: "Parc-nature de l'Anse-à-l'Orme", score: 80 },
    { slug: "ile-bizard-parc-nature", name: "Île-Bizard (Parc-nature)", region: "Montréal", lat: 45.517164085182586, lon: -73.89966301735798, accessName: "Parc-nature du Bois-de-l'Île-Bizard", score: 81 },
    { slug: "plage-de-l-est-montreal", name: "Plage de l'Est", region: "Montréal", lat: 45.69801448232836, lon: -73.47954440684374, accessName: "Plage de l'Est", score: 76 },
    { slug: "riviere-des-prairies-beausejour", name: "Rivière des Prairies (Beauséjour)", region: "Montréal", lat: 45.52859657679447, lon: -73.7340093701714, accessName: "Parc du Beauséjour", score: 78 },
    { slug: "riviere-mille-iles-rosemere", name: "Rivière des Mille Îles (Rosemère)", region: "Laurentides", lat: 45.61628409314794, lon: -73.71368772274728, accessName: "Parc de la Rivière-des-Mille-Îles", score: 82 },
    { slug: "riviere-mille-iles-laval", name: "Rivière des Mille Îles (Laval)", region: "Laval", lat: 45.61003613757706, lon: -73.79642886099386, accessName: "Parc de la Rivière-des-Mille-Îles", score: 82 },
    { slug: "riviere-mille-iles-saint-eustache", name: "Rivière des Mille Îles (Saint-Eustache)", region: "Laurentides", lat: 45.5684655394164, lon: -73.86933586811523, accessName: "Parc de la Rivière-des-Mille-Îles", score: 79 },
    { slug: "ile-des-soeurs-pointe-nord", name: "Île des Sœurs (Pointe Nord)", region: "Montréal", lat: 45.47359826542235, lon: -73.53672596130842, accessName: "Parc de l'Esplanade de la Pointe-Nord", score: 79 },
    { slug: "verdun-parc-george-oreilly", name: "Verdun (Parc George-O'Reilly)", region: "Montréal", lat: 45.44281162584198, lon: -73.57448716079948, accessName: "Parc de l'Honorable-George-O'Reilly", score: 81 },
    { slug: "recreoparc-sainte-catherine", name: "Récréoparc de Sainte-Catherine", region: "Montérégie", lat: 45.409097533068895, lon: -73.55948067512136, accessName: "Récréoparc", score: 82 },
    { slug: "riviere-chateauguay-pointe-nautique", name: "Rivière Châteauguay (Pointe nautique)", region: "Montérégie", lat: 45.36898953256263, lon: -73.75210847546604, accessName: "Pointe nautique de Châteauguay", score: 80 },
    { slug: "lac-saint-louis-chateauguay", name: "Lac Saint-Louis (Châteauguay)", region: "Montérégie", lat: 45.38095677197638, lon: -73.7692669525504, accessName: "Centre nautique de Châteauguay", score: 80 },
    { slug: "riviere-malbaie-hautes-gorges", name: "Rivière Malbaie (Hautes-Gorges)", region: "Charlevoix", lat: 47.8927742855333, lon: -70.47639862807804, accessName: "Parc national des Hautes-Gorges-de-la-Rivière-Malbaie", score: 86 },
    { slug: "lac-trois-lacs", name: "Lac Trois-Lacs", region: "Estrie", lat: 45.79701592892924, lon: -71.88945331364174, accessName: "Plage municipale de Val-des-Sources", score: 78 },
    { slug: "lac-brompton-racine", name: "Lac Brompton (Racine)", region: "Estrie", lat: 45.473382433570194, lon: -72.14062493448105, accessName: "Camping Plage McKenzie", score: 80 },
    { slug: "riviere-du-gouffre-baie-saint-paul", name: "Rivière du Gouffre", region: "Charlevoix", lat: 47.43170772518342, lon: -70.49178160618612, accessName: "Quai de Baie-Saint-Paul", score: 80 },
    { slug: "baie-des-rochers-charlevoix", name: "Baie-des-Rochers", region: "Charlevoix", lat: 47.953452992851034, lon: -69.81140329280224, accessName: "Parc municipal de Baie-des-Rochers", score: 84 },
    { slug: "lac-arthabaska-grands-jardins", name: "Lac Arthabaska", region: "Charlevoix", lat: 47.66183716631818, lon: -70.77873970552157, accessName: "Parc national des Grands-Jardins", score: 83 },
    { slug: "lac-raymond-val-morin", name: "Lac Raymond", region: "Laurentides", lat: 46.009136770288805, lon: -74.16941338584282, accessName: "Plage municipale du Lac Raymond", score: 80 },
    { slug: "riviere-du-nord-val-david", name: "Rivière du Nord (Val-David)", region: "Laurentides", lat: 46.02572166074477, lon: -74.21344151982926, accessName: "À l'Abordage", score: 81 },
    { slug: "lac-lyster", name: "Lac Lyster", region: "Estrie", lat: 45.03377319819917, lon: -71.91883050400364, accessName: "Plage du lac Lyster", score: 80 },
    { slug: "lac-31-milles-sainte-therese", name: "Lac des Trente et Un Milles", region: "Outaouais", lat: 46.29687390470017, lon: -75.80001853448552, accessName: "Secteur Sainte-Thérèse-de-la-Gatineau", score: 84 },
    { slug: "quai-kamouraska", name: "Kamouraska", region: "Bas-Saint-Laurent", lat: 47.56252208364726, lon: -69.87411031976998, accessName: "Quai de Kamouraska", score: 82 },
    { slug: "riviere-jacques-cartier-parc-national", name: "Rivière Jacques-Cartier (Parc national)", region: "Québec", lat: 47.17442453834519, lon: -71.36829576336933, accessName: "Parc national de la Jacques-Cartier", score: 87 },
    { slug: "riviere-batiscan-sainte-genevieve", name: "Rivière Batiscan (Sainte-Geneviève)", region: "Mauricie", lat: 46.52819240725861, lon: -72.33872004246305, accessName: "Halte Desjardins", score: 79 },
    { slug: "fleuve-trois-rivieres-antoine-gauthier", name: "Fleuve à Trois-Rivières (Parc Antoine-Gauthier)", region: "Mauricie", lat: 46.28023990822192, lon: -72.65812546866448, accessName: "Parc Antoine-Gauthier", score: 77 },
    { slug: "lac-clair-grandes-piles", name: "Lac Clair (Grandes-Piles)", region: "Mauricie", lat: 46.759828377610134, lon: -72.71054862611861, accessName: "Aire Nature Grandes-Piles", score: 82 },
    { slug: "lac-sainte-emelie", name: "Lac Sainte-Émélie", region: "Lanaudière", lat: 46.32564521127613, lon: -73.64207236742668, accessName: "Plage municipale de Sainte-Émélie-de-l'Énergie", score: 80 },
    { slug: "lac-trois-saumons", name: "Lac Trois-Saumons", region: "Chaudière-Appalaches", lat: 47.12111244585895, lon: -70.19077482737445, accessName: "Parc municipal du lac Trois-Saumons", score: 81 },
    { slug: "lac-masson-plage-municipale", name: "Lac Masson (Plage municipale)", region: "Laurentides", lat: 46.03409660740623, lon: -74.03833768126533, accessName: "Plage municipale du Lac Masson", score: 81 },
    { slug: "lac-matapedia-sayabec", name: "Lac Matapédia (Sayabec)", region: "Bas-Saint-Laurent", lat: 48.56632933392173, lon: -67.66329127863952, accessName: "Parc Pierre-Brochu", score: 82 },
    { slug: "lac-saint-jean-saint-prime", name: "Lac Saint-Jean (Saint-Prime)", region: "Saguenay-Lac-Saint-Jean", lat: 48.60054103706304, lon: -72.32507726060467, accessName: "Plage municipale de Saint-Prime", score: 83 },
    { slug: "lac-saint-jean-roberval", name: "Lac Saint-Jean (Roberval)", region: "Saguenay-Lac-Saint-Jean", lat: 48.533296015177186, lon: -72.2186771128563, accessName: "Plage de la Pointe-Scott", score: 83 },
    { slug: "rimouski-rocher-blanc", name: "Rimouski (Rocher-Blanc)", region: "Bas-Saint-Laurent", lat: 48.43355849755616, lon: -68.59287749732535, accessName: "Plage du Rocher-Blanc", score: 79 },
    { slug: "lac-boivin-granby", name: "Lac Boivin", region: "Estrie", lat: 45.400375338658016, lon: -72.70787023663209, accessName: "Parc Daniel-Johnson", score: 80 }
];

const laVieSupPopularSpotDetails = laVieSupPopularSpotSeeds.map(seed => {
    const matapediaGallery = [
        "assets/spots/lac-matapedia-baie-de-charlie/rive-boisee.jpg",
        "assets/spots/lac-matapedia-baie-de-charlie/vue-depuis-la-planche.jpeg",
        "assets/spots/lac-matapedia-baie-de-charlie/panorama-baie.jpg"
    ];
    const batiscanGallery = [
        "assets/spots/riviere-batiscan-sainte-genevieve/vue-riviere.jpg",
        "assets/spots/riviere-batiscan-sainte-genevieve/vue-pont.jpg",
        "assets/spots/riviere-batiscan-sainte-genevieve/rampe-vers-riviere.jpg",
        "assets/spots/riviere-batiscan-sainte-genevieve/rampe-vers-village.jpg"
    ];
    const generatedLakeImages = {
        "lac-lyster": "assets/spots/lac-lyster.jpg",
        "lac-raymond-val-morin": "assets/spots/lac-raymond-val-morin.jpg"
    };
    const gallery = seed.slug === "lac-matapedia-sayabec"
        ? matapediaGallery
        : seed.slug === "riviere-batiscan-sainte-genevieve"
            ? batiscanGallery
            : [generatedLakeImages[seed.slug] || "assets/spots/lac-lyster.jpg"];
    return {
        id: seed.slug,
        slug: seed.slug,
        name: seed.name,
        region: seed.region,
        lat: seed.lat,
        lon: seed.lon,
        mainImage: gallery[0],
        gallery,
        description: `${seed.name} est une destination de paddle accessible par ${seed.accessName}.`,
        longDescription: `Le point de départ de ${seed.name} se situe à ${seed.accessName}. Vérifiez les frais, les services, les heures d'ouverture et les restrictions saisonnières auprès du gestionnaire avant chaque sortie.`,
        difficulty: "facile",
        paddleScore: seed.score,
        scoreFactors: { wind: 7, rain: 7, temperature: 8, waves: 7 },
        isFree: false,
        cost: "Tarif et droits d'accès à vérifier",
        waterQuality: "À vérifier localement",
        maxLength: "Parcours variable",
        season: "Mai à septembre",
        parking: { location: seed.accessName, spots: "Capacité à vérifier", accessible: true, cost: "À vérifier" },
        access: { description: seed.accessName, type: "Accès nautique", difficulty: "Consulter les conditions locales", launchPoint: seed.accessName },
        amenities: ["Accès à l'eau indiqué", "Services et capacité du stationnement à vérifier", "Consultez la météo avant le départ"],
        warnings: ["Vérifiez les frais et les restrictions saisonnières auprès du gestionnaire", "Les conditions locales peuvent changer après la capture du HAR"],
        faq: [
            { q: "Où se trouve le point de départ ?", a: `Le départ indiqué se trouve à ${seed.accessName}. Utilisez le bouton d'itinéraire pour rejoindre l'accès routier.` },
            { q: "Puis-je apporter mon propre paddle ?", a: "Vérifiez les règles du gestionnaire, les frais, les permis et les restrictions avant le déplacement." }
        ],
        highlights: ["Destination de paddle au Québec", "Accès à l'eau indiqué", "Conditions locales à vérifier"]
    };
});

[...supplementalSpotDetails, ...laVieSupPopularSpotDetails].forEach(spot => {
    if (!lacDatabase.some(lac => lac.name === spot.name || lac.slug === spot.slug)) {
        lacDatabase.push(spot);
    }
});

// Les photos principales réutilisées sont remplacées par une variante locale
// propre au spot. La carte, les listes et la fiche détaillée lisent ainsi le
// même fichier sans afficher exactement la même photo pour plusieurs lieux.
const mainImageUsage = lacDatabase.reduce((usage, lake) => {
    const image = lake.mainImage || "(aucune)";
    usage[image] = (usage[image] || 0) + 1;
    return usage;
}, {});

lacDatabase.forEach(lake => {
    const originalImage = lake.mainImage || "(aucune)";
    if (mainImageUsage[originalImage] <= 1) return;

    const uniqueImage = `assets/spots/unique/${lake.slug}.jpg`;
    lake.mainImage = uniqueImage;
    lake.gallery = [
        uniqueImage,
        ...(Array.isArray(lake.gallery)
            ? lake.gallery.filter(image => image && image !== originalImage && image !== uniqueImage)
            : [])
    ];
});

// Une photo secondaire ne doit pas être partagée entre plusieurs spots.
// La première fiche qui la référence la conserve; les suivantes gardent leur
// image principale unique et leurs autres photos propres.
const galleryImageOwners = new Map();
lacDatabase.forEach(lake => {
    if (lake.mainImage) galleryImageOwners.set(lake.mainImage, lake.slug);
});
lacDatabase.forEach(lake => {
    lake.gallery = (Array.isArray(lake.gallery) ? lake.gallery : [lake.mainImage])
        .filter(image => {
            if (!image || image === lake.mainImage) return Boolean(image);
            const owner = galleryImageOwners.get(image);
            if (owner && owner !== lake.slug) return false;
            galleryImageOwners.set(image, lake.slug);
            return true;
        });
});

const accessPointOverrides = {
    "lac-mercier": { lat: 46.193499, lon: -74.631738, name: "Mise à l'eau à gauche du quai du lac Mercier", type: "Quai / mise à l'eau manuelle", confidence: "high", source: "Coordonnées et indication confirmées par une personne contributrice le 3 août 2026" },
    "riviere-macaza": { lat: 46.398759536928964, lon: -74.72960327747677, name: "Accès à l’eau de la rivière Macaza", type: "Accès riverain / mise à l’eau manuelle", confidence: "high", source: "Coordonnées fournies par la personne contributrice; mise à l’eau répertoriée sur la carte Rivière Macaza de Canot Kayak Québec (publication 2022)" },
    "lac-saint-joseph-plage-gratton": { lat: 45.972370018135365, lon: -74.33935648574739, name: "Plage Gratton", type: "Plage / accès à l'eau", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "lac-rond-plage-jean-guy-caron": { lat: 45.94967058887019, lon: -74.14095805832862, name: "Plage Jean-Guy-Caron", type: "Plage / accès à l'eau", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "lac-du-mont-habitant-plage": { lat: 45.88072798572343, lon: -74.17963580639703, name: "Plage du lac du Mont Habitant", type: "Plage / accès à l'eau", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "lac-des-seize-iles-debarcadere": { lat: 45.9231495841278, lon: -74.46794202259929, name: "Débarcadère municipal du lac des Seize-Îles", type: "Débarcadère municipal", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "riviere-cascapedia": { lat: 48.25311727909155, lon: -65.90292651939353, name: "Accès à l'eau de la rivière Cascapédia", type: "Accès riverain / mise à l'eau manuelle", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "lac-lyster": { lat: 45.03377319819917, lon: -71.91883050400364, name: "Plage du lac Lyster", type: "Plage / mise à l'eau manuelle", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "plage-berthier-sur-mer": { lat: 46.934895957447615, lon: -70.7167548313723, name: "Accès à l'eau de Berthier-sur-Mer", type: "Plage / mise à l'eau manuelle", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "lac-matapedia-baie-de-charlie": { lat: 48.5868597, lon: -67.6347988, name: "Plage du parc de la Baie-de-Charlie", type: "Plage / mise à l'eau manuelle", confidence: "high", source: "Lien Google Maps fourni par l'utilisateur: https://maps.app.goo.gl/m9NBpw64FCsYtrog8; site confirmé par la Municipalité de Sayabec" },
    "baie-de-shawinigan-parc-de-la-baie": { lat: 46.5285141, lon: -72.7815819, name: "Mise à l'eau du Parc de la Baie", type: "Mise à l'eau en gravier", confidence: "high", hideSource: true },
    "lac-a-la-tortue": { lat: 46.6104797, lon: -72.6269128, name: "Plage du parc municipal du Lac à la Tortue", type: "Plage", confidence: "high", source: "OpenStreetMap natural=beach way 487542775" },
    "plage-maria-goretti": { lat: 46.0474285, lon: -73.440816, name: "Plage Maria-Goretti", type: "Plage / mise à l'eau pour embarcations légères", confidence: "high", source: "Lien Google Maps fourni par l'utilisateur: https://maps.app.goo.gl/Ve4Qvbn6Etcqvakk8" },
    "lac-sacacomie": { lat: 46.5274337, lon: -73.2032333, name: "Mise à l'eau du lac Sacacomie", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "riviere-st-maurice": { lat: 46.35126835324924, lon: -72.52643053695992,  name: "Mise à l'eau de l'Île Saint-Quentin / Avenue des Draveurs", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-saint-pierre": { lat: 46.2245511, lon: -72.9223353, name: "Rampe de mise à l'eau près du Domaine du Lac Saint-Pierre", type: "Rampe de mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "parc-national-wapizagonke": { lat: 46.6697644, lon: -73.0057686, name: "Mise à l'eau du secteur Wapizagonke", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-taureau": { lat: 46.6890634, lon: -73.9001922, name: "Descente de bateaux du Réservoir Taureau", type: "Rampe de mise à l'eau", confidence: "high", hideSource: true },
    "lac-tremblant": { lat: 46.20843802180653, lon: -74.59551156749815, name: "Plage du lac Tremblant", type: "Plage / accès à l'eau", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "lac-maskinonge": { lat: 46.3023266, lon: -73.3889688, name: "Accès public Saint-Gabriel", type: "Mise à l'eau manuelle", confidence: "high", source: "Canot Kayak Québec, Carte interactive: accès public Saint-Gabriel, qualité B, validé" },
    "lac-des-piles": { lat: 46.6649705864116, lon: -72.789898034606, name: "Plage du Camping Baie Martin", type: "Plage de camping", confidence: "high", source: "Accès de la plage Baie Martin validé; activités recoupées avec Tourisme Shawinigan" },
    "lac-du-diable-laurentides": { lat: 46.488844424555495, lon: -74.17198999349367, name: "Accès à l'eau du Lac Forbes", type: "Accès nautique", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "lac-des-iles-quebec": { lat: 46.408652633180225, lon: -75.5163500723817, name: "Quai public de la Baie Poulin", type: "Quai public", confidence: "high", source: "Coordonnées confirmées par l'utilisateur via capture satellite: quai public à la Baie Poulin" },
    "marais-de-l-ile-madame": { lat: 45.268449928380484, lon: -72.04829719674834, name: "Accès à l'eau du Parc Monseigneur-Vel", type: "Parc / accès riverain", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "petit-lac-magog-plage-municipale": { lat: 45.33441207629638, lon: -72.02343277469295, name: "Accès à l'eau du Parc de la Plage-Municipale", type: "Parc municipal / plage", confidence: "high", source: "Coordonnées confirmées par l'utilisateur; parc recoupé avec OpenStreetMap relation 3662202" },
    "lac-aux-sables": { lat: 46.8674872, lon: -72.3865210, name: "Mise à l'eau de la Ville de Lac-aux-Sables", type: "Mise à l'eau", confidence: "high", source: "Canot Kayak Québec, Carte interactive: accès public; recoupé avec La Vie SUP, Lac-aux-Sables B / débarcadère municipal (écart 16 m)" },
    "lac-stukely-mont-orford": { lat: 45.363417803831844, lon: -72.23536491401258, name: "Plage du lac Stukely", type: "Plage / accès à l'eau", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "lac-memphremagog-magog": { lat: 45.2672900360233, lon: -72.15984658219729, name: "Accès à l'eau du lac Memphrémagog à Magog", type: "Accès à l'eau", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "lac-saint-jean-alma": { lat: 48.4796193, lon: -71.7934448, name: "Marina St-Gédéon", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "fjord-du-saguenay-l-anse": { lat: 48.2444772, lon: -70.1794917, name: "Quai / mise à l'eau de L'Anse-Saint-Jean", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway name=Anse-Saint-Jean" },
    "riviere-bonaventure": { lat: 48.058761, lon: -65.51748, name: "Plage de la Piouke / accès Bonaventure", type: "Plage", confidence: "high", source: "OpenStreetMap natural=beach; recoupé avec La Vie SUP, Baie-des-Chaleurs (Bonaventure A) / Plage de la Piouke (écart 37 m)" },
    "iles-de-boucherville": { lat: 45.611956, lon: -73.4568017, name: "Mise à l'eau du parc national des Îles-de-Boucherville", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "canal-de-lachine": { lat: 45.4789452, lon: -73.5740394, name: "Centre Nautique du Canal", type: "Marina", confidence: "high", source: "OpenStreetMap leisure=marina" },
    "lac-aylmer-stratford": { lat: 45.8064658, lon: -71.3258953, name: "Mise à l'eau Lac Aylmer, secteur Stratford", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-brome": { lat: 45.2564916, lon: -72.4953189, name: "Mise à l'eau du Lac Brome", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "riviere-chicoutimi": { lat: 48.4303002, lon: -71.0517127, name: "Marina Saguenay / mise à l'eau", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-leamy-gatineau": { lat: 45.4319796, lon: -75.7070505, name: "Mise à l'eau du Lac Leamy", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-meech-gatineau": { lat: 45.53778005904513, lon: -75.89963841809043, name: "Lac Meech — stationnement P12", type: "Accès nautique", confidence: "high", source: "HAR La Vie SUP confirmé: Lac Meech (P12) / Parc de la Gatineau" },
    "riviere-des-outaouais-chelsea": { lat: 45.4608066, lon: -75.6852272, name: "Mise à l'eau sur la rivière des Outaouais, secteur Gatineau/Chelsea", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-la-peche-outaouais": { lat: 45.6224025, lon: -76.1784341, name: "Mise à l'eau du lac la Pêche", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-philippe-outaouais": { lat: 45.6021161, lon: -76.0435501, name: "Mise à l'eau du lac Philippe", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "bassin-de-lachine-montreal": { lat: 45.4789452, lon: -73.5740394, name: "Centre Nautique du Canal", type: "Marina", confidence: "high", source: "OpenStreetMap leisure=marina name=Centre Nautique du Canal" },
    "parc-national-oka": { lat: 45.4636861, lon: -74.0426822, name: "Accès de la Grande Plage d'Oka", type: "Plage / mise à l'eau manuelle", confidence: "high", source: "Accès à l'eau de la Grande Plage validé et recoupé avec la Sépaq" },
    "reservoir-choiniere-yamaska": { lat: 45.42668294095945, lon: -72.61486447370173, name: "Plage du réservoir Choinière", type: "Plage / accès à l'eau", confidence: "high", source: "Coordonnées confirmées par l'utilisateur; accès nautique recoupé avec la Sépaq" },
    "reservoir-poisson-blanc": { lat: 46.0939877, lon: -75.6730562, name: "Accès du parc régional du Poisson-Blanc", type: "Mise à l'eau manuelle", confidence: "high", source: "Canot Kayak Québec, Carte interactive: accès public GPS, qualité B; recoupé avec le site du parc" },
    "baie-de-beauport-quebec": { lat: 46.8378694, lon: -71.1945722, name: "Accès nautique de la Baie de Beauport", type: "Plage / mise à l'eau manuelle", confidence: "high", source: "Canot Kayak Québec, Carte interactive: accès et stationnement GPS; recoupé avec SIT Québec" },
    "parc-national-plaisance": { lat: 45.5989056, lon: -75.1097501, name: "Mise à l'eau du parc national de Plaisance", type: "Mise à l'eau", confidence: "high", source: "Canot Kayak Québec, Carte interactive: accès public qualité A, validé; recoupé avec Sépaq" },
    "fleuve-saint-laurent-ile-sainte-helene": { lat: 45.50176, lon: -73.5235966, name: "Mise à l'eau du parc Jean-Drapeau / Île Sainte-Hélène", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "bassin-olympique-parc-jean-drapeau": { lat: 45.50176, lon: -73.5235966, name: "Mise à l'eau du parc Jean-Drapeau", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-beauport": { lat: 46.954839, lon: -71.2702358, name: "Club nautique du Lac-Beauport", type: "Accès nautique confirmé par le HAR", confidence: "high", source: "HAR La Vie SUP confirmé: Lac-Beauport / Club nautique du Lac-Beauport" },
    "lac-kenogami": { lat: 48.33177878849501, lon: -71.43463046043273, name: "Centre touristique du Lac-Kénogami", type: "Accès nautique confirmé par le HAR", confidence: "high", source: "HAR La Vie SUP confirmé: Lac-Kénogami / Centre touristique du Lac-Kénogami (Sépaq)" },
    "riviere-ashuapmushuan": { lat: 48.65068862453191, lon: -72.44201167148547, name: "Quai de Saint-Félicien", type: "Quai", confidence: "high", source: "HAR La Vie SUP confirmé: Rivière Ashuapmushuan A (Saint-Félicien) / Quai de Saint-Félicien" },
    "lac-megantic": { lat: 45.58749460337366, lon: -70.9277716473864, name: "Plage de la Station touristique Baie-des-Sables", type: "Plage aménagée / accès à l'eau", confidence: "high", source: "Coordonnées confirmées par l'utilisateur; plage, location nautique, descente de bateaux et quais confirmés par https://baiedessables.com/plage-amenagee/" },
    "baie-de-perce": { lat: 48.517193260835136, lon: -64.21663054575258, name: "Accès à l'eau de la Baie de Percé", type: "Accès nautique côtier", confidence: "high", source: "Coordonnées confirmées par l'utilisateur" },
    "lac-du-cap-aux-os": { lat: 48.827258274795376, lon: -64.3099938078322, name: "Accès confirmé du Lac du Cap-aux-Os", type: "Accès nautique", confidence: "high", source: "Coordonnées confirmées par l'utilisateur; stationnement adjacent signalé sur la route 132" },
    "parc-national-forillon": { lat: 48.80506447087035, lon: -64.24512015509676, name: "Plage du parc national Forillon", type: "Plage / accès nautique côtier", confidence: "high", source: "Coordonnées de la plage confirmées par l'utilisateur" }
};

// Le point d'accès et le stationnement sont volontairement séparés. Les itinéraires
// visent le stationnement afin d'éviter d'envoyer un véhicule directement sur la rive.
const parkingPointOverrides = {
    "plage-maria-goretti": { lat: 46.0474285, lon: -73.440816, name: "Stationnement du parc Maria-Goretti", confidence: "high", source: "Destination confirmée par le lien Google Maps fourni par l'utilisateur", distanceToAccessMeters: 0, fee: "Gratuit" },
    "lac-mercier": { lat: 46.193499, lon: -74.631738, name: "Stationnement gratuit près du quai du lac Mercier", confidence: "high", source: "Coordonnées et gratuité confirmées par une personne contributrice le 3 août 2026", distanceToAccessMeters: 0, fee: "Gratuit" },
    "riviere-macaza": { lat: 46.39878543336365, lon: -74.73001633765895, name: "Stationnement confirmé de l’accès à la rivière Macaza", confidence: "high", source: "Emplacement du stationnement confirmé par la personne contributrice", distanceToAccessMeters: 32, fee: "À vérifier" },
    "lac-saint-joseph-plage-gratton": { lat: 45.97194980542055, lon: -74.33984292665237, name: "Stationnement de la plage Gratton", confidence: "high", source: "Coordonnées confirmées par l'utilisateur", distanceToAccessMeters: 60, fee: "Gratuit" },
    "lac-rond-plage-jean-guy-caron": { lat: 45.949804584150016, lon: -74.1404316234221, name: "Stationnement de la plage Jean-Guy-Caron", confidence: "high", source: "Coordonnées confirmées par l'utilisateur", distanceToAccessMeters: 43, fee: "Payant pour les non-résidents" },
    "lac-raymond-val-morin": { lat: 46.00936981068226, lon: -74.1695892836931, name: "Stationnement du lac Raymond", confidence: "high", source: "Coordonnées confirmées par l'utilisateur", distanceToAccessMeters: 29, fee: "À vérifier" },
    "lac-du-mont-habitant-plage": { lat: 45.881669062338574, lon: -74.17798356566827, name: "Stationnement de la plage du Mont Habitant", confidence: "high", source: "Coordonnées confirmées par l'utilisateur", distanceToAccessMeters: 165, fee: "À vérifier" },
    "lac-lyster": { lat: 45.03389830039283, lon: -71.91924892860379, name: "Stationnement de la plage du lac Lyster", confidence: "high", source: "Coordonnées confirmées par l'utilisateur", distanceToAccessMeters: 36, fee: "À vérifier" },
    "plage-berthier-sur-mer": { lat: 46.934271415738955, lon: -70.71644101291746, name: "Stationnement de l'accès à l'eau de Berthier-sur-Mer", confidence: "high", source: "Coordonnées confirmées par l'utilisateur", distanceToAccessMeters: 73, fee: "À vérifier" },
    "lac-matapedia-baie-de-charlie": { lat: 48.58805, lon: -67.63394, name: "Stationnement du parc de la Baie-de-Charlie", confidence: "high", source: "OpenStreetMap amenity=parking, way 745807742; parc et plage confirmés par la Municipalité de Sayabec", distanceToAccessMeters: 146, fee: "À vérifier" },
    "baie-de-shawinigan-parc-de-la-baie": { lat: 46.528479, lon: -72.7818462, name: "Stationnement du Parc de la Baie", confidence: "high", hideSource: true, distanceToAccessMeters: 21, fee: "Aucun frais indiqué (à confirmer sur place)" },
    "lac-sacacomie": { lat: 46.5272924, lon: -73.2028248, name: "Stationnement du quai municipal", confidence: "high", source: "OpenStreetMap parking access=yes; confirmé par Canot Kayak Québec (GPS GNSS, qualité B)", distanceToAccessMeters: 35, fee: "Payant" },
    "riviere-st-maurice": { lat: 46.35318320931242, lon: -72.52670564986391, name: "Stationnement près de la mise à l'eau", confidence: "high", source: "Stationnement GPS validé", distanceToAccessMeters: 214, fee: "À vérifier" },
    "parc-national-wapizagonke": { lat: 46.6707117, lon: -73.0046871, name: "Stationnement du secteur Wapizagonke", confidence: "high", source: "OpenStreetMap amenity=parking; secteur recoupé avec Sépaq et La Vie SUP (secteur Shewenegan)", distanceToAccessMeters: 134, fee: "Droit d'accès au parc" },
    "lac-taureau": { lat: 46.6887256, lon: -73.9000209, name: "Stationnement de la descente de bateaux du Réservoir Taureau", confidence: "high", hideSource: true, distanceToAccessMeters: 40, fee: "Gratuit" },
    "lac-tremblant": { lat: 46.20795473742718, lon: -74.59538459521232, name: "Stationnement de la plage du lac Tremblant", confidence: "high", source: "Coordonnées confirmées par l'utilisateur", distanceToAccessMeters: 55, fee: "À vérifier" },
    "lac-maskinonge": { lat: 46.3018400, lon: -73.3885970, name: "Stationnement de la plage municipale, 333 rue du Parc", confidence: "high", source: "Coordonnées fournies par l'utilisateur; stationnement public confirmé à 11 m par Canot Kayak Québec et recoupé avec OpenStreetMap", distanceToAccessMeters: 71, fee: "Gratuit" },
    "lac-des-piles": { lat: 46.6653731, lon: -72.7901009, name: "Camping Plage Baie Martin, 1801 chemin de la Baie-Martin", confidence: "high", source: "Stationnement et accès routier validés", distanceToAccessMeters: 47, fee: "Accès et tarif à confirmer auprès du camping" },
    "lac-des-iles-quebec": { lat: 46.408652633180225, lon: -75.5163500723817, name: "Destination routière du quai public de la Baie Poulin", confidence: "high", source: "Coordonnées confirmées par l'utilisateur via capture satellite: quai public routable à la Baie Poulin", distanceToAccessMeters: 0, fee: "À vérifier" },
    "marais-de-l-ile-madame": { lat: 45.26844237757551, lon: -72.04798606050721, name: "Stationnement du Parc Monseigneur-Vel", confidence: "high", source: "Coordonnées confirmées par l'utilisateur", distanceToAccessMeters: 24, fee: "À vérifier" },
    "petit-lac-magog-plage-municipale": { lat: 45.3347269549525, lon: -72.02356420293273, name: "Stationnement du Parc de la Plage-Municipale", confidence: "high", source: "Coordonnées confirmées par l'utilisateur; parc recoupé avec OpenStreetMap relation 3662202", distanceToAccessMeters: 36, fee: "À vérifier" },
    "lac-aux-sables": { lat: 46.8670340, lon: -72.3870136, name: "Stationnement de la mise à l'eau de Lac-aux-Sables", confidence: "high", source: "Canot Kayak Québec, stationnement qualité B; recoupé avec La Vie SUP, Lac-aux-Sables B / débarcadère municipal", distanceToAccessMeters: 63, fee: "Gratuit" },
    "lac-saint-pierre": { lat: 46.22080543335617, lon: -72.92372854163526, name: "Domaine du Lac Saint-Pierre", confidence: "high", source: "HAR La Vie SUP confirmé: Louiseville (Fleuve) / Domaine du Lac Saint-Pierre", distanceToAccessMeters: 430, fee: "À vérifier" },
    "parc-national-oka": { lat: 45.4646954, lon: -74.0424846, name: "Stationnement de la Grande Plage d'Oka", confidence: "high", source: "Stationnement de la plage confirmé et recoupé avec la Sépaq", distanceToAccessMeters: 113, fee: "Stationnement payant en saison; droit d'accès au parc" },
    "reservoir-choiniere-yamaska": { lat: 45.42759779530486, lon: -72.61670983347672, name: "Stationnement du parc national de la Yamaska", confidence: "high", source: "Coordonnées confirmées par l'utilisateur; stationnement recoupé avec la Sépaq", distanceToAccessMeters: 176, fee: "Stationnement gratuit; droit d'accès au parc" },
    "reservoir-poisson-blanc": { lat: 46.0951093, lon: -75.6742184, name: "Stationnement P3 du pavillon Le Bastion", confidence: "high", source: "OpenStreetMap: stationnement P3; accès voisin confirmé par Canot Kayak Québec", distanceToAccessMeters: 153, fee: "À vérifier" },
    "baie-de-beauport-quebec": { lat: 46.8378537, lon: -71.1974402, name: "Stationnement de la plage de la Baie de Beauport", confidence: "high", source: "Canot Kayak Québec, Carte interactive: GPS, qualité B, validé", distanceToAccessMeters: 221, fee: "À vérifier" },
    "parc-national-plaisance": { lat: 45.5992347, lon: -75.1094637, name: "Stationnement de l'accueil du parc national de Plaisance", confidence: "high", source: "Canot Kayak Québec, Carte interactive: stationnement public qualité A, validé", distanceToAccessMeters: 43, fee: "Stationnement gratuit; droit d'accès au parc" },
    "lac-stukely-mont-orford": { lat: 45.36292216758857, lon: -72.23522543914586, name: "Stationnement de la plage Stukely", confidence: "high", source: "Coordonnées confirmées par l'utilisateur", distanceToAccessMeters: 56, fee: "Payant / permis requis" },
    "lac-memphremagog-magog": { lat: 45.267323071458264, lon: -72.15942547538818, name: "Stationnement de l'accès au lac Memphrémagog", confidence: "high", source: "Coordonnées confirmées par l'utilisateur", distanceToAccessMeters: 33, fee: "À vérifier" },
    "fjord-du-saguenay-l-anse": { lat: 48.2439047, lon: -70.1800943, name: "Stationnement du quai de L'Anse-Saint-Jean", confidence: "high", source: "OpenStreetMap amenity=parking, access=yes, fee=yes", distanceToAccessMeters: 78, fee: "Payant" },
    "lac-saint-jean-alma": { lat: 48.4802148, lon: -71.7960512, name: "Stationnement Pointe Picard / Marina St-Gédéon", confidence: "high", source: "Canot Kayak Québec, Carte interactive: qualité B; recoupé avec OpenStreetMap", distanceToAccessMeters: 203, fee: "Payant" },
    "riviere-bonaventure": { lat: 48.0589625, lon: -65.5172142, name: "Stationnement de la Piouke", confidence: "high", source: "OpenStreetMap amenity=parking, surface asphaltée", distanceToAccessMeters: 30, fee: "À vérifier" },
    "marais-du-nord-st-charles": { lat: 46.961562, lon: -71.392812, name: "Stationnement principal du Marais du Nord", confidence: "high", source: "HAR La Vie SUP confirmé: Marais du Nord / Stoneham-et-Tewkesbury, 1100 chemin de la Grande Ligne", distanceToAccessMeters: 334, fee: "Frais d'accès au site" },
    "iles-de-boucherville": { lat: 45.6117779, lon: -73.4566016, name: "Stationnement près de la mise à l'eau", confidence: "high", source: "OpenStreetMap amenity=parking; stationnement public GPS confirmé par Canot Kayak Québec", distanceToAccessMeters: 25, fee: "Droit d'accès au parc" },
    "lac-brome": { lat: 45.2559768, lon: -72.4948600, name: "Stationnement de la mise à l'eau du lac Brome", confidence: "high", source: "OpenStreetMap amenity=parking, access=yes, fee=yes", distanceToAccessMeters: 68, fee: "Payant" },
    "riviere-chicoutimi": { lat: 48.4304405, lon: -71.0528561, name: "Stationnement de la Marina Saguenay", confidence: "medium", source: "OpenStreetMap amenity=parking", distanceToAccessMeters: 86, fee: "À vérifier" },
    "lac-leamy-gatineau": { lat: 45.4320283, lon: -75.7084310, name: "Stationnement du port de plaisance Jacques-Cartier", confidence: "high", source: "OpenStreetMap amenity=parking, fee=yes; recoupé avec Canot Kayak Québec", distanceToAccessMeters: 108, fee: "Payant" },
    "lac-la-peche-outaouais": { lat: 45.6221030, lon: -76.1779938, name: "Stationnement du lac la Pêche", confidence: "high", source: "OpenStreetMap amenity=parking, access=yes; recoupé avec Canot Kayak Québec", distanceToAccessMeters: 48, fee: "Payant" },
    "fleuve-saint-laurent-ile-sainte-helene": { lat: 45.5018993, lon: -73.5234971, name: "Stationnement P3 du parc Jean-Drapeau", confidence: "high", source: "OpenStreetMap amenity=parking, access=yes, fee=yes", distanceToAccessMeters: 17, fee: "Payant" },
    "bassin-olympique-parc-jean-drapeau": { lat: 45.5018993, lon: -73.5234971, name: "Stationnement P3 du parc Jean-Drapeau", confidence: "high", source: "OpenStreetMap amenity=parking, access=yes, fee=yes", distanceToAccessMeters: 17, fee: "Payant" },
    "lac-beauport": { lat: 46.954839, lon: -71.2702358, name: "Destination du Club nautique du Lac-Beauport", confidence: "high", source: "HAR La Vie SUP confirmé: Lac-Beauport / Club nautique du Lac-Beauport", distanceToAccessMeters: 0, fee: "À vérifier" },
    "lac-kenogami": { lat: 48.33177878849501, lon: -71.43463046043273, name: "Centre touristique du Lac-Kénogami", confidence: "high", source: "HAR La Vie SUP confirmé: Centre touristique du Lac-Kénogami (Sépaq)", distanceToAccessMeters: 0, fee: "Droit d'accès à vérifier" },
    "riviere-ashuapmushuan": { lat: 48.65068862453191, lon: -72.44201167148547, name: "Destination du quai de Saint-Félicien", confidence: "high", source: "HAR La Vie SUP confirmé: Rivière Ashuapmushuan / Quai de Saint-Félicien", distanceToAccessMeters: 0, fee: "À vérifier" },
    "canal-de-lachine": { lat: 45.47900684308633, lon: -73.57398811398144, name: "Destination Aventures H2O du canal de Lachine", confidence: "high", source: "HAR La Vie SUP confirmé: Canal Lachine A / Aventures H2O", distanceToAccessMeters: 8, fee: "À vérifier" },
    "bassin-de-lachine-montreal": { lat: 45.47900684308633, lon: -73.57398811398144, name: "Destination Aventures H2O du bassin de Lachine", confidence: "high", source: "HAR La Vie SUP confirmé: Canal Lachine A / Aventures H2O", distanceToAccessMeters: 8, fee: "À vérifier" },
    "lac-meech-gatineau": { lat: 45.53778005904513, lon: -75.89963841809043, name: "Destination du stationnement P12 du lac Meech", confidence: "high", source: "HAR La Vie SUP confirmé: Lac Meech (P12) / Parc de la Gatineau", distanceToAccessMeters: 0, fee: "À vérifier" },
    "lac-megantic": { lat: 45.58777616189573, lon: -70.92878015797264, name: "Stationnement de la Station touristique Baie-des-Sables", confidence: "high", source: "Coordonnées confirmées par l'utilisateur; services nautiques confirmés par https://baiedessables.com/plage-amenagee/", distanceToAccessMeters: 84, fee: "Tarification à vérifier" },
    "lac-du-cap-aux-os": { lat: 48.827258274795376, lon: -64.3099938078322, name: "Stationnement adjacent sur la route 132", confidence: "high", source: "Coordonnées et proximité du stationnement confirmées par l'utilisateur", fee: "À vérifier" },
    "parc-national-forillon": { lat: 48.8054277, lon: -64.2452039, name: "Stationnement du sentier du mont Saint-Alban, route 132", confidence: "high", source: "Lien Google Maps fourni par l'utilisateur: https://maps.app.goo.gl/uLaL6tZGpMKZJz2RA", distanceToAccessMeters: 41, fee: "Droits d'entrée de Parcs Canada à vérifier" }
};

laVieSupPopularSpotSeeds.forEach(seed => {
    const source = `HAR La Vie SUP confirmé: ${seed.name} / ${seed.accessName}; destination Itinéraire extraite du fichier fourni`;
    accessPointOverrides[seed.slug] ||= {
        lat: seed.lat,
        lon: seed.lon,
        name: seed.accessName,
        type: "Accès nautique confirmé par le HAR",
        confidence: "high",
        source
    };
    parkingPointOverrides[seed.slug] ||= {
        lat: seed.lat,
        lon: seed.lon,
        name: `Destination d'itinéraire — ${seed.accessName}`,
        confidence: "high",
        source: `${source}; destination GPS confirmée par le HAR`,
        distanceToAccessMeters: 0,
        fee: "À vérifier"
    };
});

function normalizeGpsPoint(point, fallback) {
    const lat = Number(point?.lat ?? fallback?.lat);
    const lon = Number(point?.lon ?? fallback?.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;

    return {
        lat,
        lon,
        name: point?.name || fallback?.parking?.location || fallback?.access?.description || fallback?.name || "Point d'accès",
        type: point?.type || fallback?.access?.type || "Point d'accès",
        confidence: point?.confidence || "needs_verification",
        source: point?.source || "Coordonnées Spot Paddle existantes",
        hideSource: Boolean(point?.hideSource),
        note: point?.note || ""
    };
}

function normalizeParkingPoint(point) {
    if (!point) return null;
    const normalized = normalizeGpsPoint({ ...point, type: "Stationnement" }, null);
    if (!normalized) return null;

    return {
        ...normalized,
        distanceToAccessMeters: Number.isFinite(Number(point.distanceToAccessMeters))
            ? Number(point.distanceToAccessMeters)
            : null,
        fee: point.fee || "À vérifier"
    };
}

function syncGpsValidationCopy(lake) {
    const accessIsValidated = lake.accessPoint?.confidence === "high";
    const parkingIsValidated = lake.parkingPoint?.confidence === "high";
    const hasParkingPoint = Boolean(lake.parkingPoint);

    if (accessIsValidated && Array.isArray(lake.amenities)) {
        lake.amenities = lake.amenities.map(item =>
            item === "Mise à l'eau à confirmer sur place"
                ? "Point de mise à l'eau GPS validé"
                : item
        );
    }

    if (Array.isArray(lake.highlights)) {
        const gpsSummary = accessIsValidated && parkingIsValidated
            ? "GPS accès et stationnement validés"
            : accessIsValidated && hasParkingPoint
                ? "GPS accès validé; stationnement probable"
                : accessIsValidated
                    ? "GPS de l'accès validé; stationnement à vérifier"
                    : parkingIsValidated
                        ? "GPS stationnement validé; accès à préciser"
                        : null;

        if (gpsSummary) {
            lake.highlights = lake.highlights.map(item =>
                item === "Point d'accès à valider avant la sortie" ? gpsSummary : item
            );
        }
    }

    if (accessIsValidated && Array.isArray(lake.faq)) {
        lake.faq = lake.faq.map(item => {
            if (item?.q !== "Le point indiqué correspond-il à une mise à l'eau officielle ?") return item;
            return {
                ...item,
                a: "Le point GPS correspond à l'accès nautique validé pour ce spot. Vérifiez toujours les règles locales et l'état du site avant le départ."
            };
        });
    }
}

lacDatabase.forEach(lac => {
    const override = accessPointOverrides[lac.slug];
    lac.accessPoint = normalizeGpsPoint(override, lac);
    lac.parkingPoint = normalizeParkingPoint(parkingPointOverrides[lac.slug]);

    if (lac.accessPoint && lac.access) {
        lac.access.coordinates = {
            lat: lac.accessPoint.lat,
            lon: lac.accessPoint.lon
        };
        lac.access.gpsConfidence = lac.accessPoint.confidence;
        lac.access.gpsSource = lac.accessPoint.source;
    }

    syncGpsValidationCopy(lac);
});

function getLakeAccessPoint(lake) {
    return normalizeGpsPoint(lake?.accessPoint, lake);
}

function getLakeParkingPoint(lake) {
    return normalizeParkingPoint(lake?.parkingPoint);
}

function getLakeWashStationPoint(lake) {
    return normalizeGpsPoint(lake?.washStationPoint, null);
}

function getLakeDirectionsPoint(lake) {
    return getLakeParkingPoint(lake) || getLakeAccessPoint(lake);
}

function getLakeDirectionsUrl(lake) {
    const point = getLakeDirectionsPoint(lake);
    if (!point) return "";
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(point.lat)},${encodeURIComponent(point.lon)}`;
}


/**
 * Calcule le Paddle Score™ en temps réel basé sur les conditions météo
 * @param {Object} weather - Données météo en temps réel
 * @param {number} baseScore - Score de base du lac
 * @returns {number} Score ajusté 0-100
 */
function calculatePaddleScore(weather, baseScore = 75) {
    let score = baseScore;
    
    // Ajustement pour le vent (impact major)
    if (weather.wind > 20) score -= 20;
    else if (weather.wind > 15) score -= 10;
    else if (weather.wind > 10) score -= 5;
    else score += 5; // Conditons idéales
    
    // Ajustement pour la pluie
    if (weather.rain > 80) score -= 15;
    else if (weather.rain > 50) score -= 5;
    
    // Ajustement pour la température
    if (weather.temp < 5) score -= 10;
    else if (weather.temp > 20 && weather.temp < 25) score += 5;
    
    // Ajustement pour les vagues (fetch du vent)
    if (weather.waves > 1.5) score -= 10;
    else if (weather.waves > 0.5) score -= 3;
    
    // Clamp entre 0 et 100
    return Math.max(0, Math.min(100, score));
}

/**
 * Obtient la couleur du Paddle Score
 * @param {number} score 0-100
 * @returns {string} Emoji et couleur
 */
function getPaddleScoreBadge(score) {
    if (score >= 80) return { emoji: "🟢", label: "Excellent", color: "#10b981" };
    if (score >= 60) return { emoji: "🟡", label: "Bon", color: "#f59e0b" };
    if (score >= 40) return { emoji: "🟠", label: "Modéré", color: "#f97316" };
    return { emoji: "🔴", label: "Mauvais", color: "#ef4444" };
}

/**
 * Calcule la distance entre deux points (Haversine)
 * @param {number} lat1, lon1, lat2, lon2
 * @returns {number} Distance en km
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

/**
 * Trouve les 2 lacs les plus proches d'une localisation
 * @param {number} userLat, userLon
 * @returns {Array} 2 lacs les plus proches avec distances
 */
function getNearestLakes(userLat, userLon) {
    const lacsWithDistance = lacDatabase.map(lac => {
        const directionsPoint = typeof getLakeDirectionsPoint === 'function'
            ? getLakeDirectionsPoint(lac)
            : { lat: lac.lat, lon: lac.lon };

        return {
            ...lac,
            distance: calculateDistance(userLat, userLon, directionsPoint.lat, directionsPoint.lon)
        };
    });
    
    return lacsWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 2);
}
