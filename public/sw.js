console.warn("ws file is public folder");

var CACHE_VERSION = "app-v1";
var CACHE_FILES = ["index.html"];

this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(CACHE_FILES);
    })
  );
});

this.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key, i) {
          if (key !== CACHE_VERSION) {
            return caches.delete(keys[i]);
          }
        })
      );
    })
  );
});

this.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (res) {
      if (res) {
        return res;
      }
      return requestBackend(event);
    })
  );
});

function requestBackend(event) {
  var url = event.request.clone();
  return fetch(url).then(function (res) {
    //if not a valid response send the error
    if (!res || res.status !== 200 || res.type !== "basic") {
      return res;
    }

    var response = res.clone();

    caches.open(CACHE_VERSION).then(function (cache) {
      cache.put(event.request, response);
    });

    return res;
  });
}
// let cacheData = "FixFat";
// this.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(cacheData).then((cache) => {
//       cache.addAll([
//         "favicon.ico",
//         "/index.html",
//         "/logo192.png",
//         "/static/js/bundle.js",
//         "/maskable-icon_x72",
//         "/maskable-icon_x96",
//         "/",
//         "/pengukuran",
//         "/riwayat",
//         "/informasi",
//         "https://fonts.googleapis.com/css?family=Rubik",
//         "https://code.highcharts.com/maps/highmaps.js",
//         "https://code.highcharts.com/maps/modules/exporting.js",
//         "https://bmi-data-web.web.app/static/css/main.efab1741.css",
//         "https://bmi-data-web.web.app/static/js/main.4581732c.js",
//         "https://bmi-data-web.web.app/static/media/loginPicture.588c0c7a405358d2724b.png",
//         "https://fonts.gstatic.com/s/rubik/v21/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFV0U1.woff2",
//         "https://bmi-data-web.web.app/static/media/nucleo-icons.69d4ebfdc94eab6fdb6e.woff2",
//       ]);
//     })
//   );
// });

// this.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((resp) => {
//       if (resp) {
//         return resp;
//       }
//     })
//   );
// });
