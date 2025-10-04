const CACHE_NAME = ' శ్రీ యాజ్ఞవల్క్య'; // Change version number to update cache
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/pwa.js',
   '/Image 1.jpg',
  '/Image 2.jpg',
  '/Image 3.jpg',
  '/Image 4.jpg',
  '/Image 5.jpg',
  '/Image 6.jpg',
  '/Image 7.jpg',
  '/Image 8.jpg',
  '/Image 9.jpg',
  '/Image 10.jpg',
  '/Image 11.jpg',
  '/Image 12.jpg',
  '/Image 13.jpg',
  '/Image 14.jpg',
    '/TTD Video.mp4',
    '/శ్రీ యాజ్ఞవల్క్యు సుప్రభాత స్తోత్రం.mp3',
    '/శ్రీ యాజ్ఞవల్క్య జయంతుత్సవ సంఘం, పిఠాపురం.pdf'
];

// Install event: Caches the initial assets
self.addEventListener('install', event => {
    console.log('[Service Worker] Install Event: Caching App Shell');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                // Forces the waiting worker to activate immediately
                return self.skipWaiting(); 
            })
    );
});

// Activate event: Cleans up old caches
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activate Event: Cleaning old caches');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Takes control of clients immediately upon activation
            return self.clients.claim();
        })
    );
});

// Fetch event: Tries to serve assets from cache first, then falls back to network
self.addEventListener('fetch', event => {
    // Only handle GET requests from the same origin
    if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // Fallback to network
                return fetch(event.request);
            })
    );
});