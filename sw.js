/**
 * sw.js — Kastigo · Service Worker v6.0
 * Estrategia: Cache-first para assets estáticos,
 *             Network-first para data.js (siempre fresco).
 */

const CACHE_NAME = 'kastigo-v14';
const CACHE_STATIC = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/css/widgets.css',
  '/js/app.js',
  '/js/widgets.js',
  '/assets/img/logo.png',
  '/assets/img/og-image.jpg',
  '/manifest.json',
  'https: //cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https: //fonts.googleapis.com/css2?family=Bebas+Neue&family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap'
];

// Instalar: cachear assets estáticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        CACHE_STATIC.map(url => cache.add(url).catch(() => { }))
      );
    }).then(() => self.skipWaiting())
  );
});

// Activar: limpiar caches antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first para data.js, cache-first para el resto
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // data.js siempre desde la red (medidas siempre frescas)
  if (url.pathname.includes('data.js')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  // Todo lo demás: cache-first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => caches.match('/index.html'));
    })
  );
});