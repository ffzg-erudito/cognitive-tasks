/*! For license information please see lab.js.LICENSE.txt */ ! function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("lab", [], n) : "object" == typeof exports ? exports.lab = n() : t.lab = n()
}(window, (function () {
    return function (t) {
        var n = {};

        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            })
        }, e.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function (t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var o in t) e.d(r, o, function (n) {
                    return t[n]
                }.bind(null, o));
            return r
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.p = "", e(e.s = 304)
    }([function (t, n, e) {
        var r = e(2),
            o = e(24).f,
            i = e(28),
            a = e(25),
            u = e(136),
            s = e(191),
            c = e(91);
        t.exports = function (t, n) {
            var e, f, l, p, h, d = t.target,
                v = t.global,
                g = t.stat;
            if (e = v ? r : g ? r[d] || u(d, {}) : (r[d] || {}).prototype)
                for (f in n) {
                    if (p = n[f], l = t.noTargetGet ? (h = o(e, f)) && h.value : e[f], !c(v ? f : d + (g ? "." : "#") + f, t.forced) && void 0 !== l) {
                        if (typeof p == typeof l) continue;
                        s(p, l)
                    }(t.sham || l && l.sham) && i(p, "sham", !0), a(e, f, p, t)
                }
        }
    }, function (t, n) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, n, e) {
        (function (n) {
            var e = function (t) {
                return t && t.Math == Math && t
            };
            t.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof n && n) || Function("return this")()
        }).call(this, e(134))
    }, function (t, n) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, n, e) {
        var r = e(3);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(String(t) + " is not an object");
            return t
        }
    }, function (t, n, e) {
        var r = e(1);
        t.exports = !r((function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, n, e) {
        "use strict";
        var r, o = e(5),
            i = e(2),
            a = e(3),
            u = e(17),
            s = e(98),
            c = e(28),
            f = e(25),
            l = e(10).f,
            p = e(50),
            h = e(76),
            d = e(7),
            v = e(87),
            g = i.DataView,
            y = g && g.prototype,
            m = i.Int8Array,
            b = m && m.prototype,
            w = i.Uint8ClampedArray,
            x = w && w.prototype,
            O = m && p(m),
            S = b && p(b),
            j = Object.prototype,
            E = j.isPrototypeOf,
            A = d("toStringTag"),
            k = v("TYPED_ARRAY_TAG"),
            T = !(!i.ArrayBuffer || !g),
            P = T && !!h && "Opera" !== s(i.opera),
            R = !1,
            _ = {
                Int8Array: 1,
                Uint8Array: 1,
                Uint8ClampedArray: 1,
                Int16Array: 2,
                Uint16Array: 2,
                Int32Array: 4,
                Uint32Array: 4,
                Float32Array: 4,
                Float64Array: 8
            },
            M = function (t) {
                return a(t) && u(_, s(t))
            };
        for (r in _) i[r] || (P = !1);
        if ((!P || "function" != typeof O || O === Function.prototype) && (O = function () {
                throw TypeError("Incorrect invocation")
            }, P))
            for (r in _) i[r] && h(i[r], O);
        if ((!P || !S || S === j) && (S = O.prototype, P))
            for (r in _) i[r] && h(i[r].prototype, S);
        if (P && p(x) !== S && h(x, S), o && !u(S, A))
            for (r in R = !0, l(S, A, {
                    get: function () {
                        return a(this) ? this[k] : void 0
                    }
                }), _) i[r] && c(i[r], k, r);
        T && h && p(y) !== j && h(y, j), t.exports = {
            NATIVE_ARRAY_BUFFER: T,
            NATIVE_ARRAY_BUFFER_VIEWS: P,
            TYPED_ARRAY_TAG: R && k,
            aTypedArray: function (t) {
                if (M(t)) return t;
                throw TypeError("Target is not a typed array")
            },
            aTypedArrayConstructor: function (t) {
                if (h) {
                    if (E.call(O, t)) return t
                } else
                    for (var n in _)
                        if (u(_, r)) {
                            var e = i[n];
                            if (e && (t === e || E.call(e, t))) return t
                        } throw TypeError("Target is not a typed array constructor")
            },
            exportTypedArrayMethod: function (t, n, e) {
                if (o) {
                    if (e)
                        for (var r in _) {
                            var a = i[r];
                            a && u(a.prototype, t) && delete a.prototype[t]
                        }
                    S[t] && !e || f(S, t, e ? n : P && b[t] || n)
                }
            },
            exportTypedArrayStaticMethod: function (t, n, e) {
                var r, a;
                if (o) {
                    if (h) {
                        if (e)
                            for (r in _)(a = i[r]) && u(a, t) && delete a[t];
                        if (O[t] && !e) return;
                        try {
                            return f(O, t, e ? n : P && m[t] || n)
                        } catch (t) {}
                    }
                    for (r in _) !(a = i[r]) || a[t] && !e || f(a, t, n)
                }
            },
            isView: function (t) {
                var n = s(t);
                return "DataView" === n || u(_, n)
            },
            isTypedArray: M,
            TypedArray: O,
            TypedArrayPrototype: S
        }
    }, function (t, n, e) {
        var r = e(2),
            o = e(138),
            i = e(17),
            a = e(87),
            u = e(142),
            s = e(193),
            c = o("wks"),
            f = r.Symbol,
            l = s ? f : f && f.withoutSetter || a;
        t.exports = function (t) {
            return i(c, t) || (u && i(f, t) ? c[t] = f[t] : c[t] = l("Symbol." + t)), c[t]
        }
    }, function (t, n, e) {
        var r = e(42),
            o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(34),
            o = e(60),
            i = e(96),
            a = e(29),
            u = e(152),
            s = a.set,
            c = a.getterFor("Array Iterator");
        t.exports = u(Array, "Array", (function (t, n) {
            s(this, {
                type: "Array Iterator",
                target: r(t),
                index: 0,
                kind: n
            })
        }), (function () {
            var t = c(this),
                n = t.target,
                e = t.kind,
                r = t.index++;
            return !n || r >= n.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == e ? {
                value: r,
                done: !1
            } : "values" == e ? {
                value: n[r],
                done: !1
            } : {
                value: [r, n[r]],
                done: !1
            }
        }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
    }, function (t, n, e) {
        var r = e(5),
            o = e(188),
            i = e(4),
            a = e(46),
            u = Object.defineProperty;
        n.f = r ? u : function (t, n, e) {
            if (i(t), n = a(n, !0), i(e), o) try {
                return u(t, n, e)
            } catch (t) {}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported");
            return "value" in e && (t[n] = e.value), t
        }
    }, function (t, n, e) {
        var r = e(146),
            o = e(25),
            i = e(332);
        r || o(Object.prototype, "toString", i, {
            unsafe: !0
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(110).charAt,
            o = e(29),
            i = e(152),
            a = o.set,
            u = o.getterFor("String Iterator");
        i(String, "String", (function (t) {
            a(this, {
                type: "String Iterator",
                string: String(t),
                index: 0
            })
        }), (function () {
            var t, n = u(this),
                e = n.string,
                o = n.index;
            return o >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, o), n.index += t.length, {
                value: t,
                done: !1
            })
        }))
    }, function (t, n, e) {
        var r = e(2),
            o = e(259),
            i = e(9),
            a = e(28),
            u = e(7),
            s = u("iterator"),
            c = u("toStringTag"),
            f = i.values;
        for (var l in o) {
            var p = r[l],
                h = p && p.prototype;
            if (h) {
                if (h[s] !== f) try {
                    a(h, s, f)
                } catch (t) {
                    h[s] = f
                }
                if (h[c] || a(h, c, l), o[l])
                    for (var d in i)
                        if (h[d] !== i[d]) try {
                            a(h, d, i[d])
                        } catch (t) {
                            h[d] = i[d]
                        }
            }
        }
    }, function (t, n, e) {
        var r = e(27);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(2),
            i = e(41),
            a = e(47),
            u = e(5),
            s = e(142),
            c = e(193),
            f = e(1),
            l = e(17),
            p = e(65),
            h = e(3),
            d = e(4),
            v = e(14),
            g = e(34),
            y = e(46),
            m = e(56),
            b = e(51),
            w = e(92),
            x = e(64),
            O = e(195),
            S = e(141),
            j = e(24),
            E = e(10),
            A = e(104),
            k = e(28),
            T = e(25),
            P = e(138),
            R = e(105),
            _ = e(88),
            M = e(87),
            I = e(7),
            C = e(196),
            F = e(31),
            N = e(48),
            L = e(29),
            D = e(21).forEach,
            U = R("hidden"),
            q = I("toPrimitive"),
            B = L.set,
            z = L.getterFor("Symbol"),
            V = Object.prototype,
            W = o.Symbol,
            H = i("JSON", "stringify"),
            $ = j.f,
            G = E.f,
            Y = O.f,
            J = A.f,
            K = P("symbols"),
            X = P("op-symbols"),
            Q = P("string-to-symbol-registry"),
            Z = P("symbol-to-string-registry"),
            tt = P("wks"),
            nt = o.QObject,
            et = !nt || !nt.prototype || !nt.prototype.findChild,
            rt = u && f((function () {
                return 7 != b(G({}, "a", {
                    get: function () {
                        return G(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            })) ? function (t, n, e) {
                var r = $(V, n);
                r && delete V[n], G(t, n, e), r && t !== V && G(V, n, r)
            } : G,
            ot = function (t, n) {
                var e = K[t] = b(W.prototype);
                return B(e, {
                    type: "Symbol",
                    tag: t,
                    description: n
                }), u || (e.description = n), e
            },
            it = c ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return Object(t) instanceof W
            },
            at = function (t, n, e) {
                t === V && at(X, n, e), d(t);
                var r = y(n, !0);
                return d(e), l(K, r) ? (e.enumerable ? (l(t, U) && t[U][r] && (t[U][r] = !1), e = b(e, {
                    enumerable: m(0, !1)
                })) : (l(t, U) || G(t, U, m(1, {})), t[U][r] = !0), rt(t, r, e)) : G(t, r, e)
            },
            ut = function (t, n) {
                d(t);
                var e = g(n),
                    r = w(e).concat(lt(e));
                return D(r, (function (n) {
                    u && !st.call(e, n) || at(t, n, e[n])
                })), t
            },
            st = function (t) {
                var n = y(t, !0),
                    e = J.call(this, n);
                return !(this === V && l(K, n) && !l(X, n)) && (!(e || !l(this, n) || !l(K, n) || l(this, U) && this[U][n]) || e)
            },
            ct = function (t, n) {
                var e = g(t),
                    r = y(n, !0);
                if (e !== V || !l(K, r) || l(X, r)) {
                    var o = $(e, r);
                    return !o || !l(K, r) || l(e, U) && e[U][r] || (o.enumerable = !0), o
                }
            },
            ft = function (t) {
                var n = Y(g(t)),
                    e = [];
                return D(n, (function (t) {
                    l(K, t) || l(_, t) || e.push(t)
                })), e
            },
            lt = function (t) {
                var n = t === V,
                    e = Y(n ? X : g(t)),
                    r = [];
                return D(e, (function (t) {
                    !l(K, t) || n && !l(V, t) || r.push(K[t])
                })), r
            };
        (s || (T((W = function () {
            if (this instanceof W) throw TypeError("Symbol is not a constructor");
            var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                n = M(t),
                e = function (t) {
                    this === V && e.call(X, t), l(this, U) && l(this[U], n) && (this[U][n] = !1), rt(this, n, m(1, t))
                };
            return u && et && rt(V, n, {
                configurable: !0,
                set: e
            }), ot(n, t)
        }).prototype, "toString", (function () {
            return z(this).tag
        })), T(W, "withoutSetter", (function (t) {
            return ot(M(t), t)
        })), A.f = st, E.f = at, j.f = ct, x.f = O.f = ft, S.f = lt, C.f = function (t) {
            return ot(I(t), t)
        }, u && (G(W.prototype, "description", {
            configurable: !0,
            get: function () {
                return z(this).description
            }
        }), a || T(V, "propertyIsEnumerable", st, {
            unsafe: !0
        }))), r({
            global: !0,
            wrap: !0,
            forced: !s,
            sham: !s
        }, {
            Symbol: W
        }), D(w(tt), (function (t) {
            F(t)
        })), r({
            target: "Symbol",
            stat: !0,
            forced: !s
        }, {
            for: function (t) {
                var n = String(t);
                if (l(Q, n)) return Q[n];
                var e = W(n);
                return Q[n] = e, Z[e] = n, e
            },
            keyFor: function (t) {
                if (!it(t)) throw TypeError(t + " is not a symbol");
                if (l(Z, t)) return Z[t]
            },
            useSetter: function () {
                et = !0
            },
            useSimple: function () {
                et = !1
            }
        }), r({
            target: "Object",
            stat: !0,
            forced: !s,
            sham: !u
        }, {
            create: function (t, n) {
                return void 0 === n ? b(t) : ut(b(t), n)
            },
            defineProperty: at,
            defineProperties: ut,
            getOwnPropertyDescriptor: ct
        }), r({
            target: "Object",
            stat: !0,
            forced: !s
        }, {
            getOwnPropertyNames: ft,
            getOwnPropertySymbols: lt
        }), r({
            target: "Object",
            stat: !0,
            forced: f((function () {
                S.f(1)
            }))
        }, {
            getOwnPropertySymbols: function (t) {
                return S.f(v(t))
            }
        }), H) && r({
            target: "JSON",
            stat: !0,
            forced: !s || f((function () {
                var t = W();
                return "[null]" != H([t]) || "{}" != H({
                    a: t
                }) || "{}" != H(Object(t))
            }))
        }, {
            stringify: function (t, n, e) {
                for (var r, o = [t], i = 1; arguments.length > i;) o.push(arguments[i++]);
                if (r = n, (h(n) || void 0 !== t) && !it(t)) return p(n) || (n = function (t, n) {
                    if ("function" == typeof r && (n = r.call(this, t, n)), !it(n)) return n
                }), o[1] = n, H.apply(null, o)
            }
        });
        W.prototype[q] || k(W.prototype, q, W.prototype.valueOf), N(W, "Symbol"), _[U] = !0
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(1),
            i = e(65),
            a = e(3),
            u = e(14),
            s = e(8),
            c = e(67),
            f = e(93),
            l = e(100),
            p = e(7),
            h = e(148),
            d = p("isConcatSpreadable"),
            v = h >= 51 || !o((function () {
                var t = [];
                return t[d] = !1, t.concat()[0] !== t
            })),
            g = l("concat"),
            y = function (t) {
                if (!a(t)) return !1;
                var n = t[d];
                return void 0 !== n ? !!n : i(t)
            };
        r({
            target: "Array",
            proto: !0,
            forced: !v || !g
        }, {
            concat: function (t) {
                var n, e, r, o, i, a = u(this),
                    l = f(a, 0),
                    p = 0;
                for (n = -1, r = arguments.length; n < r; n++)
                    if (i = -1 === n ? a : arguments[n], y(i)) {
                        if (p + (o = s(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                        for (e = 0; e < o; e++, p++) e in i && c(l, p, i[e])
                    } else {
                        if (p >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                        c(l, p++, i)
                    } return l.length = p, l
            }
        })
    }, function (t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function (t, n) {
            return e.call(t, n)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(21).map,
            i = e(1),
            a = e(100)("map"),
            u = a && !i((function () {
                [].map.call({
                    length: -1,
                    0: 1
                }, (function (t) {
                    throw t
                }))
            }));
        r({
            target: "Array",
            proto: !0,
            forced: !a || !u
        }, {
            map: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(5),
            i = e(2),
            a = e(17),
            u = e(3),
            s = e(10).f,
            c = e(191),
            f = i.Symbol;
        if (o && "function" == typeof f && (!("description" in f.prototype) || void 0 !== f().description)) {
            var l = {},
                p = function () {
                    var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                        n = this instanceof p ? new f(t) : void 0 === t ? f() : f(t);
                    return "" === t && (l[n] = !0), n
                };
            c(p, f);
            var h = p.prototype = f.prototype;
            h.constructor = p;
            var d = h.toString,
                v = "Symbol(test)" == String(f("test")),
                g = /^Symbol\((.*)\)[^)]+$/;
            s(h, "description", {
                configurable: !0,
                get: function () {
                    var t = u(this) ? this.valueOf() : this,
                        n = d.call(t);
                    if (a(l, t)) return "";
                    var e = v ? n.slice(7, -1) : n.replace(g, "$1");
                    return "" === e ? void 0 : e
                }
            }), r({
                global: !0,
                forced: !0
            }, {
                Symbol: p
            })
        }
    }, function (t, n, e) {
        e(31)("iterator")
    }, function (t, n, e) {
        var r = e(58),
            o = e(86),
            i = e(14),
            a = e(8),
            u = e(93),
            s = [].push,
            c = function (t) {
                var n = 1 == t,
                    e = 2 == t,
                    c = 3 == t,
                    f = 4 == t,
                    l = 6 == t,
                    p = 5 == t || l;
                return function (h, d, v, g) {
                    for (var y, m, b = i(h), w = o(b), x = r(d, v, 3), O = a(w.length), S = 0, j = g || u, E = n ? j(h, O) : e ? j(h, 0) : void 0; O > S; S++)
                        if ((p || S in w) && (m = x(y = w[S], S, b), t))
                            if (n) E[S] = m;
                            else if (m) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return y;
                        case 6:
                            return S;
                        case 2:
                            s.call(E, y)
                    } else if (f) return !1;
                    return l ? -1 : c || f ? f : E
                }
            };
        t.exports = {
            forEach: c(0),
            map: c(1),
            filter: c(2),
            some: c(3),
            every: c(4),
            find: c(5),
            findIndex: c(6)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(206);
        r({
            target: "Array",
            proto: !0,
            forced: [].forEach != o
        }, {
            forEach: o
        })
    }, function (t, n, e) {
        var r = e(2),
            o = e(259),
            i = e(206),
            a = e(28);
        for (var u in o) {
            var s = r[u],
                c = s && s.prototype;
            if (c && c.forEach !== i) try {
                a(c, "forEach", i)
            } catch (t) {
                c.forEach = i
            }
        }
    }, function (t, n, e) {
        var r = e(5),
            o = e(104),
            i = e(56),
            a = e(34),
            u = e(46),
            s = e(17),
            c = e(188),
            f = Object.getOwnPropertyDescriptor;
        n.f = r ? f : function (t, n) {
            if (t = a(t), n = u(n, !0), c) try {
                return f(t, n)
            } catch (t) {}
            if (s(t, n)) return i(!o.f.call(t, n), t[n])
        }
    }, function (t, n, e) {
        var r = e(2),
            o = e(28),
            i = e(17),
            a = e(136),
            u = e(137),
            s = e(29),
            c = s.get,
            f = s.enforce,
            l = String(String).split("String");
        (t.exports = function (t, n, e, u) {
            var s = !!u && !!u.unsafe,
                c = !!u && !!u.enumerable,
                p = !!u && !!u.noTargetGet;
            "function" == typeof e && ("string" != typeof n || i(e, "name") || o(e, "name", n), f(e).source = l.join("string" == typeof n ? n : "")), t !== r ? (s ? !p && t[n] && (c = !0) : delete t[n], c ? t[n] = e : o(t, n, e)) : c ? t[n] = e : a(n, e)
        })(Function.prototype, "toString", (function () {
            return "function" == typeof this && c(this).source || u(this)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(25),
            o = e(4),
            i = e(1),
            a = e(102),
            u = RegExp.prototype,
            s = u.toString,
            c = i((function () {
                return "/a/b" != s.call({
                    source: "a",
                    flags: "b"
                })
            })),
            f = "toString" != s.name;
        (c || f) && r(RegExp.prototype, "toString", (function () {
            var t = o(this),
                n = String(t.source),
                e = t.flags;
            return "/" + n + "/" + String(void 0 === e && t instanceof RegExp && !("flags" in u) ? a.call(t) : e)
        }), {
            unsafe: !0
        })
    }, function (t, n) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        }
    }, function (t, n, e) {
        var r = e(5),
            o = e(10),
            i = e(56);
        t.exports = r ? function (t, n, e) {
            return o.f(t, n, i(1, e))
        } : function (t, n, e) {
            return t[n] = e, t
        }
    }, function (t, n, e) {
        var r, o, i, a = e(190),
            u = e(2),
            s = e(3),
            c = e(28),
            f = e(17),
            l = e(105),
            p = e(88),
            h = u.WeakMap;
        if (a) {
            var d = new h,
                v = d.get,
                g = d.has,
                y = d.set;
            r = function (t, n) {
                return y.call(d, t, n), n
            }, o = function (t) {
                return v.call(d, t) || {}
            }, i = function (t) {
                return g.call(d, t)
            }
        } else {
            var m = l("state");
            p[m] = !0, r = function (t, n) {
                return c(t, m, n), n
            }, o = function (t) {
                return f(t, m) ? t[m] : {}
            }, i = function (t) {
                return f(t, m)
            }
        }
        t.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function (t) {
                return i(t) ? o(t) : r(t, {})
            },
            getterFor: function (t) {
                return function (n) {
                    var e;
                    if (!s(n) || (e = o(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return e
                }
            }
        }
    }, function (t, n) {
        t.exports = function (t) {
            var n = typeof t;
            return null != t && ("object" == n || "function" == n)
        }
    }, function (t, n, e) {
        var r = e(89),
            o = e(17),
            i = e(196),
            a = e(10).f;
        t.exports = function (t) {
            var n = r.Symbol || (r.Symbol = {});
            o(n, t) || a(n, t, {
                value: i.f(t)
            })
        }
    }, function (t, n) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        }
    }, function (t, n, e) {
        var r = e(0),
            o = e(203);
        r({
            target: "Array",
            stat: !0,
            forced: !e(107)((function (t) {
                Array.from(t)
            }))
        }, {
            from: o
        })
    }, function (t, n, e) {
        var r = e(86),
            o = e(27);
        t.exports = function (t) {
            return r(o(t))
        }
    }, function (t, n, e) {
        var r = e(0),
            o = e(14),
            i = e(92);
        r({
            target: "Object",
            stat: !0,
            forced: e(1)((function () {
                i(1)
            }))
        }, {
            keys: function (t) {
                return i(o(t))
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(21).filter,
            i = e(1),
            a = e(100)("filter"),
            u = a && !i((function () {
                [].filter.call({
                    length: -1,
                    0: 1
                }, (function (t) {
                    throw t
                }))
            }));
        r({
            target: "Array",
            proto: !0,
            forced: !a || !u
        }, {
            filter: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, n, e) {
        var r = e(27),
            o = /"/g;
        t.exports = function (t, n, e, i) {
            var a = String(r(t)),
                u = "<" + n;
            return "" !== e && (u += " " + e + '="' + String(i).replace(o, "&quot;") + '"'), u + ">" + a + "</" + n + ">"
        }
    }, function (t, n, e) {
        var r = e(1);
        t.exports = function (t) {
            return r((function () {
                var n = "" [t]('"');
                return n !== n.toLowerCase() || n.split('"').length > 3
            }))
        }
    }, function (t, n, e) {
        "use strict";
        var r, o, i, a, u = e(0),
            s = e(47),
            c = e(2),
            f = e(41),
            l = e(221),
            p = e(25),
            h = e(82),
            d = e(48),
            v = e(79),
            g = e(3),
            y = e(32),
            m = e(62),
            b = e(40),
            w = e(137),
            x = e(75),
            O = e(107),
            S = e(53),
            j = e(163).set,
            E = e(223),
            A = e(224),
            k = e(422),
            T = e(164),
            P = e(225),
            R = e(29),
            _ = e(91),
            M = e(7),
            I = e(148),
            C = M("species"),
            F = "Promise",
            N = R.get,
            L = R.set,
            D = R.getterFor(F),
            U = l,
            q = c.TypeError,
            B = c.document,
            z = c.process,
            V = f("fetch"),
            W = T.f,
            H = W,
            $ = "process" == b(z),
            G = !!(B && B.createEvent && c.dispatchEvent),
            Y = _(F, (function () {
                if (!(w(U) !== String(U))) {
                    if (66 === I) return !0;
                    if (!$ && "function" != typeof PromiseRejectionEvent) return !0
                }
                if (s && !U.prototype.finally) return !0;
                if (I >= 51 && /native code/.test(U)) return !1;
                var t = U.resolve(1),
                    n = function (t) {
                        t((function () {}), (function () {}))
                    };
                return (t.constructor = {})[C] = n, !(t.then((function () {})) instanceof n)
            })),
            J = Y || !O((function (t) {
                U.all(t).catch((function () {}))
            })),
            K = function (t) {
                var n;
                return !(!g(t) || "function" != typeof (n = t.then)) && n
            },
            X = function (t, n, e) {
                if (!n.notified) {
                    n.notified = !0;
                    var r = n.reactions;
                    E((function () {
                        for (var o = n.value, i = 1 == n.state, a = 0; r.length > a;) {
                            var u, s, c, f = r[a++],
                                l = i ? f.ok : f.fail,
                                p = f.resolve,
                                h = f.reject,
                                d = f.domain;
                            try {
                                l ? (i || (2 === n.rejection && nt(t, n), n.rejection = 1), !0 === l ? u = o : (d && d.enter(), u = l(o), d && (d.exit(), c = !0)), u === f.promise ? h(q("Promise-chain cycle")) : (s = K(u)) ? s.call(u, p, h) : p(u)) : h(o)
                            } catch (t) {
                                d && !c && d.exit(), h(t)
                            }
                        }
                        n.reactions = [], n.notified = !1, e && !n.rejection && Z(t, n)
                    }))
                }
            },
            Q = function (t, n, e) {
                var r, o;
                G ? ((r = B.createEvent("Event")).promise = n, r.reason = e, r.initEvent(t, !1, !0), c.dispatchEvent(r)) : r = {
                    promise: n,
                    reason: e
                }, (o = c["on" + t]) ? o(r) : "unhandledrejection" === t && k("Unhandled promise rejection", e)
            },
            Z = function (t, n) {
                j.call(c, (function () {
                    var e, r = n.value;
                    if (tt(n) && (e = P((function () {
                            $ ? z.emit("unhandledRejection", r, t) : Q("unhandledrejection", t, r)
                        })), n.rejection = $ || tt(n) ? 2 : 1, e.error)) throw e.value
                }))
            },
            tt = function (t) {
                return 1 !== t.rejection && !t.parent
            },
            nt = function (t, n) {
                j.call(c, (function () {
                    $ ? z.emit("rejectionHandled", t) : Q("rejectionhandled", t, n.value)
                }))
            },
            et = function (t, n, e, r) {
                return function (o) {
                    t(n, e, o, r)
                }
            },
            rt = function (t, n, e, r) {
                n.done || (n.done = !0, r && (n = r), n.value = e, n.state = 2, X(t, n, !0))
            },
            ot = function (t, n, e, r) {
                if (!n.done) {
                    n.done = !0, r && (n = r);
                    try {
                        if (t === e) throw q("Promise can't be resolved itself");
                        var o = K(e);
                        o ? E((function () {
                            var r = {
                                done: !1
                            };
                            try {
                                o.call(e, et(ot, t, r, n), et(rt, t, r, n))
                            } catch (e) {
                                rt(t, r, e, n)
                            }
                        })) : (n.value = e, n.state = 1, X(t, n, !1))
                    } catch (e) {
                        rt(t, {
                            done: !1
                        }, e, n)
                    }
                }
            };
        Y && (U = function (t) {
            m(this, U, F), y(t), r.call(this);
            var n = N(this);
            try {
                t(et(ot, this, n), et(rt, this, n))
            } catch (t) {
                rt(this, n, t)
            }
        }, (r = function (t) {
            L(this, {
                type: F,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
            })
        }).prototype = h(U.prototype, {
            then: function (t, n) {
                var e = D(this),
                    r = W(S(this, U));
                return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, r.domain = $ ? z.domain : void 0, e.parent = !0, e.reactions.push(r), 0 != e.state && X(this, e, !1), r.promise
            },
            catch: function (t) {
                return this.then(void 0, t)
            }
        }), o = function () {
            var t = new r,
                n = N(t);
            this.promise = t, this.resolve = et(ot, t, n), this.reject = et(rt, t, n)
        }, T.f = W = function (t) {
            return t === U || t === i ? new o(t) : H(t)
        }, s || "function" != typeof l || (a = l.prototype.then, p(l.prototype, "then", (function (t, n) {
            var e = this;
            return new U((function (t, n) {
                a.call(e, t, n)
            })).then(t, n)
        }), {
            unsafe: !0
        }), "function" == typeof V && u({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function (t) {
                return A(U, V.apply(c, arguments))
            }
        }))), u({
            global: !0,
            wrap: !0,
            forced: Y
        }, {
            Promise: U
        }), d(U, F, !1, !0), v(F), i = f(F), u({
            target: F,
            stat: !0,
            forced: Y
        }, {
            reject: function (t) {
                var n = W(this);
                return n.reject.call(void 0, t), n.promise
            }
        }), u({
            target: F,
            stat: !0,
            forced: s || Y
        }, {
            resolve: function (t) {
                return A(s && this === i ? U : this, t)
            }
        }), u({
            target: F,
            stat: !0,
            forced: J
        }, {
            all: function (t) {
                var n = this,
                    e = W(n),
                    r = e.resolve,
                    o = e.reject,
                    i = P((function () {
                        var e = y(n.resolve),
                            i = [],
                            a = 0,
                            u = 1;
                        x(t, (function (t) {
                            var s = a++,
                                c = !1;
                            i.push(void 0), u++, e.call(n, t).then((function (t) {
                                c || (c = !0, i[s] = t, --u || r(i))
                            }), o)
                        })), --u || r(i)
                    }));
                return i.error && o(i.value), e.promise
            },
            race: function (t) {
                var n = this,
                    e = W(n),
                    r = e.reject,
                    o = P((function () {
                        var o = y(n.resolve);
                        x(t, (function (t) {
                            o.call(n, t).then(e.resolve, r)
                        }))
                    }));
                return o.error && r(o.value), e.promise
            }
        })
    }, function (t, n) {
        var e = {}.toString;
        t.exports = function (t) {
            return e.call(t).slice(8, -1)
        }
    }, function (t, n, e) {
        var r = e(89),
            o = e(2),
            i = function (t) {
                return "function" == typeof t ? t : void 0
            };
        t.exports = function (t, n) {
            return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][n] || o[t] && o[t][n]
        }
    }, function (t, n) {
        var e = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
        }
    }, function (t, n, e) {
        var r = e(0),
            o = e(1),
            i = e(34),
            a = e(24).f,
            u = e(5),
            s = o((function () {
                a(1)
            }));
        r({
            target: "Object",
            stat: !0,
            forced: !u || s,
            sham: !u
        }, {
            getOwnPropertyDescriptor: function (t, n) {
                return a(i(t), n)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(113);
        r({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== o
        }, {
            exec: o
        })
    }, function (t, n) {
        var e = Array.isArray;
        t.exports = e
    }, function (t, n, e) {
        var r = e(3);
        t.exports = function (t, n) {
            if (!r(t)) return t;
            var e, o;
            if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
            if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t))) return o;
            if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, n) {
        t.exports = !1
    }, function (t, n, e) {
        var r = e(10).f,
            o = e(17),
            i = e(7)("toStringTag");
        t.exports = function (t, n, e) {
            t && !o(t = e ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: n
            })
        }
    }, function (t, n, e) {
        var r = e(0),
            o = e(1),
            i = e(14),
            a = e(50),
            u = e(147);
        r({
            target: "Object",
            stat: !0,
            forced: o((function () {
                a(1)
            })),
            sham: !u
        }, {
            getPrototypeOf: function (t) {
                return a(i(t))
            }
        })
    }, function (t, n, e) {
        var r = e(17),
            o = e(14),
            i = e(105),
            a = e(147),
            u = i("IE_PROTO"),
            s = Object.prototype;
        t.exports = a ? Object.getPrototypeOf : function (t) {
            return t = o(t), r(t, u) ? t[u] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
    }, function (t, n, e) {
        var r, o = e(4),
            i = e(143),
            a = e(140),
            u = e(88),
            s = e(194),
            c = e(135),
            f = e(105),
            l = f("IE_PROTO"),
            p = function () {},
            h = function (t) {
                return "<script>" + t + "<\/script>"
            },
            d = function () {
                try {
                    r = document.domain && new ActiveXObject("htmlfile")
                } catch (t) {}
                d = r ? function (t) {
                    t.write(h("")), t.close();
                    var n = t.parentWindow.Object;
                    return t = null, n
                }(r) : function () {
                    var t, n = c("iframe");
                    return n.style.display = "none", s.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write(h("document.F=Object")), t.close(), t.F
                }();
                for (var t = a.length; t--;) delete d.prototype[a[t]];
                return d()
            };
        u[l] = !0, t.exports = Object.create || function (t, n) {
            var e;
            return null !== t ? (p.prototype = o(t), e = new p, p.prototype = null, e[l] = t) : e = d(), void 0 === n ? e : i(e, n)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(1);
        t.exports = function (t, n) {
            var e = [][t];
            return !e || !r((function () {
                e.call(null, n || function () {
                    throw 1
                }, 1)
            }))
        }
    }, function (t, n, e) {
        var r = e(4),
            o = e(32),
            i = e(7)("species");
        t.exports = function (t, n) {
            var e, a = r(t).constructor;
            return void 0 === a || null == (e = r(a)[i]) ? n : o(e)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(2),
            i = e(5),
            a = e(165),
            u = e(6),
            s = e(121),
            c = e(62),
            f = e(56),
            l = e(28),
            p = e(8),
            h = e(231),
            d = e(233),
            v = e(46),
            g = e(17),
            y = e(98),
            m = e(3),
            b = e(51),
            w = e(76),
            x = e(64).f,
            O = e(234),
            S = e(21).forEach,
            j = e(79),
            E = e(10),
            A = e(24),
            k = e(29),
            T = e(118),
            P = k.get,
            R = k.set,
            _ = E.f,
            M = A.f,
            I = Math.round,
            C = o.RangeError,
            F = s.ArrayBuffer,
            N = s.DataView,
            L = u.NATIVE_ARRAY_BUFFER_VIEWS,
            D = u.TYPED_ARRAY_TAG,
            U = u.TypedArray,
            q = u.TypedArrayPrototype,
            B = u.aTypedArrayConstructor,
            z = u.isTypedArray,
            V = function (t, n) {
                for (var e = 0, r = n.length, o = new(B(t))(r); r > e;) o[e] = n[e++];
                return o
            },
            W = function (t, n) {
                _(t, n, {
                    get: function () {
                        return P(this)[n]
                    }
                })
            },
            H = function (t) {
                var n;
                return t instanceof F || "ArrayBuffer" == (n = y(t)) || "SharedArrayBuffer" == n
            },
            $ = function (t, n) {
                return z(t) && "symbol" != typeof n && n in t && String(+n) == String(n)
            },
            G = function (t, n) {
                return $(t, n = v(n, !0)) ? f(2, t[n]) : M(t, n)
            },
            Y = function (t, n, e) {
                return !($(t, n = v(n, !0)) && m(e) && g(e, "value")) || g(e, "get") || g(e, "set") || e.configurable || g(e, "writable") && !e.writable || g(e, "enumerable") && !e.enumerable ? _(t, n, e) : (t[n] = e.value, t)
            };
        i ? (L || (A.f = G, E.f = Y, W(q, "buffer"), W(q, "byteOffset"), W(q, "byteLength"), W(q, "length")), r({
            target: "Object",
            stat: !0,
            forced: !L
        }, {
            getOwnPropertyDescriptor: G,
            defineProperty: Y
        }), t.exports = function (t, n, e) {
            var i = t.match(/\d+$/)[0] / 8,
                u = t + (e ? "Clamped" : "") + "Array",
                s = "get" + t,
                f = "set" + t,
                v = o[u],
                g = v,
                y = g && g.prototype,
                E = {},
                A = function (t, n) {
                    _(t, n, {
                        get: function () {
                            return function (t, n) {
                                var e = P(t);
                                return e.view[s](n * i + e.byteOffset, !0)
                            }(this, n)
                        },
                        set: function (t) {
                            return function (t, n, r) {
                                var o = P(t);
                                e && (r = (r = I(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), o.view[f](n * i + o.byteOffset, r, !0)
                            }(this, n, t)
                        },
                        enumerable: !0
                    })
                };
            L ? a && (g = n((function (t, n, e, r) {
                return c(t, g, u), T(function () {
                    return m(n) ? H(n) ? void 0 !== r ? new v(n, d(e, i), r) : void 0 !== e ? new v(n, d(e, i)) : new v(n) : z(n) ? V(g, n) : O.call(g, n) : new v(h(n))
                }(), t, g)
            })), w && w(g, U), S(x(v), (function (t) {
                t in g || l(g, t, v[t])
            })), g.prototype = y) : (g = n((function (t, n, e, r) {
                c(t, g, u);
                var o, a, s, f = 0,
                    l = 0;
                if (m(n)) {
                    if (!H(n)) return z(n) ? V(g, n) : O.call(g, n);
                    o = n, l = d(e, i);
                    var v = n.byteLength;
                    if (void 0 === r) {
                        if (v % i) throw C("Wrong length");
                        if ((a = v - l) < 0) throw C("Wrong length")
                    } else if ((a = p(r) * i) + l > v) throw C("Wrong length");
                    s = a / i
                } else s = h(n), o = new F(a = s * i);
                for (R(t, {
                        buffer: o,
                        byteOffset: l,
                        byteLength: a,
                        length: s,
                        view: new N(o)
                    }); f < s;) A(t, f++)
            })), w && w(g, U), y = g.prototype = b(q)), y.constructor !== g && l(y, "constructor", g), D && l(y, D, u), E[u] = g, r({
                global: !0,
                forced: g != v,
                sham: !L
            }, E), "BYTES_PER_ELEMENT" in g || l(g, "BYTES_PER_ELEMENT", i), "BYTES_PER_ELEMENT" in y || l(y, "BYTES_PER_ELEMENT", i), j(u)
        }) : t.exports = function () {}
    }, function (t, n, e) {
        var r = e(520)();
        t.exports = r
    }, function (t, n) {
        t.exports = function (t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            }
        }
    }, function (t, n, e) {
        var r = e(42),
            o = Math.max,
            i = Math.min;
        t.exports = function (t, n) {
            var e = r(t);
            return e < 0 ? o(e + n, 0) : i(e, n)
        }
    }, function (t, n, e) {
        var r = e(32);
        t.exports = function (t, n, e) {
            if (r(t), void 0 === n) return t;
            switch (e) {
                case 0:
                    return function () {
                        return t.call(n)
                    };
                case 1:
                    return function (e) {
                        return t.call(n, e)
                    };
                case 2:
                    return function (e, r) {
                        return t.call(n, e, r)
                    };
                case 3:
                    return function (e, r, o) {
                        return t.call(n, e, r, o)
                    }
            }
            return function () {
                return t.apply(n, arguments)
            }
        }
    }, function (t, n, e) {
        e(0)({
            target: "Object",
            stat: !0
        }, {
            setPrototypeOf: e(76)
        })
    }, function (t, n, e) {
        var r = e(7),
            o = e(51),
            i = e(10),
            a = r("unscopables"),
            u = Array.prototype;
        null == u[a] && i.f(u, a, {
            configurable: !0,
            value: o(null)
        }), t.exports = function (t) {
            u[a][t] = !0
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(109).left;
        r({
            target: "Array",
            proto: !0,
            forced: e(52)("reduce")
        }, {
            reduce: function (t) {
                return o(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, n) {
        t.exports = function (t, n, e) {
            if (!(t instanceof n)) throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
            return t
        }
    }, function (t, n, e) {
        var r = e(129),
            o = e(30);
        t.exports = function (t) {
            if (!o(t)) return !1;
            var n = r(t);
            return "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n
        }
    }, function (t, n, e) {
        var r = e(192),
            o = e(140).concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function (t) {
            return r(t, o)
        }
    }, function (t, n, e) {
        var r = e(40);
        t.exports = Array.isArray || function (t) {
            return "Array" == r(t)
        }
    }, function (t, n, e) {
        var r = e(88),
            o = e(3),
            i = e(17),
            a = e(10).f,
            u = e(87),
            s = e(95),
            c = u("meta"),
            f = 0,
            l = Object.isExtensible || function () {
                return !0
            },
            p = function (t) {
                a(t, c, {
                    value: {
                        objectID: "O" + ++f,
                        weakData: {}
                    }
                })
            },
            h = t.exports = {
                REQUIRED: !1,
                fastKey: function (t, n) {
                    if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!i(t, c)) {
                        if (!l(t)) return "F";
                        if (!n) return "E";
                        p(t)
                    }
                    return t[c].objectID
                },
                getWeakData: function (t, n) {
                    if (!i(t, c)) {
                        if (!l(t)) return !0;
                        if (!n) return !1;
                        p(t)
                    }
                    return t[c].weakData
                },
                onFreeze: function (t) {
                    return s && h.REQUIRED && l(t) && !i(t, c) && p(t), t
                }
            };
        r[c] = !0
    }, function (t, n, e) {
        "use strict";
        var r = e(46),
            o = e(10),
            i = e(56);
        t.exports = function (t, n, e) {
            var a = r(n);
            a in t ? o.f(t, a, i(0, e)) : t[a] = e
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(3),
            i = e(65),
            a = e(57),
            u = e(8),
            s = e(34),
            c = e(67),
            f = e(100),
            l = e(7)("species"),
            p = [].slice,
            h = Math.max;
        r({
            target: "Array",
            proto: !0,
            forced: !f("slice")
        }, {
            slice: function (t, n) {
                var e, r, f, d = s(this),
                    v = u(d.length),
                    g = a(t, v),
                    y = a(void 0 === n ? v : n, v);
                if (i(d) && ("function" != typeof (e = d.constructor) || e !== Array && !i(e.prototype) ? o(e) && null === (e = e[l]) && (e = void 0) : e = void 0, e === Array || void 0 === e)) return p.call(d, g, y);
                for (r = new(void 0 === e ? Array : e)(h(y - g, 0)), f = 0; g < y; g++, f++) g in d && c(r, f, d[g]);
                return r.length = f, r
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(112),
            o = e(111),
            i = e(4),
            a = e(27),
            u = e(53),
            s = e(115),
            c = e(8),
            f = e(116),
            l = e(113),
            p = e(1),
            h = [].push,
            d = Math.min,
            v = !p((function () {
                return !RegExp(4294967295, "y")
            }));
        r("split", 2, (function (t, n, e) {
            var r;
            return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, e) {
                var r = String(a(this)),
                    i = void 0 === e ? 4294967295 : e >>> 0;
                if (0 === i) return [];
                if (void 0 === t) return [r];
                if (!o(t)) return n.call(r, t, i);
                for (var u, s, c, f = [], p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), d = 0, v = new RegExp(t.source, p + "g");
                    (u = l.call(v, r)) && !((s = v.lastIndex) > d && (f.push(r.slice(d, u.index)), u.length > 1 && u.index < r.length && h.apply(f, u.slice(1)), c = u[0].length, d = s, f.length >= i));) v.lastIndex === u.index && v.lastIndex++;
                return d === r.length ? !c && v.test("") || f.push("") : f.push(r.slice(d)), f.length > i ? f.slice(0, i) : f
            } : "0".split(void 0, 0).length ? function (t, e) {
                return void 0 === t && 0 === e ? [] : n.call(this, t, e)
            } : n, [function (n, e) {
                var o = a(this),
                    i = null == n ? void 0 : n[t];
                return void 0 !== i ? i.call(n, o, e) : r.call(String(o), n, e)
            }, function (t, o) {
                var a = e(r, t, this, o, r !== n);
                if (a.done) return a.value;
                var l = i(t),
                    p = String(this),
                    h = u(l, RegExp),
                    g = l.unicode,
                    y = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (v ? "y" : "g"),
                    m = new h(v ? l : "^(?:" + l.source + ")", y),
                    b = void 0 === o ? 4294967295 : o >>> 0;
                if (0 === b) return [];
                if (0 === p.length) return null === f(m, p) ? [p] : [];
                for (var w = 0, x = 0, O = []; x < p.length;) {
                    m.lastIndex = v ? x : 0;
                    var S, j = f(m, v ? p : p.slice(x));
                    if (null === j || (S = d(c(m.lastIndex + (v ? 0 : x)), p.length)) === w) x = s(p, x, g);
                    else {
                        if (O.push(p.slice(w, x)), O.length === b) return O;
                        for (var E = 1; E <= j.length - 1; E++)
                            if (O.push(j[E]), O.length === b) return O;
                        x = w = S
                    }
                }
                return O.push(p.slice(w)), O
            }]
        }), !v)
    }, function (t, n, e) {
        var r = e(170),
            o = e(171);
        t.exports = function (t, n, e, i) {
            var a = !e;
            e || (e = {});
            for (var u = -1, s = n.length; ++u < s;) {
                var c = n[u],
                    f = i ? i(e[c], t[c], c, e, t) : void 0;
                void 0 === f && (f = t[c]), a ? o(e, c, f) : r(e, c, f)
            }
            return e
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var e = -1, r = null == t ? 0 : t.length, o = Array(r); ++e < r;) o[e] = n(t[e], e, t);
            return o
        }
    }, function (t, n, e) {
        var r = e(129),
            o = e(268),
            i = e(130),
            a = Function.prototype,
            u = Object.prototype,
            s = a.toString,
            c = u.hasOwnProperty,
            f = s.call(Object);
        t.exports = function (t) {
            if (!i(t) || "[object Object]" != r(t)) return !1;
            var n = o(t);
            if (null === n) return !0;
            var e = c.call(n, "constructor") && n.constructor;
            return "function" == typeof e && e instanceof e && s.call(e) == f
        }
    }, function (t, n) {
        t.exports = function (t) {
            for (var n = -1, e = null == t ? 0 : t.length, r = {}; ++n < e;) {
                var o = t[n];
                r[o[0]] = o[1]
            }
            return r
        }
    }, function (t, n, e) {
        var r = e(0),
            o = e(197);
        r({
            target: "Object",
            stat: !0,
            forced: Object.assign !== o
        }, {
            assign: o
        })
    }, function (t, n, e) {
        var r = e(4),
            o = e(145),
            i = e(8),
            a = e(58),
            u = e(97),
            s = e(199),
            c = function (t, n) {
                this.stopped = t, this.result = n
            };
        (t.exports = function (t, n, e, f, l) {
            var p, h, d, v, g, y, m, b = a(n, e, f ? 2 : 1);
            if (l) p = t;
            else {
                if ("function" != typeof (h = u(t))) throw TypeError("Target is not iterable");
                if (o(h)) {
                    for (d = 0, v = i(t.length); v > d; d++)
                        if ((g = f ? b(r(m = t[d])[0], m[1]) : b(t[d])) && g instanceof c) return g;
                    return new c(!1)
                }
                p = h.call(t)
            }
            for (y = p.next; !(m = y.call(p)).done;)
                if ("object" == typeof (g = s(p, b, m.value, f)) && g && g instanceof c) return g;
            return new c(!1)
        }).stop = function (t) {
            return new c(!0, t)
        }
    }, function (t, n, e) {
        var r = e(4),
            o = e(201);
        t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, n = !1,
                e = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), n = e instanceof Array
            } catch (t) {}
            return function (e, i) {
                return r(e), o(i), n ? t.call(e, i) : e.__proto__ = i, e
            }
        }() : void 0)
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(90).includes,
            i = e(60);
        r({
            target: "Array",
            proto: !0
        }, {
            includes: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), i("includes")
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(86),
            i = e(34),
            a = e(52),
            u = [].join,
            s = o != Object,
            c = a("join", ",");
        r({
            target: "Array",
            proto: !0,
            forced: s || c
        }, {
            join: function (t) {
                return u.call(i(this), void 0 === t ? "," : t)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(41),
            o = e(10),
            i = e(7),
            a = e(5),
            u = i("species");
        t.exports = function (t) {
            var n = r(t),
                e = o.f;
            a && n && !n[u] && e(n, u, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(112),
            o = e(4),
            i = e(14),
            a = e(8),
            u = e(42),
            s = e(27),
            c = e(115),
            f = e(116),
            l = Math.max,
            p = Math.min,
            h = Math.floor,
            d = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            v = /\$([$&'`]|\d\d?)/g,
            g = function (t) {
                return void 0 === t ? t : String(t)
            };
        r("replace", 2, (function (t, n, e, r) {
            return [function (e, r) {
                var o = s(this),
                    i = null == e ? void 0 : e[t];
                return void 0 !== i ? i.call(e, o, r) : n.call(String(o), e, r)
            }, function (t, i) {
                if (r.REPLACE_KEEPS_$0 || "string" == typeof i && -1 === i.indexOf("$0")) {
                    var s = e(n, t, this, i);
                    if (s.done) return s.value
                }
                var h = o(t),
                    d = String(this),
                    v = "function" == typeof i;
                v || (i = String(i));
                var m = h.global;
                if (m) {
                    var b = h.unicode;
                    h.lastIndex = 0
                }
                for (var w = [];;) {
                    var x = f(h, d);
                    if (null === x) break;
                    if (w.push(x), !m) break;
                    "" === String(x[0]) && (h.lastIndex = c(d, a(h.lastIndex), b))
                }
                for (var O = "", S = 0, j = 0; j < w.length; j++) {
                    x = w[j];
                    for (var E = String(x[0]), A = l(p(u(x.index), d.length), 0), k = [], T = 1; T < x.length; T++) k.push(g(x[T]));
                    var P = x.groups;
                    if (v) {
                        var R = [E].concat(k, A, d);
                        void 0 !== P && R.push(P);
                        var _ = String(i.apply(void 0, R))
                    } else _ = y(E, d, A, k, P, i);
                    A >= S && (O += d.slice(S, A) + _, S = A + E.length)
                }
                return O + d.slice(S)
            }];

            function y(t, e, r, o, a, u) {
                var s = r + t.length,
                    c = o.length,
                    f = v;
                return void 0 !== a && (a = i(a), f = d), n.call(u, f, (function (n, i) {
                    var u;
                    switch (i.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return e.slice(0, r);
                        case "'":
                            return e.slice(s);
                        case "<":
                            u = a[i.slice(1, -1)];
                            break;
                        default:
                            var f = +i;
                            if (0 === f) return n;
                            if (f > c) {
                                var l = h(f / 10);
                                return 0 === l ? n : l <= c ? void 0 === o[l - 1] ? i.charAt(1) : o[l - 1] + i.charAt(1) : n
                            }
                            u = o[f - 1]
                    }
                    return void 0 === u ? "" : u
                }))
            }
        }))
    }, function (t, n, e) {
        var r = e(27),
            o = "[" + e(117) + "]",
            i = RegExp("^" + o + o + "*"),
            a = RegExp(o + o + "*$"),
            u = function (t) {
                return function (n) {
                    var e = String(r(n));
                    return 1 & t && (e = e.replace(i, "")), 2 & t && (e = e.replace(a, "")), e
                }
            };
        t.exports = {
            start: u(1),
            end: u(2),
            trim: u(3)
        }
    }, function (t, n, e) {
        var r = e(25);
        t.exports = function (t, n, e) {
            for (var o in n) r(t, o, n[o], e);
            return t
        }
    }, function (t, n, e) {
        var r = e(45),
            o = e(483),
            i = e(484),
            a = e(176);
        t.exports = function (t, n) {
            return r(t) ? t : o(t, n) ? [t] : i(a(t))
        }
    }, function (t, n, e) {
        var r = e(184),
            o = e(276),
            i = e(278);
        t.exports = function (t, n) {
            return i(o(t, n, r), t + "")
        }
    }, function (t, n, e) {
        var r = e(169);
        t.exports = function (t) {
            return r(t, 5)
        }
    }, function (t, n, e) {
        var r = e(1),
            o = e(40),
            i = "".split;
        t.exports = r((function () {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function (t) {
            return "String" == o(t) ? i.call(t, "") : Object(t)
        } : Object
    }, function (t, n) {
        var e = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++e + r).toString(36)
        }
    }, function (t, n) {
        t.exports = {}
    }, function (t, n, e) {
        var r = e(2);
        t.exports = r
    }, function (t, n, e) {
        var r = e(34),
            o = e(8),
            i = e(57),
            a = function (t) {
                return function (n, e, a) {
                    var u, s = r(n),
                        c = o(s.length),
                        f = i(a, c);
                    if (t && e != e) {
                        for (; c > f;)
                            if ((u = s[f++]) != u) return !0
                    } else
                        for (; c > f; f++)
                            if ((t || f in s) && s[f] === e) return t || f || 0;
                    return !t && -1
                }
            };
        t.exports = {
            includes: a(!0),
            indexOf: a(!1)
        }
    }, function (t, n, e) {
        var r = e(1),
            o = /#|\.prototype\./,
            i = function (t, n) {
                var e = u[a(t)];
                return e == c || e != s && ("function" == typeof n ? r(n) : !!n)
            },
            a = i.normalize = function (t) {
                return String(t).replace(o, ".").toLowerCase()
            },
            u = i.data = {},
            s = i.NATIVE = "N",
            c = i.POLYFILL = "P";
        t.exports = i
    }, function (t, n, e) {
        var r = e(192),
            o = e(140);
        t.exports = Object.keys || function (t) {
            return r(t, o)
        }
    }, function (t, n, e) {
        var r = e(3),
            o = e(65),
            i = e(7)("species");
        t.exports = function (t, n) {
            var e;
            return o(t) && ("function" != typeof (e = t.constructor) || e !== Array && !o(e.prototype) ? r(e) && null === (e = e[i]) && (e = void 0) : e = void 0), new(void 0 === e ? Array : e)(0 === n ? 0 : n)
        }
    }, function (t, n, e) {
        var r = e(0),
            o = e(198).entries;
        r({
            target: "Object",
            stat: !0
        }, {
            entries: function (t) {
                return o(t)
            }
        })
    }, function (t, n, e) {
        var r = e(1);
        t.exports = !r((function () {
            return Object.isExtensible(Object.preventExtensions({}))
        }))
    }, function (t, n) {
        t.exports = {}
    }, function (t, n, e) {
        var r = e(98),
            o = e(96),
            i = e(7)("iterator");
        t.exports = function (t) {
            if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    }, function (t, n, e) {
        var r = e(146),
            o = e(40),
            i = e(7)("toStringTag"),
            a = "Arguments" == o(function () {
                return arguments
            }());
        t.exports = r ? o : function (t) {
            var n, e, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, n) {
                try {
                    return t[n]
                } catch (t) {}
            }(n = Object(t), i)) ? e : a ? o(n) : "Object" == (r = o(n)) && "function" == typeof n.callee ? "Arguments" : r
        }
    }, function (t, n, e) {
        var r = e(5),
            o = e(10).f,
            i = Function.prototype,
            a = i.toString,
            u = /^\s*function ([^ (]*)/;
        !r || "name" in i || o(i, "name", {
            configurable: !0,
            get: function () {
                try {
                    return a.call(this).match(u)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    }, function (t, n, e) {
        var r = e(1),
            o = e(7),
            i = e(148),
            a = o("species");
        t.exports = function (t) {
            return i >= 51 || !r((function () {
                var n = [];
                return (n.constructor = {})[a] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== n[t](Boolean).foo
            }))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(154),
            i = e(27);
        r({
            target: "String",
            proto: !0,
            forced: !e(155)("includes")
        }, {
            includes: function (t) {
                return !!~String(i(this)).indexOf(o(t), arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(4);
        t.exports = function () {
            var t = r(this),
                n = "";
            return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.dotAll && (n += "s"), t.unicode && (n += "u"), t.sticky && (n += "y"), n
        }
    }, function (t, n, e) {
        var r = e(178);
        t.exports = function (t) {
            return (null == t ? 0 : t.length) ? r(t, 1) : []
        }
    }, function (t, n, e) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !r.call({
                1: 2
            }, 1);
        n.f = i ? function (t) {
            var n = o(this, t);
            return !!n && n.enumerable
        } : r
    }, function (t, n, e) {
        var r = e(138),
            o = e(87),
            i = r("keys");
        t.exports = function (t) {
            return i[t] || (i[t] = o(t))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(47),
            o = e(2),
            i = e(1);
        t.exports = r || !i((function () {
            var t = Math.random();
            __defineSetter__.call(null, t, (function () {})), delete o[t]
        }))
    }, function (t, n, e) {
        var r = e(7)("iterator"),
            o = !1;
        try {
            var i = 0,
                a = {
                    next: function () {
                        return {
                            done: !!i++
                        }
                    },
                    return: function () {
                        o = !0
                    }
                };
            a[r] = function () {
                return this
            }, Array.from(a, (function () {
                throw 2
            }))
        } catch (t) {}
        t.exports = function (t, n) {
            if (!n && !o) return !1;
            var e = !1;
            try {
                var i = {};
                i[r] = function () {
                    return {
                        next: function () {
                            return {
                                done: e = !0
                            }
                        }
                    }
                }, t(i)
            } catch (t) {}
            return e
        }
    }, function (t, n, e) {
        var r = e(41);
        t.exports = r("navigator", "userAgent") || ""
    }, function (t, n, e) {
        var r = e(32),
            o = e(14),
            i = e(86),
            a = e(8),
            u = function (t) {
                return function (n, e, u, s) {
                    r(e);
                    var c = o(n),
                        f = i(c),
                        l = a(c.length),
                        p = t ? l - 1 : 0,
                        h = t ? -1 : 1;
                    if (u < 2)
                        for (;;) {
                            if (p in f) {
                                s = f[p], p += h;
                                break
                            }
                            if (p += h, t ? p < 0 : l <= p) throw TypeError("Reduce of empty array with no initial value")
                        }
                    for (; t ? p >= 0 : l > p; p += h) p in f && (s = e(s, f[p], p, c));
                    return s
                }
            };
        t.exports = {
            left: u(!1),
            right: u(!0)
        }
    }, function (t, n, e) {
        var r = e(42),
            o = e(27),
            i = function (t) {
                return function (n, e) {
                    var i, a, u = String(o(n)),
                        s = r(e),
                        c = u.length;
                    return s < 0 || s >= c ? t ? "" : void 0 : (i = u.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? u.charAt(s) : i : t ? u.slice(s, s + 2) : a - 56320 + (i - 55296 << 10) + 65536
                }
            };
        t.exports = {
            codeAt: i(!1),
            charAt: i(!0)
        }
    }, function (t, n, e) {
        var r = e(3),
            o = e(40),
            i = e(7)("match");
        t.exports = function (t) {
            var n;
            return r(t) && (void 0 !== (n = t[i]) ? !!n : "RegExp" == o(t))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(25),
            o = e(1),
            i = e(7),
            a = e(113),
            u = e(28),
            s = i("species"),
            c = !o((function () {
                var t = /./;
                return t.exec = function () {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t
                }, "7" !== "".replace(t, "$<a>")
            })),
            f = function () {
                return "$0" === "a".replace(/./, "$0")
            }(),
            l = !o((function () {
                var t = /(?:)/,
                    n = t.exec;
                t.exec = function () {
                    return n.apply(this, arguments)
                };
                var e = "ab".split(t);
                return 2 !== e.length || "a" !== e[0] || "b" !== e[1]
            }));
        t.exports = function (t, n, e, p) {
            var h = i(t),
                d = !o((function () {
                    var n = {};
                    return n[h] = function () {
                        return 7
                    }, 7 != "" [t](n)
                })),
                v = d && !o((function () {
                    var n = !1,
                        e = /a/;
                    return "split" === t && ((e = {}).constructor = {}, e.constructor[s] = function () {
                        return e
                    }, e.flags = "", e[h] = /./ [h]), e.exec = function () {
                        return n = !0, null
                    }, e[h](""), !n
                }));
            if (!d || !v || "replace" === t && (!c || !f) || "split" === t && !l) {
                var g = /./ [h],
                    y = e(h, "" [t], (function (t, n, e, r, o) {
                        return n.exec === a ? d && !o ? {
                            done: !0,
                            value: g.call(n, e, r)
                        } : {
                            done: !0,
                            value: t.call(e, n, r)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: f
                    }),
                    m = y[0],
                    b = y[1];
                r(String.prototype, t, m), r(RegExp.prototype, h, 2 == n ? function (t, n) {
                    return b.call(t, this, n)
                } : function (t) {
                    return b.call(t, this)
                })
            }
            p && u(RegExp.prototype[h], "sham", !0)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(102),
            o = e(114),
            i = RegExp.prototype.exec,
            a = String.prototype.replace,
            u = i,
            s = function () {
                var t = /a/,
                    n = /b*/g;
                return i.call(t, "a"), i.call(n, "a"), 0 !== t.lastIndex || 0 !== n.lastIndex
            }(),
            c = o.UNSUPPORTED_Y || o.BROKEN_CARET,
            f = void 0 !== /()??/.exec("")[1];
        (s || f || c) && (u = function (t) {
            var n, e, o, u, l = this,
                p = c && l.sticky,
                h = r.call(l),
                d = l.source,
                v = 0,
                g = t;
            return p && (-1 === (h = h.replace("y", "")).indexOf("g") && (h += "g"), g = String(t).slice(l.lastIndex), l.lastIndex > 0 && (!l.multiline || l.multiline && "\n" !== t[l.lastIndex - 1]) && (d = "(?: " + d + ")", g = " " + g, v++), e = new RegExp("^(?:" + d + ")", h)), f && (e = new RegExp("^" + d + "$(?!\\s)", h)), s && (n = l.lastIndex), o = i.call(p ? e : l, g), p ? o ? (o.input = o.input.slice(v), o[0] = o[0].slice(v), o.index = l.lastIndex, l.lastIndex += o[0].length) : l.lastIndex = 0 : s && o && (l.lastIndex = l.global ? o.index + o[0].length : n), f && o && o.length > 1 && a.call(o[0], e, (function () {
                for (u = 1; u < arguments.length - 2; u++) void 0 === arguments[u] && (o[u] = void 0)
            })), o
        }), t.exports = u
    }, function (t, n, e) {
        "use strict";
        var r = e(1);

        function o(t, n) {
            return RegExp(t, n)
        }
        n.UNSUPPORTED_Y = r((function () {
            var t = o("a", "y");
            return t.lastIndex = 2, null != t.exec("abcd")
        })), n.BROKEN_CARET = r((function () {
            var t = o("^r", "gy");
            return t.lastIndex = 2, null != t.exec("str")
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(110).charAt;
        t.exports = function (t, n, e) {
            return n + (e ? r(t, n).length : 1)
        }
    }, function (t, n, e) {
        var r = e(40),
            o = e(113);
        t.exports = function (t, n) {
            var e = t.exec;
            if ("function" == typeof e) {
                var i = e.call(t, n);
                if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== r(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return o.call(t, n)
        }
    }, function (t, n) {
        t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    }, function (t, n, e) {
        var r = e(3),
            o = e(76);
        t.exports = function (t, n, e) {
            var i, a;
            return o && "function" == typeof (i = n.constructor) && i !== e && r(a = i.prototype) && a !== e.prototype && o(t, a), t
        }
    }, function (t, n) {
        var e = Math.expm1,
            r = Math.exp;
        t.exports = !e || e(10) > 22025.465794806718 || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17) ? function (t) {
            return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : r(t) - 1
        } : e
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(2),
            i = e(91),
            a = e(25),
            u = e(66),
            s = e(75),
            c = e(62),
            f = e(3),
            l = e(1),
            p = e(107),
            h = e(48),
            d = e(118);
        t.exports = function (t, n, e) {
            var v = -1 !== t.indexOf("Map"),
                g = -1 !== t.indexOf("Weak"),
                y = v ? "set" : "add",
                m = o[t],
                b = m && m.prototype,
                w = m,
                x = {},
                O = function (t) {
                    var n = b[t];
                    a(b, t, "add" == t ? function (t) {
                        return n.call(this, 0 === t ? 0 : t), this
                    } : "delete" == t ? function (t) {
                        return !(g && !f(t)) && n.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function (t) {
                        return g && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
                    } : "has" == t ? function (t) {
                        return !(g && !f(t)) && n.call(this, 0 === t ? 0 : t)
                    } : function (t, e) {
                        return n.call(this, 0 === t ? 0 : t, e), this
                    })
                };
            if (i(t, "function" != typeof m || !(g || b.forEach && !l((function () {
                    (new m).entries().next()
                }))))) w = e.getConstructor(n, t, v, y), u.REQUIRED = !0;
            else if (i(t, !0)) {
                var S = new w,
                    j = S[y](g ? {} : -0, 1) != S,
                    E = l((function () {
                        S.has(1)
                    })),
                    A = p((function (t) {
                        new m(t)
                    })),
                    k = !g && l((function () {
                        for (var t = new m, n = 5; n--;) t[y](n, n);
                        return !t.has(-0)
                    }));
                A || ((w = n((function (n, e) {
                    c(n, w, t);
                    var r = d(new m, n, w);
                    return null != e && s(e, r[y], r, v), r
                }))).prototype = b, b.constructor = w), (E || k) && (O("delete"), O("has"), v && O("get")), (k || j) && O(y), g && b.clear && delete b.clear
            }
            return x[t] = w, r({
                global: !0,
                forced: w != m
            }, x), h(w, t), g || e.setStrong(w, t, v), w
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(2),
            o = e(5),
            i = e(6).NATIVE_ARRAY_BUFFER,
            a = e(28),
            u = e(82),
            s = e(1),
            c = e(62),
            f = e(42),
            l = e(8),
            p = e(231),
            h = e(427),
            d = e(64).f,
            v = e(10).f,
            g = e(151),
            y = e(48),
            m = e(29),
            b = m.get,
            w = m.set,
            x = r.ArrayBuffer,
            O = x,
            S = r.DataView,
            j = r.RangeError,
            E = h.pack,
            A = h.unpack,
            k = function (t) {
                return [255 & t]
            },
            T = function (t) {
                return [255 & t, t >> 8 & 255]
            },
            P = function (t) {
                return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
            },
            R = function (t) {
                return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
            },
            _ = function (t) {
                return E(t, 23, 4)
            },
            M = function (t) {
                return E(t, 52, 8)
            },
            I = function (t, n) {
                v(t.prototype, n, {
                    get: function () {
                        return b(this)[n]
                    }
                })
            },
            C = function (t, n, e, r) {
                var o = p(e),
                    i = b(t);
                if (o + n > i.byteLength) throw j("Wrong index");
                var a = b(i.buffer).bytes,
                    u = o + i.byteOffset,
                    s = a.slice(u, u + n);
                return r ? s : s.reverse()
            },
            F = function (t, n, e, r, o, i) {
                var a = p(e),
                    u = b(t);
                if (a + n > u.byteLength) throw j("Wrong index");
                for (var s = b(u.buffer).bytes, c = a + u.byteOffset, f = r(+o), l = 0; l < n; l++) s[c + l] = f[i ? l : n - l - 1]
            };
        if (i) {
            if (!s((function () {
                    x(1)
                })) || !s((function () {
                    new x(-1)
                })) || s((function () {
                    return new x, new x(1.5), new x(NaN), "ArrayBuffer" != x.name
                }))) {
                for (var N, L = (O = function (t) {
                        return c(this, O), new x(p(t))
                    }).prototype = x.prototype, D = d(x), U = 0; D.length > U;)(N = D[U++]) in O || a(O, N, x[N]);
                L.constructor = O
            }
            var q = new S(new O(2)),
                B = S.prototype.setInt8;
            q.setInt8(0, 2147483648), q.setInt8(1, 2147483649), !q.getInt8(0) && q.getInt8(1) || u(S.prototype, {
                setInt8: function (t, n) {
                    B.call(this, t, n << 24 >> 24)
                },
                setUint8: function (t, n) {
                    B.call(this, t, n << 24 >> 24)
                }
            }, {
                unsafe: !0
            })
        } else O = function (t) {
            c(this, O, "ArrayBuffer");
            var n = p(t);
            w(this, {
                bytes: g.call(new Array(n), 0),
                byteLength: n
            }), o || (this.byteLength = n)
        }, S = function (t, n, e) {
            c(this, S, "DataView"), c(t, O, "DataView");
            var r = b(t).byteLength,
                i = f(n);
            if (i < 0 || i > r) throw j("Wrong offset");
            if (i + (e = void 0 === e ? r - i : l(e)) > r) throw j("Wrong length");
            w(this, {
                buffer: t,
                byteLength: e,
                byteOffset: i
            }), o || (this.buffer = t, this.byteLength = e, this.byteOffset = i)
        }, o && (I(O, "byteLength"), I(S, "buffer"), I(S, "byteLength"), I(S, "byteOffset")), u(S.prototype, {
            getInt8: function (t) {
                return C(this, 1, t)[0] << 24 >> 24
            },
            getUint8: function (t) {
                return C(this, 1, t)[0]
            },
            getInt16: function (t) {
                var n = C(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
                return (n[1] << 8 | n[0]) << 16 >> 16
            },
            getUint16: function (t) {
                var n = C(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
                return n[1] << 8 | n[0]
            },
            getInt32: function (t) {
                return R(C(this, 4, t, arguments.length > 1 ? arguments[1] : void 0))
            },
            getUint32: function (t) {
                return R(C(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
            },
            getFloat32: function (t) {
                return A(C(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23)
            },
            getFloat64: function (t) {
                return A(C(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52)
            },
            setInt8: function (t, n) {
                F(this, 1, t, k, n)
            },
            setUint8: function (t, n) {
                F(this, 1, t, k, n)
            },
            setInt16: function (t, n) {
                F(this, 2, t, T, n, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint16: function (t, n) {
                F(this, 2, t, T, n, arguments.length > 2 ? arguments[2] : void 0)
            },
            setInt32: function (t, n) {
                F(this, 4, t, P, n, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint32: function (t, n) {
                F(this, 4, t, P, n, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat32: function (t, n) {
                F(this, 4, t, _, n, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat64: function (t, n) {
                F(this, 8, t, M, n, arguments.length > 2 ? arguments[2] : void 0)
            }
        });
        y(O, "ArrayBuffer"), y(S, "DataView"), t.exports = {
            ArrayBuffer: O,
            DataView: S
        }
    }, function (t, n, e) {
        var r = e(0),
            o = e(3),
            i = e(4),
            a = e(17),
            u = e(24),
            s = e(50);
        r({
            target: "Reflect",
            stat: !0
        }, {
            get: function t(n, e) {
                var r, c, f = arguments.length < 3 ? n : arguments[2];
                return i(n) === f ? n[e] : (r = u.f(n, e)) ? a(r, "value") ? r.value : void 0 === r.get ? void 0 : r.get.call(f) : o(c = s(n)) ? t(c, e, f) : void 0
            }
        })
    }, function (t, n, e) {
        var r = e(124);
        t.exports = function (t, n) {
            for (var e = t.length; e--;)
                if (r(t[e][0], n)) return e;
            return -1
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return t === n || t != t && n != n
        }
    }, function (t, n) {
        t.exports = function (t) {
            var n = [];
            if (null != t)
                for (var e in Object(t)) n.push(e);
            return n
        }
    }, function (t, n, e) {
        var r = e(467),
            o = "object" == typeof self && self && self.Object === Object && self,
            i = r || o || Function("return this")();
        t.exports = i
    }, function (t, n) {
        t.exports = function (t) {
            return t
        }
    }, function (t, n, e) {
        var r = e(499),
            o = e(130);
        t.exports = function (t) {
            return o(t) && r(t)
        }
    }, function (t, n) {
        var e = Object.prototype.toString;
        t.exports = function (t) {
            return e.call(t)
        }
    }, function (t, n) {
        t.exports = function (t) {
            return null != t && "object" == typeof t
        }
    }, function (t, n) {
        t.exports = function () {
            return !1
        }
    }, function (t, n, e) {
        var r = e(487),
            o = e(275)((function (t, n) {
                return null == t ? {} : r(t, n)
            }));
        t.exports = o
    }, function (t, n, e) {
        var r = e(71),
            o = e(169),
            i = e(500),
            a = e(83),
            u = e(70),
            s = e(504),
            c = e(275),
            f = e(174),
            l = c((function (t, n) {
                var e = {};
                if (null == t) return e;
                var c = !1;
                n = r(n, (function (n) {
                    return n = a(n, t), c || (c = n.length > 1), n
                })), u(t, f(t), e), c && (e = o(e, 7, s));
                for (var l = n.length; l--;) i(e, n[l]);
                return e
            }));
        t.exports = l
    }, function (t, n) {
        var e;
        e = function () {
            return this
        }();
        try {
            e = e || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (e = window)
        }
        t.exports = e
    }, function (t, n, e) {
        var r = e(2),
            o = e(3),
            i = r.document,
            a = o(i) && o(i.createElement);
        t.exports = function (t) {
            return a ? i.createElement(t) : {}
        }
    }, function (t, n, e) {
        var r = e(2),
            o = e(28);
        t.exports = function (t, n) {
            try {
                o(r, t, n)
            } catch (e) {
                r[t] = n
            }
            return n
        }
    }, function (t, n, e) {
        var r = e(189),
            o = Function.toString;
        "function" != typeof r.inspectSource && (r.inspectSource = function (t) {
            return o.call(t)
        }), t.exports = r.inspectSource
    }, function (t, n, e) {
        var r = e(47),
            o = e(189);
        (t.exports = function (t, n) {
            return o[t] || (o[t] = void 0 !== n ? n : {})
        })("versions", []).push({
            version: "3.6.1",
            mode: r ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, n, e) {
        var r = e(41),
            o = e(64),
            i = e(141),
            a = e(4);
        t.exports = r("Reflect", "ownKeys") || function (t) {
            var n = o.f(a(t)),
                e = i.f;
            return e ? n.concat(e(t)) : n
        }
    }, function (t, n) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, function (t, n) {
        n.f = Object.getOwnPropertySymbols
    }, function (t, n, e) {
        var r = e(1);
        t.exports = !!Object.getOwnPropertySymbols && !r((function () {
            return !String(Symbol())
        }))
    }, function (t, n, e) {
        var r = e(5),
            o = e(10),
            i = e(4),
            a = e(92);
        t.exports = r ? Object.defineProperties : function (t, n) {
            i(t);
            for (var e, r = a(n), u = r.length, s = 0; u > s;) o.f(t, e = r[s++], n[e]);
            return t
        }
    }, function (t, n, e) {
        var r = e(0),
            o = e(95),
            i = e(1),
            a = e(3),
            u = e(66).onFreeze,
            s = Object.freeze;
        r({
            target: "Object",
            stat: !0,
            forced: i((function () {
                s(1)
            })),
            sham: !o
        }, {
            freeze: function (t) {
                return s && a(t) ? s(u(t)) : t
            }
        })
    }, function (t, n, e) {
        var r = e(7),
            o = e(96),
            i = r("iterator"),
            a = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (o.Array === t || a[i] === t)
        }
    }, function (t, n, e) {
        var r = {};
        r[e(7)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
    }, function (t, n, e) {
        var r = e(1);
        t.exports = !r((function () {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        }))
    }, function (t, n, e) {
        var r, o, i = e(2),
            a = e(108),
            u = i.process,
            s = u && u.versions,
            c = s && s.v8;
        c ? o = (r = c.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), t.exports = o && +o
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(21).every;
        r({
            target: "Array",
            proto: !0,
            forced: e(52)("every")
        }, {
            every: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(151),
            i = e(60);
        r({
            target: "Array",
            proto: !0
        }, {
            fill: o
        }), i("fill")
    }, function (t, n, e) {
        "use strict";
        var r = e(14),
            o = e(57),
            i = e(8);
        t.exports = function (t) {
            for (var n = r(this), e = i(n.length), a = arguments.length, u = o(a > 1 ? arguments[1] : void 0, e), s = a > 2 ? arguments[2] : void 0, c = void 0 === s ? e : o(s, e); c > u;) n[u++] = t;
            return n
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(153),
            i = e(50),
            a = e(76),
            u = e(48),
            s = e(28),
            c = e(25),
            f = e(7),
            l = e(47),
            p = e(96),
            h = e(209),
            d = h.IteratorPrototype,
            v = h.BUGGY_SAFARI_ITERATORS,
            g = f("iterator"),
            y = function () {
                return this
            };
        t.exports = function (t, n, e, f, h, m, b) {
            o(e, n, f);
            var w, x, O, S = function (t) {
                    if (t === h && T) return T;
                    if (!v && t in A) return A[t];
                    switch (t) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function () {
                                return new e(this, t)
                            }
                    }
                    return function () {
                        return new e(this)
                    }
                },
                j = n + " Iterator",
                E = !1,
                A = t.prototype,
                k = A[g] || A["@@iterator"] || h && A[h],
                T = !v && k || S(h),
                P = "Array" == n && A.entries || k;
            if (P && (w = i(P.call(new t)), d !== Object.prototype && w.next && (l || i(w) === d || (a ? a(w, d) : "function" != typeof w[g] && s(w, g, y)), u(w, j, !0, !0), l && (p[j] = y))), "values" == h && k && "values" !== k.name && (E = !0, T = function () {
                    return k.call(this)
                }), l && !b || A[g] === T || s(A, g, T), p[n] = T, h)
                if (x = {
                        values: S("values"),
                        keys: m ? T : S("keys"),
                        entries: S("entries")
                    }, b)
                    for (O in x) !v && !E && O in A || c(A, O, x[O]);
                else r({
                    target: n,
                    proto: !0,
                    forced: v || E
                }, x);
            return x
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(209).IteratorPrototype,
            o = e(51),
            i = e(56),
            a = e(48),
            u = e(96),
            s = function () {
                return this
            };
        t.exports = function (t, n, e) {
            var c = n + " Iterator";
            return t.prototype = o(r, {
                next: i(1, e)
            }), a(t, c, !1, !0), u[c] = s, t
        }
    }, function (t, n, e) {
        var r = e(111);
        t.exports = function (t) {
            if (r(t)) throw TypeError("The method doesn't accept regular expressions");
            return t
        }
    }, function (t, n, e) {
        var r = e(7)("match");
        t.exports = function (t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (e) {
                try {
                    return n[r] = !1, "/./" [t](n)
                } catch (t) {}
            }
            return !1
        }
    }, function (t, n, e) {
        var r = e(8),
            o = e(157),
            i = e(27),
            a = Math.ceil,
            u = function (t) {
                return function (n, e, u) {
                    var s, c, f = String(i(n)),
                        l = f.length,
                        p = void 0 === u ? " " : String(u),
                        h = r(e);
                    return h <= l || "" == p ? f : (s = h - l, (c = o.call(p, a(s / p.length))).length > s && (c = c.slice(0, s)), t ? f + c : c + f)
                }
            };
        t.exports = {
            start: u(!1),
            end: u(!0)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(42),
            o = e(27);
        t.exports = "".repeat || function (t) {
            var n = String(o(this)),
                e = "",
                i = r(t);
            if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
            for (; i > 0;
                (i >>>= 1) && (n += n)) 1 & i && (e += n);
            return e
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(24).f,
            i = e(8),
            a = e(154),
            u = e(27),
            s = e(155),
            c = e(47),
            f = "".startsWith,
            l = Math.min,
            p = s("startsWith");
        r({
            target: "String",
            proto: !0,
            forced: !(!c && !p && !! function () {
                var t = o(String.prototype, "startsWith");
                return t && !t.writable
            }()) && !p
        }, {
            startsWith: function (t) {
                var n = String(u(this));
                a(t);
                var e = i(l(arguments.length > 1 ? arguments[1] : void 0, n.length)),
                    r = String(t);
                return f ? f.call(n, r, e) : n.slice(e, e + r.length) === r
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(81).trim;
        r({
            target: "String",
            proto: !0,
            forced: e(160)("trim")
        }, {
            trim: function () {
                return o(this)
            }
        })
    }, function (t, n, e) {
        var r = e(1),
            o = e(117);
        t.exports = function (t) {
            return r((function () {
                return !!o[t]() || "​᠎" != "​᠎" [t]() || o[t].name !== t
            }))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(5),
            o = e(2),
            i = e(91),
            a = e(25),
            u = e(17),
            s = e(40),
            c = e(118),
            f = e(46),
            l = e(1),
            p = e(51),
            h = e(64).f,
            d = e(24).f,
            v = e(10).f,
            g = e(81).trim,
            y = o.Number,
            m = y.prototype,
            b = "Number" == s(p(m)),
            w = function (t) {
                var n, e, r, o, i, a, u, s, c = f(t, !1);
                if ("string" == typeof c && c.length > 2)
                    if (43 === (n = (c = g(c)).charCodeAt(0)) || 45 === n) {
                        if (88 === (e = c.charCodeAt(2)) || 120 === e) return NaN
                    } else if (48 === n) {
                    switch (c.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, o = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, o = 55;
                            break;
                        default:
                            return +c
                    }
                    for (a = (i = c.slice(2)).length, u = 0; u < a; u++)
                        if ((s = i.charCodeAt(u)) < 48 || s > o) return NaN;
                    return parseInt(i, r)
                }
                return +c
            };
        if (i("Number", !y(" 0o1") || !y("0b1") || y("+0x1"))) {
            for (var x, O = function (t) {
                    var n = arguments.length < 1 ? 0 : t,
                        e = this;
                    return e instanceof O && (b ? l((function () {
                        m.valueOf.call(e)
                    })) : "Number" != s(e)) ? c(new y(w(n)), e, O) : w(n)
                }, S = r ? h(y) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), j = 0; S.length > j; j++) u(y, x = S[j]) && !u(O, x) && v(O, x, d(y, x));
            O.prototype = m, m.constructor = O, a(o, "Number", O)
        }
    }, function (t, n) {
        t.exports = Math.sign || function (t) {
            return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
        }
    }, function (t, n, e) {
        var r, o, i, a = e(2),
            u = e(1),
            s = e(40),
            c = e(58),
            f = e(194),
            l = e(135),
            p = e(222),
            h = a.location,
            d = a.setImmediate,
            v = a.clearImmediate,
            g = a.process,
            y = a.MessageChannel,
            m = a.Dispatch,
            b = 0,
            w = {},
            x = function (t) {
                if (w.hasOwnProperty(t)) {
                    var n = w[t];
                    delete w[t], n()
                }
            },
            O = function (t) {
                return function () {
                    x(t)
                }
            },
            S = function (t) {
                x(t.data)
            },
            j = function (t) {
                a.postMessage(t + "", h.protocol + "//" + h.host)
            };
        d && v || (d = function (t) {
            for (var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
            return w[++b] = function () {
                ("function" == typeof t ? t : Function(t)).apply(void 0, n)
            }, r(b), b
        }, v = function (t) {
            delete w[t]
        }, "process" == s(g) ? r = function (t) {
            g.nextTick(O(t))
        } : m && m.now ? r = function (t) {
            m.now(O(t))
        } : y && !p ? (i = (o = new y).port2, o.port1.onmessage = S, r = c(i.postMessage, i, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || u(j) ? r = "onreadystatechange" in l("script") ? function (t) {
            f.appendChild(l("script")).onreadystatechange = function () {
                f.removeChild(this), x(t)
            }
        } : function (t) {
            setTimeout(O(t), 0)
        } : (r = j, a.addEventListener("message", S, !1))), t.exports = {
            set: d,
            clear: v
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(32),
            o = function (t) {
                var n, e;
                this.promise = new t((function (t, r) {
                    if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
                    n = t, e = r
                })), this.resolve = r(n), this.reject = r(e)
            };
        t.exports.f = function (t) {
            return new o(t)
        }
    }, function (t, n, e) {
        var r = e(2),
            o = e(1),
            i = e(107),
            a = e(6).NATIVE_ARRAY_BUFFER_VIEWS,
            u = r.ArrayBuffer,
            s = r.Int8Array;
        t.exports = !a || !o((function () {
            s(1)
        })) || !o((function () {
            new s(-1)
        })) || !i((function (t) {
            new s, new s(null), new s(1.5), new s(t)
        }), !0) || o((function () {
            return 1 !== new s(new u(2), 1, void 0).length
        }))
    }, function (t, n, e) {
        var r = e(0),
            o = e(5),
            i = e(4),
            a = e(24);
        r({
            target: "Reflect",
            stat: !0,
            sham: !o
        }, {
            getOwnPropertyDescriptor: function (t, n) {
                return a.f(i(t), n)
            }
        })
    }, function (t, n, e) {
        e(0)({
            target: "Reflect",
            stat: !0
        }, {
            has: function (t, n) {
                return n in t
            }
        })
    }, function (t, n, e) {
        e(0)({
            target: "Reflect",
            stat: !0
        }, {
            ownKeys: e(139)
        })
    }, function (t, n, e) {
        var r = e(263),
            o = e(462),
            i = e(170),
            a = e(465),
            u = e(466),
            s = e(264),
            c = e(266),
            f = e(468),
            l = e(470),
            p = e(472),
            h = e(174),
            d = e(473),
            v = e(474),
            g = e(475),
            y = e(267),
            m = e(45),
            b = e(269),
            w = e(478),
            x = e(30),
            O = e(479),
            S = e(172),
            j = {};
        j["[object Arguments]"] = j["[object Array]"] = j["[object ArrayBuffer]"] = j["[object DataView]"] = j["[object Boolean]"] = j["[object Date]"] = j["[object Float32Array]"] = j["[object Float64Array]"] = j["[object Int8Array]"] = j["[object Int16Array]"] = j["[object Int32Array]"] = j["[object Map]"] = j["[object Number]"] = j["[object Object]"] = j["[object RegExp]"] = j["[object Set]"] = j["[object String]"] = j["[object Symbol]"] = j["[object Uint8Array]"] = j["[object Uint8ClampedArray]"] = j["[object Uint16Array]"] = j["[object Uint32Array]"] = !0, j["[object Error]"] = j["[object Function]"] = j["[object WeakMap]"] = !1, t.exports = function t(n, e, E, A, k, T) {
            var P, R = 1 & e,
                _ = 2 & e,
                M = 4 & e;
            if (E && (P = k ? E(n, A, k, T) : E(n)), void 0 !== P) return P;
            if (!x(n)) return n;
            var I = m(n);
            if (I) {
                if (P = v(n), !R) return c(n, P)
            } else {
                var C = d(n),
                    F = "[object Function]" == C || "[object GeneratorFunction]" == C;
                if (b(n)) return s(n, R);
                if ("[object Object]" == C || "[object Arguments]" == C || F && !k) {
                    if (P = _ || F ? {} : y(n), !R) return _ ? l(n, u(P, n)) : f(n, a(P, n))
                } else {
                    if (!j[C]) return k ? n : {};
                    P = g(n, C, R)
                }
            }
            T || (T = new r);
            var N = T.get(n);
            if (N) return N;
            T.set(n, P), O(n) ? n.forEach((function (r) {
                P.add(t(r, e, E, r, n, T))
            })) : w(n) && n.forEach((function (r, o) {
                P.set(o, t(r, e, E, o, n, T))
            }));
            var L = M ? _ ? h : p : _ ? keysIn : S,
                D = I ? void 0 : L(n);
            return o(D || n, (function (r, o) {
                D && (r = n[o = r]), i(P, o, t(r, e, E, o, n, T))
            })), P
        }
    }, function (t, n, e) {
        var r = e(171),
            o = e(124),
            i = Object.prototype.hasOwnProperty;
        t.exports = function (t, n, e) {
            var a = t[n];
            i.call(t, n) && o(a, e) && (void 0 !== e || n in t) || r(t, n, e)
        }
    }, function (t, n, e) {
        var r = e(463);
        t.exports = function (t, n, e) {
            "__proto__" == n && r ? r(t, n, {
                configurable: !0,
                enumerable: !0,
                value: e,
                writable: !0
            }) : t[n] = e
        }
    }, function (t, n, e) {
        var r = e(173)(Object.keys, Object);
        t.exports = r
    }, function (t, n) {
        t.exports = function (t, n) {
            return function (e) {
                return t(n(e))
            }
        }
    }, function (t, n) {
        t.exports = function (t) {
            var n = [];
            if (null != t)
                for (var e in Object(t)) n.push(e);
            return n
        }
    }, function (t, n) {
        t.exports = function (t) {
            return t
        }
    }, function (t, n) {
        t.exports = function (t) {
            return t
        }
    }, function (t, n) {
        t.exports = function () {
            return !1
        }
    }, function (t, n, e) {
        var r = e(491),
            o = e(492);
        t.exports = function t(n, e, i, a, u) {
            var s = -1,
                c = n.length;
            for (i || (i = o), u || (u = []); ++s < c;) {
                var f = n[s];
                e > 0 && i(f) ? e > 1 ? t(f, e - 1, i, a, u) : r(u, f) : a || (u[u.length] = f)
            }
            return u
        }
    }, function (t, n, e) {
        var r = e(45);
        t.exports = function () {
            if (!arguments.length) return [];
            var t = arguments[0];
            return r(t) ? t : [t]
        }
    }, function (t, n, e) {
        var r = e(279);
        t.exports = function (t, n) {
            return !!(null == t ? 0 : t.length) && r(t, n, 0) > -1
        }
    }, function (t, n) {
        t.exports = function (t, n, e) {
            for (var r = -1, o = null == t ? 0 : t.length; ++r < o;)
                if (e(n, t[r])) return !0;
            return !1
        }
    }, function (t, n, e) {
        var r = e(279);
        t.exports = function (t, n) {
            return !!(null == t ? 0 : t.length) && r(t, n, 0) > -1
        }
    }, function (t, n) {
        t.exports = function (t) {
            return function (n) {
                return t(n)
            }
        }
    }, function (t, n) {
        t.exports = function (t) {
            return t
        }
    }, function (t, n) {
        t.exports = function () {
            throw new Error("define cannot be used indirect")
        }
    }, function (t, n, e) {
        var r;
        ! function (o, i) {
            "use strict";
            var a = "model",
                u = "name",
                s = "type",
                c = "vendor",
                f = "version",
                l = "mobile",
                p = "tablet",
                h = {
                    extend: function (t, n) {
                        var e = {};
                        for (var r in t) n[r] && n[r].length % 2 == 0 ? e[r] = n[r].concat(t[r]) : e[r] = t[r];
                        return e
                    },
                    has: function (t, n) {
                        return "string" == typeof t && -1 !== n.toLowerCase().indexOf(t.toLowerCase())
                    },
                    lowerize: function (t) {
                        return t.toLowerCase()
                    },
                    major: function (t) {
                        return "string" == typeof t ? t.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                    },
                    trim: function (t) {
                        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                d = {
                    rgx: function (t, n) {
                        for (var e, r, o, i, a, u, s = 0; s < n.length && !a;) {
                            var c = n[s],
                                f = n[s + 1];
                            for (e = r = 0; e < c.length && !a;)
                                if (a = c[e++].exec(t))
                                    for (o = 0; o < f.length; o++) u = a[++r], "object" == typeof (i = f[o]) && i.length > 0 ? 2 == i.length ? "function" == typeof i[1] ? this[i[0]] = i[1].call(this, u) : this[i[0]] = i[1] : 3 == i.length ? "function" != typeof i[1] || i[1].exec && i[1].test ? this[i[0]] = u ? u.replace(i[1], i[2]) : void 0 : this[i[0]] = u ? i[1].call(this, u, i[2]) : void 0 : 4 == i.length && (this[i[0]] = u ? i[3].call(this, u.replace(i[1], i[2])) : void 0) : this[i] = u || void 0;
                            s += 2
                        }
                    },
                    str: function (t, n) {
                        for (var e in n)
                            if ("object" == typeof n[e] && n[e].length > 0) {
                                for (var r = 0; r < n[e].length; r++)
                                    if (h.has(n[e][r], t)) return "?" === e ? void 0 : e
                            } else if (h.has(n[e], t)) return "?" === e ? void 0 : e;
                        return t
                    }
                },
                v = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                },
                g = {
                    browser: [
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                        [u, f],
                        [/(opios)[\/\s]+([\w\.]+)/i],
                        [
                            [u, "Opera Mini"], f
                        ],
                        [/\s(opr)\/([\w\.]+)/i],
                        [
                            [u, "Opera"], f
                        ],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                        [u, f],
                        [/(konqueror)\/([\w\.]+)/i],
                        [
                            [u, "Konqueror"], f
                        ],
                        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                        [
                            [u, "IE"], f
                        ],
                        [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                        [
                            [u, "Edge"], f
                        ],
                        [/(yabrowser)\/([\w\.]+)/i],
                        [
                            [u, "Yandex"], f
                        ],
                        [/(puffin)\/([\w\.]+)/i],
                        [
                            [u, "Puffin"], f
                        ],
                        [/(focus)\/([\w\.]+)/i],
                        [
                            [u, "Firefox Focus"], f
                        ],
                        [/(opt)\/([\w\.]+)/i],
                        [
                            [u, "Opera Touch"], f
                        ],
                        [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                        [
                            [u, "UCBrowser"], f
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [u, /_/g, " "], f
                        ],
                        [/(windowswechat qbcore)\/([\w\.]+)/i],
                        [
                            [u, "WeChat(Win) Desktop"], f
                        ],
                        [/(micromessenger)\/([\w\.]+)/i],
                        [
                            [u, "WeChat"], f
                        ],
                        [/(brave)\/([\w\.]+)/i],
                        [
                            [u, "Brave"], f
                        ],
                        [/(qqbrowserlite)\/([\w\.]+)/i],
                        [u, f],
                        [/(QQ)\/([\d\.]+)/i],
                        [u, f],
                        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                        [u, f],
                        [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                        [u, f],
                        [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                        [u, f],
                        [/(MetaSr)[\/\s]?([\w\.]+)/i],
                        [u],
                        [/(LBBROWSER)/i],
                        [u],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [f, [u, "MIUI Browser"]],
                        [/;fbav\/([\w\.]+);/i],
                        [f, [u, "Facebook"]],
                        [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                        [u, f],
                        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        [f, [u, "Chrome Headless"]],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [u, /(.+)/, "$1 WebView"], f
                        ],
                        [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                        [
                            [u, /(.+(?:g|us))(.+)/, "$1 $2"], f
                        ],
                        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                        [f, [u, "Android Browser"]],
                        [/(sailfishbrowser)\/([\w\.]+)/i],
                        [
                            [u, "Sailfish Browser"], f
                        ],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        [u, f],
                        [/(dolfin)\/([\w\.]+)/i],
                        [
                            [u, "Dolphin"], f
                        ],
                        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                        [
                            [u, "Chrome"], f
                        ],
                        [/(coast)\/([\w\.]+)/i],
                        [
                            [u, "Opera Coast"], f
                        ],
                        [/fxios\/([\w\.-]+)/i],
                        [f, [u, "Firefox"]],
                        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                        [f, [u, "Mobile Safari"]],
                        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                        [f, u],
                        [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [
                            [u, "GSA"], f
                        ],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [u, [f, d.str, v.browser.oldsafari.version]],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [u, f],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [u, "Netscape"], f
                        ],
                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [u, f]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            ["architecture", "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            ["architecture", h.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            ["architecture", "ia32"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            ["architecture", "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            ["architecture", /ower/, "", h.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            ["architecture", "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                        [
                            ["architecture", h.lowerize]
                        ]
                    ],
                    device: [
                        [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                        [a, c, [s, p]],
                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                        [a, [c, "Apple"],
                            [s, p]
                        ],
                        [/(apple\s{0,1}tv)/i],
                        [
                            [a, "Apple TV"],
                            [c, "Apple"]
                        ],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                        [c, a, [s, p]],
                        [/(kf[A-z]+)\sbuild\/.+silk\//i],
                        [a, [c, "Amazon"],
                            [s, p]
                        ],
                        [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                        [
                            [a, d.str, v.device.amazon.model],
                            [c, "Amazon"],
                            [s, l]
                        ],
                        [/android.+aft([bms])\sbuild/i],
                        [a, [c, "Amazon"],
                            [s, "smarttv"]
                        ],
                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                        [a, c, [s, l]],
                        [/\((ip[honed|\s\w*]+);/i],
                        [a, [c, "Apple"],
                            [s, l]
                        ],
                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                        [c, a, [s, l]],
                        [/\(bb10;\s(\w+)/i],
                        [a, [c, "BlackBerry"],
                            [s, l]
                        ],
                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                        [a, [c, "Asus"],
                            [s, p]
                        ],
                        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                        [
                            [c, "Sony"],
                            [a, "Xperia Tablet"],
                            [s, p]
                        ],
                        [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [a, [c, "Sony"],
                            [s, l]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                        [c, a, [s, "console"]],
                        [/android.+;\s(shield)\sbuild/i],
                        [a, [c, "Nvidia"],
                            [s, "console"]
                        ],
                        [/(playstation\s[34portablevi]+)/i],
                        [a, [c, "Sony"],
                            [s, "console"]
                        ],
                        [/(sprint\s(\w+))/i],
                        [
                            [c, d.str, v.device.sprint.vendor],
                            [a, d.str, v.device.sprint.model],
                            [s, l]
                        ],
                        [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                        [c, [a, /_/g, " "],
                            [s, l]
                        ],
                        [/(nexus\s9)/i],
                        [a, [c, "HTC"],
                            [s, p]
                        ],
                        [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                        [a, [c, "Huawei"],
                            [s, l]
                        ],
                        [/(microsoft);\s(lumia[\s\w]+)/i],
                        [c, a, [s, l]],
                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                        [a, [c, "Microsoft"],
                            [s, "console"]
                        ],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [a, /\./g, " "],
                            [c, "Microsoft"],
                            [s, l]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                        [a, [c, "Motorola"],
                            [s, l]
                        ],
                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [a, [c, "Motorola"],
                            [s, p]
                        ],
                        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        [
                            [c, h.trim],
                            [a, h.trim],
                            [s, "smarttv"]
                        ],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [a, /^/, "SmartTV"],
                            [c, "Samsung"],
                            [s, "smarttv"]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [a, [c, "Sharp"],
                            [s, "smarttv"]
                        ],
                        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                        [
                            [c, "Samsung"], a, [s, p]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [c, [s, "smarttv"], a],
                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                        [
                            [c, "Samsung"], a, [s, l]
                        ],
                        [/sie-(\w*)/i],
                        [a, [c, "Siemens"],
                            [s, l]
                        ],
                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                        [
                            [c, "Nokia"], a, [s, l]
                        ],
                        [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                        [a, [c, "Acer"],
                            [s, p]
                        ],
                        [/android.+([vl]k\-?\d{3})\s+build/i],
                        [a, [c, "LG"],
                            [s, p]
                        ],
                        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                        [
                            [c, "LG"], a, [s, p]
                        ],
                        [/(lg) netcast\.tv/i],
                        [c, a, [s, "smarttv"]],
                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                        [a, [c, "LG"],
                            [s, l]
                        ],
                        [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                        [c, a, [s, p]],
                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                        [a, [c, "Lenovo"],
                            [s, p]
                        ],
                        [/(lenovo)[_\s-]?([\w-]+)/i],
                        [c, a, [s, l]],
                        [/linux;.+((jolla));/i],
                        [c, a, [s, l]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [c, a, [s, "wearable"]],
                        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                        [c, a, [s, l]],
                        [/crkey/i],
                        [
                            [a, "Chromecast"],
                            [c, "Google"]
                        ],
                        [/android.+;\s(glass)\s\d/i],
                        [a, [c, "Google"],
                            [s, "wearable"]
                        ],
                        [/android.+;\s(pixel c)[\s)]/i],
                        [a, [c, "Google"],
                            [s, p]
                        ],
                        [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                        [a, [c, "Google"],
                            [s, l]
                        ],
                        [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [a, /_/g, " "],
                            [c, "Xiaomi"],
                            [s, l]
                        ],
                        [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [a, /_/g, " "],
                            [c, "Xiaomi"],
                            [s, p]
                        ],
                        [/android.+;\s(m[1-5]\snote)\sbuild/i],
                        [a, [c, "Meizu"],
                            [s, l]
                        ],
                        [/(mz)-([\w-]{2,})/i],
                        [
                            [c, "Meizu"], a, [s, l]
                        ],
                        [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                        [a, [c, "OnePlus"],
                            [s, l]
                        ],
                        [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                        [a, [c, "RCA"],
                            [s, p]
                        ],
                        [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                        [a, [c, "Dell"],
                            [s, p]
                        ],
                        [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                        [a, [c, "Verizon"],
                            [s, p]
                        ],
                        [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                        [
                            [c, "Barnes & Noble"], a, [s, p]
                        ],
                        [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                        [a, [c, "NuVision"],
                            [s, p]
                        ],
                        [/android.+;\s(k88)\sbuild/i],
                        [a, [c, "ZTE"],
                            [s, p]
                        ],
                        [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                        [a, [c, "Swiss"],
                            [s, l]
                        ],
                        [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                        [a, [c, "Swiss"],
                            [s, p]
                        ],
                        [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                        [a, [c, "Zeki"],
                            [s, p]
                        ],
                        [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                        [
                            [c, "Dragon Touch"], a, [s, p]
                        ],
                        [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                        [a, [c, "Insignia"],
                            [s, p]
                        ],
                        [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                        [a, [c, "NextBook"],
                            [s, p]
                        ],
                        [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                        [
                            [c, "Voice"], a, [s, l]
                        ],
                        [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                        [
                            [c, "LvTel"], a, [s, l]
                        ],
                        [/android.+;\s(PH-1)\s/i],
                        [a, [c, "Essential"],
                            [s, l]
                        ],
                        [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                        [a, [c, "Envizen"],
                            [s, p]
                        ],
                        [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                        [c, a, [s, p]],
                        [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                        [a, [c, "MachSpeed"],
                            [s, p]
                        ],
                        [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                        [c, a, [s, p]],
                        [/android.+[;\/]\s*TU_(1491)\s+build/i],
                        [a, [c, "Rotor"],
                            [s, p]
                        ],
                        [/android.+(KS(.+))\s+build/i],
                        [a, [c, "Amazon"],
                            [s, p]
                        ],
                        [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                        [c, a, [s, p]],
                        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        [
                            [s, h.lowerize], c, a
                        ],
                        [/[\s\/\(](smart-?tv)[;\)]/i],
                        [
                            [s, "smarttv"]
                        ],
                        [/(android[\w\.\s\-]{0,9});.+build/i],
                        [a, [c, "Generic"]]
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [f, [u, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)/i],
                        [
                            [u, "Blink"]
                        ],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [u, f],
                        [/rv\:([\w\.]{1,9}).+(gecko)/i],
                        [f, u]
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [u, f],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                        [u, [f, d.str, v.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [u, "Windows"],
                            [f, d.str, v.os.windows.version]
                        ],
                        [/\((bb)(10);/i],
                        [
                            [u, "BlackBerry"], f
                        ],
                        [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                        [u, f],
                        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                        [
                            [u, "Symbian"], f
                        ],
                        [/\((series40);/i],
                        [u],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [u, "Firefox OS"], f
                        ],
                        [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                        [u, f],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [u, "Chromium OS"], f
                        ],
                        [/(sunos)\s?([\w\.\d]*)/i],
                        [
                            [u, "Solaris"], f
                        ],
                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                        [u, f],
                        [/(haiku)\s(\w+)/i],
                        [u, f],
                        [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                        [
                            [f, /_/g, "."],
                            [u, "iOS"]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                        [
                            [u, "Mac OS"],
                            [f, /_/g, "."]
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                        [u, f]
                    ]
                },
                y = function (t, n) {
                    if ("object" == typeof t && (n = t, t = void 0), !(this instanceof y)) return new y(t, n).getResult();
                    var e = t || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                        r = n ? h.extend(g, n) : g;
                    return this.getBrowser = function () {
                        var t = {
                            name: void 0,
                            version: void 0
                        };
                        return d.rgx.call(t, e, r.browser), t.major = h.major(t.version), t
                    }, this.getCPU = function () {
                        var t = {
                            architecture: void 0
                        };
                        return d.rgx.call(t, e, r.cpu), t
                    }, this.getDevice = function () {
                        var t = {
                            vendor: void 0,
                            model: void 0,
                            type: void 0
                        };
                        return d.rgx.call(t, e, r.device), t
                    }, this.getEngine = function () {
                        var t = {
                            name: void 0,
                            version: void 0
                        };
                        return d.rgx.call(t, e, r.engine), t
                    }, this.getOS = function () {
                        var t = {
                            name: void 0,
                            version: void 0
                        };
                        return d.rgx.call(t, e, r.os), t
                    }, this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function () {
                        return e
                    }, this.setUA = function (t) {
                        return e = t, this
                    }, this
                };
            y.VERSION = "0.7.20", y.BROWSER = {
                NAME: u,
                MAJOR: "major",
                VERSION: f
            }, y.CPU = {
                ARCHITECTURE: "architecture"
            }, y.DEVICE = {
                MODEL: a,
                VENDOR: c,
                TYPE: s,
                CONSOLE: "console",
                MOBILE: l,
                SMARTTV: "smarttv",
                TABLET: p,
                WEARABLE: "wearable",
                EMBEDDED: "embedded"
            }, y.ENGINE = {
                NAME: u,
                VERSION: f
            }, y.OS = {
                NAME: u,
                VERSION: f
            }, void 0 !== n ? (void 0 !== t && t.exports && (n = t.exports = y), n.UAParser = y) : void 0 === (r = function () {
                return y
            }.call(n, e, n, t)) || (t.exports = r);
            var m = o && (o.jQuery || o.Zepto);
            if (void 0 !== m && !m.ua) {
                var b = new y;
                m.ua = b.getResult(), m.ua.get = function () {
                    return b.getUA()
                }, m.ua.set = function (t) {
                    b.setUA(t);
                    var n = b.getResult();
                    for (var e in n) m.ua[e] = n[e]
                }
            }
        }("object" == typeof window ? window : this)
    }, function (t, n, e) {
        var r = e(535),
            o = e(184);
        t.exports = function (t) {
            return r(t, o)
        }
    }, function (t, n, e) {
        var r = e(5),
            o = e(1),
            i = e(135);
        t.exports = !r && !o((function () {
            return 7 != Object.defineProperty(i("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, n, e) {
        var r = e(2),
            o = e(136),
            i = r["__core-js_shared__"] || o("__core-js_shared__", {});
        t.exports = i
    }, function (t, n, e) {
        var r = e(2),
            o = e(137),
            i = r.WeakMap;
        t.exports = "function" == typeof i && /native code/.test(o(i))
    }, function (t, n, e) {
        var r = e(17),
            o = e(139),
            i = e(24),
            a = e(10);
        t.exports = function (t, n) {
            for (var e = o(n), u = a.f, s = i.f, c = 0; c < e.length; c++) {
                var f = e[c];
                r(t, f) || u(t, f, s(n, f))
            }
        }
    }, function (t, n, e) {
        var r = e(17),
            o = e(34),
            i = e(90).indexOf,
            a = e(88);
        t.exports = function (t, n) {
            var e, u = o(t),
                s = 0,
                c = [];
            for (e in u) !r(a, e) && r(u, e) && c.push(e);
            for (; n.length > s;) r(u, e = n[s++]) && (~i(c, e) || c.push(e));
            return c
        }
    }, function (t, n, e) {
        var r = e(142);
        t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }, function (t, n, e) {
        var r = e(41);
        t.exports = r("document", "documentElement")
    }, function (t, n, e) {
        var r = e(34),
            o = e(64).f,
            i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function (t) {
            return a && "[object Window]" == i.call(t) ? function (t) {
                try {
                    return o(t)
                } catch (t) {
                    return a.slice()
                }
            }(t) : o(r(t))
        }
    }, function (t, n, e) {
        var r = e(7);
        n.f = r
    }, function (t, n, e) {
        "use strict";
        var r = e(5),
            o = e(1),
            i = e(92),
            a = e(141),
            u = e(104),
            s = e(14),
            c = e(86),
            f = Object.assign,
            l = Object.defineProperty;
        t.exports = !f || o((function () {
            if (r && 1 !== f({
                    b: 1
                }, f(l({}, "a", {
                    enumerable: !0,
                    get: function () {
                        l(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var t = {},
                n = {},
                e = Symbol();
            return t[e] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) {
                n[t] = t
            })), 7 != f({}, t)[e] || "abcdefghijklmnopqrst" != i(f({}, n)).join("")
        })) ? function (t, n) {
            for (var e = s(t), o = arguments.length, f = 1, l = a.f, p = u.f; o > f;)
                for (var h, d = c(arguments[f++]), v = l ? i(d).concat(l(d)) : i(d), g = v.length, y = 0; g > y;) h = v[y++], r && !p.call(d, h) || (e[h] = d[h]);
            return e
        } : f
    }, function (t, n, e) {
        var r = e(5),
            o = e(92),
            i = e(34),
            a = e(104).f,
            u = function (t) {
                return function (n) {
                    for (var e, u = i(n), s = o(u), c = s.length, f = 0, l = []; c > f;) e = s[f++], r && !a.call(u, e) || l.push(t ? [e, u[e]] : u[e]);
                    return l
                }
            };
        t.exports = {
            entries: u(!0),
            values: u(!1)
        }
    }, function (t, n, e) {
        var r = e(4);
        t.exports = function (t, n, e, o) {
            try {
                return o ? n(r(e)[0], e[1]) : n(e)
            } catch (n) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), n
            }
        }
    }, function (t, n) {
        t.exports = Object.is || function (t, n) {
            return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n
        }
    }, function (t, n, e) {
        var r = e(3);
        t.exports = function (t) {
            if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
            return t
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(32),
            o = e(3),
            i = [].slice,
            a = {},
            u = function (t, n, e) {
                if (!(n in a)) {
                    for (var r = [], o = 0; o < n; o++) r[o] = "a[" + o + "]";
                    a[n] = Function("C,a", "return new C(" + r.join(",") + ")")
                }
                return a[n](t, e)
            };
        t.exports = Function.bind || function (t) {
            var n = r(this),
                e = i.call(arguments, 1),
                a = function () {
                    var r = e.concat(i.call(arguments));
                    return this instanceof a ? u(n, r.length, r) : n.apply(t, r)
                };
            return o(n.prototype) && (a.prototype = n.prototype), a
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(58),
            o = e(14),
            i = e(199),
            a = e(145),
            u = e(8),
            s = e(67),
            c = e(97);
        t.exports = function (t) {
            var n, e, f, l, p, h = o(t),
                d = "function" == typeof this ? this : Array,
                v = arguments.length,
                g = v > 1 ? arguments[1] : void 0,
                y = void 0 !== g,
                m = 0,
                b = c(h);
            if (y && (g = r(g, v > 2 ? arguments[2] : void 0, 2)), null == b || d == Array && a(b))
                for (e = new d(n = u(h.length)); n > m; m++) s(e, m, y ? g(h[m], m) : h[m]);
            else
                for (p = (l = b.call(h)).next, e = new d; !(f = p.call(l)).done; m++) s(e, m, y ? i(l, g, [f.value, m], !0) : f.value);
            return e.length = m, e
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(14),
            o = e(57),
            i = e(8),
            a = Math.min;
        t.exports = [].copyWithin || function (t, n) {
            var e = r(this),
                u = i(e.length),
                s = o(t, u),
                c = o(n, u),
                f = arguments.length > 2 ? arguments[2] : void 0,
                l = a((void 0 === f ? u : o(f, u)) - c, u - s),
                p = 1;
            for (c < s && s < c + l && (p = -1, c += l - 1, s += l - 1); l-- > 0;) c in e ? e[s] = e[c] : delete e[s], s += p, c += p;
            return e
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(65),
            o = e(8),
            i = e(58),
            a = function (t, n, e, u, s, c, f, l) {
                for (var p, h = s, d = 0, v = !!f && i(f, l, 3); d < u;) {
                    if (d in e) {
                        if (p = v ? v(e[d], d, n) : e[d], c > 0 && r(p)) h = a(t, n, p, o(p.length), h, c - 1) - 1;
                        else {
                            if (h >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                            t[h] = p
                        }
                        h++
                    }
                    d++
                }
                return h
            };
        t.exports = a
    }, function (t, n, e) {
        "use strict";
        var r = e(21).forEach,
            o = e(52);
        t.exports = o("forEach") ? function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        } : [].forEach
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(90).indexOf,
            i = e(52),
            a = [].indexOf,
            u = !!a && 1 / [1].indexOf(1, -0) < 0,
            s = i("indexOf");
        r({
            target: "Array",
            proto: !0,
            forced: u || s
        }, {
            indexOf: function (t) {
                return u ? a.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(34),
            o = e(42),
            i = e(8),
            a = e(52),
            u = Math.min,
            s = [].lastIndexOf,
            c = !!s && 1 / [1].lastIndexOf(1, -0) < 0,
            f = a("lastIndexOf");
        t.exports = c || f ? function (t) {
            if (c) return s.apply(this, arguments) || 0;
            var n = r(this),
                e = i(n.length),
                a = e - 1;
            for (arguments.length > 1 && (a = u(a, o(arguments[1]))), a < 0 && (a = e + a); a >= 0; a--)
                if (a in n && n[a] === t) return a || 0;
            return -1
        } : s
    }, function (t, n, e) {
        "use strict";
        var r, o, i, a = e(50),
            u = e(28),
            s = e(17),
            c = e(7),
            f = e(47),
            l = c("iterator"),
            p = !1;
        [].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : p = !0), null == r && (r = {}), f || s(r, l) || u(r, l, (function () {
            return this
        })), t.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: p
        }
    }, function (t, n, e) {
        var r = e(108);
        t.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(156).start;
        r({
            target: "String",
            proto: !0,
            forced: e(210)
        }, {
            padStart: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, n, e) {
        e(0)({
            target: "String",
            proto: !0
        }, {
            repeat: e(157)
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(112),
            o = e(4),
            i = e(27),
            a = e(200),
            u = e(116);
        r("search", 1, (function (t, n, e) {
            return [function (n) {
                var e = i(this),
                    r = null == n ? void 0 : n[t];
                return void 0 !== r ? r.call(n, e) : new RegExp(n)[t](String(e))
            }, function (t) {
                var r = e(n, t, this);
                if (r.done) return r.value;
                var i = o(t),
                    s = String(this),
                    c = i.lastIndex;
                a(c, 0) || (i.lastIndex = 0);
                var f = u(i, s);
                return a(i.lastIndex, c) || (i.lastIndex = c), null === f ? -1 : f.index
            }]
        }))
    }, function (t, n, e) {
        var r = e(5),
            o = e(2),
            i = e(91),
            a = e(118),
            u = e(10).f,
            s = e(64).f,
            c = e(111),
            f = e(102),
            l = e(114),
            p = e(25),
            h = e(1),
            d = e(29).set,
            v = e(79),
            g = e(7)("match"),
            y = o.RegExp,
            m = y.prototype,
            b = /a/g,
            w = /a/g,
            x = new y(b) !== b,
            O = l.UNSUPPORTED_Y;
        if (r && i("RegExp", !x || O || h((function () {
                return w[g] = !1, y(b) != b || y(w) == w || "/a/i" != y(b, "i")
            })))) {
            for (var S = function (t, n) {
                    var e, r = this instanceof S,
                        o = c(t),
                        i = void 0 === n;
                    if (!r && o && t.constructor === S && i) return t;
                    x ? o && !i && (t = t.source) : t instanceof S && (i && (n = f.call(t)), t = t.source), O && (e = !!n && n.indexOf("y") > -1) && (n = n.replace(/y/g, ""));
                    var u = a(x ? new y(t, n) : y(t, n), r ? this : m, S);
                    return O && e && d(u, {
                        sticky: e
                    }), u
                }, j = function (t) {
                    t in S || u(S, t, {
                        configurable: !0,
                        get: function () {
                            return y[t]
                        },
                        set: function (n) {
                            y[t] = n
                        }
                    })
                }, E = s(y), A = 0; E.length > A;) j(E[A++]);
            m.constructor = S, S.prototype = m, p(o, "RegExp", S)
        }
        v("RegExp")
    }, function (t, n, e) {
        var r = e(2),
            o = e(81).trim,
            i = e(117),
            a = r.parseInt,
            u = /^[+-]?0[Xx]/,
            s = 8 !== a(i + "08") || 22 !== a(i + "0x16");
        t.exports = s ? function (t, n) {
            var e = o(String(t));
            return a(e, n >>> 0 || (u.test(e) ? 16 : 10))
        } : a
    }, function (t, n, e) {
        var r = e(2),
            o = e(81).trim,
            i = e(117),
            a = r.parseFloat,
            u = 1 / a(i + "-0") != -1 / 0;
        t.exports = u ? function (t) {
            var n = o(String(t)),
                e = a(n);
            return 0 === e && "-" == n.charAt(0) ? -0 : e
        } : a
    }, function (t, n, e) {
        var r = e(3),
            o = Math.floor;
        t.exports = function (t) {
            return !r(t) && isFinite(t) && o(t) === t
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(42),
            i = e(219),
            a = e(157),
            u = e(1),
            s = 1..toFixed,
            c = Math.floor,
            f = function (t, n, e) {
                return 0 === n ? e : n % 2 == 1 ? f(t, n - 1, e * t) : f(t * t, n / 2, e)
            };
        r({
            target: "Number",
            proto: !0,
            forced: s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !u((function () {
                s.call({})
            }))
        }, {
            toFixed: function (t) {
                var n, e, r, u, s = i(this),
                    l = o(t),
                    p = [0, 0, 0, 0, 0, 0],
                    h = "",
                    d = "0",
                    v = function (t, n) {
                        for (var e = -1, r = n; ++e < 6;) r += t * p[e], p[e] = r % 1e7, r = c(r / 1e7)
                    },
                    g = function (t) {
                        for (var n = 6, e = 0; --n >= 0;) e += p[n], p[n] = c(e / t), e = e % t * 1e7
                    },
                    y = function () {
                        for (var t = 6, n = ""; --t >= 0;)
                            if ("" !== n || 0 === t || 0 !== p[t]) {
                                var e = String(p[t]);
                                n = "" === n ? e : n + a.call("0", 7 - e.length) + e
                            } return n
                    };
                if (l < 0 || l > 20) throw RangeError("Incorrect fraction digits");
                if (s != s) return "NaN";
                if (s <= -1e21 || s >= 1e21) return String(s);
                if (s < 0 && (h = "-", s = -s), s > 1e-21)
                    if (e = (n = function (t) {
                            for (var n = 0, e = t; e >= 4096;) n += 12, e /= 4096;
                            for (; e >= 2;) n += 1, e /= 2;
                            return n
                        }(s * f(2, 69, 1)) - 69) < 0 ? s * f(2, -n, 1) : s / f(2, n, 1), e *= 4503599627370496, (n = 52 - n) > 0) {
                        for (v(0, e), r = l; r >= 7;) v(1e7, 0), r -= 7;
                        for (v(f(10, r, 1), 0), r = n - 1; r >= 23;) g(1 << 23), r -= 23;
                        g(1 << r), v(1, 1), g(2), d = y()
                    } else v(0, e), v(1 << -n, 0), d = y() + a.call("0", l);
                return d = l > 0 ? h + ((u = d.length) <= l ? "0." + a.call("0", l - u) + d : d.slice(0, u - l) + "." + d.slice(u - l)) : h + d
            }
        })
    }, function (t, n, e) {
        var r = e(40);
        t.exports = function (t) {
            if ("number" != typeof t && "Number" != r(t)) throw TypeError("Incorrect invocation");
            return +t
        }
    }, function (t, n) {
        var e = Math.log;
        t.exports = Math.log1p || function (t) {
            return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : e(1 + t)
        }
    }, function (t, n, e) {
        var r = e(2);
        t.exports = r.Promise
    }, function (t, n, e) {
        var r = e(108);
        t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
    }, function (t, n, e) {
        var r, o, i, a, u, s, c, f, l = e(2),
            p = e(24).f,
            h = e(40),
            d = e(163).set,
            v = e(222),
            g = l.MutationObserver || l.WebKitMutationObserver,
            y = l.process,
            m = l.Promise,
            b = "process" == h(y),
            w = p(l, "queueMicrotask"),
            x = w && w.value;
        x || (r = function () {
            var t, n;
            for (b && (t = y.domain) && t.exit(); o;) {
                n = o.fn, o = o.next;
                try {
                    n()
                } catch (t) {
                    throw o ? a() : i = void 0, t
                }
            }
            i = void 0, t && t.enter()
        }, b ? a = function () {
            y.nextTick(r)
        } : g && !v ? (u = !0, s = document.createTextNode(""), new g(r).observe(s, {
            characterData: !0
        }), a = function () {
            s.data = u = !u
        }) : m && m.resolve ? (c = m.resolve(void 0), f = c.then, a = function () {
            f.call(c, r)
        }) : a = function () {
            d.call(l, r)
        }), t.exports = x || function (t) {
            var n = {
                fn: t,
                next: void 0
            };
            i && (i.next = n), o || (o = n, a()), i = n
        }
    }, function (t, n, e) {
        var r = e(4),
            o = e(3),
            i = e(164);
        t.exports = function (t, n) {
            if (r(t), o(n) && n.constructor === t) return n;
            var e = i.f(t);
            return (0, e.resolve)(n), e.promise
        }
    }, function (t, n) {
        t.exports = function (t) {
            try {
                return {
                    error: !1,
                    value: t()
                }
            } catch (t) {
                return {
                    error: !0,
                    value: t
                }
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(47),
            i = e(221),
            a = e(1),
            u = e(41),
            s = e(53),
            c = e(224),
            f = e(25);
        r({
            target: "Promise",
            proto: !0,
            real: !0,
            forced: !!i && a((function () {
                i.prototype.finally.call({
                    then: function () {}
                }, (function () {}))
            }))
        }, {
            finally: function (t) {
                var n = s(this, u("Promise")),
                    e = "function" == typeof t;
                return this.then(e ? function (e) {
                    return c(n, t()).then((function () {
                        return e
                    }))
                } : t, e ? function (e) {
                    return c(n, t()).then((function () {
                        throw e
                    }))
                } : t)
            }
        }), o || "function" != typeof i || i.prototype.finally || f(i.prototype, "finally", u("Promise").prototype.finally)
    }, function (t, n, e) {
        "use strict";
        var r = e(120),
            o = e(228);
        t.exports = r("Map", (function (t) {
            return function () {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }), o)
    }, function (t, n, e) {
        "use strict";
        var r = e(10).f,
            o = e(51),
            i = e(82),
            a = e(58),
            u = e(62),
            s = e(75),
            c = e(152),
            f = e(79),
            l = e(5),
            p = e(66).fastKey,
            h = e(29),
            d = h.set,
            v = h.getterFor;
        t.exports = {
            getConstructor: function (t, n, e, c) {
                var f = t((function (t, r) {
                        u(t, f, n), d(t, {
                            type: n,
                            index: o(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), l || (t.size = 0), null != r && s(r, t[c], t, e)
                    })),
                    h = v(n),
                    g = function (t, n, e) {
                        var r, o, i = h(t),
                            a = y(t, n);
                        return a ? a.value = e : (i.last = a = {
                            index: o = p(n, !0),
                            key: n,
                            value: e,
                            previous: r = i.last,
                            next: void 0,
                            removed: !1
                        }, i.first || (i.first = a), r && (r.next = a), l ? i.size++ : t.size++, "F" !== o && (i.index[o] = a)), t
                    },
                    y = function (t, n) {
                        var e, r = h(t),
                            o = p(n);
                        if ("F" !== o) return r.index[o];
                        for (e = r.first; e; e = e.next)
                            if (e.key == n) return e
                    };
                return i(f.prototype, {
                    clear: function () {
                        for (var t = h(this), n = t.index, e = t.first; e;) e.removed = !0, e.previous && (e.previous = e.previous.next = void 0), delete n[e.index], e = e.next;
                        t.first = t.last = void 0, l ? t.size = 0 : this.size = 0
                    },
                    delete: function (t) {
                        var n = h(this),
                            e = y(this, t);
                        if (e) {
                            var r = e.next,
                                o = e.previous;
                            delete n.index[e.index], e.removed = !0, o && (o.next = r), r && (r.previous = o), n.first == e && (n.first = r), n.last == e && (n.last = o), l ? n.size-- : this.size--
                        }
                        return !!e
                    },
                    forEach: function (t) {
                        for (var n, e = h(this), r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.next : e.first;)
                            for (r(n.value, n.key, this); n && n.removed;) n = n.previous
                    },
                    has: function (t) {
                        return !!y(this, t)
                    }
                }), i(f.prototype, e ? {
                    get: function (t) {
                        var n = y(this, t);
                        return n && n.value
                    },
                    set: function (t, n) {
                        return g(this, 0 === t ? 0 : t, n)
                    }
                } : {
                    add: function (t) {
                        return g(this, t = 0 === t ? 0 : t, t)
                    }
                }), l && r(f.prototype, "size", {
                    get: function () {
                        return h(this).size
                    }
                }), f
            },
            setStrong: function (t, n, e) {
                var r = n + " Iterator",
                    o = v(n),
                    i = v(r);
                c(t, n, (function (t, n) {
                    d(this, {
                        type: r,
                        target: t,
                        state: o(t),
                        kind: n,
                        last: void 0
                    })
                }), (function () {
                    for (var t = i(this), n = t.kind, e = t.last; e && e.removed;) e = e.previous;
                    return t.target && (t.last = e = e ? e.next : t.state.first) ? "keys" == n ? {
                        value: e.key,
                        done: !1
                    } : "values" == n ? {
                        value: e.value,
                        done: !1
                    } : {
                        value: [e.key, e.value],
                        done: !1
                    } : (t.target = void 0, {
                        value: void 0,
                        done: !0
                    })
                }), e ? "entries" : "values", !e, !0), f(n)
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(120),
            o = e(228);
        t.exports = r("Set", (function (t) {
            return function () {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }), o)
    }, function (t, n, e) {
        "use strict";
        var r = e(82),
            o = e(66).getWeakData,
            i = e(4),
            a = e(3),
            u = e(62),
            s = e(75),
            c = e(21),
            f = e(17),
            l = e(29),
            p = l.set,
            h = l.getterFor,
            d = c.find,
            v = c.findIndex,
            g = 0,
            y = function (t) {
                return t.frozen || (t.frozen = new m)
            },
            m = function () {
                this.entries = []
            },
            b = function (t, n) {
                return d(t.entries, (function (t) {
                    return t[0] === n
                }))
            };
        m.prototype = {
            get: function (t) {
                var n = b(this, t);
                if (n) return n[1]
            },
            has: function (t) {
                return !!b(this, t)
            },
            set: function (t, n) {
                var e = b(this, t);
                e ? e[1] = n : this.entries.push([t, n])
            },
            delete: function (t) {
                var n = v(this.entries, (function (n) {
                    return n[0] === t
                }));
                return ~n && this.entries.splice(n, 1), !!~n
            }
        }, t.exports = {
            getConstructor: function (t, n, e, c) {
                var l = t((function (t, r) {
                        u(t, l, n), p(t, {
                            type: n,
                            id: g++,
                            frozen: void 0
                        }), null != r && s(r, t[c], t, e)
                    })),
                    d = h(n),
                    v = function (t, n, e) {
                        var r = d(t),
                            a = o(i(n), !0);
                        return !0 === a ? y(r).set(n, e) : a[r.id] = e, t
                    };
                return r(l.prototype, {
                    delete: function (t) {
                        var n = d(this);
                        if (!a(t)) return !1;
                        var e = o(t);
                        return !0 === e ? y(n).delete(t) : e && f(e, n.id) && delete e[n.id]
                    },
                    has: function (t) {
                        var n = d(this);
                        if (!a(t)) return !1;
                        var e = o(t);
                        return !0 === e ? y(n).has(t) : e && f(e, n.id)
                    }
                }), r(l.prototype, e ? {
                    get: function (t) {
                        var n = d(this);
                        if (a(t)) {
                            var e = o(t);
                            return !0 === e ? y(n).get(t) : e ? e[n.id] : void 0
                        }
                    },
                    set: function (t, n) {
                        return v(this, t, n)
                    }
                } : {
                    add: function (t) {
                        return v(this, t, !0)
                    }
                }), l
            }
        }
    }, function (t, n, e) {
        var r = e(42),
            o = e(8);
        t.exports = function (t) {
            if (void 0 === t) return 0;
            var n = r(t),
                e = o(n);
            if (n !== e) throw RangeError("Wrong length or index");
            return e
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(1),
            i = e(121),
            a = e(4),
            u = e(57),
            s = e(8),
            c = e(53),
            f = i.ArrayBuffer,
            l = i.DataView,
            p = f.prototype.slice;
        r({
            target: "ArrayBuffer",
            proto: !0,
            unsafe: !0,
            forced: o((function () {
                return !new f(2).slice(1, void 0).byteLength
            }))
        }, {
            slice: function (t, n) {
                if (void 0 !== p && void 0 === n) return p.call(a(this), t);
                for (var e = a(this).byteLength, r = u(t, e), o = u(void 0 === n ? e : n, e), i = new(c(this, f))(s(o - r)), h = new l(this), d = new l(i), v = 0; r < o;) d.setUint8(v++, h.getUint8(r++));
                return i
            }
        })
    }, function (t, n, e) {
        var r = e(431);
        t.exports = function (t, n) {
            var e = r(t);
            if (e % n) throw RangeError("Wrong offset");
            return e
        }
    }, function (t, n, e) {
        var r = e(14),
            o = e(8),
            i = e(97),
            a = e(145),
            u = e(58),
            s = e(6).aTypedArrayConstructor;
        t.exports = function (t) {
            var n, e, c, f, l, p, h = r(t),
                d = arguments.length,
                v = d > 1 ? arguments[1] : void 0,
                g = void 0 !== v,
                y = i(h);
            if (null != y && !a(y))
                for (p = (l = y.call(h)).next, h = []; !(f = p.call(l)).done;) h.push(f.value);
            for (g && d > 2 && (v = u(v, arguments[2], 2)), e = o(h.length), c = new(s(this))(e), n = 0; e > n; n++) c[n] = g ? v(h[n], n) : h[n];
            return c
        }
    }, function (t, n, e) {
        e(54)("Uint8", (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r)
            }
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(204),
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("copyWithin", (function (t, n) {
            return o.call(i(this), t, n, arguments.length > 2 ? arguments[2] : void 0)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(21).every,
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("every", (function (t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(151),
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("fill", (function (t) {
            return o.apply(i(this), arguments)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(21).filter,
            i = e(53),
            a = r.aTypedArray,
            u = r.aTypedArrayConstructor;
        (0, r.exportTypedArrayMethod)("filter", (function (t) {
            for (var n = o(a(this), t, arguments.length > 1 ? arguments[1] : void 0), e = i(this, this.constructor), r = 0, s = n.length, c = new(u(e))(s); s > r;) c[r] = n[r++];
            return c
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(21).find,
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("find", (function (t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(21).findIndex,
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("findIndex", (function (t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(21).forEach,
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("forEach", (function (t) {
            o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(90).includes,
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("includes", (function (t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(90).indexOf,
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("indexOf", (function (t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(2),
            o = e(6),
            i = e(9),
            a = e(7)("iterator"),
            u = r.Uint8Array,
            s = i.values,
            c = i.keys,
            f = i.entries,
            l = o.aTypedArray,
            p = o.exportTypedArrayMethod,
            h = u && u.prototype[a],
            d = !!h && ("values" == h.name || null == h.name),
            v = function () {
                return s.call(l(this))
            };
        p("entries", (function () {
            return f.call(l(this))
        })), p("keys", (function () {
            return c.call(l(this))
        })), p("values", v, !d), p(a, v, !d)
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = r.aTypedArray,
            i = r.exportTypedArrayMethod,
            a = [].join;
        i("join", (function (t) {
            return a.apply(o(this), arguments)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(208),
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("lastIndexOf", (function (t) {
            return o.apply(i(this), arguments)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(21).map,
            i = e(53),
            a = r.aTypedArray,
            u = r.aTypedArrayConstructor;
        (0, r.exportTypedArrayMethod)("map", (function (t) {
            return o(a(this), t, arguments.length > 1 ? arguments[1] : void 0, (function (t, n) {
                return new(u(i(t, t.constructor)))(n)
            }))
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(109).left,
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("reduce", (function (t) {
            return o(i(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(109).right,
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("reduceRight", (function (t) {
            return o(i(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = r.aTypedArray,
            i = r.exportTypedArrayMethod,
            a = Math.floor;
        i("reverse", (function () {
            for (var t, n = o(this).length, e = a(n / 2), r = 0; r < e;) t = this[r], this[r++] = this[--n], this[n] = t;
            return this
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(8),
            i = e(233),
            a = e(14),
            u = e(1),
            s = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("set", (function (t) {
            s(this);
            var n = i(arguments.length > 1 ? arguments[1] : void 0, 1),
                e = this.length,
                r = a(t),
                u = o(r.length),
                c = 0;
            if (u + n > e) throw RangeError("Wrong length");
            for (; c < u;) this[n + c] = r[c++]
        }), u((function () {
            new Int8Array(1).set({})
        })))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(53),
            i = e(1),
            a = r.aTypedArray,
            u = r.aTypedArrayConstructor,
            s = r.exportTypedArrayMethod,
            c = [].slice;
        s("slice", (function (t, n) {
            for (var e = c.call(a(this), t, n), r = o(this, this.constructor), i = 0, s = e.length, f = new(u(r))(s); s > i;) f[i] = e[i++];
            return f
        }), i((function () {
            new Int8Array(1).slice()
        })))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(21).some,
            i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("some", (function (t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = r.aTypedArray,
            i = r.exportTypedArrayMethod,
            a = [].sort;
        i("sort", (function (t) {
            return a.call(o(this), t)
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(8),
            i = e(57),
            a = e(53),
            u = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("subarray", (function (t, n) {
            var e = u(this),
                r = e.length,
                s = i(t, r);
            return new(a(e, e.constructor))(e.buffer, e.byteOffset + s * e.BYTES_PER_ELEMENT, o((void 0 === n ? r : i(n, r)) - s))
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(2),
            o = e(6),
            i = e(1),
            a = r.Int8Array,
            u = o.aTypedArray,
            s = o.exportTypedArrayMethod,
            c = [].toLocaleString,
            f = [].slice,
            l = !!a && i((function () {
                c.call(new a(1))
            }));
        s("toLocaleString", (function () {
            return c.apply(l ? f.call(u(this)) : u(this), arguments)
        }), i((function () {
            return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString()
        })) || !i((function () {
            a.prototype.toLocaleString.call([1, 2])
        })))
    }, function (t, n, e) {
        "use strict";
        var r = e(6).exportTypedArrayMethod,
            o = e(1),
            i = e(2).Uint8Array,
            a = i && i.prototype || {},
            u = [].toString,
            s = [].join;
        o((function () {
            u.call({})
        })) && (u = function () {
            return s.call(this)
        });
        var c = a.toString != u;
        r("toString", u, c)
    }, function (t, n) {
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }, function (t, n, e) {
        "use strict";
        e(12);
        var r, o = e(0),
            i = e(5),
            a = e(261),
            u = e(2),
            s = e(143),
            c = e(25),
            f = e(62),
            l = e(17),
            p = e(197),
            h = e(203),
            d = e(110).codeAt,
            v = e(454),
            g = e(48),
            y = e(262),
            m = e(29),
            b = u.URL,
            w = y.URLSearchParams,
            x = y.getState,
            O = m.set,
            S = m.getterFor("URL"),
            j = Math.floor,
            E = Math.pow,
            A = /[A-Za-z]/,
            k = /[\d+\-.A-Za-z]/,
            T = /\d/,
            P = /^(0x|0X)/,
            R = /^[0-7]+$/,
            _ = /^\d+$/,
            M = /^[\dA-Fa-f]+$/,
            I = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
            C = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
            F = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
            N = /[\u0009\u000A\u000D]/g,
            L = function (t, n) {
                var e, r, o;
                if ("[" == n.charAt(0)) {
                    if ("]" != n.charAt(n.length - 1)) return "Invalid host";
                    if (!(e = U(n.slice(1, -1)))) return "Invalid host";
                    t.host = e
                } else if (G(t)) {
                    if (n = v(n), I.test(n)) return "Invalid host";
                    if (null === (e = D(n))) return "Invalid host";
                    t.host = e
                } else {
                    if (C.test(n)) return "Invalid host";
                    for (e = "", r = h(n), o = 0; o < r.length; o++) e += H(r[o], B);
                    t.host = e
                }
            },
            D = function (t) {
                var n, e, r, o, i, a, u, s = t.split(".");
                if (s.length && "" == s[s.length - 1] && s.pop(), (n = s.length) > 4) return t;
                for (e = [], r = 0; r < n; r++) {
                    if ("" == (o = s[r])) return t;
                    if (i = 10, o.length > 1 && "0" == o.charAt(0) && (i = P.test(o) ? 16 : 8, o = o.slice(8 == i ? 1 : 2)), "" === o) a = 0;
                    else {
                        if (!(10 == i ? _ : 8 == i ? R : M).test(o)) return t;
                        a = parseInt(o, i)
                    }
                    e.push(a)
                }
                for (r = 0; r < n; r++)
                    if (a = e[r], r == n - 1) {
                        if (a >= E(256, 5 - n)) return null
                    } else if (a > 255) return null;
                for (u = e.pop(), r = 0; r < e.length; r++) u += e[r] * E(256, 3 - r);
                return u
            },
            U = function (t) {
                var n, e, r, o, i, a, u, s = [0, 0, 0, 0, 0, 0, 0, 0],
                    c = 0,
                    f = null,
                    l = 0,
                    p = function () {
                        return t.charAt(l)
                    };
                if (":" == p()) {
                    if (":" != t.charAt(1)) return;
                    l += 2, f = ++c
                }
                for (; p();) {
                    if (8 == c) return;
                    if (":" != p()) {
                        for (n = e = 0; e < 4 && M.test(p());) n = 16 * n + parseInt(p(), 16), l++, e++;
                        if ("." == p()) {
                            if (0 == e) return;
                            if (l -= e, c > 6) return;
                            for (r = 0; p();) {
                                if (o = null, r > 0) {
                                    if (!("." == p() && r < 4)) return;
                                    l++
                                }
                                if (!T.test(p())) return;
                                for (; T.test(p());) {
                                    if (i = parseInt(p(), 10), null === o) o = i;
                                    else {
                                        if (0 == o) return;
                                        o = 10 * o + i
                                    }
                                    if (o > 255) return;
                                    l++
                                }
                                s[c] = 256 * s[c] + o, 2 != ++r && 4 != r || c++
                            }
                            if (4 != r) return;
                            break
                        }
                        if (":" == p()) {
                            if (l++, !p()) return
                        } else if (p()) return;
                        s[c++] = n
                    } else {
                        if (null !== f) return;
                        l++, f = ++c
                    }
                }
                if (null !== f)
                    for (a = c - f, c = 7; 0 != c && a > 0;) u = s[c], s[c--] = s[f + a - 1], s[f + --a] = u;
                else if (8 != c) return;
                return s
            },
            q = function (t) {
                var n, e, r, o;
                if ("number" == typeof t) {
                    for (n = [], e = 0; e < 4; e++) n.unshift(t % 256), t = j(t / 256);
                    return n.join(".")
                }
                if ("object" == typeof t) {
                    for (n = "", r = function (t) {
                            for (var n = null, e = 1, r = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > e && (n = r, e = o), r = null, o = 0) : (null === r && (r = i), ++o);
                            return o > e && (n = r, e = o), n
                        }(t), e = 0; e < 8; e++) o && 0 === t[e] || (o && (o = !1), r === e ? (n += e ? ":" : "::", o = !0) : (n += t[e].toString(16), e < 7 && (n += ":")));
                    return "[" + n + "]"
                }
                return t
            },
            B = {},
            z = p({}, B, {
                " ": 1,
                '"': 1,
                "<": 1,
                ">": 1,
                "`": 1
            }),
            V = p({}, z, {
                "#": 1,
                "?": 1,
                "{": 1,
                "}": 1
            }),
            W = p({}, V, {
                "/": 1,
                ":": 1,
                ";": 1,
                "=": 1,
                "@": 1,
                "[": 1,
                "\\": 1,
                "]": 1,
                "^": 1,
                "|": 1
            }),
            H = function (t, n) {
                var e = d(t, 0);
                return e > 32 && e < 127 && !l(n, t) ? t : encodeURIComponent(t)
            },
            $ = {
                ftp: 21,
                file: null,
                http: 80,
                https: 443,
                ws: 80,
                wss: 443
            },
            G = function (t) {
                return l($, t.scheme)
            },
            Y = function (t) {
                return "" != t.username || "" != t.password
            },
            J = function (t) {
                return !t.host || t.cannotBeABaseURL || "file" == t.scheme
            },
            K = function (t, n) {
                var e;
                return 2 == t.length && A.test(t.charAt(0)) && (":" == (e = t.charAt(1)) || !n && "|" == e)
            },
            X = function (t) {
                var n;
                return t.length > 1 && K(t.slice(0, 2)) && (2 == t.length || "/" === (n = t.charAt(2)) || "\\" === n || "?" === n || "#" === n)
            },
            Q = function (t) {
                var n = t.path,
                    e = n.length;
                !e || "file" == t.scheme && 1 == e && K(n[0], !0) || n.pop()
            },
            Z = function (t) {
                return "." === t || "%2e" === t.toLowerCase()
            },
            tt = function (t) {
                return ".." === (t = t.toLowerCase()) || "%2e." === t || ".%2e" === t || "%2e%2e" === t
            },
            nt = {},
            et = {},
            rt = {},
            ot = {},
            it = {},
            at = {},
            ut = {},
            st = {},
            ct = {},
            ft = {},
            lt = {},
            pt = {},
            ht = {},
            dt = {},
            vt = {},
            gt = {},
            yt = {},
            mt = {},
            bt = {},
            wt = {},
            xt = {},
            Ot = function (t, n, e, o) {
                var i, a, u, s, c = e || nt,
                    f = 0,
                    p = "",
                    d = !1,
                    v = !1,
                    g = !1;
                for (e || (t.scheme = "", t.username = "", t.password = "", t.host = null, t.port = null, t.path = [], t.query = null, t.fragment = null, t.cannotBeABaseURL = !1, n = n.replace(F, "")), n = n.replace(N, ""), i = h(n); f <= i.length;) {
                    switch (a = i[f], c) {
                        case nt:
                            if (!a || !A.test(a)) {
                                if (e) return "Invalid scheme";
                                c = rt;
                                continue
                            }
                            p += a.toLowerCase(), c = et;
                            break;
                        case et:
                            if (a && (k.test(a) || "+" == a || "-" == a || "." == a)) p += a.toLowerCase();
                            else {
                                if (":" != a) {
                                    if (e) return "Invalid scheme";
                                    p = "", c = rt, f = 0;
                                    continue
                                }
                                if (e && (G(t) != l($, p) || "file" == p && (Y(t) || null !== t.port) || "file" == t.scheme && !t.host)) return;
                                if (t.scheme = p, e) return void(G(t) && $[t.scheme] == t.port && (t.port = null));
                                p = "", "file" == t.scheme ? c = dt : G(t) && o && o.scheme == t.scheme ? c = ot : G(t) ? c = st : "/" == i[f + 1] ? (c = it, f++) : (t.cannotBeABaseURL = !0, t.path.push(""), c = bt)
                            }
                            break;
                        case rt:
                            if (!o || o.cannotBeABaseURL && "#" != a) return "Invalid scheme";
                            if (o.cannotBeABaseURL && "#" == a) {
                                t.scheme = o.scheme, t.path = o.path.slice(), t.query = o.query, t.fragment = "", t.cannotBeABaseURL = !0, c = xt;
                                break
                            }
                            c = "file" == o.scheme ? dt : at;
                            continue;
                        case ot:
                            if ("/" != a || "/" != i[f + 1]) {
                                c = at;
                                continue
                            }
                            c = ct, f++;
                            break;
                        case it:
                            if ("/" == a) {
                                c = ft;
                                break
                            }
                            c = mt;
                            continue;
                        case at:
                            if (t.scheme = o.scheme, a == r) t.username = o.username, t.password = o.password, t.host = o.host, t.port = o.port, t.path = o.path.slice(), t.query = o.query;
                            else if ("/" == a || "\\" == a && G(t)) c = ut;
                            else if ("?" == a) t.username = o.username, t.password = o.password, t.host = o.host, t.port = o.port, t.path = o.path.slice(), t.query = "", c = wt;
                            else {
                                if ("#" != a) {
                                    t.username = o.username, t.password = o.password, t.host = o.host, t.port = o.port, t.path = o.path.slice(), t.path.pop(), c = mt;
                                    continue
                                }
                                t.username = o.username, t.password = o.password, t.host = o.host, t.port = o.port, t.path = o.path.slice(), t.query = o.query, t.fragment = "", c = xt
                            }
                            break;
                        case ut:
                            if (!G(t) || "/" != a && "\\" != a) {
                                if ("/" != a) {
                                    t.username = o.username, t.password = o.password, t.host = o.host, t.port = o.port, c = mt;
                                    continue
                                }
                                c = ft
                            } else c = ct;
                            break;
                        case st:
                            if (c = ct, "/" != a || "/" != p.charAt(f + 1)) continue;
                            f++;
                            break;
                        case ct:
                            if ("/" != a && "\\" != a) {
                                c = ft;
                                continue
                            }
                            break;
                        case ft:
                            if ("@" == a) {
                                d && (p = "%40" + p), d = !0, u = h(p);
                                for (var y = 0; y < u.length; y++) {
                                    var m = u[y];
                                    if (":" != m || g) {
                                        var b = H(m, W);
                                        g ? t.password += b : t.username += b
                                    } else g = !0
                                }
                                p = ""
                            } else if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && G(t)) {
                                if (d && "" == p) return "Invalid authority";
                                f -= h(p).length + 1, p = "", c = lt
                            } else p += a;
                            break;
                        case lt:
                        case pt:
                            if (e && "file" == t.scheme) {
                                c = gt;
                                continue
                            }
                            if (":" != a || v) {
                                if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && G(t)) {
                                    if (G(t) && "" == p) return "Invalid host";
                                    if (e && "" == p && (Y(t) || null !== t.port)) return;
                                    if (s = L(t, p)) return s;
                                    if (p = "", c = yt, e) return;
                                    continue
                                }
                                "[" == a ? v = !0 : "]" == a && (v = !1), p += a
                            } else {
                                if ("" == p) return "Invalid host";
                                if (s = L(t, p)) return s;
                                if (p = "", c = ht, e == pt) return
                            }
                            break;
                        case ht:
                            if (!T.test(a)) {
                                if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && G(t) || e) {
                                    if ("" != p) {
                                        var w = parseInt(p, 10);
                                        if (w > 65535) return "Invalid port";
                                        t.port = G(t) && w === $[t.scheme] ? null : w, p = ""
                                    }
                                    if (e) return;
                                    c = yt;
                                    continue
                                }
                                return "Invalid port"
                            }
                            p += a;
                            break;
                        case dt:
                            if (t.scheme = "file", "/" == a || "\\" == a) c = vt;
                            else {
                                if (!o || "file" != o.scheme) {
                                    c = mt;
                                    continue
                                }
                                if (a == r) t.host = o.host, t.path = o.path.slice(), t.query = o.query;
                                else if ("?" == a) t.host = o.host, t.path = o.path.slice(), t.query = "", c = wt;
                                else {
                                    if ("#" != a) {
                                        X(i.slice(f).join("")) || (t.host = o.host, t.path = o.path.slice(), Q(t)), c = mt;
                                        continue
                                    }
                                    t.host = o.host, t.path = o.path.slice(), t.query = o.query, t.fragment = "", c = xt
                                }
                            }
                            break;
                        case vt:
                            if ("/" == a || "\\" == a) {
                                c = gt;
                                break
                            }
                            o && "file" == o.scheme && !X(i.slice(f).join("")) && (K(o.path[0], !0) ? t.path.push(o.path[0]) : t.host = o.host), c = mt;
                            continue;
                        case gt:
                            if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
                                if (!e && K(p)) c = mt;
                                else if ("" == p) {
                                    if (t.host = "", e) return;
                                    c = yt
                                } else {
                                    if (s = L(t, p)) return s;
                                    if ("localhost" == t.host && (t.host = ""), e) return;
                                    p = "", c = yt
                                }
                                continue
                            }
                            p += a;
                            break;
                        case yt:
                            if (G(t)) {
                                if (c = mt, "/" != a && "\\" != a) continue
                            } else if (e || "?" != a)
                                if (e || "#" != a) {
                                    if (a != r && (c = mt, "/" != a)) continue
                                } else t.fragment = "", c = xt;
                            else t.query = "", c = wt;
                            break;
                        case mt:
                            if (a == r || "/" == a || "\\" == a && G(t) || !e && ("?" == a || "#" == a)) {
                                if (tt(p) ? (Q(t), "/" == a || "\\" == a && G(t) || t.path.push("")) : Z(p) ? "/" == a || "\\" == a && G(t) || t.path.push("") : ("file" == t.scheme && !t.path.length && K(p) && (t.host && (t.host = ""), p = p.charAt(0) + ":"), t.path.push(p)), p = "", "file" == t.scheme && (a == r || "?" == a || "#" == a))
                                    for (; t.path.length > 1 && "" === t.path[0];) t.path.shift();
                                "?" == a ? (t.query = "", c = wt) : "#" == a && (t.fragment = "", c = xt)
                            } else p += H(a, V);
                            break;
                        case bt:
                            "?" == a ? (t.query = "", c = wt) : "#" == a ? (t.fragment = "", c = xt) : a != r && (t.path[0] += H(a, B));
                            break;
                        case wt:
                            e || "#" != a ? a != r && ("'" == a && G(t) ? t.query += "%27" : t.query += "#" == a ? "%23" : H(a, B)) : (t.fragment = "", c = xt);
                            break;
                        case xt:
                            a != r && (t.fragment += H(a, z))
                    }
                    f++
                }
            },
            St = function (t) {
                var n, e, r = f(this, St, "URL"),
                    o = arguments.length > 1 ? arguments[1] : void 0,
                    a = String(t),
                    u = O(r, {
                        type: "URL"
                    });
                if (void 0 !== o)
                    if (o instanceof St) n = S(o);
                    else if (e = Ot(n = {}, String(o))) throw TypeError(e);
                if (e = Ot(u, a, null, n)) throw TypeError(e);
                var s = u.searchParams = new w,
                    c = x(s);
                c.updateSearchParams(u.query), c.updateURL = function () {
                    u.query = String(s) || null
                }, i || (r.href = Et.call(r), r.origin = At.call(r), r.protocol = kt.call(r), r.username = Tt.call(r), r.password = Pt.call(r), r.host = Rt.call(r), r.hostname = _t.call(r), r.port = Mt.call(r), r.pathname = It.call(r), r.search = Ct.call(r), r.searchParams = Ft.call(r), r.hash = Nt.call(r))
            },
            jt = St.prototype,
            Et = function () {
                var t = S(this),
                    n = t.scheme,
                    e = t.username,
                    r = t.password,
                    o = t.host,
                    i = t.port,
                    a = t.path,
                    u = t.query,
                    s = t.fragment,
                    c = n + ":";
                return null !== o ? (c += "//", Y(t) && (c += e + (r ? ":" + r : "") + "@"), c += q(o), null !== i && (c += ":" + i)) : "file" == n && (c += "//"), c += t.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== u && (c += "?" + u), null !== s && (c += "#" + s), c
            },
            At = function () {
                var t = S(this),
                    n = t.scheme,
                    e = t.port;
                if ("blob" == n) try {
                    return new URL(n.path[0]).origin
                } catch (t) {
                    return "null"
                }
                return "file" != n && G(t) ? n + "://" + q(t.host) + (null !== e ? ":" + e : "") : "null"
            },
            kt = function () {
                return S(this).scheme + ":"
            },
            Tt = function () {
                return S(this).username
            },
            Pt = function () {
                return S(this).password
            },
            Rt = function () {
                var t = S(this),
                    n = t.host,
                    e = t.port;
                return null === n ? "" : null === e ? q(n) : q(n) + ":" + e
            },
            _t = function () {
                var t = S(this).host;
                return null === t ? "" : q(t)
            },
            Mt = function () {
                var t = S(this).port;
                return null === t ? "" : String(t)
            },
            It = function () {
                var t = S(this),
                    n = t.path;
                return t.cannotBeABaseURL ? n[0] : n.length ? "/" + n.join("/") : ""
            },
            Ct = function () {
                var t = S(this).query;
                return t ? "?" + t : ""
            },
            Ft = function () {
                return S(this).searchParams
            },
            Nt = function () {
                var t = S(this).fragment;
                return t ? "#" + t : ""
            },
            Lt = function (t, n) {
                return {
                    get: t,
                    set: n,
                    configurable: !0,
                    enumerable: !0
                }
            };
        if (i && s(jt, {
                href: Lt(Et, (function (t) {
                    var n = S(this),
                        e = String(t),
                        r = Ot(n, e);
                    if (r) throw TypeError(r);
                    x(n.searchParams).updateSearchParams(n.query)
                })),
                origin: Lt(At),
                protocol: Lt(kt, (function (t) {
                    var n = S(this);
                    Ot(n, String(t) + ":", nt)
                })),
                username: Lt(Tt, (function (t) {
                    var n = S(this),
                        e = h(String(t));
                    if (!J(n)) {
                        n.username = "";
                        for (var r = 0; r < e.length; r++) n.username += H(e[r], W)
                    }
                })),
                password: Lt(Pt, (function (t) {
                    var n = S(this),
                        e = h(String(t));
                    if (!J(n)) {
                        n.password = "";
                        for (var r = 0; r < e.length; r++) n.password += H(e[r], W)
                    }
                })),
                host: Lt(Rt, (function (t) {
                    var n = S(this);
                    n.cannotBeABaseURL || Ot(n, String(t), lt)
                })),
                hostname: Lt(_t, (function (t) {
                    var n = S(this);
                    n.cannotBeABaseURL || Ot(n, String(t), pt)
                })),
                port: Lt(Mt, (function (t) {
                    var n = S(this);
                    J(n) || ("" == (t = String(t)) ? n.port = null : Ot(n, t, ht))
                })),
                pathname: Lt(It, (function (t) {
                    var n = S(this);
                    n.cannotBeABaseURL || (n.path = [], Ot(n, t + "", yt))
                })),
                search: Lt(Ct, (function (t) {
                    var n = S(this);
                    "" == (t = String(t)) ? n.query = null: ("?" == t.charAt(0) && (t = t.slice(1)), n.query = "", Ot(n, t, wt)), x(n.searchParams).updateSearchParams(n.query)
                })),
                searchParams: Lt(Ft),
                hash: Lt(Nt, (function (t) {
                    var n = S(this);
                    "" != (t = String(t)) ? ("#" == t.charAt(0) && (t = t.slice(1)), n.fragment = "", Ot(n, t, xt)) : n.fragment = null
                }))
            }), c(jt, "toJSON", (function () {
                return Et.call(this)
            }), {
                enumerable: !0
            }), c(jt, "toString", (function () {
                return Et.call(this)
            }), {
                enumerable: !0
            }), b) {
            var Dt = b.createObjectURL,
                Ut = b.revokeObjectURL;
            Dt && c(St, "createObjectURL", (function (t) {
                return Dt.apply(b, arguments)
            })), Ut && c(St, "revokeObjectURL", (function (t) {
                return Ut.apply(b, arguments)
            }))
        }
        g(St, "URL"), o({
            global: !0,
            forced: !a,
            sham: !i
        }, {
            URL: St
        })
    }, function (t, n, e) {
        var r = e(1),
            o = e(7),
            i = e(47),
            a = o("iterator");
        t.exports = !r((function () {
            var t = new URL("b?a=1&b=2&c=3", "http://a"),
                n = t.searchParams,
                e = "";
            return t.pathname = "c%20d", n.forEach((function (t, r) {
                n.delete("b"), e += r + t
            })), i && !t.toJSON || !n.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== n.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !n[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== e || "x" !== new URL("http://x", void 0).host
        }))
    }, function (t, n, e) {
        "use strict";
        e(9);
        var r = e(0),
            o = e(41),
            i = e(261),
            a = e(25),
            u = e(82),
            s = e(48),
            c = e(153),
            f = e(29),
            l = e(62),
            p = e(17),
            h = e(58),
            d = e(98),
            v = e(4),
            g = e(3),
            y = e(51),
            m = e(56),
            b = e(455),
            w = e(97),
            x = e(7),
            O = o("fetch"),
            S = o("Headers"),
            j = x("iterator"),
            E = f.set,
            A = f.getterFor("URLSearchParams"),
            k = f.getterFor("URLSearchParamsIterator"),
            T = /\+/g,
            P = Array(4),
            R = function (t) {
                return P[t - 1] || (P[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"))
            },
            _ = function (t) {
                try {
                    return decodeURIComponent(t)
                } catch (n) {
                    return t
                }
            },
            M = function (t) {
                var n = t.replace(T, " "),
                    e = 4;
                try {
                    return decodeURIComponent(n)
                } catch (t) {
                    for (; e;) n = n.replace(R(e--), _);
                    return n
                }
            },
            I = /[!'()~]|%20/g,
            C = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+"
            },
            F = function (t) {
                return C[t]
            },
            N = function (t) {
                return encodeURIComponent(t).replace(I, F)
            },
            L = function (t, n) {
                if (n)
                    for (var e, r, o = n.split("&"), i = 0; i < o.length;)(e = o[i++]).length && (r = e.split("="), t.push({
                        key: M(r.shift()),
                        value: M(r.join("="))
                    }))
            },
            D = function (t) {
                this.entries.length = 0, L(this.entries, t)
            },
            U = function (t, n) {
                if (t < n) throw TypeError("Not enough arguments")
            },
            q = c((function (t, n) {
                E(this, {
                    type: "URLSearchParamsIterator",
                    iterator: b(A(t).entries),
                    kind: n
                })
            }), "Iterator", (function () {
                var t = k(this),
                    n = t.kind,
                    e = t.iterator.next(),
                    r = e.value;
                return e.done || (e.value = "keys" === n ? r.key : "values" === n ? r.value : [r.key, r.value]), e
            })),
            B = function () {
                l(this, B, "URLSearchParams");
                var t, n, e, r, o, i, a, u, s, c = arguments.length > 0 ? arguments[0] : void 0,
                    f = this,
                    h = [];
                if (E(f, {
                        type: "URLSearchParams",
                        entries: h,
                        updateURL: function () {},
                        updateSearchParams: D
                    }), void 0 !== c)
                    if (g(c))
                        if ("function" == typeof (t = w(c)))
                            for (e = (n = t.call(c)).next; !(r = e.call(n)).done;) {
                                if ((a = (i = (o = b(v(r.value))).next).call(o)).done || (u = i.call(o)).done || !i.call(o).done) throw TypeError("Expected sequence with length 2");
                                h.push({
                                    key: a.value + "",
                                    value: u.value + ""
                                })
                            } else
                                for (s in c) p(c, s) && h.push({
                                    key: s,
                                    value: c[s] + ""
                                });
                        else L(h, "string" == typeof c ? "?" === c.charAt(0) ? c.slice(1) : c : c + "")
            },
            z = B.prototype;
        u(z, {
            append: function (t, n) {
                U(arguments.length, 2);
                var e = A(this);
                e.entries.push({
                    key: t + "",
                    value: n + ""
                }), e.updateURL()
            },
            delete: function (t) {
                U(arguments.length, 1);
                for (var n = A(this), e = n.entries, r = t + "", o = 0; o < e.length;) e[o].key === r ? e.splice(o, 1) : o++;
                n.updateURL()
            },
            get: function (t) {
                U(arguments.length, 1);
                for (var n = A(this).entries, e = t + "", r = 0; r < n.length; r++)
                    if (n[r].key === e) return n[r].value;
                return null
            },
            getAll: function (t) {
                U(arguments.length, 1);
                for (var n = A(this).entries, e = t + "", r = [], o = 0; o < n.length; o++) n[o].key === e && r.push(n[o].value);
                return r
            },
            has: function (t) {
                U(arguments.length, 1);
                for (var n = A(this).entries, e = t + "", r = 0; r < n.length;)
                    if (n[r++].key === e) return !0;
                return !1
            },
            set: function (t, n) {
                U(arguments.length, 1);
                for (var e, r = A(this), o = r.entries, i = !1, a = t + "", u = n + "", s = 0; s < o.length; s++)(e = o[s]).key === a && (i ? o.splice(s--, 1) : (i = !0, e.value = u));
                i || o.push({
                    key: a,
                    value: u
                }), r.updateURL()
            },
            sort: function () {
                var t, n, e, r = A(this),
                    o = r.entries,
                    i = o.slice();
                for (o.length = 0, e = 0; e < i.length; e++) {
                    for (t = i[e], n = 0; n < e; n++)
                        if (o[n].key > t.key) {
                            o.splice(n, 0, t);
                            break
                        } n === e && o.push(t)
                }
                r.updateURL()
            },
            forEach: function (t) {
                for (var n, e = A(this).entries, r = h(t, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < e.length;) r((n = e[o++]).value, n.key, this)
            },
            keys: function () {
                return new q(this, "keys")
            },
            values: function () {
                return new q(this, "values")
            },
            entries: function () {
                return new q(this, "entries")
            }
        }, {
            enumerable: !0
        }), a(z, j, z.entries), a(z, "toString", (function () {
            for (var t, n = A(this).entries, e = [], r = 0; r < n.length;) t = n[r++], e.push(N(t.key) + "=" + N(t.value));
            return e.join("&")
        }), {
            enumerable: !0
        }), s(B, "URLSearchParams"), r({
            global: !0,
            forced: !i
        }, {
            URLSearchParams: B
        }), i || "function" != typeof O || "function" != typeof S || r({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function (t) {
                var n, e, r, o = [t];
                return arguments.length > 1 && (n = arguments[1], g(n) && (e = n.body, "URLSearchParams" === d(e) && ((r = n.headers ? new S(n.headers) : new S).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), n = y(n, {
                    body: m(0, String(e)),
                    headers: m(0, r)
                }))), o.push(n)), O.apply(this, o)
            }
        }), t.exports = {
            URLSearchParams: B,
            getState: A
        }
    }, function (t, n, e) {
        var r = e(457),
            o = e(458),
            i = e(459),
            a = e(460),
            u = e(461);

        function s(t) {
            var n = -1,
                e = null == t ? 0 : t.length;
            for (this.clear(); ++n < e;) {
                var r = t[n];
                this.set(r[0], r[1])
            }
        }
        s.prototype.clear = r, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = u, t.exports = s
    }, function (t, n, e) {
        (function (t) {
            var r = e(126),
                o = n && !n.nodeType && n,
                i = o && "object" == typeof t && t && !t.nodeType && t,
                a = i && i.exports === o ? r.Buffer : void 0,
                u = a ? a.allocUnsafe : void 0;
            t.exports = function (t, n) {
                if (n) return t.slice();
                var e = t.length,
                    r = u ? u(e) : new t.constructor(e);
                return t.copy(r), r
            }
        }).call(this, e(265)(t))
    }, function (t, n) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function () {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            var e = -1,
                r = t.length;
            for (n || (n = Array(r)); ++e < r;) n[e] = t[e];
            return n
        }
    }, function (t, n, e) {
        var r = e(476),
            o = e(268),
            i = e(477);
        t.exports = function (t) {
            return "function" != typeof t.constructor || i(t) ? {} : r(o(t))
        }
    }, function (t, n, e) {
        var r = e(173)(Object.getPrototypeOf, Object);
        t.exports = r
    }, function (t, n) {
        t.exports = function () {
            return !1
        }
    }, function (t, n, e) {
        var r = e(271),
            o = e(486),
            i = e(83);
        t.exports = function (t, n, e) {
            for (var a = -1, u = n.length, s = {}; ++a < u;) {
                var c = n[a],
                    f = r(t, c);
                e(f, c) && o(s, i(c, t), f)
            }
            return s
        }
    }, function (t, n, e) {
        var r = e(83),
            o = e(127);
        t.exports = function (t, n) {
            for (var e = 0, i = (n = r(n, t)).length; null != t && e < i;) t = t[o(n[e++])];
            return e && e == i ? t : void 0
        }
    }, function (t, n) {
        t.exports = function () {
            return !1
        }
    }, function (t, n) {
        var e = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, n) {
            var r = typeof t;
            return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || "symbol" != r && e.test(t)) && t > -1 && t % 1 == 0 && t < n
        }
    }, function (t, n) {
        t.exports = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        }
    }, function (t, n, e) {
        var r = e(103),
            o = e(276),
            i = e(278);
        t.exports = function (t) {
            return i(o(t, void 0, r), t + "")
        }
    }, function (t, n, e) {
        var r = e(277),
            o = Math.max;
        t.exports = function (t, n, e) {
            return n = o(void 0 === n ? t.length - 1 : n, 0),
                function () {
                    for (var i = arguments, a = -1, u = o(i.length - n, 0), s = Array(u); ++a < u;) s[a] = i[n + a];
                    a = -1;
                    for (var c = Array(n + 1); ++a < n;) c[a] = i[a];
                    return c[n] = e(s), r(t, this, c)
                }
        }
    }, function (t, n) {
        t.exports = function (t, n, e) {
            switch (e.length) {
                case 0:
                    return t.call(n);
                case 1:
                    return t.call(n, e[0]);
                case 2:
                    return t.call(n, e[0], e[1]);
                case 3:
                    return t.call(n, e[0], e[1], e[2])
            }
            return t.apply(n, e)
        }
    }, function (t, n) {
        t.exports = function (t) {
            return t
        }
    }, function (t, n) {
        t.exports = function (t, n, e) {
            for (var r = e - 1, o = t.length; ++r < o;)
                if (t[r] === n) return r;
            return -1
        }
    }, function (t, n, e) {
        var r = e(179),
            o = e(180),
            i = e(181),
            a = e(71),
            u = e(183),
            s = e(182);
        t.exports = function (t, n, e, c) {
            var f = -1,
                l = o,
                p = !0,
                h = t.length,
                d = [],
                v = n.length;
            if (!h) return d;
            e && (n = a(n, u(e))), c ? (l = i, p = !1) : n.length >= 200 && (l = s, p = !1, n = new r(n));
            t: for (; ++f < h;) {
                var g = t[f],
                    y = null == e ? g : e(g);
                if (g = c || 0 !== g ? g : 0, p && y == y) {
                    for (var m = v; m--;)
                        if (n[m] === y) continue t;
                    d.push(g)
                } else l(n, y, c) || d.push(g)
            }
            return d
        }
    }, function (t, n) {
        (function (n) {
            t.exports = n
        }).call(this, {})
    }, function (t, n, e) {
        var r = e(171),
            o = e(124);
        t.exports = function (t, n, e) {
            (void 0 === e || o(t[n], e)) && (void 0 !== e || n in t) || r(t, n, e)
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            if (("constructor" !== n || "function" != typeof t[n]) && "__proto__" != n) return t[n]
        }
    }, function (t, n, e) {
        var r = e(84),
            o = e(131);
        t.exports = function (t) {
            return r((function (n, e) {
                var r = -1,
                    i = e.length,
                    a = i > 1 ? e[i - 1] : void 0,
                    u = i > 2 ? e[2] : void 0;
                for (a = t.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(e[0], e[1], u) && (a = i < 3 ? void 0 : a, i = 1), n = Object(n); ++r < i;) {
                    var s = e[r];
                    s && t(n, s, r, a)
                }
                return n
            }))
        }
    }, function (t, n) {
        t.exports = function (t) {
            return t
        }
    }, function (t, n, e) {
        var r = e(129),
            o = e(130),
            i = e(72);
        t.exports = function (t) {
            if (!o(t)) return !1;
            var n = r(t);
            return "[object Error]" == n || "[object DOMException]" == n || "string" == typeof t.message && "string" == typeof t.name && !i(t)
        }
    }, function (t, n) {
        t.exports = /<%=([\s\S]+?)%>/g
    }, function (t, n, e) {
        var r = e(169);
        t.exports = function (t, n) {
            return r(t, 5, n = "function" == typeof n ? n : void 0)
        }
    }, function (t, n, e) {
        t.exports = e(480)
    }, function (t, n, e) {
        var r = e(175),
            o = e(481),
            i = e(482);
        t.exports = function (t, n) {
            return i(t, o(r(n)))
        }
    }, function (t, n, e) {
        var r = e(494);
        t.exports = function (t) {
            return t && t.length ? r(t) : []
        }
    }, function (t, n, e) {
        var r = e(71),
            o = e(497),
            i = e(84),
            a = e(498),
            u = i((function (t) {
                var n = r(t, a);
                return n.length && n[0] === t[0] ? o(n) : []
            }));
        t.exports = u
    }, function (t, n, e) {
        var r = e(280),
            o = e(178),
            i = e(84),
            a = e(128),
            u = i((function (t, n) {
                return a(t) ? r(t, o(n, 1, a, !0)) : []
            }));
        t.exports = u
    }, function (t, n, e) {
        var r, o = o || function (t) {
            "use strict";
            if (!(void 0 === t || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
                var n = t.document,
                    e = function () {
                        return t.URL || t.webkitURL || t
                    },
                    r = n.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                    o = "download" in r,
                    i = /constructor/i.test(t.HTMLElement) || t.safari,
                    a = /CriOS\/[\d]+/.test(navigator.userAgent),
                    u = function (n) {
                        (t.setImmediate || t.setTimeout)((function () {
                            throw n
                        }), 0)
                    },
                    s = function (t) {
                        setTimeout((function () {
                            "string" == typeof t ? e().revokeObjectURL(t) : t.remove()
                        }), 4e4)
                    },
                    c = function (t) {
                        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], {
                            type: t.type
                        }) : t
                    },
                    f = function (n, f, l) {
                        l || (n = c(n));
                        var p, h = this,
                            d = "application/octet-stream" === n.type,
                            v = function () {
                                ! function (t, n, e) {
                                    for (var r = (n = [].concat(n)).length; r--;) {
                                        var o = t["on" + n[r]];
                                        if ("function" == typeof o) try {
                                            o.call(t, e || t)
                                        } catch (t) {
                                            u(t)
                                        }
                                    }
                                }(h, "writestart progress write writeend".split(" "))
                            };
                        if (h.readyState = h.INIT, o) return p = e().createObjectURL(n), void setTimeout((function () {
                            r.href = p, r.download = f,
                                function (t) {
                                    var n = new MouseEvent("click");
                                    t.dispatchEvent(n)
                                }(r), v(), s(p), h.readyState = h.DONE
                        }));
                        ! function () {
                            if ((a || d && i) && t.FileReader) {
                                var r = new FileReader;
                                return r.onloadend = function () {
                                    var n = a ? r.result : r.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                                    t.open(n, "_blank") || (t.location.href = n), n = void 0, h.readyState = h.DONE, v()
                                }, r.readAsDataURL(n), void(h.readyState = h.INIT)
                            }(p || (p = e().createObjectURL(n)), d) ? t.location.href = p: t.open(p, "_blank") || (t.location.href = p);
                            h.readyState = h.DONE, v(), s(p)
                        }()
                    },
                    l = f.prototype;
                return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (t, n, e) {
                    return n = n || t.name || "download", e || (t = c(t)), navigator.msSaveOrOpenBlob(t, n)
                } : (l.abort = function () {}, l.readyState = l.INIT = 0, l.WRITING = 1, l.DONE = 2, l.error = l.onwritestart = l.onprogress = l.onwrite = l.onabort = l.onerror = l.onwriteend = null, function (t, n, e) {
                    return new f(t, n || t.name || "download", e)
                })
            }
        }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
        t.exports ? t.exports.saveAs = o : null !== e(185) && null !== e(281) && (void 0 === (r = function () {
            return o
        }.call(n, e, n, t)) || (t.exports = r))
    }, function (t, n, e) {
        var r = e(280),
            o = e(84),
            i = e(128),
            a = o((function (t, n) {
                return i(t) ? r(t, n) : []
            }));
        t.exports = a
    }, function (t, n, e) {
        var r = e(178),
            o = e(505),
            i = e(84),
            a = e(131),
            u = i((function (t, n) {
                if (null == t) return [];
                var e = n.length;
                return e > 1 && a(t, n[0], n[1]) ? n = [] : e > 2 && a(n[0], n[1], n[2]) && (n = [n[0]]), o(t, r(n, 1), [])
            }));
        t.exports = u
    }, function (t, n, e) {
        var r = e(511),
            o = e(284)((function (t, n, e) {
                r(t, n, e)
            }));
        t.exports = o
    }, function (t, n, e) {
        var r = e(523),
            o = e(285);
        t.exports = function (t, n, e) {
            return void 0 === e && (e = n, n = void 0), void 0 !== e && (e = (e = o(e)) == e ? e : 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), r(o(t), n, e)
        }
    }, function (t, n, e) {
        (function (t) {
            var r;
            ! function (t, o, i) {
                function a(t) {
                    var n = this,
                        e = function () {
                            var t = 4022871197;
                            return function (n) {
                                n = String(n);
                                for (var e = 0; e < n.length; e++) {
                                    var r = .02519603282416938 * (t += n.charCodeAt(e));
                                    r -= t = r >>> 0, t = (r *= t) >>> 0, t += 4294967296 * (r -= t)
                                }
                                return 2.3283064365386963e-10 * (t >>> 0)
                            }
                        }();
                    n.next = function () {
                        var t = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c;
                        return n.s0 = n.s1, n.s1 = n.s2, n.s2 = t - (n.c = 0 | t)
                    }, n.c = 1, n.s0 = e(" "), n.s1 = e(" "), n.s2 = e(" "), n.s0 -= e(t), n.s0 < 0 && (n.s0 += 1), n.s1 -= e(t), n.s1 < 0 && (n.s1 += 1), n.s2 -= e(t), n.s2 < 0 && (n.s2 += 1), e = null
                }

                function u(t, n) {
                    return n.c = t.c, n.s0 = t.s0, n.s1 = t.s1, n.s2 = t.s2, n
                }

                function s(t, n) {
                    var e = new a(t),
                        r = n && n.state,
                        o = e.next;
                    return o.int32 = function () {
                        return 4294967296 * e.next() | 0
                    }, o.double = function () {
                        return o() + 11102230246251565e-32 * (2097152 * o() | 0)
                    }, o.quick = o, r && ("object" == typeof r && u(r, e), o.state = function () {
                        return u(e, {})
                    }), o
                }
                o && o.exports ? o.exports = s : e(185) && e(281) ? void 0 === (r = function () {
                    return s
                }.call(n, e, n, o)) || (o.exports = r) : this.alea = s
            }(0, t, e(185))
        }).call(this, e(265)(t))
    }, function (t, n, e) {
        var r = e(524),
            o = e(525),
            i = e(526),
            a = e(527),
            u = e(528),
            s = e(286),
            c = e(131),
            f = e(172),
            l = e(287),
            p = e(529),
            h = e(176),
            d = /\b__p \+= '';/g,
            v = /\b(__p \+=) '' \+/g,
            g = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            m = /($^)/,
            b = /['\n\r\u2028\u2029\\]/g,
            w = Object.prototype.hasOwnProperty;
        t.exports = function (t, n, e) {
            var x = p.imports._.templateSettings || p;
            e && c(t, n, e) && (n = void 0), t = h(t), n = r({}, n, x, a);
            var O, S, j = r({}, n.imports, x.imports, a),
                E = f(j),
                A = i(j, E),
                k = 0,
                T = n.interpolate || m,
                P = "__p += '",
                R = RegExp((n.escape || m).source + "|" + T.source + "|" + (T === l ? y : m).source + "|" + (n.evaluate || m).source + "|$", "g"),
                _ = w.call(n, "sourceURL") ? "//# sourceURL=" + (n.sourceURL + "").replace(/[\r\n]/g, " ") + "\n" : "";
            t.replace(R, (function (n, e, r, o, i, a) {
                return r || (r = o), P += t.slice(k, a).replace(b, u), e && (O = !0, P += "' +\n__e(" + e + ") +\n'"), i && (S = !0, P += "';\n" + i + ";\n__p += '"), r && (P += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), k = a + n.length, n
            })), P += "';\n";
            var M = w.call(n, "variable") && n.variable;
            M || (P = "with (obj) {\n" + P + "\n}\n"), P = (S ? P.replace(d, "") : P).replace(v, "$1").replace(g, "$1;"), P = "function(" + (M || "obj") + ") {\n" + (M ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (O ? ", __e = _.escape" : "") + (S ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + P + "return __p\n}";
            var I = o((function () {
                return Function(E, _ + "return " + P).apply(void 0, A)
            }));
            if (I.source = P, s(I)) throw I;
            return I
        }
    }, function (t, n, e) {
        var r = e(129),
            o = e(45),
            i = e(130);
        t.exports = function (t) {
            return "string" == typeof t || !o(t) && i(t) && "[object String]" == r(t)
        }
    }, function (t, n, e) {
        "use strict";
        (function (t) {
            e(15), e(19), e(20), e(22), e(33), e(9), e(18), e(61), e(68), e(11), e(44), e(26), e(12), e(69), e(23), e(13);
            var r = e(85),
                o = e.n(r),
                i = e(30),
                a = e.n(i);

            function u(t) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                }(t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var s = function (t, n) {
                    return t.reduce((function (t, n) {
                        return t[n]
                    }), n)
                },
                fromObject = function (t, n) {
                    return c(o()(t), n)
                },
                c = function (n, e) {
                    var r = e || window.lab;
                    if (void 0 === r) throw new Error("Couldn't find library in global scope, and no root object available");
                    var o = u(n.type.split(".")).slice(1),
                        i = s(o, r);
                    return i.metadata.nestedComponents.forEach((function (t) {
                        n[t] && (Array.isArray(n[t]) ? n[t] = n[t].map((function (t) {
                            return fromObject(t, r)
                        })) : a()(n[t]) && (n[t] = fromObject(n[t], r)))
                    })), n.plugins && (n.plugins = n.plugins.map((function (n) {
                        try {
                            var e = u((n.path || n.type).split(".")),
                                o = e[0],
                                i = e.slice(1);
                            return new(s(i, "global" === o ? t || window : r))(n)
                        } catch (t) {
                            throw new Error("Couldn't instantiate plugin ".concat(n.type, ". ") + "Error: ".concat(t.message))
                        }
                    }))), new i(n)
                };
            n.a = fromObject
        }).call(this, e(134))
    }, function (t, n, e) {
        var r = e(537),
            o = e(30);
        t.exports = function (t, n, e) {
            var i = !0,
                a = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return o(e) && (i = "leading" in e ? !!e.leading : i, a = "trailing" in e ? !!e.trailing : a), r(t, n, {
                leading: i,
                maxWait: n,
                trailing: a
            })
        }
    }, function (t, n, e) {
        t.exports = e(539)
    }, function (t, n, e) {
        e(306), e(450);
        var r = e(89);
        t.exports = r
    }, function (t, n, e) {
        e(15), e(307), e(19), e(308), e(309), e(20), e(310), e(311), e(312), e(313), e(314), e(315), e(316), e(317), e(318), e(74), e(319), e(320), e(321), e(94), e(144), e(322), e(43), e(323), e(324), e(49), e(325), e(326), e(327), e(328), e(35), e(329), e(330), e(59), e(331), e(11), e(333), e(334), e(335), e(336), e(337), e(99), e(338), e(339), e(33), e(340), e(341), e(16), e(342), e(149), e(150), e(36), e(343), e(344), e(345), e(346), e(22), e(77), e(207), e(78), e(347), e(18), e(61), e(348), e(349), e(68), e(350), e(351), e(352), e(353), e(354), e(355), e(9), e(356), e(357), e(358), e(359), e(101), e(360), e(361), e(362), e(211), e(212), e(80), e(213), e(69), e(158), e(159), e(363), e(364), e(12), e(365), e(366), e(367), e(368), e(369), e(370), e(371), e(372), e(373), e(374), e(375), e(376), e(377), e(214), e(44), e(378), e(379), e(380), e(26), e(381), e(382), e(161), e(383), e(384), e(386), e(387), e(388), e(389), e(390), e(391), e(392), e(218), e(393), e(394), e(395), e(396), e(397), e(398), e(399), e(400), e(401), e(403), e(404), e(405), e(406), e(407), e(408), e(409), e(410), e(411), e(412), e(413), e(414), e(415), e(417), e(418), e(420), e(421), e(39), e(423), e(226), e(227), e(229), e(424), e(425), e(426), e(428), e(232), e(429), e(430), e(235), e(432), e(433), e(434), e(435), e(436), e(437), e(438), e(439), e(440), e(236), e(237), e(238), e(239), e(240), e(241), e(242), e(243), e(244), e(245), e(246), e(247), e(248), e(249), e(250), e(251), e(252), e(253), e(254), e(255), e(256), e(257), e(258), e(441), e(442), e(443), e(444), e(122), e(166), e(445), e(167), e(446), e(168), e(447), e(448), e(449);
        var r = e(89);
        t.exports = r
    }, function (t, n, e) {
        e(31)("asyncIterator")
    }, function (t, n, e) {
        e(31)("hasInstance")
    }, function (t, n, e) {
        e(31)("isConcatSpreadable")
    }, function (t, n, e) {
        e(31)("match")
    }, function (t, n, e) {
        e(31)("matchAll")
    }, function (t, n, e) {
        e(31)("replace")
    }, function (t, n, e) {
        e(31)("search")
    }, function (t, n, e) {
        e(31)("species")
    }, function (t, n, e) {
        e(31)("split")
    }, function (t, n, e) {
        e(31)("toPrimitive")
    }, function (t, n, e) {
        e(31)("toStringTag")
    }, function (t, n, e) {
        e(31)("unscopables")
    }, function (t, n, e) {
        e(0)({
            target: "Object",
            stat: !0,
            sham: !e(5)
        }, {
            create: e(51)
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(5);
        r({
            target: "Object",
            stat: !0,
            forced: !o,
            sham: !o
        }, {
            defineProperty: e(10).f
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(5);
        r({
            target: "Object",
            stat: !0,
            forced: !o,
            sham: !o
        }, {
            defineProperties: e(143)
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(75),
            i = e(67);
        r({
            target: "Object",
            stat: !0
        }, {
            fromEntries: function (t) {
                var n = {};
                return o(t, (function (t, e) {
                    i(n, t, e)
                }), void 0, !0), n
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(5),
            i = e(139),
            a = e(34),
            u = e(24),
            s = e(67);
        r({
            target: "Object",
            stat: !0,
            sham: !o
        }, {
            getOwnPropertyDescriptors: function (t) {
                for (var n, e, r = a(t), o = u.f, c = i(r), f = {}, l = 0; c.length > l;) void 0 !== (e = o(r, n = c[l++])) && s(f, n, e);
                return f
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(1),
            i = e(195).f;
        r({
            target: "Object",
            stat: !0,
            forced: o((function () {
                return !Object.getOwnPropertyNames(1)
            }))
        }, {
            getOwnPropertyNames: i
        })
    }, function (t, n, e) {
        e(0)({
            target: "Object",
            stat: !0
        }, {
            is: e(200)
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(1),
            i = e(3),
            a = Object.isExtensible;
        r({
            target: "Object",
            stat: !0,
            forced: o((function () {
                a(1)
            }))
        }, {
            isExtensible: function (t) {
                return !!i(t) && (!a || a(t))
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(1),
            i = e(3),
            a = Object.isFrozen;
        r({
            target: "Object",
            stat: !0,
            forced: o((function () {
                a(1)
            }))
        }, {
            isFrozen: function (t) {
                return !i(t) || !!a && a(t)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(1),
            i = e(3),
            a = Object.isSealed;
        r({
            target: "Object",
            stat: !0,
            forced: o((function () {
                a(1)
            }))
        }, {
            isSealed: function (t) {
                return !i(t) || !!a && a(t)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(3),
            i = e(66).onFreeze,
            a = e(95),
            u = e(1),
            s = Object.preventExtensions;
        r({
            target: "Object",
            stat: !0,
            forced: u((function () {
                s(1)
            })),
            sham: !a
        }, {
            preventExtensions: function (t) {
                return s && o(t) ? s(i(t)) : t
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(3),
            i = e(66).onFreeze,
            a = e(95),
            u = e(1),
            s = Object.seal;
        r({
            target: "Object",
            stat: !0,
            forced: u((function () {
                s(1)
            })),
            sham: !a
        }, {
            seal: function (t) {
                return s && o(t) ? s(i(t)) : t
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(198).values;
        r({
            target: "Object",
            stat: !0
        }, {
            values: function (t) {
                return o(t)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(146),
            o = e(98);
        t.exports = r ? {}.toString : function () {
            return "[object " + o(this) + "]"
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(5),
            i = e(106),
            a = e(14),
            u = e(32),
            s = e(10);
        o && r({
            target: "Object",
            proto: !0,
            forced: i
        }, {
            __defineGetter__: function (t, n) {
                s.f(a(this), t, {
                    get: u(n),
                    enumerable: !0,
                    configurable: !0
                })
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(5),
            i = e(106),
            a = e(14),
            u = e(32),
            s = e(10);
        o && r({
            target: "Object",
            proto: !0,
            forced: i
        }, {
            __defineSetter__: function (t, n) {
                s.f(a(this), t, {
                    set: u(n),
                    enumerable: !0,
                    configurable: !0
                })
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(5),
            i = e(106),
            a = e(14),
            u = e(46),
            s = e(50),
            c = e(24).f;
        o && r({
            target: "Object",
            proto: !0,
            forced: i
        }, {
            __lookupGetter__: function (t) {
                var n, e = a(this),
                    r = u(t, !0);
                do {
                    if (n = c(e, r)) return n.get
                } while (e = s(e))
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(5),
            i = e(106),
            a = e(14),
            u = e(46),
            s = e(50),
            c = e(24).f;
        o && r({
            target: "Object",
            proto: !0,
            forced: i
        }, {
            __lookupSetter__: function (t) {
                var n, e = a(this),
                    r = u(t, !0);
                do {
                    if (n = c(e, r)) return n.set
                } while (e = s(e))
            }
        })
    }, function (t, n, e) {
        e(0)({
            target: "Function",
            proto: !0
        }, {
            bind: e(202)
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(3),
            o = e(10),
            i = e(50),
            a = e(7)("hasInstance"),
            u = Function.prototype;
        a in u || o.f(u, a, {
            value: function (t) {
                if ("function" != typeof this || !r(t)) return !1;
                if (!r(this.prototype)) return t instanceof this;
                for (; t = i(t);)
                    if (this.prototype === t) return !0;
                return !1
            }
        })
    }, function (t, n, e) {
        e(0)({
            global: !0
        }, {
            globalThis: e(2)
        })
    }, function (t, n, e) {
        e(0)({
            target: "Array",
            stat: !0
        }, {
            isArray: e(65)
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(1),
            i = e(67);
        r({
            target: "Array",
            stat: !0,
            forced: o((function () {
                function t() {}
                return !(Array.of.call(t) instanceof t)
            }))
        }, {
            of: function () {
                for (var t = 0, n = arguments.length, e = new("function" == typeof this ? this : Array)(n); n > t;) i(e, t, arguments[t++]);
                return e.length = n, e
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(204),
            i = e(60);
        r({
            target: "Array",
            proto: !0
        }, {
            copyWithin: o
        }), i("copyWithin")
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(21).find,
            i = e(60),
            a = !0;
        "find" in [] && Array(1).find((function () {
            a = !1
        })), r({
            target: "Array",
            proto: !0,
            forced: a
        }, {
            find: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), i("find")
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(21).findIndex,
            i = e(60),
            a = !0;
        "findIndex" in [] && Array(1).findIndex((function () {
            a = !1
        })), r({
            target: "Array",
            proto: !0,
            forced: a
        }, {
            findIndex: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), i("findIndex")
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(205),
            i = e(14),
            a = e(8),
            u = e(42),
            s = e(93);
        r({
            target: "Array",
            proto: !0
        }, {
            flat: function () {
                var t = arguments.length ? arguments[0] : void 0,
                    n = i(this),
                    e = a(n.length),
                    r = s(n, 0);
                return r.length = o(r, n, n, e, 0, void 0 === t ? 1 : u(t)), r
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(205),
            i = e(14),
            a = e(8),
            u = e(32),
            s = e(93);
        r({
            target: "Array",
            proto: !0
        }, {
            flatMap: function (t) {
                var n, e = i(this),
                    r = a(e.length);
                return u(t), (n = s(e, 0)).length = o(n, e, e, r, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), n
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(208);
        r({
            target: "Array",
            proto: !0,
            forced: o !== [].lastIndexOf
        }, {
            lastIndexOf: o
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(109).right;
        r({
            target: "Array",
            proto: !0,
            forced: e(52)("reduceRight")
        }, {
            reduceRight: function (t) {
                return o(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(65),
            i = [].reverse,
            a = [1, 2];
        r({
            target: "Array",
            proto: !0,
            forced: String(a) === String(a.reverse())
        }, {
            reverse: function () {
                return o(this) && (this.length = this.length), i.call(this)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(21).some;
        r({
            target: "Array",
            proto: !0,
            forced: e(52)("some")
        }, {
            some: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(32),
            i = e(14),
            a = e(1),
            u = e(52),
            s = [],
            c = s.sort,
            f = a((function () {
                s.sort(void 0)
            })),
            l = a((function () {
                s.sort(null)
            })),
            p = u("sort");
        r({
            target: "Array",
            proto: !0,
            forced: f || !l || p
        }, {
            sort: function (t) {
                return void 0 === t ? c.call(i(this)) : c.call(i(this), o(t))
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(57),
            i = e(42),
            a = e(8),
            u = e(14),
            s = e(93),
            c = e(67),
            f = e(100),
            l = Math.max,
            p = Math.min;
        r({
            target: "Array",
            proto: !0,
            forced: !f("splice")
        }, {
            splice: function (t, n) {
                var e, r, f, h, d, v, g = u(this),
                    y = a(g.length),
                    m = o(t, y),
                    b = arguments.length;
                if (0 === b ? e = r = 0 : 1 === b ? (e = 0, r = y - m) : (e = b - 2, r = p(l(i(n), 0), y - m)), y + e - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
                for (f = s(g, r), h = 0; h < r; h++)(d = m + h) in g && c(f, h, g[d]);
                if (f.length = r, e < r) {
                    for (h = m; h < y - r; h++) v = h + e, (d = h + r) in g ? g[v] = g[d] : delete g[v];
                    for (h = y; h > y - r + e; h--) delete g[h - 1]
                } else if (e > r)
                    for (h = y - r; h > m; h--) v = h + e - 1, (d = h + r - 1) in g ? g[v] = g[d] : delete g[v];
                for (h = 0; h < e; h++) g[h + m] = arguments[h + 2];
                return g.length = y - r + e, f
            }
        })
    }, function (t, n, e) {
        e(79)("Array")
    }, function (t, n, e) {
        e(60)("flat")
    }, function (t, n, e) {
        e(60)("flatMap")
    }, function (t, n, e) {
        var r = e(0),
            o = e(57),
            i = String.fromCharCode,
            a = String.fromCodePoint;
        r({
            target: "String",
            stat: !0,
            forced: !!a && 1 != a.length
        }, {
            fromCodePoint: function (t) {
                for (var n, e = [], r = arguments.length, a = 0; r > a;) {
                    if (n = +arguments[a++], o(n, 1114111) !== n) throw RangeError(n + " is not a valid code point");
                    e.push(n < 65536 ? i(n) : i(55296 + ((n -= 65536) >> 10), n % 1024 + 56320))
                }
                return e.join("")
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(34),
            i = e(8);
        r({
            target: "String",
            stat: !0
        }, {
            raw: function (t) {
                for (var n = o(t.raw), e = i(n.length), r = arguments.length, a = [], u = 0; e > u;) a.push(String(n[u++])), u < r && a.push(String(arguments[u]));
                return a.join("")
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(110).codeAt;
        r({
            target: "String",
            proto: !0
        }, {
            codePointAt: function (t) {
                return o(this, t)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(24).f,
            i = e(8),
            a = e(154),
            u = e(27),
            s = e(155),
            c = e(47),
            f = "".endsWith,
            l = Math.min,
            p = s("endsWith");
        r({
            target: "String",
            proto: !0,
            forced: !(!c && !p && !! function () {
                var t = o(String.prototype, "endsWith");
                return t && !t.writable
            }()) && !p
        }, {
            endsWith: function (t) {
                var n = String(u(this));
                a(t);
                var e = arguments.length > 1 ? arguments[1] : void 0,
                    r = i(n.length),
                    o = void 0 === e ? r : l(i(e), r),
                    s = String(t);
                return f ? f.call(n, s, o) : n.slice(o - s.length, o) === s
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(112),
            o = e(4),
            i = e(8),
            a = e(27),
            u = e(115),
            s = e(116);
        r("match", 1, (function (t, n, e) {
            return [function (n) {
                var e = a(this),
                    r = null == n ? void 0 : n[t];
                return void 0 !== r ? r.call(n, e) : new RegExp(n)[t](String(e))
            }, function (t) {
                var r = e(n, t, this);
                if (r.done) return r.value;
                var a = o(t),
                    c = String(this);
                if (!a.global) return s(a, c);
                var f = a.unicode;
                a.lastIndex = 0;
                for (var l, p = [], h = 0; null !== (l = s(a, c));) {
                    var d = String(l[0]);
                    p[h] = d, "" === d && (a.lastIndex = u(c, i(a.lastIndex), f)), h++
                }
                return 0 === h ? null : p
            }]
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(153),
            i = e(27),
            a = e(8),
            u = e(32),
            s = e(4),
            c = e(40),
            f = e(111),
            l = e(102),
            p = e(28),
            h = e(1),
            d = e(7),
            v = e(53),
            g = e(115),
            y = e(29),
            m = e(47),
            b = d("matchAll"),
            w = y.set,
            x = y.getterFor("RegExp String Iterator"),
            O = RegExp.prototype,
            S = O.exec,
            j = "".matchAll,
            E = !!j && !h((function () {
                "a".matchAll(/./)
            })),
            A = o((function (t, n, e, r) {
                w(this, {
                    type: "RegExp String Iterator",
                    regexp: t,
                    string: n,
                    global: e,
                    unicode: r,
                    done: !1
                })
            }), "RegExp String", (function () {
                var t = x(this);
                if (t.done) return {
                    value: void 0,
                    done: !0
                };
                var n = t.regexp,
                    e = t.string,
                    r = function (t, n) {
                        var e, r = t.exec;
                        if ("function" == typeof r) {
                            if ("object" != typeof (e = r.call(t, n))) throw TypeError("Incorrect exec result");
                            return e
                        }
                        return S.call(t, n)
                    }(n, e);
                return null === r ? {
                    value: void 0,
                    done: t.done = !0
                } : t.global ? ("" == String(r[0]) && (n.lastIndex = g(e, a(n.lastIndex), t.unicode)), {
                    value: r,
                    done: !1
                }) : (t.done = !0, {
                    value: r,
                    done: !1
                })
            })),
            k = function (t) {
                var n, e, r, o, i, u, c = s(this),
                    f = String(t);
                return n = v(c, RegExp), void 0 === (e = c.flags) && c instanceof RegExp && !("flags" in O) && (e = l.call(c)), r = void 0 === e ? "" : String(e), o = new n(n === RegExp ? c.source : c, r), i = !!~r.indexOf("g"), u = !!~r.indexOf("u"), o.lastIndex = a(c.lastIndex), new A(o, f, i, u)
            };
        r({
            target: "String",
            proto: !0,
            forced: E
        }, {
            matchAll: function (t) {
                var n, e, r, o = i(this);
                if (null != t) {
                    if (f(t) && !~String(i("flags" in O ? t.flags : l.call(t))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
                    if (E) return j.apply(o, arguments);
                    if (void 0 === (e = t[b]) && m && "RegExp" == c(t) && (e = k), null != e) return u(e).call(t, o)
                } else if (E) return j.apply(o, arguments);
                return n = String(o), r = new RegExp(t, "g"), m ? k.call(r, n) : r[b](n)
            }
        }), m || b in O || p(O, b, k)
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(156).end;
        r({
            target: "String",
            proto: !0,
            forced: e(210)
        }, {
            padEnd: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(81).start,
            i = e(160)("trimStart"),
            a = i ? function () {
                return o(this)
            } : "".trimStart;
        r({
            target: "String",
            proto: !0,
            forced: i
        }, {
            trimStart: a,
            trimLeft: a
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(81).end,
            i = e(160)("trimEnd"),
            a = i ? function () {
                return o(this)
            } : "".trimEnd;
        r({
            target: "String",
            proto: !0,
            forced: i
        }, {
            trimEnd: a,
            trimRight: a
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("anchor")
        }, {
            anchor: function (t) {
                return o(this, "a", "name", t)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("big")
        }, {
            big: function () {
                return o(this, "big", "", "")
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("blink")
        }, {
            blink: function () {
                return o(this, "blink", "", "")
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("bold")
        }, {
            bold: function () {
                return o(this, "b", "", "")
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("fixed")
        }, {
            fixed: function () {
                return o(this, "tt", "", "")
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("fontcolor")
        }, {
            fontcolor: function (t) {
                return o(this, "font", "color", t)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("fontsize")
        }, {
            fontsize: function (t) {
                return o(this, "font", "size", t)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("italics")
        }, {
            italics: function () {
                return o(this, "i", "", "")
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("link")
        }, {
            link: function (t) {
                return o(this, "a", "href", t)
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("small")
        }, {
            small: function () {
                return o(this, "small", "", "")
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("strike")
        }, {
            strike: function () {
                return o(this, "strike", "", "")
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("sub")
        }, {
            sub: function () {
                return o(this, "sub", "", "")
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(37);
        r({
            target: "String",
            proto: !0,
            forced: e(38)("sup")
        }, {
            sup: function () {
                return o(this, "sup", "", "")
            }
        })
    }, function (t, n, e) {
        var r = e(5),
            o = e(10),
            i = e(102),
            a = e(114).UNSUPPORTED_Y;
        r && ("g" != /./g.flags || a) && o.f(RegExp.prototype, "flags", {
            configurable: !0,
            get: i
        })
    }, function (t, n, e) {
        var r = e(5),
            o = e(114).UNSUPPORTED_Y,
            i = e(10).f,
            a = e(29).get,
            u = RegExp.prototype;
        r && o && i(RegExp.prototype, "sticky", {
            configurable: !0,
            get: function () {
                if (this !== u) {
                    if (this instanceof RegExp) return !!a(this).sticky;
                    throw TypeError("Incompatible receiver, RegExp required")
                }
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(3),
            i = function () {
                var t = !1,
                    n = /[ac]/;
                return n.exec = function () {
                    return t = !0, /./.exec.apply(this, arguments)
                }, !0 === n.test("abc") && t
            }(),
            a = /./.test;
        r({
            target: "RegExp",
            proto: !0,
            forced: !i
        }, {
            test: function (t) {
                if ("function" != typeof this.exec) return a.call(this, t);
                var n = this.exec(t);
                if (null !== n && !o(n)) throw new Error("RegExp exec method returned something other than an Object or null");
                return !!n
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(215);
        r({
            global: !0,
            forced: parseInt != o
        }, {
            parseInt: o
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(216);
        r({
            global: !0,
            forced: parseFloat != o
        }, {
            parseFloat: o
        })
    }, function (t, n, e) {
        e(0)({
            target: "Number",
            stat: !0
        }, {
            EPSILON: Math.pow(2, -52)
        })
    }, function (t, n, e) {
        e(0)({
            target: "Number",
            stat: !0
        }, {
            isFinite: e(385)
        })
    }, function (t, n, e) {
        var r = e(2).isFinite;
        t.exports = Number.isFinite || function (t) {
            return "number" == typeof t && r(t)
        }
    }, function (t, n, e) {
        e(0)({
            target: "Number",
            stat: !0
        }, {
            isInteger: e(217)
        })
    }, function (t, n, e) {
        e(0)({
            target: "Number",
            stat: !0
        }, {
            isNaN: function (t) {
                return t != t
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(217),
            i = Math.abs;
        r({
            target: "Number",
            stat: !0
        }, {
            isSafeInteger: function (t) {
                return o(t) && i(t) <= 9007199254740991
            }
        })
    }, function (t, n, e) {
        e(0)({
            target: "Number",
            stat: !0
        }, {
            MAX_SAFE_INTEGER: 9007199254740991
        })
    }, function (t, n, e) {
        e(0)({
            target: "Number",
            stat: !0
        }, {
            MIN_SAFE_INTEGER: -9007199254740991
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(216);
        r({
            target: "Number",
            stat: !0,
            forced: Number.parseFloat != o
        }, {
            parseFloat: o
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(215);
        r({
            target: "Number",
            stat: !0,
            forced: Number.parseInt != o
        }, {
            parseInt: o
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(1),
            i = e(219),
            a = 1..toPrecision;
        r({
            target: "Number",
            proto: !0,
            forced: o((function () {
                return "1" !== a.call(1, void 0)
            })) || !o((function () {
                a.call({})
            }))
        }, {
            toPrecision: function (t) {
                return void 0 === t ? a.call(i(this)) : a.call(i(this), t)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(220),
            i = Math.acosh,
            a = Math.log,
            u = Math.sqrt,
            s = Math.LN2;
        r({
            target: "Math",
            stat: !0,
            forced: !i || 710 != Math.floor(i(Number.MAX_VALUE)) || i(1 / 0) != 1 / 0
        }, {
            acosh: function (t) {
                return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? a(t) + s : o(t - 1 + u(t - 1) * u(t + 1))
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = Math.asinh,
            i = Math.log,
            a = Math.sqrt;
        r({
            target: "Math",
            stat: !0,
            forced: !(o && 1 / o(0) > 0)
        }, {
            asinh: function t(n) {
                return isFinite(n = +n) && 0 != n ? n < 0 ? -t(-n) : i(n + a(n * n + 1)) : n
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = Math.atanh,
            i = Math.log;
        r({
            target: "Math",
            stat: !0,
            forced: !(o && 1 / o(-0) < 0)
        }, {
            atanh: function (t) {
                return 0 == (t = +t) ? t : i((1 + t) / (1 - t)) / 2
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(162),
            i = Math.abs,
            a = Math.pow;
        r({
            target: "Math",
            stat: !0
        }, {
            cbrt: function (t) {
                return o(t = +t) * a(i(t), 1 / 3)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = Math.floor,
            i = Math.log,
            a = Math.LOG2E;
        r({
            target: "Math",
            stat: !0
        }, {
            clz32: function (t) {
                return (t >>>= 0) ? 31 - o(i(t + .5) * a) : 32
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(119),
            i = Math.cosh,
            a = Math.abs,
            u = Math.E;
        r({
            target: "Math",
            stat: !0,
            forced: !i || i(710) === 1 / 0
        }, {
            cosh: function (t) {
                var n = o(a(t) - 1) + 1;
                return (n + 1 / (n * u * u)) * (u / 2)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(119);
        r({
            target: "Math",
            stat: !0,
            forced: o != Math.expm1
        }, {
            expm1: o
        })
    }, function (t, n, e) {
        e(0)({
            target: "Math",
            stat: !0
        }, {
            fround: e(402)
        })
    }, function (t, n, e) {
        var r = e(162),
            o = Math.abs,
            i = Math.pow,
            a = i(2, -52),
            u = i(2, -23),
            s = i(2, 127) * (2 - u),
            c = i(2, -126);
        t.exports = Math.fround || function (t) {
            var n, e, i = o(t),
                f = r(t);
            return i < c ? f * function (t) {
                return t + 1 / a - 1 / a
            }(i / c / u) * c * u : (e = (n = (1 + u / a) * i) - (n - i)) > s || e != e ? f * (1 / 0) : f * e
        }
    }, function (t, n, e) {
        var r = e(0),
            o = Math.hypot,
            i = Math.abs,
            a = Math.sqrt;
        r({
            target: "Math",
            stat: !0,
            forced: !!o && o(1 / 0, NaN) !== 1 / 0
        }, {
            hypot: function (t, n) {
                for (var e, r, o = 0, u = 0, s = arguments.length, c = 0; u < s;) c < (e = i(arguments[u++])) ? (o = o * (r = c / e) * r + 1, c = e) : o += e > 0 ? (r = e / c) * r : e;
                return c === 1 / 0 ? 1 / 0 : c * a(o)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(1),
            i = Math.imul;
        r({
            target: "Math",
            stat: !0,
            forced: o((function () {
                return -5 != i(4294967295, 5) || 2 != i.length
            }))
        }, {
            imul: function (t, n) {
                var e = +t,
                    r = +n,
                    o = 65535 & e,
                    i = 65535 & r;
                return 0 | o * i + ((65535 & e >>> 16) * i + o * (65535 & r >>> 16) << 16 >>> 0)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = Math.log,
            i = Math.LOG10E;
        r({
            target: "Math",
            stat: !0
        }, {
            log10: function (t) {
                return o(t) * i
            }
        })
    }, function (t, n, e) {
        e(0)({
            target: "Math",
            stat: !0
        }, {
            log1p: e(220)
        })
    }, function (t, n, e) {
        var r = e(0),
            o = Math.log,
            i = Math.LN2;
        r({
            target: "Math",
            stat: !0
        }, {
            log2: function (t) {
                return o(t) / i
            }
        })
    }, function (t, n, e) {
        e(0)({
            target: "Math",
            stat: !0
        }, {
            sign: e(162)
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(1),
            i = e(119),
            a = Math.abs,
            u = Math.exp,
            s = Math.E;
        r({
            target: "Math",
            stat: !0,
            forced: o((function () {
                return -2e-17 != Math.sinh(-2e-17)
            }))
        }, {
            sinh: function (t) {
                return a(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (u(t - 1) - u(-t - 1)) * (s / 2)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(119),
            i = Math.exp;
        r({
            target: "Math",
            stat: !0
        }, {
            tanh: function (t) {
                var n = o(t = +t),
                    e = o(-t);
                return n == 1 / 0 ? 1 : e == 1 / 0 ? -1 : (n - e) / (i(t) + i(-t))
            }
        })
    }, function (t, n, e) {
        e(48)(Math, "Math", !0)
    }, function (t, n, e) {
        var r = e(0),
            o = Math.ceil,
            i = Math.floor;
        r({
            target: "Math",
            stat: !0
        }, {
            trunc: function (t) {
                return (t > 0 ? i : o)(t)
            }
        })
    }, function (t, n, e) {
        e(0)({
            target: "Date",
            stat: !0
        }, {
            now: function () {
                return (new Date).getTime()
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(1),
            i = e(14),
            a = e(46);
        r({
            target: "Date",
            proto: !0,
            forced: o((function () {
                return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                    toISOString: function () {
                        return 1
                    }
                })
            }))
        }, {
            toJSON: function (t) {
                var n = i(this),
                    e = a(n);
                return "number" != typeof e || isFinite(e) ? n.toISOString() : null
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(416);
        r({
            target: "Date",
            proto: !0,
            forced: Date.prototype.toISOString !== o
        }, {
            toISOString: o
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(1),
            o = e(156).start,
            i = Math.abs,
            a = Date.prototype,
            u = a.getTime,
            s = a.toISOString;
        t.exports = r((function () {
            return "0385-07-25T07:06:39.999Z" != s.call(new Date(-5e13 - 1))
        })) || !r((function () {
            s.call(new Date(NaN))
        })) ? function () {
            if (!isFinite(u.call(this))) throw RangeError("Invalid time value");
            var t = this.getUTCFullYear(),
                n = this.getUTCMilliseconds(),
                e = t < 0 ? "-" : t > 9999 ? "+" : "";
            return e + o(i(t), e ? 6 : 4, 0) + "-" + o(this.getUTCMonth() + 1, 2, 0) + "-" + o(this.getUTCDate(), 2, 0) + "T" + o(this.getUTCHours(), 2, 0) + ":" + o(this.getUTCMinutes(), 2, 0) + ":" + o(this.getUTCSeconds(), 2, 0) + "." + o(n, 3, 0) + "Z"
        } : s
    }, function (t, n, e) {
        var r = e(25),
            o = Date.prototype,
            i = o.toString,
            a = o.getTime;
        new Date(NaN) + "" != "Invalid Date" && r(o, "toString", (function () {
            var t = a.call(this);
            return t == t ? i.call(this) : "Invalid Date"
        }))
    }, function (t, n, e) {
        var r = e(28),
            o = e(419),
            i = e(7)("toPrimitive"),
            a = Date.prototype;
        i in a || r(a, i, o)
    }, function (t, n, e) {
        "use strict";
        var r = e(4),
            o = e(46);
        t.exports = function (t) {
            if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
            return o(r(this), "number" !== t)
        }
    }, function (t, n, e) {
        var r = e(0),
            o = e(41),
            i = e(1),
            a = o("JSON", "stringify"),
            u = /[\uD800-\uDFFF]/g,
            s = /^[\uD800-\uDBFF]$/,
            c = /^[\uDC00-\uDFFF]$/,
            f = function (t, n, e) {
                var r = e.charAt(n - 1),
                    o = e.charAt(n + 1);
                return s.test(t) && !c.test(o) || c.test(t) && !s.test(r) ? "\\u" + t.charCodeAt(0).toString(16) : t
            },
            l = i((function () {
                return '"\\udf06\\ud834"' !== a("\udf06\ud834") || '"\\udead"' !== a("\udead")
            }));
        a && r({
            target: "JSON",
            stat: !0,
            forced: l
        }, {
            stringify: function (t, n, e) {
                var r = a.apply(null, arguments);
                return "string" == typeof r ? r.replace(u, f) : r
            }
        })
    }, function (t, n, e) {
        var r = e(2);
        e(48)(r.JSON, "JSON", !0)
    }, function (t, n, e) {
        var r = e(2);
        t.exports = function (t, n) {
            var e = r.console;
            e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(32),
            i = e(164),
            a = e(225),
            u = e(75);
        r({
            target: "Promise",
            stat: !0
        }, {
            allSettled: function (t) {
                var n = this,
                    e = i.f(n),
                    r = e.resolve,
                    s = e.reject,
                    c = a((function () {
                        var e = o(n.resolve),
                            i = [],
                            a = 0,
                            s = 1;
                        u(t, (function (t) {
                            var o = a++,
                                u = !1;
                            i.push(void 0), s++, e.call(n, t).then((function (t) {
                                u || (u = !0, i[o] = {
                                    status: "fulfilled",
                                    value: t
                                }, --s || r(i))
                            }), (function (t) {
                                u || (u = !0, i[o] = {
                                    status: "rejected",
                                    reason: t
                                }, --s || r(i))
                            }))
                        })), --s || r(i)
                    }));
                return c.error && s(c.value), e.promise
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r, o = e(2),
            i = e(82),
            a = e(66),
            u = e(120),
            s = e(230),
            c = e(3),
            f = e(29).enforce,
            l = e(190),
            p = !o.ActiveXObject && "ActiveXObject" in o,
            h = Object.isExtensible,
            d = function (t) {
                return function () {
                    return t(this, arguments.length ? arguments[0] : void 0)
                }
            },
            v = t.exports = u("WeakMap", d, s);
        if (l && p) {
            r = s.getConstructor(d, "WeakMap", !0), a.REQUIRED = !0;
            var g = v.prototype,
                y = g.delete,
                m = g.has,
                b = g.get,
                w = g.set;
            i(g, {
                delete: function (t) {
                    if (c(t) && !h(t)) {
                        var n = f(this);
                        return n.frozen || (n.frozen = new r), y.call(this, t) || n.frozen.delete(t)
                    }
                    return y.call(this, t)
                },
                has: function (t) {
                    if (c(t) && !h(t)) {
                        var n = f(this);
                        return n.frozen || (n.frozen = new r), m.call(this, t) || n.frozen.has(t)
                    }
                    return m.call(this, t)
                },
                get: function (t) {
                    if (c(t) && !h(t)) {
                        var n = f(this);
                        return n.frozen || (n.frozen = new r), m.call(this, t) ? b.call(this, t) : n.frozen.get(t)
                    }
                    return b.call(this, t)
                },
                set: function (t, n) {
                    if (c(t) && !h(t)) {
                        var e = f(this);
                        e.frozen || (e.frozen = new r), m.call(this, t) ? w.call(this, t, n) : e.frozen.set(t, n)
                    } else w.call(this, t, n);
                    return this
                }
            })
        }
    }, function (t, n, e) {
        "use strict";
        e(120)("WeakSet", (function (t) {
            return function () {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }), e(230))
    }, function (t, n, e) {
        "use strict";
        var r = e(0),
            o = e(2),
            i = e(121),
            a = e(79),
            u = i.ArrayBuffer;
        r({
            global: !0,
            forced: o.ArrayBuffer !== u
        }, {
            ArrayBuffer: u
        }), a("ArrayBuffer")
    }, function (t, n) {
        var e = Math.abs,
            r = Math.pow,
            o = Math.floor,
            i = Math.log,
            a = Math.LN2;
        t.exports = {
            pack: function (t, n, u) {
                var s, c, f, l = new Array(u),
                    p = 8 * u - n - 1,
                    h = (1 << p) - 1,
                    d = h >> 1,
                    v = 23 === n ? r(2, -24) - r(2, -77) : 0,
                    g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
                    y = 0;
                for ((t = e(t)) != t || t === 1 / 0 ? (c = t != t ? 1 : 0, s = h) : (s = o(i(t) / a), t * (f = r(2, -s)) < 1 && (s--, f *= 2), (t += s + d >= 1 ? v / f : v * r(2, 1 - d)) * f >= 2 && (s++, f /= 2), s + d >= h ? (c = 0, s = h) : s + d >= 1 ? (c = (t * f - 1) * r(2, n), s += d) : (c = t * r(2, d - 1) * r(2, n), s = 0)); n >= 8; l[y++] = 255 & c, c /= 256, n -= 8);
                for (s = s << n | c, p += n; p > 0; l[y++] = 255 & s, s /= 256, p -= 8);
                return l[--y] |= 128 * g, l
            },
            unpack: function (t, n) {
                var e, o = t.length,
                    i = 8 * o - n - 1,
                    a = (1 << i) - 1,
                    u = a >> 1,
                    s = i - 7,
                    c = o - 1,
                    f = t[c--],
                    l = 127 & f;
                for (f >>= 7; s > 0; l = 256 * l + t[c], c--, s -= 8);
                for (e = l & (1 << -s) - 1, l >>= -s, s += n; s > 0; e = 256 * e + t[c], c--, s -= 8);
                if (0 === l) l = 1 - u;
                else {
                    if (l === a) return e ? NaN : f ? -1 / 0 : 1 / 0;
                    e += r(2, n), l -= u
                }
                return (f ? -1 : 1) * e * r(2, l - n)
            }
        }
    }, function (t, n, e) {
        var r = e(0),
            o = e(6);
        r({
            target: "ArrayBuffer",
            stat: !0,
            forced: !o.NATIVE_ARRAY_BUFFER_VIEWS
        }, {
            isView: o.isView
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(121);
        r({
            global: !0,
            forced: !e(6).NATIVE_ARRAY_BUFFER
        }, {
            DataView: o.DataView
        })
    }, function (t, n, e) {
        e(54)("Int8", (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r)
            }
        }))
    }, function (t, n, e) {
        var r = e(42);
        t.exports = function (t) {
            var n = r(t);
            if (n < 0) throw RangeError("The argument can't be less than 0");
            return n
        }
    }, function (t, n, e) {
        e(54)("Uint8", (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r)
            }
        }), !0)
    }, function (t, n, e) {
        e(54)("Int16", (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r)
            }
        }))
    }, function (t, n, e) {
        e(54)("Uint16", (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r)
            }
        }))
    }, function (t, n, e) {
        e(54)("Int32", (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r)
            }
        }))
    }, function (t, n, e) {
        e(54)("Uint32", (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r)
            }
        }))
    }, function (t, n, e) {
        e(54)("Float32", (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r)
            }
        }))
    }, function (t, n, e) {
        e(54)("Float64", (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r)
            }
        }))
    }, function (t, n, e) {
        "use strict";
        var r = e(165);
        (0, e(6).exportTypedArrayStaticMethod)("from", e(234), r)
    }, function (t, n, e) {
        "use strict";
        var r = e(6),
            o = e(165),
            i = r.aTypedArrayConstructor;
        (0, r.exportTypedArrayStaticMethod)("of", (function () {
            for (var t = 0, n = arguments.length, e = new(i(this))(n); n > t;) e[t] = arguments[t++];
            return e
        }), o)
    }, function (t, n, e) {
        var r = e(0),
            o = e(41),
            i = e(32),
            a = e(4),
            u = e(1),
            s = o("Reflect", "apply"),
            c = Function.apply;
        r({
            target: "Reflect",
            stat: !0,
            forced: !u((function () {
                s((function () {}))
            }))
        }, {
            apply: function (t, n, e) {
                return i(t), a(e), s ? s(t, n, e) : c.call(t, n, e)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(41),
            i = e(32),
            a = e(4),
            u = e(3),
            s = e(51),
            c = e(202),
            f = e(1),
            l = o("Reflect", "construct"),
            p = f((function () {
                function t() {}
                return !(l((function () {}), [], t) instanceof t)
            })),
            h = !f((function () {
                l((function () {}))
            })),
            d = p || h;
        r({
            target: "Reflect",
            stat: !0,
            forced: d,
            sham: d
        }, {
            construct: function (t, n) {
                i(t), a(n);
                var e = arguments.length < 3 ? t : i(arguments[2]);
                if (h && !p) return l(t, n, e);
                if (t == e) {
                    switch (n.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(n[0]);
                        case 2:
                            return new t(n[0], n[1]);
                        case 3:
                            return new t(n[0], n[1], n[2]);
                        case 4:
                            return new t(n[0], n[1], n[2], n[3])
                    }
                    var r = [null];
                    return r.push.apply(r, n), new(c.apply(t, r))
                }
                var o = e.prototype,
                    f = s(u(o) ? o : Object.prototype),
                    d = Function.apply.call(t, f, n);
                return u(d) ? d : f
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(5),
            i = e(4),
            a = e(46),
            u = e(10);
        r({
            target: "Reflect",
            stat: !0,
            forced: e(1)((function () {
                Reflect.defineProperty(u.f({}, 1, {
                    value: 1
                }), 1, {
                    value: 2
                })
            })),
            sham: !o
        }, {
            defineProperty: function (t, n, e) {
                i(t);
                var r = a(n, !0);
                i(e);
                try {
                    return u.f(t, r, e), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(4),
            i = e(24).f;
        r({
            target: "Reflect",
            stat: !0
        }, {
            deleteProperty: function (t, n) {
                var e = i(o(t), n);
                return !(e && !e.configurable) && delete t[n]
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(4),
            i = e(50);
        r({
            target: "Reflect",
            stat: !0,
            sham: !e(147)
        }, {
            getPrototypeOf: function (t) {
                return i(o(t))
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(4),
            i = Object.isExtensible;
        r({
            target: "Reflect",
            stat: !0
        }, {
            isExtensible: function (t) {
                return o(t), !i || i(t)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(41),
            i = e(4);
        r({
            target: "Reflect",
            stat: !0,
            sham: !e(95)
        }, {
            preventExtensions: function (t) {
                i(t);
                try {
                    var n = o("Object", "preventExtensions");
                    return n && n(t), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(4),
            i = e(3),
            a = e(17),
            u = e(1),
            s = e(10),
            c = e(24),
            f = e(50),
            l = e(56);
        r({
            target: "Reflect",
            stat: !0,
            forced: u((function () {
                var t = s.f({}, "a", {
                    configurable: !0
                });
                return !1 !== Reflect.set(f(t), "a", 1, t)
            }))
        }, {
            set: function t(n, e, r) {
                var u, p, h = arguments.length < 4 ? n : arguments[3],
                    d = c.f(o(n), e);
                if (!d) {
                    if (i(p = f(n))) return t(p, e, r, h);
                    d = l(0)
                }
                if (a(d, "value")) {
                    if (!1 === d.writable || !i(h)) return !1;
                    if (u = c.f(h, e)) {
                        if (u.get || u.set || !1 === u.writable) return !1;
                        u.value = r, s.f(h, e, u)
                    } else s.f(h, e, l(0, r));
                    return !0
                }
                return void 0 !== d.set && (d.set.call(h, r), !0)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(4),
            i = e(201),
            a = e(76);
        a && r({
            target: "Reflect",
            stat: !0
        }, {
            setPrototypeOf: function (t, n) {
                o(t), i(n);
                try {
                    return a(t, n), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function (t, n, e) {
        e(23), e(13), e(451), e(452), e(453), e(260), e(456), e(262);
        var r = e(89);
        t.exports = r
    }, function (t, n, e) {
        var r = e(0),
            o = e(2),
            i = e(163);
        r({
            global: !0,
            bind: !0,
            enumerable: !0,
            forced: !o.setImmediate || !o.clearImmediate
        }, {
            setImmediate: i.set,
            clearImmediate: i.clear
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(2),
            i = e(223),
            a = e(40),
            u = o.process,
            s = "process" == a(u);
        r({
            global: !0,
            enumerable: !0,
            noTargetGet: !0
        }, {
            queueMicrotask: function (t) {
                var n = s && u.domain;
                i(n ? n.bind(t) : t)
            }
        })
    }, function (t, n, e) {
        var r = e(0),
            o = e(2),
            i = e(108),
            a = [].slice,
            u = function (t) {
                return function (n, e) {
                    var r = arguments.length > 2,
                        o = r ? a.call(arguments, 2) : void 0;
                    return t(r ? function () {
                        ("function" == typeof n ? n : Function(n)).apply(this, o)
                    } : n, e)
                }
            };
        r({
            global: !0,
            bind: !0,
            forced: /MSIE .\./.test(i)
        }, {
            setTimeout: u(o.setTimeout),
            setInterval: u(o.setInterval)
        })
    }, function (t, n, e) {
        "use strict";
        var r = /[^\0-\u007E]/,
            o = /[.\u3002\uFF0E\uFF61]/g,
            i = "Overflow: input needs wider integers to process",
            a = Math.floor,
            u = String.fromCharCode,
            s = function (t) {
                return t + 22 + 75 * (t < 26)
            },
            c = function (t, n, e) {
                var r = 0;
                for (t = e ? a(t / 700) : t >> 1, t += a(t / n); t > 455; r += 36) t = a(t / 35);
                return a(r + 36 * t / (t + 38))
            },
            f = function (t) {
                var n, e, r = [],
                    o = (t = function (t) {
                        for (var n = [], e = 0, r = t.length; e < r;) {
                            var o = t.charCodeAt(e++);
                            if (o >= 55296 && o <= 56319 && e < r) {
                                var i = t.charCodeAt(e++);
                                56320 == (64512 & i) ? n.push(((1023 & o) << 10) + (1023 & i) + 65536) : (n.push(o), e--)
                            } else n.push(o)
                        }
                        return n
                    }(t)).length,
                    f = 128,
                    l = 0,
                    p = 72;
                for (n = 0; n < t.length; n++)(e = t[n]) < 128 && r.push(u(e));
                var h = r.length,
                    d = h;
                for (h && r.push("-"); d < o;) {
                    var v = 2147483647;
                    for (n = 0; n < t.length; n++)(e = t[n]) >= f && e < v && (v = e);
                    var g = d + 1;
                    if (v - f > a((2147483647 - l) / g)) throw RangeError(i);
                    for (l += (v - f) * g, f = v, n = 0; n < t.length; n++) {
                        if ((e = t[n]) < f && ++l > 2147483647) throw RangeError(i);
                        if (e == f) {
                            for (var y = l, m = 36;; m += 36) {
                                var b = m <= p ? 1 : m >= p + 26 ? 26 : m - p;
                                if (y < b) break;
                                var w = y - b,
                                    x = 36 - b;
                                r.push(u(s(b + w % x))), y = a(w / x)
                            }
                            r.push(u(s(y))), p = c(l, g, d == h), l = 0, ++d
                        }
                    }++l, ++f
                }
                return r.join("")
            };
        t.exports = function (t) {
            var n, e, i = [],
                a = t.toLowerCase().replace(o, ".").split(".");
            for (n = 0; n < a.length; n++) e = a[n], i.push(r.test(e) ? "xn--" + f(e) : e);
            return i.join(".")
        }
    }, function (t, n, e) {
        var r = e(4),
            o = e(97);
        t.exports = function (t) {
            var n = o(t);
            if ("function" != typeof n) throw TypeError(String(t) + " is not iterable");
            return r(n.call(t))
        }
    }, function (t, n, e) {
        "use strict";
        e(0)({
            target: "URL",
            proto: !0,
            enumerable: !0
        }, {
            toJSON: function () {
                return URL.prototype.toString.call(this)
            }
        })
    }, function (t, n) {
        t.exports = function () {
            this.__data__ = [], this.size = 0
        }
    }, function (t, n, e) {
        var r = e(123),
            o = Array.prototype.splice;
        t.exports = function (t) {
            var n = this.__data__,
                e = r(n, t);
            return !(e < 0) && (e == n.length - 1 ? n.pop() : o.call(n, e, 1), --this.size, !0)
        }
    }, function (t, n, e) {
        var r = e(123);
        t.exports = function (t) {
            var n = this.__data__,
                e = r(n, t);
            return e < 0 ? void 0 : n[e][1]
        }
    }, function (t, n, e) {
        var r = e(123);
        t.exports = function (t) {
            return r(this.__data__, t) > -1
        }
    }, function (t, n, e) {
        var r = e(123);
        t.exports = function (t, n) {
            var e = this.__data__,
                o = r(e, t);
            return o < 0 ? (++this.size, e.push([t, n])) : e[o][1] = n, this
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var e = -1, r = null == t ? 0 : t.length; ++e < r && !1 !== n(t[e], e, t););
            return t
        }
    }, function (t, n, e) {
        var r = e(464),
            o = function () {
                try {
                    var t = r(Object, "defineProperty");
                    return t({}, "", {}), t
                } catch (t) {}
            }();
        t.exports = o
    }, function (t, n) {
        t.exports = function (t, n) {
            return null == t ? void 0 : t[n]
        }
    }, function (t, n, e) {
        var r = e(70),
            o = e(172);
        t.exports = function (t, n) {
            return t && r(n, o(n), t)
        }
    }, function (t, n, e) {
        var r = e(70),
            o = e(125);
        t.exports = function (t, n) {
            return t && r(n, o(n), t)
        }
    }, function (t, n, e) {
        (function (n) {
            var e = "object" == typeof n && n && n.Object === Object && n;
            t.exports = e
        }).call(this, e(134))
    }, function (t, n, e) {
        var r = e(70),
            o = e(469);
        t.exports = function (t, n) {
            return r(t, o(t), n)
        }
    }, function (t, n) {
        t.exports = function () {
            return []
        }
    }, function (t, n, e) {
        var r = e(70),
            o = e(471);
        t.exports = function (t, n) {
            return r(t, o(t), n)
        }
    }, function (t, n) {
        t.exports = function () {
            return []
        }
    }, function (t, n, e) {
        var r = e(173)(Object.keys, Object);
        t.exports = r
    }, function (t, n) {
        var e = Object.prototype.toString;
        t.exports = function (t) {
            return e.call(t)
        }
    }, function (t, n) {
        var e = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var n = t.length,
                r = new t.constructor(n);
            return n && "string" == typeof t[0] && e.call(t, "index") && (r.index = t.index, r.input = t.input), r
        }
    }, function (t, n) {
        t.exports = function (t) {
            return t
        }
    }, function (t, n, e) {
        var r = e(30),
            o = Object.create,
            i = function () {
                function t() {}
                return function (n) {
                    if (!r(n)) return {};
                    if (o) return o(n);
                    t.prototype = n;
                    var e = new t;
                    return t.prototype = void 0, e
                }
            }();
        t.exports = i
    }, function (t, n) {
        t.exports = function () {
            return !1
        }
    }, function (t, n) {
        t.exports = function () {
            return !1
        }
    }, function (t, n) {
        t.exports = function () {
            return !1
        }
    }, function (t, n, e) {
        "use strict";
        var r;

        function o(t) {
            return !!t && ("object" == (void 0 === t ? "undefined" : i(t)) || "function" == typeof t)
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            },
            a = function () {
                var t = null,
                    n = function (n, e) {
                        if (!o(n) || !o(e)) throw new TypeError("Cannot create proxy with a non-object as target or handler");
                        var r = function () {};
                        t = function () {
                            r = function (t) {
                                throw new TypeError("Cannot perform '" + t + "' on a proxy that has been revoked")
                            }
                        };
                        var i = e;
                        for (var a in e = {
                                get: null,
                                set: null,
                                apply: null,
                                construct: null
                            }, i) {
                            if (!(a in e)) throw new TypeError("Proxy polyfill does not support trap '" + a + "'");
                            e[a] = i[a]
                        }
                        "function" == typeof i && (e.apply = i.apply.bind(i));
                        var u = this,
                            s = !1,
                            c = "function" == typeof n;
                        (e.apply || e.construct || c) && (u = function () {
                            var t = this && this.constructor === u;
                            if (r(t ? "construct" : "apply"), t && e.construct) return e.construct.call(this, n, arguments);
                            if (!t && e.apply) return e.apply(n, this, arguments);
                            if (c) {
                                if (t) {
                                    var o = Array.prototype.slice.call(arguments);
                                    o.unshift(n);
                                    var i = n.bind.apply(n, o);
                                    return new i
                                }
                                return n.apply(this, arguments)
                            }
                            throw new TypeError(t ? "not a constructor" : "not a function")
                        }, s = !0);
                        var f = e.get ? function (t) {
                                return r("get"), e.get(this, t, u)
                            } : function (t) {
                                return r("get"), this[t]
                            },
                            l = e.set ? function (t, n) {
                                r("set"), e.set(this, t, n, u)
                            } : function (t, n) {
                                r("set"), this[t] = n
                            },
                            p = Object.getOwnPropertyNames(n),
                            h = {};
                        p.forEach((function (t) {
                            if (!(s && t in u)) {
                                var e = {
                                    enumerable: !!Object.getOwnPropertyDescriptor(n, t).enumerable,
                                    get: f.bind(n, t),
                                    set: l.bind(n, t)
                                };
                                Object.defineProperty(u, t, e), h[t] = !0
                            }
                        }));
                        var d = !0;
                        if (Object.setPrototypeOf ? Object.setPrototypeOf(u, Object.getPrototypeOf(n)) : u.__proto__ ? u.__proto__ = n.__proto__ : d = !1, e.get || !d)
                            for (var v in n) h[v] || Object.defineProperty(u, v, {
                                get: f.bind(n, v)
                            });
                        return Object.seal(n), Object.seal(u), u
                    };
                return n.revocable = function (e, r) {
                    return {
                        proxy: new n(e, r),
                        revoke: t
                    }
                }, n
            }();
        "object" === i(n) ? t.exports = "function" != typeof Proxy ? a : Proxy : void 0 === (r = function () {
            return "function" != typeof Proxy ? a : Proxy
        }.call(n, e, n, t)) || (t.exports = r)
    }, function (t, n) {
        t.exports = function (t) {
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return function () {
                var n = arguments;
                switch (n.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, n[0]);
                    case 2:
                        return !t.call(this, n[0], n[1]);
                    case 3:
                        return !t.call(this, n[0], n[1], n[2])
                }
                return !t.apply(this, n)
            }
        }
    }, function (t, n, e) {
        var r = e(71),
            o = e(175),
            i = e(270),
            a = e(174);
        t.exports = function (t, n) {
            if (null == t) return {};
            var e = r(a(t), (function (t) {
                return [t]
            }));
            return n = o(n), i(t, e, (function (t, e) {
                return n(t, e[0])
            }))
        }
    }, function (t, n, e) {
        var r = e(45),
            o = e(272),
            i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;
        t.exports = function (t, n) {
            if (r(t)) return !1;
            var e = typeof t;
            return !("number" != e && "symbol" != e && "boolean" != e && null != t && !o(t)) || (a.test(t) || !i.test(t) || null != n && t in Object(n))
        }
    }, function (t, n, e) {
        var r = e(485),
            o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            i = /\\(\\)?/g,
            a = r((function (t) {
                var n = [];
                return 46 === t.charCodeAt(0) && n.push(""), t.replace(o, (function (t, e, r, o) {
                    n.push(r ? o.replace(i, "$1") : e || t)
                })), n
            }));
        t.exports = a
    }, function (t, n) {
        t.exports = function (t) {
            return t
        }
    }, function (t, n, e) {
        var r = e(170),
            o = e(83),
            i = e(273),
            a = e(30),
            u = e(127);
        t.exports = function (t, n, e, s) {
            if (!a(t)) return t;
            for (var c = -1, f = (n = o(n, t)).length, l = f - 1, p = t; null != p && ++c < f;) {
                var h = u(n[c]),
                    d = e;
                if (c != l) {
                    var v = p[h];
                    void 0 === (d = s ? s(v, h, p) : void 0) && (d = a(v) ? v : i(n[c + 1]) ? [] : {})
                }
                r(p, h, d), p = p[h]
            }
            return t
        }
    }, function (t, n, e) {
        var r = e(270),
            o = e(488);
        t.exports = function (t, n) {
            return r(t, n, (function (n, e) {
                return o(t, e)
            }))
        }
    }, function (t, n, e) {
        var r = e(489),
            o = e(490);
        t.exports = function (t, n) {
            return null != t && o(t, n, r)
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return null != t && n in Object(t)
        }
    }, function (t, n, e) {
        var r = e(83),
            o = e(177),
            i = e(45),
            a = e(273),
            u = e(274),
            s = e(127);
        t.exports = function (t, n, e) {
            for (var c = -1, f = (n = r(n, t)).length, l = !1; ++c < f;) {
                var p = s(n[c]);
                if (!(l = null != t && e(t, p))) break;
                t = t[p]
            }
            return l || ++c != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(p, f) && (i(t) || o(t))
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var e = -1, r = n.length, o = t.length; ++e < r;) t[o + e] = n[e];
            return t
        }
    }, function (t, n, e) {
        var r = e(493),
            o = e(177),
            i = e(45),
            a = r ? r.isConcatSpreadable : void 0;
        t.exports = function (t) {
            return i(t) || o(t) || !!(a && t && t[a])
        }
    }, function (t, n, e) {
        var r = e(126).Symbol;
        t.exports = r
    }, function (t, n, e) {
        var r = e(179),
            o = e(180),
            i = e(181),
            a = e(182),
            u = e(495),
            s = e(496);
        t.exports = function (t, n, e) {
            var c = -1,
                f = o,
                l = t.length,
                p = !0,
                h = [],
                d = h;
            if (e) p = !1, f = i;
            else if (l >= 200) {
                var v = n ? null : u(t);
                if (v) return s(v);
                p = !1, f = a, d = new r
            } else d = n ? [] : h;
            t: for (; ++c < l;) {
                var g = t[c],
                    y = n ? n(g) : g;
                if (g = e || 0 !== g ? g : 0, p && y == y) {
                    for (var m = d.length; m--;)
                        if (d[m] === y) continue t;
                    n && d.push(y), h.push(g)
                } else f(d, y, e) || (d !== h && d.push(y), h.push(g))
            }
            return h
        }
    }, function (t, n) {
        t.exports = function () {}
    }, function (t, n) {
        t.exports = function () {
            return []
        }
    }, function (t, n, e) {
        var r = e(179),
            o = e(180),
            i = e(181),
            a = e(71),
            u = e(183),
            s = e(182),
            c = Math.min;
        t.exports = function (t, n, e) {
            for (var f = e ? i : o, l = t[0].length, p = t.length, h = p, d = Array(p), v = 1 / 0, g = []; h--;) {
                var y = t[h];
                h && n && (y = a(y, u(n))), v = c(y.length, v), d[h] = !e && (n || l >= 120 && y.length >= 120) ? new r(h && y) : void 0
            }
            y = t[0];
            var m = -1,
                b = d[0];
            t: for (; ++m < l && g.length < v;) {
                var w = y[m],
                    x = n ? n(w) : w;
                if (w = e || 0 !== w ? w : 0, !(b ? s(b, x) : f(g, x, e))) {
                    for (h = p; --h;) {
                        var O = d[h];
                        if (!(O ? s(O, x) : f(t[h], x, e))) continue t
                    }
                    b && b.push(x), g.push(w)
                }
            }
            return g
        }
    }, function (t, n, e) {
        var r = e(128);
        t.exports = function (t) {
            return r(t) ? t : []
        }
    }, function (t, n, e) {
        var r = e(63),
            o = e(274);
        t.exports = function (t) {
            return null != t && o(t.length) && !r(t)
        }
    }, function (t, n, e) {
        var r = e(83),
            o = e(501),
            i = e(502),
            a = e(127);
        t.exports = function (t, n) {
            return n = r(n, t), null == (t = i(t, n)) || delete t[a(o(n))]
        }
    }, function (t, n) {
        t.exports = function (t) {
            var n = null == t ? 0 : t.length;
            return n ? t[n - 1] : void 0
        }
    }, function (t, n, e) {
        var r = e(271),
            o = e(503);
        t.exports = function (t, n) {
            return n.length < 2 ? t : r(t, o(n, 0, -1))
        }
    }, function (t, n) {
        t.exports = function (t, n, e) {
            var r = -1,
                o = t.length;
            n < 0 && (n = -n > o ? 0 : o + n), (e = e > o ? o : e) < 0 && (e += o), o = n > e ? 0 : e - n >>> 0, n >>>= 0;
            for (var i = Array(o); ++r < o;) i[r] = t[r + n];
            return i
        }
    }, function (t, n, e) {
        var r = e(72);
        t.exports = function (t) {
            return r(t) ? void 0 : t
        }
    }, function (t, n, e) {
        var r = e(71),
            o = e(175),
            i = e(506),
            a = e(507),
            u = e(183),
            s = e(508),
            c = e(184);
        t.exports = function (t, n, e) {
            var f = -1;
            n = r(n.length ? n : [c], u(o));
            var l = i(t, (function (t, e, o) {
                return {
                    criteria: r(n, (function (n) {
                        return n(t)
                    })),
                    index: ++f,
                    value: t
                }
            }));
            return a(l, (function (t, n) {
                return s(t, n, e)
            }))
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var e = -1, r = null == t ? 0 : t.length, o = Array(r); ++e < r;) o[e] = n(t[e], e, t);
            return o
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            var e = t.length;
            for (t.sort(n); e--;) t[e] = t[e].value;
            return t
        }
    }, function (t, n, e) {
        var r = e(509);
        t.exports = function (t, n, e) {
            for (var o = -1, i = t.criteria, a = n.criteria, u = i.length, s = e.length; ++o < u;) {
                var c = r(i[o], a[o]);
                if (c) return o >= s ? c : c * ("desc" == e[o] ? -1 : 1)
            }
            return t.index - n.index
        }
    }, function (t, n, e) {
        var r = e(272);
        t.exports = function (t, n) {
            if (t !== n) {
                var e = void 0 !== t,
                    o = null === t,
                    i = t == t,
                    a = r(t),
                    u = void 0 !== n,
                    s = null === n,
                    c = n == n,
                    f = r(n);
                if (!s && !f && !a && t > n || a && u && c && !s && !f || o && u && c || !e && c || !i) return 1;
                if (!o && !a && !f && t < n || f && e && i && !o && !a || s && e && i || !u && i || !c) return -1
            }
            return 0
        }
    }, function (t, n) {
        ! function () {
            "use strict";
            if (self.document) {
                var t = KeyboardEvent.prototype,
                    n = Object.getOwnPropertyDescriptor(t, "key");
                if (n) {
                    var e = {
                        Win: "Meta",
                        Scroll: "ScrollLock",
                        Spacebar: " ",
                        Down: "ArrowDown",
                        Left: "ArrowLeft",
                        Right: "ArrowRight",
                        Up: "ArrowUp",
                        Del: "Delete",
                        Apps: "ContextMenu",
                        Esc: "Escape",
                        Multiply: "*",
                        Add: "+",
                        Subtract: "-",
                        Decimal: ".",
                        Divide: "/"
                    };
                    Object.defineProperty(t, "key", {
                        get: function () {
                            var t = n.get.call(this);
                            return e.hasOwnProperty(t) ? e[t] : t
                        }
                    })
                }
            }
        }()
    }, function (t, n, e) {
        var r = e(263),
            o = e(282),
            i = e(512),
            a = e(514),
            u = e(30),
            s = e(125),
            c = e(283);
        t.exports = function t(n, e, f, l, p) {
            n !== e && i(e, (function (i, s) {
                if (p || (p = new r), u(i)) a(n, e, s, f, t, l, p);
                else {
                    var h = l ? l(c(n, s), i, s + "", n, e, p) : void 0;
                    void 0 === h && (h = i), o(n, s, h)
                }
            }), s)
        }
    }, function (t, n, e) {
        var r = e(513)();
        t.exports = r
    }, function (t, n) {
        t.exports = function (t) {
            return function (n, e, r) {
                for (var o = -1, i = Object(n), a = r(n), u = a.length; u--;) {
                    var s = a[t ? u : ++o];
                    if (!1 === e(i[s], s, i)) break
                }
                return n
            }
        }
    }, function (t, n, e) {
        var r = e(282),
            o = e(264),
            i = e(515),
            a = e(266),
            u = e(267),
            s = e(177),
            c = e(45),
            f = e(128),
            l = e(269),
            p = e(63),
            h = e(30),
            d = e(72),
            v = e(518),
            g = e(283),
            y = e(519);
        t.exports = function (t, n, e, m, b, w, x) {
            var O = g(t, e),
                S = g(n, e),
                j = x.get(S);
            if (j) r(t, e, j);
            else {
                var E = w ? w(O, S, e + "", t, n, x) : void 0,
                    A = void 0 === E;
                if (A) {
                    var k = c(S),
                        T = !k && l(S),
                        P = !k && !T && v(S);
                    E = S, k || T || P ? c(O) ? E = O : f(O) ? E = a(O) : T ? (A = !1, E = o(S, !0)) : P ? (A = !1, E = i(S, !0)) : E = [] : d(S) || s(S) ? (E = O, s(O) ? E = y(O) : h(O) && !p(O) || (E = u(S))) : A = !1
                }
                A && (x.set(S, E), b(E, S, m, w, x), x.delete(S)), r(t, e, E)
            }
        }
    }, function (t, n, e) {
        var r = e(516);
        t.exports = function (t, n) {
            var e = n ? r(t.buffer) : t.buffer;
            return new t.constructor(e, t.byteOffset, t.length)
        }
    }, function (t, n, e) {
        var r = e(517);
        t.exports = function (t) {
            var n = new t.constructor(t.byteLength);
            return new r(n).set(new r(t)), n
        }
    }, function (t, n, e) {
        var r = e(126).Uint8Array;
        t.exports = r
    }, function (t, n) {
        t.exports = function () {
            return !1
        }
    }, function (t, n, e) {
        var r = e(70),
            o = e(125);
        t.exports = function (t) {
            return r(t, o(t))
        }
    }, function (t, n, e) {
        var r = e(521),
            o = e(131),
            i = e(522);
        t.exports = function (t) {
            return function (n, e, a) {
                return a && "number" != typeof a && o(n, e, a) && (e = a = void 0), n = i(n), void 0 === e ? (e = n, n = 0) : e = i(e), a = void 0 === a ? n < e ? 1 : -1 : i(a), r(n, e, a, t)
            }
        }
    }, function (t, n) {
        var e = Math.ceil,
            r = Math.max;
        t.exports = function (t, n, o, i) {
            for (var a = -1, u = r(e((n - t) / (o || 1)), 0), s = Array(u); u--;) s[i ? u : ++a] = t, t += o;
            return s
        }
    }, function (t, n) {
        t.exports = function (t) {
            return t
        }
    }, function (t, n) {
        t.exports = function (t, n, e) {
            return t == t && (void 0 !== e && (t = t <= e ? t : e), void 0 !== n && (t = t >= n ? t : n)), t
        }
    }, function (t, n, e) {
        var r = e(70),
            o = e(284),
            i = e(125),
            a = o((function (t, n, e, o) {
                r(n, i(n), t, o)
            }));
        t.exports = a
    }, function (t, n, e) {
        var r = e(277),
            o = e(84),
            i = e(286),
            a = o((function (t, n) {
                try {
                    return r(t, void 0, n)
                } catch (t) {
                    return i(t) ? t : new Error(t)
                }
            }));
        t.exports = a
    }, function (t, n, e) {
        var r = e(71);
        t.exports = function (t, n) {
            return r(n, (function (n) {
                return t[n]
            }))
        }
    }, function (t, n, e) {
        var r = e(124),
            o = Object.prototype,
            i = o.hasOwnProperty;
        t.exports = function (t, n, e, a) {
            return void 0 === t || r(t, o[e]) && !i.call(a, e) ? n : t
        }
    }, function (t, n) {
        var e = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        };
        t.exports = function (t) {
            return "\\" + e[t]
        }
    }, function (t, n, e) {
        var r = e(530),
            o = {
                escape: e(533),
                evaluate: e(534),
                interpolate: e(287),
                variable: "",
                imports: {
                    _: {
                        escape: r
                    }
                }
            };
        t.exports = o
    }, function (t, n, e) {
        var r = e(531),
            o = e(176),
            i = /[&<>"']/g,
            a = RegExp(i.source);
        t.exports = function (t) {
            return (t = o(t)) && a.test(t) ? t.replace(i, r) : t
        }
    }, function (t, n, e) {
        var r = e(532)({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        });
        t.exports = r
    }, function (t, n) {
        t.exports = function (t) {
            return function (n) {
                return null == t ? void 0 : t[n]
            }
        }
    }, function (t, n) {
        t.exports = /<%-([\s\S]+?)%>/g
    }, function (t, n) {
        t.exports = /<%([\s\S]+?)%>/g
    }, function (t, n, e) {
        var r = e(536);
        t.exports = function (t, n) {
            var e = null == t ? 0 : t.length;
            return e ? r(t, n) / e : NaN
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var e, r = -1, o = t.length; ++r < o;) {
                var i = n(t[r]);
                void 0 !== i && (e = void 0 === e ? i : e + i)
            }
            return e
        }
    }, function (t, n, e) {
        var r = e(30),
            o = e(538),
            i = e(285),
            a = Math.max,
            u = Math.min;
        t.exports = function (t, n, e) {
            var s, c, f, l, p, h, d = 0,
                v = !1,
                g = !1,
                y = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");

            function m(n) {
                var e = s,
                    r = c;
                return s = c = void 0, d = n, l = t.apply(r, e)
            }

            function b(t) {
                return d = t, p = setTimeout(x, n), v ? m(t) : l
            }

            function w(t) {
                var e = t - h;
                return void 0 === h || e >= n || e < 0 || g && t - d >= f
            }

            function x() {
                var t = o();
                if (w(t)) return O(t);
                p = setTimeout(x, function (t) {
                    var e = n - (t - h);
                    return g ? u(e, f - (t - d)) : e
                }(t))
            }

            function O(t) {
                return p = void 0, y && s ? m(t) : (s = c = void 0, l)
            }

            function S() {
                var t = o(),
                    e = w(t);
                if (s = arguments, c = this, h = t, e) {
                    if (void 0 === p) return b(h);
                    if (g) return clearTimeout(p), p = setTimeout(x, n), m(h)
                }
                return void 0 === p && (p = setTimeout(x, n)), l
            }
            return n = i(n) || 0, r(e) && (v = !!e.leading, f = (g = "maxWait" in e) ? a(i(e.maxWait) || 0, n) : f, y = "trailing" in e ? !!e.trailing : y), S.cancel = function () {
                void 0 !== p && clearTimeout(p), d = 0, s = h = c = p = void 0
            }, S.flush = function () {
                return void 0 === p ? l : O(o())
            }, S
        }
    }, function (t, n, e) {
        var r = e(126);
        t.exports = function () {
            return r.Date.now()
        }
    }, function (t, n, e) {
        "use strict";
        e.r(n);
        e(305), e(15), e(19), e(20), e(16), e(36), e(22), e(33), e(77), e(9), e(78), e(18), e(61), e(99), e(74), e(144), e(43), e(49), e(35), e(59), e(11), e(39), e(166), e(167), e(168), e(44), e(26), e(229), e(101), e(12), e(69), e(23), e(13);
        var r = e(288),
            o = e.n(r),
            i = e(289),
            a = e.n(i),
            u = (e(68), e(214), e(211), e(80), e(158), e(290)),
            s = e.n(u),
            c = e(132),
            f = e.n(c),
            l = e(291),
            p = e.n(l),
            h = e(292),
            d = e.n(h),
            v = e(293),
            g = e.n(v),
            y = e(103),
            m = e.n(y),
            b = e(85),
            w = e.n(b),
            x = e(30),
            O = e.n(x),
            S = e(294),
            j = e(63),
            E = e.n(j),
            A = e(295),
            k = e.n(A);

        function T(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var P = function () {
            function t(n) {
                ! function (t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.plugins = [], this.context = n
            }
            return function (t, n, e) {
                n && T(t.prototype, n), e && T(t, e)
            }(t, [{
                key: "add",
                value: function (t) {
                    this.plugins.push(t), t.handle(this.context, "plugin:init")
                }
            }, {
                key: "remove",
                value: function (t) {
                    t.handle(this.context, "plugin:removal"), this.plugins = k()(this.plugins, t)
                }
            }, {
                key: "trigger",
                value: function (t) {
                    for (var n = this, e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) r[o - 1] = arguments[o];
                    return Promise.all(this.plugins.map((function (e) {
                        return e.handle.apply(e, [n.context, t].concat(r))
                    })))
                }
            }]), t
        }();

        function R(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? Object(arguments[n]) : {},
                    r = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })))), r.forEach((function (n) {
                    _(t, n, e[n])
                }))
            }
            return t
        }

        function _(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }

        function M(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function I(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var C = function () {
            function t() {
                var n = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                M(this, t), this.internals = {
                    callbacks: {},
                    rawOptions: R({
                        debug: !1,
                        plugins: []
                    }, e),
                    parsedOptions: {}
                }, this.plugins = new P(this), this.internals.rawOptions.plugins.map((function (t) {
                    return n.plugins.add(t)
                }))
            }
            return function (t, n, e) {
                n && I(t.prototype, n), e && I(t, e)
            }(t, [{
                key: "on",
                value: function (t, n) {
                    return n.displayName = n.displayName || "".concat(t, " handler on ").concat(this.internals.rawOptions.title), this.internals.callbacks["$".concat(t)] = this.internals.callbacks["$".concat(t)] || [], this.internals.callbacks["$".concat(t)].push(n), this
                }
            }, {
                key: "off",
                value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return null === n ? delete this.internals.callbacks["$".concat(t)] : this.internals.callbacks["$".concat(t)] = this.internals.callbacks["$".concat(t)].filter((function (t) {
                        return t !== n
                    })), this
                }
            }, {
                key: "once",
                value: function (t, n) {
                    function e() {
                        this.off(t, e);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return n.apply(this, o)
                    }
                    return e.fn = n, this.on(t, e), this
                }
            }, {
                key: "waitFor",
                value: function (t) {
                    var n = this;
                    return new Promise((function (e) {
                        return n.on(t, e)
                    }))
                }
            }, {
                key: "trigger",
                value: async function (t) {
                    for (var n, e = this, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                    var a = this.internals.callbacks["$".concat(t)];
                    if (a) try {
                        await Promise.all(a.map((function (t) {
                            return t.apply(e, o)
                        })))
                    } catch (n) {
                        throw console.error("%cError in ".concat(this.internals.rawOptions.title, "%c ") + "during event ".concat(t, "%c: ").concat(n), "font-weight: bold", "font-weight: normal", "font-weight: normal; opacity: 0.5"), n
                    }
                    return await (n = this.plugins).trigger.apply(n, [t].concat(o)), this
                }
            }, {
                key: "triggerMethod",
                value: async function (t) {
                    for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r];
                    this.internals.rawOptions.debug && (console.info("%c".concat(this.internals.rawOptions.title, "%c (").concat(this.type, ") → ") + "Event %c".concat(t, "%c · arguments [").concat(e, "]"), "font-weight: bold", "font-weight: normal", "font-weight: bold", "font-weight: normal; opacity: 0.5"), console.time("".concat(t, " on ").concat(this.internals.rawOptions.title) + "(".concat(this.internals.rawOptions.id, ")")));
                    var o = /(^|:)(\w)/gi;

                    function i(t, n, e) {
                        return e.toUpperCase()
                    }
                    var a, u = "on".concat(t.replace(o, i)),
                        s = this[u];
                    return E()(s) && (a = await s.apply(this, e)), await this.trigger.apply(this, [t].concat(e)), this.internals.rawOptions.debug && console.timeEnd("".concat(t, " on ").concat(this.internals.rawOptions.title) + "(".concat(this.internals.rawOptions.id, ")")), a
                }
            }]), t
        }();
        e(207), e(226);

        function F(t, n) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, n) {
                if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
                var e = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return e
            }(t, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function N(t, n) {
            if (null == t) return {};
            var e, r, o = function (t, n) {
                if (null == t) return {};
                var e, r, o = {},
                    i = Object.keys(t);
                for (r = 0; r < i.length; r++) e = i[r], n.indexOf(e) >= 0 || (o[e] = t[e]);
                return o
            }(t, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++) e = i[r], n.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e])
            }
            return o
        }
        var L = function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    e = n.retry,
                    r = (e = void 0 === e ? {} : e).times,
                    o = void 0 === r ? 3 : r,
                    i = e.delay,
                    a = void 0 === i ? 10 : i,
                    u = e.factor,
                    s = void 0 === u ? 5 : u,
                    c = N(n, ["retry"]);
                return new Promise((function (n, e) {
                    var r = function (r) {
                            return window.fetch(t, c).then((function (t) {
                                return n(t)
                            })).catch((function (t) {
                                r <= o ? i(r) : e(t)
                            }))
                        },
                        i = function (t) {
                            var n = a * Math.pow(s, t);
                            setTimeout((function () {
                                return r(++t)
                            }), n)
                        };
                    r(0)
                }))
            },
            D = function (t, n) {
                var e, r, o, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = i.throttle,
                    u = void 0 === a || a,
                    s = [],
                    c = !1,
                    f = !1,
                    l = function () {
                        if (c && u) f = !0;
                        else {
                            var n = s;
                            s = [], e = null, c = !0, Promise.resolve(t.apply(o, r)).then((function (t) {
                                var e = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (var i, a = n[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                                        var u = F(i.value, 2),
                                            s = u[0];
                                        u[1];
                                        s(t)
                                    }
                                } catch (t) {
                                    r = !0, o = t
                                } finally {
                                    try {
                                        e || null == a.return || a.return()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                            })).catch((function (t) {
                                var e = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (var i, a = n[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                                        var u = F(i.value, 2);
                                        u[0];
                                        (0, u[1])(t)
                                    }
                                } catch (t) {
                                    r = !0, o = t
                                } finally {
                                    try {
                                        e || null == a.return || a.return()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                            })).finally((function () {
                                f && null === e && p(), c = f = !1
                            }))
                        }
                    },
                    p = function () {
                        clearTimeout(e), s.length > 0 && l()
                    },
                    h = function () {
                        clearTimeout(e), e = null, f = !1, r = o = void 0, s = []
                    },
                    d = function () {
                        var t = arguments,
                            i = this;
                        return new Promise((function (a, u) {
                            r = t, o = i, clearTimeout(e), e = setTimeout(l, n), s.push([a, u])
                        }))
                    };
                return d.flush = p, d.cancel = h, d
            };

        function U(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? Object(arguments[n]) : {},
                    r = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })))), r.forEach((function (n) {
                    Y(t, n, e[n])
                }))
            }
            return t
        }

        function q(t) {
            return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function B(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function z(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function V(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function W(t, n) {
            return !n || "object" !== q(n) && "function" != typeof n ? $(t) : n
        }

        function H(t) {
            return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function $(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function G(t, n) {
            return (G = Object.setPrototypeOf || function (t, n) {
                return t.__proto__ = n, t
            })(t, n)
        }

        function Y(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }
        var J = ["id", "participant", "participant_id"],
            K = [].concat(J, ["sender", "sender_type", "sender_id", "timestamp", "meta"]),
            X = function (t) {
                return O()(t) && (t = JSON.stringify(t)), "string" == typeof t && (t = t.replace(/"/g, '""'), /[,"\n]+/.test(t) && (t = '"'.concat(t, '"'))), t
            },
            Q = function (t) {
                return t.toString().padStart(2, "0")
            },
            Z = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                return "".concat(t.getFullYear(), "-") + "".concat(Q((t.getMonth() + 1).toString()), "-") + "".concat(Q(t.getDate().toString()), "--") + "".concat(t.toTimeString().split(" ")[0])
            },
            tt = function (t) {
                return t.map((function (t) {
                    return s()(t, (function (t, n) {
                        return n.startsWith("_")
                    }))
                }))
            },
            nt = function (t) {
                function n() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    z(this, n), Y($(t = W(this, H(n).call(this, e))), "stateProxy", new window.Proxy({}, {
                        get: function (n, e) {
                            return t.get(e)
                        },
                        set: function (n, e, r) {
                            return t.set(e, r) || !0
                        },
                        has: function (n, e) {
                            return Reflect.has(t.state, e)
                        },
                        ownKeys: function () {
                            return Reflect.ownKeys(t.state)
                        },
                        getOwnPropertyDescriptor: function (n, e) {
                            return Reflect.getOwnPropertyDescriptor(t.state, e)
                        }
                    })), Y($(t), "_debouncedTransmit", D(t.transmit, 2500)), Y($(t), "_lastIncrementalTransmission", 0), "session" === e.persistence ? t.storage = sessionStorage : "local" === e.persistence ? t.storage = localStorage : t.storage = null, e.clearPersistence && t.clear();
                    var r = !0;
                    if (t.storage) {
                        var o = t.storage.getItem("lab.js-data");
                        if (o) try {
                            t.data = JSON.parse(o), t.state = Object.assign.apply(Object, [{}].concat(B(t.data))), K.forEach((function (n) {
                                Object.hasOwnProperty.call(t.state, n) && delete t.state[n]
                            })), r = !1
                        } catch (t) {
                            r = !0
                        }
                    }
                    return r && (t.data = [], t.state = {}), t.staging = {}, t
                }
                return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), n && G(t, n)
                    }(n, t),
                    function (t, n, e) {
                        n && V(t.prototype, n), e && V(t, e)
                    }(n, [{
                        key: "set",
                        value: function (t, n) {
                            var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                r = {};
                            "object" === q(t) ? r = t : r[t] = n, this.state = Object.assign(this.state, r), this.staging = Object.assign(this.staging, r), e || this.triggerMethod("set")
                        }
                    }, {
                        key: "get",
                        value: function (t) {
                            return this.state[t]
                        }
                    }, {
                        key: "commit",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            this.set(t, n, !0);
                            var e = this.data.push(w()(this.staging)) - 1;
                            return this.storage && this.storage.setItem("lab.js-data", JSON.stringify(this.data)), this.triggerMethod("commit"), this.staging = {}, e
                        }
                    }, {
                        key: "update",
                        value: function (t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (t) {
                                return t
                            };
                            this.data[t] = n(this.data[t] || {}), this.triggerMethod("update")
                        }
                    }, {
                        key: "clear",
                        value: function () {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.triggerMethod("clear"), t && this.storage && this.storage.clear(), n && (this.data = [], this.staging = {}, this.state = {})
                        }
                    }, {
                        key: "keys",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K,
                                e = this.data.map((function (t) {
                                    return Object.keys(t)
                                }));
                            t && e.push(Object.keys(this.state)), e = m()(e), e.sort(), e = p()(e, !0).sort();
                            var r = d()(n, e),
                                o = g()(e, r);
                            return r.concat(o)
                        }
                    }, {
                        key: "extract",
                        value: function (t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RegExp(".*"),
                                e = "string" == typeof n ? RegExp("^".concat(n, "$")) : n;
                            return this.data.filter((function (t) {
                                return e.test(t.sender)
                            })).map((function (n) {
                                return n[t]
                            }))
                        }
                    }, {
                        key: "select",
                        value: function (t) {
                            var n, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RegExp(".*");
                            if (n = "function" == typeof t ? this.keys().filter(t) : "string" == typeof t ? [t] : t, !Array.isArray(n)) throw new Error("The input parameter should be either an array of strings, a string, or a filter function.");
                            var r = "string" == typeof e ? RegExp("^".concat(e, "$")) : e;
                            return this.data.filter((function (t) {
                                return r.test(t.sender)
                            })).map((function (t) {
                                return f()(t, n)
                            }))
                        }
                    }, {
                        key: "exportJson",
                        value: function () {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                n = t ? this.cleanData : this.data;
                            return JSON.stringify(n)
                        }
                    }, {
                        key: "exportJsonL",
                        value: function () {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                n = t ? this.cleanData : this.data;
                            return n.map((function (t) {
                                return JSON.stringify(t)
                            })).join("\n")
                        }
                    }, {
                        key: "exportCsv",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ",",
                                n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                e = n ? this.cleanData : this.data,
                                r = this.keys().filter((function (t) {
                                    return !n || !t.startsWith("_")
                                })),
                                o = e.map((function (n) {
                                    return r.map((function (t) {
                                        return Object.hasOwnProperty.call(n, t) ? n[t] : null
                                    })).map(X).join(t)
                                }));
                            return o.unshift(r.join(t)), o.join("\r\n")
                        }
                    }, {
                        key: "exportBlob",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "csv",
                                n = "";
                            return n = "json" === t ? this.exportJson() : this.exportCsv(), new Blob([n], {
                                type: "octet/stream"
                            })
                        }
                    }, {
                        key: "makeFilename",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "study",
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "csv",
                                e = this.id;
                            return t + "--" + (e ? "".concat(e, "--") : "") + Z() + (n ? ".".concat(n) : "")
                        }
                    }, {
                        key: "download",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "csv",
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "data.csv";
                            return Object(S.saveAs)(this.exportBlob(t), n)
                        }
                    }, {
                        key: "show",
                        value: function () {
                            return console.table(this.data, this.keys())
                        }
                    }, {
                        key: "transmit",
                        value: function (t) {
                            var n = this,
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                o = r.incremental,
                                i = void 0 !== o && o,
                                a = r.encoding,
                                u = void 0 === a ? "json" : a,
                                s = r.headers,
                                c = void 0 === s ? {} : s,
                                f = r.retry,
                                l = void 0 === f ? {} : f;
                            this.triggerMethod("transmit");
                            var p, h = i ? this._lastIncrementalTransmission : 0,
                                d = this.data.length,
                                v = tt(this.data.slice(h)),
                                g = {};
                            return "form" === u ? ((p = new FormData).append("metadata", JSON.stringify(U({
                                slice: h
                            }, e))), p.append("url", window.location.href), p.append("data", JSON.stringify(v))) : (p = JSON.stringify({
                                metadata: U({
                                    slice: h
                                }, e),
                                url: window.location.href,
                                data: v
                            }), g = {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            }), L(t, {
                                method: "post",
                                headers: U({}, g, c),
                                body: p,
                                credentials: "include",
                                retry: U({
                                    times: i ? 2 : 3
                                }, l)
                            }).then((function (t) {
                                return i && (n._lastIncrementalTransmission = d), t
                            }))
                        }
                    }, {
                        key: "queueIncrementalTransmission",
                        value: function (t, n, e) {
                            return this._debouncedTransmit(t, n, U({
                                incremental: !0
                            }, e))
                        }
                    }, {
                        key: "flushIncrementalTransmissionQueue",
                        value: function () {
                            this._debouncedTransmit.flush()
                        }
                    }, {
                        key: "cancelIncrementalTransmissionQueue",
                        value: function () {
                            this._debouncedTransmit.cancel()
                        }
                    }, {
                        key: "cleanData",
                        get: function () {
                            return tt(this.data)
                        }
                    }, {
                        key: "id",
                        get: function () {
                            var t = !0,
                                n = !1,
                                e = void 0;
                            try {
                                for (var r, o = J[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                                    var i = r.value;
                                    if (Object.keys(this.state).includes(i)) return this.state[i]
                                }
                            } catch (t) {
                                n = !0, e = t
                            } finally {
                                try {
                                    t || null == o.return || o.return()
                                } finally {
                                    if (n) throw e
                                }
                            }
                        }
                    }]), n
            }(C),
            et = e(133),
            rt = e.n(et),
            ot = e(296),
            it = e.n(ot);
        e(94), e(122);

        function at(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? Object(arguments[n]) : {},
                    r = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })))), r.forEach((function (n) {
                    ut(t, n, e[n])
                }))
            }
            return t
        }

        function ut(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }
        var st = e(186),
            ct = e.n(st),
            ft = (new ct.a).getBrowser().name,
            lt = parseInt((new ct.a).getBrowser().version.split(".")[0], 10);

        function pt(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function ht(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function dt(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function vt(t, n, e) {
            return n && dt(t.prototype, n), e && dt(t, e), t
        }
        var gt = {
                frameInterval: 16.68
            },
            yt = "Firefox" === ft && lt < 54,
            mt = function (t) {
                return t && !yt && t < performance.timing.navigationStart ? t : performance.now()
            },
            bt = window.requestIdleCallback ? window.requestIdleCallback : function (t) {
                return window.setTimeout(t)
            },
            wt = function () {
                function t(n, e) {
                    ht(this, t), this.f = n, this.delay = e;
                    for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                    this.params = o, this._running = !1, this._timeoutHandle = null
                }
                return vt(t, [{
                    key: "run",
                    value: function () {
                        var t;
                        this._running ? console.log("Cannot restart previously run timer") : (this._timeoutHandle = (t = window).setTimeout.apply(t, [this.f, this.delay].concat(pt(this.params))), this._running = !0)
                    }
                }, {
                    key: "cancel",
                    value: function () {
                        window.clearTimeout(this._timeoutHandle)
                    }
                }]), t
            }(),
            xt = {
                overshoot: 1,
                closest: 1.5,
                undershoot: 2
            },
            Ot = function () {
                function t(n, e) {
                    ht(this, t), this.delay = e, this.f = n;
                    for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                    this.params = o, this._running = !1, this._timeoutHandle = void 0, this._animationFrameHandle = void 0, this._lastAnimationFrame = void 0, this.targetTime = void 0, this.mode = "closest", this.tick = this.tick.bind(this)
                }
                return vt(t, [{
                    key: "tick",
                    value: function () {
                        var t = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now(),
                            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = n - this._lastAnimationFrame || gt.frameInterval;
                        r < gt.frameInterval && (gt.frameInterval = r);
                        var o = (this.targetTime - n) / r;
                        o <= xt[this.mode] ? this.f.apply(this, [n].concat(pt(this.params))) : this.targetTime - n < 200 ? (this._animationFrameHandle = window.requestAnimationFrame((function (n) {
                            return t.tick(n, !0)
                        })), e && (this._lastAnimationFrame = n)) : this._timeoutHandle = window.setTimeout(this.tick, (this.targetTime - n - 100) / 2)
                    }
                }, {
                    key: "run",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
                        this._running ? console.log("Cannot restart previously run timer") : (this.targetTime = this.targetTime || t + this.delay, this.tick(), this._running = !0)
                    }
                }, {
                    key: "cancel",
                    value: function () {
                        window.clearTimeout(this._timeoutHandle), window.cancelAnimationFrame(this._animationFrameHandle)
                    }
                }]), t
            }();

        function St(t) {
            return (St = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function jt(t, n) {
            return !n || "object" !== St(n) && "function" != typeof n ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : n
        }

        function Et(t, n, e) {
            return (Et = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, n, e) {
                var r = function (t, n) {
                    for (; !Object.prototype.hasOwnProperty.call(t, n) && null !== (t = At(t)););
                    return t
                }(t, n);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, n);
                    return o.get ? o.get.call(e) : o.value
                }
            })(t, n, e || t)
        }

        function At(t) {
            return (At = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function kt(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), n && Tt(t, n)
        }

        function Tt(t, n) {
            return (Tt = Object.setPrototypeOf || function (t, n) {
                return t.__proto__ = n, t
            })(t, n)
        }

        function Pt(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? Object(arguments[n]) : {},
                    r = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })))), r.forEach((function (n) {
                    It(t, n, e[n])
                }))
            }
            return t
        }

        function Rt(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function _t(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function Mt(t, n, e) {
            return n && _t(t.prototype, n), e && _t(t, e), t
        }

        function It(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }

        function Ct(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Ft(t, n) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, n) {
                if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
                var e = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return e
            }(t, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var Nt = async function (t, n, e) {
            var r = await fetch(t, e);
            if (!r.ok) throw new Error("Couldn't load audio from ".concat(r.url));
            var o = await r.arrayBuffer();
            try {
                var i = await
                function (t, n) {
                    return new Promise((function (e, r) {
                        t.decodeAudioData(n, e, r)
                    }))
                }(n, o);
                if (!i) throw new Error("No data available after decoding ".concat(t));
                return i
            } catch (n) {
                throw new Error("Error decoding audio data from ".concat(t))
            }
        }, Lt = function (t, n) {
            var e, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            switch (t) {
                case "oscillator":
                    e = n.createOscillator();
                    break;
                case "bufferSource":
                    e = n.createBufferSource();
                    break;
                default:
                    throw new Error("Can't create node of unknown type")
            }
            return Object.entries(r).forEach((function (t) {
                var n = Ft(t, 2),
                    r = n[0],
                    o = n[1];
                o && (e[r] = o)
            })), Object.entries(o).forEach((function (t) {
                var n = Ft(t, 2),
                    r = n[0],
                    o = n[1];
                o && (e[r].value = o)
            })), e
        }, Dt = function () {
            function t(n) {
                var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Rt(this, t), It(this, "defaultPayload", {
                    panningModel: "equalpower"
                }), this.timeline = n, this.options = r, this.payload = Pt({}, this.defaultPayload, o, {
                    gain: null !== (e = o.gain) && void 0 !== e ? e : 1
                }), this.processingChain = [], this.nodeOrder = {}
            }
            return Mt(t, [{
                key: "setAudioOrigin",
                value: function () {
                    this.audioSyncOrigin = function (t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return n && "getOutputTimestamp" in t ? at({}, t.getOutputTimestamp(), {
                            baseLatency: t.baseLatency || 0
                        }) : {
                            contextTime: t.currentTime,
                            performanceTime: performance.now(),
                            baseLatency: t.baseLatency || 0
                        }
                    }(this.timeline.controller.audioContext)
                }
            }, {
                key: "schedule",
                value: function (t) {
                    return function (t, n) {
                        var e = n.contextTime;
                        return (t - n.performanceTime) / 1e3 + e - n.baseLatency
                    }(t, this.audioSyncOrigin)
                }
            }, {
                key: "prepare",
                value: function () {
                    var t = this.timeline.controller.audioContext;
                    if ("number" == typeof this.payload.gain && 1 !== this.payload.gain || this.payload.rampUp && 0 !== this.payload.rampUp || this.payload.rampDown && 0 !== this.payload.rampDown) {
                        var n = t.createGain();
                        n.gain.value = this.payload.rampUp ? Math.pow(10, -10) : this.payload.gain, this.nodeOrder.gain = this.processingChain.push(n) - 1
                    }
                    if (this.payload.pan && 0 !== this.payload.pan) {
                        var e = t.createPanner();
                        e.panningModel = this.payload.panningModel, e.setPosition(this.payload.pan, 0, 1 - Math.abs(this.payload.pan)), this.processingChain.push(e)
                    }! function (t, n, e) {
                        [t].concat(Ct(n), [e]).reduce((function (t, n) {
                            return t.connect(n), n
                        }))
                    }(this.source, this.processingChain, t.destination)
                }
            }, {
                key: "start",
                value: function (t) {
                    var n = this.options.start,
                        e = this.payload.rampUp,
                        r = this.timeline.controller.audioContext;
                    "running" !== r.state && console.warn("Sending audio to a context in ".concat(r.state, " state."), "This may result in missing sounds —", "Please make sure that users interact with the page", "before using audio."), this.setAudioOrigin();
                    var o = Math.max(0, this.schedule(t + n));
                    if (e) {
                        var i = this.processingChain[this.nodeOrder.gain].gain,
                            a = this.schedule(t + n + parseFloat(e));
                        i.setValueAtTime(Math.pow(10, -10), o), i.exponentialRampToValueAtTime(this.payload.gain, a)
                    }
                    this.source.start(o)
                }
            }, {
                key: "afterStart",
                value: function (t) {
                    var n = this.options.stop,
                        e = this.payload.rampDown;
                    if (n && e) {
                        var r = this.processingChain[this.nodeOrder.gain].gain,
                            o = this.schedule(t + n - parseFloat(e)),
                            i = this.schedule(t + n);
                        r.setValueAtTime(this.payload.gain, o), r.exponentialRampToValueAtTime(1e-4, i)
                    }
                    if (n) {
                        var a = this.schedule(t + n);
                        this.source.stop(a)
                    }
                }
            }, {
                key: "end",
                value: function (t, n) {
                    var e = this,
                        r = n || !this.options.stop,
                        o = r ? t : this.timeline.offset + this.options.stop;
                    if (r) {
                        var i = this.schedule(t);
                        this.source.stop(i)
                    }
                    window.setTimeout((function () {
                        return bt((function () {
                            return e.teardown()
                        }))
                    }), o - performance.now() + 20)
                }
            }, {
                key: "teardown",
                value: function () {
                    this.source.disconnect(), this.source = void 0, this.processingChain.forEach((function (t) {
                        return t.disconnect()
                    })), this.processingChain = [], this.nodeOrder = {}
                }
            }]), t
        }(), Ut = function (t) {
            function n() {
                return Rt(this, n), jt(this, At(n).apply(this, arguments))
            }
            return kt(n, t), Mt(n, [{
                key: "prepare",
                value: async function () {
                    var t = this.timeline.controller,
                        e = t.cache,
                        r = t.audioContext,
                        o = this.payload,
                        i = o.src,
                        a = o.loop,
                        u = await e.audio.get(i);
                    this.source = Lt("bufferSource", r, {
                        buffer: u,
                        loop: a
                    }), Et(At(n.prototype), "prepare", this).call(this)
                }
            }]), n
        }(Dt), qt = function (t) {
            function n() {
                return Rt(this, n), jt(this, At(n).apply(this, arguments))
            }
            return kt(n, t), Mt(n, [{
                key: "prepare",
                value: function () {
                    var t = this.payload,
                        e = t.type,
                        r = t.frequency,
                        o = t.detune;
                    this.source = Lt("oscillator", this.timeline.controller.audioContext, {
                        type: e
                    }, {
                        frequency: r,
                        detune: o
                    }), Et(At(n.prototype), "prepare", this).call(this)
                }
            }]), n
        }(Dt);

        function Bt(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function zt(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var Vt = function () {
            function t(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Bt(this, t), this.controller = n, this.events = e, this.offset = void 0
            }
            return function (t, n, e) {
                n && zt(t.prototype, n), e && zt(t, e)
            }(t, [{
                key: "prepare",
                value: async function () {
                    var t = this,
                        n = it()(this.events, [function (t) {
                            return t.start
                        }, function (t) {
                            return t.priority
                        }]);
                    return this.items = n.map((function (n) {
                        var e = rt()(n, "payload");
                        switch (n.type) {
                            case "sound":
                                return new Ut(t, e, n.payload);
                            case "oscillator":
                                return new qt(t, e, n.payload);
                            default:
                                console.warn("Unknown event type ".concat(n.type, ", skipping"))
                        }
                    })), await Promise.all(this.items.map((function (t) {
                        return t.prepare()
                    })))
                }
            }, {
                key: "start",
                value: function (t) {
                    var n = this;
                    this.items.forEach((function (n) {
                        return n.start(t)
                    })), this.offset = t, bt((function () {
                        return n.afterStart()
                    }))
                }
            }, {
                key: "afterStart",
                value: function () {
                    var t = this;
                    this.items.forEach((function (n) {
                        return n.afterStart(t.offset)
                    }))
                }
            }, {
                key: "end",
                value: async function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return Promise.all(this.items.map((function (e) {
                        return e.end(t, n)
                    })))
                }
            }, {
                key: "teardown",
                value: async function () {}
            }]), t
        }();
        e(212), e(159), e(510);

        function Wt(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Ht(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function $t(t, n) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, n) {
                if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
                var e = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return e
            }(t, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var Gt = {
                Space: " "
            },
            Yt = function (t) {
                var n = $t(t, 3);
                return {
                    eventName: n[0],
                    filters: n[1],
                    selector: n[2]
                }
            },
            Jt = function () {
                function t(n) {
                    ! function (t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.el = n.el || document, this.events = n.events || {}, this.parsedEvents = [], this.context = n.context || this, this.processEvent = n.processEvent || Yt, this.startTime = -1 / 0
                }
                return function (t, n, e) {
                    n && Ht(t.prototype, n), e && Ht(t, e)
                }(t, [{
                    key: "wrapHandler",
                    value: function (t, n) {
                        return null !== this.context && (t = t.bind(this.context)),
                            function (e) {
                                return n.reduce((function (t, n) {
                                    return t && n(e)
                                }), !0) ? t(e) : null
                            }
                    }
                }, {
                    key: "prepare",
                    value: function () {
                        var t = this;
                        this.parsedEvents = Object.entries(this.events).map((function (n) {
                            var e = $t(n, 2),
                                r = e[0],
                                o = e[1],
                                i = t.processEvent(function (t) {
                                    var n = /^(\w+)\s*([^()]*)$/,
                                        e = /^(\w+)\(([\w\s,]+)\)\s*(.*)$/,
                                        r = null,
                                        o = null,
                                        i = null;
                                    if (n.test(t)) {
                                        var a = $t(n.exec(t), 3);
                                        r = a[1], i = a[2]
                                    } else if (e.test(t)) {
                                        var u = $t(e.exec(t), 4);
                                        r = u[1], o = u[2], i = u[3], o = o.split(",").map((function (t) {
                                            return t.trim()
                                        }))
                                    } else console.log("Can't interpret event string ", t);
                                    return [r, o, i]
                                }(r)),
                                a = i.eventName,
                                u = i.filters,
                                s = i.selector,
                                c = i.moreChecks,
                                f = void 0 === c ? [] : c;
                            return [r, a, s, t.wrapHandler(o, [].concat(Wt(function (t, n) {
                                var e = n.filters,
                                    r = void 0 === e ? [] : e,
                                    o = n.filterRepeat,
                                    i = void 0 === o || o,
                                    a = n.startTime,
                                    u = void 0 === a ? -1 / 0 : a,
                                    s = [];
                                if (s.push((function (t) {
                                        return mt(t.timeStamp) >= u
                                    })), ["keypress", "keydown", "keyup"].includes(t)) {
                                    var c = (r || []).map((function (t) {
                                        return Gt[t] || t
                                    }));
                                    (c.length > 0 || i) && s.push((function (t) {
                                        return !(i && t.repeat || c.length > 0 && !c.includes(t.key))
                                    }))
                                } else if (["click", "mousedown", "mouseup"].includes(t)) {
                                    var f = (r || []).map((function (t) {
                                        return parseInt(t)
                                    }));
                                    f.length > 0 && s.push((function (t) {
                                        return f.includes(t.button)
                                    }))
                                }
                                return s
                            }(a, {
                                filters: u,
                                startTime: t.startTime
                            })), Wt(f)))]
                        }))
                    }
                }, {
                    key: "attach",
                    value: function () {
                        var t = this;
                        this.parsedEvents.forEach((function (n) {
                            var e = $t(n, 4),
                                r = e[1],
                                o = e[2],
                                i = e[3];
                            "" !== o ? Array.from(t.el.querySelectorAll(o)).forEach((function (t) {
                                return t.addEventListener(r, i)
                            })) : document.addEventListener(r, i)
                        }))
                    }
                }, {
                    key: "detach",
                    value: function () {
                        var t = this;
                        this.parsedEvents.forEach((function (n) {
                            var e = $t(n, 4),
                                r = e[1],
                                o = e[2],
                                i = e[3];
                            "" !== o ? Array.from(t.el.querySelectorAll(o)).forEach((function (t) {
                                return t.removeEventListener(r, i)
                            })) : document.removeEventListener(r, i)
                        }))
                    }
                }, {
                    key: "teardown",
                    value: function () {
                        this.parsedEvents = null
                    }
                }]), t
            }(),
            Kt = (e(150), e(232), e(235), e(236), e(237), e(238), e(239), e(240), e(241), e(242), e(243), e(244), e(245), e(246), e(247), e(248), e(249), e(250), e(251), e(252), e(253), e(254), e(255), e(256), e(257), e(258), e(297)),
            Xt = e.n(Kt),
            Qt = e(55),
            Zt = e.n(Qt),
            tn = e(298),
            nn = e.n(tn),
            en = e(299),
            rn = e.n(en),
            on = function (t, n) {
                return function (e) {
                    return function (t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (t, n) {
                            return t === n
                        };
                        if (0 === t.length) return 0;
                        for (var e = 1, r = 1, o = 0; o < t.length; o++) r > e && (e = r), n(t[o], t[o + 1]) ? r++ : r = 1;
                        return e
                    }(e, n) <= t
                }
            },
            an = function (t, n) {
                return function (e) {
                    return function (t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (t) {
                            return t
                        };
                        if (0 !== t.length) {
                            for (var e = {}, r = 1 / 0, o = 0; o < t.length; o++) {
                                var i = t[o],
                                    a = n(i);
                                if (void 0 !== e[a]) {
                                    var u = o - e[a];
                                    r > u && (r = u)
                                }
                                e[a] = o
                            }
                            return r
                        }
                    }(e, n) >= t
                }
            };

        function un(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function sn(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function cn(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var fn = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
                return ("00000000-0000-4000-8000-000000000000".replace(/[08]/g, (function (n) {
                    return (n ^ 16 * t() >> n / 4).toString(16)
                })))
            },
            ln = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 256,
                    n = new Uint8Array(t);
                return (window.crypto || window.msCrypto).getRandomValues(n), String.fromCharCode.apply(null, n)
            },
            pn = function () {
                function Random() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    sn(this, Random), "alea" === t.algorithm ? this.random = rn()(t.seed || ln()) : this.random = Math.random
                }
                return function (t, n, e) {
                    n && cn(t.prototype, n), e && cn(t, e)
                }(Random, [{
                    key: "range",
                    value: function (t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            e = void 0 === n ? 0 : t,
                            r = void 0 === n ? t : n - t;
                        return e + Math.floor(this.random() * r)
                    }
                }, {
                    key: "choice",
                    value: function (t) {
                        return t[this.range(t.length)]
                    }
                }, {
                    key: "sample",
                    value: function (t) {
                        var n = this,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return r ? Array(e).fill(0).map((function () {
                            return n.choice(t)
                        })) : this.shuffle(t).slice(0, nn()(e, t.length))
                    }
                }, {
                    key: "sampleMode",
                    value: function (t, n) {
                        var e = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "draw-shuffle";
                        if (!(Array.isArray(t) && t.length > 0)) throw new Error("Can't sample: Empty input, or not an array");
                        var o = n || t.length,
                            i = Math.floor(o / t.length),
                            a = o % t.length;
                        switch (r) {
                            case "sequential":
                                return [].concat(un(Zt()(i).reduce((function (n) {
                                    return n.concat(t)
                                }), [])), un(t.slice(0, a)));
                            case "draw":
                            case "draw-shuffle":
                                var u = [].concat(un(Zt()(i).reduce((function (n) {
                                    return n.concat(e.shuffle(t))
                                }), [])), un(this.sample(t, a, !1)));
                                return "draw-shuffle" === r && o > t.length ? this.shuffle(u) : u;
                            case "draw-replace":
                                return this.sample(t, o, !0);
                            default:
                                throw new Error("Unknown sample mode, please specify")
                        }
                    }
                }, {
                    key: "shuffle",
                    value: function (t) {
                        for (var n = t.slice(), e = n.length; 0 !== e;) {
                            var r = this.range(e--),
                                o = [n[r], n[e]];
                            n[e] = o[0], n[r] = o[1]
                        }
                        return n
                    }
                }, {
                    key: "constrainedShuffle",
                    value: function (t) {
                        var n, e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Math.pow(10, 4);
                        if (E()(r)) n = r;
                        else {
                            var a = [];
                            r.maxRepSeries && a.push(on(r.maxRepSeries, o.equality)), r.minRepDistance && a.push(an(r.minRepDistance, o.hash)), n = function (t) {
                                return a.reduce((function (n, e) {
                                    return n && e(t)
                                }), !0)
                            }
                        }
                        for (var u = 0; u < i && !n(e = this.shuffle(t)); u++);
                        return e
                    }
                }, {
                    key: "shuffleTable",
                    value: function (t) {
                        var n = this,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            o = e.map((function (n) {
                                return t.map((function (t) {
                                    return f()(t, n)
                                }))
                            })),
                            i = m()(e),
                            a = t.map((function (t) {
                                return rt()(t, i)
                            }));
                        return Xt.a.apply(void 0, un(o.map((function (t) {
                            return {
                                data: n.shuffle(t)
                            }
                        }))).concat([{
                            data: r ? this.shuffle(a) : a
                        }])).data
                    }
                }, {
                    key: "uuid4",
                    value: function () {
                        return fn(this.random)
                    }
                }]), Random
            }(),
            hn = (e(161), e(73)),
            dn = e.n(hn),
            vn = e(300),
            gn = e.n(vn),
            yn = e(72),
            mn = e.n(yn),
            bn = e(45),
            wn = e.n(bn),
            xn = e(301),
            On = e.n(xn);

        function Sn(t, n) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, n) {
                if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
                var e = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return e
            }(t, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function jn(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var En = function (t) {
                return Object.assign.apply(Object, [{}].concat(jn(function (t) {
                    for (var n = [Object.getPrototypeOf(t)]; Object.getPrototypeOf(n[0]);) n.unshift(Object.getPrototypeOf(n[0]));
                    return n
                }(t).map((function (t) {
                    return t.constructor.metadata ? t.constructor.metadata.parsableOptions : void 0
                })))))
            },
            An = function t(n, e, r) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (!r) return n;
                if (!On()(n)) return wn()(n) ? n.map((function (n) {
                    return t(n, e, r.content, o)
                })) : mn()(n) ? dn()(Object.entries(n).map((function (n) {
                    var i, a, u = Sn(n, 2),
                        s = u[0],
                        c = u[1];
                    return [r.keys ? t(s, e, {}, o) : s, t(c, e, (null === (i = r.content) || void 0 === i ? void 0 : i[s]) || (null === (a = r.content) || void 0 === a ? void 0 : a["*"]), o)]
                }))) : n;
                var i = gn()(n, {
                    escape: "",
                    evaluate: ""
                }).call(o, e);
                switch (r.type) {
                    case void 0:
                        return i;
                    case "number":
                        return Number(i);
                    case "boolean":
                        return Boolean("false" !== i.trim());
                    default:
                        throw new Error("Output type ".concat(r.type, " unknown, can't convert option"))
                }
            },
            kn = function (t, n, e, r) {
                return dn()(Object.entries(e).map((function (e) {
                    var o = Sn(e, 2),
                        i = o[0],
                        a = o[1];
                    if (t[i]) {
                        var u = An(t[i], n, a, r);
                        if (u !== t[i]) return [i, u]
                    }
                })).filter((function (t) {
                    return void 0 !== t
                })))
            },
            Tn = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "complete";
                return (new Promise((function (n) {
                    if (document.readyState === t) n();
                    else {
                        document.addEventListener("readystatechange", (function e(r) {
                            r.target.readyState === t && (r.target.removeEventListener("readystatechange", e), n())
                        }))
                    }
                })))
            };
        e(227);

        function Pn(t) {
            return (Pn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Rn(t, n) {
            return !n || "object" !== Pn(n) && "function" != typeof n ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : n
        }

        function _n(t) {
            return (_n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Mn(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), n && In(t, n)
        }

        function In(t, n) {
            return (In = Object.setPrototypeOf || function (t, n) {
                return t.__proto__ = n, t
            })(t, n)
        }

        function Cn(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function Fn(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function Nn(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }
        var Ln = function () {
                function t(n) {
                    Cn(this, t), Nn(this, "cache", new Map), Nn(this, "pending", new Map), this.cachedFunc = n
                }
                return function (t, n, e) {
                    n && Fn(t.prototype, n), e && Fn(t, e)
                }(t, [{
                    key: "get",
                    value: async function (t) {
                        if (this.cache.has(t)) return this.cache.get(t);
                        if (this.pending.has(t)) return await this.pending.get(t);
                        var n = this.cachedFunc(t);
                        this.pending.set(t, n);
                        var e = await n;
                        return this.cache.set(t, e), this.pending.delete(t), e
                    }
                }, {
                    key: "getAll",
                    value: async function (t) {
                        var n = this;
                        return Promise.all(t.map((function (t) {
                            return n.get(t)
                        })))
                    }
                }, {
                    key: "readSync",
                    value: function (t) {
                        if (this.cache.has(t)) return this.cache.get(t);
                        throw Error("Key ".concat(t, " not present in cache"))
                    }
                }]), t
            }(),
            Dn = function (t) {
                return new Promise((function (n, e) {
                    var r = new Image;
                    r.addEventListener("load", (function () {
                        return n(r)
                    })), r.addEventListener("error", (function (t) {
                        return e(t)
                    })), r.src = t
                }))
            },
            Un = function (t) {
                function n() {
                    return Cn(this, n), Rn(this, _n(n).call(this, Dn))
                }
                return Mn(n, t), n
            }(Ln),
            qn = function (t) {
                function n(t) {
                    return Cn(this, n), Rn(this, _n(n).call(this, (function (n) {
                        return Nt(n, t)
                    })))
                }
                return Mn(n, t), n
            }(Ln);

        function Bn(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var zn = function t(n, e) {
                e(n);
                var r = Object.getPrototypeOf(n).constructor.metadata;
                r.nestedComponents && r.nestedComponents.forEach((function (r) {
                    var o = n.options[r];
                    wn()(o) ? o.map((function (n) {
                        return t(n, e)
                    })) : o instanceof ae && t(o, e)
                }))
            },
            Vn = function (t, n, e) {
                var r = w()(e);
                return zn(t, (function (t) {
                    return r = n(r, t)
                })), r
            },
            Wn = function (t, n) {
                return Object.assign.apply(Object, [{}].concat(Bn(t.parents.map((function (t) {
                    return t.options[n] || {}
                }))), [t.options[n]]))
            };

        function Hn(t) {
            return (Hn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function $n(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Gn(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? Object(arguments[n]) : {},
                    r = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })))), r.forEach((function (n) {
                    Zn(t, n, e[n])
                }))
            }
            return t
        }

        function Yn(t, n) {
            return !n || "object" !== Hn(n) && "function" != typeof n ? Kn(t) : n
        }

        function Jn(t) {
            return (Jn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Kn(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function Xn(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), n && Qn(t, n)
        }

        function Qn(t, n) {
            return (Qn = Object.setPrototypeOf || function (t, n) {
                return t.__proto__ = n, t
            })(t, n)
        }

        function Zn(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }

        function te(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function ne(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function ee(t, n, e) {
            return n && ne(t.prototype, n), e && ne(t, e), t
        }
        var re = Object.freeze({
                initialized: 0,
                prepared: 1,
                running: 2,
                done: 3
            }),
            oe = ["debug", "el"],
            ie = function () {
                function t() {
                    te(this, t), this.datastore = new nt, this.audioContext = new(window.AudioContext || window.webkitAudioContext), this.cache = {
                        images: new Un,
                        audio: new qn(this.audioContext)
                    }, this.domConnection = new Jt({
                        el: document,
                        context: this
                    }), this.domConnection.events = {
                        keydown: this.indicateInteraction,
                        mousedown: this.indicateInteraction,
                        touchstart: this.indicateInteraction
                    }, this.domConnection.prepare(), this.domConnection.attach()
                }
                return ee(t, [{
                    key: "indicateInteraction",
                    value: async function () {
                        "suspended" === this.audioContext.state && await this.audioContext.resume(), this.domConnection.detach()
                    }
                }]), t
            }(),
            ae = function (t) {
                function Component() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return te(this, Component), Zn(Kn(t = Yn(this, Jn(Component).call(this, Gn({
                        events: {},
                        messageHandlers: {},
                        timeline: [],
                        el: null,
                        controller: null,
                        title: null,
                        id: null,
                        tardy: !1,
                        skip: !1,
                        scrollTop: !1,
                        parent: null,
                        parameters: {},
                        responses: {},
                        correctResponse: null,
                        data: {},
                        datacommit: null,
                        random: {},
                        timeout: null,
                        handMeDowns: [].concat(oe)
                    }, n, {
                        media: Gn({
                            images: [],
                            audio: []
                        }, n.media),
                        files: Gn({}, n.files),
                        timing: Gn({
                            method: "frames"
                        }, n.timing)
                    })))), "status", re.initialized), Zn(Kn(t), "data", {}), Zn(Kn(t), "internals", Gn({
                        timestamps: {}
                    }, t.internals)), Zn(Kn(t), "parameters", new window.Proxy({}, {
                        get: function (n, e) {
                            return t.aggregateParameters[e]
                        },
                        set: function (n, e, r) {
                            return (t.options.parameters[e] = r) || !0
                        },
                        has: function (n, e) {
                            return Reflect.has(t.aggregateParameters, e)
                        },
                        ownKeys: function (n, e) {
                            return Reflect.ownKeys(t.aggregateParameters)
                        },
                        getOwnPropertyDescriptor: function (n, e) {
                            return Reflect.getOwnPropertyDescriptor(t.aggregateParameters, e)
                        }
                    })), Zn(Kn(t), "state", new window.Proxy({}, {
                        get: function (n, e) {
                            if (t.options.datastore) return t.options.datastore.state[e];
                            throw new Error("No datastore to read state from")
                        },
                        set: function (n, e, r) {
                            if (t.options.datastore) return t.options.datastore.set(e, r), !0;
                            throw new Error("No datastore to save state to")
                        },
                        has: function (n, e) {
                            if (t.options.datastore) return Reflect.has(t.options.datastore.state, e);
                            throw new Error("No datastore to read state from")
                        },
                        ownKeys: function (n) {
                            if (t.options.datastore) return Reflect.ownKeys(t.options.datastore.state);
                            throw new Error("No datastore to read state from")
                        },
                        getOwnPropertyDescriptor: function (n, e) {
                            if (t.options.datastore) return Reflect.getOwnPropertyDescriptor(t.options.datastore.state, e);
                            throw new Error("No datastore to read state from")
                        }
                    })), Zn(Kn(t), "files", new window.Proxy({}, {
                        get: function (n, e) {
                            return t._aggregateFiles[e]
                        },
                        set: function (n, e, r) {
                            return (t.options.files[e] = r) || !0
                        },
                        has: function (n, e) {
                            return Reflect.has(t._aggregateFiles, e)
                        },
                        ownKeys: function (n, e) {
                            return Reflect.ownKeys(t._aggregateFiles)
                        },
                        getOwnPropertyDescriptor: function (n, e) {
                            return Reflect.getOwnPropertyDescriptor(t._aggregateFiles, e)
                        }
                    })), t.internals.parsedOptions = Object.create(t.internals.rawOptions), t.options = new a.a(t.internals.rawOptions, {
                        get: function (n, e) {
                            return t.internals.parsedOptions[e]
                        },
                        set: function (n, e, r) {
                            if (t.internals.rawOptions[e] = r, t.status >= re.prepared) {
                                var o = An(r, {
                                    parameters: t.aggregateParameters,
                                    state: t.options.datastore.state,
                                    files: t._aggregateFiles,
                                    random: t.random
                                }, En(Kn(t))[e], Kn(t));
                                o !== r && (t.internals.parsedOptions[e] = o)
                            }
                            return !0
                        }
                    }), Object.keys(t.options.messageHandlers).forEach((function (n) {
                        return t.on(n, t.options.messageHandlers[n])
                    })), t.internals.domConnection = new Jt({
                        el: t.options.el,
                        context: Kn(t)
                    }), t.on("run", (function () {
                        t.internals.domConnection.attach()
                    })), t.on("end", (function () {
                        t.internals.domConnection.detach()
                    })), t
                }
                return Xn(Component, t), ee(Component, [{
                    key: "prepare",
                    value: async function () {
                        var t = this,
                            n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (!this.options.tardy || n) {
                            this.parent && this.parents.reduce((function (t, n) {
                                return n.options.handMeDowns.forEach((function (n) {
                                    return t.add(n)
                                })), t
                            }), new Set).forEach((function (n) {
                                t.options[n] = t.options[n] || t.parent.options[n]
                            })), this.parent && this.parent.internals.controller ? this.internals.controller = this.parent.internals.controller : (this.internals.controller = new ie, this.once("after:prepare", Tn)), this.options.datastore = this.internals.controller.datastore, this.internals.timeline = new Vt(this.internals.controller), this.options.debug && (this.on("before:run", (function () {
                                return console.group("".concat(t.options.title, " %c(").concat(t.type, ")"), "font-weight: normal")
                            })), this.on("after:end", (function () {
                                return console.groupEnd()
                            }))), this.options.debug && null == this.options.el && console.log("No output element specified, using main section"), this.options.el = this.options.el || document.querySelector('[data-labjs-section="main"]'), this.internals.root = this.parents[0], this.random = new pn(this.options.random), await this.triggerMethod("before:prepare");
                            var e = Object.freeze({
                                    parameters: this.aggregateParameters,
                                    state: this.options.datastore.state,
                                    files: this._aggregateFiles,
                                    random: this.random
                                }),
                                r = kn(this.internals.rawOptions, e, En(this), e);
                            if (this.internals.parsedOptions = Object.assign(Object.create(this.internals.rawOptions), r), Object.keys(this.options.responses).forEach((function (n) {
                                    t.options.events[n] = function (e) {
                                        e.preventDefault(), t.respond(t.options.responses[n], {
                                            timestamp: mt(e.timeStamp),
                                            action: n
                                        })
                                    }
                                })), this.internals.domConnection.events = this.options.events, this.internals.domConnection.el = this.options.el, null !== this.options.timeout) {
                                var o = "frames" === this.options.timing.method ? Ot : wt;
                                this.internals.timeout = new o((function (n) {
                                    return t.end("timeout", n, !0)
                                }), this.options.timeout), this.on("show", (function (n) {
                                    t.internals.timeout.run(n), t.options.debug && (t.internals.timestamps.timeoutTarget = t.internals.timeout.targetTime)
                                }))
                            }
                            this.data = Gn({}, this.data, this.options.data), await this.triggerMethod("prepare", n), this.status = re.prepared, await this.preload(), this.internals.timeline.events = this.options.timeline, await this.internals.timeline.prepare(), this.internals.domConnection.prepare(), await this.triggerMethod("after:prepare")
                        } else this.options.debug && console.log("Skipping automated preparation")
                    }
                }, {
                    key: "preload",
                    value: async function () {
                        await Promise.all([this.internals.controller.cache.images.getAll(this.options.media.images), this.internals.controller.cache.audio.getAll(this.options.media.audio)])
                    }
                }, {
                    key: "run",
                    value: async function (t, n) {
                        return this.status < re.prepared && (this.options.debug && console.log("Preparing at the last minute"), await this.prepare()), await this.triggerMethod("before:run"), this.status = re.running, this.internals.timestamps.run = performance.now(), this.options.skip ? this.end("skipped", t, n) : (this.options.scrollTop && window.scrollTo(0, 0), await this.triggerMethod("run", t, n), this.render(t, n))
                    }
                }, {
                    key: "render",
                    value: async function (t, n) {
                        var e = this,
                            r = async function (t) {
                                e.internals.timestamps.render = t, await e.triggerMethod("render", t), e.internals.timeline.start(t + gt.frameInterval), e.internals.showFrameRequest = window.requestAnimationFrame((function (t) {
                                    e.internals.timestamps.show = t, e.triggerMethod("show", t)
                                }))
                            };
                        n ? r(t) : this.internals.frameRequest = window.requestAnimationFrame(r)
                    }
                }, {
                    key: "respond",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            e = n.timestamp,
                            r = n.action;
                        return this.data.response = t, r && (this.data.response_action = r), null !== this.options.correctResponse && (this.data.correctResponse = this.options.correctResponse, this.data.correct = t === this.options.correctResponse), this.end("response", e)
                    }
                }, {
                    key: "end",
                    value: async function () {
                        var t = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now(),
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        this.internals.timestamps.end = e, this.data.ended_on = n, this.status = re.done, null !== this.options.timeout && this.internals.timeout.cancel(), this.internals.frameRequest && window.cancelAnimationFrame(this.internals.frameRequest), this.internals.showFrameRequest && window.cancelAnimationFrame(this.internals.showFrameRequest), "timeout" === this.data.ended_on || "response" === this.data.ended_on && "Safari" === ft ? this.data.duration = this.internals.timestamps.end - this.internals.timestamps.render : this.data.duration = this.internals.timestamps.end - (this.internals.timestamps.show || this.internals.timestamps.render), await this.triggerMethod("end", e, r), this.internals.timeline.end(e + gt.frameInterval), !1 !== this.options.datacommit && this.commit(Gn({}, this.aggregateParameters, this.data, {
                            time_run: this.internals.timestamps.run,
                            time_render: this.internals.timestamps.render,
                            time_show: this.internals.timestamps.show,
                            time_end: this.internals.timestamps.end
                        })), await this.triggerMethod("after:end", e, r);
                        var o = function (n) {
                            t.internals.timestamps.switch = n, t.options.datastore.update(t.internals.logIndex, (function (t) {
                                return Gn({}, t, {
                                    time_switch: n,
                                    duration: "timeout" === t.ended_on ? n - (t.time_show || t.time_render) : t.duration
                                })
                            })), bt((function () {
                                return t.options.datastore.triggerMethod("idle")
                            })), bt((function () {
                                return t.epilogue()
                            }))
                        };
                        return r ? window.requestAnimationFrame(o) : window.requestAnimationFrame((function () {
                            return window.requestAnimationFrame(o)
                        })), e
                    }
                }, {
                    key: "epilogue",
                    value: function () {
                        this.internals.timeline.teardown(), this.internals.domConnection.teardown(), this.triggerMethod("epilogue")
                    }
                }, {
                    key: "commit",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.internals.logIndex = this.options.datastore.commit(Gn({}, this.metadata, t, {
                            time_commit: performance.now(),
                            timestamp: (new Date).toISOString()
                        })), this.triggerMethod("commit")
                    }
                }, {
                    key: "clone",
                    value: function () {
                        var t = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = this.constructor.metadata.nestedComponents || [],
                            r = Gn({}, o()(this.internals.rawOptions, (function (n, r, o) {
                                if (o === t.internals.rawOptions && e.includes(r)) {
                                    if (Array.isArray(n)) return n.map((function (t) {
                                        return t instanceof Component ? t.clone() : t
                                    }));
                                    if (n instanceof Component) return n.clone()
                                }
                            })), n);
                        return new this.constructor(r)
                    }
                }, {
                    key: "timer",
                    get: function () {
                        var t = this.internals.timestamps;
                        switch (this.status) {
                            case re.running:
                                return performance.now() - (t.show || t.render);
                            case re.done:
                                return this.internals.timestamps.end - (t.show || t.run);
                            default:
                                return
                        }
                    }
                }, {
                    key: "progress",
                    get: function () {
                        return 1 * (this.status === re.done)
                    }
                }, {
                    key: "aggregateParameters",
                    get: function () {
                        return Wn(this, "parameters")
                    }
                }, {
                    key: "_aggregateFiles",
                    get: function () {
                        return Wn(this, "files")
                    }
                }, {
                    key: "id",
                    get: function () {
                        return this.options.id.split("_").map((function (t) {
                            return parseInt(t) || t
                        }))
                    }
                }, {
                    key: "metadata",
                    get: function () {
                        return {
                            sender: this.options.title,
                            sender_type: this.type,
                            sender_id: this.options.id
                        }
                    }
                }, {
                    key: "parents",
                    get: function () {
                        for (var t = [], n = this; n.parent;) n = n.parent, t = t.concat(n);
                        return t.reverse()
                    }
                }, {
                    key: "type",
                    get: function () {
                        return [].concat($n(this.constructor.metadata.module), [this.constructor.name]).join(".")
                    }
                }]), Component
            }(C);
        ae.metadata = {
            module: ["core"],
            nestedComponents: [],
            parsableOptions: {
                responses: {
                    keys: {},
                    content: {
                        "*": "string"
                    }
                },
                correctResponse: {},
                timeline: {
                    type: "array",
                    content: {
                        type: "object",
                        content: {
                            start: {
                                type: "number"
                            },
                            stop: {
                                type: "number"
                            },
                            "*": "string",
                            payload: {
                                type: "object",
                                content: {
                                    gain: {
                                        type: "number"
                                    },
                                    loop: {
                                        type: "boolean"
                                    },
                                    "*": "string"
                                }
                            }
                        }
                    }
                },
                timeout: {
                    type: "number"
                },
                skip: {
                    type: "boolean"
                }
            }
        };
        var Dummy = function (t) {
                function Dummy() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return te(this, Dummy), Yn(this, Jn(Dummy).call(this, Gn({
                        skip: !0
                    }, t)))
                }
                return Xn(Dummy, t), Dummy
            }(ae),
            ue = e(187),
            se = e.n(ue);

        function ce(t) {
            return (ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function fe(t, n, e) {
            return (fe = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, n, e) {
                var r = function (t, n) {
                    for (; !Object.prototype.hasOwnProperty.call(t, n) && null !== (t = me(t)););
                    return t
                }(t, n);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, n);
                    return o.get ? o.get.call(e) : o.value
                }
            })(t, n, e || t)
        }

        function le(t, n) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, n) {
                if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
                var e = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return e
            }(t, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function pe(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? Object(arguments[n]) : {},
                    r = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })))), r.forEach((function (n) {
                    he(t, n, e[n])
                }))
            }
            return t
        }

        function he(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }

        function de(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function ve(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function ge(t, n, e) {
            return n && ve(t.prototype, n), e && ve(t, e), t
        }

        function ye(t, n) {
            return !n || "object" !== ce(n) && "function" != typeof n ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : n
        }

        function me(t) {
            return (me = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function be(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), n && we(t, n)
        }

        function we(t, n) {
            return (we = Object.setPrototypeOf || function (t, n) {
                return t.__proto__ = n, t
            })(t, n)
        }
        var xe = function (t, n) {
                return t.forEach((function (t) {
                    return t.parent = n
                })), t.forEach((function (t, e) {
                    null == n.options.id ? t.options.id = String(e) : t.options.id = [n.options.id, e].join("_")
                })), Promise.all(t.map((function (t) {
                    return t.prepare(!1)
                })))
            },
            Oe = function (t) {
                function Sequence() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return de(this, Sequence), (t = ye(this, me(Sequence).call(this, pe({
                        content: [],
                        shuffle: !1
                    }, n)))).internals.currentComponent = null, t.internals.currentPosition = null, t
                }
                return be(Sequence, t), ge(Sequence, [{
                    key: "onPrepare",
                    value: async function () {
                        this.options.shuffle && (this.options.content = this.random.shuffle(this.options.content)), this.internals.iterator = this.options.content.entries(), this.internals.stepper = this.step.bind(this), await xe(this.options.content, this)
                    }
                }, {
                    key: "onRun",
                    value: async function (t, n) {
                        return this.step(t, n)
                    }
                }, {
                    key: "onEnd",
                    value: function () {
                        this.internals.currentComponent && this.internals.currentComponent.status !== re.done && (this.internals.currentComponent.off("after:end", this.internals.stepper), this.internals.currentComponent.end("abort by sequence"))
                    }
                }, {
                    key: "step",
                    value: async function (t, n) {
                        if (this.status === re.done) throw new Error("Sequence ended, can't take any more steps");
                        var e = this.internals.iterator.next();
                        if (e.done) return this.end("completion", t, n);
                        var r = le(e.value, 2);
                        return this.internals.currentPosition = r[0], this.internals.currentComponent = r[1], this.internals.currentComponent.on("after:end", this.internals.stepper), this.internals.currentComponent.run(t, n)
                    }
                }, {
                    key: "progress",
                    get: function () {
                        return this.status === re.done ? 1 : se()(this.options.content.map((function (t) {
                            return t.progress
                        })))
                    }
                }]), Sequence
            }(ae);
        Oe.metadata = {
            module: ["flow"],
            nestedComponents: ["content"],
            parsableOptions: {
                shuffle: {
                    type: "boolean"
                }
            }
        };
        var Se = function (t) {
            function Loop() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return de(this, Loop), ye(this, me(Loop).call(this, pe({
                    template: null,
                    templateParameters: [],
                    sample: {
                        n: void 0,
                        mode: "sequential"
                    },
                    shuffleGroups: void 0,
                    shuffleUngrouped: !1
                }, t)))
            }
            return be(Loop, t), ge(Loop, [{
                key: "onPrepare",
                value: function () {
                    var t = this,
                        n = [];
                    if (Array.isArray(this.options.templateParameters) && this.options.templateParameters.length > 0) {
                        var e = Array.isArray(this.options.shuffleGroups) && this.options.shuffleGroups.length ? this.random.shuffleTable(this.options.templateParameters, this.options.shuffleGroups, this.options.shuffleUngrouped) : this.options.templateParameters;
                        n = this.random.sampleMode(e, this.options.sample.n, !0 === this.options.sample.replace ? "draw-replace" : this.options.sample.mode)
                    } else console.warn("Empty or invalid parameter set for loop, no content generated");
                    return this.options.template instanceof ae ? this.options.content = n.map((function (n) {
                        var e = t.options.template.clone();
                        return e.options.parameters = pe({}, e.options.parameters, n), e
                    })) : E()(this.options.template) ? this.options.content = n.map((function (n, e) {
                        return t.options.template(n, e, t)
                    })) : console.warn("Missing or invalid template in loop, no content generated"), fe(me(Loop.prototype), "onPrepare", this).call(this)
                }
            }]), Loop
        }(Oe);
        Se.metadata = {
            module: ["flow"],
            nestedComponents: ["template"],
            parsableOptions: {
                templateParameters: {
                    type: "array",
                    content: {
                        content: {
                            "*": {}
                        }
                    }
                },
                sample: {
                    type: "object",
                    content: {
                        n: {
                            type: "number"
                        },
                        replace: {
                            type: "boolean"
                        },
                        mode: {}
                    }
                }
            }
        };
        var je = function (t) {
            function Parallel() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return de(this, Parallel), ye(this, me(Parallel).call(this, pe({
                    content: [],
                    mode: "race"
                }, t)))
            }
            return be(Parallel, t), ge(Parallel, [{
                key: "onPrepare",
                value: async function () {
                    await xe(this.options.content, this)
                }
            }, {
                key: "onRun",
                value: function (t) {
                    var n = this;
                    return Promise[this.options.mode](this.options.content.map((function (t) {
                        return t.waitFor("end")
                    }))).then((function () {
                        return n.end()
                    })), Promise.all(this.options.content.map((function (n) {
                        return n.run(t)
                    })))
                }
            }, {
                key: "onEnd",
                value: function () {
                    this.options.content.forEach((function (t) {
                        t.status < re.done && t.end("abort by parallel")
                    }))
                }
            }, {
                key: "progress",
                get: function () {
                    return this.status === re.done ? 1 : se()(this.options.content.map((function (t) {
                        return t.progress
                    })))
                }
            }]), Parallel
        }(ae);
        je.metadata = {
            module: ["flow"],
            nestedComponents: ["content"],
            parsableOptions: {
                mode: {}
            }
        };
        e(149);
        var Ee = function () {
                function t(t, n) {
                    for (var e = 0; e < n.length; e++) {
                        var r = n[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function (n, e, r) {
                    return e && t(n.prototype, e), r && t(n, r), n
                }
            }(),
            Ae = function (t, n) {
                return Object.freeze(Object.defineProperties(t, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(["", ""], ["", ""]);

        function ke(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        var Te = function () {
                function t() {
                    for (var n = this, e = arguments.length, r = Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                    return ke(this, t), this.tag = function (t) {
                        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) r[o - 1] = arguments[o];
                        return "function" == typeof t ? n.interimTag.bind(n, t) : "string" == typeof t ? n.transformEndResult(t) : (t = t.map(n.transformString.bind(n)), n.transformEndResult(t.reduce(n.processSubstitutions.bind(n, r))))
                    }, r.length > 0 && Array.isArray(r[0]) && (r = r[0]), this.transformers = r.map((function (t) {
                        return "function" == typeof t ? t() : t
                    })), this.tag
                }
                return Ee(t, [{
                    key: "interimTag",
                    value: function (t, n) {
                        for (var e = arguments.length, r = Array(e > 2 ? e - 2 : 0), o = 2; o < e; o++) r[o - 2] = arguments[o];
                        return this.tag(Ae, t.apply(void 0, [n].concat(r)))
                    }
                }, {
                    key: "processSubstitutions",
                    value: function (t, n, e) {
                        var r = this.transformSubstitution(t.shift(), n);
                        return "".concat(n, r, e)
                    }
                }, {
                    key: "transformString",
                    value: function (t) {
                        return this.transformers.reduce((function (t, n) {
                            return n.onString ? n.onString(t) : t
                        }), t)
                    }
                }, {
                    key: "transformSubstitution",
                    value: function (t, n) {
                        return this.transformers.reduce((function (t, e) {
                            return e.onSubstitution ? e.onSubstitution(t, n) : t
                        }), t)
                    }
                }, {
                    key: "transformEndResult",
                    value: function (t) {
                        return this.transformers.reduce((function (t, n) {
                            return n.onEndResult ? n.onEndResult(t) : t
                        }), t)
                    }
                }]), t
            }(),
            Pe = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return {
                    onEndResult: function (n) {
                        if ("" === t) return n.trim();
                        if ("start" === (t = t.toLowerCase()) || "left" === t) return n.replace(/^\s*/, "");
                        if ("end" === t || "right" === t) return n.replace(/\s*$/, "");
                        throw new Error("Side not supported: " + t)
                    }
                }
            };

        function Re(t) {
            if (Array.isArray(t)) {
                for (var n = 0, e = Array(t.length); n < t.length; n++) e[n] = t[n];
                return e
            }
            return Array.from(t)
        }
        var _e = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "initial";
                return {
                    onEndResult: function (n) {
                        if ("initial" === t) {
                            var e = n.match(/^[^\S\n]*(?=\S)/gm),
                                r = e && Math.min.apply(Math, Re(e.map((function (t) {
                                    return t.length
                                }))));
                            if (r) {
                                var o = new RegExp("^.{" + r + "}", "gm");
                                return n.replace(o, "")
                            }
                            return n
                        }
                        if ("all" === t) return n.replace(/^[^\S\n]+/gm, "");
                        throw new Error("Unknown type: " + t)
                    }
                }
            },
            Me = function (t, n) {
                return {
                    onEndResult: function (e) {
                        if (null == t || null == n) throw new Error("replaceResultTransformer requires at least 2 arguments.");
                        return e.replace(t, n)
                    }
                }
            },
            Ie = function (t, n) {
                return {
                    onSubstitution: function (e, r) {
                        if (null == t || null == n) throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");
                        return null == e ? e : e.toString().replace(t, n)
                    }
                }
            },
            Ce = {
                separator: "",
                conjunction: "",
                serial: !1
            },
            Fe = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce;
                return {
                    onSubstitution: function (n, e) {
                        if (Array.isArray(n)) {
                            var r = n.length,
                                o = t.separator,
                                i = t.conjunction,
                                a = t.serial,
                                u = e.match(/(\n?[^\S\n]+)$/);
                            if (n = u ? n.join(o + u[1]) : n.join(o + " "), i && r > 1) {
                                var s = n.lastIndexOf(o);
                                n = n.slice(0, s) + (a ? o : "") + " " + i + n.slice(s + 1)
                            }
                        }
                        return n
                    }
                }
            },
            Ne = function (t) {
                return {
                    onSubstitution: function (n, e) {
                        if (null == t || "string" != typeof t) throw new Error("You need to specify a string character to split by.");
                        return "string" == typeof n && n.includes(t) && (n = n.split(t)), n
                    }
                }
            },
            Le = function (t) {
                return null != t && !Number.isNaN(t) && "boolean" != typeof t
            },
            De = function () {
                return {
                    onSubstitution: function (t) {
                        return Array.isArray(t) ? t.filter(Le) : Le(t) ? t : ""
                    }
                }
            },
            Ue = (new Te(Fe({
                separator: ","
            }), _e, Pe), new Te(Fe({
                separator: ",",
                conjunction: "and"
            }), _e, Pe), new Te(Fe({
                separator: ",",
                conjunction: "or"
            }), _e, Pe), new Te(Ne("\n"), De, Fe, _e, Pe), new Te(Ne("\n"), Fe, _e, Pe, Ie(/&/g, "&amp;"), Ie(/</g, "&lt;"), Ie(/>/g, "&gt;"), Ie(/"/g, "&quot;"), Ie(/'/g, "&#x27;"), Ie(/`/g, "&#x60;")), new Te(Me(/(?:\n(?:\s*))+/g, " "), Pe), new Te(Me(/(?:\n\s*)/g, ""), Pe), new Te(Fe({
                separator: ","
            }), Me(/(?:\s+)/g, " "), Pe), new Te(Fe({
                separator: ",",
                conjunction: "or"
            }), Me(/(?:\s+)/g, " "), Pe), new Te(Fe({
                separator: ",",
                conjunction: "and"
            }), Me(/(?:\s+)/g, " "), Pe), new Te(Fe, _e, Pe), new Te(Fe, Me(/(?:\s+)/g, " "), Pe), new Te(_e, Pe));
        new Te(_e("all"), Pe);

        function qe() {
            var t = ir(['\n          <p class="font-weight-bold" style="margin: 1rem 0 0.25rem">\n            ', '\n          </p>\n          <p class="small text-muted hide-if-empty" style="margin: 0.25rem 0">\n            ', '\n          </p>\n          <table class="page-item-table">\n            <colgroup>\n              <col style="width: 40%">\n              ', "\n            </colgroup>\n            ", "\n            <tbody>\n              ", "\n            </tbody>\n          </table>\n        "]);
            return qe = function () {
                return t
            }, t
        }

        function Be() {
            var t = ir(['\n          <p class="font-weight-bold" style="margin: 1rem 0 0.25rem">\n            ', '\n          </p>\n          <p class="small text-muted hide-if-empty" style="margin: 0.25rem 0">\n            ', '\n          </p>\n          <input name="', '" type="range"\n            ', '\n            class="w-100"\n            ', "\n          >\n        "]);
            return Be = function () {
                return t
            }, t
        }

        function ze() {
            var t = ir(['\n          <p class="font-weight-bold" style="margin: 1rem 0 0.25rem">\n            ', '\n          </p>\n          <p class="small text-muted hide-if-empty" style="margin: 0.25rem 0">\n            ', '\n          </p>\n          <table class="table-plain page-item-table">\n            <colgroup>\n              <col style="width: 7.5%">\n              <col style="width: 92.5%">\n            </colgroup>\n            <tbody>\n              ', "\n            </tbody>\n          </table>\n        "]);
            return ze = function () {
                return t
            }, t
        }

        function Ve() {
            var t = ir(['\n          <p class="font-weight-bold" style="margin: 1rem 0 0.25rem">\n            ', '\n          </p>\n          <p class="small text-muted hide-if-empty" style="margin: 0.25rem 0">\n            ', '\n          </p>\n          <table class="table-plain page-item-table">\n            <colgroup>\n              <col style="width: 7.5%">\n              <col style="width: 92.5%">\n            </colgroup>\n            <tbody>\n              ', "\n            </tbody>\n          </table>\n        "]);
            return Ve = function () {
                return t
            }, t
        }

        function We() {
            var t = ir(['\n          <p class="font-weight-bold" style="margin: 1rem 0 0.25rem">\n            ', '\n          </p>\n          <p class="small text-muted hide-if-empty" style="margin: 0.25rem 0">\n            ', '\n          </p>\n          <textarea name="', '"\n            ', '\n            class="w-100"\n            rows="3"\n          ></textarea>\n        ']);
            return We = function () {
                return t
            }, t
        }

        function He() {
            var t = ir(['\n          <p class="font-weight-bold" style="margin: 1rem 0 0.25rem">\n            ', '\n          </p>\n          <p class="small text-muted hide-if-empty" style="margin: 0.25rem 0">\n            ', '\n          </p>\n          <input name="', '"\n            ', '\n            class="w-100"\n            ', "\n          >\n        "]);
            return He = function () {
                return t
            }, t
        }

        function $e() {
            var t = ir(['\n          <div class="page-item page-item-divider">\n            <hr>\n          </div>\n        ']);
            return $e = function () {
                return t
            }, t
        }

        function Ge() {
            var t = ir(['\n          <div class="page-item page-item-html">\n            ', "\n          </div>\n        "]);
            return Ge = function () {
                return t
            }, t
        }

        function Ye() {
            var t = ir(['\n          <div class="page-item page-item-image">\n            <img\n              src="', '"\n              style="', " ", '"\n            >\n          </div>\n        ']);
            return Ye = function () {
                return t
            }, t
        }

        function Je() {
            var t = ir(['\n          <div class="page-item page-item-text">\n            <h3>', "</h3>\n            ", "\n          </div>\n        "]);
            return Je = function () {
                return t
            }, t
        }

        function Ke(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }

        function Xe() {
            var t = ir(['\n    <main\n      class="\n        content-horizontal-center\n        content-vertical-center\n      "\n    >\n      <div class="w-', ' text-left">\n        <form id="page-form" style="display: block;" autocomplete="off">\n          ', "\n        </form>\n      </div>\n    </main>\n    ", "\n  "]);
            return Xe = function () {
                return t
            }, t
        }

        function Qe() {
            var t = ir(['\n          <td class="text-center">\n            <label style="height: 100%; padding: 10px 0">\n              <input type="radio"\n                name="', "-", '" value="', '"\n                ', "\n              >\n            </label>\n          </td>\n        "]);
            return Qe = function () {
                return t
            }, t
        }

        function Ze() {
            var t = ir(['\n    <tr>\n      <td class="small" style="padding-left: 0">\n        ', "\n      </td>\n      ", "\n    </tr>\n  "]);
            return Ze = function () {
                return t
            }, t
        }

        function tr() {
            var t = ir(['\n            <th\n              class="sticky-top text-center small"\n              style="background-color: white"\n            >\n              ', "\n             </th>\n          "]);
            return tr = function () {
                return t
            }, t
        }

        function nr() {
            var t = ir(['\n      <thead class="sticky-top" style="background-color: white">\n        <th class="sticky-top" style="background-color: white"></th>\n        ', "\n      </thead>\n    "]);
            return nr = function () {
                return t
            }, t
        }

        function er() {
            var t = ir(['\n        <tr>\n          <td>\n            <input\n              type="checkbox"\n              name="', "-", '"\n              id="', "-", '"\n              ', '\n            >\n          </td>\n          <td>\n            <label for="', "-", '">\n              ', "\n            </label\n          </td>\n        </tr>\n      "]);
            return er = function () {
                return t
            }, t
        }

        function rr() {
            var t = ir(['\n        <tr>\n          <td>\n            <input\n              type="radio"\n              name="', '"\n              value="', '"\n              id="', "-", '"\n              ', '\n            >\n          </td>\n          <td>\n            <label for="', "-", '">\n              ', "\n            </label\n          </td>\n        </tr>\n      "]);
            return rr = function () {
                return t
            }, t
        }

        function or() {
            var t = ir(['\n        <footer\n          class="\n            content-horizontal-', '\n            content-vertical-center\n          "\n        >\n          <button type="submit" form="page-form">\n            ', "\n          </button>\n        </footer>\n      "]);
            return or = function () {
                return t
            }, t
        }

        function ir(t, n) {
            return n || (n = t.slice(0)), Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(n)
                }
            }))
        }

        function ar(t, n) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, n) {
                if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
                var e = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return e
            }(t, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var ur = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object.entries(t).map((function (t) {
                    var n = ar(t, 2),
                        e = n[0],
                        r = n[1];
                    return "".concat(e, '="').concat(r, '"')
                })).join(" ")
            },
            sr = function (t, n, e) {
                var r = t.label,
                    o = t.coding,
                    i = n.name,
                    a = n.required,
                    u = void 0 === a || a;
                return "radio" === e ? Ue(rr(), i, o, i, o, u ? "required" : "", i, o, r) : "checkbox" === e ? Ue(er(), i, o, i, o, u ? "required" : "", i, o, r) : void 0
            },
            cr = function (t, n) {
                var e = n.rng || new pn,
                    r = function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return n ? e.shuffle(t) : t
                    };
                return Ue(Xe(), n.width || "m", t.map((function (t) {
                    return fr(t, function (t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = null != arguments[n] ? Object(arguments[n]) : {},
                                r = Object.keys(e);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            })))), r.forEach((function (n) {
                                Ke(t, n, e[n])
                            }))
                        }
                        return t
                    }({
                        shuffleMeMaybe: r
                    }, n))
                })).join("\n"), function (t) {
                    var n = t.submitButtonPosition,
                        e = void 0 === n ? "right" : n,
                        r = t.submitButtonText;
                    return "hidden" !== e ? Ue(or(), e, r) : ""
                }(n))
            },
            fr = function (t, n) {
                var e = n.shuffleMeMaybe;
                switch (t.type) {
                    case "text":
                        return Ue(Je(), t.title || "", t.content || "");
                    case "image":
                        return Ue(Ye(), t.src, t.width && "max-width: " + t.width, t.height && "max-height: " + t.height);
                    case "html":
                        return Ue(Ge(), t.content || "");
                    case "divider":
                        return Ue($e());
                    case "input":
                        return Ue(He(), t.label || "", t.help || "", t.name, t.required ? "required" : "", ur(t.attributes));
                    case "textarea":
                        return Ue(We(), t.label || "", t.help || "", t.name, t.required ? "required" : "");
                    case "radio":
                        return Ue(Ve(), t.label || "", t.help || "", e(t.options || [], t.shuffle).map((function (n) {
                            return sr(n, t, "radio")
                        })).join("\n"));
                    case "checkbox":
                        return Ue(ze(), t.label || "", t.help || "", e(t.options || [], t.shuffle).map((function (n) {
                            return sr(n, t, "checkbox")
                        })).join("\n"));
                    case "slider":
                        return Ue(Be(), t.label || "", t.help || "", t.name, t.required ? "required" : "", ur(t.attributes));
                    case "likert":
                        return Ue(qe(), t.label || "", t.help || "", Zt()(t.width).map((function () {
                            return '<col style="width: '.concat(60 / t.width, '%">')
                        })).join("\n"), function (t) {
                            var n = t.width,
                                e = t.anchors;
                            return e.every((function (t) {
                                return !t
                            })) ? "" : Ue(nr(), Zt()(n).map((function (t) {
                                return Ue(tr(), e[t] || "")
                            })).join("\n"))
                        }(t), e(t.items || [], t.shuffle).map((function (n) {
                            return function (t, n) {
                                var e = t.label,
                                    r = t.coding,
                                    o = n.name,
                                    i = n.width,
                                    a = n.required,
                                    u = void 0 === a || a;
                                return Ue(Ze(), e, Zt()(1, Number(i) + 1).map((function (t) {
                                    return Ue(Qe(), o, r, t, u ? "required" : "")
                                })).join("\n"))
                            }(n, t)
                        })).join("\n"));
                    default:
                        console.error("Unknown page item type", t.type)
                }
            };

        function lr(t) {
            return (lr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function pr(t, n, e) {
            return (pr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, n, e) {
                var r = function (t, n) {
                    for (; !Object.prototype.hasOwnProperty.call(t, n) && null !== (t = br(t)););
                    return t
                }(t, n);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, n);
                    return o.get ? o.get.call(e) : o.value
                }
            })(t, n, e || t)
        }

        function hr(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? Object(arguments[n]) : {},
                    r = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })))), r.forEach((function (n) {
                    dr(t, n, e[n])
                }))
            }
            return t
        }

        function dr(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }

        function vr(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function gr(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function yr(t, n, e) {
            return n && gr(t.prototype, n), e && gr(t, e), t
        }

        function mr(t, n) {
            return !n || "object" !== lr(n) && "function" != typeof n ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : n
        }

        function br(t) {
            return (br = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function wr(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), n && xr(t, n)
        }

        function xr(t, n) {
            return (xr = Object.setPrototypeOf || function (t, n) {
                return t.__proto__ = n, t
            })(t, n)
        }
        var Or = function (t) {
            function Screen(t) {
                return vr(this, Screen), mr(this, br(Screen).call(this, hr({
                    content: null,
                    contentUrl: null
                }, t)))
            }
            return wr(Screen, t), yr(Screen, [{
                key: "onBeforePrepare",
                value: function () {
                    var t = this;
                    return Promise.resolve().then((function () {
                        return t.options.contentUrl ? fetch(t.options.contentUrl).then((function (t) {
                            return t.text()
                        })).then((function (n) {
                            return t.options.content = n
                        })).catch((function (t) {
                            return console.log("Error while loading content: ", t)
                        })) : null
                    }))
                }
            }, {
                key: "onRun",
                value: function () {
                    this.options.el.innerHTML = this.options.content
                }
            }]), Screen
        }(ae);
        Or.metadata = {
            module: ["html"],
            nestedComponents: [],
            parsableOptions: {
                content: {}
            }
        };
        var Form = function (t) {
            function Form() {
                var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return vr(this, Form), (t = mr(this, br(Form).call(this, hr({
                    validator: function () {
                        return !0
                    },
                    scrollTop: !0
                }, n)))).options.events['click button[type="submit"]'] = function (n) {
                    if (n.target.getAttribute("form")) {
                        var e = t.options.el.querySelector("form#".concat(n.target.getAttribute("form")));
                        if (e) {
                            n.preventDefault(), n.stopPropagation();
                            var r = document.createElement("input");
                            return r.type = "submit", r.style.display = "none", e.appendChild(r), r.click(), e.removeChild(r), !1
                        }
                    }
                    return !0
                }, t.options.events["submit form"] = function (n) {
                    return t.submit(n)
                }, t
            }
            return wr(Form, t), yr(Form, [{
                key: "onRun",
                value: function () {
                    pr(br(Form.prototype), "onRun", this).call(this);
                    var t = this.options.el.querySelector("[autofocus]");
                    t && t.focus()
                }
            }, {
                key: "submit",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return t && t.preventDefault && t.preventDefault(), this.validate() ? (Object.assign(this.data, this.serialize()), this.end("form submission")) : Array.from(this.options.el.querySelectorAll("form")).forEach((function (t) {
                        return t.setAttribute("data-labjs-validated", "")
                    })), !1
                }
            }, {
                key: "serialize",
                value: function () {
                    var t = this.options.el.querySelectorAll("form"),
                        n = {};
                    return Array.from(t).forEach((function (t) {
                        Array.from(t.elements).forEach((function (t) {
                            switch (t.nodeName.toLowerCase()) {
                                case "input":
                                    switch (t.type) {
                                        case "checkbox":
                                            n[t.name] = t.checked;
                                            break;
                                        case "radio":
                                            t.checked && (n[t.name] = t.value);
                                            break;
                                        default:
                                            n[t.name] = t.value
                                    }
                                    break;
                                case "textarea":
                                    n[t.name] = t.value;
                                    break;
                                case "select":
                                    switch (t.type) {
                                        case "select-one":
                                            n[t.name] = t.value;
                                            break;
                                        case "select-multiple":
                                            n[t.name] = Array.from(t.options).filter((function (t) {
                                                return t.selected
                                            })).map((function (t) {
                                                return t.value
                                            }))
                                    }
                            }
                        }))
                    })), n
                }
            }, {
                key: "validate",
                value: function () {
                    var t = this.options.el.querySelectorAll("form");
                    return this.options.validator(this.serialize()) && Array.from(t).every((function (t) {
                        return t.checkValidity()
                    }))
                }
            }]), Form
        }(Or);
        Form.metadata = {
            module: ["html"],
            nestedComponents: []
        };
        var Sr = function (t) {
            function Frame() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return vr(this, Frame), mr(this, br(Frame).call(this, hr({
                    content: null,
                    context: "",
                    contextSelector: ""
                }, t)))
            }
            return wr(Frame, t), yr(Frame, [{
                key: "onPrepare",
                value: async function () {
                    var t = this,
                        n = new DOMParser;
                    this.internals.parsedContext = n.parseFromString(this.options.context, "text/html"), this.options.content.options.el = this.internals.parsedContext.querySelector(this.options.contextSelector), this.internals.contentEndHandler = function () {
                        return t.end()
                    }, this.options.content.on("after:end", this.internals.contentEndHandler), await xe([this.options.content], this)
                }
            }, {
                key: "onRun",
                value: async function (t, n) {
                    var e = this;
                    this.options.el.innerHTML = "", Array.from(this.internals.parsedContext.body.children).forEach((function (t) {
                        return e.options.el.appendChild(t)
                    })), await this.options.content.run(t, n)
                }
            }, {
                key: "onEnd",
                value: function () {
                    return this.options.content.status < re.done ? (this.options.content.off("after:end", this.internals.contentEndHandler), this.options.content.end("abort by frame")) : Promise.resolve()
                }
            }, {
                key: "progress",
                get: function () {
                    return this.options.content.progress
                }
            }]), Frame
        }(ae);
        Sr.metadata = {
            module: ["html"],
            nestedComponents: ["content"],
            parsableOptions: {
                context: {}
            }
        };
        var jr = function (t) {
            function Page() {
                return vr(this, Page), mr(this, br(Page).apply(this, arguments))
            }
            return wr(Page, t), yr(Page, [{
                key: "onPrepare",
                value: function () {
                    var t = this;
                    this.options.content = cr(this.options.items, {
                        submitButtonText: this.options.submitButtonText,
                        submitButtonPosition: this.options.submitButtonPosition,
                        width: this.options.width,
                        rng: this.random
                    }), this.options.items.filter((function (t) {
                        return "image" === t.type && t.src
                    })).forEach((function (n) {
                        return t.options.media.images.push(n.src)
                    }))
                }
            }]), Page
        }(Form);

        function Er(t, n) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, n) {
                if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
                var e = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return e
            }(t, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        jr.metadata = {
            module: ["html"],
            nestedComponents: [],
            parsableOptions: {
                items: {
                    type: "array",
                    content: {
                        type: "object",
                        content: {
                            "*": "string",
                            attributes: {
                                type: "object",
                                content: {
                                    "*": "string"
                                }
                            },
                            options: {
                                type: "array",
                                content: {
                                    type: "object",
                                    content: {
                                        "*": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        var Ar = function (t) {
                return Math.PI * (t / 180)
            },
            kr = function (t, n) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [0, 0],
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    i = Ar(e * (360 / t) + o);
                return [n * Math.sin(i) + r[0], n * Math.cos(i) + r[1]]
            };

        function Tr(t, n) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, n) {
                if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
                var e = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return e
            }(t, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function Pr(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? Object(arguments[n]) : {},
                    r = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })))), r.forEach((function (n) {
                    Rr(t, n, e[n])
                }))
            }
            return t
        }

        function Rr(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }
        var _r = function (t, n) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = Pr({
                        translateOrigin: !0,
                        viewportScale: "auto",
                        devicePixelScaling: !0,
                        canvasClientRect: {
                            left: 0,
                            top: 0
                        }
                    }, e),
                    o = r.translateOrigin ? t[0] / 2 : 0,
                    i = r.translateOrigin ? t[1] / 2 : 0,
                    a = r.devicePixelScaling ? window.devicePixelRatio : 1,
                    u = "auto" === r.viewportScale ? Math.min(t[0] / (a * n[0]), t[1] / (a * n[1])) : r.viewportScale,
                    s = u * a;
                return {
                    translateX: o,
                    translateY: i,
                    scale: s,
                    viewportScale: u,
                    pixelRatio: a
                }
            },
            Mr = function (t, n, e) {
                var r = _r(t, n, e),
                    o = r.translateX,
                    i = r.translateY,
                    a = r.scale,
                    u = r.viewportScale,
                    s = !0 === e.fromOffset ? {
                        left: 0,
                        top: 0
                    } : e.canvasClientRect;
                return [1 / u, 0, 0, 1 / u, -o / a - s.left / u, -i / a - s.top / u]
            },
            Ir = function (t, n) {
                var e = Tr(n, 2),
                    r = e[0],
                    o = e[1];
                return ([r * t[0] + o * t[2] + t[4], r * t[1] + o * t[3] + t[5]])
            },
            Cr = function (t, n) {
                return function (e, r, o) {
                    return (t || []).forEach((function (t) {
                        return function (t, n) {
                            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            switch (t.save(), t.beginPath(), t.translate(n.left, n.top), t.rotate(Ar(n.angle)), n.type) {
                                case "line":
                                    t.moveTo(-n.width / 2, 0), t.lineTo(+n.width / 2, 0);
                                    break;
                                case "rect":
                                    t.rect(-n.width / 2, -n.height / 2, n.width, n.height);
                                    break;
                                case "triangle":
                                    t.moveTo(-n.width / 2, n.height / 2), t.lineTo(0, -n.height / 2), t.lineTo(n.width / 2, n.height / 2), t.closePath();
                                    break;
                                case "circle":
                                    t.arc(0, 0, n.width / 2, 0, Ar(360));
                                    break;
                                case "ellipse":
                                    t.ellipse(0, 0, n.width / 2, n.height / 2, 0, 0, Ar(360));
                                    break;
                                case "text":
                                case "i-text":
                                    t.font = "".concat(n.fontStyle || "normal", " ") + "".concat(n.fontWeight || "normal", " ") + "".concat(n.fontSize || 32, "px ") + "".concat(n.fontFamily || "sans-serif"), t.textAlign = n.textAlign || "center", t.textBaseline = "middle";
                                    break;
                                case "image":
                                    var r = e.images.readSync(n.src),
                                        o = "width" === n.autoScale ? r.naturalWidth * (n.height / r.naturalHeight) : n.width,
                                        i = "height" === n.autoScale ? r.naturalHeight * (n.width / r.naturalWidth) : n.height;
                                    t.drawImage(r, -o / 2, -i / 2, o, i);
                                    break;
                                default:
                                    throw new Error("Unknown content type")
                            }
                            n.fill && (t.fillStyle = n.fill, "i-text" !== n.type && "text" !== n.type ? t.fill() : n.text.split("\n").forEach((function (e, r, o) {
                                t.fillText(e, 0, (r - .5 * (o.length - 1)) * (n.fontSize || 32) * (n.lineHeight || 1.16))
                            }))), n.stroke && n.strokeWidth && (t.strokeStyle = n.stroke, t.lineWidth = n.strokeWidth || 1, "i-text" !== n.type && "text" !== n.type ? t.stroke() : n.text.split("\n").forEach((function (e, r, o) {
                                t.strokeText(e, 0, (r - .5 * (o.length - 1)) * (n.fontSize || 32) * (n.lineHeight || 1.16))
                            }))), t.restore()
                        }(o, t, n)
                    }))
                }
            },
            Fr = void 0 !== window.DOMMatrixReadOnly ? new window.DOMMatrixReadOnly : document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix(),
            Nr = function (t, n) {
                var e = new Path2D;
                switch (n.type) {
                    case "aoi":
                        e.rect(-n.width / 2, -n.height / 2, n.width, n.height);
                        break;
                    default:
                        console.error("Content type not yet implemented")
                }
                var r = new Path2D;
                return r.addPath(e, Fr.translate(n.left, n.top).rotate(n.angle)), r
            };

        function Lr(t) {
            return (Lr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Dr(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Ur(t, n) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, n) {
                if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
                var e = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return e
            }(t, n) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function qr(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function Br(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function zr(t, n, e) {
            return n && Br(t.prototype, n), e && Br(t, e), t
        }

        function Vr(t, n) {
            return !n || "object" !== Lr(n) && "function" != typeof n ? Hr(t) : n
        }

        function Wr(t) {
            return (Wr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Hr(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function $r(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), n && Gr(t, n)
        }

        function Gr(t, n) {
            return (Gr = Object.setPrototypeOf || function (t, n) {
                return t.__proto__ = n, t
            })(t, n)
        }

        function Yr(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? Object(arguments[n]) : {},
                    r = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })))), r.forEach((function (n) {
                    Jr(t, n, e[n])
                }))
            }
            return t
        }

        function Jr(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }
        var Kr = function (t) {
                return Yr({
                    canvas: null,
                    ctxType: "2d",
                    ctx: null,
                    insertCanvasOnRun: !1,
                    translateOrigin: !0,
                    viewport: [800, 600],
                    viewportScale: "auto",
                    viewportEdge: !1,
                    devicePixelScaling: null
                }, t)
            },
            Xr = function () {
                null === this.options.canvas && (this.options.canvas = document.createElement("canvas"), this.options.insertCanvasOnRun = !0), null === this.options.devicePixelScaling && (this.options.devicePixelScaling = !0)
            },
            Qr = function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    n = arguments.length > 1 ? arguments[1] : void 0;
                if (this.options.insertCanvasOnRun) {
                    var e = this.options.devicePixelScaling ? window.devicePixelRatio : 1;
                    n = n || this.options.el, t && (n.innerHTML = "");
                    var r = window.getComputedStyle(n),
                        o = n.clientWidth - parseInt(r.paddingLeft) - parseInt(r.paddingRight),
                        i = n.clientHeight - parseInt(r.paddingTop) - parseInt(r.paddingBottom);
                    this.options.canvas.width = o * e, this.options.canvas.height = i * e, this.options.canvas.style.display = "block", this.options.canvas.style.width = "".concat(o, "px"), this.options.canvas.style.height = "".concat(i, "px"), t && n.appendChild(this.options.canvas)
                }
            },
            Zr = function (t) {
                function Screen() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return qr(this, Screen), (t = Vr(this, Wr(Screen).call(this, Yr({
                        content: null,
                        renderFunction: null,
                        clearCanvas: !0
                    }, Kr(n))))).internals.frameRequest = null, t.render = t.render.bind(Hr(t)), t
                }
                return $r(Screen, t), zr(Screen, [{
                    key: "onPrepare",
                    value: function () {
                        var t = this;
                        (this.options.content || []).filter((function (t) {
                            return O()(t) && "image" === t.type && t.src
                        })).forEach((function (n) {
                            return t.options.media.images.push(n.src)
                        })), Xr.apply(this), this.internals.domConnection.processEvent = function (n) {
                            var e = Ur(n, 3),
                                r = e[0],
                                o = e[1],
                                i = e[2];
                            if (i && i.startsWith("@")) {
                                var a = t.options.devicePixelScaling ? window.devicePixelRatio : 1;
                                return {
                                    eventName: r,
                                    filters: o,
                                    selector: "canvas",
                                    moreChecks: [function (n) {
                                        return t.options.ctx.isPointInPath(t.internals.paths[i.slice(1)], n.offsetX * a, n.offsetY * a)
                                    }]
                                }
                            }
                            return {
                                eventName: r,
                                filters: o,
                                selector: i
                            }
                        }, null === this.options.renderFunction && (this.options.renderFunction = Cr((this.options.content || []).filter((function (t) {
                            return O()(t) && "aoi" !== t.type
                        })), this.internals.controller.cache))
                    }
                }, {
                    key: "onRun",
                    value: function () {
                        var t;
                        Qr.apply(this), this.options.ctx = this.options.canvas.getContext(this.options.ctxType), this.options.ctx.save(), this.internals.transformationMatrix = function (t, n, e) {
                            var r = _r(t, n, e),
                                o = r.translateX,
                                i = r.translateY,
                                a = r.scale;
                            return [a, 0, 0, a, o, i]
                        }([this.options.canvas.width, this.options.canvas.height], this.options.viewport, {
                            translateOrigin: this.options.translateOrigin,
                            viewportScale: this.options.viewportScale,
                            devicePixelScaling: this.options.devicePixelScaling
                        }), (t = this.options.ctx).setTransform.apply(t, Dr(this.internals.transformationMatrix))
                    }
                }, {
                    key: "onRender",
                    value: function (t) {
                        return this.options.clearCanvas && this.clear(), this.options.viewportEdge && (this.options.ctx.save(), this.options.ctx.strokeStyle = "rgb(229, 229, 229)", this.options.ctx.strokeRect(this.options.translateOrigin ? -this.options.viewport[0] / 2 : 0, this.options.translateOrigin ? -this.options.viewport[1] / 2 : 0, this.options.viewport[0], this.options.viewport[1]), this.options.ctx.restore()), this.options.renderFunction.call(this, t - this.internals.timestamps.render, this.options.canvas, this.options.ctx, this)
                    }
                }, {
                    key: "onShow",
                    value: function () {
                        this.internals.paths = function (t) {
                            return function (n, e, r) {
                                return dn()(t.filter((function (t) {
                                    return t.label && ["aoi"].includes(t.type)
                                })).map((function (t) {
                                    return [t.label, Nr(0, t)]
                                })))
                            }
                        }(this.options.content || [])(0, this.options.canvas, this.options.ctx)
                    }
                }, {
                    key: "queueAnimationFrame",
                    value: function () {
                        var t = this;
                        this.internals.frameRequest = window.requestAnimationFrame((function (n) {
                            t.options.clearCanvas && t.clear(), t.options.renderFunction.call(t, n - t.internals.timestamps.render, t.options.canvas, t.options.ctx, t)
                        }))
                    }
                }, {
                    key: "onEnd",
                    value: function () {
                        this.options.ctx && this.options.ctx.restore()
                    }
                }, {
                    key: "onEpilogue",
                    value: function () {
                        delete this.options.ctx, delete this.options.canvas
                    }
                }, {
                    key: "clear",
                    value: function () {
                        this.options.ctx.save(), this.options.ctx.setTransform(1, 0, 0, 1, 0, 0), this.options.ctx.clearRect(0, 0, this.options.canvas.width, this.options.canvas.height), this.options.ctx.restore()
                    }
                }, {
                    key: "transform",
                    value: function (t) {
                        if (!this.internals.transformationMatrix) throw new Error("No transformation matrix set");
                        return Ir(this.internals.transformationMatrix, t)
                    }
                }, {
                    key: "transformInverse",
                    value: function (t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!this.internals.transformationMatrix) throw new Error("No transformation matrix set");
                        var e = Mr([this.options.canvas.width, this.options.canvas.height], this.options.viewport, {
                            translateOrigin: this.options.translateOrigin,
                            viewportScale: this.options.viewportScale,
                            devicePixelScaling: this.options.devicePixelScaling,
                            canvasClientRect: this.options.canvas.getBoundingClientRect(),
                            fromOffset: n
                        });
                        return Ir(e, t)
                    }
                }, {
                    key: "transformCanvasEvent",
                    value: function (t) {
                        var n = t.offsetX,
                            e = t.offsetY;
                        return this.transformInverse([n, e], !0)
                    }
                }]), Screen
            }(ae);
        Zr.metadata = {
            module: ["canvas"],
            nestedComponents: [],
            parsableOptions: {
                content: {
                    type: "array",
                    content: {
                        type: "object",
                        content: {
                            text: {},
                            fill: {},
                            stroke: {},
                            left: {
                                type: "number"
                            },
                            top: {
                                type: "number"
                            },
                            width: {
                                type: "number"
                            },
                            height: {
                                type: "number"
                            },
                            angle: {
                                type: "number"
                            },
                            src: {},
                            fontSize: {
                                type: "number"
                            }
                        }
                    }
                }
            }
        };
        var to = function (t) {
            function Frame() {
                var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return qr(this, Frame), (t = Vr(this, Wr(Frame).call(this, Kr(Yr({
                    context: "<canvas></canvas>"
                }, n))))).options.handMeDowns.includes("canvas") || t.options.handMeDowns.push("canvas", "devicePixelScaling"), t
            }
            return $r(Frame, t), zr(Frame, [{
                key: "onPrepare",
                value: async function () {
                    var t = this;
                    if (!Vn(this, (function (n, e) {
                            return n && (e === t || e instanceof Zr || e instanceof Oe || e instanceof Se || e instanceof je)
                        }), !0)) throw new Error("CanvasFrame may only contain flow or canvas-based components");
                    var n = new DOMParser;
                    if (this.internals.parsedContext = n.parseFromString(this.options.context, "text/html"), this.options.canvas = this.internals.parsedContext.querySelector("canvas"), !this.options.canvas) throw new Error("No canvas found in context");
                    this.options.content.options.el = null === this.options.canvas.parentElement || "BODY" === this.options.canvas.parentElement.tagName ? this.options.el : this.options.canvas.parentElement, this.internals.contentEndHandler = function () {
                        return t.end()
                    }, this.options.content.on("after:end", this.internals.contentEndHandler), Xr.apply(this), this.options.insertCanvasOnRun = !0, await xe([this.options.content], this)
                }
            }, {
                key: "onRun",
                value: async function (t, n) {
                    var e = this;
                    this.options.el.innerHTML = "", Array.from(this.internals.parsedContext.body.children).forEach((function (t) {
                        return e.options.el.appendChild(t)
                    })), Qr.apply(this, [!1, this.options.canvas.parentElement]), await this.options.content.run(t, n)
                }
            }, {
                key: "onEpilogue",
                value: function () {
                    delete this.options.canvas, delete this.internals.parsedContext
                }
            }]), Frame
        }(Sr);
        to.metadata = {
            module: ["canvas"],
            nestedComponents: ["content"]
        };
        var fromObject = e(302),
            no = function (t) {
                return t.reduce((function (t, n) {
                    return t + n
                }), 0)
            },
            eo = function (t) {
                return no(t) / t.length
            },
            ro = function (t) {
                var n = eo(t);
                return eo(t.map((function (t) {
                    return Math.pow(t - n, 2)
                })))
            },
            oo = (e(218), e(303)),
            io = e.n(oo);

        function ao(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function uo(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function so(t) {
            return (so = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var co = function (t) {
                return (t.length > 80 ? '<div class="labjs-debug-trunc">'.concat(t.substr(0, 100), "</div>") : t).replace(/,/g, ",&#8203;")
            },
            fo = function (t) {
                return "<td>".concat(function (t) {
                    switch (so(t)) {
                        case "number":
                            return t > 150 ? t.toFixed(0) : t.toFixed(2);
                        case "string":
                            return co(t);
                        case "undefined":
                            return "";
                        case "object":
                            if (mn()(t)) return co(JSON.stringify(t));
                        default:
                            return t
                    }
                }(t), "</td>")
            },
            lo = function () {
                function Debug() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.filePrefix,
                        e = void 0 === n ? "study" : n;
                    ao(this, Debug), this.filePrefix = e
                }
                return function (t, n, e) {
                    n && uo(t.prototype, n), e && uo(t, e)
                }(Debug, [{
                    key: "handle",
                    value: function (t, n) {
                        switch (n) {
                            case "plugin:init":
                                return this.onInit(t);
                            case "prepare":
                                return this.onPrepare();
                            default:
                                return null
                        }
                    }
                }, {
                    key: "onInit",
                    value: function (t) {
                        var n = this;
                        this.isVisible = !1, this.context = t, this.container = document.createElement("div"), this.container.id = "labjs-debug", this.container.innerHTML = '<style type="text/css">\n  .labjs-debug-opener {\n    font-size: 1.2rem;\n    color: #8d8d8d;\n    /* Box formatting */\n    width: 40px;\n    height: 32px;\n    padding: 6px 8px;\n    border-radius: 3px;\n    border: 1px solid #e5e5e5;\n    z-index: 3;\n    background-color: white;\n    /* Fixed position */\n    position: fixed;\n    bottom: 36px;\n    right: -5px;\n    /* Content centering */\n    display: flex;\n    align-items: center;\n    justify-content: left;\n  }\n\n  .labjs-debug-toggle {\n    cursor: pointer;\n  }\n\n  body.labjs-debugtools-visible .labjs-debug-opener {\n    display: none;\n  }\n\n  .labjs-debug-overlay {\n    font-family: "Arial", sans-serif;\n    color: black;\n    /* Box formatting */\n    width: 100vw;\n    height: 30vh;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    z-index: 2;\n    background-color: white;\n    border-top: 2px solid #e5e5e5;\n    display: none;\n    overflow: scroll;\n  }\n\n  #labjs-debug.labjs-debug-large .labjs-debug-overlay {\n    height: 100vh;\n  }\n\n  .labjs-debug-overlay-menu {\n    font-size: 0.8rem;\n    color: #8d8d8d;\n    padding: 8px 12px 6px;\n    border-bottom: 1px solid #e5e5e5;\n  }\n\n  .labjs-debug-overlay-menu a {\n    color: #8d8d8d;\n  }\n\n  .labjs-debug-overlay-menu .pull-right {\n    font-size: 1rem;\n    float: right;\n  }\n\n  body.labjs-debugtools-visible .labjs-debug-overlay {\n    display: block;\n  }\n\n  .labjs-debug-overlay-contents {\n    padding: 12px;\n  }\n\n  .labjs-debug-overlay-contents table {\n    font-size: 0.8rem;\n  }\n\n  .labjs-debug-overlay-contents table tr.labjs-debug-state {\n    background-color: #f8f8f8;\n  }\n\n  /* Truncated cells */\n  .labjs-debug-trunc {\n    min-width: 200px;\n    max-width: 400px;\n  }\n  .labjs-debug-trunc::after {\n    content: "...";\n    opacity: 0.5;\n  }\n</style>\n<div class="labjs-debug-opener labjs-debug-toggle"><div>≡</div></div>\n<div class="labjs-debug-overlay">\n  <div class="labjs-debug-overlay-menu">\n    <div class="pull-right">\n      <span class="labjs-debug-toggle">&times;</span>\n    </div>\n    <code>lab.js</code> ·\n    data preview ·\n    <a href="#" class="labjs-debug-data-download">download csv</a>\n  </div>\n  <div class="labjs-debug-overlay-contents">\n    Contents\n  </div>\n</div>', Array.from(this.container.querySelectorAll(".labjs-debug-toggle")).forEach((function (t) {
                            return t.addEventListener("click", (function () {
                                return n.toggle()
                            }))
                        })), this.container.querySelector(".labjs-debug-overlay-menu").addEventListener("dblclick", (function () {
                            return n.container.classList.toggle("labjs-debug-large")
                        })), this.container.querySelector(".labjs-debug-data-download").addEventListener("click", (function (e) {
                            e.preventDefault(), n.context.options.datastore ? n.context.options.datastore.download("csv", t.options.datastore.makeFilename(n.filePrefix, "csv")) : alert("No datastore to download from")
                        })), document.body.appendChild(this.container)
                    }
                }, {
                    key: "onPrepare",
                    value: function () {
                        var t = this;
                        if (this.context.options.datastore) {
                            var n = io()((function () {
                                return t.render()
                            }), 100);
                            this.context.options.datastore.on("set", n), this.context.options.datastore.on("commit", n), this.context.options.datastore.on("update", n)
                        }
                    }
                }, {
                    key: "toggle",
                    value: function () {
                        this.isVisible = !this.isVisible, this.render(), document.body.classList.toggle("labjs-debugtools-visible")
                    }
                }, {
                    key: "render",
                    value: function () {
                        var t;
                        this.isVisible && (t = this.context.options.datastore ? function (t) {
                            var n = t.keys(!0),
                                e = n.map((function (t) {
                                    return "<th>".concat(t, "</th>")
                                })),
                                r = n.map((function (n) {
                                    return fo(t.state[n])
                                })),
                                o = t.data.slice().reverse().map((function (t) {
                                    return "<tr> ".concat(n.map((function (n) {
                                        return fo(t[n])
                                    })).join(""), " </tr>")
                                }));
                            return "\n    <table>\n      <tr>".concat(e.join("\n"), '</tr>\n      <tr class="labjs-debug-state">').concat(r.join("\n"), "</tr>\n      ").concat(o.join("\n"), "\n    </table>\n  ")
                        }(this.context.options.datastore) : function (t) {
                            return '\n  <div style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: center;">\n    '.concat(t, "\n  </div>")
                        }("No data store found in component"), this.container.querySelector(".labjs-debug-overlay-contents").innerHTML = t)
                    }
                }]), Debug
            }();

        function po(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function ho(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var vo = function (t) {
                var n = "Are you sure you want to close this window?";
                return t.returnValue = n, n
            },
            Download = function () {
                function Download() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.filePrefix,
                        e = t.fileType;
                    po(this, Download), this.el = null, this.filePrefix = n || "study", this.fileType = e || "csv"
                }
                return function (t, n, e) {
                    n && ho(t.prototype, n), e && ho(t, e)
                }(Download, [{
                    key: "handle",
                    value: function (t, n) {
                        var e = this;
                        "end" === n && t.options.datastore && (window.addEventListener("beforeunload", vo), this.el = document.createElement("div"), this.el.className = "popover", this.el.innerHTML = '\n        <div class="alert text-center">\n          <strong>Download data</strong>\n        </div>\n      ', this.el.addEventListener("click", (function () {
                            t.options.datastore.download(e.fileType, t.options.datastore.makeFilename(e.filePrefix, e.fileType)), window.removeEventListener("beforeunload", vo)
                        })), t.options.el.prepend(this.el))
                    }
                }]), Download
            }();

        function go(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function yo(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var mo = function () {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = n.message,
                    r = n.hint,
                    o = n.close;
                go(this, t), this.options = {
                    message: e || "This experiment requires full screen display",
                    hint: r || "Please click to continue in full screen mode",
                    close: null == o || o
                }
            }
            return function (t, n, e) {
                n && yo(t.prototype, n), e && yo(t, e)
            }(t, [{
                key: "handle",
                value: async function (t, n) {
                    if ("before:run" !== n || document.fullscreenElement) "end" === n && this.options.close && lab.util.fullscreen.exit();
                    else {
                        var e = document.createElement("div");
                        e.innerHTML = '\n        <div\n          class="modal w-m content-horizontal-center content-vertical-center text-center"\n        >\n          <p>\n            <span class="font-weight-bold">\n              '.concat(this.options.message, '\n            </span><br>\n            <span class="text-muted">\n              ').concat(this.options.hint, "\n            </span>\n          </p>\n        </div>\n      "), e.classList.add("overlay", "content-vertical-center", "content-horizontal-center"), document.body.appendChild(e), await new Promise((function (t) {
                            e.addEventListener("click", (async function (n) {
                                await lab.util.fullscreen.launch(document.documentElement), document.body.removeChild(e), t()
                            }), {
                                once: !0
                            })
                        }))
                    }
                }
            }]), t
        }();

        function bo(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function wo(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var Logger = function () {
            function Logger() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                bo(this, Logger), this.title = t.title
            }
            return function (t, n, e) {
                n && wo(t.prototype, n), e && wo(t, e)
            }(Logger, [{
                key: "handle",
                value: function (t, n) {
                    console.log("Component ".concat(this.title, " received ").concat(n))
                }
            }]), Logger
        }();
        e(213), e(260);

        function xo(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function Oo(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var So = function () {
                var t = window.Intl.DateTimeFormat().resolvedOptions();
                return {
                    labjs_version: Lo,
                    labjs_build: Do,
                    location: window.location.href,
                    userAgent: window.navigator.userAgent,
                    platform: window.navigator.platform,
                    language: window.navigator.language,
                    locale: t.locale,
                    timeZone: t.timeZone,
                    timezoneOffset: (new Date).getTimezoneOffset(),
                    screen_width: window.screen.width,
                    screen_height: window.screen.height,
                    scroll_width: document.body.scrollWidth,
                    scroll_height: document.body.scrollHeight,
                    window_innerWidth: window.innerWidth,
                    window_innerHeight: window.innerHeight,
                    devicePixelRatio: window.devicePixelRatio
                }
            },
            Metadata = function () {
                function Metadata() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    xo(this, Metadata), this.options = t
                }
                return function (t, n, e) {
                    n && Oo(t.prototype, n), e && Oo(t, e)
                }(Metadata, [{
                    key: "handle",
                    value: function (t, n) {
                        if ("prepare" === n) {
                            var e = function (t) {
                                return dn()(Array.from(new URLSearchParams(t).entries()))
                            }(this.options.location_search || window.location.search);
                            t.options.datastore.set({
                                url: e,
                                meta: So()
                            })
                        }
                    }
                }]), Metadata
            }();

        function jo(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var Eo = function (t) {
                var n = "Closing this window will abort the study. Are you sure?";
                return t.returnValue = n, n
            },
            Ao = function () {
                function t() {
                    ! function (t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return function (t, n, e) {
                    n && jo(t.prototype, n), e && jo(t, e)
                }(t, [{
                    key: "handle",
                    value: function (t, n) {
                        "prepare" === n ? window.addEventListener("beforeunload", Eo) : "end" === n && window.removeEventListener("beforeunload", Eo)
                    }
                }]), t
            }();

        function ko(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function To(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var Po = function () {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = n.origin,
                    r = n.target,
                    o = n.messageType;
                ko(this, t), this.origin = e || "*", this.target = r || window.parent, this.messageType = o || "labjs.data"
            }
            return function (t, n, e) {
                n && To(t.prototype, n), e && To(t, e)
            }(t, [{
                key: "handle",
                value: function (t, n) {
                    "epilogue" === n && this.target.postMessage({
                        type: this.messageType,
                        metadata: {
                            payload: "full",
                            url: window.location.href
                        },
                        raw: t.options.datastore.data,
                        json: t.options.datastore.exportJson(),
                        csv: t.options.datastore.exportCsv()
                    }, this.origin)
                }
            }]), t
        }();

        function Ro(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var _o = function () {
            function t() {
                ! function (t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            return function (t, n, e) {
                n && Ro(t.prototype, n), e && Ro(t, e)
            }(t, [{
                key: "handle",
                value: function (t, n) {
                    if ("after:end" === n && t.options.datastore) {
                        var e = document.querySelector('form[name="labjs-data"]');
                        try {
                            var r = new ClipboardEvent("").clipboardData || new DataTransfer;
                            r.items.add(new File([t.options.datastore.exportCsv()], "data.csv")), e.elements.dataFile.files = r.files
                        } catch (n) {
                            console.log("Couldn't append data file to form falling back to direkt insertion. Error was", n), e.elements.dataRaw.value = t.options.datastore.exportCsv()
                        }
                        e.submit()
                    }
                }
            }]), t
        }();

        function Mo(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? Object(arguments[n]) : {},
                    r = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })))), r.forEach((function (n) {
                    Io(t, n, e[n])
                }))
            }
            return t
        }

        function Io(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t
        }

        function Co(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function Fo(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var No = function () {
            function Transmit() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Co(this, Transmit), this.url = t.url, this.metadata = t.metadata || {}, this.metadata.id = this.metadata.id || fn(), this.updates = {
                    incremental: !(t.updates && !1 === t.updates.incremental),
                    full: !(t.updates && !1 === t.updates.full)
                }, this.callbacks = t.callbacks || {}, this.headers = t.headers || {}, this.encoding = t.encoding || "json"
            }
            return function (t, n, e) {
                n && Fo(t.prototype, n), e && Fo(t, e)
            }(Transmit, [{
                key: "handle",
                value: function (t, n) {
                    var e = this,
                        r = this.url,
                        o = this.metadata;
                    switch (n) {
                        case "prepare":
                            this.updates.incremental && t.options.datastore.on("idle", (function () {
                                this.queueIncrementalTransmission(r, Mo({}, o, {
                                    payload: "incremental"
                                }), {
                                    headers: this.headers,
                                    encoding: this.encoding
                                })
                            })), this.callbacks.setup && this.callbacks.setup.call(this);
                            break;
                        case "epilogue":
                            this.updates.full && t.options.datastore.transmit(r, Mo({}, o, {
                                payload: "full"
                            }), {
                                headers: this.headers,
                                encoding: this.encoding
                            }).then((function (n) {
                                return e.updates.incremental && t.options.datastore.flushIncrementalTransmissionQueue(), n
                            })).then(this.callbacks.full)
                    }
                }
            }]), Transmit
        }();
        e.d(n, "version", (function () {
            return Lo
        })), e.d(n, "build", (function () {
            return Do
        })), e.d(n, "core", (function () {
            return Uo
        })), e.d(n, "canvas", (function () {
            return qo
        })), e.d(n, "html", (function () {
            return Bo
        })), e.d(n, "flow", (function () {
            return zo
        })), e.d(n, "plugins", (function () {
            return Vo
        })), e.d(n, "data", (function () {
            return Wo
        })), e.d(n, "util", (function () {
            return Ho
        }));
        var Lo = "20.0.1",
            Do = {
                flavor: "production",
                commit: "2b713552c16bc7aa9c6da31a44bae8ef1cdc6804"
            },
            Uo = {
                Component: ae,
                Dummy: Dummy
            },
            qo = {
                Frame: to,
                Screen: Zr
            },
            Bo = {
                Screen: Or,
                Form: Form,
                Frame: Sr,
                Page: jr
            },
            zo = {
                Sequence: Oe,
                Parallel: je,
                Loop: Se
            },
            Vo = {
                Debug: lo,
                Download: Download,
                Fullscreen: mo,
                Logger: Logger,
                Metadata: Metadata,
                NavigationGuard: Ao,
                PostMessage: Po,
                Submit: _o,
                Transmit: No
            },
            Wo = {
                Store: nt
            },
            Ho = {
                Random: pn,
                fromObject: fromObject.a,
                canvas: {
                    makeRenderFunction: Cr,
                    transform: Ir
                },
                combinatorics: {
                    product: function* () {
                        for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                        for (var r = n.map((function (t) {
                                return Math.max(t.length, 1)
                            })).reverse().reduce((function (t, n, e) {
                                return t.concat([(t[e - 1] || 1) * n])
                            }), []).reverse(), o = function* (t) {
                                yield n.map((function (n, e) {
                                    return n[Math.floor(t / (r[e + 1] || 1)) % n.length]
                                }))
                            }, i = 0; i < r[0]; i++) yield* o(i)
                    }
                },
                events: {
                    logTimestamp: function (t) {
                        return function (n) {
                            n.preventDefault(), this.data[t] = mt(n.timeStamp)
                        }
                    }
                },
                fullscreen: {
                    launch: function (t) {
                        return t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : void 0
                    },
                    exit: function () {
                        return document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : void 0
                    }
                },
                geometry: {
                    distance: function (t, n) {
                        var e = Er(t, 2),
                            r = e[0],
                            o = e[1],
                            i = Er(n, 2),
                            a = i[0],
                            u = i[1];
                        return Math.sqrt(Math.pow(r - a, 2) + Math.pow(o - u, 2))
                    },
                    polygon: function (t, n) {
                        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        return Zt()(t).map((function (o) {
                            return kr(t, n, o, e, r)
                        }))
                    },
                    polygonVertex: kr,
                    toRadians: Ar
                },
                stats: {
                    sum: no,
                    mean: eo,
                    variance: ro,
                    std: function (t) {
                        return Math.sqrt(ro(t))
                    }
                },
                timing: {
                    FrameTimeout: Ot
                },
                tree: {
                    traverse: zn,
                    reduce: Vn
                }
            }
    }])
}));
//# sourceMappingURL=lab.js.map