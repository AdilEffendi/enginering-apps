(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/dashboard-items-map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/node_modules_maplibre-gl_dist_maplibre-gl_d52c492a.css",
    "included": [
      "[project]/node_modules/maplibre-gl/dist/maplibre-gl.css [app-client] (css)"
    ]
  },
  "static/chunks/components_dashboard-items-map_tsx_301ce61e._.js",
  "static/chunks/components_dashboard-items-map_tsx_dc0b7643._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/dashboard-items-map.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);