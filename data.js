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
        mainImage: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800"
        ],
        description: "Lac à la Tortue est un joyau populaire de la Mauricie, réputé pour ses eaux calmes et accessibles. Parfait pour les débutants, ce lac offre un environnement sécuritaire avec une infrastructure bien établie.",
        longDescription: "Situées en plein cœur de la Mauricie, les eaux de Lac à la Tortue offrent une expérience paddle accessible et agréable. Le lac est bien aménagé avec des plages publiques, et les conditions généralement calmes le rendent idéal pour les familles et les paddlers débutants. Attention toutefois à la zone de décollage des hydravions au centre du lac.",
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
            "Location d'équipement disponible",
            "Consignes pour paddleboard"
        ],
        warnings: [
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
                a: "Absolument ! Le parc accueille les paddlers avec leur propre matériel. Des consignes de rangement sont disponibles."
            }
        ],
        highlights: [
            "🟢 Lac idéal pour débuter",
            "🟢 Infrastructure complète",
            "🟢 Zone très accessible",
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
        mainImage: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
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
        mainImage: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
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
        mainImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
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
        mainImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800"
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
        mainImage: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
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
        mainImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800"
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
        mainImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800"
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
        mainImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
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
        mainImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&q=80&w=1200",
        "gallery": [
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
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
            { "q": "Le stationnement GPS est-il confirmé ?", "a": "Oui. Le point GPS mène au stationnement de la plage. La mise à l'eau se fait ensuite à la rampe de la Crête ou aux extrémités de la plage principale selon les consignes Sépaq." }
        ],
        "highlights": [
            "Spot très fréquenté près de Montréal",
            "Location nautique sur place",
            "Plage et services complets",
            "GPS du stationnement confirmé"
        ]
    },
    {
        "id": "reservoir-choiniere-yamaska",
        "slug": "reservoir-choiniere-yamaska",
        "name": "Réservoir Choinière (Yamaska)",
        "region": "Estrie",
        "lat": 45.42747602604209,
        "lon": -72.61460047840362,
        "mainImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
        "gallery": [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200",
        "gallery": [
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
        "gallery": [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200",
        "gallery": [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
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
        "id": "lac-tremblant",
        "slug": "lac-tremblant",
        "name": "Lac Tremblant",
        "region": "Laurentides",
        "lat": 46.1402,
        "lon": -74.6172,
        "mainImage": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
        ],
        "description": "Lac Tremblant est un spot de paddle de la région Laurentides. Naviguez sur un magnifique lac au pied de la célèbre montagne de ski. Paysage somptueux.",
        "longDescription": "Lac Tremblant est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Laurentides. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Naviguez sur un magnifique lac au pied de la célèbre montagne de ski. Paysage somptueux.",
        "difficulty": "facile",
        "paddleScore": 76,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Accès payant (frais journaliers pour non-résidents).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement au village piétonnier de Tremblant.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Accès payant (frais journaliers pour non-résidents)."
        },
        "access": {
            "description": "Stationnement au village piétonnier de Tremblant.",
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
                "a": "La fiche indique: Accès payant (frais journaliers pour non-résidents)."
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
        "id": "riviere-rouge-labelle",
        "slug": "riviere-rouge-labelle",
        "name": "Rivière Rouge (Labelle)",
        "region": "Laurentides",
        "lat": 46.2762,
        "lon": -74.7298,
        "mainImage": "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800"
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
        "lat": 45.36231,
        "lon": -72.23190,
        "mainImage": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800"
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
        "lat": 45.2648,
        "lon": -72.1535,
        "mainImage": "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&q=80&w=800"
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
        "id": "fjord-du-saguenay-l-anse",
        "slug": "fjord-du-saguenay-l-anse",
        "name": "Fjord du Saguenay (L'Anse)",
        "region": "Saguenay-Lac-Saint-Jean",
        "lat": 48.245,
        "lon": -70.2815,
        "mainImage": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1439853949127-fa647821ebb0?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1439853949127-fa647821ebb0?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800"
        ],
        "description": "Parc National Forillon est un spot de paddle de la région Gaspésie. Naviguez dans une baie magnifique avec possibilité d'observer des phoques et baleines au loin.",
        "longDescription": "Parc National Forillon est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Gaspésie. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Naviguez dans une baie magnifique avec possibilité d'observer des phoques et baleines au loin.",
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
            "location": "Stationnement au Havre de Grande-Grave.",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "Tarification d'entrée de Parc Canada applicable."
        },
        "access": {
            "description": "Stationnement au Havre de Grande-Grave.",
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
                "a": "La fiche indique: Tarification d'entrée de Parc Canada applicable."
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
        "id": "lac-beauport",
        "slug": "lac-beauport",
        "name": "Lac Beauport",
        "region": "Québec",
        "lat": 46.9435,
        "lon": -71.2935,
        "mainImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1513829096960-ef048298497a?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1513829096960-ef048298497a?auto=format&fit=crop&q=80&w=800"
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
        "id": "lac-tremblant-nord",
        "slug": "lac-tremblant-nord",
        "name": "Lac Tremblant Nord",
        "region": "Laurentides",
        "lat": 46.1535,
        "lon": -74.6438,
        "mainImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
        ],
        "description": "Lac Tremblant Nord est un spot de paddle de la région Laurentides. Extension nord du lac Tremblant, moins fréquentée mais tout aussi magnifique.",
        "longDescription": "Lac Tremblant Nord est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Laurentides. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Extension nord du lac Tremblant, moins fréquentée mais tout aussi magnifique.",
        "difficulty": "facile",
        "paddleScore": 76,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Accès payant (frais journaliers).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement au complexe touristique de Tremblant.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Accès payant (frais journaliers)."
        },
        "access": {
            "description": "Stationnement au complexe touristique de Tremblant.",
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
                "a": "La fiche indique: Accès payant (frais journaliers)."
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
        "id": "riviere-des-outaouais-arundel",
        "slug": "riviere-des-outaouais-arundel",
        "name": "Rivière des Outaouais (Arundel)",
        "region": "Laurentides",
        "lat": 46.0795,
        "lon": -74.9218,
        "mainImage": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800"
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
        "name": "Lac du Diable (Laurentides)",
        "region": "Laurentides",
        "lat": 46.2295,
        "lon": -74.5568,
        "mainImage": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
        ],
        "description": "Lac du Diable (Laurentides) est un spot de paddle de la région Laurentides. Eau cristalline et faible fréquentation. Parfait pour les kayakistes qui cherchent la tranquillité.",
        "longDescription": "Lac du Diable (Laurentides) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Laurentides. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Eau cristalline et faible fréquentation. Parfait pour les kayakistes qui cherchent la tranquillité.",
        "difficulty": "sportif",
        "paddleScore": 66,
        "scoreFactors": {
            "wind": 6,
            "rain": 7,
            "temperature": 7,
            "waves": 6
        },
        "isFree": false,
        "cost": "Forfait journalier (environ 10$).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement de la base de plein air.",
            "spots": "À vérifier",
            "accessible": false,
            "cost": "Forfait journalier (environ 10$)."
        },
        "access": {
            "description": "Stationnement de la base de plein air.",
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
                "a": "La fiche indique: Forfait journalier (environ 10$)."
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
        "id": "lac-megantic",
        "slug": "lac-megantic",
        "name": "Lac Mégantic",
        "region": "Estrie",
        "lat": 45.51767,
        "lon": -70.8795,
        "mainImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
        ],
        "description": "Lac Mégantic est un spot de paddle de la région Estrie. Grand lac pittoresque avec petites îles. Secteur très sécuritaire pour débuter.",
        "longDescription": "Lac Mégantic est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Estrie. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Grand lac pittoresque avec petites îles. Secteur très sécuritaire pour débuter.",
        "difficulty": "facile",
        "paddleScore": 82,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "Accès gratuit (rampe de mise à l'eau).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Grand plan d'eau",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement municipal à Mégantic.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Stationnement municipal à Mégantic.",
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
        "id": "lac-aylmer-stratford",
        "slug": "lac-aylmer-stratford",
        "name": "Lac Aylmer (Stratford)",
        "region": "Estrie",
        "lat": 45.80647,
        "lon": -71.32590,
        "mainImage": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
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
        "lat": 48.7525,
        "lon": -64.2135,
        "mainImage": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800"
        ],
        "description": "Baie de Percé est un spot de paddle de la région Gaspésie. Baie abritée avec vue sur le rocher Percé. Observation de phoques possible.",
        "longDescription": "Baie de Percé est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Gaspésie. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Baie abritée avec vue sur le rocher Percé. Observation de phoques possible.",
        "difficulty": "facile",
        "paddleScore": 78,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": true,
        "cost": "À proximité du fameux rocher percé (gratuit).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement en centre-ville de Percé.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Stationnement en centre-ville de Percé.",
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
        "id": "lac-du-cap-aux-os",
        "slug": "lac-du-cap-aux-os",
        "name": "Lac du Cap-aux-Os",
        "region": "Gaspésie",
        "lat": 48.3795,
        "lon": -64.8905,
        "mainImage": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800"
        ],
        "description": "Lac du Cap-aux-Os est un spot de paddle de la région Gaspésie. Petit lac côtier avec faible fréquentation, eau froide mais cristalline.",
        "longDescription": "Lac du Cap-aux-Os est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Gaspésie. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Petit lac côtier avec faible fréquentation, eau froide mais cristalline.",
        "difficulty": "facile",
        "paddleScore": 76,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Environ 5$ pour le stationnement.",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement municipal (stationnement payant en été).",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Environ 5$ pour le stationnement."
        },
        "access": {
            "description": "Stationnement municipal (stationnement payant en été).",
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
                "a": "La fiche indique: Environ 5$ pour le stationnement."
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
        "id": "riviere-cascapedia",
        "slug": "riviere-cascapedia",
        "name": "Rivière Cascapédia",
        "region": "Gaspésie",
        "lat": 48.26484,
        "lon": -65.90311,
        "mainImage": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800"
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
        "id": "lac-des-iles-quebec",
        "slug": "lac-des-iles-quebec",
        "name": "Lac des Îles (Québec)",
        "region": "Québec",
        "lat": 46.8865,
        "lon": -71.3105,
        "mainImage": "https://images.unsplash.com/photo-1470070459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1470070459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
        ],
        "description": "Lac des Îles (Québec) est un spot de paddle de la région Québec. Petit lac urbain avec îles, parfait pour sortie courte depuis Québec.",
        "longDescription": "Lac des Îles (Québec) est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Québec. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Petit lac urbain avec îles, parfait pour sortie courte depuis Québec.",
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
            "location": "Stationnement gratuit  à proximité du lac.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Gratuit"
        },
        "access": {
            "description": "Stationnement gratuit  à proximité du lac.",
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
        "id": "marais-de-l-ile-madame",
        "slug": "marais-de-l-ile-madame",
        "name": "Marais de l'Île-Madame",
        "region": "Québec",
        "lat": 46.9465,
        "lon": -71.2665,
        "mainImage": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
        ],
        "description": "Marais de l'Île-Madame est un spot de paddle de la région Québec. Marais protégé avec une biodiversité exceptionnelle, observation d'oiseaux.",
        "longDescription": "Marais de l'Île-Madame est référencé dans Spot Paddle comme point d'accès pour partir sur l'eau dans la région Québec. Les informations de stationnement et de tarif proviennent de la fiche de carte actuelle. Avant la sortie, validez les règles locales, la météo, le vent et l'accès exact sur place. Marais protégé avec une biodiversité exceptionnelle, observation d'oiseaux.",
        "difficulty": "facile",
        "paddleScore": 80,
        "scoreFactors": {
            "wind": 8,
            "rain": 7,
            "temperature": 8,
            "waves": 8
        },
        "isFree": false,
        "cost": "Frais d'accès minimaux (environ 3$).",
        "waterQuality": "À vérifier localement",
        "maxLength": "Circuit local",
        "season": "Mai à septembre",
        "parking": {
            "location": "Stationnement du site de conservation.",
            "spots": "À vérifier",
            "accessible": true,
            "cost": "Frais d'accès minimaux (environ 3$)."
        },
        "access": {
            "description": "Stationnement du site de conservation.",
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
                "a": "La fiche indique: Frais d'accès minimaux (environ 3$)."
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
        "id": "riviere-sainte-anne-quebec",
        "slug": "riviere-sainte-anne-quebec",
        "name": "Rivière Sainte-Anne (Québec)",
        "region": "Québec",
        "lat": 46.9495,
        "lon": -71.0865,
        "mainImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1513829096960-ef048298497a?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1513829096960-ef048298497a?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800"
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
        "mainImage": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800"
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

supplementalSpotDetails.forEach(spot => {
    if (!lacDatabase.some(lac => lac.name === spot.name || lac.slug === spot.slug)) {
        lacDatabase.push(spot);
    }
});

const accessPointOverrides = {
    "baie-de-shawinigan-parc-de-la-baie": { lat: 46.5285141, lon: -72.7815819, name: "Mise à l'eau du Parc de la Baie", type: "Mise à l'eau en gravier", confidence: "high", hideSource: true },
    "lac-a-la-tortue": { lat: 46.6104797, lon: -72.6269128, name: "Plage du parc municipal du Lac à la Tortue", type: "Plage", confidence: "high", source: "OpenStreetMap natural=beach way 487542775" },
    "lac-sacacomie": { lat: 46.5274337, lon: -73.2032333, name: "Mise à l'eau du lac Sacacomie", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "riviere-st-maurice": { lat: 46.35126835324924, lon: -72.52643053695992,  name: "Mise à l'eau de l'Île Saint-Quentin / Avenue des Draveurs", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-saint-pierre": { lat: 46.2245511, lon: -72.9223353, name: "Rampe de mise à l'eau près du Domaine du Lac Saint-Pierre", type: "Rampe de mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "parc-national-wapizagonke": { lat: 46.6697644, lon: -73.0057686, name: "Mise à l'eau du secteur Wapizagonke", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-taureau": { lat: 46.6890634, lon: -73.9001922, name: "Descente de bateaux du Réservoir Taureau", type: "Rampe de mise à l'eau", confidence: "high", hideSource: true },
    "lac-maskinonge": { lat: 46.3023266, lon: -73.3889688, name: "Accès public Saint-Gabriel", type: "Mise à l'eau manuelle", confidence: "high", source: "Canot Kayak Québec, Carte interactive: accès public Saint-Gabriel, qualité B, validé" },
    "lac-des-piles": { lat: 46.6649705864116, lon: -72.789898034606, name: "Plage du Camping Baie Martin", type: "Plage de camping", confidence: "high", source: "Accès de la plage Baie Martin validé; activités recoupées avec Tourisme Shawinigan" },
    "lac-aux-sables": { lat: 46.8674872, lon: -72.3865210, name: "Mise à l'eau de la Ville de Lac-aux-Sables", type: "Mise à l'eau", confidence: "medium", source: "Canot Kayak Québec, Carte interactive: accès public; stationnement voisin à confirmer sur place" },
    "lac-stukely-mont-orford": { lat: 45.3631631, lon: -72.2331165, name: "Accès Orford au lac Stukely", type: "Mise à l'eau", confidence: "high", source: "Canot Kayak Québec, Carte interactive: accès public GPS, qualité B; recoupé avec OpenStreetMap" },
    "lac-memphremagog-magog": { lat: 45.264195, lon: -72.15304, name: "Rampe publique près de la baie de Magog", type: "Rampe de mise à l'eau", confidence: "medium", source: "OpenStreetMap leisure=slipway" },
    "lac-saint-jean-alma": { lat: 48.4796193, lon: -71.7934448, name: "Marina St-Gédéon", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "fjord-du-saguenay-l-anse": { lat: 48.2444772, lon: -70.1794917, name: "Quai / mise à l'eau de L'Anse-Saint-Jean", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway name=Anse-Saint-Jean" },
    "riviere-bonaventure": { lat: 48.058761, lon: -65.51748, name: "Plage de la Piouke / accès Bonaventure", type: "Plage", confidence: "medium", source: "OpenStreetMap natural=beach" },
    "iles-de-boucherville": { lat: 45.611956, lon: -73.4568017, name: "Mise à l'eau du parc national des Îles-de-Boucherville", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "canal-de-lachine": { lat: 45.4789452, lon: -73.5740394, name: "Centre Nautique du Canal", type: "Marina", confidence: "high", source: "OpenStreetMap leisure=marina" },
    "lac-aylmer-stratford": { lat: 45.8064658, lon: -71.3258953, name: "Mise à l'eau Lac Aylmer, secteur Stratford", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-brome": { lat: 45.2564916, lon: -72.4953189, name: "Mise à l'eau du Lac Brome", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "riviere-chicoutimi": { lat: 48.4303002, lon: -71.0517127, name: "Marina Saguenay / mise à l'eau", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-leamy-gatineau": { lat: 45.4319796, lon: -75.7070505, name: "Mise à l'eau du Lac Leamy", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-meech-gatineau": { lat: 45.5269139, lon: -75.8686212, name: "Plage O'Brien / stationnement P11", type: "Plage", confidence: "medium", source: "OpenStreetMap natural=beach name=O'Brien Beach" },
    "riviere-des-outaouais-chelsea": { lat: 45.4608066, lon: -75.6852272, name: "Mise à l'eau sur la rivière des Outaouais, secteur Gatineau/Chelsea", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-la-peche-outaouais": { lat: 45.6224025, lon: -76.1784341, name: "Mise à l'eau du lac la Pêche", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "lac-philippe-outaouais": { lat: 45.6021161, lon: -76.0435501, name: "Mise à l'eau du lac Philippe", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "bassin-de-lachine-montreal": { lat: 45.4789452, lon: -73.5740394, name: "Centre Nautique du Canal", type: "Marina", confidence: "high", source: "OpenStreetMap leisure=marina name=Centre Nautique du Canal" },
    "parc-national-oka": { lat: 45.4636861, lon: -74.0426822, name: "Accès de la Grande Plage d'Oka", type: "Plage / mise à l'eau manuelle", confidence: "medium", source: "Canot Kayak Québec, Carte interactive: accès public Plage Oka; recoupé avec Sépaq" },
    "reservoir-choiniere-yamaska": { lat: 45.42803795286092, lon: -72.61468546146959, name: "Accès du parc national de la Yamaska", type: "Mise à l'eau manuelle", confidence: "high", source: "Accès nautique validé et recoupé avec la Sépaq" },
    "reservoir-poisson-blanc": { lat: 46.0939877, lon: -75.6730562, name: "Accès du parc régional du Poisson-Blanc", type: "Mise à l'eau manuelle", confidence: "high", source: "Canot Kayak Québec, Carte interactive: accès public GPS, qualité B; recoupé avec le site du parc" },
    "baie-de-beauport-quebec": { lat: 46.8378694, lon: -71.1945722, name: "Accès nautique de la Baie de Beauport", type: "Plage / mise à l'eau manuelle", confidence: "high", source: "Canot Kayak Québec, Carte interactive: accès et stationnement GPS; recoupé avec SIT Québec" },
    "parc-national-plaisance": { lat: 45.5989056, lon: -75.1097501, name: "Mise à l'eau du parc national de Plaisance", type: "Mise à l'eau", confidence: "high", source: "Canot Kayak Québec, Carte interactive: accès public qualité A, validé; recoupé avec Sépaq" },
    "fleuve-saint-laurent-ile-sainte-helene": { lat: 45.50176, lon: -73.5235966, name: "Mise à l'eau du parc Jean-Drapeau / Île Sainte-Hélène", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" },
    "bassin-olympique-parc-jean-drapeau": { lat: 45.50176, lon: -73.5235966, name: "Mise à l'eau du parc Jean-Drapeau", type: "Mise à l'eau", confidence: "high", source: "OpenStreetMap leisure=slipway" }
};

// Le point d'accès et le stationnement sont volontairement séparés. Les itinéraires
// visent le stationnement afin d'éviter d'envoyer un véhicule directement sur la rive.
const parkingPointOverrides = {
    "baie-de-shawinigan-parc-de-la-baie": { lat: 46.528479, lon: -72.7818462, name: "Stationnement du Parc de la Baie", confidence: "high", hideSource: true, distanceToAccessMeters: 21, fee: "Aucun frais indiqué (à confirmer sur place)" },
    "lac-sacacomie": { lat: 46.5272924, lon: -73.2028248, name: "Stationnement du quai municipal", confidence: "high", source: "OpenStreetMap parking access=yes; confirmé par Canot Kayak Québec (GPS GNSS, qualité B)", distanceToAccessMeters: 35, fee: "Payant" },
    "riviere-st-maurice": { lat: 46.35318320931242, lon: -72.52670564986391, name: "Stationnement près de la mise à l'eau", confidence: "high", source: "Stationnement GPS validé", distanceToAccessMeters: 214, fee: "À vérifier" },
    "parc-national-wapizagonke": { lat: 46.6707117, lon: -73.0046871, name: "Stationnement du secteur Wapizagonke", confidence: "medium", source: "OpenStreetMap amenity=parking; secteur recoupé avec Sépaq", distanceToAccessMeters: 134, fee: "Droit d'accès au parc" },
    "lac-taureau": { lat: 46.6887256, lon: -73.9000209, name: "Stationnement de la descente de bateaux du Réservoir Taureau", confidence: "high", hideSource: true, distanceToAccessMeters: 40, fee: "Gratuit" },
    "lac-maskinonge": { lat: 46.3018400, lon: -73.3885970, name: "Stationnement de la plage municipale, 333 rue du Parc", confidence: "high", source: "Coordonnées fournies par l'utilisateur; stationnement public confirmé à 11 m par Canot Kayak Québec et recoupé avec OpenStreetMap", distanceToAccessMeters: 71, fee: "Gratuit" },
    "lac-des-piles": { lat: 46.6653731, lon: -72.7901009, name: "Camping Plage Baie Martin, 1801 chemin de la Baie-Martin", confidence: "high", source: "Stationnement et accès routier validés", distanceToAccessMeters: 47, fee: "Accès et tarif à confirmer auprès du camping" },
    "lac-aux-sables": { lat: 46.8670340, lon: -72.3870136, name: "Stationnement de la mise à l'eau de Lac-aux-Sables", confidence: "medium", source: "Canot Kayak Québec, Carte interactive: stationnement qualité B observé par imagerie satellite", distanceToAccessMeters: 63, fee: "Gratuit" },
    "parc-national-oka": { lat: 45.4646954, lon: -74.0424846, name: "Stationnement de la Grande Plage d'Oka", confidence: "high", source: "Stationnement de la plage confirmé et recoupé avec la Sépaq", distanceToAccessMeters: 113, fee: "Stationnement payant en saison; droit d'accès au parc" },
    "reservoir-choiniere-yamaska": { lat: 45.427711468827454, lon: -72.61706242460583, name: "Stationnement du parc national de la Yamaska", confidence: "high", source: "Stationnement GPS validé et recoupé avec la Sépaq", distanceToAccessMeters: 189, fee: "Stationnement gratuit; droit d'accès au parc" },
    "reservoir-poisson-blanc": { lat: 46.0951093, lon: -75.6742184, name: "Stationnement P3 du pavillon Le Bastion", confidence: "high", source: "OpenStreetMap: stationnement P3; accès voisin confirmé par Canot Kayak Québec", distanceToAccessMeters: 153, fee: "À vérifier" },
    "baie-de-beauport-quebec": { lat: 46.8378537, lon: -71.1974402, name: "Stationnement de la plage de la Baie de Beauport", confidence: "high", source: "Canot Kayak Québec, Carte interactive: GPS, qualité B, validé", distanceToAccessMeters: 221, fee: "À vérifier" },
    "parc-national-plaisance": { lat: 45.5992347, lon: -75.1094637, name: "Stationnement de l'accueil du parc national de Plaisance", confidence: "high", source: "Canot Kayak Québec, Carte interactive: stationnement public qualité A, validé", distanceToAccessMeters: 43, fee: "Stationnement gratuit; droit d'accès au parc" },
    "lac-stukely-mont-orford": { lat: 45.3623465, lon: -72.2339001, name: "Stationnement de la plage Stukely", confidence: "high", source: "Canot Kayak Québec, Carte interactive: GPS GNSS, qualité B, validé; recoupé avec OpenStreetMap P2", distanceToAccessMeters: 110, fee: "Payant / permis requis" },
    "lac-memphremagog-magog": { lat: 45.2641104, lon: -72.1533591, name: "Stationnement voisin de la rampe de Magog", confidence: "medium", source: "OpenStreetMap amenity=parking, accès réservé aux clients à confirmer", distanceToAccessMeters: 27, fee: "À vérifier" },
    "fjord-du-saguenay-l-anse": { lat: 48.2439047, lon: -70.1800943, name: "Stationnement du quai de L'Anse-Saint-Jean", confidence: "high", source: "OpenStreetMap amenity=parking, access=yes, fee=yes", distanceToAccessMeters: 78, fee: "Payant" },
    "lac-saint-jean-alma": { lat: 48.4802148, lon: -71.7960512, name: "Stationnement Pointe Picard / Marina St-Gédéon", confidence: "high", source: "Canot Kayak Québec, Carte interactive: qualité B; recoupé avec OpenStreetMap", distanceToAccessMeters: 203, fee: "Payant" },
    "riviere-bonaventure": { lat: 48.0589625, lon: -65.5172142, name: "Stationnement de la Piouke", confidence: "high", source: "OpenStreetMap amenity=parking, surface asphaltée", distanceToAccessMeters: 30, fee: "À vérifier" },
    "iles-de-boucherville": { lat: 45.6117779, lon: -73.4566016, name: "Stationnement près de la mise à l'eau", confidence: "high", source: "OpenStreetMap amenity=parking; stationnement public GPS confirmé par Canot Kayak Québec", distanceToAccessMeters: 25, fee: "Droit d'accès au parc" },
    "lac-brome": { lat: 45.2559768, lon: -72.4948600, name: "Stationnement de la mise à l'eau du lac Brome", confidence: "high", source: "OpenStreetMap amenity=parking, access=yes, fee=yes", distanceToAccessMeters: 68, fee: "Payant" },
    "riviere-chicoutimi": { lat: 48.4304405, lon: -71.0528561, name: "Stationnement de la Marina Saguenay", confidence: "medium", source: "OpenStreetMap amenity=parking", distanceToAccessMeters: 86, fee: "À vérifier" },
    "lac-leamy-gatineau": { lat: 45.4320283, lon: -75.7084310, name: "Stationnement du port de plaisance Jacques-Cartier", confidence: "high", source: "OpenStreetMap amenity=parking, fee=yes; recoupé avec Canot Kayak Québec", distanceToAccessMeters: 108, fee: "Payant" },
    "lac-la-peche-outaouais": { lat: 45.6221030, lon: -76.1779938, name: "Stationnement du lac la Pêche", confidence: "high", source: "OpenStreetMap amenity=parking, access=yes; recoupé avec Canot Kayak Québec", distanceToAccessMeters: 48, fee: "Payant" },
    "fleuve-saint-laurent-ile-sainte-helene": { lat: 45.5018993, lon: -73.5234971, name: "Stationnement P3 du parc Jean-Drapeau", confidence: "high", source: "OpenStreetMap amenity=parking, access=yes, fee=yes", distanceToAccessMeters: 17, fee: "Payant" },
    "bassin-olympique-parc-jean-drapeau": { lat: 45.5018993, lon: -73.5234971, name: "Stationnement P3 du parc Jean-Drapeau", confidence: "high", source: "OpenStreetMap amenity=parking, access=yes, fee=yes", distanceToAccessMeters: 17, fee: "Payant" }
};

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
