(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/context/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Initialize from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const savedUser = localStorage.getItem("currentUser");
            const savedItems = localStorage.getItem("items");
            const savedUsers = localStorage.getItem("users");
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            }
            if (savedItems) {
                setItems(JSON.parse(savedItems));
            } else {
                const defaultItems = [
                    // Pentacity Items
                    {
                        id: "1",
                        name: "Chiller 01",
                        description: "Chiller utama Pentacity untuk pendinginan area mall utama.",
                        category: "HVAC",
                        quantity: 1,
                        location: "Pentacity Mall - Lantai Dasar",
                        latitude: -1.274373808475422,
                        longitude: 116.85697235129511,
                        status: "aktif",
                        createdBy: "admin",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        assetId: "AC-CH-01",
                        machineName: "Water Cooled Chiller",
                        brand: "York",
                        model: "YK Centrifugal",
                        serialNumber: "YK-2023-001",
                        assetTag: "AST-PENTA-HVAC-001",
                        statusMesin: "Normal",
                        tingkatPrioritas: "Critical",
                        kondisiFisik: "Bagus",
                        jamOperasional: "1250 Jam"
                    },
                    {
                        id: "2",
                        name: "Genset Utama",
                        description: "Genset backup Pentacity kapasitas 2000 kVA.",
                        category: "Power",
                        quantity: 1,
                        location: "Pentacity Mall - Basement",
                        latitude: -1.274383808475422,
                        longitude: 116.85698235129511,
                        status: "aktif",
                        createdBy: "admin",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        assetId: "PW-GN-01",
                        machineName: "Diesel Generator Set",
                        brand: "Caterpillar",
                        model: "C175-16",
                        serialNumber: "CAT-2022-552",
                        assetTag: "AST-PENTA-PWR-001",
                        statusMesin: "Standby",
                        tingkatPrioritas: "High",
                        kondisiFisik: "Bagus",
                        jamOperasional: "150 Jam"
                    },
                    {
                        id: "3",
                        name: "Lift Penumpang 1",
                        description: "Lift pengunjung utama area atrium.",
                        category: "Transport",
                        quantity: 1,
                        location: "Pentacity Mall - Lt 1",
                        latitude: -1.274363808475422,
                        longitude: 116.85696235129511,
                        status: "aktif",
                        createdBy: "admin",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        assetId: "TR-LF-01",
                        machineName: "Passenger Elevator",
                        brand: "Schindler",
                        model: "5500",
                        serialNumber: "SCH-2023-112",
                        assetTag: "AST-PENTA-TRN-001",
                        statusMesin: "Normal",
                        tingkatPrioritas: "High",
                        kondisiFisik: "Bagus",
                        jamOperasional: "3400 Jam"
                    },
                    {
                        id: "4",
                        name: "Pompa Transfer 1",
                        description: "Pompa air bersih transfer ke roof tank.",
                        category: "Plumbing",
                        quantity: 1,
                        location: "Pentacity Mall - Roof",
                        latitude: -1.274393808475422,
                        longitude: 116.85699235129511,
                        status: "aktif",
                        createdBy: "admin",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        assetId: "PL-PM-01",
                        machineName: "Centrifugal Pump",
                        brand: "Grundfos",
                        model: "CR 45",
                        serialNumber: "GRU-2023-882",
                        assetTag: "AST-PENTA-PLB-001",
                        statusMesin: "Normal",
                        tingkatPrioritas: "Medium",
                        kondisiFisik: "Sedang",
                        jamOperasional: "5000 Jam"
                    },
                    {
                        id: "5",
                        name: "CCTV Lobby",
                        description: "Kamera pengawas lobby utama view entrance.",
                        category: "Security",
                        quantity: 1,
                        location: "Pentacity Mall - Lobby",
                        latitude: -1.274353808475422,
                        longitude: 116.85695235129511,
                        status: "aktif",
                        createdBy: "admin",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        assetId: "SC-CC-01",
                        machineName: "IP Camera Dome",
                        brand: "Hikvision",
                        model: "DS-2CD2143G0-I",
                        serialNumber: "HIK-2023-991",
                        assetTag: "AST-PENTA-SEC-001",
                        statusMesin: "Normal",
                        tingkatPrioritas: "Medium",
                        kondisiFisik: "Bagus",
                        jamOperasional: "8760 Jam"
                    },
                    // Ewalk Items
                    {
                        id: "6",
                        name: "Chiller 02",
                        description: "Chiller utama Ewalk kapasitas 500 TR.",
                        category: "HVAC",
                        quantity: 1,
                        location: "Ewalk Mall - Lantai Dasar",
                        latitude: -1.273477250525186,
                        longitude: 116.85904186348648,
                        status: "aktif",
                        createdBy: "admin",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        assetId: "AC-CH-02",
                        machineName: "Air Cooled Chiller",
                        brand: "Trane",
                        model: "RTAF",
                        serialNumber: "TRN-2021-443",
                        assetTag: "AST-EWALK-HVAC-002",
                        statusMesin: "Maintenance",
                        tingkatPrioritas: "Critical",
                        kondisiFisik: "Sedang",
                        jamOperasional: "12000 Jam"
                    },
                    {
                        id: "7",
                        name: "Panel LVMDP",
                        description: "Panel distribusi utama Ewalk supply tenant.",
                        category: "Power",
                        quantity: 1,
                        location: "Ewalk Mall - Basement",
                        latitude: -1.273487250525186,
                        longitude: 116.85905186348648,
                        status: "aktif",
                        createdBy: "admin",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        assetId: "PW-PN-01",
                        machineName: "Main Distribution Panel",
                        brand: "Schneider",
                        model: "Prisma iPM",
                        serialNumber: "SCH-2020-112",
                        assetTag: "AST-EWALK-PWR-001",
                        statusMesin: "Normal",
                        tingkatPrioritas: "Critical",
                        kondisiFisik: "Bagus",
                        jamOperasional: "24000 Jam"
                    },
                    {
                        id: "8",
                        name: "Escalator Lt. 1",
                        description: "Eskalator naik ke Lt 1 area food court.",
                        category: "Transport",
                        quantity: 1,
                        location: "Ewalk Mall - Lt Dasar",
                        latitude: -1.273467250525186,
                        longitude: 116.85903186348648,
                        status: "aktif",
                        createdBy: "admin",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        assetId: "TR-ES-01",
                        machineName: "Escalator",
                        brand: "Otis",
                        model: "Link",
                        serialNumber: "OT-2021-665",
                        assetTag: "AST-EWALK-TRN-001",
                        statusMesin: "Rusak",
                        tingkatPrioritas: "High",
                        kondisiFisik: "Buruk",
                        jamOperasional: "15000 Jam"
                    },
                    {
                        id: "9",
                        name: "Hydrant Pump",
                        description: "Pompa pemadam kebakaran electric main pump.",
                        category: "Safety",
                        quantity: 1,
                        location: "Ewalk Mall - Pump Room",
                        latitude: -1.273497250525186,
                        longitude: 116.85906186348648,
                        status: "aktif",
                        createdBy: "admin",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        assetId: "SF-HP-01",
                        machineName: "Fire Hydrant Pump",
                        brand: "Ebara",
                        model: "FSHA",
                        serialNumber: "EBA-2022-331",
                        assetTag: "AST-EWALK-SFT-001",
                        statusMesin: "Standby",
                        tingkatPrioritas: "Critical",
                        kondisiFisik: "Bagus",
                        jamOperasional: "50 Jam"
                    },
                    {
                        id: "10",
                        name: "Sound System",
                        description: "Sistem audio atrium untuk event.",
                        category: "Audio",
                        quantity: 1,
                        location: "Ewalk Mall - Atrium",
                        latitude: -1.273457250525186,
                        longitude: 116.85902186348648,
                        status: "aktif",
                        createdBy: "admin",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        assetId: "AU-SY-01",
                        machineName: "PA System",
                        brand: "TOA",
                        model: "VX-2000",
                        serialNumber: "TOA-2023-111",
                        assetTag: "AST-EWALK-AUD-001",
                        statusMesin: "Normal",
                        tingkatPrioritas: "Low",
                        kondisiFisik: "Bagus",
                        jamOperasional: "2000 Jam"
                    }
                ];
                setItems(defaultItems);
                localStorage.setItem("items", JSON.stringify(defaultItems));
            }
            if (savedUsers) {
                setUsers(JSON.parse(savedUsers));
            } else {
                // Initialize with default users
                const defaultUsers = [
                    {
                        id: "1",
                        name: "admin",
                        password: "password",
                        role: "admin",
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: "2",
                        name: "superadmin",
                        password: "password",
                        role: "superadmin",
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: "3",
                        name: "epi",
                        password: "epi",
                        role: "user",
                        createdAt: new Date().toISOString()
                    }
                ];
                setUsers(defaultUsers);
                localStorage.setItem("users", JSON.stringify(defaultUsers));
            }
            setIsLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    const login = async (username, password)=>{
        // Simulate login - for demo purposes
        const foundUser = users.find((u)=>u.name === username);
        if (foundUser && foundUser.password === password) {
            setUser(foundUser);
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
        } else {
            throw new Error("Nama Pengguna atau Kata Sandi tidak valid");
        }
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("currentUser");
    };
    const addItem = (itemData)=>{
        const newItem = {
            ...itemData,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        const newItems = [
            ...items,
            newItem
        ];
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
    };
    const updateItem = (id, itemData)=>{
        const newItems = items.map((item)=>item.id === id ? {
                ...item,
                ...itemData,
                updatedAt: new Date().toISOString()
            } : item);
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
    };
    const deleteItem = (id)=>{
        const newItems = items.filter((item)=>item.id !== id);
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
    };
    const addUser = (userData)=>{
        const newUser = {
            ...userData,
            id: Date.now().toString(),
            createdAt: new Date().toISOString()
        };
        const newUsers = [
            ...users,
            newUser
        ];
        setUsers(newUsers);
        localStorage.setItem("users", JSON.stringify(newUsers));
    };
    const updateUser = (id, userData)=>{
        const newUsers = users.map((u)=>u.id === id ? {
                ...u,
                ...userData
            } : u);
        setUsers(newUsers);
        localStorage.setItem("users", JSON.stringify(newUsers));
        if (user?.id === id) {
            const updatedUser = {
                ...user,
                ...userData
            };
            setUser(updatedUser);
            localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        }
    };
    const deleteUser = (id)=>{
        const newUsers = users.filter((u)=>u.id !== id);
        setUsers(newUsers);
        localStorage.setItem("users", JSON.stringify(newUsers));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoading,
            login,
            logout,
            items,
            addItem,
            updateItem,
            deleteItem,
            users,
            addUser,
            updateUser,
            deleteUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/auth-context.tsx",
        lineNumber: 426,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "OVOmwOHCrB14y2Srlzn2MO3wvhM=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@vercel/analytics/dist/next/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/nextjs/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/nextjs/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
"use client";
;
;
// package.json
var name = "@vercel/analytics";
var version = "1.5.0";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return typeof window !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return props.scriptSrc;
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
        return `${props.basePath}/insights/script.js`;
    }
    return "/_vercel/insights/script.js";
}
// src/generic.ts
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    setMode(props.mode);
    initQueue();
    if (props.beforeSend) {
        (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
    const src = getScriptSrc(props);
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
    script.dataset.sdkv = version;
    if (props.disableAutoTrack) {
        script.dataset.disableAutoTrack = "1";
    }
    if (props.endpoint) {
        script.dataset.endpoint = props.endpoint;
    } else if (props.basePath) {
        script.dataset.endpoint = `${props.basePath}/insights`;
    }
    if (props.dsn) {
        script.dataset.dsn = props.dsn;
    }
    script.onerror = ()=>{
        const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);
    };
    if (isDevelopment() && props.debug === false) {
        script.dataset.debug = "false";
    }
    document.head.appendChild(script);
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
// src/react/utils.ts
function getBasePath() {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined" || typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === "undefined") {
        return void 0;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/react/index.tsx
function Analytics(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            var _a;
            if (props.beforeSend) {
                (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
            }
        }
    }["Analytics.useEffect"], [
        props.beforeSend
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            inject({
                framework: props.framework || "react",
                basePath: props.basePath ?? getBasePath(),
                ...props.route !== void 0 && {
                    disableAutoTrack: true
                },
                ...props
            });
        }
    }["Analytics.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            if (props.route && props.path) {
                pageview({
                    route: props.route,
                    path: props.path
                });
            }
        }
    }["Analytics.useEffect"], [
        props.route,
        props.path
    ]);
    return null;
}
;
var useRoute = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!params) {
        return {
            route: null,
            path
        };
    }
    const finalParams = Object.keys(params).length ? params : Object.fromEntries(searchParams.entries());
    return {
        route: computeRoute(path, finalParams),
        path
    };
};
function getBasePath2() {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined" || typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === "undefined") {
        return void 0;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/nextjs/index.tsx
function AnalyticsComponent(props) {
    const { route, path } = useRoute();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Analytics, {
        path,
        route,
        ...props,
        basePath: getBasePath2(),
        framework: "next"
    });
}
function Analytics2(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AnalyticsComponent, {
        ...props
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_8d1ac4eb._.js.map