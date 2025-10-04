const CACHE_NAME = 'yagnavalkya-invitation-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/32px-Om_symbol.svg.png',
  '/Image 9.jpg',
  '/TTD Video.mp4',
  // Add all images and assets you want to cache for offline
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});