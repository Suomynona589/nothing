( () => {
    var e = {
        59: e => {
            var t, n = (t = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0,
            function(e={}) {
                var n, r;
                (e = void 0 !== e ? e : {}).ready = new Promise(( (e, t) => {
                    n = e,
                    r = t
                }
                ));
                var a, i = Object.assign({}, e), o = (e, t) => {
                    throw t
                }
                , s = !1, u = !0, c = "";
                (s || u) && (u ? c = self.location.href : "undefined" != typeof document && document.currentScript && (c = document.currentScript.src),
                t && (c = t),
                c = 0 !== c.indexOf("blob:") ? c.substr(0, c.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "",
                u && (a = e => {
                    var t = new XMLHttpRequest;
                    return t.open("GET", e, !1),
                    t.responseType = "arraybuffer",
                    t.send(null),
                    new Uint8Array(t.response)
                }
                ));
                var l, f = e.print || void 0, d = e.printErr || void 0;
                Object.assign(e, i),
                i = null,
                e.arguments && e.arguments,
                e.thisProgram && e.thisProgram,
                e.quit && (o = e.quit),
                e.wasmBinary && (l = e.wasmBinary);
                var h, p = e.noExitRuntime || !0;
                "object" != typeof WebAssembly && x("no native wasm support detected");
                var m, v, y, g, w, b, A, T, _, C = !1;
                function P() {
                    var t = h.buffer;
                    e.HEAP8 = m = new Int8Array(t),
                    e.HEAP16 = y = new Int16Array(t),
                    e.HEAP32 = w = new Int32Array(t),
                    e.HEAPU8 = v = new Uint8Array(t),
                    e.HEAPU16 = g = new Uint16Array(t),
                    e.HEAPU32 = b = new Uint32Array(t),
                    e.HEAPF32 = A = new Float32Array(t),
                    e.HEAPF64 = T = new Float64Array(t)
                }
                var j = []
                  , S = []
                  , E = []
                  , M = 0
                  , k = 0
                  , F = null
                  , W = null;
                function x(t) {
                    e.onAbort && e.onAbort(t),
                    d(t = "Aborted(" + t + ")"),
                    C = !0,
                    t += ". Build with -sASSERTIONS for more info.";
                    var n = new WebAssembly.RuntimeError(t);
                    throw r(n),
                    n
                }
                var z, R, I = "data:application/octet-stream;base64,";
                function B(e) {
                    return e.startsWith(I)
                }
                function H(e) {
                    try {
                        if (e == z && l)
                            return new Uint8Array(l);
                        if (a)
                            return a(e);
                        throw "both async and sync fetching of the wasm failed"
                    } catch (e) {
                        x(e)
                    }
                }
                function O(e, t, n) {
                    return function(e) {
                        return l || !s && !u || "function" != typeof fetch ? Promise.resolve().then(( () => H(e))) : fetch(e, {
                            credentials: "same-origin"
                        }).then((t => {
                            if (!t.ok)
                                throw "failed to load wasm binary file at '" + e + "'";
                            return t.arrayBuffer()
                        }
                        )).catch(( () => H(e)))
                    }(e).then((e => WebAssembly.instantiate(e, t))).then((e => e)).then(n, (e => {
                        d("failed to asynchronously prepare wasm: " + e),
                        x(e)
                    }
                    ))
                }
                function U(e) {
                    this.name = "ExitStatus",
                    this.message = "Program terminated with exit(" + e + ")",
                    this.status = e
                }
                function D(t) {
                    for (; t.length > 0; )
                        t.shift()(e)
                }
                function $(e) {
                    this.excPtr = e,
                    this.ptr = e - 24,
                    this.set_type = function(e) {
                        b[this.ptr + 4 >> 2] = e
                    }
                    ,
                    this.get_type = function() {
                        return b[this.ptr + 4 >> 2]
                    }
                    ,
                    this.set_destructor = function(e) {
                        b[this.ptr + 8 >> 2] = e
                    }
                    ,
                    this.get_destructor = function() {
                        return b[this.ptr + 8 >> 2]
                    }
                    ,
                    this.set_caught = function(e) {
                        e = e ? 1 : 0,
                        m[this.ptr + 12 >> 0] = e
                    }
                    ,
                    this.get_caught = function() {
                        return 0 != m[this.ptr + 12 >> 0]
                    }
                    ,
                    this.set_rethrown = function(e) {
                        e = e ? 1 : 0,
                        m[this.ptr + 13 >> 0] = e
                    }
                    ,
                    this.get_rethrown = function() {
                        return 0 != m[this.ptr + 13 >> 0]
                    }
                    ,
                    this.init = function(e, t) {
                        this.set_adjusted_ptr(0),
                        this.set_type(e),
                        this.set_destructor(t)
                    }
                    ,
                    this.set_adjusted_ptr = function(e) {
                        b[this.ptr + 16 >> 2] = e
                    }
                    ,
                    this.get_adjusted_ptr = function() {
                        return b[this.ptr + 16 >> 2]
                    }
                    ,
                    this.get_exception_ptr = function() {
                        if (qe(this.get_type()))
                            return b[this.excPtr >> 2];
                        var e = this.get_adjusted_ptr();
                        return 0 !== e ? e : this.excPtr
                    }
                }
                function N(e) {
                    switch (e) {
                    case 1:
                        return 0;
                    case 2:
                        return 1;
                    case 4:
                        return 2;
                    case 8:
                        return 3;
                    default:
                        throw new TypeError("Unknown type size: " + e)
                    }
                }
                B(z = "cli.wasm") || (R = z,
                z = e.locateFile ? e.locateFile(R, c) : c + R);
                var V = void 0;
                function L(e) {
                    for (var t = "", n = e; v[n]; )
                        t += V[v[n++]];
                    return t
                }
                var q = {}
                  , G = {}
                  , J = {}
                  , K = 48
                  , X = 57;
                function Z(e) {
                    if (void 0 === e)
                        return "_unknown";
                    var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                    return t >= K && t <= X ? "_" + e : e
                }
                function Q(e, t) {
                    return {
                        [e = Z(e)]: function() {
                            return t.apply(this, arguments)
                        }
                    }[e]
                }
                function Y(e, t) {
                    var n = Q(t, (function(e) {
                        this.name = t,
                        this.message = e;
                        var n = new Error(e).stack;
                        void 0 !== n && (this.stack = this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""))
                    }
                    ));
                    return n.prototype = Object.create(e.prototype),
                    n.prototype.constructor = n,
                    n.prototype.toString = function() {
                        return void 0 === this.message ? this.name : this.name + ": " + this.message
                    }
                    ,
                    n
                }
                var ee = void 0;
                function te(e) {
                    throw new ee(e)
                }
                var ne = void 0;
                function re(e) {
                    throw new ne(e)
                }
                function ae(e, t, n={}) {
                    if (!("argPackAdvance"in t))
                        throw new TypeError("registerType registeredInstance requires argPackAdvance");
                    var r = t.name;
                    if (e || te('type "' + r + '" must have a positive integer typeid pointer'),
                    G.hasOwnProperty(e)) {
                        if (n.ignoreDuplicateRegistrations)
                            return;
                        te("Cannot register type '" + r + "' twice")
                    }
                    if (G[e] = t,
                    delete J[e],
                    q.hasOwnProperty(e)) {
                        var a = q[e];
                        delete q[e],
                        a.forEach((e => e()))
                    }
                }
                var ie = new function() {
                    this.allocated = [void 0],
                    this.freelist = [],
                    this.get = function(e) {
                        return this.allocated[e]
                    }
                    ,
                    this.allocate = function(e) {
                        let t = this.freelist.pop() || this.allocated.length;
                        return this.allocated[t] = e,
                        t
                    }
                    ,
                    this.free = function(e) {
                        this.allocated[e] = void 0,
                        this.freelist.push(e)
                    }
                }
                ;
                function oe(e) {
                    e >= ie.reserved && 0 == --ie.get(e).refcount && ie.free(e)
                }
                function se() {
                    for (var e = 0, t = ie.reserved; t < ie.allocated.length; ++t)
                        void 0 !== ie.allocated[t] && ++e;
                    return e
                }
                var ue = e => (e || te("Cannot use deleted val. handle = " + e),
                ie.get(e).value)
                  , ce = e => {
                    switch (e) {
                    case void 0:
                        return 1;
                    case null:
                        return 2;
                    case !0:
                        return 3;
                    case !1:
                        return 4;
                    default:
                        return ie.allocate({
                            refcount: 1,
                            value: e
                        })
                    }
                }
                ;
                function le(e) {
                    return this.fromWireType(w[e >> 2])
                }
                function fe(e, t) {
                    switch (t) {
                    case 2:
                        return function(e) {
                            return this.fromWireType(A[e >> 2])
                        }
                        ;
                    case 3:
                        return function(e) {
                            return this.fromWireType(T[e >> 3])
                        }
                        ;
                    default:
                        throw new TypeError("Unknown float type: " + e)
                    }
                }
                function de(e) {
                    for (; e.length; ) {
                        var t = e.pop();
                        e.pop()(t)
                    }
                }
                function he(e, t) {
                    if (!(e instanceof Function))
                        throw new TypeError("new_ called with constructor type " + typeof e + " which is not a function");
                    var n = Q(e.name || "unknownFunctionName", (function() {}
                    ));
                    n.prototype = e.prototype;
                    var r = new n
                      , a = e.apply(r, t);
                    return a instanceof Object ? a : r
                }
                function pe(t, n, r) {
                    e.hasOwnProperty(t) ? ((void 0 === r || void 0 !== e[t].overloadTable && void 0 !== e[t].overloadTable[r]) && te("Cannot register public name '" + t + "' twice"),
                    function(e, t, n) {
                        if (void 0 === e[t].overloadTable) {
                            var r = e[t];
                            e[t] = function() {
                                return e[t].overloadTable.hasOwnProperty(arguments.length) || te("Function '" + n + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[t].overloadTable + ")!"),
                                e[t].overloadTable[arguments.length].apply(this, arguments)
                            }
                            ,
                            e[t].overloadTable = [],
                            e[t].overloadTable[r.argCount] = r
                        }
                    }(e, t, t),
                    e.hasOwnProperty(r) && te("Cannot register multiple overloads of a function with the same number of arguments (" + r + ")!"),
                    e[t].overloadTable[r] = n) : (e[t] = n,
                    void 0 !== r && (e[t].numArguments = r))
                }
                var me = [];
                function ve(e) {
                    var t = me[e];
                    return t || (e >= me.length && (me.length = e + 1),
                    me[e] = t = _.get(e)),
                    t
                }
                function ye(t, n, r) {
                    return t.includes("j") ? function(t, n, r) {
                        var a = e["dynCall_" + t];
                        return r && r.length ? a.apply(null, [n].concat(r)) : a.call(null, n)
                    }(t, n, r) : ve(n).apply(null, r)
                }
                function ge(e, t) {
                    var n, r, a, i = (e = L(e)).includes("j") ? (n = e,
                    r = t,
                    a = [],
                    function() {
                        return a.length = 0,
                        Object.assign(a, arguments),
                        ye(n, r, a)
                    }
                    ) : ve(t);
                    return "function" != typeof i && te("unknown function pointer with signature " + e + ": " + t),
                    i
                }
                var we = void 0;
                function be(e) {
                    var t = Le(e)
                      , n = L(t);
                    return Ve(t),
                    n
                }
                function Ae(e, t, n) {
                    switch (t) {
                    case 0:
                        return n ? function(e) {
                            return m[e]
                        }
                        : function(e) {
                            return v[e]
                        }
                        ;
                    case 1:
                        return n ? function(e) {
                            return y[e >> 1]
                        }
                        : function(e) {
                            return g[e >> 1]
                        }
                        ;
                    case 2:
                        return n ? function(e) {
                            return w[e >> 2]
                        }
                        : function(e) {
                            return b[e >> 2]
                        }
                        ;
                    default:
                        throw new TypeError("Unknown integer type: " + e)
                    }
                }
                var Te = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
                function _e(e, t, n) {
                    for (var r = t + n, a = t; e[a] && !(a >= r); )
                        ++a;
                    if (a - t > 16 && e.buffer && Te)
                        return Te.decode(e.subarray(t, a));
                    for (var i = ""; t < a; ) {
                        var o = e[t++];
                        if (128 & o) {
                            var s = 63 & e[t++];
                            if (192 != (224 & o)) {
                                var u = 63 & e[t++];
                                if ((o = 224 == (240 & o) ? (15 & o) << 12 | s << 6 | u : (7 & o) << 18 | s << 12 | u << 6 | 63 & e[t++]) < 65536)
                                    i += String.fromCharCode(o);
                                else {
                                    var c = o - 65536;
                                    i += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                                }
                            } else
                                i += String.fromCharCode((31 & o) << 6 | s)
                        } else
                            i += String.fromCharCode(o)
                    }
                    return i
                }
                function Ce(e, t) {
                    return e ? _e(v, e, t) : ""
                }
                var Pe = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
                function je(e, t) {
                    for (var n = e, r = n >> 1, a = r + t / 2; !(r >= a) && g[r]; )
                        ++r;
                    if ((n = r << 1) - e > 32 && Pe)
                        return Pe.decode(v.subarray(e, n));
                    for (var i = "", o = 0; !(o >= t / 2); ++o) {
                        var s = y[e + 2 * o >> 1];
                        if (0 == s)
                            break;
                        i += String.fromCharCode(s)
                    }
                    return i
                }
                function Se(e, t, n) {
                    if (void 0 === n && (n = 2147483647),
                    n < 2)
                        return 0;
                    for (var r = t, a = (n -= 2) < 2 * e.length ? n / 2 : e.length, i = 0; i < a; ++i) {
                        var o = e.charCodeAt(i);
                        y[t >> 1] = o,
                        t += 2
                    }
                    return y[t >> 1] = 0,
                    t - r
                }
                function Ee(e) {
                    return 2 * e.length
                }
                function Me(e, t) {
                    for (var n = 0, r = ""; !(n >= t / 4); ) {
                        var a = w[e + 4 * n >> 2];
                        if (0 == a)
                            break;
                        if (++n,
                        a >= 65536) {
                            var i = a - 65536;
                            r += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                        } else
                            r += String.fromCharCode(a)
                    }
                    return r
                }
                function ke(e, t, n) {
                    if (void 0 === n && (n = 2147483647),
                    n < 4)
                        return 0;
                    for (var r = t, a = r + n - 4, i = 0; i < e.length; ++i) {
                        var o = e.charCodeAt(i);
                        if (o >= 55296 && o <= 57343 && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++i)),
                        w[t >> 2] = o,
                        (t += 4) + 4 > a)
                            break
                    }
                    return w[t >> 2] = 0,
                    t - r
                }
                function Fe(e) {
                    for (var t = 0, n = 0; n < e.length; ++n) {
                        var r = e.charCodeAt(n);
                        r >= 55296 && r <= 57343 && ++n,
                        t += 4
                    }
                    return t
                }
                function We(e, t) {
                    var n = G[e];
                    return void 0 === n && te(t + " has unknown type " + be(e)),
                    n
                }
                function xe(e, t) {
                    for (var n = new Array(e), r = 0; r < e; ++r)
                        n[r] = We(b[t + 4 * r >> 2], "parameter " + r);
                    return n
                }
                var ze = {}
                  , Re = []
                  , Ie = [];
                function Be(e) {
                    var t = h.buffer;
                    try {
                        return h.grow(e - t.byteLength + 65535 >>> 16),
                        P(),
                        1
                    } catch (e) {}
                }
                function He(t) {
                    p || M > 0 || (e.onExit && e.onExit(t),
                    C = !0),
                    o(t, new U(t))
                }
                var Oe = function(e, t) {
                    He(e)
                }
                  , Ue = [null, [], []];
                !function() {
                    for (var e = new Array(256), t = 0; t < 256; ++t)
                        e[t] = String.fromCharCode(t);
                    V = e
                }(),
                ee = e.BindingError = Y(Error, "BindingError"),
                ne = e.InternalError = Y(Error, "InternalError"),
                ie.allocated.push({
                    value: void 0
                }, {
                    value: null
                }, {
                    value: !0
                }, {
                    value: !1
                }),
                ie.reserved = ie.allocated.length,
                e.count_emval_handles = se,
                we = e.UnboundTypeError = Y(Error, "UnboundTypeError");
                var De, $e = {
                    n: function(e, t, n) {
                        throw new $(e).init(t, n),
                        e
                    },
                    q: function(e, t, n, r, a) {},
                    x: function(e, t, n, r, a) {
                        var i = N(n);
                        ae(e, {
                            name: t = L(t),
                            fromWireType: function(e) {
                                return !!e
                            },
                            toWireType: function(e, t) {
                                return t ? r : a
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: function(e) {
                                var r;
                                if (1 === n)
                                    r = m;
                                else if (2 === n)
                                    r = y;
                                else {
                                    if (4 !== n)
                                        throw new TypeError("Unknown boolean type size: " + t);
                                    r = w
                                }
                                return this.fromWireType(r[e >> i])
                            },
                            destructorFunction: null
                        })
                    },
                    w: function(e, t) {
                        ae(e, {
                            name: t = L(t),
                            fromWireType: function(e) {
                                var t = ue(e);
                                return oe(e),
                                t
                            },
                            toWireType: function(e, t) {
                                return ce(t)
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: le,
                            destructorFunction: null
                        })
                    },
                    g: function(e, t, n) {
                        var r = N(n);
                        ae(e, {
                            name: t = L(t),
                            fromWireType: function(e) {
                                return e
                            },
                            toWireType: function(e, t) {
                                return t
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: fe(t, r),
                            destructorFunction: null
                        })
                    },
                    c: function(t, n, r, a, i, o, s) {
                        var u = function(e, t) {
                            for (var n = [], r = 0; r < e; r++)
                                n.push(b[t + 4 * r >> 2]);
                            return n
                        }(n, r);
                        t = L(t),
                        i = ge(a, i),
                        pe(t, (function() {
                            !function(e, t) {
                                var n = []
                                  , r = {};
                                throw t.forEach((function e(t) {
                                    r[t] || G[t] || (J[t] ? J[t].forEach(e) : (n.push(t),
                                    r[t] = !0))
                                }
                                )),
                                new we(e + ": " + n.map(be).join([", "]))
                            }("Cannot call " + t + " due to unbound types", u)
                        }
                        ), n - 1),
                        function(e, t, n) {
                            function r(t) {
                                var r = n(t);
                                r.length !== e.length && re("Mismatched type converter count");
                                for (var a = 0; a < e.length; ++a)
                                    ae(e[a], r[a])
                            }
                            e.forEach((function(e) {
                                J[e] = t
                            }
                            ));
                            var a = new Array(t.length)
                              , i = []
                              , o = 0;
                            t.forEach(( (e, t) => {
                                G.hasOwnProperty(e) ? a[t] = G[e] : (i.push(e),
                                q.hasOwnProperty(e) || (q[e] = []),
                                q[e].push(( () => {
                                    a[t] = G[e],
                                    ++o === i.length && r(a)
                                }
                                )))
                            }
                            )),
                            0 === i.length && r(a)
                        }([], u, (function(r) {
                            var a = [r[0], null].concat(r.slice(1));
                            return function(t, n, r) {
                                e.hasOwnProperty(t) || re("Replacing nonexistant public symbol"),
                                void 0 !== e[t].overloadTable && void 0 !== r ? e[t].overloadTable[r] = n : (e[t] = n,
                                e[t].argCount = r)
                            }(t, function(e, t, n, r, a, i) {
                                var o = t.length;
                                o < 2 && te("argTypes array size mismatch! Must at least get return value and 'this' types!");
                                for (var s = null !== t[1] && null !== n, u = !1, c = 1; c < t.length; ++c)
                                    if (null !== t[c] && void 0 === t[c].destructorFunction) {
                                        u = !0;
                                        break
                                    }
                                var l = "void" !== t[0].name
                                  , f = ""
                                  , d = "";
                                for (c = 0; c < o - 2; ++c)
                                    f += (0 !== c ? ", " : "") + "arg" + c,
                                    d += (0 !== c ? ", " : "") + "arg" + c + "Wired";
                                var h = "return function " + Z(e) + "(" + f + ") {\nif (arguments.length !== " + (o - 2) + ") {\nthrowBindingError('function " + e + " called with ' + arguments.length + ' arguments, expected " + (o - 2) + " args!');\n}\n";
                                u && (h += "var destructors = [];\n");
                                var p = u ? "destructors" : "null"
                                  , m = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"]
                                  , v = [te, r, a, de, t[0], t[1]];
                                for (s && (h += "var thisWired = classParam.toWireType(" + p + ", this);\n"),
                                c = 0; c < o - 2; ++c)
                                    h += "var arg" + c + "Wired = argType" + c + ".toWireType(" + p + ", arg" + c + "); // " + t[c + 2].name + "\n",
                                    m.push("argType" + c),
                                    v.push(t[c + 2]);
                                if (s && (d = "thisWired" + (d.length > 0 ? ", " : "") + d),
                                h += (l || i ? "var rv = " : "") + "invoker(fn" + (d.length > 0 ? ", " : "") + d + ");\n",
                                u)
                                    h += "runDestructors(destructors);\n";
                                else
                                    for (c = s ? 1 : 2; c < t.length; ++c) {
                                        var y = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired";
                                        null !== t[c].destructorFunction && (h += y + "_dtor(" + y + "); // " + t[c].name + "\n",
                                        m.push(y + "_dtor"),
                                        v.push(t[c].destructorFunction))
                                    }
                                return l && (h += "var ret = retType.fromWireType(rv);\nreturn ret;\n"),
                                h += "}\n",
                                m.push(h),
                                he(Function, m).apply(null, v)
                            }(t, a, null, i, o, s), n - 1),
                            []
                        }
                        ))
                    },
                    b: function(e, t, n, r, a) {
                        t = L(t),
                        -1 === a && (a = 4294967295);
                        var i = N(n)
                          , o = e => e;
                        if (0 === r) {
                            var s = 32 - 8 * n;
                            o = e => e << s >>> s
                        }
                        var u = t.includes("unsigned");
                        ae(e, {
                            name: t,
                            fromWireType: o,
                            toWireType: u ? function(e, t) {
                                return this.name,
                                t >>> 0
                            }
                            : function(e, t) {
                                return this.name,
                                t
                            }
                            ,
                            argPackAdvance: 8,
                            readValueFromPointer: Ae(t, i, 0 !== r),
                            destructorFunction: null
                        })
                    },
                    a: function(e, t, n) {
                        var r = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];
                        function a(e) {
                            var t = b
                              , n = t[e >>= 2]
                              , a = t[e + 1];
                            return new r(t.buffer,a,n)
                        }
                        ae(e, {
                            name: n = L(n),
                            fromWireType: a,
                            argPackAdvance: 8,
                            readValueFromPointer: a
                        }, {
                            ignoreDuplicateRegistrations: !0
                        })
                    },
                    h: function(e, t) {
                        var n = "std::string" === (t = L(t));
                        ae(e, {
                            name: t,
                            fromWireType: function(e) {
                                var t, r = b[e >> 2], a = e + 4;
                                if (n)
                                    for (var i = a, o = 0; o <= r; ++o) {
                                        var s = a + o;
                                        if (o == r || 0 == v[s]) {
                                            var u = Ce(i, s - i);
                                            void 0 === t ? t = u : (t += String.fromCharCode(0),
                                            t += u),
                                            i = s + 1
                                        }
                                    }
                                else {
                                    var c = new Array(r);
                                    for (o = 0; o < r; ++o)
                                        c[o] = String.fromCharCode(v[a + o]);
                                    t = c.join("")
                                }
                                return Ve(e),
                                t
                            },
                            toWireType: function(e, t) {
                                var r;
                                t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                var a = "string" == typeof t;
                                a || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || te("Cannot pass non-string to std::string"),
                                r = n && a ? function(e) {
                                    for (var t = 0, n = 0; n < e.length; ++n) {
                                        var r = e.charCodeAt(n);
                                        r <= 127 ? t++ : r <= 2047 ? t += 2 : r >= 55296 && r <= 57343 ? (t += 4,
                                        ++n) : t += 3
                                    }
                                    return t
                                }(t) : t.length;
                                var i = Ne(4 + r + 1)
                                  , o = i + 4;
                                if (b[i >> 2] = r,
                                n && a)
                                    !function(e, t, n, r) {
                                        if (!(r > 0))
                                            return 0;
                                        for (var a = n + r - 1, i = 0; i < e.length; ++i) {
                                            var o = e.charCodeAt(i);
                                            if (o >= 55296 && o <= 57343 && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++i)),
                                            o <= 127) {
                                                if (n >= a)
                                                    break;
                                                t[n++] = o
                                            } else if (o <= 2047) {
                                                if (n + 1 >= a)
                                                    break;
                                                t[n++] = 192 | o >> 6,
                                                t[n++] = 128 | 63 & o
                                            } else if (o <= 65535) {
                                                if (n + 2 >= a)
                                                    break;
                                                t[n++] = 224 | o >> 12,
                                                t[n++] = 128 | o >> 6 & 63,
                                                t[n++] = 128 | 63 & o
                                            } else {
                                                if (n + 3 >= a)
                                                    break;
                                                t[n++] = 240 | o >> 18,
                                                t[n++] = 128 | o >> 12 & 63,
                                                t[n++] = 128 | o >> 6 & 63,
                                                t[n++] = 128 | 63 & o
                                            }
                                        }
                                        t[n] = 0
                                    }(t, v, o, r + 1);
                                else if (a)
                                    for (var s = 0; s < r; ++s) {
                                        var u = t.charCodeAt(s);
                                        u > 255 && (Ve(o),
                                        te("String has UTF-16 code units that do not fit in 8 bits")),
                                        v[o + s] = u
                                    }
                                else
                                    for (s = 0; s < r; ++s)
                                        v[o + s] = t[s];
                                return null !== e && e.push(Ve, i),
                                i
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: le,
                            destructorFunction: function(e) {
                                Ve(e)
                            }
                        })
                    },
                    d: function(e, t, n) {
                        var r, a, i, o, s;
                        n = L(n),
                        2 === t ? (r = je,
                        a = Se,
                        o = Ee,
                        i = () => g,
                        s = 1) : 4 === t && (r = Me,
                        a = ke,
                        o = Fe,
                        i = () => b,
                        s = 2),
                        ae(e, {
                            name: n,
                            fromWireType: function(e) {
                                for (var n, a = b[e >> 2], o = i(), u = e + 4, c = 0; c <= a; ++c) {
                                    var l = e + 4 + c * t;
                                    if (c == a || 0 == o[l >> s]) {
                                        var f = r(u, l - u);
                                        void 0 === n ? n = f : (n += String.fromCharCode(0),
                                        n += f),
                                        u = l + t
                                    }
                                }
                                return Ve(e),
                                n
                            },
                            toWireType: function(e, r) {
                                "string" != typeof r && te("Cannot pass non-string to C++ string type " + n);
                                var i = o(r)
                                  , u = Ne(4 + i + t);
                                return b[u >> 2] = i >> s,
                                a(r, u + 4, i + t),
                                null !== e && e.push(Ve, u),
                                u
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: le,
                            destructorFunction: function(e) {
                                Ve(e)
                            }
                        })
                    },
                    y: function(e, t) {
                        ae(e, {
                            isVoid: !0,
                            name: t = L(t),
                            argPackAdvance: 0,
                            fromWireType: function() {},
                            toWireType: function(e, t) {}
                        })
                    },
                    l: function(e, t, n) {
                        e = ue(e),
                        t = We(t, "emval::as");
                        var r = []
                          , a = ce(r);
                        return b[n >> 2] = a,
                        t.toWireType(r, e)
                    },
                    m: function(e, t, n, r) {
                        e = ue(e);
                        for (var a = xe(t, n), i = new Array(t), o = 0; o < t; ++o) {
                            var s = a[o];
                            i[o] = s.readValueFromPointer(r),
                            r += s.argPackAdvance
                        }
                        var u = e.apply(void 0, i);
                        return ce(u)
                    },
                    j: function(e, t, n, r) {
                        var a, i;
                        (e = Re[e])(t = ue(t), n = void 0 === (i = ze[a = n]) ? L(a) : i, null, r)
                    },
                    e: oe,
                    z: function(e, t) {
                        var n = xe(e, t)
                          , r = n[0]
                          , a = r.name + "_$" + n.slice(1).map((function(e) {
                            return e.name
                        }
                        )).join("_") + "$"
                          , i = Ie[a];
                        if (void 0 !== i)
                            return i;
                        for (var o = ["retType"], s = [r], u = "", c = 0; c < e - 1; ++c)
                            u += (0 !== c ? ", " : "") + "arg" + c,
                            o.push("argType" + c),
                            s.push(n[1 + c]);
                        var l = "return function " + Z("methodCaller_" + a) + "(handle, name, destructors, args) {\n"
                          , f = 0;
                        for (c = 0; c < e - 1; ++c)
                            l += "    var arg" + c + " = argType" + c + ".readValueFromPointer(args" + (f ? "+" + f : "") + ");\n",
                            f += n[c + 1].argPackAdvance;
                        for (l += "    var rv = handle[name](" + u + ");\n",
                        c = 0; c < e - 1; ++c)
                            n[c + 1].deleteObject && (l += "    argType" + c + ".deleteObject(arg" + c + ");\n");
                        r.isVoid || (l += "    return retType.toWireType(destructors, rv);\n"),
                        l += "};\n",
                        o.push(l);
                        var d, h, p = he(Function, o).apply(null, s);
                        return d = p,
                        h = Re.length,
                        Re.push(d),
                        i = h,
                        Ie[a] = i,
                        i
                    },
                    o: function(e) {
                        e > 4 && (ie.get(e).refcount += 1)
                    },
                    u: function() {
                        return ce([])
                    },
                    k: function(e) {
                        de(ue(e)),
                        oe(e)
                    },
                    f: function() {
                        x("")
                    },
                    s: function(e, t, n) {
                        v.copyWithin(e, t, t + n)
                    },
                    r: function(e) {
                        var t, n, r = v.length, a = 2147483648;
                        if ((e >>>= 0) > a)
                            return !1;
                        for (var i = 1; i <= 4; i *= 2) {
                            var o = r * (1 + .2 / i);
                            if (o = Math.min(o, e + 100663296),
                            Be(Math.min(a, (t = Math.max(e, o)) + ((n = 65536) - t % n) % n)))
                                return !0
                        }
                        return !1
                    },
                    i: Oe,
                    t: function(e) {
                        return 52
                    },
                    p: function(e, t, n, r, a) {
                        return 70
                    },
                    v: function(e, t, n, r) {
                        for (var a, i, o, s = 0, u = 0; u < n; u++) {
                            var c = b[t >> 2]
                              , l = b[t + 4 >> 2];
                            t += 8;
                            for (var h = 0; h < l; h++)
                                a = e,
                                i = v[c + h],
                                o = void 0,
                                o = Ue[a],
                                0 === i || 10 === i ? ((1 === a ? f : d)(_e(o, 0)),
                                o.length = 0) : o.push(i);
                            s += l
                        }
                        return b[r >> 2] = s,
                        0
                    }
                }, Ne = (function() {
                    var t, n, a, i, o = {
                        a: $e
                    };
                    function s(t, n) {
                        var r, a = t.exports;
                        return e.asm = a,
                        h = e.asm.A,
                        P(),
                        _ = e.asm.G,
                        r = e.asm.B,
                        S.unshift(r),
                        function(t) {
                            if (k--,
                            e.monitorRunDependencies && e.monitorRunDependencies(k),
                            0 == k && (null !== F && (clearInterval(F),
                            F = null),
                            W)) {
                                var n = W;
                                W = null,
                                n()
                            }
                        }(),
                        a
                    }
                    if (k++,
                    e.monitorRunDependencies && e.monitorRunDependencies(k),
                    e.instantiateWasm)
                        try {
                            return e.instantiateWasm(o, s)
                        } catch (e) {
                            d("Module.instantiateWasm callback failed with error: " + e),
                            r(e)
                        }
                    (t = l,
                    n = z,
                    a = o,
                    i = function(e) {
                        s(e.instance)
                    }
                    ,
                    t || "function" != typeof WebAssembly.instantiateStreaming || B(n) || "function" != typeof fetch ? O(n, a, i) : fetch(n, {
                        credentials: "same-origin"
                    }).then((e => WebAssembly.instantiateStreaming(e, a).then(i, (function(e) {
                        return d("wasm streaming compile failed: " + e),
                        d("falling back to ArrayBuffer instantiation"),
                        O(n, a, i)
                    }
                    ))))).catch(r)
                }(),
                e._malloc = function() {
                    return (Ne = e._malloc = e.asm.C).apply(null, arguments)
                }
                ), Ve = function() {
                    return (Ve = e.asm.D).apply(null, arguments)
                }, Le = function() {
                    return (Le = e.asm.E).apply(null, arguments)
                }, qe = (e.__embind_initialize_bindings = function() {
                    return (e.__embind_initialize_bindings = e.asm.F).apply(null, arguments)
                }
                ,
                function() {
                    return (qe = e.asm.H).apply(null, arguments)
                }
                );
                function Ge() {
                    function t() {
                        De || (De = !0,
                        e.calledRun = !0,
                        C || (D(S),
                        n(e),
                        e.onRuntimeInitialized && e.onRuntimeInitialized(),
                        function() {
                            if (e.postRun)
                                for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length; )
                                    t = e.postRun.shift(),
                                    E.unshift(t);
                            var t;
                            D(E)
                        }()))
                    }
                    k > 0 || (function() {
                        if (e.preRun)
                            for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length; )
                                t = e.preRun.shift(),
                                j.unshift(t);
                        var t;
                        D(j)
                    }(),
                    k > 0 || (e.setStatus ? (e.setStatus("Running..."),
                    setTimeout((function() {
                        setTimeout((function() {
                            e.setStatus("")
                        }
                        ), 1),
                        t()
                    }
                    ), 1)) : t()))
                }
                if (e.dynCall_iiijii = function() {
                    return (e.dynCall_iiijii = e.asm.I).apply(null, arguments)
                }
                ,
                e.dynCall_viji = function() {
                    return (e.dynCall_viji = e.asm.J).apply(null, arguments)
                }
                ,
                e.dynCall_iiiji = function() {
                    return (e.dynCall_iiiji = e.asm.K).apply(null, arguments)
                }
                ,
                e.dynCall_iiiij = function() {
                    return (e.dynCall_iiiij = e.asm.L).apply(null, arguments)
                }
                ,
                e.dynCall_ji = function() {
                    return (e.dynCall_ji = e.asm.M).apply(null, arguments)
                }
                ,
                e.dynCall_jiji = function() {
                    return (e.dynCall_jiji = e.asm.N).apply(null, arguments)
                }
                ,
                W = function e() {
                    De || Ge(),
                    De || (W = e)
                }
                ,
                e.preInit)
                    for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); e.preInit.length > 0; )
                        e.preInit.pop()();
                return Ge(),
                e.ready
            }
            );
            e.exports = n
        }
    }
      , t = {};
    function n(r) {
        var a = t[r];
        if (void 0 !== a)
            return a.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n),
        i.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e, t) => {
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    n.p = "",
    ( () => {
        "use strict";
        var e = function(e) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, n = e[Symbol.asyncIterator];
            return n ? n.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](),
            t = {},
            r("next"),
            r("throw"),
            r("return"),
            t[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            t);
            function r(n) {
                t[n] = e[n] && function(t) {
                    return new Promise((function(r, a) {
                        (function(e, t, n, r) {
                            Promise.resolve(r).then((function(t) {
                                e({
                                    value: t,
                                    done: n
                                })
                            }
                            ), t)
                        }
                        )(r, a, (t = e[n](t)).done, t.value)
                    }
                    ))
                }
            }
        };
        const t = [{
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
        let r = a();
        async function a() {
            var n, r, a, i;
            const o = await navigator.storage.getDirectory()
              , s = new Map;
            try {
                for (var u, c = !0, l = e(o.entries()); !(n = (u = await l.next()).done); c = !0) {
                    i = u.value,
                    c = !1;
                    const [e,t] = i;
                    if (e.endsWith(".mtime") && "file" === t.kind) {
                        const n = await t.getFile();
                        if (0 === n.size)
                            continue;
                        const r = await n.text().then((e => new Date(e)));
                        s.set(e.slice(0, -10), r)
                    }
                }
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    c || n || !(a = l.return) || await a.call(l)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            const f = await Promise.all(Array.from(s.entries(), (async ([e,t]) => ({
                code: e,
                installed: !0,
                outdated: 304 !== (await fetch(`https://db.wiki.spaceface.dev/${e}.bin`, {
                    headers: {
                        "If-Modified-Since": t.toUTCString(),
                        range: "bytes=0-0"
                    }
                })).status
            }))));
            for (const e of t)
                if (s.has(e.code)) {
                    const t = f.findIndex((t => t.code === e.code));
                    f[t] = Object.assign(Object.assign({}, e), f[t])
                } else
                    f.push(Object.assign(Object.assign({}, e), {
                        installed: !1
                    }));
            f.sort(( (e, n) => t.findIndex((t => t.code === e.code)) - t.findIndex((e => e.code === n.code))));
            return (f.find((e => e.installed)) || f[0]).selected = !0,
            f
        }
        async function i() {
            const e = await a();
            r = new Promise((t => t(e)))
        }
        let o = null;
        class s extends TransformStream {
            update(e) {
                const t = performance.now()
                  , n = e / (t - this.last_update) * 1e3;
                this.samples.push(n);
                let r = 0;
                this.n < this.NR_SAMPLES ? this.samples.push(n) : this.samples[this.n % this.NR_SAMPLES] = n,
                r = this.samples.reduce(( (e, t) => e + t), 0) / this.samples.length,
                this.n++,
                this.last_update = t;
                const a = (this.content_length - this.downloaded) / r + .5
                  , i = Math.floor(a / 60)
                  , o = Math.floor(a % 60)
                  , s = {
                    percent: (this.downloaded / this.content_length * 100).toFixed(1),
                    speed: r,
                    eta: `${i.toString().padStart(2, "0")}:${o.toString().padStart(2, "0")}`
                };
                postMessage(Object.assign({
                    type: "download-progress"
                }, s))
            }
            constructor(e) {
                super({
                    start() {},
                    transform: async (e, t) => {
                        e = await e,
                        this.downloaded += e.length,
                        t.enqueue(e),
                        this.update(e.length)
                    }
                }),
                this.downloaded = 0,
                this.NR_SAMPLES = 10,
                this.n = 0,
                this.samples = [],
                this.last_update = performance.now(),
                this.content_length = e
            }
        }
        const u = n.p + "b7334282d9befdaec9a199bd91945501.wasm";
        var c = n(59)
          , l = n.n(c);
        let f;
        onmessage = async e => {
            "init" === e.data.type ? async function({lang: e, should_download: t=!0, should_update: n=!0}) {
                if (f)
                    try {
                        f.exit(1)
                    } catch (e) {}
                else
                    f = await l()({
                        locateFile: e => e.endsWith(".wasm") ? u : e,
                        print: (...e) => {}
                    });
                const a = await async function(e, t=!0, n=!0) {
                    o || (o = await navigator.storage.getDirectory());
                    const a = `${e}.bin`
                      , i = `${e}.bin.mtime`
                      , u = await o.getFileHandle(a).catch((e => null))
                      , c = await o.getFileHandle(i).then((e => e.getFile())).catch((e => null))
                      , l = c && await c.text().then((e => new Date(e))).catch((e => null));
                    if (u && (await u.getFile()).size > 0) {
                        const t = new Headers;
                        t.set("Range", "bytes=0-0"),
                        l && t.set("If-Modified-Since", l.toUTCString());
                        let c = await fetch(`https://db.wiki.spaceface.dev/${e}.bin`, {
                            headers: t
                        });
                        if (304 === c.status)
                            return u;
                        if (!n)
                            return u;
                        postMessage({
                            type: "download-start",
                            lang: (await r).find((t => t.code === e))
                        }),
                        c = await fetch(`https://db.wiki.spaceface.dev/${e}.bin?SW_CACHE=NONE`);
                        const f = new Date(c.headers.get("last-modified") || "");
                        f.setMinutes(f.getMinutes() + 1);
                        const d = await o.getFileHandle(a, {
                            create: !0
                        })
                          , h = await o.getFileHandle(i, {
                            create: !0
                        })
                          , p = await d.createSyncAccessHandle()
                          , m = new s(+(c.headers.get("Content-Length") || "0"))
                          , v = c.body.pipeThrough(m).getReader();
                        for (let e = 0; ; ) {
                            const {done: t, value: n} = await v.read();
                            if (t)
                                break;
                            p.write(n, {
                                at: e
                            }),
                            e += n.length
                        }
                        await p.flush(),
                        await p.close();
                        const y = await h.createSyncAccessHandle();
                        y.write((new TextEncoder).encode(f.toUTCString())),
                        await y.flush(),
                        await y.close();
                        for (const t of await caches.keys()) {
                            const n = await caches.open(t);
                            await n.delete(new Request(`https://db.wiki.spaceface.dev/${e}.bin`))
                        }
                        return await new Promise((e => setTimeout(e, 100))),
                        postMessage({
                            type: "download-done"
                        }),
                        d
                    }
                    if (!t)
                        return null;
                    postMessage({
                        type: "download-start",
                        lang: (await r).find((t => t.code === e))
                    });
                    const f = await fetch(`https://db.wiki.spaceface.dev/${e}.bin?SW_CACHE=NONE`)
                      , d = new Date(f.headers.get("last-modified") || "");
                    d.setMinutes(d.getMinutes() + 1);
                    const h = await o.getFileHandle(a, {
                        create: !0
                    })
                      , p = await o.getFileHandle(i, {
                        create: !0
                    })
                      , m = await h.createSyncAccessHandle()
                      , v = new s(+(f.headers.get("Content-Length") || "0"))
                      , y = f.body.pipeThrough(v).getReader();
                    for (let e = 0; ; ) {
                        const {done: t, value: n} = await y.read();
                        if (t)
                            break;
                        m.write(n, {
                            at: e
                        }),
                        e += n.length
                    }
                    await m.flush(),
                    await m.close();
                    const g = await p.createSyncAccessHandle();
                    return g.write((new TextEncoder).encode(d.toUTCString())),
                    await g.flush(),
                    await g.close(),
                    await new Promise((e => setTimeout(e, 100))),
                    postMessage({
                        type: "download-done"
                    }),
                    h
                }(e, t, n);
                if (!a)
                    return;
                const i = await a.getFile().then((e => e.size))
                  , c = await async function(e, t) {
                    for (; ; )
                        try {
                            return await e()
                        } catch (e) {
                            await new Promise((e => setTimeout(e, t)))
                        }
                }(( () => a.createSyncAccessHandle()), 100);
                if (!c)
                    return;
                const d = 1 << 20
                  , h = f._malloc(d);
                let p = performance.now()
                  , m = 0;
                f.init(h, ( () => {
                    const e = f.HEAPU8.subarray(h, h + d)
                      , t = c.read(e, {
                        at: m
                    });
                    return m += t,
                    postMessage({
                        type: "init-progress",
                        progress: m / i
                    }),
                    t
                }
                )),
                await c.close(),
                postMessage({
                    type: "init-done",
                    elapsed: +(performance.now() - p)
                })
            }(e.data) : "search" === e.data.type ? async function(e) {
                let t = performance.now();
                const n = f.search(e.from, e.to);
                postMessage({
                    type: "search-done",
                    path: n,
                    from: e.from,
                    to: e.to,
                    elapsed: +(performance.now() - t)
                })
            }(e.data) : "download" === e.data.type || "remove" === e.data.type && await async function(e) {
                const t = await navigator.storage.getDirectory()
                  , n = await t.getFileHandle(`${e}.bin`)
                  , r = await t.getFileHandle(`${e}.bin.mtime`)
                  , a = await n.createSyncAccessHandle();
                await a.truncate(0),
                await a.flush(),
                await a.close();
                const o = await r.createSyncAccessHandle();
                await o.truncate(0),
                await o.flush(),
                await o.close(),
                setTimeout(i, 100)
            }(e.data.code)
        }
    }
    )()
}
)();
