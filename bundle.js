( () => {
    "use strict";
    var e = {
        746: (e, t) => {
            t.IO = {
                createElement(e, t, ...n) {
                    var a;
                    if (t = t || {},
                    "function" == typeof e)
                        return e(t);
                    const o = document.createElement(e);
                    for (const e of Object.keys(t)) {
                        const n = t[e];
                        if ("string" == typeof n)
                            switch (e.toLowerCase()) {
                            case "classname":
                                o.setAttribute("class", n);
                                break;
                            case "innerhtml":
                                o.innerHTML = n;
                                break;
                            default:
                                o.setAttribute(e, n)
                            }
                        else {
                            if ("style" === e)
                                for (const e of Object.keys(n))
                                    o.style[e] = n[e];
                            const t = null === (a = e.match(/on(\w+)/)) || void 0 === a ? void 0 : a[1];
                            t && o.addEventListener(t, n)
                        }
                    }
                    function i(e) {
                        "string" == typeof e ? o.appendChild(document.createTextNode(e)) : o.appendChild(e)
                    }
                    for (const e of n)
                        Array.isArray(e) ? e.forEach((e => i(e))) : i(e);
                    return o
                }
            },
            t.Ay = t.IO
        }
    }
      , t = {};
    function n(a) {
        var o = t[a];
        if (void 0 !== o)
            return o.exports;
        var i = t[a] = {
            exports: {}
        };
        return e[a](i, i.exports, n),
        i.exports
    }
    n.m = e,
    n.d = (e, t) => {
        for (var a in t)
            n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ,
    n.u = e => e + ".bundle.js",
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.p = "",
    n.b = document.baseURI || self.location.href,
    ( () => {
        var e = {};
        n.r(e),
        n.d(e, {
            $P: () => u,
            setLanguage: () => y,
            worker: () => c
        });
        var t = n(746)
          , a = function(e) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, n = e[Symbol.asyncIterator];
            return n ? n.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](),
            t = {},
            a("next"),
            a("throw"),
            a("return"),
            t[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            t);
            function a(n) {
                t[n] = e[n] && function(t) {
                    return new Promise((function(a, o) {
                        (function(e, t, n, a) {
                            Promise.resolve(a).then((function(t) {
                                e({
                                    value: t,
                                    done: n
                                })
                            }
                            ), t)
                        }
                        )(a, o, (t = e[n](t)).done, t.value)
                    }
                    ))
                }
            }
        };
        const o = [{
            code: "en_web",
            name: "English (online)",
            emoji: "🇬🇧",
            size: null
        }, {
            code: "en",
            emoji: "🇬🇧",
            size: "400MB",
            name: "English"
        }, {
            code: "de",
            emoji: "🇩🇪",
            size: "180MB",
            name: "Deutsch"
        }, {
            code: "fr",
            emoji: "🇫🇷",
            size: "150MB",
            name: "Français"
        }, {
            code: "ja",
            emoji: "🇯🇵",
            size: "120MB",
            name: "日本語"
        }, {
            code: "es",
            emoji: "🇪🇸",
            size: "100MB",
            name: "Español"
        }, {
            code: "it",
            emoji: "🇮🇹",
            size: "100MB",
            name: "Italiano"
        }, {
            code: "ru",
            emoji: "🇷🇺",
            size: "100MB",
            name: "русский"
        }, {
            code: "pl",
            emoji: "🇵🇱",
            size: "50MB",
            name: "Polski"
        }, {
            code: "nl",
            emoji: "🇳🇱",
            size: "50MB",
            name: "Nederlands"
        }, {
            code: "sv",
            emoji: "🇸🇪",
            size: "50MB",
            name: "Svenska"
        }, {
            code: "pt",
            emoji: "🇵🇹",
            size: "50MB",
            name: "Português"
        }, {
            code: "zh",
            emoji: "🇨🇳",
            size: "50MB",
            name: "中文"
        }, {
            code: "ar",
            emoji: "🇸🇦",
            size: "30MB",
            name: "العربية"
        }, {
            code: "he",
            emoji: "🇮🇱",
            size: "25MB",
            name: "עברית"
        }, {
            code: "fa",
            emoji: "🇮🇷",
            size: "20MB",
            name: "فارسی"
        }, {
            code: "fi",
            emoji: "🇫🇮",
            size: "20MB",
            name: "Suomi"
        }, {
            code: "hu",
            emoji: "🇭🇺",
            size: "20MB",
            name: "Magyar"
        }, {
            code: "tr",
            emoji: "🇹🇷",
            size: "15MB",
            name: "Türkçe"
        }, {
            code: "el",
            emoji: "🇬🇷",
            size: "10MB",
            name: "Ελληνικά"
        }, {
            code: "th",
            emoji: "🇹🇭",
            size: "5MB",
            name: "ไทย"
        }];
        let i = r();
        async function r() {
            var e, t, n, i;
            const r = await navigator.storage.getDirectory()
              , s = new Map;
            try {
                for (var l, c = !0, d = a(r.entries()); !(e = (l = await d.next()).done); c = !0) {
                    i = l.value,
                    c = !1;
                    const [e,t] = i;
                    if (e.endsWith(".mtime") && "file" === t.kind) {
                        const n = await t.getFile();
                        if (0 === n.size)
                            continue;
                        const a = await n.text().then((e => new Date(e)));
                        s.set(e.slice(0, -10), a)
                    }
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    c || e || !(n = d.return) || await n.call(d)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            const p = await Promise.all(Array.from(s.entries(), (async ([e,t]) => ({
                code: e,
                installed: !0,
                outdated: 304 !== (await fetch(`https://db.wiki.spaceface.dev/${e}.bin`, {
                    headers: {
                        "If-Modified-Since": t.toUTCString(),
                        range: "bytes=0-0"
                    }
                })).status
            }))));
            for (const e of o)
                if (s.has(e.code)) {
                    const t = p.findIndex((t => t.code === e.code));
                    p[t] = Object.assign(Object.assign({}, e), p[t])
                } else
                    p.push(Object.assign(Object.assign({}, e), {
                        installed: !1
                    }));
            p.sort(( (e, t) => o.findIndex((t => t.code === e.code)) - o.findIndex((e => e.code === t.code))));
            return (p.find((e => e.installed)) || p[0]).selected = !0,
            p
        }
        const s = document.querySelector.bind(document);
        document.querySelectorAll.bind(document);
        function l(e) {
            if (s("#pb-container"))
                return null;
            const n = t.Ay.createElement("div", {
                id: "pb-container"
            }, t.Ay.createElement("div", {
                id: "pb"
            }), t.Ay.createElement("span", {
                id: "pb-title"
            }, e), t.Ay.createElement("span", {
                id: "pb-text",
                style: "display: none;"
            }, t.Ay.createElement("span", {
                id: "pb-percent-text"
            }), t.Ay.createElement("span", {
                id: "pb-speed-text"
            }), t.Ay.createElement("span", {
                id: "pb-eta-text"
            })));
            return document.body.prepend(n),
            n.last_100ms_samples = [],
            Object.defineProperty(n, "percent", {
                get: () => parseInt(s("#pb-percent-text").textContent || "0"),
                set(e) {
                    s("#pb-percent-text").textContent = `${e.toFixed(0)}%`,
                    s("#pb").style.width = e.toString() + "%";
                    const t = performance.now();
                    if (n.last_100ms_samples.push(t),
                    setTimeout(( () => n.last_100ms_samples.shift()), 100),
                    n.start_time) {
                        const a = t - n.start_time
                          , o = a / (e / 100) - a;
                        n.eta = ` · ${Math.floor(o / 6e4).toString().padStart(2, "0")}:${(o % 6e4 / 1e3).toFixed(0).toString().padStart(2, "0")} left`
                    } else
                        n.style.transitionDuration = "10ms",
                        s("#pb-text").style.display = "inline-block",
                        s("#pb-eta-text").style.display = "inline-block",
                        n.start_time = t
                }
            }),
            Object.defineProperty(n, "title", {
                get: () => s("#pb-title").textContent || "",
                set(e) {
                    s("#pb-title").textContent = e
                }
            }),
            Object.defineProperty(n, "eta", {
                get: () => s("#pb-eta-text").textContent || "",
                set(e) {
                    s("#pb-eta-text").textContent = e
                }
            }),
            Object.defineProperty(n, "speed", {
                set(e) {
                    const t = e > 6e6 ? `${Math.round(e / 1e6)} MB/s` : e > 9e5 ? `${(e / 1e6).toFixed(1)} MB/s` : `${(e / 1e3).toFixed(1)} KB/s`;
                    s("#pb-speed-text").textContent = t
                }
            }),
            n.destroy = () => {
                n.style.opacity = "0",
                setTimeout(( () => n.remove()), 500)
            }
            ,
            n.reset = () => {
                n.start_time = 0,
                n.percent = 0,
                n.last_100ms_samples = []
            }
            ,
            n
        }
        let c = null
          , d = !1
          , p = !1
          , m = null;
        function u(e, t) {
            return new Promise(( (n, a) => {
                c && d ? m ? a("Search already in progress") : (c.postMessage({
                    type: "search",
                    from: e,
                    to: t
                }),
                m = n) : a("Worker not ready")
            }
            ))
        }
        let g = null
          , f = null;
        function v() {
            c = new Worker(new URL(n.p + n.u(52),n.b),{
                type: void 0
            }),
            c.onmessage = e => {
                const {type: t, lang: n} = e.data;
                "reload" === t ? location.reload() : "init-done" === t ? (d = !0,
                g && g(),
                f && f.destroy(),
                async function() {
                    const e = await r();
                    i = new Promise((t => t(e)))
                }()) : "search-done" === t ? m && (m(e.data.path),
                m = null) : "init-progress" === t ? f && (f.percent = 100 * e.data.progress) : "download-start" === t ? (f || (f = l()),
                f.title = `Downloading ${n.name} wiki...`) : "download-progress" === t ? f.percent = +e.data.percent : "download-done" === t && (f ? f.reset() : f = l(),
                f.title = `Loading ${n.name} wiki...`)
            }
        }
        async function y(e, t=!0, n=!0) {
            for (const e of await i)
                e.selected = !1;
            const a = (await i).find((t => t.code === e)) || (await i)[0];
            a.selected = !0,
            "en_web" !== a.code && (c && !p || (c.terminate(),
            v()),
            f = l(`Loading ${a.name} wiki...`),
            c.postMessage({
                type: "init",
                lang: a.code,
                should_download: t,
                should_update: n
            })),
            s("#lang_btn").innerText = a.emoji
        }
        v();
        const {setLanguage: h, worker: w} = e
          , b = s("#form")
          , k = s("#from")
          , A = s("#to")
          , E = s("#res");
        window.onresize = window.onload = () => {
            innerHeight < 800 ? document.body.style.zoom = "" + innerHeight / 800 : document.body.style.zoom = ""
        }
        ;
        let x = "en";
        s("#swap_btn").onclick = e => {
            e.preventDefault(),
            e.stopPropagation();
            let t = k.value;
            return k.value = A.value,
            A.value = t,
            !1
        }
        ;
        let j = !1;
        k.onblur = A.onblur = e => (setTimeout((async () => {
            var t, n, a, o, i, r, l, c, d, p, m, u;
            setTimeout(( () => {
                var e;
                return null === (e = s("#autocomplete-popup")) || void 0 === e ? void 0 : e.remove()
            }
            ), 100);
            let g = e.target
              , f = g.value;
            if (!f)
                return;
            const v = `https://${x}.wikipedia.org/w/api.php?action=query&format=json&prop=info&titles=${encodeURIComponent(f)}&redirects=1&formatversion=2&origin=*`
              , y = await fetch(v).then((e => e.json()));
            if (null === (n = null === (t = y.query) || void 0 === t ? void 0 : t.pages) || void 0 === n || n.sort(( (e, t) => {
                if (e.title === f)
                    return -1;
                if (t.title === f)
                    return 1;
                const n = e.title.toLowerCase()
                  , a = t.title.toLowerCase();
                return n === f.toLowerCase() ? -1 : a === f.toLowerCase() ? 1 : 0
            }
            )),
            0 === (null === (o = null === (a = y.query) || void 0 === a ? void 0 : a.pages) || void 0 === o ? void 0 : o.length) || (null === (r = null === (i = y.query) || void 0 === i ? void 0 : i.pages[0]) || void 0 === r ? void 0 : r.missing))
                g.parentElement.setAttribute("data-after-tooltip", "Page does not exist");
            else if ((null === (c = null === (l = y.query) || void 0 === l ? void 0 : l.redirects) || void 0 === c ? void 0 : c.length) > 0) {
                let e = null === (p = null === (d = y.query) || void 0 === d ? void 0 : d.redirects) || void 0 === p ? void 0 : p.find((e => {
                    var t, n;
                    return e.from === (null === (n = null === (t = y.query) || void 0 === t ? void 0 : t.pages[0]) || void 0 === n ? void 0 : n.title)
                }
                ));
                e && (g.parentElement.setAttribute("data-after-tooltip", "Page is a redirect"),
                g.parentElement.setAttribute("data-redirects-to", e.to))
            } else
                g.value = null === (u = null === (m = y.query) || void 0 === m ? void 0 : m.pages[0]) || void 0 === u ? void 0 : u.title
        }
        ), 250),
        !1),
        k.onkeyup = A.onkeyup = async e => {
            var n, a;
            let o = e.target
              , i = o.value;
            if (o.parentElement.removeAttribute("data-after-tooltip"),
            o.parentElement.removeAttribute("data-redirects-to"),
            !i)
                return;
            try {
                let e = new URL(i);
                e.hostname.endsWith("wikipedia.org") && (i = e.pathname.split("/")[2].replace(/_/g, " "),
                o.value = i)
            } catch (e) {}
            const r = `https://${x}.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Cimages%7Cimageinfo%7Cpageimages%7Cextracts&titles=Main%20page&generator=prefixsearch&formatversion=2&imlimit=1&pithumbsize=56&pilicense=any&exchars=400&exintro=1&explaintext=1&exsectionformat=plain&redirects&gpssearch=${encodeURIComponent(i)}&gpsnamespace=0&gpsprofile=fuzzy&origin=*`
              , l = await fetch(r).then((e => e.json()));
            let c = Object.values((null === (n = l.query) || void 0 === n ? void 0 : n.pages) || {});
            if (c.sort(( (e, t) => {
                const n = e.title.toLowerCase()
                  , a = t.title.toLowerCase();
                return n === i.toLowerCase() ? -1 : a === i.toLowerCase() ? 1 : 0
            }
            )),
            !c.length)
                return;
            c = c.slice(0, 5),
            null === (a = s("#autocomplete-popup")) || void 0 === a || a.remove();
            const d = t.Ay.createElement("div", {
                id: "autocomplete-popup",
                style: {
                    marginTop: o === k ? "32px" : "70px"
                }
            });
            b.appendChild(d),
            c.forEach((e => {
                const n = t.Ay.createElement("div", {
                    class: "preview-item",
                    onmousedown: t => (t.preventDefault(),
                    t.stopPropagation(),
                    o.value = e.title,
                    d.remove(),
                    !1)
                });
                if (e.thumbnail && e.thumbnail.source)
                    n.appendChild(t.Ay.createElement("img", {
                        crossorigin: "anonymous",
                        class: "preview-thumbnail",
                        src: e.thumbnail.source
                    }));
                else if (e.images) {
                    const a = t.Ay.createElement("img", {
                        crossorigin: "anonymous",
                        class: "preview-thumbnail"
                    });
                    n.appendChild(a);
                    const o = e.images[0]
                      , i = `https://${x}.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&origin=*&titles=${encodeURIComponent(o.title)}`;
                    fetch(i).then((e => e.json())).then((e => {
                        const t = Object.values(e.query.pages)[0];
                        a.src = t.imageinfo[0].url
                    }
                    ))
                }
                n.appendChild(t.Ay.createElement("div", {
                    class: "preview-text"
                }, t.Ay.createElement("div", {
                    class: "preview-title"
                }, e.title), t.Ay.createElement("div", {
                    class: "preview-description"
                }, e.extract.split(". ")[0] + "."))),
                d.appendChild(n)
            }
            ))
        }
        ,
        b.onsubmit = e => {
            if (e.preventDefault(),
            e.stopPropagation(),
            j)
                return !1;
            j = !0;
            const n = k.parentElement.getAttribute("data-redirects-to")
              , a = A.parentElement.getAttribute("data-redirects-to");
            n && (k.value = n,
            k.parentElement.removeAttribute("data-redirects-to"),
            k.parentElement.removeAttribute("data-after-tooltip")),
            a && (A.value = a,
            A.parentElement.removeAttribute("data-redirects-to"),
            A.parentElement.removeAttribute("data-after-tooltip"));
            let o = k.value
              , r = A.value;
            return "" == o || "" == r || (E.innerHTML = '<h3 class="loading">Loading...</h3>',
            async function(e, t) {
                const n = (await i).find((e => e.selected));
                if (!n)
                    return {
                        path: [],
                        elapsed: 0
                    };
                let a = []
                  , o = performance.now();
                if ("en_web" === n.code) {
                    let n = new URL("/api/search",window.location.origin);
                    n.searchParams.append("from", encodeURIComponent(e)),
                    n.searchParams.append("to", encodeURIComponent(t)),
                    a = await fetch(n).then((e => e.json())).then((e => e.path))
                } else
                    a = await u(e, t);
                return {
                    path: a,
                    elapsed: performance.now() - o
                }
            }(o, r).then((async e => {
                if ((async () => {
                    var t;
                    let n = !1;
                    try {
                        let e = null === (t = (await i).find((e => e.selected))) || void 0 === t ? void 0 : t.code;
                        n = !!e && "en_web" !== e
                    } catch (e) {}
                    null === umami || void 0 === umami || umami.track("search", {
                        lang: x,
                        from: o,
                        to: r,
                        serverType: n ? "local" : "hosted",
                        time: e.elapsed
                    })
                }
                )(),
                e.path.length < 2)
                    return void (E.innerHTML = '<h3 class="error">No path found - make sure the pages are spelled correctly</h3>');
                E.innerHTML = `<h3 class="success" style="font-size:1.3em;">Time taken: ${e.elapsed.toFixed(0)}ms; checking for redirects...</h3>`;
                let n = t.Ay.createElement("ol", {
                    class: "pending"
                }, e.path.map((e => t.Ay.createElement("li", null, t.Ay.createElement("a", {
                    target: "_blank",
                    href: `https://${x}.wikipedia.org/wiki/${e.replace(/ /g, "_")}`
                }, e)))));
                E.appendChild(n),
                j = !1;
                let a = await Promise.all(e.path.slice(1).map((async (t, n) => {
                    var a, o, i;
                    const r = e.path[n];
                    let s = "";
                    const l = new URL(`https://${x}.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=backlinks&formatversion=2&bltitle=${encodeURIComponent(t.replace(/ /g, "_"))}&blnamespace=0&blfilterredir=all&bllimit=max&blredirect=1`);
                    for (; ; ) {
                        const e = await fetch(l)
                          , {query: t, continue: n} = null !== (a = await e.json()) && void 0 !== a ? a : {};
                        for (const e of null !== (o = null == t ? void 0 : t.backlinks) && void 0 !== o ? o : []) {
                            if (e.title == r && !e.redirect)
                                return null;
                            e.redirect && (null === (i = e.redirlinks) || void 0 === i ? void 0 : i.find((e => e.title === r))) && (s = e.title)
                        }
                        if (!n)
                            break;
                        l.searchParams.set("continue", n.continue),
                        l.searchParams.set("blcontinue", n.blcontinue)
                    }
                    return s
                }
                )));
                for (const [t,n] of a.entries())
                    n && (e.path[t + 1] = n + " → " + e.path[t + 1]);
                E.innerText = "",
                E.appendChild(t.Ay.createElement(t.Ay.Fragment, null, t.Ay.createElement("h3", {
                    class: "success",
                    style: "font-size:1.3em;"
                }, "Time taken: ", e.elapsed.toFixed(0), "ms"), t.Ay.createElement("ol", null, e.path.map((e => {
                    let n = e.split(" → ")
                      , a = n.map((e => encodeURIComponent(e.replace(/ /g, "_"))));
                    return 1 == n.length ? t.Ay.createElement("li", null, t.Ay.createElement("a", {
                        target: "_blank",
                        href: `https://${x}.wikipedia.org/wiki/` + a[0]
                    }, n[0])) : t.Ay.createElement("li", null, t.Ay.createElement("a", {
                        target: "_blank",
                        href: `https://${x}.wikipedia.org/wiki/` + a[0] + "?redirect=no"
                    }, n[0]), " ", t.Ay.createElement("p", {
                        class: "redirect"
                    }, "(redirects to ", t.Ay.createElement("a", {
                        target: "_blank",
                        href: "https://en.wikipedia.org/wiki/" + a[1]
                    }, n[1]), ")"))
                }
                )))))
            }
            )).catch((e => {
                E.innerHTML = '<h3 class="error">An error ocurred: ' + e + "</h3>"
            }
            )).finally(( () => {
                j = !1
            }
            ))),
            !1
        }
        ;
        const M = t.Ay.createElement("span", {
            innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z"/></svg>'
        })
          , z = t.Ay.createElement("span", {
            innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg>'
        })
          , C = t.Ay.createElement("span", {
            innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>'
        })
          , _ = s("#lang_btn");
        _.onclick = async e => {
            var n;
            if (null === (n = s(".lang-selector")) || void 0 === n || n.remove(),
            e.preventDefault(),
            e.stopPropagation(),
            null === umami || void 0 === umami || umami.track("language-button"),
            0 === (await i).length)
                return void (_.disabled = !0);
            const a = ({code: e, name: n, emoji: a, size: o, installed: i, outdated: r, selected: l}) => {
                const c = i ? r ? t.Ay.createElement("span", {
                    class: "lang-status outdated",
                    title: "Update"
                }, M.cloneNode(!0)) : t.Ay.createElement("span", {
                    class: "lang-status installed",
                    title: "Remove",
                    onclick: async t => {
                        var n;
                        return t.preventDefault(),
                        t.stopPropagation(),
                        e === x && (h("en_web"),
                        x = "en"),
                        null == w || w.postMessage({
                            type: "remove",
                            code: e
                        }),
                        null === (n = s(".lang-selector")) || void 0 === n || n.remove(),
                        !1
                    }
                }, z.cloneNode(!0)) : t.Ay.createElement("span", {
                    class: "lang-status not-installed",
                    title: "Download"
                }, C.cloneNode(!0));
                return t.Ay.createElement("li", {
                    class: l ? "lang selected" : "lang",
                    onclick: () => {
                        var t;
                        null === umami || void 0 === umami || umami.track("downloading-language", {
                            lang: e
                        }),
                        h(e),
                        x = "en_web" === e ? "en" : e,
                        null === (t = s(".lang-selector")) || void 0 === t || t.remove()
                    }
                }, t.Ay.createElement("span", {
                    class: "lang-flag"
                }, a), t.Ay.createElement("span", {
                    class: "lang-name"
                }, n), o && c || "")
            }
              , o = t.Ay.createElement("ul", {
                class: "lang-selector"
            }, t.Ay.createElement("btn", {
                class: "lang-selector-close",
                onclick: () => {
                    var e;
                    return null === (e = s(".lang-selector")) || void 0 === e ? void 0 : e.remove()
                }
            }, "←"), (await i).map((e => t.Ay.createElement(a, Object.assign({}, e)))), t.Ay.createElement("li", {
                class: "lang lang-request",
                onclick: () => {
                    window.open("https://github.com/spaceface777/WikiGameSolver/issues/new?title=[Language request] ", "_blank")
                }
            }, "Request a new language"));
            o.style,
            document.body.appendChild(o)
        }
        ,
        "serviceWorker"in navigator && window.addEventListener("load", ( () => {
            navigator.serviceWorker.register("/sw.js").then((e => {}
            )).catch((e => {}
            ))
        }
        )),
        async function() {
            const e = await i
              , t = e.find((e => e.selected));
            h(t.code, !1, !1),
            x = "en_web" === t.code ? "en" : t.code,
            e.find((e => e.outdated)) && _.classList.add("has-update")
        }()
    }
    )()
}
)();
