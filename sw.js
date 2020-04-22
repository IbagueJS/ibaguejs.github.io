importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/14be7749d68bc4d181f7.js",
    "revision": "62e42eab5550abf7ed62db5bba6189ac"
  },
  {
    "url": "/_nuxt/2ca4dc0f1a1310eaf642.js",
    "revision": "3a57a780f89b66ff9edbc096fc8e9f2a"
  },
  {
    "url": "/_nuxt/40306f8b16d394659000.js",
    "revision": "7bca42af1da8ac613a558f9736e32bc0"
  },
  {
    "url": "/_nuxt/5b29cd37a1bdebfb628d.js",
    "revision": "ad167ea18f130253d0591ee0e66cc166"
  },
  {
    "url": "/_nuxt/6e7b2c7cb25e6de18780.js",
    "revision": "a1589c2ffcb60f06348578e58aadf631"
  },
  {
    "url": "/_nuxt/7f306cf55827d5ffc593.js",
    "revision": "2bb32f647c2caa8e0246ac52079c132f"
  },
  {
    "url": "/_nuxt/aedec9d2aa677bf64d3e.js",
    "revision": "794d3de8f6bfe24ff204c857c8ceb5e4"
  }
], {
  "cacheId": "ibaguejs",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
