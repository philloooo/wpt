// Some user agents only offer app installation if there is a SW and it handles
// offline requests.

const cacheVersion = "1.1";
const CACHE_NAME = `cache-v${cacheVersion}`;

// The resources cached by this service worker.
const resources = [
  "id-member-manual-tentative.html",
  "id-member-manual-tentative.js",
  "id-member-manual-tentative-v1.html",
  "id-member-manual-tentative-v1.webmanifest",
  "id-member-manual-tentative-v2.html",
  "id-member-manual-tentative-v2.webmanifest",
];

// Load all resources for this service worker.
const precache = async () => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(resources);
};

// Get a resource from the cache.
const fromCache = async request => {
  const cache = await caches.open(CACHE_NAME);
  return await cache.match(request.url);
};

// Attempt to get resources from the network first, fallback to the cache if we're
// offline.
const networkFallbackToCache = async request => {
  try {
    const response = await fetch(request);
    if (response.ok) return response;
  } catch (err) {
    return await fromCache(request);
  }
};

// When we have a new service worker, update the caches and swap immediately.
self.addEventListener("install", e => {
  e.waitUntil(precache().then(() => self.skipWaiting()));
});

// Claim existing clients.
self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});

// When a resource need to be fetched, check whether it is
// contained in the cache and return the cached version, otherwise
// get it from the network.
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(e.request).then(response => {
        return response || fetch(e.request);
      });
    })
  );
});
