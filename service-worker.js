self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("security-alert-cache").then(cache => {
      return cache.addAll([
        "/",
        "/Securityalerts.html",
        "/alerts.css",
        "/alerts.js"
      ]);
    })
  );
});

