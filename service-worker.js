const CACHE_NAME = 'percussion-instruments-cache-v3'; // Increment the version to trigger the update
const urlsToCache = [
    '/',
    '/index.html',
    '/app.js',
    '/style.css',
    '/add-instrument.html',
    '/add-instrument.js',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.js'
    // Add other URLs here as needed
];

// Precache on install
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting()) // Take control immediately
    );
});

// Serve from cache, update cache in background if online
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    // Update the cache with new version
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse.clone()));
                    return networkResponse;
                }).catch(() => {/* Handle exceptions, e.g., network failure */});
                // Return cached response immediately, update cache in the background
                return cachedResponse || fetchPromise;
            })
    );
});

// Cleanup old caches on activation
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => cacheName !== CACHE_NAME)
                    .map(cacheName => caches.delete(cacheName))
            );
        }).then(() => self.clients.claim()) // Claim clients immediately
    );
});

//todo
self.addEventListener('sync', function(event) {
    if (event.tag === 'sync-instruments') {
        event.waitUntil(syncInstruments());
    }
});

//todo
async function handleAddInstrumentSync(event) {
    try {
        const instrumentData = await getInstrumentDataFromCache(event);
        if (instrumentData) {
            const response = await sendInstrumentDataToServer(instrumentData);
            if (response.ok) {
                console.log('Instrument data sent successfully');
                clearInstrumentDataFromCache(event);
            } else {
                console.error('Failed to send instrument data');
            }
        } else {
            console.error('No instrument data found in cache');
        }
    } catch (error) {
        console.error('Error handling add instrument sync:', error);
    }
}
