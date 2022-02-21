self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('sw-cache').then(function(cache) {
            return cache.add('index.html', 'style/main.css', 'pwa/404.html');
        })
    );
});

self.addEventListener('fetch',function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});