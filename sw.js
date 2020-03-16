workbox.core.setCacheNameDetails({
  prefix: "typo.ir",
  suffix: "v1",
  precache: "precache",
  runtime: "runtime-cache"
});
workbox.skipWaiting();
workbox.clientsClaim();
workbox.routing.setDefaultHandler(workbox.strategies.networkFirst());
workbox.precaching.precacheAndRoute([]);
workbox.routing.registerRoute(
  /images/,
  workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
  /^https?:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate()
);
