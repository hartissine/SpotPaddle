    function initHeroVideo() {
        const video = document.getElementById('heroVideo');
        if (!video) return;

        const desktopMedia = window.matchMedia('(min-width: 768px)');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        const getConnectionType = () => String(connection?.type || '').toLowerCase();
        const isExplicitWifi = () => ['wifi', 'ethernet'].includes(getConnectionType());
        const isExplicitCellular = () => ['cellular', '2g', '3g', '4g', '5g'].includes(getConnectionType());
        let userRequestedHeroVideo = false;

        const shouldUseVideo = () => {
            if (reducedMotion.matches || connection?.saveData || isExplicitCellular()) return false;
            if (!desktopMedia.matches) return false;
            if (isExplicitWifi()) return true;

            // Without a reliable network signal, keep the poster until user intent.
            return userRequestedHeroVideo;
        };

        const unloadVideo = () => {
            if (video.dataset.loaded !== 'true') return;
            video.pause();
            video.querySelectorAll('source').forEach(source => source.remove());
            video.removeAttribute('src');
            video.dataset.loaded = 'false';
            video.load();
        };

        const syncHeroMedia = () => {
            if (!shouldUseVideo()) {
                unloadVideo();
                return;
            }

            if (video.dataset.loaded === 'true') return;
            const source = document.createElement('source');
            source.src = video.dataset.videoSrc;
            source.type = 'video/mp4';
            video.appendChild(source);
            video.dataset.loaded = 'true';
            video.load();

            const playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(() => {
                    // Le poster reste visible si le navigateur bloque l'autoplay.
                });
            }
        };

        const scheduleInitialHeroMedia = () => {
            if (!isExplicitWifi()) return;

            const loadWhenIdle = () => {
                if ('requestIdleCallback' in window) {
                    window.requestIdleCallback(syncHeroMedia, { timeout: 2500 });
                    return;
                }

                window.setTimeout(syncHeroMedia, 1200);
            };

            if (document.readyState === 'complete') {
                loadWhenIdle();
                return;
            }

            window.addEventListener('load', loadWhenIdle, { once: true });
        };

        const scheduleInteractionHeroMedia = () => {
            const target = video.closest('header') || video;
            const requestVideo = () => {
                userRequestedHeroVideo = true;
                syncHeroMedia();
            };

            target.addEventListener('pointerenter', requestVideo, { once: true });
            target.addEventListener('pointerdown', requestVideo, { once: true, passive: true });
            target.addEventListener('focusin', requestVideo, { once: true });
        };

        scheduleInitialHeroMedia();
        scheduleInteractionHeroMedia();
        desktopMedia.addEventListener?.('change', syncHeroMedia);
        reducedMotion.addEventListener?.('change', syncHeroMedia);
        connection?.addEventListener?.('change', syncHeroMedia);
    }

    initHeroVideo();

    // Système de couleurs et zones géographiques par région
    const regionConfig = {
        "Mauricie": { color: "#3b82f6", zone: "Centre", emoji: "🌲" },
        "Lanaudière": { color: "#0f766e", zone: "Centre", emoji: "🌲" },
        "Laurentides": { color: "#8b5cf6", zone: "Nord", emoji: "⛰️" },
        "Estrie": { color: "#ec4899", zone: "Sud-Est", emoji: "🏔️" },
        "Saguenay-Lac-Saint-Jean": { color: "#06b6d4", zone: "Nord-Est", emoji: "❄️" },
        "Gaspésie": { color: "#f97316", zone: "Est", emoji: "🌊" },
        "Québec": { color: "#06b6d4", zone: "Est", emoji: "🏛️" },
        "Outaouais": { color: "#10b981", zone: "Ouest", emoji: "🌳" },
        "Montréal": { color: "#d97706", zone: "Centre-Est", emoji: "🏙️" },
        "Laval": { color: "#f59e0b", zone: "Centre-Est", emoji: "🏙️" },
        "Montérégie": { color: "#84cc16", zone: "Sud", emoji: "🌾" },
        "Centre-du-Québec": { color: "#14b8a6", zone: "Centre", emoji: "🌿" },
        "Chaudière-Appalaches": { color: "#0ea5e9", zone: "Est", emoji: "🌊" },
        "Charlevoix": { color: "#6366f1", zone: "Est", emoji: "⛰️" },
        "Bas-Saint-Laurent": { color: "#0891b2", zone: "Est", emoji: "🌊" }
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
    const markerIconUrlByColor = new Map();

    function createRegionMarkerIcon(color) {
        const markerColor = color || "#64748b";
        if (markerIconUrlByColor.has(markerColor)) {
            return markerIconUrlByColor.get(markerColor);
        }

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" width="32" height="40">
            <path fill="${markerColor}" d="M16 0C8.3 0 2 6.3 2 14c0 9 14 26 14 26s14-17 14-26c0-7.7-6.3-14-14-14z"/>
            <circle cx="16" cy="14" r="5" fill="white"/>
        </svg>`;
        const iconUrl = 'data:image/svg+xml;base64,' + btoa(svg);
        markerIconUrlByColor.set(markerColor, iconUrl);
        return iconUrl;
    }

    // 2. Map Setup
    const initialView = { lat: 46.8, lon: -71.5, zoom: 6 };
    const mapElement = document.getElementById('map');
    const MAIN_MAP_ASSET_VERSION = '1.9.4';
    var map = null;
    var streetMapLayer = null;
    var satelliteMapLayer = null;
    var satelliteLabelsLayer = null;
    var isMapZoomLocked = false;
    var isMainMapInteractionEnabled = true;
    var isMainMapPopupOpen = false;
    var mainMapAssetsPromise = null;
    var mainMapInitPromise = null;

    function isMobileMapViewport() {
        return window.matchMedia('(max-width: 767px)').matches;
    }

    function setMainMapPopupOpen(open) {
        isMainMapPopupOpen = Boolean(open);
        const shell = document.getElementById('mapShell') || mapElement?.parentElement;
        if (!shell) return;

        shell.classList.toggle('map-popup-open', isMainMapPopupOpen && isMobileMapViewport());
    }

    function isMobileSpotPopupVisible() {
        const panel = document.getElementById('mobileSpotPopupPanel');
        return Boolean(panel && !panel.classList.contains('hidden'));
    }

    function closeMobileSpotPopup() {
        const panel = document.getElementById('mobileSpotPopupPanel');
        if (panel) panel.classList.add('hidden');
        setMainMapPopupOpen(false);
        setMainMapZoomLocked(false);
    }

    function setMobileSpotPopupContent(content) {
        const panel = document.getElementById('mobileSpotPopupPanel');
        const panelContent = document.getElementById('mobileSpotPopupContent');
        const shell = document.getElementById('mapShell') || mapElement?.parentElement;
        if (!panel || !panelContent) return false;

        panelContent.innerHTML = content;
        panel.classList.remove('hidden');
        setMainMapPopupOpen(true);
        setMainMapZoomLocked(true);

        if (shell) {
            requestAnimationFrame(() => {
                shell.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }

        return true;
    }

    function setMainMapInteractionEnabled(enabled) {
        if (!map || !mapElement) return;

        const isMobile = isMobileMapViewport();
        const locked = isMobile && !enabled;
        const toggle = document.getElementById('mapInteractionToggle');
        isMainMapInteractionEnabled = !locked;

        ['dragging', 'touchZoom', 'doubleClickZoom'].forEach(handlerName => {
            const handler = map[handlerName];
            if (!handler) return;
            if (locked) handler.disable();
            else handler.enable();
        });

        if (isMobile && map.scrollWheelZoom) map.scrollWheelZoom.disable();
        mapElement.classList.toggle('map-touch-locked', locked);

        if (toggle) {
            toggle.hidden = !isMobile;
            toggle.setAttribute('aria-pressed', String(!locked));
            toggle.classList.toggle('is-active', !locked);
            toggle.textContent = locked ? '🗺️ Explorer la carte' : '↕ Reprendre le défilement';
        }
    }

    function toggleMainMapInteraction() {
        if (!map) {
            void ensureMainMapReady().then(isReady => {
                if (isReady) toggleMainMapInteraction();
            });
            return;
        }

        setMainMapInteractionEnabled(!isMainMapInteractionEnabled);
    }

    function getStoredMapMode() {
        try {
            return localStorage.getItem('spotPaddleMapMode') === 'satellite' ? 'satellite' : 'street';
        } catch (error) {
            return 'street';
        }
    }

    function updateMapModeControl(mode) {
        const buttons = {
            street: document.getElementById('mapModeStreet'),
            satellite: document.getElementById('mapModeSatellite')
        };

        Object.entries(buttons).forEach(([buttonMode, button]) => {
            if (!button) return;
            const isActive = buttonMode === mode;
            button.setAttribute('aria-pressed', String(isActive));
            button.classList.toggle('bg-blue-600', isActive);
            button.classList.toggle('text-white', isActive);
            button.classList.toggle('text-slate-600', !isActive);
            button.classList.toggle('hover:bg-slate-100', !isActive);
        });
    }

    function setMapMode(mode, persist = true) {
        const selectedMode = mode === 'satellite' ? 'satellite' : 'street';
        if (!map || !streetMapLayer || !satelliteMapLayer) {
            updateMapModeControl(selectedMode);
            if (persist) {
                try {
                    localStorage.setItem('spotPaddleMapMode', selectedMode);
                } catch (error) {
                    // La carte reste fonctionnelle mÃªme si le stockage local est dÃ©sactivÃ©.
                }
            }
            void ensureMainMapReady();
            return;
        }

        if (selectedMode === 'satellite') {
            if (map.hasLayer(streetMapLayer)) map.removeLayer(streetMapLayer);
            if (!map.hasLayer(satelliteMapLayer)) satelliteMapLayer.addTo(map);
            if (satelliteLabelsLayer && !map.hasLayer(satelliteLabelsLayer)) {
                satelliteLabelsLayer.addTo(map);
            }
        } else {
            if (map.hasLayer(satelliteMapLayer)) map.removeLayer(satelliteMapLayer);
            if (satelliteLabelsLayer && map.hasLayer(satelliteLabelsLayer)) {
                map.removeLayer(satelliteLabelsLayer);
            }
            if (!map.hasLayer(streetMapLayer)) streetMapLayer.addTo(map);
        }

        updateMapModeControl(selectedMode);

        if (persist) {
            try {
                localStorage.setItem('spotPaddleMapMode', selectedMode);
            } catch (error) {
                // La carte reste fonctionnelle même si le stockage local est désactivé.
            }
        }
    }

    function getMainMapZoomButtons() {
        return Array.from(document.querySelectorAll('button[onclick^="zoomMap("]'));
    }

    function setMainMapZoomLocked(locked) {
        isMapZoomLocked = locked;

        const buttons = getMainMapZoomButtons();
        if (!buttons.length) return;

        buttons.forEach(button => {
            button.disabled = locked;
            button.setAttribute('aria-disabled', String(locked));
        });

        const zoomGroup = buttons[0].closest('[role="group"]');
        if (zoomGroup) {
            zoomGroup.classList.toggle('map-zoom-control--locked', locked);
        }
    }

    function getSpotPopupOptions() {
        const isMobile = isMobileMapViewport();
        const viewportWidth = window.innerWidth || 360;
        const popupWidth = Math.max(260, Math.min(340, viewportWidth - 40));
        const options = {
            maxWidth: isMobile ? popupWidth : 260,
            minWidth: isMobile ? Math.min(300, popupWidth) : 220,
            className: 'custom-popup',
            autoPan: true,
            keepInView: true
        };

        if (typeof L !== 'undefined' && L.point) {
            options.autoPanPaddingTopLeft = L.point(isMobile ? 16 : 20, isMobile ? 96 : 20);
            options.autoPanPaddingBottomRight = L.point(isMobile ? 16 : 20, isMobile ? 36 : 20);
        }

        return options;
    }

    function setMainMapLoadingState() {
        if (!mapElement || map || mapElement.dataset.mapState === 'loading') return;

        mapElement.dataset.mapState = 'loading';
        mapElement.innerHTML = `
            <div class="h-full min-h-[420px] flex items-center justify-center bg-slate-100 text-slate-600 text-center p-8 rounded-3xl">
                <div>
                    <div class="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
                    <p class="font-bold">Carte en chargement...</p>
                    <p class="text-sm mt-2">Les spots et filtres restent disponibles.</p>
                </div>
            </div>
        `;
    }

    function loadMainMapStylesheet() {
        if (document.querySelector('link[data-main-leaflet-css]') || document.querySelector('link[href*="assets/vendor/leaflet/leaflet.css"]')) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `assets/vendor/leaflet/leaflet.css?v=${MAIN_MAP_ASSET_VERSION}`;
            link.dataset.mainLeafletCss = 'true';
            link.onload = resolve;
            link.onerror = () => reject(new Error('Feuille Leaflet indisponible'));
            document.head.appendChild(link);
        });
    }

    function loadMainMapScript() {
        if (typeof L !== 'undefined') return Promise.resolve();

        const existingScript = document.querySelector('script[data-main-leaflet-js], script[src*="assets/vendor/leaflet/leaflet.js"]');
        if (existingScript) {
            return new Promise((resolve, reject) => {
                existingScript.addEventListener('load', resolve, { once: true });
                existingScript.addEventListener('error', () => reject(new Error('Script Leaflet indisponible')), { once: true });
            });
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `assets/vendor/leaflet/leaflet.js?v=${MAIN_MAP_ASSET_VERSION}`;
            script.async = true;
            script.dataset.mainLeafletJs = 'true';
            script.onload = resolve;
            script.onerror = () => reject(new Error('Script Leaflet indisponible'));
            document.body.appendChild(script);
        });
    }

    function loadMainMapAssets() {
        if (!mainMapAssetsPromise) {
            setMainMapLoadingState();
            mainMapAssetsPromise = Promise.all([
                loadMainMapStylesheet(),
                loadMainMapScript()
            ]).then(() => undefined);
        }

        return mainMapAssetsPromise;
    }

    function initMainMap() {
        if (!mapElement) return false;
        if (map) return true;
        if (typeof L === 'undefined') {
            showMainMapUnavailable();
            return false;
        }

        mapElement.innerHTML = '';
        mapElement.dataset.mapState = 'ready';
        map = L.map('map', { zoomControl: false }).setView([initialView.lat, initialView.lon], initialView.zoom);
        map.createPane('satelliteLabelsPane');
        map.getPane('satelliteLabelsPane').style.zIndex = 350;
        map.getPane('satelliteLabelsPane').style.pointerEvents = 'none';

        streetMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap',
            maxZoom: 19
        });
        satelliteMapLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community',
            maxZoom: 23
        });
        satelliteLabelsLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
            pane: 'satelliteLabelsPane',
            subdomains: 'abcd',
            maxNativeZoom: 20,
            maxZoom: 23
        });
        setMapMode(getStoredMapMode(), false);
        setMainMapInteractionEnabled(!isMobileMapViewport());

        // Close popup when clicking on map
        map.on('click', function() {
            map.closePopup();
            closeMobileSpotPopup();
        });
        map.on('popupopen', function() {
            setMainMapZoomLocked(true);
            setMainMapPopupOpen(true);
        });
        map.on('popupclose', function() {
            setMainMapZoomLocked(false);
            setMainMapPopupOpen(false);
        });
        window.addEventListener('resize', function() {
            if (!isMobileMapViewport()) {
                closeMobileSpotPopup();
                return;
            }
            setMainMapPopupOpen(isMainMapPopupOpen);
        });
        initMainMarkers();
        appliquerFiltres();
        return true;
    }

    function showMainMapUnavailable() {
        if (!mapElement) return;
        const mapModeControl = document.getElementById('mapModeControl');
        if (mapModeControl) mapModeControl.classList.add('hidden');
        mapElement.dataset.mapState = 'unavailable';
        mapElement.innerHTML = `
            <div class="h-full min-h-[420px] flex items-center justify-center bg-slate-100 text-slate-600 text-center p-8 rounded-3xl">
                <div>
                    <div class="text-3xl mb-3">🗺️</div>
                    <p class="font-bold">Carte temporairement indisponible</p>
                    <p class="text-sm mt-2">Les fiches, points GPS et pages de spots restent accessibles.</p>
                </div>
            </div>
        `;
    }

    function ensureMainMapReady() {
        if (!mapElement) return Promise.resolve(false);
        if (map) return Promise.resolve(true);

        if (!mainMapInitPromise) {
            mainMapInitPromise = loadMainMapAssets()
                .then(() => initMainMap())
                .catch(error => {
                    console.warn('Carte Leaflet non chargee:', error.message);
                    showMainMapUnavailable();
                    return false;
                });
        }

        return mainMapInitPromise;
    }

    function scheduleMainMapInit() {
        if (!mapElement) return;

        const start = () => {
            void ensureMainMapReady();
        };

        mapElement.addEventListener('pointerenter', start, { once: true });
        mapElement.addEventListener('touchstart', start, { once: true, passive: true });

        if (window.location.hash === '#carte' || window.location.hash.startsWith('#spot-')) {
            start();
            return;
        }

        if (!('IntersectionObserver' in window)) {
            if ('requestIdleCallback' in window) {
                window.requestIdleCallback(start, { timeout: 2500 });
            } else {
                window.setTimeout(start, 1200);
            }
            return;
        }

        const observer = new IntersectionObserver(entries => {
            if (!entries.some(entry => entry.isIntersecting)) return;
            observer.disconnect();
            start();
        }, { rootMargin: '520px 0px' });

        observer.observe(mapElement);
    }

    function zoomMap(direction) {
        if (!map) {
            void ensureMainMapReady().then(isReady => {
                if (isReady) zoomMap(direction);
            });
            return;
        }
        if (isMapZoomLocked) return;
        if (direction > 0) {
            map.zoomIn();
        } else {
            map.zoomOut();
        }
    }

    // 3. Spots Data
    const fallbackSpots = [
        { 
            name: "Lac à la Tortue (Plage)",
            region: "Mauricie",
            lat: 46.6110, lon: -72.6240, 
            image: "assets/spots/lac-raymond-val-morin.jpg",
            parking: "Stationnement au Parc Municipal (Plage).", 
            prix: "Accès public gratuit.", 
            info: "Zone de décollage d'hydravions, restez vigilant près du centre.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Sacacomie", 
            region: "Mauricie",
            lat: 46.52743, lon: -73.20323, 
            image: "assets/spots/lac-forbes.jpg",
            parking: "Mise à l'eau OSM près du lac Sacacomie.", 
            prix: "Frais d'accès (Environ 15$).", 
            info: "Réputé pour son eau d'une clarté exceptionnelle et ses 42 km de rivage sauvage.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Rivière St-Maurice (TR)", 
            region: "Mauricie",
            lat: 46.35864, lon: -72.53472, 
            image: "assets/spots/lac-mercier-illustration-ia.jpg",
            parking: "Mise à l'eau de l'Île Saint-Quentin / Avenue des Draveurs.", 
            prix: "Frais d'accès au parc de l'île.", 
            info: "Parfait pour éviter les forts courants du centre de la rivière.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Lac Saint-Pierre", 
            region: "Mauricie",
            lat: 46.22455, lon: -72.92234, 
            image: "assets/spots/lac-tremblant.jpg",
            parking: "Rampe de mise à l'eau près du Domaine du Lac Saint-Pierre.", 
            prix: "Frais de mise à l'eau applicables.", 
            info: "Réserve de biosphère. Très exposé au vent d'Ouest.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Parc National - Wapizagonke", 
            region: "Mauricie",
            lat: 46.66976, lon: -73.00577, 
            image: "assets/spots/parc-national-wapizagonke/plage-et-planche.jpg",
            parking: "Mise à l'eau du secteur Wapizagonke.", 
            prix: "Entrée Parc National + Lavage obligatoire.", 
            info: "Naviguez au pied des falaises. Chutes Waber accessibles par ce lac.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac Taureau (Plage Pointe-Fine)", 
            region: "Mauricie",
            lat: 46.7468, lon: -73.6505, 
            image: "assets/spots/lac-memphremagog-magog.jpg",
            parking: "Stationnement au Parc régional (Pointe-Fine).", 
            prix: "Frais d'accès au parc régional.", 
            info: "Plages de sable magnifiques. Attention à la navigation moteur.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Lac Maskinongé (Saint-Gabriel-de-Brandon)",
            region: "Lanaudière",
            lat: 46.301840, lon: -73.388597,
            image: "assets/spots/lac-maskinonge.jpg",
            parking: "Plage de Saint-Gabriel, 333 rue du Parc, Saint-Gabriel-de-Brandon, QC J0K 2N0.",
            prix: "Tarifs de plage et de stationnement à vérifier avant le départ.",
            info: "Accès par la plage pour les embarcations légères; lac exposé au vent et à la circulation nautique.",
            isFree: false,
            level: "facile"
        },
        {
            name: "Lac des Piles (Baie-Martin)", 
            region: "Mauricie",
            lat: 46.6518317, lon: -72.7986336,
            image: "assets/spots/lac-maskinonge.jpg",
            parking: "Accès payant via le Camping Baie-Martin.", 
            prix: "Accès payant selon la saison.",
            info: "Plage de camping avec canot et kayak; accès de jour et tarif à confirmer.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac-aux-Sables", 
            region: "Mauricie",
            lat: 46.87022, lon: -72.39044,
            image: "assets/spots/lac-raymond-val-morin.jpg",
            parking: "Marina / accès riverain de Lac-aux-Sables.", 
            prix: "Accès public gratuit.",
            info: "Sable fin et eau claire. Très fréquenté durant l'été.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Parc National - Lac Édouard", 
            region: "Mauricie",
            lat: 46.7882, lon: -72.8575,
            image: "assets/spots/lac-lyster.jpg",
            parking: "Stationnement de la plage du Lac-Édouard.", 
            prix: "Entrée Parc National + Lavage obligatoire.", 
            info: "Plage surveillée et eaux calmes. Parfait pour le paddle yoga.",
            isFree: false,
            level: "facile"
        },
        {
            name: "Lac Mercier",
            region: "Laurentides",
            lat: 46.193499, lon: -74.631738,
            image: "assets/spots/lac-mercier-illustration-ia.jpg",
            parking: "Stationnement gratuit près du quai du lac Mercier.",
            prix: "Accès et stationnement gratuits.",
            info: "Mise à l'eau à gauche du quai; accès confirmé par une personne contributrice.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Tremblant",
            region: "Laurentides",
            lat: 46.227230443496815, lon: -74.62875777620965,
            image: "assets/spots/lac-tremblant.jpg",
            parking: "Station de lavage obligatoire — secteur Pierre Plouffe.",
            prix: "Lavage obligatoire; frais à vérifier.",
            info: "Accès par le secteur du Centre nautique Pierre Plouffe; lavage d'embarcation obligatoire.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Rivière Rouge (Labelle)", 
            region: "Laurentides",
            lat: 46.2762, lon: -74.7298,
            image: "assets/spots/lac-lyster.jpg",
            parking: "Stationnement gratuit au Parc de la Gare de Labelle.", 
            prix: "Accès public gratuit.", 
            info: "Eaux calmes serpentant entre de magnifiques plages de sable fin, parfaites pour le pique-nique.",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Lac Stukely (Mont-Orford)", 
            region: "Estrie",
            lat: 45.36231, lon: -72.23190,
            image: "assets/spots/lac-forbes.jpg",
            parking: "Mise à l'eau du lac Stukely, parc du Mont-Orford.", 
            prix: "Entrée de parc de la SEPAQ obligatoire.", 
            info: "Eau calme et très propre au cœur du parc national. Navigation sauvage protégée du vent.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac Memphrémagog (Magog)", 
            region: "Estrie",
            lat: 45.2648, lon: -72.1535,
            image: "assets/spots/lac-megantic.jpg",
            parking: "Stationnement à la plage des Cantons à Magog.", 
            prix: "Accès public gratuit (stationnement payant en saison).", 
            info: "Vue extraordinaire sur le Mont Orford. Attention au vent de face et aux bateaux à moteur.",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Petit-Lac-Magog — Parc de la Plage-Municipale",
            region: "Estrie",
            lat: 45.33464687563523, lon: -72.02350158716727,
            image: "assets/spots/lac-megantic.jpg",
            parking: "Parc de la Plage-Municipale, secteur Deauville.",
            prix: "À vérifier sur place.",
            info: "Accès confirmé par le Parc de la Plage-Municipale à Petit-Lac-Magog.",
            isFree: true,
            level: "facile"
        },
        {
            name: "Fjord du Saguenay (L'Anse)",
            region: "Saguenay-Lac-Saint-Jean",
            lat: 48.2450, lon: -70.2815,
            image: "assets/spots/lac-raymond-val-morin.jpg",
            parking: "Stationnement au quai municipal de L'Anse-Saint-Jean.", 
            prix: "Accès libre et gratuit.", 
            info: "Naviguez au milieu de falaises géantes de 300m. Réservé aux experts (marées et vents forts).",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Lac Saint-Jean (Alma)", 
            region: "Saguenay-Lac-Saint-Jean",
            lat: 48.47962, lon: -71.79344,
            image: "assets/spots/lac-mercier-illustration-ia.jpg",
            parking: "Marina St-Gédéon, mise à l'eau OSM près de la plage.", 
            prix: "Accès public gratuit.", 
            info: "Une véritable mer intérieure. Vagues importantes par vent d'Est.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Rivière Bonaventure", 
            region: "Gaspésie",
            lat: 48.0625, lon: -65.5165,
            image: "assets/spots/lac-forbes.jpg",
            parking: "Accès public sous le pont de la route 132.", 
            prix: "Gratuit pour navigation autonome.", 
            info: "Considérée comme l'une des rivières les plus limpides au monde. Sensation de léviter sur l'eau.",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Parc National Forillon", 
            region: "Gaspésie",
            lat: 48.80506447087035, lon: -64.24512015509676,
            image: "assets/spots/lac-matapedia-baie-de-charlie/rive-boisee.jpg",
            parking: "Stationnement du sentier du mont Saint-Alban, à environ 41 m de la plage.",
            prix: "Tarification d'entrée de Parc Canada applicable.", 
            info: "Naviguez dans une baie magnifique avec possibilité d'observer des phoques et baleines au loin.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Lac Beauport", 
            region: "Québec",
            lat: 46.9435, lon: -71.2935,
            image: "assets/spots/lac-megantic.jpg",
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
            image: "assets/spots/lac-forbes.jpg",
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
            image: "assets/spots/lac-raymond-val-morin.jpg",
            parking: "Stationnement P11 (Plage O'Brien).", 
            prix: "Accès gratuit au lac (stationnement payant en été).", 
            info: "Plan d'eau très calme niché dans les collines de la Gatineau. Très populaire en été.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Îles-de-Boucherville", 
            region: "Montréal",
            lat: 45.61196, lon: -73.45680,
            image: "assets/spots/lac-mercier-illustration-ia.jpg",
            parking: "Mise à l'eau du parc national des Îles-de-Boucherville.", 
            prix: "Frais d'accès quotidiens de la SEPAQ.", 
            info: "Naviguez dans des chenaux étroits et calmes du Saint-Laurent. Il est fréquent de croiser des cerfs !",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Canal de Lachine", 
            region: "Montréal",
            lat: 45.47895, lon: -73.57404,
            image: "assets/spots/lac-mercier-illustration-ia.jpg",
            parking: "Centre Nautique du Canal.", 
            prix: "Navigation libre et gratuite (permis d'écluse optionnel).", 
            info: "Parcours urbain historique au cœur de Montréal. Eaux calmes sans aucun courant.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Rivière des Outaouais (Arundel)", 
            region: "Laurentides",
            lat: 46.0795, lon: -74.9218,
            image: "assets/spots/lac-mercier-illustration-ia.jpg",
            parking: "Accès gratuit au parc Arundel.", 
            prix: "Accès public gratuit.", 
            info: "Rivière paisible idéale pour débuter, paysages forestiers exceptionnels.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Forbes (Laurentides)",
            region: "Laurentides",
            lat: 46.49046390419786, lon: -74.17010356318994,
            image: "assets/spots/lac-forbes.jpg",
            parking: "Point GPS confirmé au Lac Forbes.",
            prix: "À vérifier sur place.",
            info: "Point GPS confirmé par l'utilisateur pour remplacer l'ancien Lac du Diable.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Mégantic", 
            region: "Estrie",
            lat: 45.58784810132125, lon: -70.92756741709933,
            image: "assets/spots/lac-megantic.jpg",
            parking: "Station touristique Baie-des-Sables.",
            prix: "Tarification à vérifier.",
            info: "Plage aménagée avec location nautique, descente de bateaux et quais visiteurs.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac Aylmer (Stratford)",
            region: "Estrie",
            lat: 45.80647, lon: -71.32590,
            image: "assets/spots/lac-lyster.jpg",
            parking: "Mise à l'eau Lac Aylmer, secteur Stratford.", 
            prix: "Accès payant (environ 8$).", 
            info: "Petit lac tranquille entouré de montagnes boisées. Excellente expérience de paddle.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac Brome",
            region: "Estrie",
            lat: 45.25649, lon: -72.49532,
            image: "assets/spots/lac-forbes.jpg",
            parking: "Mise à l'eau du Lac Brome.", 
            prix: "Gratuit ou petit frais selon l'endroit.", 
            info: "Réputé pour sa clarté exceptionnelle, communauté de paddlers très active.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Rivière Chicoutimi", 
            region: "Saguenay-Lac-Saint-Jean",
            lat: 48.43030, lon: -71.05171,
            image: "assets/spots/lac-lyster.jpg",
            parking: "Marina Saguenay / mise à l'eau.", 
            prix: "Accès public gratuit.", 
            info: "Rivière serpentant entre les montagnes, faible courant en amont.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Kénogami", 
            region: "Saguenay-Lac-Saint-Jean",
            lat: 48.3865, lon: -71.2365,
            image: "assets/spots/lac-lyster.jpg",
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
            image: "assets/spots/lac-maskinonge.jpg",
            parking: "Accès à partir du parc Ashuapmushuan.", 
            prix: "Frais d'accès minimaux.", 
            info: "Rivière de classe mondiale, sections calmes accessibles aux débutants.",
            isFree: false,
            level: "sportif"
        },
        { 
            name: "Baie de Percé", 
            region: "Gaspésie",
            lat: 48.81722205280654, lon: -64.4120404941832,
            image: "assets/spots/lac-matapedia-baie-de-charlie/rive-boisee.jpg",
            parking: "Destination GPS confirmée de la Baie de Percé.",
            prix: "Tarif et conditions d'accès à vérifier.",
            info: "Point d'accès confirmé; vérifiez le vent, les marées et les conditions maritimes.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Lac du Cap-aux-Os", 
            region: "Gaspésie",
            lat: 48.827258274795376, lon: -64.3099938078322,
            image: "assets/spots/lac-du-cap-aux-os.jpg",
            parking: "Stationnement adjacent sur la route 132.",
            prix: "Tarification à vérifier.",
            info: "GPS confirmé avec stationnement juste à côté de l'accès.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Rivière Cascapédia", 
            region: "Gaspésie",
            lat: 48.26484, lon: -65.90311,
            image: "assets/spots/lac-mercier-illustration-ia.jpg",
            parking: "Accès public gratuit (plusieurs rampes).", 
            prix: "Gratuit pour la navigation autonome.", 
            info: "Rivière réputée pour sa grande clarté et ses courants modérés.",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Lac des Îles (Laurentides)",
            region: "Laurentides",
            lat: 46.408652633180225, lon: -75.5163500723817,
            image: "assets/spots/lac-des-iles-baie-poulin.jpg",
            parking: "Quai public de la Baie Poulin, accès routier à proximité.",
            prix: "Accès public gratuit.", 
            info: "Accès confirmé au quai public de la Baie Poulin, secteur Lac-des-Îles.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Parc Monseigneur-Vel (Île du Marais)",
            region: "Estrie",
            lat: 45.26844395845996, lon: -72.0478460433003,
            image: "assets/spots/lac-forbes.jpg",
            parking: "Parc Monseigneur-Vel, stationnement et accès confirmés.",
            prix: "À vérifier sur place.",
            info: "Accès confirmé par le Parc Monseigneur-Vel pour le secteur de l'Île du Marais.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Rivière Sainte-Anne (Québec)", 
            region: "Québec",
            lat: 46.9495, lon: -71.0865,
            image: "assets/spots/lac-maskinonge.jpg",
            parking: "Stationnement gratuit du parc. ", 
            prix: "Accès public gratuit.", 
            info: "Rivière pittoresque avec sections très calmes, prairies et forêts alentour.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Leamy (Gatineau)",
            region: "Outaouais",
            lat: 45.43198, lon: -75.70705,
            image: "assets/spots/lac-raymond-val-morin.jpg",
            parking: "Mise à l'eau du Lac Leamy.", 
            prix: "Accès gratuit au parc (stationnement payant).", 
            info: "Lac tranquille au cœur du parc de la Gatineau, très populaire en week-end.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Rivière des Outaouais (Chelsea)", 
            region: "Outaouais",
            lat: 45.46081, lon: -75.68523,
            image: "assets/spots/lac-mercier-illustration-ia.jpg",
            parking: "Mise à l'eau sur la rivière des Outaouais, secteur Gatineau/Chelsea.", 
            prix: "Accès gratuit.", 
            info: "Section calme de la rivière majeure de la région, idéale pour débuter.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac la Pêche (Outaouais)", 
            region: "Outaouais",
            lat: 45.62240, lon: -76.17843,
            image: "assets/spots/lac-forbes.jpg",
            parking: "Mise à l'eau du lac la Pêche.", 
            prix: "Frais d'accès du parc.", 
            info: "Lac du parc de la Gatineau avec activités de canotage; choix plus approprié que le lac Pink, protégé.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Lac Philippe (Outaouais)",
            region: "Outaouais",
            lat: 45.60212, lon: -76.04355,
            image: "assets/spots/lac-philippe-outaouais/vue-lac-et-kayaks.jpg",
            parking: "Mise à l'eau du lac Philippe, parc de la Gatineau.", 
            prix: "Frais d'accès (environ 7$).", 
            info: "Lac de parc provincial avec plages aménagées et zones protégées.",
            isFree: false,
            level: "facile"
        },
        { 
            name: "Bassin de Lachine (Montréal)", 
            region: "Montréal",
            lat: 45.48807, lon: -73.56237,
            image: "assets/spots/lac-mercier-illustration-ia.jpg",
            parking: "Stationnement du Centre Nautique.", 
            prix: "Navigation libre et gratuite.", 
            info: "Plan d'eau urbain parfait pour les sorties courtes, bien développé.",
            isFree: true,
            level: "facile"
        },
        { 
            name: "Fleuve Saint-Laurent (Île Sainte-Hélène)", 
            region: "Montréal",
            lat: 45.50176, lon: -73.52360,
            image: "assets/spots/lac-matapedia-baie-de-charlie/rive-boisee.jpg",
            parking: "Mise à l'eau du parc Jean-Drapeau / Île Sainte-Hélène.", 
            prix: "Accès gratuit depuis la côte.", 
            info: "Fjord urbain magnifique, eaux un peu plus agitées (niveau intermédiaire).",
            isFree: true,
            level: "sportif"
        },
        { 
            name: "Bassin olympique (Parc Jean-Drapeau)", 
            region: "Montréal",
            lat: 45.50176, lon: -73.52360,
            image: "assets/spots/lac-forbes.jpg",
            parking: "Mise à l'eau du parc Jean-Drapeau.", 
            prix: "Frais d'accès au parc (environ 5$).", 
            info: "Bassin calme du parc Jean-Drapeau, mieux identifié que l'ancien libellé Lac Masson.",
            isFree: false,
            level: "facile"
        }
    ];

    function getEmbeddedGpsPoint(point, fallbackLake = null) {
        const lat = Number(point?.lat ?? fallbackLake?.lat);
        const lon = Number(point?.lon ?? fallbackLake?.lon);
        if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
        return { ...point, lat, lon };
    }

    function buildSpotFromLake(lake) {
        const accessPoint = typeof getLakeAccessPoint === 'function'
            ? getLakeAccessPoint(lake)
            : getEmbeddedGpsPoint(lake?.accessPoint || lake?.access?.coordinates, lake);
        const parkingPoint = typeof getLakeParkingPoint === 'function'
            ? getLakeParkingPoint(lake)
            : getEmbeddedGpsPoint(lake?.parkingPoint);
        const directionsPoint = typeof getLakeDirectionsPoint === 'function'
            ? getLakeDirectionsPoint(lake)
            : (parkingPoint || accessPoint);

        return {
            name: lake.name,
            region: lake.region || "Mauricie",
            lat: Number(lake.lat),
            lon: Number(lake.lon),
            accessLat: Number(directionsPoint?.lat ?? lake.lat),
            accessLon: Number(directionsPoint?.lon ?? lake.lon),
            accessName: directionsPoint?.name || lake.parking?.location || lake.access?.description || lake.name,
            accessType: directionsPoint?.type || lake.access?.type || "Point d'accès",
            accessConfidence: directionsPoint?.confidence || "needs_verification",
            accessSource: directionsPoint?.source || "",
            launchLat: Number(accessPoint?.lat ?? lake.lat),
            launchLon: Number(accessPoint?.lon ?? lake.lon),
            hasParkingPoint: Boolean(parkingPoint),
            parkingDistanceMeters: parkingPoint?.distanceToAccessMeters ?? null,
            image: lake.mainImage || lake.gallery?.[0] || "assets/spots/lac-maskinonge.jpg",
            parking: lake.parking?.location || lake.access?.description || "Accès à vérifier",
            prix: lake.cost || lake.parking?.cost || (lake.isFree ? "Accès public gratuit." : "Frais à vérifier."),
            info: lake.description || lake.longDescription || "Vérifiez les conditions locales avant de partir.",
            isFree: Boolean(lake.isFree),
            level: lake.difficulty || "facile",
            paddleScore: Number(lake.paddleScore || 75),
            slug: lake.slug
        };
    }

    const spots = (typeof lacDatabase !== 'undefined' && Array.isArray(lacDatabase) && lacDatabase.length > 0)
        ? lacDatabase.map(buildSpotFromLake)
        : fallbackSpots.map(spot => ({
            ...spot,
            accessLat: Number(spot.accessLat ?? spot.lat),
            accessLon: Number(spot.accessLon ?? spot.lon),
            accessName: spot.accessName || spot.parking || spot.name,
            accessType: spot.accessType || "Point d'accès",
            accessConfidence: spot.accessConfidence || "legacy",
            accessSource: spot.accessSource || "Liste locale de secours",
            hasParkingPoint: false
        }));

    function getSpotAccessCoords(spot) {
        const lat = Number(spot?.accessLat ?? spot?.lat);
        const lon = Number(spot?.accessLon ?? spot?.lon);
        return {
            lat: Number.isFinite(lat) ? lat : 0,
            lon: Number.isFinite(lon) ? lon : 0
        };
    }

    function getSpotDirectionsUrl(spot) {
        const access = getSpotAccessCoords(spot);
        return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(access.lat)},${encodeURIComponent(access.lon)}`;
    }

    const popularQuebecSpotSlugs = [
        'baie-de-shawinigan-parc-de-la-baie',
        'parc-national-oka',
        'reservoir-choiniere-yamaska',
        'reservoir-poisson-blanc',
        'baie-de-beauport-quebec',
        'parc-national-plaisance'
    ];

    function escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getScoreBadgeClass(score) {
        if (score >= 80) return 'bg-emerald-100 text-emerald-700 border-emerald-200';
        if (score >= 60) return 'bg-amber-100 text-amber-700 border-amber-200';
        return 'bg-red-100 text-red-700 border-red-200';
    }

    function getGpsStatusLabel(spot) {
        const confidence = String(spot?.accessConfidence || '').toLowerCase();
        if (confidence === 'verified' || confidence === 'high') return 'GPS vérifié';
        if (confidence === 'medium') return 'GPS documenté';
        return 'GPS à valider';
    }

    function getGpsStatusClass(spot) {
        const confidence = String(spot?.accessConfidence || '').toLowerCase();
        if (confidence === 'verified' || confidence === 'high') {
            return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        }
        if (confidence === 'medium') {
            return 'bg-amber-50 text-amber-700 border-amber-200';
        }
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }

    function getShortSpotCopy(spot) {
        const text = spot.info || spot.parking || '';
        return text.length > 105 ? `${text.slice(0, 102).trim()}...` : text;
    }

    function renderPopularQuebecSpots() {
        const grid = document.getElementById('popularQuebecGrid');
        if (!grid) return;

        const cards = popularQuebecSpotSlugs
            .map(slug => spots.find(spot => spot.slug === slug))
            .filter(Boolean);

        grid.innerHTML = cards.map(spot => {
            const score = Number(spot.paddleScore || spot.score || 75);
            return `
                <a href="lac.html?lake=${encodeURIComponent(spot.slug)}&v=20260709-1" class="popular-spot-card group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:border-blue-400 transition-all">
                    <div class="relative h-44 overflow-hidden md:h-52">
                        <img src="${escapeHtml(spot.image)}" alt="${escapeHtml(spot.name)}" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                        <div class="absolute top-3 left-3 rounded-full border px-2 py-1 text-[9px] font-black uppercase tracking-wider ${getGpsStatusClass(spot)}">
                            ${escapeHtml(getGpsStatusLabel(spot))}
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col p-4">
                        <div class="flex items-start justify-between gap-2 mb-2">
                            <h4 class="font-black text-base leading-tight text-slate-900">${escapeHtml(spot.name)}</h4>
                            <span class="shrink-0 rounded-full border px-2 py-1 text-[10px] font-black ${getScoreBadgeClass(score)}">${score}</span>
                        </div>
                        <p class="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">${escapeHtml(spot.region)}</p>
                        <p class="text-sm text-slate-500 leading-snug min-h-[58px]">${escapeHtml(getShortSpotCopy(spot))}</p>
                        <div class="mt-auto flex items-center justify-between pt-4 text-xs font-black uppercase">
                            <span class="text-slate-500">${spot.isFree ? 'Accès gratuit' : 'Accès payant'}</span>
                            <span class="text-blue-600">Page →</span>
                        </div>
                    </div>
                </a>
            `;
        }).join('');

        initPopularSpotsCarousel(grid);
    }

    function initPopularSpotsCarousel(grid) {
        const previousButton = document.getElementById('popularSpotsPrev');
        const nextButton = document.getElementById('popularSpotsNext');
        if (!previousButton || !nextButton) return;

        const autoplayDelay = 3000;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let autoplayTimer = null;
        let carouselIsVisible = true;
        let carouselIsPaused = false;
        let touchResumeTimer = null;

        const getStep = () => {
            const card = grid.querySelector('.popular-spot-card');
            if (!card) return grid.clientWidth * 0.85;
            const gap = Number.parseFloat(getComputedStyle(grid).gap) || 20;
            const singleCardStep = card.getBoundingClientRect().width + gap;
            return window.matchMedia('(min-width: 640px)').matches
                ? singleCardStep * 2
                : singleCardStep;
        };

        const updateButtons = () => {
            const maxScroll = Math.max(0, grid.scrollWidth - grid.clientWidth);
            previousButton.disabled = grid.scrollLeft <= 4;
            nextButton.disabled = grid.scrollLeft >= maxScroll - 4;
        };

        const stopAutoplay = () => {
            if (autoplayTimer !== null) {
                window.clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
        };

        const startAutoplay = () => {
            stopAutoplay();
            const hasOverflow = grid.scrollWidth - grid.clientWidth > 4;
            if (reducedMotion.matches || !hasOverflow || !carouselIsVisible || carouselIsPaused || document.hidden) return;

            autoplayTimer = window.setInterval(() => {
                const maxScroll = Math.max(0, grid.scrollWidth - grid.clientWidth);
                const reachedEnd = grid.scrollLeft >= maxScroll - 4;
                if (reachedEnd) {
                    grid.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    grid.scrollBy({ left: getStep(), behavior: 'smooth' });
                }
            }, autoplayDelay);
        };

        const restartAutoplay = () => {
            if (!carouselIsPaused) startAutoplay();
        };

        const pauseCarousel = () => {
            carouselIsPaused = true;
            stopAutoplay();
        };

        const resumeCarousel = () => {
            carouselIsPaused = false;
            startAutoplay();
        };

        if (grid.dataset.carouselReady !== 'true') {
            previousButton.addEventListener('click', () => {
                grid.scrollBy({ left: -getStep(), behavior: 'smooth' });
                restartAutoplay();
            });
            nextButton.addEventListener('click', () => {
                grid.scrollBy({ left: getStep(), behavior: 'smooth' });
                restartAutoplay();
            });
            grid.addEventListener('keydown', event => {
                if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
                event.preventDefault();
                grid.scrollBy({
                    left: event.key === 'ArrowRight' ? getStep() : -getStep(),
                    behavior: 'smooth'
                });
                restartAutoplay();
            });
            grid.addEventListener('scroll', () => requestAnimationFrame(updateButtons), { passive: true });
            grid.addEventListener('mouseenter', pauseCarousel);
            grid.addEventListener('mouseleave', resumeCarousel);
            grid.addEventListener('focusin', pauseCarousel);
            grid.addEventListener('focusout', event => {
                if (!grid.contains(event.relatedTarget)) resumeCarousel();
            });
            grid.addEventListener('touchstart', () => {
                if (touchResumeTimer !== null) window.clearTimeout(touchResumeTimer);
                pauseCarousel();
            }, { passive: true });
            grid.addEventListener('touchend', () => {
                touchResumeTimer = window.setTimeout(resumeCarousel, 1800);
            }, { passive: true });
            window.addEventListener('resize', () => {
                updateButtons();
                restartAutoplay();
            });
            document.addEventListener('visibilitychange', restartAutoplay);
            reducedMotion.addEventListener?.('change', restartAutoplay);

            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver(entries => {
                    carouselIsVisible = entries[0]?.isIntersecting ?? true;
                    restartAutoplay();
                }, { threshold: 0.2 });
                observer.observe(grid);
            }

            grid.dataset.carouselReady = 'true';
        }

        requestAnimationFrame(() => {
            updateButtons();
            startAutoplay();
        });
    }

    function updateTrustStats() {
        const counts = spots.reduce((acc, spot) => {
            acc.total += 1;
            if (spot.isFree) acc.free += 1;
            if (spot.level === 'facile') acc.easy += 1;
            if (spot.level === 'sportif') acc.sport += 1;
            return acc;
        }, { total: 0, free: 0, easy: 0, sport: 0 });

        const setText = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        };

        setText('heroSpotCount', counts.total);
        setText('heroGpsCount', counts.total);
        setText('trustSpotCount', counts.total);
        setText('trustFreeCount', counts.free);
        setText('trustEasyCount', counts.easy);
        setText('trustSportCount', counts.sport);
    }

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

    const WEATHER_TIMEOUT_MS = 10000;
    const WEATHER_RETRY_DELAY_MS = 4000;
    const WEATHER_RETRY_DELAY_MAX_MS = 15000;
    const WEATHER_CACHE_TTL_MS = 10 * 60 * 1000;
    const weatherResponseCache = new Map();
    const WEATHER_DEBUG_ENABLED = (() => {
        try {
            const params = new URLSearchParams(window.location.search);
            return ['weather', 'meteo'].includes(String(params.get('debug') || '').toLowerCase());
        } catch (error) {
            return false;
        }
    })();

    function weatherDebugLog(eventName, details = {}) {
        if (!WEATHER_DEBUG_ENABLED) return;
        console.debug('[SpotPaddle météo]', eventName, details);
    }

    function getWeatherDebugSummary(error) {
        if (!error) return '';

        if (error.name === 'AbortError') {
            return 'Timeout: le proxy météo n’a pas répondu à temps.';
        }

        const status = error.status ? `HTTP ${error.status}` : error.name || 'Erreur';
        return `${status}: ${error.message}`;
    }

    function buildWeatherDebugPanel({ attempt = 0, startedAt = null, error = null, url = '' } = {}) {
        if (!WEATHER_DEBUG_ENABLED) return '';

        const elapsedSeconds = startedAt ? Math.round((Date.now() - startedAt) / 1000) : 0;
        const summary = getWeatherDebugSummary(error) || 'Aucune erreur pour le moment.';

        return `
            <details class="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-2 text-left text-[10px] text-slate-600">
                <summary class="cursor-pointer font-bold text-slate-700">Debug météo</summary>
                <dl class="mt-2 space-y-1">
                    <div><dt class="inline font-bold">Tentative:</dt> <dd class="inline">${attempt + 1}</dd></div>
                    <div><dt class="inline font-bold">Écoulé:</dt> <dd class="inline">${elapsedSeconds}s</dd></div>
                    <div><dt class="inline font-bold">Dernier état:</dt> <dd class="inline">${escapeHtml(summary)}</dd></div>
                    ${url ? `<div class="break-all"><dt class="font-bold">URL:</dt><dd>${escapeHtml(url)}</dd></div>` : ''}
                </dl>
            </details>
        `;
    }

    function getWeatherUrl(lat, lon, type = 'weather') {
        const params = new URLSearchParams({
            lat: String(lat),
            lon: String(lon)
        });
        if (type === 'forecast') params.set('type', 'forecast');
        return `https://meteo.spotpaddle.ca/meteo.php?${params.toString()}`;
    }

    async function fetchJsonWithTimeout(url, timeoutMs = WEATHER_TIMEOUT_MS, debugMeta = {}) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
        const startedAt = Date.now();

        weatherDebugLog('fetch:start', {
            url,
            timeoutMs,
            ...debugMeta
        });

        try {
            const response = await fetch(url, { signal: controller.signal, cache: 'default' });
            const durationMs = Date.now() - startedAt;

            weatherDebugLog('fetch:response', {
                url,
                durationMs,
                status: response.status,
                ok: response.ok,
                cache: response.headers.get('x-spotpaddle-cache'),
                rateRemaining: response.headers.get('x-ratelimit-remaining'),
                ...debugMeta
            });

            if (!response.ok) {
                const error = new Error(`HTTP ${response.status}`);
                error.status = response.status;
                throw error;
            }

            const data = await response.json();
            weatherDebugLog('fetch:success', {
                url,
                durationMs,
                code: data?.cod,
                city: data?.name,
                ...debugMeta
            });
            return data;
        } catch (error) {
            weatherDebugLog('fetch:error', {
                url,
                durationMs: Date.now() - startedAt,
                message: error.message,
                name: error.name,
                status: error.status || null,
                ...debugMeta
            });
            throw error;
        } finally {
            clearTimeout(timeoutId);
        }
    }

    async function fetchWeatherJson(lat, lon, type = 'weather') {
        const cacheKey = `${type}:${Number(lat).toFixed(4)}:${Number(lon).toFixed(4)}`;
        const now = Date.now();
        const cached = weatherResponseCache.get(cacheKey);

        if (cached?.data && cached.expiresAt > now) {
            weatherDebugLog('cache:hit', { cacheKey, type, lat, lon });
            return cached.data;
        }

        if (cached?.promise) {
            weatherDebugLog('cache:promise', { cacheKey, type, lat, lon });
            return cached.promise;
        }

        const url = getWeatherUrl(lat, lon, type);
        const promise = fetchJsonWithTimeout(url, WEATHER_TIMEOUT_MS, { cacheKey, type, lat, lon })
            .then(data => {
                weatherResponseCache.set(cacheKey, {
                    data,
                    expiresAt: Date.now() + WEATHER_CACHE_TTL_MS
                });
                return data;
            })
            .catch(error => {
                weatherResponseCache.delete(cacheKey);
                throw error;
            });

        weatherResponseCache.set(cacheKey, { promise, expiresAt: now + WEATHER_TIMEOUT_MS });
        return promise;
    }

    function waitForWeatherRetry(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function getWeatherRetryDelayMs(attempt) {
        return Math.min(WEATHER_RETRY_DELAY_MS + (attempt * 2000), WEATHER_RETRY_DELAY_MAX_MS);
    }

    let latestWeatherPopupRequestId = 0;

    function setMarkerPopupContent(marker, content, options, shouldOpen = true) {
        if (isMobileMapViewport() && (shouldOpen || isMobileSpotPopupVisible())) {
            if (map) map.closePopup();
            if (marker.closePopup) marker.closePopup();
            setMobileSpotPopupContent(content);
            return;
        }

        if (!map || typeof L === 'undefined' || !marker?.getLatLng) return;

        const openPopup = marker._spotPaddlePopup;
        if (openPopup?.isOpen?.()) {
            Object.assign(openPopup.options, options);
            openPopup.setContent(content);
            if (openPopup.update) openPopup.update();
            return;
        }

        const popup = L.popup(options, marker)
            .setLatLng(marker.getLatLng())
            .setContent(content);

        marker._spotPaddlePopup = popup;

        if (shouldOpen) {
            popup.openOn(map);
        }
    }

    function escapeInlineJsString(value) {
        return String(value ?? '')
            .replace(/\\/g, '\\\\')
            .replace(/'/g, "\\'")
            .replace(/\r/g, '')
            .replace(/\n/g, '\\n');
    }

    function buildSpotPopupActions(name, pageUrl, spotInfo, lat, lon) {
        const access = getSpotAccessCoords(spotInfo || { lat, lon });
        const safeName = escapeInlineJsString(name);

        return `
            <div class="flex flex-col gap-1.5">
                <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${access.lat},${access.lon}', '_blank')"
                    class="w-full py-2 bg-slate-800 text-white rounded-md font-bold text-[10px] uppercase hover:bg-black transition-colors flex items-center justify-center gap-1">
                    🚗 Itinéraire
                </button>
                <div class="grid grid-cols-2 gap-1.5">
                    <button onclick="ouvrirSidebar('${safeName}')" class="py-2 bg-blue-600 text-white rounded-md font-bold text-[10px] uppercase hover:bg-blue-700 transition-colors">
                        📍 Infos
                    </button>
                    <button onclick="toggleFavorite('${safeName}')" class="py-2 border border-yellow-500 text-yellow-600 rounded-md font-bold text-[10px] uppercase hover:bg-yellow-50 transition-colors">
                        ⭐ Favori
                    </button>
                </div>
                <a href="${pageUrl}" class="popup-action-link block w-full py-2 bg-emerald-600 text-white rounded-md font-bold text-[10px] uppercase hover:bg-emerald-700 transition-colors text-center">
                    📖 Page complète
                </a>
            </div>
        `;
    }

    function buildSpotPopupHeading(safeDisplayName, spotInfo = null, mode = 'center') {
        const region = spotInfo?.region || 'Région à confirmer';
        const safeRegion = escapeHtml(region);
        const regionEmoji = escapeHtml(getRegionEmoji(region));
        const wrapperClass = mode === 'bordered'
            ? 'mb-2 border-b border-blue-100 pb-2 text-center'
            : 'mb-2 text-center';
        const titleClass = mode === 'bordered'
            ? 'text-lg text-blue-800 font-bold italic leading-tight'
            : 'text-lg text-blue-800 font-bold leading-tight';

        return `
            <div class="${wrapperClass}">
                <h3 class="${titleClass}">${safeDisplayName}</h3>
                <p class="mt-1 inline-flex items-center justify-center rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-blue-700">
                    ${regionEmoji} ${safeRegion}
                </p>
            </div>
        `;
    }

    let nearbySpotSelection = [];

    function getMarkerScreenCenter(marker) {
        const icon = marker?.getElement?.();
        if (icon) {
            const rect = icon.getBoundingClientRect();
            return {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                rect
            };
        }

        if (!map || !marker?.getLatLng) return null;

        const mapRect = map.getContainer().getBoundingClientRect();
        const point = map.latLngToContainerPoint(marker.getLatLng());

        return {
            x: mapRect.left + point.x,
            y: mapRect.top + point.y - 20,
            rect: null
        };
    }

    function getSelectableMarkersNearClientPoint(clientX, clientY) {
        if (!map) return [];

        const paddingPx = isMobileMapViewport() ? 18 : 10;
        const fallbackRadiusPx = isMobileMapViewport() ? 56 : 36;

        return markers
            .filter(marker => marker?.spotInfo && map.hasLayer(marker))
            .map(marker => {
                const center = getMarkerScreenCenter(marker);
                if (!center) return null;

                const distancePx = Math.hypot(clientX - center.x, clientY - center.y);
                const isInsideIcon = center.rect
                    ? clientX >= center.rect.left - paddingPx &&
                        clientX <= center.rect.right + paddingPx &&
                        clientY >= center.rect.top - paddingPx &&
                        clientY <= center.rect.bottom + paddingPx
                    : distancePx <= fallbackRadiusPx;

                return isInsideIcon ? {
                    marker,
                    spot: marker.spotInfo,
                    distancePx
                } : null;
            })
            .filter(Boolean)
            .sort((a, b) => a.distancePx - b.distancePx || a.spot.name.localeCompare(b.spot.name));
    }

    function getNearbySelectableMarkers(sourceMarker, event) {
        const originalEvent = event?.originalEvent;
        if (Number.isFinite(originalEvent?.clientX) && Number.isFinite(originalEvent?.clientY)) {
            return getSelectableMarkersNearClientPoint(originalEvent.clientX, originalEvent.clientY);
        }

        if (!map || !sourceMarker?.getLatLng) return [];

        const sourcePoint = map.latLngToContainerPoint(sourceMarker.getLatLng());
        const radiusPx = isMobileMapViewport() ? 54 : 44;

        return markers
            .filter(marker => marker?.spotInfo && map.hasLayer(marker) && marker.getLatLng)
            .map(marker => {
                const point = map.latLngToContainerPoint(marker.getLatLng());
                return {
                    marker,
                    spot: marker.spotInfo,
                    distancePx: sourcePoint.distanceTo(point)
                };
            })
            .filter(entry => entry.distancePx <= radiusPx)
            .sort((a, b) => a.distancePx - b.distancePx || a.spot.name.localeCompare(b.spot.name));
    }

    function buildNearbySpotSelectorContent(entries) {
        const visibleEntries = entries.slice(0, 8);
        const hiddenCount = Math.max(0, entries.length - visibleEntries.length);

        return `
            <div class="text-sm p-2">
                <h3 class="text-lg text-blue-800 font-bold mb-1 text-center">Plusieurs spots ici</h3>
                <p class="text-center text-[10px] text-slate-500 mb-3">Choisis le marqueur exact à ouvrir.</p>
                <div class="max-h-60 overflow-y-auto space-y-2">
                    ${visibleEntries.map((entry, index) => `
                        <button type="button" onclick="selectNearbySpotFromPopup(${index})" class="w-full rounded-xl border border-blue-100 bg-white p-3 text-left shadow-sm transition hover:bg-blue-50">
                            <span class="block text-xs font-black text-blue-800">${escapeHtml(entry.spot.name)}</span>
                            <span class="mt-1 block text-[10px] font-semibold text-slate-500">${escapeHtml(entry.spot.region)} · ${escapeHtml(getGpsStatusLabel(entry.spot))}</span>
                        </button>
                    `).join('')}
                </div>
                ${hiddenCount ? `<p class="mt-2 text-center text-[10px] text-slate-500">Zoome pour voir ${hiddenCount} autre${hiddenCount > 1 ? 's' : ''} spot${hiddenCount > 1 ? 's' : ''} proche${hiddenCount > 1 ? 's' : ''}.</p>` : ''}
            </div>
        `;
    }

    function openNearbySpotSelector(marker, entries) {
        latestWeatherPopupRequestId += 1;
        nearbySpotSelection = entries;
        setMarkerPopupContent(marker, buildNearbySpotSelectorContent(entries), getSpotPopupOptions());
    }

    function selectNearbySpotFromPopup(index) {
        const entry = nearbySpotSelection[Number(index)];
        if (!entry) return;

        getMeteo(entry.spot.lat, entry.spot.lon, entry.spot.name, entry.marker, entry.spot);
    }

    function openSpotMarker(spot, marker, event) {
        const nearbyEntries = getNearbySelectableMarkers(marker, event);
        if (isMobileMapViewport() && nearbyEntries.length > 1) {
            openNearbySpotSelector(marker, nearbyEntries);
            return;
        }

        const selectedEntry = nearbyEntries[0] || { marker, spot };
        getMeteo(selectedEntry.spot.lat, selectedEntry.spot.lon, selectedEntry.spot.name, selectedEntry.marker, selectedEntry.spot);
    }

    function buildSpotWeatherLoadingContent(safeDisplayName, popupActions, spotInfo = null, attempt = 0, debugState = {}) {
        const detailText = attempt >= 3
            ? 'Le service météo prend plus de temps que prévu. On continue d’essayer.'
            : attempt > 0
            ? 'On attend la réponse du service météo.'
            : 'On récupère les données météo du spot.';

        return `
            <div class="text-sm p-2">
                ${buildSpotPopupHeading(safeDisplayName, spotInfo)}
                <div class="flex items-center justify-center gap-2 rounded-lg bg-blue-50 p-3 text-slate-700">
                    <span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600"></span>
                    <span class="text-xs font-semibold">Météo en chargement…</span>
                </div>
                <p class="mt-2 text-center text-[10px] text-slate-500">${detailText}</p>
                ${buildWeatherDebugPanel({ attempt, ...debugState })}
                <div class="mt-3">${popupActions}</div>
            </div>
        `;
    }

    function isWeatherPopupRequestActive(popupRequestId, marker) {
        if (popupRequestId !== latestWeatherPopupRequestId) return false;
        if (isMobileMapViewport()) return isMobileSpotPopupVisible();
        if (marker?._spotPaddlePopup?.isOpen) return marker._spotPaddlePopup.isOpen();
        if (marker?.isPopupOpen) return marker.isPopupOpen();
        return true;
    }

    // 5. API Logic
    async function getMeteo(lat, lon, name, marker, spotInfo = null) {
        const popupRequestId = ++latestWeatherPopupRequestId;
        const popupOptions = getSpotPopupOptions();
        const pageUrl = `lac.html?lake=${getLakePageSlug(name)}&v=20260709-1`;
        const safeDisplayName = escapeHtml(name);
        const popupActions = buildSpotPopupActions(name, pageUrl, spotInfo, lat, lon);
        const weatherUrl = getWeatherUrl(lat, lon);
        const requestStartedAt = Date.now();

        weatherDebugLog('popup:start', { popupRequestId, name, lat, lon, url: weatherUrl });

        setMarkerPopupContent(
            marker,
            buildSpotWeatherLoadingContent(safeDisplayName, popupActions, spotInfo, 0, {
                startedAt: requestStartedAt,
                url: weatherUrl
            }),
            popupOptions
        );

        let retryAttempt = 0;

        while (isWeatherPopupRequestActive(popupRequestId, marker)) {
            try {
                const data = await fetchWeatherJson(lat, lon);

                if (!isWeatherPopupRequestActive(popupRequestId, marker)) return;
                weatherDebugLog('popup:weather-ready', {
                    popupRequestId,
                    name,
                    attempts: retryAttempt + 1,
                    elapsedMs: Date.now() - requestStartedAt
                });

                const temp = Math.round(data.main.temp);
                const vent = Math.round(data.wind.speed * 3.6);
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

                // Création du panneau avec tes styles originaux
                const shouldKeepPopupOpen = !marker.isPopupOpen || marker.isPopupOpen();
                setMarkerPopupContent(marker, `
                <div class="text-sm p-1">
                    ${buildSpotPopupHeading(safeDisplayName, spotInfo, 'bordered')}

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

                    ${popupActions}
                </div>
                `, popupOptions, shouldKeepPopupOpen);

                setTimeout(() => {
                    if (map) map.invalidateSize();
                }, 100);

                return;
            } catch (error) {
                retryAttempt += 1;
                weatherDebugLog('popup:retry', {
                    popupRequestId,
                    name,
                    retryAttempt,
                    nextRetryMs: getWeatherRetryDelayMs(retryAttempt),
                    error: getWeatherDebugSummary(error)
                });

                if (!isWeatherPopupRequestActive(popupRequestId, marker)) return;

                const shouldKeepPopupOpen = !marker.isPopupOpen || marker.isPopupOpen();
                setMarkerPopupContent(
                    marker,
                    buildSpotWeatherLoadingContent(safeDisplayName, popupActions, spotInfo, retryAttempt, {
                        startedAt: requestStartedAt,
                        error,
                        url: weatherUrl
                    }),
                    popupOptions,
                    shouldKeepPopupOpen
                );
                await waitForWeatherRetry(getWeatherRetryDelayMs(retryAttempt));
            }
        }
    }

    function geolocaliser(event) {
    const btn = event?.currentTarget || { set innerText(value) {} };
    if (!navigator.geolocation) {
        alert("La géolocalisation n'est pas supportée par votre navigateur.");
        return;
    }

    if (!map || typeof L === 'undefined') {
        void ensureMainMapReady().then(isReady => {
            if (isReady) {
                geolocaliser({ currentTarget: btn });
                return;
            }
            alert("La carte n'est pas disponible pour le moment, mais les fiches de spots restent accessibles.");
        });
        return;
    }

    // On affiche un petit message de chargement
    if (btn) btn.innerText = "loading";
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
    function initMainMarkers() {
        if (!map || typeof L === 'undefined' || markers.length > 0) return;

        spots.forEach(spot => {
            const regionColor = getRegionColor(spot.region);
            const accessCoords = getSpotAccessCoords(spot);
            let marker = L.marker([accessCoords.lat, accessCoords.lon], {
                icon: L.icon({
                    iconUrl: createRegionMarkerIcon(regionColor),
                    iconSize: [32, 40],
                    iconAnchor: [16, 40],
                    popupAnchor: [0, -30],
                    className: 'marker-' + (spot.region?.toLowerCase().replace(/[ -]/g, '_') || 'mauricie')
                })
            }).addTo(map);

            marker.spotType = getSpotType(spot);
            marker.isFree = spot.isFree;
            marker.level = spot.level;
            marker.region = spot.region || "Mauricie";
            marker.regionColor = regionColor;
            marker.spotName = spot.name;
            marker.spotInfo = spot;
            markers.push(marker);
            marker.on('click', function(event) {
                openSpotMarker(spot, marker, event);
            });
        });
    }

    // Initialiser dynamiquement le sélecteur de spot et le filtre de région
    initSpotSelect();
    initRegionFilter();
    renderPopularQuebecSpots();
    updateTrustStats();

    // Fonction pour déterminer le type de spot
    function getSpotType(spot) {
        const normalize = value => String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
        const name = normalize(spot?.name);
        const access = normalize([spot?.accessType, spot?.parking].filter(Boolean).join(' '));

        if (name.includes('riviere') || name.includes('fleuve')) return 'riviere';
        if (name.includes('parc')) return 'parc';
        if (name.includes('lac') || name.includes('reservoir') || name.includes('baie')) return 'lac';
        if (access.includes('riviere') || access.includes('fleuve')) return 'riviere';
        if (access.includes('parc')) return 'parc';
        return 'lac'; // Défaut
    }

    // État global des filtres
    let currentFilters = {
        region: 'all',
        type: 'all',
        freeOnly: false,
        level: 'all'
    };

    scheduleMainMapInit();

    // Fonction de filtrage multi-critères
    function appliquerFiltres() {
        if (!map) return;

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
            if (statsDiv) statsDiv.classList.add('hidden');
            // Revenir à la vue initiale
            if (map) map.setView([initialView.lat, initialView.lon], initialView.zoom);
        } else {
            if (statsDiv) statsDiv.classList.remove('hidden');
            const stats = getRegionStats(region);
            document.getElementById('statTotal').textContent = stats.total;
            document.getElementById('statFree').textContent = stats.free;
            document.getElementById('statEasy').textContent = stats.easy;
            document.getElementById('statSport').textContent = stats.sport;
            
            // Centrer la map sur la région sélectionnée
            const regionMarkers = markers.filter(m => m.region === region);
            if (map && typeof L !== 'undefined' && regionMarkers.length > 0) {
                const bounds = L.latLngBounds(regionMarkers.map(m => m.getLatLng()));
                map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });
            }
        }
        
        appliquerFiltres();

        // Libérer l'espace sur la carte une fois qu'une région précise est choisie.
        if (!map) {
            void ensureMainMapReady().then(isReady => {
                if (isReady) filterRegion(region);
            });
        }

        const filterContent = document.getElementById('filterContent');
        if (region !== 'all' && filterContent && !filterContent.classList.contains('hidden')) {
            toggleFilterCollapse();
        }
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
        if (!map) void ensureMainMapReady();
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
        if (!map) void ensureMainMapReady();
    }

    function toggleFreeFilter(checked) {
        currentFilters.freeOnly = checked;
        appliquerFiltres();
        if (!map) void ensureMainMapReady();
    }

    // Fonction toggle thème
    function toggleTheme() {
        const body = document.body;
        const button = document.getElementById('themeToggle');
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            button.innerText = '☀️';
        } else {
            button.innerText = '🌙';
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

    function removeFavorite(name) {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]').filter(fav => fav !== name);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        showFavorites();
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
            item.className = 'bg-yellow-50 p-4 rounded-xl border border-yellow-100 hover:bg-yellow-100 transition mb-3';
            
            item.innerHTML = `
                <div class="flex items-start justify-between gap-3">
                    <button type="button" class="favorite-open text-left flex-1 min-w-0">
                        <h4 class="font-bold text-yellow-800">${name}</h4>
                        <p class="text-sm text-slate-600">${spot.parking || 'Accès disponible'}</p>
                    </button>
                    <button type="button" class="favorite-remove shrink-0 w-10 h-10 rounded-full bg-white text-red-500 hover:bg-red-50 border border-red-100 text-xl font-bold flex items-center justify-center" aria-label="Supprimer ${name} des favoris">&times;</button>
                </div>
            `;
            
            item.querySelector('.favorite-open').onclick = () => goToFavorite(name);
            item.querySelector('.favorite-remove').onclick = (event) => {
                event.stopPropagation();
                removeFavorite(name);
            };
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
            const accessCoords = getSpotAccessCoords(spot);
            // 1. Fermer la sidebar des favoris et l'overlay
            fermerFavoritesSidebar();

            // 2. Faire défiler la page jusqu'à la carte (pour être sûr de la voir)
            const carteElement = document.getElementById('carte');
            if (carteElement) {
                carteElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // 3. Centrer la carte sur le spot
            if (map) {
                map.setView([accessCoords.lat, accessCoords.lon], 13);
            } else {
                void ensureMainMapReady().then(isReady => {
                    if (isReady) goToFavorite(name);
                });
                return;
            }

            // 4. OUVRIR LA PAGE D'INFORMATION (la sidebar de gauche/droite selon ton code)
            // On utilise ta fonction existante ouvrirSidebar
            ouvrirSidebar(name);

            // 5. Simuler un clic pour ouvrir le popup météo sur la carte
            // On cherche le marqueur correspondant aux coordonnées
            if (map && typeof L !== 'undefined') {
                map.eachLayer(layer => {
                    if (layer instanceof L.Marker) {
                        const latLng = layer.getLatLng();
                        // On vérifie si les coordonnées correspondent (avec une petite marge pour la précision)
                        if (Math.abs(latLng.lat - accessCoords.lat) < 0.001 && Math.abs(latLng.lng - accessCoords.lon) < 0.001) {
                            layer.fire('click');
                        }
                    }
                });
            }
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
        const button = document.getElementById('menuToggle');
        if (!menu || !button) return;

        menu.classList.toggle('hidden');
        button.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));
    }

    function initMobileNavigation() {
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        if (!menuToggle || !mobileMenu || menuToggle.dataset.menuReady === 'true') return;

        menuToggle.dataset.menuReady = 'true';
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche le clic de "remonter" jusqu'au document
            toggleMobileMenu();
        });

        mobileMenu.addEventListener('click', (e) => {
            if (e.target.closest('a')) {
                mobileMenu.classList.add('hidden');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Fermer le menu mobile en cliquant ailleurs sur la page
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                menuToggle.setAttribute('aria-expanded', 'false');
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
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNavigation);
    } else {
        initMobileNavigation();
    }

    // 6. UI Functions
    function ouvrirSidebar(nom) {
        const lac = spots.find(s => s.name === nom);
        const water = getWaterCondition(); // <--- On récupère les infos ici

        if(lac) {
            const sidebar = document.getElementById('sidebar');
            const accessCoords = getSpotAccessCoords(lac);
            
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
                            <p class="text-slate-500 dark:text-slate-400 text-xs mt-2">${lac.accessName}</p>
                            <p class="text-slate-500 dark:text-slate-400 text-[11px] mt-2">L’itinéraire mène au stationnement ou à l’accès routier du spot.</p>
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
                        <div class="forecast-heading flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
                            <h4 class="font-black text-blue-600 dark:text-blue-400 uppercase text-[10px] tracking-widest flex items-center gap-1.5">
                                📅 Prévisions 3 jours (Paddle Live)
                            </h4>
                            <span class="forecast-heading-badge text-[9px] bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Vent max 💨</span>
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
                        <button onclick="partagerSpot('${lac.name.replace(/'/g, "\\'")}', ${accessCoords.lat}, ${accessCoords.lon})"
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
                        <button onclick="window.open('${getSpotDirectionsUrl(lac)}', '_blank')"
                                class="flex-[1.4] py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            <span>CAP SUR CE SPOT</span>
                        </button>
                    </div>
                    <a href="contribuer.html?mode=photo&spot=${encodeURIComponent(lac.name)}&slug=${encodeURIComponent(getLakePageSlug(lac.name))}"
                       class="w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-95">
                        <span>📷 AJOUTER UNE PHOTO</span>
                    </a>
                    <a href="lac.html?lake=${getLakePageSlug(lac.name)}&v=20260709-1"
                       class="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 active:scale-95">
                        <span>📖 VOIR LA PAGE COMPLÈTE</span>
                    </a>
                </div>
            `;
            
            sidebar.classList.remove('translate-x-full');
            document.getElementById('overlay').classList.remove('hidden');

            // Charger les prévisions météo réelles
            chargerPrevisions(lac.lat, lac.lon);
        }
    }

    async function chargerPrevisions(lat, lon) {
        const container = document.getElementById('sidebar-forecast');
        if (!container) return;

        try {
            const data = await fetchWeatherJson(lat, lon, 'forecast');

            if (!data || data.cod !== "200" || !Array.isArray(data.list)) {
                container.innerHTML = `
                    <div class="p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-2xl text-xs text-center border border-red-100 dark:border-red-900/30">
                        ⚠️ Impossible de charger les prévisions.
                    </div>
                `;
                return;
            }

            const dailyData = {};
            data.list.forEach(item => {
                const dateKey = item.dt_txt.split(' ')[0];
                if (!dailyData[dateKey]) dailyData[dateKey] = [];
                dailyData[dateKey].push(item);
            });

            const selectedDates = Object.keys(dailyData).sort().slice(0, 3);
            if (selectedDates.length === 0) {
                container.innerHTML = `
                    <div class="p-4 bg-slate-50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-300 rounded-2xl text-xs text-center border border-slate-100 dark:border-white/10">
                        Prévisions indisponibles pour ce spot.
                    </div>
                `;
                return;
            }

            let forecastHTML = `<div class="forecast-card space-y-1">`;

            selectedDates.forEach((dateKey) => {
                const dayRecords = dailyData[dateKey];
                let minTemp = Infinity;
                let maxTemp = -Infinity;
                let maxWind = 0;

                dayRecords.forEach(rec => {
                    minTemp = Math.min(minTemp, rec.main.temp_min);
                    maxTemp = Math.max(maxTemp, rec.main.temp_max);
                    maxWind = Math.max(maxWind, rec.wind.speed * 3.6);
                });

                const repRecord = dayRecords.find(rec => rec.dt_txt.includes("12:00:00")) ||
                                  dayRecords.find(rec => rec.dt_txt.includes("15:00:00")) ||
                                  dayRecords.find(rec => rec.dt_txt.includes("09:00:00")) ||
                                  dayRecords[Math.floor(dayRecords.length / 2)] ||
                                  dayRecords[0];

                const icon = repRecord.weather[0].icon;
                const desc = repRecord.weather[0].description;
                const dateObj = new Date(repRecord.dt * 1000);
                let dateStr = dateObj.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
                dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1).replace('.', '');

                let badgeClass = "forecast-badge-green";
                let statusDot = "🟢";
                const roundedWind = Math.round(maxWind);

                if (roundedWind > 18) {
                    badgeClass = "forecast-badge-red";
                    statusDot = "🔴";
                } else if (roundedWind >= 10) {
                    badgeClass = "forecast-badge-yellow";
                    statusDot = "🟡";
                }

                forecastHTML += `
                    <div class="forecast-row">
                        <div class="forecast-date-group flex flex-col">
                            <span class="forecast-date font-bold text-sm leading-tight">${dateStr}</span>
                            <span class="forecast-description text-[10px] capitalize leading-none mt-0.5">${desc}</span>
                        </div>
                        <div class="forecast-metrics flex items-center gap-3">
                            <span class="text-2xl">${getWeatherEmoji(icon)}</span>
                            <div class="forecast-temperature text-right">
                                <span class="text-xs font-semibold block">${Math.round(minTemp)}° / ${Math.round(maxTemp)}°C</span>
                            </div>
                            <div class="forecast-wind px-2.5 py-1 rounded-full text-[10px] font-bold ${badgeClass} min-w-[70px] text-center flex items-center justify-center gap-1 shadow-sm">
                                <span>${statusDot}</span>
                                <span>${roundedWind} <span class="text-[8px]">km/h</span></span>
                            </div>
                        </div>
                    </div>
                `;
            });

            forecastHTML += `</div>`;
            container.innerHTML = `
                <div class="forecast-heading flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
                    <h4 class="font-black text-blue-600 dark:text-blue-400 uppercase text-[10px] tracking-widest flex items-center gap-1.5">
                        📅 Prévisions 3 jours (Paddle Live)
                    </h4>
                    <span class="forecast-heading-badge text-[9px] bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Vent max 💨</span>
                </div>
                ${forecastHTML}
            `;
        } catch (error) {
            console.error("Erreur lors du chargement des prévisions:", error);
            container.innerHTML = `
                <div class="p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-2xl text-xs text-center border border-red-100 dark:border-red-900/30">
                    ⚠️ Erreur réseau.
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
        const accessCoords = getSpotAccessCoords(lac);

        if (map) {
            map.setView([accessCoords.lat, accessCoords.lon], 12);
        } else {
            void ensureMainMapReady().then(isReady => {
                if (isReady) map.setView([accessCoords.lat, accessCoords.lon], 12);
            });
        }
        const carteElement = document.getElementById('carte');
        if (carteElement) {
            carteElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        ouvrirSidebar(name);
        document.getElementById('spotSelect').value = "";
    }

    function resetView() {
        if (!map) {
            void ensureMainMapReady().then(isReady => {
                if (isReady) resetView();
            });
            return;
        }
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

    function getLakePageSlug(name) {
        if (typeof lacDatabase !== 'undefined') {
            const lake = lacDatabase.find(lac => lac.name === name);
            if (lake?.slug) return lake.slug;
        }
        return getSpotSlug(name);
    }

    async function partagerSpot(nom, lat, lon) {
        const slug = getSpotSlug(nom);
        const shareUrl = window.location.href.split('#')[0] + '#spot-' + slug;
        const textMessage = `Découvrez le spot de paddle "${nom}" au Québec ! Météo en direct, vent et conseils :`;
        
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
        if (!map) void ensureMainMapReady();
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
                                        <a href="lac.html?lake=${spot.slug}&v=20260709-1" class="block bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 p-4 rounded-lg hover:shadow-lg transition">
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
    window.selectNearbySpotFromPopup = selectNearbySpotFromPopup;
    window.findNearestSpots = findNearestSpots;
    window.showFavorites = showFavorites;
    window.fermerFavoritesSidebar = fermerFavoritesSidebar;
