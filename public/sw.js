console.warn("ws file is public folder");

let cacheData = "FixFat";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "favicon.ico",
        "/index.html",
        "/logo192.png",
        "/static/js/bundle.js",
        "/maskable-icon_x72",
        "/maskable-icon_x96",
        "/",
        "/pengukuran",
        "/riwayat",
        "/informasi",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      if (resp) {
        return resp;
      }
    })
  );
});
