if (!self.define) {
  let e,
    c = {};
  const i = (i, s) => (
    (i = new URL(i + ".js", s).href),
    c[i] ||
      new Promise((c) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = c), document.head.appendChild(e);
        } else (e = i), importScripts(i), c();
      }).then(() => {
        let e = c[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, n) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (c[r]) return;
    let o = {};
    const t = (e) => i(e, r),
      f = { module: { uri: r }, exports: o, require: t };
    c[r] = Promise.all(s.map((e) => f[e] || t(e))).then((e) => (n(...e), o));
  };
}
define(["./workbox-c29a8bcf"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: "assets/icon-192.png",
          revision: "5794a986c718814fef46bcf6599f3e13",
        },
        {
          url: "assets/icon-384.png",
          revision: "0f22cac9c181968c0af42cd6a95372db",
        },
        {
          url: "assets/icon-512.png",
          revision: "9046850343c7ecb95d2f71f0f720a60b",
        },
        { url: "dexie.min.js", revision: "284616c5481a9d805e9c82c243e8d3f4" },
        { url: "index.css", revision: "50cebacb3bae3fff0c252b7c67d3f530" },
        { url: "index.html", revision: "d3e5498b2265850c5cc47c61506c2767" },
        { url: "index.js", revision: "142fec3edf948a1cf22dec544d43205d" },
        { url: "manifest.json", revision: "868cc9b9096934ddaef322814985c5db" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});