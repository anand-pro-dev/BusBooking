'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "456f06d4f39271fec7ced485a07af790",
"assets/AssetManifest.json": "d4306a4fed45a9ad9bf03f2d29e1f9f1",
"assets/assets/images/armchair-seat_svgrepo.com.png": "351bbb21cf1bb53522ac6641e42894eb",
"assets/assets/images/bar-code-svgrepo-com%25201.png": "f6baee028a4293cedb73e95f336f7690",
"assets/assets/images/bus-pop-ZFvYxoWeiV.png": "e07e913c443bcffd6430c515adafcf28",
"assets/assets/images/bus.png": "3b02c56377b3b4c2ba947deefed6afde",
"assets/assets/images/bus_svgrepo.com.png": "94f49cbe70af0c0eef2e9a613421a3b6",
"assets/assets/images/bus_toot.png": "9a87f50bb9d3fa58a7e2fb436fd80406",
"assets/assets/images/calendar-range.png": "a9445a6d3833a25cba8d7bc35d7d8852",
"assets/assets/images/Calendar.png": "7cf600843fb9d72b3de080b16465b5ae",
"assets/assets/images/clock_svgrepo.com.png": "74e6efe0a8186c3433dd8b31af8dc427",
"assets/assets/images/Ellipse%25201.png": "269ef4c5f8b2905e5675fdf86f340751",
"assets/assets/images/Ellipse%2520586%2520(1).png": "814068e8414373a449c0ca290e5de4fd",
"assets/assets/images/Ellipse%2520586%2520(2).png": "f0903832cc4154eb5cb9477c51462b69",
"assets/assets/images/Ellipse%2520586%2520(3).png": "3c606e75640cbd57e067940fd9860318",
"assets/assets/images/Ellipse%2520586.png": "f2007921b60ff57f8f0ccd8fcace0802",
"assets/assets/images/Group%2520457.png": "66a012d0aca8398b60656153ccb4410a",
"assets/assets/images/Group%2520602.png": "8d7a1ec5985ccfac854258de9f18c6ac",
"assets/assets/images/Group.png": "efbec6fad7402f4f4e687acc8b6ae549",
"assets/assets/images/Happy%2520Bunch%2520Chatting.png": "ec71b4954c1ac13520a1635d2ffb7abc",
"assets/assets/images/Header%2520+%2520Body.png": "7a05dabebaa6cfb4ed823a2cbb838f8c",
"assets/assets/images/Illustration.png": "2d67b0480323a7433358cd65f226bf0f",
"assets/assets/images/image%252078.png": "a2710ec530e699fbe8eebbfe30cbbcd2",
"assets/assets/images/Location%2520Icon.png": "0ffff2a9539d520396e128598ddd8a16",
"assets/assets/images/Love%2520Icon.png": "506323ce109539793c80b7e75a1ae009",
"assets/assets/images/luggage_svgrepo.com.png": "795e1f5706795068aceedc9075d0b8ea",
"assets/assets/images/Mapsicle%2520Map.png": "3e883d66c1cdf0c2824e54bd3658984e",
"assets/assets/images/message-square%2520(1).png": "4d10bfd96284758cf63f293c8ec67c06",
"assets/assets/images/Notification.png": "e6d89118995c0e19f7d30765a436cdad",
"assets/assets/images/person-male_svgrepo.com.png": "4db11d0766dcec9c0ec0a900f4301d84",
"assets/assets/images/Profile.png": "a63de1910981e51e50563b5d0bdbcd28",
"assets/assets/images/Rectangle%25201.png": "c24d1c64e4e8e1884f8f5e32bf1472bb",
"assets/assets/images/Rectangle%2520569%2520(1).png": "2112a6d64eb56ef9ea58beae2b31e2a8",
"assets/assets/images/Rectangle%2520569.png": "7da321fce72fdbdacbac37f635357958",
"assets/assets/images/Rectangle%2520571.png": "3471dffb7591be86454337d6dccfadea",
"assets/assets/images/safety-seat-car_svgrepo.com.png": "544d8402df8b0053941f84c588402655",
"assets/assets/images/school%2520bus%2520(2).png": "98e8d1322a1e3ce35a75d63fc9653780",
"assets/assets/images/SCHOOL%2520BUS%2520(3).png": "da370f5bfc4e8a94717ee12d6275acec",
"assets/assets/images/seat%25201.png": "7faf387335fdf9b73cd8d62ed1a24167",
"assets/assets/images/signup_illustration.png": "58cc9ed7c88057373fa27c77e0b4f7c0",
"assets/assets/images/student-with-school-bus-front-school%25201.png": "ec49625f521312cdd1dc288dcfd22af3",
"assets/assets/images/Subtract.png": "701ebcb309773402382f138ef5f4f7da",
"assets/assets/images/Swap.png": "26f4ff2dc6024da060a989b83c0f5787",
"assets/assets/images/Ticket.png": "db73d7923c84b403317e45dde0f839cf",
"assets/assets/images/user_svgrepo.com.png": "0d9be80df6d2a6821344060a13d6fd28",
"assets/assets/images/Vector%2520(1).png": "b4b68f5257f1a1bcd464f3a729aa2980",
"assets/assets/images/Vector.png": "bcdcbc57c8e9a784a1c8f95070e6ce1c",
"assets/assets/images/wi-fi_svgrepo.com.png": "6aa617ba0e723e10dfa2589c6d8c1cc7",
"assets/assets/images/x-square.png": "6602f44789615dc78461d3ce772130a2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4a3d488c3ebbdc12d72baf22b1c8e9b1",
"assets/NOTICES": "580e2f6d8be3925a5bf9159da34483a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0dde20d96b2e65cb94939436f55d1c6e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b0402978b626c84ad2ea24570628f12c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8194cdcd83db8ff2c37aecebcaeadd0a",
"/": "8194cdcd83db8ff2c37aecebcaeadd0a",
"main.dart.js": "1a788cdf3be6e51a8775a99492408d70",
"manifest.json": "2dd973c17ae2d8508a83a23dae1fca4a",
"version.json": "fb333c77340f273577e6382c2233cf37"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
