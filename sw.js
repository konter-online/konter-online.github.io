// AYSA ALFAZA: PWA online-only. No catalog or admin data is cached.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* Browser handles every request over network. */ });
