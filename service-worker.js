const CACHE = "wang-xiaobei-english-v1";
const ASSETS = ["./","./index.html","./styles.css","./fallback.js","./manifest.webmanifest","./icon.svg"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))));

