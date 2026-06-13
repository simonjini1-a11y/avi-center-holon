// AVI CENTER Service Worker v2.0
const CACHE_NAME = 'avi-center-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/Screenshot_20260514_142314_Gallery.webp',
  '/images/Screenshot_20260514_142334_Gallery.webp',
  '/images/Screenshot_20260514_142523_Gallery.webp',
  '/images/Screenshot_20260514_142624_Gallery.webp',
  '/images/Screenshot_20260514_142640_Gallery.webp',
  '/images/Screenshot_20260514_142741_Gallery.webp',
  '/images/Screenshot_20260514_142817_Gallery.webp',
  '/images/Screenshot_20260514_142839_Gallery.webp',
  'https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;800;900&family=Bebas+Neue&display=swap'
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
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
      })
  );
});
