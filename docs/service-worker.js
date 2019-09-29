/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.e2e04eba9aca3e3a2e61c41f3869a548.js"
);

workbox.core.setCacheNameDetails({prefix: "scrum-poker-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/^https:\/\/my-json-server.typicode\.com\//, new workbox.strategies.NetworkFirst({ "cacheName":"cached-api","networkTimeoutSeconds":2, plugins: [new workbox.expiration.Plugin({ maxEntries: 50, maxAgeSeconds: 86400, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
