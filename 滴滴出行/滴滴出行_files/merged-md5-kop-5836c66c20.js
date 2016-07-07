! function(e) {
    "use strict";
    function n(e, n) {
        var t = (65535 & e) + (65535 & n),
            o = (e >> 16) + (n >> 16) + (t >> 16);
        return o << 16 | 65535 & t
    }
    function t(e, n) {
        return e << n | e >>> 32 - n
    }
    function o(e, o, i, r, a, u) {
        return n(t(n(n(o, e), n(r, u)), a), i)
    }
    function i(e, n, t, i, r, a, u) {
        return o(n & t | ~n & i, e, n, r, a, u)
    }
    function r(e, n, t, i, r, a, u) {
        return o(n & i | t & ~i, e, n, r, a, u)
    }
    function a(e, n, t, i, r, a, u) {
        return o(n ^ t ^ i, e, n, r, a, u)
    }
    function u(e, n, t, i, r, a, u) {
        return o(t ^ (n | ~i), e, n, r, a, u)
    }
    function c(e, t) {
        e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
        var o, c, s, d, f, p = 1732584193,
            h = -271733879,
            l = -1732584194,
            g = 271733878;
        for (o = 0; o < e.length; o += 16) c = p, s = h, d = l, f = g, p = i(p, h, l, g, e[o], 7, -680876936), g = i(g, p, h, l, e[o + 1], 12, -389564586), l = i(l, g, p, h, e[o + 2], 17, 606105819), h = i(h, l, g, p, e[o + 3], 22, -1044525330), p = i(p, h, l, g, e[o + 4], 7, -176418897), g = i(g, p, h, l, e[o + 5], 12, 1200080426), l = i(l, g, p, h, e[o + 6], 17, -1473231341), h = i(h, l, g, p, e[o + 7], 22, -45705983), p = i(p, h, l, g, e[o + 8], 7, 1770035416), g = i(g, p, h, l, e[o + 9], 12, -1958414417), l = i(l, g, p, h, e[o + 10], 17, -42063), h = i(h, l, g, p, e[o + 11], 22, -1990404162), p = i(p, h, l, g, e[o + 12], 7, 1804603682), g = i(g, p, h, l, e[o + 13], 12, -40341101), l = i(l, g, p, h, e[o + 14], 17, -1502002290), h = i(h, l, g, p, e[o + 15], 22, 1236535329), p = r(p, h, l, g, e[o + 1], 5, -165796510), g = r(g, p, h, l, e[o + 6], 9, -1069501632), l = r(l, g, p, h, e[o + 11], 14, 643717713), h = r(h, l, g, p, e[o], 20, -373897302), p = r(p, h, l, g, e[o + 5], 5, -701558691), g = r(g, p, h, l, e[o + 10], 9, 38016083), l = r(l, g, p, h, e[o + 15], 14, -660478335), h = r(h, l, g, p, e[o + 4], 20, -405537848), p = r(p, h, l, g, e[o + 9], 5, 568446438), g = r(g, p, h, l, e[o + 14], 9, -1019803690), l = r(l, g, p, h, e[o + 3], 14, -187363961), h = r(h, l, g, p, e[o + 8], 20, 1163531501), p = r(p, h, l, g, e[o + 13], 5, -1444681467), g = r(g, p, h, l, e[o + 2], 9, -51403784), l = r(l, g, p, h, e[o + 7], 14, 1735328473), h = r(h, l, g, p, e[o + 12], 20, -1926607734), p = a(p, h, l, g, e[o + 5], 4, -378558), g = a(g, p, h, l, e[o + 8], 11, -2022574463), l = a(l, g, p, h, e[o + 11], 16, 1839030562), h = a(h, l, g, p, e[o + 14], 23, -35309556), p = a(p, h, l, g, e[o + 1], 4, -1530992060), g = a(g, p, h, l, e[o + 4], 11, 1272893353), l = a(l, g, p, h, e[o + 7], 16, -155497632), h = a(h, l, g, p, e[o + 10], 23, -1094730640), p = a(p, h, l, g, e[o + 13], 4, 681279174), g = a(g, p, h, l, e[o], 11, -358537222), l = a(l, g, p, h, e[o + 3], 16, -722521979), h = a(h, l, g, p, e[o + 6], 23, 76029189), p = a(p, h, l, g, e[o + 9], 4, -640364487), g = a(g, p, h, l, e[o + 12], 11, -421815835), l = a(l, g, p, h, e[o + 15], 16, 530742520), h = a(h, l, g, p, e[o + 2], 23, -995338651), p = u(p, h, l, g, e[o], 6, -198630844), g = u(g, p, h, l, e[o + 7], 10, 1126891415), l = u(l, g, p, h, e[o + 14], 15, -1416354905), h = u(h, l, g, p, e[o + 5], 21, -57434055), p = u(p, h, l, g, e[o + 12], 6, 1700485571), g = u(g, p, h, l, e[o + 3], 10, -1894986606), l = u(l, g, p, h, e[o + 10], 15, -1051523), h = u(h, l, g, p, e[o + 1], 21, -2054922799), p = u(p, h, l, g, e[o + 8], 6, 1873313359), g = u(g, p, h, l, e[o + 15], 10, -30611744), l = u(l, g, p, h, e[o + 6], 15, -1560198380), h = u(h, l, g, p, e[o + 13], 21, 1309151649), p = u(p, h, l, g, e[o + 4], 6, -145523070), g = u(g, p, h, l, e[o + 11], 10, -1120210379), l = u(l, g, p, h, e[o + 2], 15, 718787259), h = u(h, l, g, p, e[o + 9], 21, -343485551), p = n(p, c), h = n(h, s), l = n(l, d), g = n(g, f);
        return [p, h, l, g]
    }
    function s(e) {
        var n, t = "";
        for (n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
        return t
    }
    function d(e) {
        var n, t = [];
        for (t[(e.length >> 2) - 1] = void 0, n = 0; n < t.length; n += 1) t[n] = 0;
        for (n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
        return t
    }
    function f(e) {
        return s(c(d(e), 8 * e.length))
    }
    function p(e, n) {
        var t, o, i = d(e),
            r = [],
            a = [];
        for (r[15] = a[15] = void 0, i.length > 16 && (i = c(i, 8 * e.length)), t = 0; 16 > t; t += 1) r[t] = 909522486 ^ i[t], a[t] = 1549556828 ^ i[t];
        return o = c(r.concat(d(n)), 512 + 8 * n.length), s(c(a.concat(o), 640))
    }
    function h(e) {
        var n, t, o = "0123456789abcdef",
            i = "";
        for (t = 0; t < e.length; t += 1) n = e.charCodeAt(t), i += o.charAt(n >>> 4 & 15) + o.charAt(15 & n);
        return i
    }
    function l(e) {
        return unescape(encodeURIComponent(e))
    }
    function g(e) {
        return f(l(e))
    }
    function y(e) {
        return h(g(e))
    }
    function m(e, n) {
        return p(l(e), l(n))
    }
    function v(e, n) {
        return h(m(e, n))
    }
    function w(e, n, t) {
        return n ? t ? m(n, e) : v(n, e) : t ? g(e) : y(e)
    }
    "function" == typeof define && define.amd ? define(function() {
        return w
    }) : e.md5 = w
}(this),
function() {
    var e = function(e) {
        var n;
        return function() {
            return n || (n = e.apply(this, arguments))
        }
    }, n = function() {
        if (window.XMLHttpRequest) return new window.XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }, t = function() {}, o = e(n),
        i = {}, r = function(e) {
            var n = this;
            n.config = dd.extend({}, r.config, window.KOPConfig || {}, e)
        };
    r.config = {
        host: "//daijia.kuaidadi.com/gateway?",
        appKey: "fd88b8a3ef694ff4b79389085c8a45ba",
        appSec: "89f29f59a2054768b2f51fddccde9578",
        ttid: "h5",
        userRole: "2",
        appVersion: "1.0.0",
        apiVersion: "1.0.0",
        osType: 3,
        osVersion: "1.0.0",
        hwId: "10000",
        mobileType: "web"
    }, dd.extend(r.prototype, {
        ajax: function(e, r) {
            if (e) {
                r = dd.extend({}, i, r);
                var a, u = c ? new o : n(),
                    c = r.isSequenceReq === !0,
                    s = r.async !== !1,
                    d = r.method.toLowerCase() || "get",
                    f = r.timeout,
                    p = r.successFn || t,
                    h = r.failFn || t,
                    l = r.completeFn || t,
                    g = r.data,
                    y = function() {
                        if (4 === u.readyState) {
                            a && clearTimeout(a);
                            var e = u.responseText;
                            200 === u.status ? p(e) : h(e), l(e)
                        }
                    };
                c && 0 !== u.readyState && u.abort(), "get" == d && (g && (e += (e.indexOf("?") > -1 ? "&" : "?") + dd.urlParams(g)), g = null), u.open(d, e, s), "post" == d && u.setRequestHeader("Content-type", "text/plain"), u.onreadystatechange = y, u.send(g), f && (a = setTimeout(function() {
                    u.abort(), f.callback && f.callback()
                }, f.millisecond || 1e4))
            }
        },
        send: function(e, n, t, o, i, r) {
            var a = this,
                u = a.config.host + a._getInfo(e, n, o, t);
            a.ajax(u, {
                method: "post",
                data: encodeURIComponent(JSON.stringify(n)),
                async: !0,
                successFn: function(e) {
                    if (e = JSON.parse(e), e && 200 === e.code) {
                        var n = null;
                        if (e.data) if (dd.isObj(e.data)) n = e.data;
                        else try {
                            n = JSON.parse(e.data)
                        } catch (t) {
                            n = e.data
                        }
                        i && i(n)
                    } else r && r(e.code, e.msg)
                },
                failFn: function(e) {
                    r && r(e, "网络异常~")
                }
            })
        },
        _getInfo: function(e, n, t, o) {
            var i = this,
                r = i.config,
                a = (new Date).getTime(),
                u = i._getSign(e, n, t, o, a),
                c = ["api=" + e, "apiVersion=" + r.apiVersion, "appKey=" + r.appKey, "appVersion=" + r.appVersion, "hwId=" + r.hwId, "mobileType=" + r.mobileType, "osType=" + r.osType, "osVersion=" + r.osVersion, "sign=" + u, "timestamp=" + a, "ttid=" + r.ttid, "userRole=" + r.userRole];
            return t && c.push("token=" + t), o && c.push("userId=" + o), c.join("&")
        },
        _getSign: function(e, n, t, o, i) {
            var r, a = this,
                u = a.config,
                c = {
                    api: e,
                    apiVersion: u.apiVersion,
                    appKey: u.appKey,
                    appVersion: u.appVersion,
                    hwId: u.hwId,
                    mobileType: u.mobileType,
                    osType: u.osType,
                    osVersion: u.osVersion,
                    timestamp: i,
                    ttid: u.ttid,
                    userRole: u.userRole
                }, s = [];
            return t && (c.token = t), o && (c.userId = o), c = dd.extend(c, n), r = [], dd.each(c, function(e) {
                r.push(e)
            }), r = r.sort(), dd.each(r, function(e, n) {
                s.push(n + c[n])
            }), s = u.appSec + s.join("") + u.appSec, s = md5(s)
        }
    }), dd || (dd = {}), dd.KOP = r
}();