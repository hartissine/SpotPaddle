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
        lat: 46.5285,
        lon: -73.2010,
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
            location: "Stationnement à l'accès plage",
            spots: 80,
            accessible: false,
            cost: "Inclus dans l'accès"
        },
        access: {
            description: "Accès via le Centre Sacacomie",
            type: "Plage privée",
            difficulty: "Accès modéré",
            launchPoint: "Plage principale"
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
        lat: 46.3548,
        lon: -72.5342,
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
            location: "Grand stationnement à l'Île Saint-Quentin",
            spots: 200,
            accessible: true,
            cost: "Inclus"
        },
        access: {
            description: "Accès depuis le Parc de l'Île Saint-Quentin",
            type: "Parc public",
            difficulty: "Accès facile",
            launchPoint: "Plage principale de l'île"
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
            "⭐ Histoire industrielle unique"
        ]
    },
    {
        id: "lac-saint-pierre",
        slug: "lac-saint-pierre",
        name: "Lac Saint-Pierre",
        region: "Mauricie",
        lat: 46.2295,
        lon: -72.9180,
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
            location: "Domaine du Lac St-Pierre à Louiseville",
            spots: 120,
            accessible: true,
            cost: "Gratuit"
        },
        access: {
            description: "Accès via le Domaine du Lac St-Pierre",
            type: "Aire publique",
            difficulty: "Accès modéré",
            launchPoint: "Quai principal"
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
        lat: 46.6735,
        lon: -72.9805,
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
            location: "Secteur Esker / Aire de pique-nique",
            spots: 80,
            accessible: false,
            cost: "Inclus dans l'entrée"
        },
        access: {
            description: "Accès via le Parc National, secteur Esker",
            type: "Parc aménagé",
            difficulty: "Modéré (peut nécessiter portage)",
            launchPoint: "Aire de mise à l'eau"
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
        lat: 46.7468,
        lon: -73.6505,
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
            location: "Stationnement au Parc régional (Pointe-Fine)",
            spots: 150,
            accessible: true,
            cost: "Inclus"
        },
        access: {
            description: "Accès principale à la Plage Pointe-Fine",
            type: "Parc régional",
            difficulty: "Accès facile",
            launchPoint: "Plage principal"
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
        name: "Lac Maskinongé (St-Gabriel)",
        region: "Mauricie",
        lat: 46.3330,
        lon: -73.3865,
        mainImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800"
        ],
        description: "Grand lac peu profond, idéal pour les familles et les débutants. Accès facile et ambiance décontractée.",
        longDescription: "Lac Maskinongé est parfait pour une première expérience de paddle. Le lac peu profond offre une sécurité rassurante, et l'infrastructure à Saint-Gabriel est fiable.",
        difficulty: "facile",
        paddleScore: 76,
        scoreFactors: {
            wind: 7,
            rain: 7,
            temperature: 8,
            waves: 8
        },
        isFree: true,
        cost: "Stationnement : payant en haute saison (5$-8$)",
        waterQuality: "Acceptable",
        maxLength: "15 km",
        season: "Mai à septembre",
        parking: {
            location: "Plage municipale de Saint-Gabriel",
            spots: 100,
            accessible: true,
            cost: "Payant en saison (gratuit hors-saison)"
        },
        access: {
            description: "Accès via la Plage municipale",
            type: "Plage publique",
            difficulty: "Accès très facile",
            launchPoint: "Plage principale"
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
            "⚠️ Très fréquenté en été"
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
        lat: 46.5925,
        lon: -72.8235,
        mainImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800"
        ],
        description: "Eau cristalline exceptionnelle - source d'eau potable de la ville de Trois-Rivières ! Une expérience unique de transparence aquatique.",
        longDescription: "Lac des Piles est une merveille hydrique. L'eau est tellement pure qu'elle approvisionne la ville de Trois-Rivières. Vous verrez clairement le fond du lac à plusieurs mètres de profondeur.",
        difficulty: "facile",
        paddleScore: 88,
        scoreFactors: {
            wind: 8,
            rain: 9,
            temperature: 8,
            waves: 8
        },
        isFree: false,
        cost: "Accès payant selon la saison (15$-20$)",
        waterQuality: "Exceptionnelle (eau potable)",
        maxLength: "Circuit 10 km",
        season: "Mai à septembre",
        parking: {
            location: "Camping Baie-Martin",
            spots: 60,
            accessible: false,
            cost: "Payant"
        },
        access: {
            description: "Accès via le Camping Baie-Martin",
            type: "Privé / Camping",
            difficulty: "Modéré",
            launchPoint: "Plage du camping"
        },
        amenities: [
            "Camping de luxe",
            "Restaurant",
            "Toilettes chic",
            "Cabanes"
        ],
        warnings: [
            "⚠️ Zone protégée - Respect de l'environnement essentiel",
            "⚠️ Limite de bateaux/paddleurs par jour",
            "⚠️ Pas de gaz, essence ou pollution d'aucune sorte"
        ],
        faq: [
            {
                q: "Pourquoi est-il si protégé ?",
                a: "C'est une source d'eau potable pour Trois-Rivières. Zéro pollution tolérée."
            },
            {
                q: "Puis-je rester la nuit ?",
                a: "Via le camping Baie-Martin. Réservation obligatoire."
            },
            {
                q: "C'est vraiment transparent ?",
                a: "Oui ! Vous verrez 10+ mètres de profondeur. C'est magique en journée ensoleillée."
            }
        ],
        highlights: [
            "✨ Eau exceptionnellement claire",
            "🌍 Source d'eau potable",
            "🟢 Très beau pour photos",
            "⭐ Total must-see"
        ]
    },
    {
        id: "lac-aux-sables",
        slug: "lac-aux-sables",
        name: "Lac-aux-Sables",
        region: "Mauricie",
        lat: 46.8738,
        lon: -72.3942,
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
            location: "Stationnement à la plage municipale",
            spots: 200,
            accessible: true,
            cost: "Gratuit (payant haute saison)"
        },
        access: {
            description: "Accès facile via la plage publique",
            type: "Plage publique",
            difficulty: "Très facile",
            launchPoint: "Plage principale"
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
    }
];

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
    const lacsWithDistance = lacDatabase.map(lac => ({
        ...lac,
        distance: calculateDistance(userLat, userLon, lac.lat, lac.lon)
    }));
    
    return lacsWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 2);
}
