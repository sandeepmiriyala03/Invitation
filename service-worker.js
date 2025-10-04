const CACHE_NAME = 'yagnavalkya-pwa-v1'; // Change version number to update cache
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/pwa.js',
   
    // Add paths to your main CSS, fonts, and other critical assets here
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