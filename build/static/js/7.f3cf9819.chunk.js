(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([[7], {
    1074: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "default", (function() {
            return pe
        }
        ));
        var c, r, a, i, s, o, u, l, j, b, d, O, p, f, x = n(18), m = n(0), h = n(8), g = n(12), v = n(54), k = n(246), w = n(2), S = n.n(w), y = n(11), T = n(22), z = n(27), E = n(249), L = n(15), Q = n(13), R = n.n(Q), J = n(58), C = n(24), N = n(92), H = n(245), I = n(151), K = function() {
            var e = Object(m.useState)([])
              , t = Object(T.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , r = Object(z.c)().account
              , a = Object(I.a)().fastRefresh;
            return Object(m.useEffect)((function() {
                r && function() {
                    var e = Object(y.a)(S.a.mark((function e() {
                        var t, n, a;
                        return S.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = H.b.map((function(e) {
                                        return {
                                            address: Object(C.h)(),
                                            name: "pendingCake",
                                            params: [e.pid, r]
                                        }
                                    }
                                    )),
                                    e.next = 3,
                                    Object(J.a)(N, t);
                                case 3:
                                    n = e.sent,
                                    a = H.b.map((function(e, t) {
                                        return Object(L.a)(Object(L.a)({}, e), {}, {
                                            balance: new R.a(n[t])
                                        })
                                    }
                                    )),
                                    c(a);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [r, a]),
            n
        }, B = n(242), F = function() {
            var e = Object(m.useState)([])
              , t = Object(T.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , r = Object(z.c)().account
              , a = Object(I.a)().fastRefresh;
            return Object(m.useEffect)((function() {
                r && function() {
                    var e = Object(y.a)(S.a.mark((function e() {
                        var t, n;
                        return S.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = H.b.map((function(e) {
                                        return {
                                            address: Object(C.h)(),
                                            name: "pendingCake",
                                            params: [e.pid, r]
                                        }
                                    }
                                    )),
                                    e.next = 3,
                                    Object(J.a)(N, t);
                                case 3:
                                    n = e.sent,
                                    c(n);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [r, a]),
            n
        }, P = n(45), U = n(257), A = n(5), V = function(e) {
            var t = e.value
              , n = e.decimals
              , c = e.fontSize
              , r = void 0 === c ? "40px" : c
              , a = e.lineHeight
              , i = void 0 === a ? "1" : a
              , s = e.prefix
              , o = void 0 === s ? "" : s
              , u = e.bold
              , l = void 0 === u || u
              , j = e.color
              , b = void 0 === j ? "text" : j
              , d = Object(U.useCountUp)({
                start: 0,
                end: t,
                duration: 1,
                separator: ",",
                decimals: void 0 !== n ? n : t < 0 ? 4 : t > 1e5 ? 0 : 3
            })
              , O = d.countUp
              , p = d.update
              , f = Object(m.useRef)(p);
            return Object(m.useEffect)((function() {
                f.current(t)
            }
            ), [t, f]),
            Object(A.jsxs)(g.L, {
                bold: l,
                fontSize: r,
                style: {
                    lineHeight: i
                },
                color: b,
                children: [o, O]
            })
        }, D = h.e.div(c || (c = Object(x.a)(["\n  margin-bottom: 24px;\n}\n"]))), M = function() {
            var e = Object(v.a)()
              , t = Object(z.c)().account
              , n = F().reduce((function(e, t) {
                return e + new R.a(t).div(new R.a(10).pow(18)).toNumber()
            }
            ), 0);
            new R.a(n).multipliedBy(Object(P.k)()).toNumber();
            return t ? Object(A.jsx)(D, {
                children: Object(A.jsx)(V, {
                    value: n,
                    lineHeight: "1.5"
                })
            }) : Object(A.jsx)(g.L, {
                color: "textDisabled",
                style: {
                    lineHeight: "76px"
                },
                children: e(298, "Locked")
            })
        }, q = n(866), W = n(72), _ = function() {
            var e = Object(v.a)()
              , t = Object(q.a)(Object(C.d)());
            new Q.BigNumber(Object(W.a)(t)).multipliedBy(Object(P.k)()).toNumber();
            return Object(z.c)().account ? Object(A.jsx)(A.Fragment, {
                children: Object(A.jsx)(V, {
                    value: Object(W.a)(t),
                    decimals: 4,
                    fontSize: "24px",
                    lineHeight: "36px"
                })
            }) : Object(A.jsx)(g.L, {
                color: "textDisabled",
                style: {
                    lineHeight: "54px"
                },
                children: e(298, "Locked")
            })
        }, X = Object(h.e)(g.k)(r || (r = Object(x.a)(["\n  background-image: url('/images/cake-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))), $ = h.e.div(a || (a = Object(x.a)(["\n  margin-bottom: 16px;\n"]))), G = h.e.img(i || (i = Object(x.a)(["\n  margin-bottom: 16px;\n"]))), Y = h.e.div(s || (s = Object(x.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), (function(e) {
            return e.theme.colors.textSubtle
        }
        )), Z = h.e.div(o || (o = Object(x.a)(["\n  margin-top: 24px;\n"]))), ee = function() {
            var e = Object(m.useState)(!1)
              , t = Object(T.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , r = Object(z.c)().account
              , a = Object(v.a)()
              , i = K().filter((function(e) {
                return e.balance.toNumber() > 0
            }
            ))
              , s = Object(E.a)(i.map((function(e) {
                return e.pid
            }
            ))).onReward
              , o = Object(m.useCallback)(Object(y.a)(S.a.mark((function e() {
                return S.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return c(!0),
                            e.prev = 1,
                            e.next = 4,
                            s();
                        case 4:
                            e.next = 8;
                            break;
                        case 6:
                            e.prev = 6,
                            e.t0 = e.catch(1);
                        case 8:
                            return e.prev = 8,
                            c(!1),
                            e.finish(8);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 6, 8, 11]])
            }
            ))), [s]);
            return Object(A.jsx)(X, {
                children: Object(A.jsxs)(g.l, {
                    children: [Object(A.jsx)(g.t, {
                        size: "xl",
                        mb: "24px",
                        children: a(542, "Farms & Staking")
                    }), Object(A.jsx)(G, {
                        src: "/images/cake.svg",
                        alt: "cake logo",
                        width: 64,
                        height: 64
                    }), Object(A.jsxs)($, {
                        children: [Object(A.jsxs)(Y, {
                            children: [a(544, "JOKER to Harvest"), ":"]
                        }), Object(A.jsx)(M, {})]
                    }), Object(A.jsxs)($, {
                        children: [Object(A.jsxs)(Y, {
                            children: [a(546, "JOKER in Wallet"), ":"]
                        }), Object(A.jsx)(_, {})]
                    }), Object(A.jsx)(Z, {
                        children: r ? Object(A.jsx)(g.g, {
                            id: "harvest-all",
                            disabled: i.length <= 0 || n,
                            onClick: o,
                            width: "100%",
                            children: n ? a(548, "Collecting JOKER") : a(532, "Harvest all (".concat(i.length, ")"))
                        }) : Object(A.jsx)(B.a, {
                            width: "100%"
                        })
                    })]
                })
            })
        }, te = Object(h.e)(g.k)(u || (u = Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))), ne = h.e.div(l || (l = Object(x.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))), ce = function() {
            var e = Object(v.a)()
              , t = Object(q.c)()
              , n = Object(W.a)(Object(q.b)(Object(C.d)()))
              , c = t ? Object(W.a)(t) - n : 0;
            return Object(A.jsx)(te, {
                children: Object(A.jsxs)(g.l, {
                    children: [Object(A.jsx)(g.t, {
                        size: "xl",
                        mb: "24px",
                        children: e(534, "JOKER Stats")
                    }), Object(A.jsxs)(ne, {
                        children: [Object(A.jsx)(g.L, {
                            fontSize: "14px",
                            children: e(536, "Total JOKER Supply")
                        }), c && Object(A.jsx)(V, {
                            fontSize: "14px",
                            value: c
                        })]
                    }), Object(A.jsxs)(ne, {
                        children: [Object(A.jsx)(g.L, {
                            fontSize: "14px",
                            children: e(538, "Total JOKER Burned")
                        }), Object(A.jsx)(V, {
                            fontSize: "14px",
                            decimals: 0,
                            value: n
                        })]
                    }), Object(A.jsxs)(ne, {
                        children: [Object(A.jsx)(g.L, {
                            fontSize: "14px",
                            children: e(540, "New JOKER/block")
                        }), Object(A.jsx)(V, {
                            fontSize: "14px",
                            decimals: 0,
                            value: 25
                        })]
                    })]
                })
            })
        }, re = Object(h.e)(g.k)(j || (j = Object(x.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))), ae = function() {
            var e = Object(v.a)()
              , t = function() {
                var e = Object(m.useState)(null)
                  , t = Object(T.a)(e, 2)
                  , n = t[0]
                  , c = t[1];
                return Object(m.useEffect)((function() {
                    !function() {
                        var e = Object(y.a)(S.a.mark((function e() {
                            var t, n;
                            return S.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        fetch("https://openapi.debank.com/v1/protocol?id=bsc_pancakeswap");
                                    case 3:
                                        return t = e.sent,
                                        e.next = 6,
                                        t.json();
                                    case 6:
                                        n = e.sent,
                                        c(n),
                                        e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10,
                                        e.t0 = e.catch(0),
                                        console.error("Unable to fetch data:", e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, 10]])
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }
                ), [c]),
                n
            }()
              , n = t ? t.tvl.toLocaleString("en-US", {
                maximumFractionDigits: 0
            }) : null;
            return Object(A.jsx)(re, {
                children: Object(A.jsxs)(g.l, {
                    children: [Object(A.jsx)(g.t, {
                        size: "lg",
                        mb: "24px",
                        color: "secondary",
                        children: e(762, "Total Value Locked (TVL)")
                    }), t ? Object(A.jsxs)(A.Fragment, {
                        children: [Object(A.jsx)(g.t, {
                            size: "xl",
                            children: "$13,562"
                        }), Object(A.jsx)(g.L, {
                            color: "textSubtle",
                            children: e(764, "Across all internal and external JOKER LPs and Syrup Pools")
                        })]
                    }) : Object(A.jsx)(A.Fragment, {
                        children: Object(A.jsx)(g.J, {
                            height: 66
                        })
                    })]
                })
            })
        }, ie = n(85), se = n(46), oe = n(150), ue = Object(h.e)(g.k)(b || (b = Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  ", " {\n    margin: 0;\n    max-width: none;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.lg
        }
        )), le = Object(h.e)(g.t).attrs({
            size: "xl"
        })(d || (d = Object(x.a)(["\n  line-height: 44px;\n"]))), je = function() {
            var e = Object(v.a)()
              , t = Object(P.d)()
              , n = Object(P.j)()
              , c = Object(m.useRef)(Number.MIN_VALUE)
              , r = function() {
                var e = t.filter((function(e) {
                    return 0 !== e.pid && "0X" !== e.multiplier
                }
                ));
                return a(e),
                (100 * c.current).toLocaleString("en-US").slice(0, -1)
            }
              , a = Object(m.useCallback)((function(e) {
                var r, a = new R.a((null === (r = t.find((function(e) {
                    return e.pid === oe.e
                }
                ))) || void 0 === r ? void 0 : r.tokenPriceVsQuote) || 0);
                e.map((function(e) {
                    if (!e.tokenAmount || !e.lpTotalInQuoteToken || !e.lpTotalInQuoteToken)
                        return e;
                    var t = oe.d.times(e.poolWeight)
                      , r = t.times(oe.c)
                      , i = a.times(r).div(e.lpTotalInQuoteToken);
                    if (e.quoteTokenSymbol === se.b.BUSD)
                        i = a.times(r).div(e.lpTotalInQuoteToken).times(n);
                    else if (e.quoteTokenSymbol === se.b.CAKE)
                        i = r.div(e.lpTotalInQuoteToken);
                    else if (e.dual) {
                        var s = e && a.times(t).times(oe.c).div(e.lpTotalInQuoteToken)
                          , o = e.tokenPriceVsQuote && new R.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(oe.c).div(e.lpTotalInQuoteToken);
                        i = s && o && s.plus(o)
                    }
                    return c.current < i.toNumber() && (c.current = i.toNumber()),
                    i
                }
                ))
            }
            ), [n, t]);
            return Object(A.jsx)(ue, {
                children: Object(A.jsxs)(g.l, {
                    children: [Object(A.jsx)(g.t, {
                        color: "contrast",
                        size: "lg",
                        children: "Earn up to"
                    }), Object(A.jsx)(le, {
                        color: "#7645d9",
                        children: r() ? "".concat(r(), "% ").concat(e(736, "APR")) : Object(A.jsx)(g.J, {
                            animation: "pulse",
                            variant: "rect",
                            height: "44px"
                        })
                    }), Object(A.jsxs)(g.s, {
                        justifyContent: "space-between",
                        children: [Object(A.jsx)(g.t, {
                            color: "contrast",
                            size: "lg",
                            children: "in Farms"
                        }), Object(A.jsx)(ie.b, {
                            exact: !0,
                            activeClassName: "active",
                            to: "/farms",
                            id: "farm-apy-cta",
                            children: Object(A.jsx)(g.c, {
                                mt: 30,
                                color: "primary"
                            })
                        })]
                    })]
                })
            })
        }, be = h.e.div(O || (O = Object(x.a)(["\n  align-items: center;\n  // background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n  background-repeat: no-repeat;\n  background-position: left top, right top;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 136px;\n  text-align: center;\n\n  ", " {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.lg
        }
        )), de = Object(h.e)(g.d)(p || (p = Object(x.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        )), Oe = Object(h.e)(g.d)(f || (f = Object(x.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        )), pe = function() {
            var e = Object(v.a)();
            return Object(A.jsxs)(k.a, {
                children: [Object(A.jsxs)(be, {
                    children: [Object(A.jsx)(g.t, {
                        as: "h1",
                        size: "xl",
                        mb: "24px",
                        color: "secondary",
                        children: e(576, "JokerFarm")
                    }), Object(A.jsx)(g.L, {
                        children: e(578, "A DEX and yield farm on BSC with high APY/APR.")
                    })]
                }), Object(A.jsxs)("div", {
                    children: [Object(A.jsxs)(de, {
                        children: [Object(A.jsx)(ee, {}), Object(A.jsx)(je, {})]
                    }), Object(A.jsx)(Oe, {}), Object(A.jsxs)(de, {
                        children: [Object(A.jsx)(ce, {}), Object(A.jsx)(ae, {})]
                    })]
                })]
            })
        }
    },
    866: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return O
        }
        )),
        n.d(t, "b", (function() {
            return p
        }
        ));
        var c = n(2)
          , r = n.n(c)
          , a = n(11)
          , i = n(22)
          , s = n(0)
          , o = n(13)
          , u = n.n(o)
          , l = n(27)
          , j = n(41)
          , b = n(65)
          , d = n(151)
          , O = function() {
            var e = Object(d.a)().slowRefresh
              , t = Object(s.useState)()
              , n = Object(i.a)(t, 2)
              , c = n[0]
              , o = n[1];
            return Object(s.useEffect)((function() {
                function e() {
                    return (e = Object(a.a)(r.a.mark((function e() {
                        var t, n;
                        return r.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(j.d)(),
                                    e.next = 3,
                                    t.methods.totalSupply().call();
                                case 3:
                                    n = e.sent,
                                    o(new u.a(n));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                !function() {
                    e.apply(this, arguments)
                }()
            }
            ), [e]),
            c
        }
          , p = function(e) {
            var t = Object(s.useState)(new u.a(0))
              , n = Object(i.a)(t, 2)
              , c = n[0]
              , o = n[1]
              , l = Object(d.a)().slowRefresh
              , O = Object(b.a)();
            return Object(s.useEffect)((function() {
                (function() {
                    var t = Object(a.a)(r.a.mark((function t() {
                        var n, c;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = Object(j.a)(e, O),
                                    t.next = 3,
                                    n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                case 3:
                                    c = t.sent,
                                    o(new u.a(c));
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }
                )()()
            }
            ), [O, e, l]),
            c
        };
        t.a = function(e) {
            var t = Object(s.useState)(new u.a(0))
              , n = Object(i.a)(t, 2)
              , c = n[0]
              , o = n[1]
              , O = Object(l.c)().account
              , p = Object(b.a)()
              , f = Object(d.a)().fastRefresh;
            return Object(s.useEffect)((function() {
                O && function() {
                    var t = Object(a.a)(r.a.mark((function t() {
                        var n, c;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = Object(j.a)(e, p),
                                    t.next = 3,
                                    n.methods.balanceOf(O).call();
                                case 3:
                                    c = t.sent,
                                    o(new u.a(c));
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()()
            }
            ), [O, e, p, f]),
            c
        }
    }
}]);
//# sourceMappingURL=7.f3cf9819.chunk.js.map
