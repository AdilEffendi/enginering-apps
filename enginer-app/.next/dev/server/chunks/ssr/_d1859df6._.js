module.exports = [
"[project]/components/login-page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/auth-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LoginPage() {
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("password");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setIsLoading(true);
        try {
            await login(username, password);
            router.push("/dashboard");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Terjadi kesalahan");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-[#F8FAFC] p-4 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1E293B] rounded-full mix-blend-multiply filter blur-[128px] opacity-5 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/login-page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#334155] rounded-full mix-blend-multiply filter blur-[128px] opacity-5 animate-pulse delay-700"
                    }, void 0, false, {
                        fileName: "[project]/components/login-page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/login-page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[550px] relative z-10 animate-in fade-in zoom-in-95 duration-1000 ease-out",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 border border-slate-100/50 backdrop-blur-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 text-center space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1E293B] text-white shadow-lg mb-6 shadow-slate-200 animate-in slide-in-from-top-8 duration-1000 delay-200 fill-mode-backwards",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "w-8 h-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/login-page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/login-page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/login-page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-[#1E293B] tracking-tight animate-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-backwards",
                                    children: "Selamat Datang Kembali"
                                }, void 0, false, {
                                    fileName: "[project]/components/login-page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-sm animate-in slide-in-from-bottom-4 duration-1000 delay-400 fill-mode-backwards",
                                    children: "Akses dasbor teknik Anda"
                                }, void 0, false, {
                                    fileName: "[project]/components/login-page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/login-page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 animate-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-backwards",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1",
                                                    children: "Nama Pengguna"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login-page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: username,
                                                        onChange: (e)=>setUsername(e.target.value),
                                                        className: "w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E293B]/10 focus:border-[#1E293B] focus:bg-white hover:bg-white hover:shadow-md hover:border-[#1E293B]/30 transition-all duration-300 transform motion-safe:hover:scale-[1.01] motion-safe:focus:scale-[1.01]",
                                                        placeholder: "Masukkan nama pengguna Anda",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/login-page.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login-page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/login-page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1",
                                                    children: "Kata Sandi"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login-page.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "password",
                                                        value: password,
                                                        onChange: (e)=>setPassword(e.target.value),
                                                        className: "w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E293B]/10 focus:border-[#1E293B] focus:bg-white hover:bg-white hover:shadow-md hover:border-[#1E293B]/30 transition-all duration-300 transform motion-safe:hover:scale-[1.01] motion-safe:focus:scale-[1.01]",
                                                        placeholder: "Masukkan kata sandi Anda",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/login-page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/login-page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/login-page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/login-page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 animate-in fade-in zoom-in-95 duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-red-500 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/login-page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm font-medium",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/components/login-page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/login-page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "w-full bg-[#1E293B] text-white py-4 rounded-xl font-semibold hover:bg-[#0F172A] hover:shadow-lg hover:shadow-[#1E293B]/20 active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4 animate-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-backwards",
                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "animate-spin h-5 w-5",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        className: "opacity-25",
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10",
                                                        stroke: "currentColor",
                                                        strokeWidth: "4",
                                                        fill: "none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/login-page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        className: "opacity-75",
                                                        fill: "currentColor",
                                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/login-page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/login-page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this),
                                            "Sedang Masuk..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/login-page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this) : "Masuk"
                                }, void 0, false, {
                                    fileName: "[project]/components/login-page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/login-page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 pt-8 border-t border-slate-100 animate-in fade-in duration-1000 delay-1000 fill-mode-backwards",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
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
                                            name: "user",
                                            password: "password",
                                            role: "user",
                                            createdAt: new Date().toISOString()
                                        },
                                        {
                                            id: "4",
                                            name: "epi",
                                            password: "epi",
                                            role: "user",
                                            createdAt: new Date().toISOString()
                                        }
                                    ];
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
                                    localStorage.setItem("users", JSON.stringify(defaultUsers));
                                    localStorage.setItem("items", JSON.stringify(defaultItems));
                                    localStorage.removeItem("currentUser");
                                    alert("Pengguna demo divalidasi!");
                                },
                                className: "w-full text-slate-400 text-xs font-medium hover:text-[#1E293B] transition-colors flex items-center justify-center gap-2 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "w-4 h-4 group-hover:rotate-180 transition-transform duration-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login-page.tsx",
                                                lineNumber: 431,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 3v5h5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login-page.tsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login-page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 21h5v-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login-page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/login-page.tsx",
                                        lineNumber: 421,
                                        columnNumber: 15
                                    }, this),
                                    "Muat Ulang Data Demo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/login-page.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/login-page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/login-page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/login-page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/login-page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login-page.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const { user, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading && user) {
            router.push("/dashboard");
        }
    }, [
        user,
        isLoading,
        router
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-background"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 19,
            columnNumber: 12
        }, this);
    }
    return user ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 22,
        columnNumber: 24
    }, this);
}
}),
];

//# sourceMappingURL=_d1859df6._.js.map