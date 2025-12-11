( () => {
    "use strict";
    var e = {
        535: () => {
            try {
                self["workbox:cacheable-response:7.0.0"] && _()
            } catch (e) {}
        }
        ,
        136: () => {
            try {
                self["workbox:core:7.0.0"] && _()
            } catch (e) {}
        }
        ,
        626: () => {
            try {
                self["workbox:expiration:7.0.0"] && _()
            } catch (e) {}
        }
        ,
        447: () => {
            try {
                self["workbox:precaching:7.0.0"] && _()
            } catch (e) {}
        }
        ,
        227: () => {
            try {
                self["workbox:routing:7.0.0"] && _()
            } catch (e) {}
        }
        ,
        390: () => {
            try {
                self["workbox:strategies:7.0.0"] && _()
            } catch (e) {}
        }
    }
      , t = {};
    function s(n) {
        var a = t[n];
        if (void 0 !== a)
            return a.exports;
        var r = t[n] = {
            exports: {}
        };
        return e[n](r, r.exports, s),
        r.exports
    }
    ( () => {
        s(390);
        const e = {
            cacheWillUpdate: async ({response: e}) => 200 === e.status || 0 === e.status ? e : null
        };
        s(136);
        const t = {
            googleAnalytics: "googleAnalytics",
            precache: "precache-v2",
            prefix: "workbox",
            runtime: "runtime",
            suffix: "undefined" != typeof registration ? registration.scope : ""
        }
          , n = e => [t.prefix, e, t.suffix].filter((e => e && e.length > 0)).join("-")
          , a = e => e || n(t.precache)
          , r = e => e || n(t.runtime)
          , i = (e, ...t) => {
            let s = e;
            return t.length > 0 && (s += ` :: ${JSON.stringify(t)}`),
            s
        }
        ;
        class c extends Error {
            constructor(e, t) {
                super(i(e, t)),
                this.name = e,
                this.details = t
            }
        }
        const o = e => new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`), "");
        function h(e, t) {
            const s = new URL(e);
            for (const e of t)
                s.searchParams.delete(e);
            return s.href
        }
        class l {
            constructor() {
                this.promise = new Promise(( (e, t) => {
                    this.resolve = e,
                    this.reject = t
                }
                ))
            }
        }
        const u = new Set;
        function d(e) {
            return new Promise((t => setTimeout(t, e)))
        }
        function p(e) {
            return "string" == typeof e ? new Request(e) : e
        }
        class f {
            constructor(e, t) {
                this._cacheKeys = {},
                Object.assign(this, t),
                this.event = t.event,
                this._strategy = e,
                this._handlerDeferred = new l,
                this._extendLifetimePromises = [],
                this._plugins = [...e.plugins],
                this._pluginStateMap = new Map;
                for (const e of this._plugins)
                    this._pluginStateMap.set(e, {});
                this.event.waitUntil(this._handlerDeferred.promise)
            }
            async fetch(e) {
                const {event: t} = this;
                let s = p(e);
                if ("navigate" === s.mode && t instanceof FetchEvent && t.preloadResponse) {
                    const e = await t.preloadResponse;
                    if (e)
                        return e
                }
                const n = this.hasCallback("fetchDidFail") ? s.clone() : null;
                try {
                    for (const e of this.iterateCallbacks("requestWillFetch"))
                        s = await e({
                            request: s.clone(),
                            event: t
                        })
                } catch (e) {
                    if (e instanceof Error)
                        throw new c("plugin-error-request-will-fetch",{
                            thrownErrorMessage: e.message
                        })
                }
                const a = s.clone();
                try {
                    let e;
                    e = await fetch(s, "navigate" === s.mode ? void 0 : this._strategy.fetchOptions);
                    for (const s of this.iterateCallbacks("fetchDidSucceed"))
                        e = await s({
                            event: t,
                            request: a,
                            response: e
                        });
                    return e
                } catch (e) {
                    throw n && await this.runCallbacks("fetchDidFail", {
                        error: e,
                        event: t,
                        originalRequest: n.clone(),
                        request: a.clone()
                    }),
                    e
                }
            }
            async fetchAndCachePut(e) {
                const t = await this.fetch(e)
                  , s = t.clone();
                return this.waitUntil(this.cachePut(e, s)),
                t
            }
            async cacheMatch(e) {
                const t = p(e);
                let s;
                const {cacheName: n, matchOptions: a} = this._strategy
                  , r = await this.getCacheKey(t, "read")
                  , i = Object.assign(Object.assign({}, a), {
                    cacheName: n
                });
                s = await caches.match(r, i);
                for (const e of this.iterateCallbacks("cachedResponseWillBeUsed"))
                    s = await e({
                        cacheName: n,
                        matchOptions: a,
                        cachedResponse: s,
                        request: r,
                        event: this.event
                    }) || void 0;
                return s
            }
            async cachePut(e, t) {
                const s = p(e);
                await d(0);
                const n = await this.getCacheKey(s, "write");
                if (!t)
                    throw new c("cache-put-with-no-response",{
                        url: o(n.url)
                    });
                const a = await this._ensureResponseSafeToCache(t);
                if (!a)
                    return !1;
                const {cacheName: r, matchOptions: i} = this._strategy
                  , l = await self.caches.open(r)
                  , f = this.hasCallback("cacheDidUpdate")
                  , g = f ? await async function(e, t, s, n) {
                    const a = h(t.url, s);
                    if (t.url === a)
                        return e.match(t, n);
                    const r = Object.assign(Object.assign({}, n), {
                        ignoreSearch: !0
                    })
                      , i = await e.keys(t, r);
                    for (const t of i)
                        if (a === h(t.url, s))
                            return e.match(t, n)
                }(l, n.clone(), ["__WB_REVISION__"], i) : null;
                try {
                    await l.put(n, f ? a.clone() : a)
                } catch (e) {
                    if (e instanceof Error)
                        throw "QuotaExceededError" === e.name && await async function() {
                            for (const e of u)
                                await e()
                        }(),
                        e
                }
                for (const e of this.iterateCallbacks("cacheDidUpdate"))
                    await e({
                        cacheName: r,
                        oldResponse: g,
                        newResponse: a.clone(),
                        request: n,
                        event: this.event
                    });
                return !0
            }
            async getCacheKey(e, t) {
                const s = `${e.url} | ${t}`;
                if (!this._cacheKeys[s]) {
                    let n = e;
                    for (const e of this.iterateCallbacks("cacheKeyWillBeUsed"))
                        n = p(await e({
                            mode: t,
                            request: n,
                            event: this.event,
                            params: this.params
                        }));
                    this._cacheKeys[s] = n
                }
                return this._cacheKeys[s]
            }
            hasCallback(e) {
                for (const t of this._strategy.plugins)
                    if (e in t)
                        return !0;
                return !1
            }
            async runCallbacks(e, t) {
                for (const s of this.iterateCallbacks(e))
                    await s(t)
            }
            *iterateCallbacks(e) {
                for (const t of this._strategy.plugins)
                    if ("function" == typeof t[e]) {
                        const s = this._pluginStateMap.get(t)
                          , n = n => {
                            const a = Object.assign(Object.assign({}, n), {
                                state: s
                            });
                            return t[e](a)
                        }
                        ;
                        yield n
                    }
            }
            waitUntil(e) {
                return this._extendLifetimePromises.push(e),
                e
            }
            async doneWaiting() {
                let e;
                for (; e = this._extendLifetimePromises.shift(); )
                    await e
            }
            destroy() {
                this._handlerDeferred.resolve(null)
            }
            async _ensureResponseSafeToCache(e) {
                let t = e
                  , s = !1;
                for (const e of this.iterateCallbacks("cacheWillUpdate"))
                    if (t = await e({
                        request: this.request,
                        response: t,
                        event: this.event
                    }) || void 0,
                    s = !0,
                    !t)
                        break;
                return s || t && 200 !== t.status && (t = void 0),
                t
            }
        }
        class g {
            constructor(e={}) {
                this.cacheName = r(e.cacheName),
                this.plugins = e.plugins || [],
                this.fetchOptions = e.fetchOptions,
                this.matchOptions = e.matchOptions
            }
            handle(e) {
                const [t] = this.handleAll(e);
                return t
            }
            handleAll(e) {
                e instanceof FetchEvent && (e = {
                    event: e,
                    request: e.request
                });
                const t = e.event
                  , s = "string" == typeof e.request ? new Request(e.request) : e.request
                  , n = "params"in e ? e.params : void 0
                  , a = new f(this,{
                    event: t,
                    request: s,
                    params: n
                })
                  , r = this._getResponse(a, s, t);
                return [r, this._awaitComplete(r, a, s, t)]
            }
            async _getResponse(e, t, s) {
                let n;
                await e.runCallbacks("handlerWillStart", {
                    event: s,
                    request: t
                });
                try {
                    if (n = await this._handle(t, e),
                    !n || "error" === n.type)
                        throw new c("no-response",{
                            url: t.url
                        })
                } catch (a) {
                    if (a instanceof Error)
                        for (const r of e.iterateCallbacks("handlerDidError"))
                            if (n = await r({
                                error: a,
                                event: s,
                                request: t
                            }),
                            n)
                                break;
                    if (!n)
                        throw a
                }
                for (const a of e.iterateCallbacks("handlerWillRespond"))
                    n = await a({
                        event: s,
                        request: t,
                        response: n
                    });
                return n
            }
            async _awaitComplete(e, t, s, n) {
                let a, r;
                try {
                    a = await e
                } catch (r) {}
                try {
                    await t.runCallbacks("handlerDidRespond", {
                        event: n,
                        request: s,
                        response: a
                    }),
                    await t.doneWaiting()
                } catch (e) {
                    e instanceof Error && (r = e)
                }
                if (await t.runCallbacks("handlerDidComplete", {
                    event: n,
                    request: s,
                    response: a,
                    error: r
                }),
                t.destroy(),
                r)
                    throw r
            }
        }
        function w(e, t) {
            const s = t();
            return e.waitUntil(s),
            s
        }
        s(447);
        function m(e) {
            if (!e)
                throw new c("add-to-cache-list-unexpected-type",{
                    entry: e
                });
            if ("string" == typeof e) {
                const t = new URL(e,location.href);
                return {
                    cacheKey: t.href,
                    url: t.href
                }
            }
            const {revision: t, url: s} = e;
            if (!s)
                throw new c("add-to-cache-list-unexpected-type",{
                    entry: e
                });
            if (!t) {
                const e = new URL(s,location.href);
                return {
                    cacheKey: e.href,
                    url: e.href
                }
            }
            const n = new URL(s,location.href)
              , a = new URL(s,location.href);
            return n.searchParams.set("__WB_REVISION__", t),
            {
                cacheKey: n.href,
                url: a.href
            }
        }
        class _ {
            constructor() {
                this.updatedURLs = [],
                this.notUpdatedURLs = [],
                this.handlerWillStart = async ({request: e, state: t}) => {
                    t && (t.originalRequest = e)
                }
                ,
                this.cachedResponseWillBeUsed = async ({event: e, state: t, cachedResponse: s}) => {
                    if ("install" === e.type && t && t.originalRequest && t.originalRequest instanceof Request) {
                        const e = t.originalRequest.url;
                        s ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e)
                    }
                    return s
                }
            }
        }
        class y {
            constructor({precacheController: e}) {
                this.cacheKeyWillBeUsed = async ({request: e, params: t}) => {
                    const s = (null == t ? void 0 : t.cacheKey) || this._precacheController.getCacheKeyForURL(e.url);
                    return s ? new Request(s,{
                        headers: e.headers
                    }) : e
                }
                ,
                this._precacheController = e
            }
        }
        let b, v;
        async function R(e, t) {
            let s = null;
            if (e.url) {
                s = new URL(e.url).origin
            }
            if (s !== self.location.origin)
                throw new c("cross-origin-copy-response",{
                    origin: s
                });
            const n = e.clone()
              , a = {
                headers: new Headers(n.headers),
                status: n.status,
                statusText: n.statusText
            }
              , r = t ? t(a) : a
              , i = function() {
                if (void 0 === b) {
                    const e = new Response("");
                    if ("body"in e)
                        try {
                            new Response(e.body),
                            b = !0
                        } catch (e) {
                            b = !1
                        }
                    b = !1
                }
                return b
            }() ? n.body : await n.blob();
            return new Response(i,r)
        }
        class C extends g {
            constructor(e={}) {
                e.cacheName = a(e.cacheName),
                super(e),
                this._fallbackToNetwork = !1 !== e.fallbackToNetwork,
                this.plugins.push(C.copyRedirectedCacheableResponsesPlugin)
            }
            async _handle(e, t) {
                const s = await t.cacheMatch(e);
                return s || (t.event && "install" === t.event.type ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
            }
            async _handleFetch(e, t) {
                let s;
                const n = t.params || {};
                if (!this._fallbackToNetwork)
                    throw new c("missing-precache-entry",{
                        cacheName: this.cacheName,
                        url: e.url
                    });
                {
                    0;
                    const a = n.integrity
                      , r = e.integrity
                      , i = !r || r === a;
                    if (s = await t.fetch(new Request(e,{
                        integrity: "no-cors" !== e.mode ? r || a : void 0
                    })),
                    a && i && "no-cors" !== e.mode) {
                        this._useDefaultCacheabilityPluginIfNeeded();
                        await t.cachePut(e, s.clone());
                        0
                    }
                }
                return s
            }
            async _handleInstall(e, t) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const s = await t.fetch(e);
                if (!await t.cachePut(e, s.clone()))
                    throw new c("bad-precaching-response",{
                        url: e.url,
                        status: s.status
                    });
                return s
            }
            _useDefaultCacheabilityPluginIfNeeded() {
                let e = null
                  , t = 0;
                for (const [s,n] of this.plugins.entries())
                    n !== C.copyRedirectedCacheableResponsesPlugin && (n === C.defaultPrecacheCacheabilityPlugin && (e = s),
                    n.cacheWillUpdate && t++);
                0 === t ? this.plugins.push(C.defaultPrecacheCacheabilityPlugin) : t > 1 && null !== e && this.plugins.splice(e, 1)
            }
        }
        C.defaultPrecacheCacheabilityPlugin = {
            cacheWillUpdate: async ({response: e}) => !e || e.status >= 400 ? null : e
        },
        C.copyRedirectedCacheableResponsesPlugin = {
            cacheWillUpdate: async ({response: e}) => e.redirected ? await R(e) : e
        };
        class x {
            constructor({cacheName: e, plugins: t=[], fallbackToNetwork: s=!0}={}) {
                this._urlsToCacheKeys = new Map,
                this._urlsToCacheModes = new Map,
                this._cacheKeysToIntegrities = new Map,
                this._strategy = new C({
                    cacheName: a(e),
                    plugins: [...t, new y({
                        precacheController: this
                    })],
                    fallbackToNetwork: s
                }),
                this.install = this.install.bind(this),
                this.activate = this.activate.bind(this)
            }
            get strategy() {
                return this._strategy
            }
            precache(e) {
                this.addToCacheList(e),
                this._installAndActiveListenersAdded || (self.addEventListener("install", this.install),
                self.addEventListener("activate", this.activate),
                this._installAndActiveListenersAdded = !0)
            }
            addToCacheList(e) {
                const t = [];
                for (const s of e) {
                    "string" == typeof s ? t.push(s) : s && void 0 === s.revision && t.push(s.url);
                    const {cacheKey: e, url: n} = m(s)
                      , a = "string" != typeof s && s.revision ? "reload" : "default";
                    if (this._urlsToCacheKeys.has(n) && this._urlsToCacheKeys.get(n) !== e)
                        throw new c("add-to-cache-list-conflicting-entries",{
                            firstEntry: this._urlsToCacheKeys.get(n),
                            secondEntry: e
                        });
                    if ("string" != typeof s && s.integrity) {
                        if (this._cacheKeysToIntegrities.has(e) && this._cacheKeysToIntegrities.get(e) !== s.integrity)
                            throw new c("add-to-cache-list-conflicting-integrities",{
                                url: n
                            });
                        this._cacheKeysToIntegrities.set(e, s.integrity)
                    }
                    if (this._urlsToCacheKeys.set(n, e),
                    this._urlsToCacheModes.set(n, a),
                    t.length > 0) {
                        t.join(", ");
                        1
                    }
                }
            }
            install(e) {
                return w(e, (async () => {
                    const t = new _;
                    this.strategy.plugins.push(t);
                    for (const [t,s] of this._urlsToCacheKeys) {
                        const n = this._cacheKeysToIntegrities.get(s)
                          , a = this._urlsToCacheModes.get(t)
                          , r = new Request(t,{
                            integrity: n,
                            cache: a,
                            credentials: "same-origin"
                        });
                        await Promise.all(this.strategy.handleAll({
                            params: {
                                cacheKey: s
                            },
                            request: r,
                            event: e
                        }))
                    }
                    const {updatedURLs: s, notUpdatedURLs: n} = t;
                    return {
                        updatedURLs: s,
                        notUpdatedURLs: n
                    }
                }
                ))
            }
            activate(e) {
                return w(e, (async () => {
                    const e = await self.caches.open(this.strategy.cacheName)
                      , t = await e.keys()
                      , s = new Set(this._urlsToCacheKeys.values())
                      , n = [];
                    for (const a of t)
                        s.has(a.url) || (await e.delete(a),
                        n.push(a.url));
                    return {
                        deletedURLs: n
                    }
                }
                ))
            }
            getURLsToCacheKeys() {
                return this._urlsToCacheKeys
            }
            getCachedURLs() {
                return [...this._urlsToCacheKeys.keys()]
            }
            getCacheKeyForURL(e) {
                const t = new URL(e,location.href);
                return this._urlsToCacheKeys.get(t.href)
            }
            getIntegrityForCacheKey(e) {
                return this._cacheKeysToIntegrities.get(e)
            }
            async matchPrecache(e) {
                const t = e instanceof Request ? e.url : e
                  , s = this.getCacheKeyForURL(t);
                if (s) {
                    return (await self.caches.open(this.strategy.cacheName)).match(s)
                }
            }
            createHandlerBoundToURL(e) {
                const t = this.getCacheKeyForURL(e);
                if (!t)
                    throw new c("non-precached-url",{
                        url: e
                    });
                return s => (s.request = new Request(e),
                s.params = Object.assign({
                    cacheKey: t
                }, s.params),
                this.strategy.handle(s))
            }
        }
        const E = () => (v || (v = new x),
        v);
        s(227);
        const L = e => e && "object" == typeof e ? e : {
            handle: e
        };
        class k {
            constructor(e, t, s="GET") {
                this.handler = L(t),
                this.match = e,
                this.method = s
            }
            setCatchHandler(e) {
                this.catchHandler = L(e)
            }
        }
        class q extends k {
            constructor(e, t, s) {
                super(( ({url: t}) => {
                    const s = e.exec(t.href);
                    if (s && (t.origin === location.origin || 0 === s.index))
                        return s.slice(1)
                }
                ), t, s)
            }
        }
        class D {
            constructor() {
                this._routes = new Map,
                this._defaultHandlerMap = new Map
            }
            get routes() {
                return this._routes
            }
            addFetchListener() {
                self.addEventListener("fetch", (e => {
                    const {request: t} = e
                      , s = this.handleRequest({
                        request: t,
                        event: e
                    });
                    s && e.respondWith(s)
                }
                ))
            }
            addCacheListener() {
                self.addEventListener("message", (e => {
                    if (e.data && "CACHE_URLS" === e.data.type) {
                        const {payload: t} = e.data;
                        0;
                        const s = Promise.all(t.urlsToCache.map((t => {
                            "string" == typeof t && (t = [t]);
                            const s = new Request(...t);
                            return this.handleRequest({
                                request: s,
                                event: e
                            })
                        }
                        )));
                        e.waitUntil(s),
                        e.ports && e.ports[0] && s.then(( () => e.ports[0].postMessage(!0)))
                    }
                }
                ))
            }
            handleRequest({request: e, event: t}) {
                const s = new URL(e.url,location.href);
                if (!s.protocol.startsWith("http"))
                    return void 0;
                const n = s.origin === location.origin
                  , {params: a, route: r} = this.findMatchingRoute({
                    event: t,
                    request: e,
                    sameOrigin: n,
                    url: s
                });
                let i = r && r.handler;
                const c = e.method;
                if (!i && this._defaultHandlerMap.has(c) && (i = this._defaultHandlerMap.get(c)),
                !i)
                    return void 0;
                let o;
                try {
                    o = i.handle({
                        url: s,
                        request: e,
                        event: t,
                        params: a
                    })
                } catch (e) {
                    o = Promise.reject(e)
                }
                const h = r && r.catchHandler;
                return o instanceof Promise && (this._catchHandler || h) && (o = o.catch((async n => {
                    if (h) {
                        0;
                        try {
                            return await h.handle({
                                url: s,
                                request: e,
                                event: t,
                                params: a
                            })
                        } catch (e) {
                            e instanceof Error && (n = e)
                        }
                    }
                    if (this._catchHandler)
                        return this._catchHandler.handle({
                            url: s,
                            request: e,
                            event: t
                        });
                    throw n
                }
                ))),
                o
            }
            findMatchingRoute({url: e, sameOrigin: t, request: s, event: n}) {
                const a = this._routes.get(s.method) || [];
                for (const r of a) {
                    let a;
                    const i = r.match({
                        url: e,
                        sameOrigin: t,
                        request: s,
                        event: n
                    });
                    if (i)
                        return a = i,
                        (Array.isArray(a) && 0 === a.length || i.constructor === Object && 0 === Object.keys(i).length || "boolean" == typeof i) && (a = void 0),
                        {
                            route: r,
                            params: a
                        }
                }
                return {}
            }
            setDefaultHandler(e, t="GET") {
                this._defaultHandlerMap.set(t, L(e))
            }
            setCatchHandler(e) {
                this._catchHandler = L(e)
            }
            registerRoute(e) {
                this._routes.has(e.method) || this._routes.set(e.method, []),
                this._routes.get(e.method).push(e)
            }
            unregisterRoute(e) {
                if (!this._routes.has(e.method))
                    throw new c("unregister-route-but-not-found-with-method",{
                        method: e.method
                    });
                const t = this._routes.get(e.method).indexOf(e);
                if (!(t > -1))
                    throw new c("unregister-route-route-not-registered");
                this._routes.get(e.method).splice(t, 1)
            }
        }
        let T;
        const U = () => (T || (T = new D,
        T.addFetchListener(),
        T.addCacheListener()),
        T);
        function N(e, t, s) {
            let n;
            if ("string" == typeof e) {
                const a = new URL(e,location.href);
                0;
                n = new k(( ({url: e}) => e.href === a.href),t,s)
            } else if (e instanceof RegExp)
                n = new q(e,t,s);
            else if ("function" == typeof e)
                n = new k(e,t,s);
            else {
                if (!(e instanceof k))
                    throw new c("unsupported-route-type",{
                        moduleName: "workbox-routing",
                        funcName: "registerRoute",
                        paramName: "capture"
                    });
                n = e
            }
            return U().registerRoute(n),
            n
        }
        class I extends k {
            constructor(e, t) {
                super(( ({request: s}) => {
                    const n = e.getURLsToCacheKeys();
                    for (const a of function*(e, {ignoreURLParametersMatching: t=[/^utm_/, /^fbclid$/], directoryIndex: s="index.html", cleanURLs: n=!0, urlManipulation: a}={}) {
                        const r = new URL(e,location.href);
                        r.hash = "",
                        yield r.href;
                        const i = function(e, t=[]) {
                            for (const s of [...e.searchParams.keys()])
                                t.some((e => e.test(s))) && e.searchParams.delete(s);
                            return e
                        }(r, t);
                        if (yield i.href,
                        s && i.pathname.endsWith("/")) {
                            const e = new URL(i.href);
                            e.pathname += s,
                            yield e.href
                        }
                        if (n) {
                            const e = new URL(i.href);
                            e.pathname += ".html",
                            yield e.href
                        }
                        if (a) {
                            const e = a({
                                url: r
                            });
                            for (const t of e)
                                yield t.href
                        }
                    }(s.url, t)) {
                        const t = n.get(a);
                        if (t) {
                            return {
                                cacheKey: t,
                                integrity: e.getIntegrityForCacheKey(t)
                            }
                        }
                    }
                }
                ), e.strategy)
            }
        }
        function S(e) {
            e.then(( () => {}
            ))
        }
        const K = (e, t) => t.some((t => e instanceof t));
        let M, P;
        const O = new WeakMap
          , A = new WeakMap
          , W = new WeakMap
          , B = new WeakMap
          , j = new WeakMap;
        let F = {
            get(e, t, s) {
                if (e instanceof IDBTransaction) {
                    if ("done" === t)
                        return A.get(e);
                    if ("objectStoreNames" === t)
                        return e.objectStoreNames || W.get(e);
                    if ("store" === t)
                        return s.objectStoreNames[1] ? void 0 : s.objectStore(s.objectStoreNames[0])
                }
                return $(e[t])
            },
            set: (e, t, s) => (e[t] = s,
            !0),
            has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
        };
        function H(e) {
            return e !== IDBDatabase.prototype.transaction || "objectStoreNames"in IDBTransaction.prototype ? (P || (P = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
                return e.apply(G(this), t),
                $(O.get(this))
            }
            : function(...t) {
                return $(e.apply(G(this), t))
            }
            : function(t, ...s) {
                const n = e.call(G(this), t, ...s);
                return W.set(n, t.sort ? t.sort() : [t]),
                $(n)
            }
        }
        function V(e) {
            return "function" == typeof e ? H(e) : (e instanceof IDBTransaction && function(e) {
                if (A.has(e))
                    return;
                const t = new Promise(( (t, s) => {
                    const n = () => {
                        e.removeEventListener("complete", a),
                        e.removeEventListener("error", r),
                        e.removeEventListener("abort", r)
                    }
                      , a = () => {
                        t(),
                        n()
                    }
                      , r = () => {
                        s(e.error || new DOMException("AbortError","AbortError")),
                        n()
                    }
                    ;
                    e.addEventListener("complete", a),
                    e.addEventListener("error", r),
                    e.addEventListener("abort", r)
                }
                ));
                A.set(e, t)
            }(e),
            K(e, M || (M = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e,F) : e)
        }
        function $(e) {
            if (e instanceof IDBRequest)
                return function(e) {
                    const t = new Promise(( (t, s) => {
                        const n = () => {
                            e.removeEventListener("success", a),
                            e.removeEventListener("error", r)
                        }
                          , a = () => {
                            t($(e.result)),
                            n()
                        }
                          , r = () => {
                            s(e.error),
                            n()
                        }
                        ;
                        e.addEventListener("success", a),
                        e.addEventListener("error", r)
                    }
                    ));
                    return t.then((t => {
                        t instanceof IDBCursor && O.set(t, e)
                    }
                    )).catch(( () => {}
                    )),
                    j.set(t, e),
                    t
                }(e);
            if (B.has(e))
                return B.get(e);
            const t = V(e);
            return t !== e && (B.set(e, t),
            j.set(t, e)),
            t
        }
        const G = e => j.get(e);
        const Q = ["get", "getKey", "getAll", "getAllKeys", "count"]
          , J = ["put", "add", "delete", "clear"]
          , z = new Map;
        function X(e, t) {
            if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t)
                return;
            if (z.get(t))
                return z.get(t);
            const s = t.replace(/FromIndex$/, "")
              , n = t !== s
              , a = J.includes(s);
            if (!(s in (n ? IDBIndex : IDBObjectStore).prototype) || !a && !Q.includes(s))
                return;
            const r = async function(e, ...t) {
                const r = this.transaction(e, a ? "readwrite" : "readonly");
                let i = r.store;
                return n && (i = i.index(t.shift())),
                (await Promise.all([i[s](...t), a && r.done]))[0]
            };
            return z.set(t, r),
            r
        }
        F = (e => ({
            ...e,
            get: (t, s, n) => X(t, s) || e.get(t, s, n),
            has: (t, s) => !!X(t, s) || e.has(t, s)
        }))(F);
        s(626);
        const Y = "cache-entries"
          , Z = e => {
            const t = new URL(e,location.href);
            return t.hash = "",
            t.href
        }
        ;
        class ee {
            constructor(e) {
                this._db = null,
                this._cacheName = e
            }
            _upgradeDb(e) {
                const t = e.createObjectStore(Y, {
                    keyPath: "id"
                });
                t.createIndex("cacheName", "cacheName", {
                    unique: !1
                }),
                t.createIndex("timestamp", "timestamp", {
                    unique: !1
                })
            }
            _upgradeDbAndDeleteOldDbs(e) {
                this._upgradeDb(e),
                this._cacheName && function(e, {blocked: t}={}) {
                    const s = indexedDB.deleteDatabase(e);
                    t && s.addEventListener("blocked", (e => t(e.oldVersion, e))),
                    $(s).then(( () => {}
                    ))
                }(this._cacheName)
            }
            async setTimestamp(e, t) {
                const s = {
                    url: e = Z(e),
                    timestamp: t,
                    cacheName: this._cacheName,
                    id: this._getId(e)
                }
                  , n = (await this.getDb()).transaction(Y, "readwrite", {
                    durability: "relaxed"
                });
                await n.store.put(s),
                await n.done
            }
            async getTimestamp(e) {
                const t = await this.getDb()
                  , s = await t.get(Y, this._getId(e));
                return null == s ? void 0 : s.timestamp
            }
            async expireEntries(e, t) {
                const s = await this.getDb();
                let n = await s.transaction(Y).store.index("timestamp").openCursor(null, "prev");
                const a = [];
                let r = 0;
                for (; n; ) {
                    const s = n.value;
                    s.cacheName === this._cacheName && (e && s.timestamp < e || t && r >= t ? a.push(n.value) : r++),
                    n = await n.continue()
                }
                const i = [];
                for (const e of a)
                    await s.delete(Y, e.id),
                    i.push(e.url);
                return i
            }
            _getId(e) {
                return this._cacheName + "|" + Z(e)
            }
            async getDb() {
                return this._db || (this._db = await function(e, t, {blocked: s, upgrade: n, blocking: a, terminated: r}={}) {
                    const i = indexedDB.open(e, t)
                      , c = $(i);
                    return n && i.addEventListener("upgradeneeded", (e => {
                        n($(i.result), e.oldVersion, e.newVersion, $(i.transaction), e)
                    }
                    )),
                    s && i.addEventListener("blocked", (e => s(e.oldVersion, e.newVersion, e))),
                    c.then((e => {
                        r && e.addEventListener("close", ( () => r())),
                        a && e.addEventListener("versionchange", (e => a(e.oldVersion, e.newVersion, e)))
                    }
                    )).catch(( () => {}
                    )),
                    c
                }("workbox-expiration", 1, {
                    upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
                })),
                this._db
            }
        }
        class te {
            constructor(e, t={}) {
                this._isRunning = !1,
                this._rerunRequested = !1,
                this._maxEntries = t.maxEntries,
                this._maxAgeSeconds = t.maxAgeSeconds,
                this._matchOptions = t.matchOptions,
                this._cacheName = e,
                this._timestampModel = new ee(e)
            }
            async expireEntries() {
                if (this._isRunning)
                    return void (this._rerunRequested = !0);
                this._isRunning = !0;
                const e = this._maxAgeSeconds ? Date.now() - 1e3 * this._maxAgeSeconds : 0
                  , t = await this._timestampModel.expireEntries(e, this._maxEntries)
                  , s = await self.caches.open(this._cacheName);
                for (const e of t)
                    await s.delete(e, this._matchOptions);
                this._isRunning = !1,
                this._rerunRequested && (this._rerunRequested = !1,
                S(this.expireEntries()))
            }
            async updateTimestamp(e) {
                await this._timestampModel.setTimestamp(e, Date.now())
            }
            async isURLExpired(e) {
                if (this._maxAgeSeconds) {
                    const t = await this._timestampModel.getTimestamp(e)
                      , s = Date.now() - 1e3 * this._maxAgeSeconds;
                    return void 0 === t || t < s
                }
                return !1
            }
            async delete() {
                this._rerunRequested = !1,
                await this._timestampModel.expireEntries(1 / 0)
            }
        }
        class se {
            constructor(e={}) {
                this.cachedResponseWillBeUsed = async ({event: e, request: t, cacheName: s, cachedResponse: n}) => {
                    if (!n)
                        return null;
                    const a = this._isResponseDateFresh(n)
                      , r = this._getCacheExpiration(s);
                    S(r.expireEntries());
                    const i = r.updateTimestamp(t.url);
                    if (e)
                        try {
                            e.waitUntil(i)
                        } catch (e) {
                            0
                        }
                    return a ? n : null
                }
                ,
                this.cacheDidUpdate = async ({cacheName: e, request: t}) => {
                    const s = this._getCacheExpiration(e);
                    await s.updateTimestamp(t.url),
                    await s.expireEntries()
                }
                ,
                this._config = e,
                this._maxAgeSeconds = e.maxAgeSeconds,
                this._cacheExpirations = new Map,
                e.purgeOnQuotaError && function(e) {
                    u.add(e)
                }(( () => this.deleteCacheAndMetadata()))
            }
            _getCacheExpiration(e) {
                if (e === r())
                    throw new c("expire-custom-caches-only");
                let t = this._cacheExpirations.get(e);
                return t || (t = new te(e,this._config),
                this._cacheExpirations.set(e, t)),
                t
            }
            _isResponseDateFresh(e) {
                if (!this._maxAgeSeconds)
                    return !0;
                const t = this._getDateHeaderTimestamp(e);
                if (null === t)
                    return !0;
                return t >= Date.now() - 1e3 * this._maxAgeSeconds
            }
            _getDateHeaderTimestamp(e) {
                if (!e.headers.has("date"))
                    return null;
                const t = e.headers.get("date")
                  , s = new Date(t).getTime();
                return isNaN(s) ? null : s
            }
            async deleteCacheAndMetadata() {
                for (const [e,t] of this._cacheExpirations)
                    await self.caches.delete(e),
                    await t.delete();
                this._cacheExpirations = new Map
            }
        }
        s(535);
        class ne {
            constructor(e={}) {
                this._statuses = e.statuses,
                this._headers = e.headers
            }
            isResponseCacheable(e) {
                let t = !0;
                return this._statuses && (t = this._statuses.includes(e.status)),
                this._headers && t && (t = Object.keys(this._headers).some((t => e.headers.get(t) === this._headers[t]))),
                t
            }
        }
        class ae {
            constructor(e) {
                this.cacheWillUpdate = async ({response: e}) => this._cacheableResponse.isResponseCacheable(e) ? e : null,
                this._cacheableResponse = new ne(e)
            }
        }
        var re, ie;
        (function(e) {
            E().precache(e)
        }
        )([{
            'revision': 'add073456b997b70e6d68ebd18ba7ea7',
            'url': '52.bundle.js'
        }, {
            'revision': null,
            'url': 'b7334282d9befdaec9a199bd91945501.wasm'
        }, {
            'revision': '67b47e8ebdf1794c70e122e2d9ad8814',
            'url': 'bundle.js'
        }, {
            'revision': '78696d2bb36d350bfc5beba2997872d2',
            'url': 'icons/icon-128x128.png'
        }, {
            'revision': '5fda4f9ea794d718f41abdd4b0d7fd40',
            'url': 'icons/icon-144x144.png'
        }, {
            'revision': '92b12bf7e9071478e2b44327aa0c6cf2',
            'url': 'icons/icon-192x192.png'
        }, {
            'revision': 'd8c2cbac8b8b84509f61b7c48243b42a',
            'url': 'icons/icon-384x384.png'
        }, {
            'revision': 'b9306977aff84bd2ca8a018c2ea49955',
            'url': 'icons/icon-512x512.png'
        }, {
            'revision': '9209377ff6d7eeaa842b0db6edb94f76',
            'url': 'icons/icon-72x72.png'
        }, {
            'revision': '786dec7ea74bb23b9b17ac3820a51eb9',
            'url': 'icons/icon-96x96.png'
        }, {
            'revision': 'a070f56ee90d3588ae9cc02a70c2eb8f',
            'url': 'index.html'
        }, {
            'revision': 'b5ddd52eba43f68572d45711627abf4f',
            'url': 'main.css'
        }]),
        function(e) {
            const t = E();
            N(new I(t,e))
        }(re),
        self.__WB_DISABLE_DEV_LOGS = !0,
        N(new class extends k {
            constructor(e, {allowlist: t=[/./], denylist: s=[]}={}) {
                super((e => this._match(e)), e),
                this._allowlist = t,
                this._denylist = s
            }
            _match({url: e, request: t}) {
                if (t && "navigate" !== t.mode)
                    return !1;
                const s = e.pathname + e.search;
                for (const e of this._denylist)
                    if (e.test(s))
                        return !1;
                return !!this._allowlist.some((e => e.test(s)))
            }
        }
        ((ie = "/index.html",
        E().createHandlerBoundToURL(ie)),{
            denylist: [/\/activate\b/]
        }));
        class ce {
            constructor(e) {
                this.no_body = e
            }
            async cacheWillUpdate(e) {
                var t;
                let {response: {url: s, status: n, statusText: a, headers: r}} = e;
                if (r && !r.has("date")) {
                    const i = new Headers(r);
                    i.set("date", (new Date).toUTCString()),
                    206 === n && (n = 200);
                    const c = {
                        status: n,
                        statusText: a,
                        headers: i
                    };
                    return [101, 204, 205, 304].includes(n) || (null === (t = this.no_body) || void 0 === t ? void 0 : t.test(s)) ? new Response(null,c) : e.response.arrayBuffer().then((e => new Response(e,c)))
                }
                return e.response
            }
        }
        class oe extends g {
            constructor(t) {
                super(t),
                this.ttl = t.ttl,
                this.plugins.some((e => "cacheWillUpdate"in e)) || this.plugins.unshift(e)
            }
            async _handle(e, t) {
                let s = await t.cacheMatch(e);
                return s ? (this._isResponseFresh(s) || t.fetchAndCachePut(e),
                s) : await t.fetchAndCachePut(e)
            }
            _isResponseFresh(e) {
                if (!e.headers.has("date"))
                    return !0;
                const t = e.headers.get("date")
                  , s = new Date(t).getTime();
                if (isNaN(s))
                    return !0;
                return s >= Date.now() - 1e3 * this.ttl
            }
        }
        function he(e={}) {
            e = Object.assign({
                cache_name: "default",
                cache_ttl: 2592e3,
                ttl: 600
            }, e);
            const t = new oe({
                cacheName: e.cache_name,
                ttl: e.ttl,
                matchOptions: {
                    ignoreVary: !0
                },
                plugins: [new se({
                    maxAgeSeconds: e.cache_ttl,
                    purgeOnQuotaError: e.purge_on_quota_error
                }), new ae({
                    statuses: [0, 200, 204, 206, 304]
                }), new ce(e.ignore_cache_body)]
            });
            return e => t.handle(e)
        }
        const le = new class extends g {
            constructor(e={}) {
                super(e),
                this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0
            }
            async _handle(e, t) {
                let s, n;
                try {
                    const s = [t.fetch(e)];
                    if (this._networkTimeoutSeconds) {
                        const e = d(1e3 * this._networkTimeoutSeconds);
                        s.push(e)
                    }
                    if (n = await Promise.race(s),
                    !n)
                        throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)
                } catch (e) {
                    e instanceof Error && (s = e)
                }
                if (!n)
                    throw new c("no-response",{
                        url: e.url,
                        error: s
                    });
                return n
            }
        }
        ;
        N(/.*[\?\&]SW_CACHE=NONE/, (e => le.handle(e))),
        N(/^https:\/\/db\.wiki\.spaceface\.dev\/\w{2}\.bin$/, he({
            cache_name: "dbs"
        })),
        N(/^https:\/\/wlh-api\.toolforge\.org/, he({
            cache_name: "wlh-api",
            purge_on_quota_error: !0,
            ttl: 2592e3,
            cache_ttl: 31536e3
        })),
        N(/^https:\/\/\w\w\.wikipedia\.org/, he({
            cache_name: "wikipedia",
            purge_on_quota_error: !0,
            ttl: 2592e3,
            cache_ttl: 31536e3
        })),
        N(/\/search\//, he({
            cache_name: "search",
            ttl: 86400
        })),
        N(/\//, he({
            cache_name: "root"
        })),
        self.addEventListener("message", (e => e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting())),
        self.addEventListener("install", ( () => self.skipWaiting())),
        self.addEventListener("activate", ( () => self.clients.claim()))
    }
    )()
}
)();
