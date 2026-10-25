// AVI CENTER Service Worker v2.0
const CACHE_NAME = 'avi-center-v55';
const STATIC_ASSETS = [
  '/',
  '/shikpul',
  '/instalazia',
  '/madrich-manulin',
  '/ru',
  '/manifest.json',
  '/css/v55.css',
  '/css/heebo-v50.woff2',
  '/js/site-53.js',
  '/js/v54.js',
  '/images/icon-whatsapp.png',
  '/images/icon-waze.png',
  '/images/favicon-180.png'
];

// Install — cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache first for images/fonts, network first for HTML
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Cache-first for images and fonts
  if (
    url.pathname.match(/\.(webp|jpg|png|woff2|woff)$/) ||
    url.hostname.includes('fonts.gstatic')
  ) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        return cached || fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Network-first for everything else
  if (
    url.hostname !== self.location.hostname &&
    !url.hostname.includes('fonts.googleapis') &&
    !url.hostname.includes('fonts.gstatic')
  ) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // FIX: don't overwrite the cache with HTML documents — a response
        // can arrive truncated on a flaky connection (still status 200),
        // and caching it would serve broken, syntax-error-inducing HTML
        // to the next visitor who hits a network failure. Documents rely
        // on the known-complete copy saved once during install() instead.
        if (response && response.status === 200 && event.request.destination !== 'document') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
        });
      })
  );
});
