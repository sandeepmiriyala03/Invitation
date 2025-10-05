const CACHE_NAME = 'శ్రీ యాజ్ఞవల్క్య-v2'; // Update this version to trigger new cache

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
  '/llm telugu.mp4',
  '/శ్రీ యాజ్ఞవల్క్య జయంతుత్సవ సంఘం, పిఠాపురం.pdf'
];

// Install event: cache files and activate immediately
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing and caching app shell');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate event: delete old caches and take control immediately
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating and removing old cache');
  event.waitUntil(
    caches.keys().then(cacheNames => 
      Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch event: serve from cache first, then network
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
