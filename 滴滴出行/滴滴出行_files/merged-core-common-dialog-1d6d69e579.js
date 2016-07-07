! function(t, e) {
    function n(t, e) {
        return g.isFn(t) ? n.ready(t) : new m(t, e)
    }
    function i() {
        if (t.XMLHttpRequest) return new t.XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function o(t, e) {
        if (t) {
            e = p({}, b, e);
            var o, a = e.isSequenceReq === !0,
                r = a ? new w : i(),
                c = e.async !== !1,
                s = e.method.toLowerCase() || "get",
                d = e.timeout,
                u = e.successFn || l,
                f = e.failFn || l,
                h = e.completeFn || l,
                g = e.data;
            b && (g = p({}, g, b.data));
            var m = function() {
                if (4 === r.readyState) {
                    o && clearTimeout(o);
                    var t = r.responseText;
                    200 === r.status ? u(t) : f(t), h(t)
                }
            };
            a && 0 !== r.readyState && r.abort(), "get" == s && (g && (t += (t.indexOf("?") > -1 ? "&" : "?") + n.urlParams(g)), g = null), r.open(s, t, c), "post" == s && (g = n.urlParams(g), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), r.onreadystatechange = m, r.send(g), d && (o = setTimeout(function() {
                r.abort(), d.callback && d.callback()
            }, d.millisecond || 1e4))
        }
    }
    function a(t, e) {
        e = e || {};
        var i = e.successFn || l;
        o(t, p({}, e, {
            successFn: function(t) {
                i(n.parseJSON(t) || {})
            }
        }))
    }
    var r = t.document,
        c = 1,
        s = function() {
            return c++
        }, l = function() {}, d = function(t, e) {
            return Object.prototype.toString.call(t) === "[object " + e + "]"
        }, u = function(t, e) {
            if (t && g.isFn(e)) if (t.length) for (var n = 0, i = t.length; i > n && !1 !== e.call(t[n] || {}, n, t[n]); n++);
            else if (g.isObj(t)) for (var o in t) if (!1 === e.call(t[o] || {}, o, t[o])) break
        }, p = function(t) {
            return u(arguments, function(e, n) {
                if (e > 0 && n) for (var i in n) t[i] = n[i]
            }), t
        }, f = function(t) {
            var e;
            return function() {
                return e || (e = t.apply(this, arguments))
            }
        }, h = function(t, e) {
            return t ? new RegExp("\\b" + e + "\\b").test(t.className) : !1
        }, g = {
            isStr: function(t) {
                return d(t, "String")
            },
            isFn: function(t) {
                return d(t, "Function")
            },
            isObj: function(t) {
                return d(t, "Object")
            },
            isNum: function(t) {
                return d(t, "Number")
            },
            isDate: function(t) {
                return d(t, "Date")
            },
            isArr: function(t) {
                return d(t, "Array")
            },
            isType: function(t, e) {
                return d(t, e)
            },
            isElement: function(t) {
                return t && 1 === t.nodeType
            },
            ns: function(t, e) {
                if (t) {
                    e = e || n;
                    for (var i = t.split("."), o = 0, a = i.length; a > o; o++) e = e[i[o]] = e[i[o]] || {}
                }
            },
            getId: s,
            each: u,
            platform: function(t) {
                var e, n = navigator.userAgent.toLowerCase();
                e = n.match(/(android)/) ? t.android : n.match(/(iphone|ipod|ios|ipad)/) ? t.ios : n.match(/(windows phone)/) ? t.wp : t.others, g.isFn(e) && e(n)
            },
            loadJS: function(t, e) {
                var n = document.createElement("script");
                n.type = "text/javascript", "//static.xiaojukeji.com/webapp/wx.share.js" == t && (t += "?v=20150915"), n.src = t, document.getElementsByTagName("head")[0].appendChild(n), g.isFn(e) && (n.onload = n.onreadystatechange = function() {
                    (!this.readyState || /^(loaded|complete)$/.test(this.readyState)) && e()
                })
            },
            parseJSON: function(t) {
                return t ? JSON.parse(t) : void 0
            }
        };
    p(n, g, {
        extend: p,
        ready: function(e) {
            if (g.isFn(e)) {
                var n = function() {
                    e.isReady || (e.isReady = !0, e())
                };
                if ("complete" === r.readyState) return e();
                r.addEventListener("DOMContentLoaded", function() {
                    r.removeEventListener("DOMContentLoaded", arguments.callee, !1), n()
                }, !1), t.addEventListener("load", function() {
                    n()
                }, !1)
            }
        },
        urlParse: function(t) {
            t = t || location.search;
            var e = {}, n = t.match(new RegExp("[?&][^?&]+=[^?&]+", "g"));
            return g.each(n, function() {
                var t = this.substring(1).split("="),
                    n = decodeURIComponent(t[0]),
                    i = decodeURIComponent(t[1]);
                e[n] = i
            }), e
        },
        urlParams: function(t, e) {
            e = e !== !1;
            var n = "";
            if (g.isObj(t)) for (var i in t) n += "&" + i + "=" + (e ? encodeURIComponent(t[i] || "") : t[i] || "");
            return n ? n.substring(1) : ""
        }
    });
    var m = function(t, e) {
        if (t) {
            if (t instanceof m) return t;
            var n = [];
            g.isStr(t) ? (e = e || r, n = e.querySelectorAll(t)) : g.isElement(t) ? n.push(t) : g.isArr(t) && (n = t);
            var i = this;
            i.__els = n, u(n, function(t) {
                i[t] = this
            }), i.length = n.length
        }
    }, v = {
        each: function(t) {
            return u(this.__els, t), this
        },
        eq: function(t) {
            var e = this[t || 0];
            return e ? n(e) : void 0
        },
        find: function(t) {
            var e = this[0];
            return e ? n(t, e) : void 0
        },
        first: function() {
            var t = this[0];
            return t ? n(t.firstElementChild) : void 0
        },
        last: function() {
            var t = this[0];
            return t ? n(t.lastElementChild) : void 0
        },
        prev: function() {
            var t = this[0];
            return t ? n(t.previousElementSibling) : void 0
        },
        next: function() {
            var t = this[0];
            return t ? n(t.nextElementSibling) : void 0
        },
        children: function() {
            var t = this[0];
            return t ? n(t.children) : void 0
        },
        parent: function() {
            var t = this[0];
            return t ? n(t.parentElement) : void 0
        },
        siblings: function() {
            var t = this[0],
                e = [];
            if (t) for (t = t.firstElementChild, e.push(t); t = t.nextElementSibling;) e.push(t);
            return n(e)
        },
        attr: function(t, n) {
            if (n !== e) return this.each(function() {
                this[t] = n
            });
            var i = this[0];
            return i ? i[t] || i.getAttribute(t) : void 0
        },
        removeAttr: function(t) {
            return this.each(function() {
                this[t] = "", this.removeAttribute(t)
            })
        },
        css: function(n, i) {
            if (i !== e) return this.each(function() {
                this.style[n] = i
            });
            var o = this[0];
            return o ? o.currentStyle ? o.currentStyle[n] : t.getComputedStyle(o, null)[n] : this
        },
        hasClass: function(t) {
            return h(this[0], t)
        },
        addClass: function(t) {
            var e = this;
            return e.each(function() {
                h(this, t) || (this.className += " " + t)
            })
        },
        removeClass: function(t) {
            var e = this,
                n = new RegExp("\\b" + t + "\\b");
            return e.each(function() {
                h(this, t) && (this.className = this.className.replace(n, ""))
            })
        },
        is: function(t) {
            if (!t) return !1;
            var e = this[0];
            if (!e) return !1;
            if (e === t) return !0;
            var n = t.charAt(0);
            switch (n) {
                case "#":
                    return n + e.id == t;
                case ".":
                    return t = t.slice(1), this.hasClass(t);
                default:
                    return e.tagName.toLowerCase() == t.toLowerCase()
            }
        },
        html: function(t) {
            return this.attr("innerHTML", t) || ""
        },
        val: function(t) {
            return this.attr("value", t) || ""
        },
        show: function(t) {
            return this.css("display", t || "block")
        },
        hide: function() {
            return this.css("display", "none")
        },
        width: function(t) {
            return t !== e ? (t = isNaN(t) ? t : t + "px", this.css("width", t)) : parseFloat(this[0].offsetWidth || this[0].width)
        },
        height: function(t) {
            return t !== e ? (t = isNaN(t) ? t : t + "px", this.css("height", t)) : parseFloat(this[0].offsetHeight || this[0].height)
        },
        offset: function() {
            for (var t = this[0], e = 0, n = 0; t;) e += t.offsetLeft, n += t.offsetTop, t = t.offsetParent;
            return {
                left: e,
                top: n
            }
        },
        size: function() {
            return this.__els.length
        }
    }, y = {
        _list: {},
        _eachTarget: function(t, e) {
            return t = n(t), !e || t.is(e) ? t[0] : arguments.callee(t.parent()[0])
        },
        on: function(t, e, n) {
            return t && e && (g.isFn(e) && (n = e, e = ""), g.isFn(n)) ? this.each(function() {
                var i = this;
                g.each(t.split(","), function(t, o) {
                    o = o.trim();
                    var a = s(),
                        r = function(t) {
                            var i = y._eachTarget(t.target, e);
                            i && n.call(i, t)
                        };
                    i.addEventListener(o, r, !1);
                    var c = {
                        el: i,
                        type: o,
                        selector: e,
                        handler: r,
                        useCapture: !1
                    }, l = i.getAttribute("dd-events") || "";
                    l && (l += ","), l += o + a, i.setAttribute("dd-events", l), y._list[a] = c
                })
            }) : void 0
        },
        un: function(t) {
            return t ? this.each(function() {
                var e = this,
                    n = e.getAttribute("dd-events");
                n && g.each(t.split(","), function(t, i) {
                    var o = n.match(new RegExp(i + "\\d+", "img"));
                    o && g.each(o, function(t, n) {
                        var o = n.replace(i, ""),
                            a = y._list[o];
                        a && (e.removeEventListener(a.type, a.handler, !1), delete y._list[o])
                    })
                })
            }) : void 0
        },
        _tapPC: function(t) {
            if (g.isFn(t)) {
                var e = this[0];
                e.addEventListener("click", function(e) {
                    t(e)
                }, !1)
            }
        },
        _tapTouch: function(t, e) {
            if (g.isFn(t)) {
                var n, i, o = this[0];
                o.addEventListener("touchstart", function(t) {
                    i = !0, n = t.changedTouches[0], e || t.stopPropagation()
                }, !1), o.addEventListener("touchmove", function(t) {
                    if (i) {
                        var o = t.changedTouches[0];
                        i = Math.abs(n.clientX - o.clientX) < 8 && Math.abs(n.clientY - o.clientY) < 8, e || t.stopPropagation()
                    }
                }, !1), o.addEventListener("touchend", function(e) {
                    i && t(e)
                }, !1)
            }
        }
    }, x = !! ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
    y.tap = x ? y._tapTouch : y._tapPC, p(v, y), m.prototype = v;
    var w = f(i),
        b = {};
    p(o, {
        settings: function(t) {
            b = t
        },
        get: function(t, e) {
            o(t, p({
                method: "get"
            }, e))
        },
        post: function(t, e) {
            o(t, p({
                method: "post"
            }, e))
        },
        getJSON: function(t, e) {
            a(t, p({
                method: "get"
            }, e))
        },
        postJSON: function(t, e) {
            a(t, p({
                method: "post"
            }, e))
        },
        getJSONP: function(t, e) {
            if (t && e) {
                n.ns("jsonp");
                var i = document.createElement("script");
                i.type = "text/javascript";
                var o = "callback" + s();
                n.jsonp[o] = e.successFn;
                var a = e.data;
                b && (a = p({}, b.data, a)), t += (t.indexOf("?") > -1 ? "&" : "?") + n.urlParams(a), i.src = t + (t.indexOf("?") > -1 ? "&" : "?") + "callback=dd.jsonp." + o, document.getElementsByTagName("head")[0].appendChild(i)
            }
        }
    }), n.ajax = o, n.cookie = {
        get: function(t) {
            var e, n = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
            return e = document.cookie.match(n), e ? unescape(e[2]) : null
        },
        set: function(t, e, n, i) {
            var o = new Date;
            n = n || 2592e6, o.setTime(o.getTime() + n), i === !0 && (i = document.domain.replace(/[\a-\z\A-\Z]+/, ""));
            var a = i ? ";domain=" + i + ";path=/" : "";
            document.cookie = t + "=" + escape(e) + ";expires=" + o.toGMTString() + a
        },
        remove: function(t, e) {
            var n = new Date;
            n.setTime(n.getTime() - 1);
            var i = this.get(t);
            e === !0 && (e = document.domain.replace(/[\a-\z\A-\Z]+/, ""));
            var o = e ? ";domain=" + e + ";path=/" : "";
            null != i && (document.cookie = t + "=11111;expires=" + n.toGMTString() + o)
        }
    };
    var k = String.prototype;
    p(k, {
        trim: k.trim || function() {
            return this.replace(/^\s+|\s$/g, "")
        },
        replaceTpl: function(t) {
            var e = this;
            if (t) for (var n in t) e = e.replace(new RegExp("{" + n + "}", "ig"), t[n]);
            return e
        }
    }), t.dd = n
}(window),
function() {
    var t, e = document,
        n = navigator.userAgent,
        i = /MicroMessenger/i.test(n),
        o = !i && /QQ\/([\d\.]+)/.test(n),
        a = /AlipayClient/i.test(n),
        r = /DIDI\.SDK/i.test(n),
        c = dd.urlParse(),
        s = c.needStore,
        l = dd.common = {
            getData: function(t) {
                return localStorage[t] || dd.cookie.get(t) || ""
            },
            setData: function(t, e) {
                localStorage[t] = e, dd.cookie.set(t, e)
            },
            removeData: function(t) {
                localStorage.removeItem(t), dd.cookie.remove(t)
            },
            doJump: function(e, n, i) {
                dd.isObj(e) ? (i = n, n = e, e = "") : "boolean" == typeof n && (i = n, n = null), dd.dialog && dd.dialog.loading(), n = dd.extend({}, t, n), e += (e.indexOf("?") > -1 ? "&" : "?") + dd.urlParams(n), setTimeout(function() {
                    return i ? (location.href = e, void 0) : (location.replace(e), void 0)
                }, 5)
            },
            isWeixin: function() {
                return i
            },
            isMQQ: function() {
                return o
            },
            isAlipay: function() {
                return a
            },
            isDDSDK: function() {
                return r
            },
            isLogin: function() {
                return l.getData("phone") && l.getData("token")
            },
            goLogin: function(t) {
                t = t || {}, l.removeData("token"), l.removeData("phone");
                var e = "/api/v2/weixinapi?page=phonecode";
                dd.extend(t, {
                    token: ""
                }), "new" == g && (e = "//common.diditaxi.com.cn/general/webEntry?page=valid", t.redirecturl && (!~t.redirecturl.indexOf("http") && (t.redirecturl = "//pay.xiaojukeji.com" + t.redirecturl), t.redirecturl += t.redirecturl.indexOf("?") > -1 ? "&needStore=1&homepage=new" : "?needStore=1&homepage=new")), l.doJump(e, t)
            },
            downloadApp: function() {
                dd.platform({
                    ios: function() {
                        location.replace("https://itunes.apple.com/cn/app/di-di-da-che-zhi-jian-shang/id554499054?ls=1&mt=8")
                    },
                    android: function() {
                        location.replace("http://dldir1.qq.com/diditaxi/apk/didi_psngr.apk")
                    },
                    wp: function() {
                        location.replace("http://www.windowsphone.com/zh-cn/store/app/%E5%98%80%E5%98%80%E6%89%93%E8%BD%A6/df0b0606-22c2-4b93-a016-936ac248eccc?signin=true")
                    }
                })
            },
            collectLog: function(t, e, n) {
                var i = "/api/v2/weixinapi/collect_log";
                return dd.isObj(t) ? dd.ajax.get(i, {
                    data: t,
                    timeout: {
                        millisecond: n,
                        callback: e || null
                    },
                    completeFn: e || null
                }) : (dd.ajax.get(i + "?" + (t || "")), void 0)
            },
            getBytesLen: function(t) {
                return t ? t.length + t.replace(/[\u0000-\u00ff]/g, "").length : 0
            },
            getSource: function() {
                return c.source ? c.source : i ? "weixin" : o ? "mqq" : a ? "alipay_wallet" : ""
            },
            getChannel: function() {
                return c.channel ? c.channel : i ? 1200 : o ? 1234 : a ? 1300 : ""
            },
            getUserType: function(t, e, n) {
                dd.ajax.getJSON("/api/v2/weixinapi/getUserInfo", {
                    data: {
                        token: t
                    },
                    successFn: e || function() {},
                    failFn: n || function() {}
                })
            },
            newOrderTip: function(t, e) {
                var n = "",
                    i = e.dialogType,
                    o = e.travelInfo,
                    a = e.logParams,
                    r = 1 === i ? "请确认叫车" : "请确认预约信息",
                    c = '<div class="travel-wraper"><div class="travel-tip-time">' + o.time + '</div><div class="travel-tip-desc"><p class="tip-ellipsis">起点：' + o.from + '</p><p class="tip-ellipsis">终点：' + o.to + "</p></div></div>";
                confirmFun = e.confirmFun, cancelFun = e.cancelFun;
                try {
                    n = t.data.userType
                } catch (s) {
                    n = "normal"
                }
                "newbie" === n ? (dd.dialog.confirm({
                    text: r,
                    tip: c,
                    cancel: {
                        val: "返回修改",
                        handler: function() {
                            a.type = 1 === i ? "taxi_web_guide_real_later" : "taxi_web_guide_pre_later", l.collectLog(a), cancelFun()
                        }
                    },
                    confirm: {
                        val: 1 === i ? "立即出发" : "开始预约",
                        handler: function() {
                            a.type = 1 === i ? "taxi_web_guide_real_now" : "taxi_web_guide_pre_now", confirmFun(a)
                        }
                    }
                }), dd(".d-icon").hide()) : (localStorage.isOldUser = "1", confirmFun())
            },
            getOpenid: function() {
                return sessionStorage.openid || dd("#h_openid").val() || c.openid || ""
            },
            crossOriginStore: function(t, e, n, i) {
                var o = this,
                    a = null,
                    r = o.crossOriginStore;
                e += "", "function" == typeof n ? r.callbacks ? r.callbacks.push(n) : r.callbacks = [n] : i = n, !i && o.setData(t, e), r.cache || (r.cache = {}), a = r.cache, a[t] = e;
                var c = document.querySelector("#cross-origin");
                c || (c = document.createElement("iframe"), c.id = "cross-origin", c.name = "taxi_cross_origin", c.style.display = "none", c.setAttribute("src", "//common.diditaxi.com.cn/general/webEntry?page=proxy"), document.body.appendChild(c), c.addEventListener("load", function() {
                    var t = {
                        msg: "store",
                        obj: a
                    }, e = window.frames.taxi_cross_origin;
                    e.postMessage(JSON.stringify(t), "*"), r.callbacks && r.callbacks.forEach(function(t) {
                        t()
                    }), o.crossOriginStore = function(t, n, i, a) {
                        var r = {}, c = null;
                        r[t] = n;
                        var s = {
                            msg: "store",
                            obj: r
                        };
                        e.postMessage(JSON.stringify(s), "*"), "function" == typeof i ? c = i : a = i, !a && o.setData(t, n), c && c()
                    }
                }))
            }
        };
    dd.weixinUtil = {
        ready: function(t) {
            t && ("undefined" != typeof WeixinJSBridge ? t(WeixinJSBridge) : e.addEventListener("WeixinJSBridgeReady", function() {
                t(WeixinJSBridge)
            }))
        }
    };
    var d = dd.mqqUtil = {
        ready: function(t) {
            o && t && (window.mqq ? t(window.mqq) : dd.loadJS("http://open.mobile.qq.com/sdk/qqapi.js?_bid=152", function() {
                t(window.mqq)
            }))
        },
        connect: function(t) {
            o && t && dd.loadJS("//static.xiaojukeji.com/webapp/COA-ad7fbd188c.js", function() {
                var e = "http://imgcache.qq.com",
                    n = d.connectObj = crossOriginAccess.connect(parent, e);
                "function" == typeof t && t(n), crossOriginAccess.allow(e, ["mqqdidi"])
            })
        }
    };
    dd.alipayUtil = {
        ready: function(t) {
            t && ("undefined" != typeof AlipayJSBridge ? t(AlipayJSBridge) : e.addEventListener("AlipayJSBridgeReady", function() {
                t(AlipayJSBridge)
            }))
        }
    };
    var u = l.getOpenid(),
        p = l.getChannel(),
        f = l.getSource(),
        h = c.datatype || "webapp",
        g = c.homepage || l.getData("temp_homepage");
    l.setData("channel", p), s && l.setData("phone", c.phone || ""), s && l.setData("token", c.token || ""), t = {
        openid: u,
        source: f,
        channel: p,
        datatype: h,
        homepage: g
    }, l.isLogin() && dd.extend(t, {
        phone: l.getData("phone"),
        token: encodeURIComponent(l.getData("token") || "")
    }), dd.ajax.settings({
        data: t
    })
}(window),
function(t) {
    var e = t.dd || {};
    if (e.dialog) return e.dialog;
    e.dialog = {};
    var n = document.documentElement,
        i = 0,
        o = null,
        a = null,
        r = null,
        c = {
            isArray: function(t) {
                return Array.isArray(t)
            },
            insertDom: function(t) {
                document.body.appendChild(t)
            },
            genDom: function(t, e, n) {
                if (t) if ("[object Object]" === Object.prototype.toString.call(t, null)) {
                    t.type = t.type || "loading", e.style.cssText = t.wallCss, n.style.cssText = t.wrapCss;
                    var i = "<div class='" + t.type + "'>";
                    i += this.genIcon(t.icon), i += this.genTitle(t.title), i += this.genTip(t), i += this.genButtons(t.btns, t.ext) + "</div>", i += this.genClose(t.close), n.innerHTML = i
                } else "[object String]" === Object.prototype.toString.call(t, null) ? n.innerHTML = t : "[object HTMLDivElement]" === Object.prototype.toString.call(t, null) && (t.style.display = "inline-block", n.appendChild(t))
            },
            genIcon: function(t) {
                if (!t) return "";
                var e = t.width || "8px",
                    n = t.height || "36px",
                    i = t.url || "//static.xiaojukeji.com/webapp/images/i-plaint.png",
                    o = t.cssText || "",
                    a = "<img src=" + i + ' style="width:' + e + ";height:" + n + ";vertical-align:middle;" + o + '"/>';
                return '<p class="d-icon">' + a + "</p>"
            },
            genTitle: function(t) {
                t = t || {}, t.color = t.color || "", t.size = t.size || "", t.cssText = t.cssText || "";
                var e = "color:" + t.color + ";font-size: " + t.size + ";" + t.cssText;
                return t.txt ? '<p class="d-title" style="' + e + '">' + t.txt + "</p>" : ""
            },
            genTip: function(t) {
                var e = t.tip || {}, n = t.title || {};
                n.txt ? (e.color = e.color || "#666", e.size = e.size || "1.4rem") : (e.color = e.color || "#333", e.size = e.size || "1.6rem");
                var i = "color:" + e.color + ";font-size:" + e.size + ";";
                return e.txt ? '<div class="d-tip" style="' + i + '">' + e.txt + "</div>" : ""
            },
            genClose: function(t) {
                return t ? '<a class="d-close" href="javascript:void(0);" style="' + (t.cssText || "") + '"></a>' : ""
            },
            genButtons: function(t, e) {
                var n = "";
                if (t && this.isArray(t)) {
                    n += '<div class="d-btns clearfix">';
                    for (var i = 0, o = null, a = t.length; a > i; i++) o = t[i], n += '<a class="' + o.kls + '" id="' + o.id + '">' + o.val + "</a>";
                    n += "</div>"
                }
                return e && "string" == typeof e && (n += '<p class="d-ext">' + e + "</p>"), n
            },
            addEvents: function(t) {
                if (t.close) {
                    var e = a.getElementsByClassName("d-close")[0];
                    e.addEventListener("touchstart", function() {
                        r.hide()
                    }, !1)
                }
                if (this.isArray(t.btns) && t.btns.length) for (var n = 0, i = null, o = t.btns.length; o > n; n++) if (i = t.btns[n]) {
                    var c = i.event || "click",
                        s = document.getElementById(i.id);
                    s && (s.removeEventListener(c, i.handler, !1), s.addEventListener(c, i.handler, !1))
                }
            }
        }, s = function(t) {
            return this instanceof s ? (new s.fn.init(t), void 0) : r = new s(t)
        };
    s.fn = s.prototype = {
        constructor: s,
        init: function(e) {
            if (i && (clearTimeout(i), i = 0), e) {
                var n = document.createElement("div"),
                    r = document.createElement("div");
                n.id = "d-wall", r.id = "d-wrap", c.genDom(e, n, r), o && document.body.removeChild(o), a && document.body.removeChild(a), c.insertDom(n), c.insertDom(r), o = n, a = r, "[object Object]" === Object.prototype.toString.call(e, null) && t.setTimeout(function() {
                    c.addEvents(e)
                }, 400)
            }
        },
        show: function() {
            function e(i) {
                t.removeEventListener(i.type, e, !1), n.reset.call(n)
            }
            var n = this;
            o && a && (n.reset(), o.style.display = "block", a.style.display = "inline-block", t.addEventListener("resize", e, !1), t.addEventListener("scroll", e, !1))
        },
        hide: function() {
            o && a && (o.style.display = "none", a.style.display = "none")
        },
        reset: function() {
            if (o && a) {
                a.style.top = (n.clientHeight - a.clientHeight - 20) / 2 + "px", a.style.left = (n.clientWidth - a.clientWidth) / 2 + "px";
                var t = document.body.scrollHeight || document.documentElement.scrollHeight;
                o.style.width = n.clientWidth + "px", o.style.height = t + "px"
            }
        }
    }, e.dialog.alert = function(t) {
        var e = {};
        return "string" == typeof arguments[0] && arguments[0] ? (e.title = arguments[1] || "", e.tip = arguments[0], e.btn = {
            val: arguments[2] || "我知道了"
        }) : t && "object" == typeof t && (e = t), r = s({
            type: "alert",
            icon: e.icon || {
                url: "//static.xiaojukeji.com/webapp/images/i-plaint.png",
                width: "8px",
                height: "36px"
            },
            wallCss: "",
            wrapCss: "background: #fff;width: 280px;text-align: center;",
            title: {
                txt: e.title
            },
            tip: {
                txt: e.tip
            },
            btns: [{
                id: "btn-close",
                kls: "btn-orange",
                event: "click",
                val: e.btn && e.btn.val || "我知道了",
                handler: function(t) {
                    r.hide(), "function" == typeof e.btn.handler && e.btn.handler(t)
                }
            }]
        }), r.show(), r
    }, e.dialog.confirm = function(t) {
        var e = {};
        "string" == typeof arguments[0] && arguments[0] ? (e.text = arguments[0] || "", e.confirm = {}, e.confirm.handler = arguments[1]) : t && "object" == typeof t && (e = t);
        var n = e.cancel || {}, i = e.confirm || {}, o = [{
            id: n.id || "btn-cancel",
            val: n.val || "取消",
            kls: n.kls || "btn-white",
            event: n.event || "click",
            handler: function(t) {
                r.hide(), "function" == typeof n.handler && n.handler(t)
            }
        }, {
            id: i.id || "btn-ok",
            val: i.val || "确定",
            kls: i.kls || "btn-orange",
            event: i.event || "click",
            handler: function(t) {
                r.hide(), "function" == typeof i.handler && i.handler(t)
            }
        }];
        return e.swapBtn && o.unshift(o.pop()), r = s({
            type: "confirm",
            title: {
                txt: e.tip ? e.text : ""
            },
            tip: {
                txt: e.tip ? e.tip : e.text
            },
            icon: e.icon || {
                url: "//static.xiaojukeji.com/webapp/images/i-plaint.png",
                width: "8px",
                height: "36px"
            },
            wallCss: "",
            wrapCss: "background: #fff;width: 280px;text-align: center;",
            btns: o,
            ext: e.ext
        }), r.show(), r
    }, e.dialog.loading = function(e) {
        var n = {};
        return "object" != typeof arguments[0] ? (n.text = arguments[0], n.time = arguments[1] || 0) : n = e, r = s({
            type: "loading",
            wallCss: "",
            wrapCss: "background:#0c0d0d;opacity:0.7;width:140px;height:140px;",
            icon: e && e.icon || {
                width: "40px",
                height: "40px",
                url: "//static.xiaojukeji.com/webapp/images/loading_2.gif"
            },
            tip: {
                txt: n.text || "正在加载",
                color: "#fff",
                size: "14px"
            }
        }), r.show(), n.time || (n.time = 5e3), i = t.setTimeout(function() {
            r.hide(), console.log("function" == typeof n.hideCB), "function" == typeof n.hideCB && n.hideCB()
        }, n.time), r
    }, e.dialog.flatLoading = function(e) {
        var n = {};
        return "object" != typeof arguments[0] ? (n.text = arguments[0], n.time = arguments[1] || 0) : n = e, r = s({
            type: "loading",
            wallCss: "background:#fff;opacity:1;",
            wrapCss: "background:#fff;width:140px;height:140px;",
            icon: e && e.icon || {
                width: "43px",
                height: "34px",
                url: "//static.xiaojukeji.com/webapp/images/i-loading.gif"
            },
            tip: {
                txt: n.text || "",
                color: "#666",
                size: "14px"
            }
        }), r.show(), n.time || (n.time = 5e3), i = t.setTimeout(function() {
            r.hide(), "function" == typeof n.hideCB && n.hideCB()
        }, n.time), r
    }, e.dialog.logoLoading = function(e, n) {
        return r = s('<div class="loading-logo"></div>'), r.show(), e || (e = 5e3), i = t.setTimeout(function() {
            r.hide(), "function" == typeof n && n()
        }, e), r
    }, e.dialog.tip = function(e) {
        var n = {};
        "object" != typeof arguments[0] ? (n.text = arguments[0], n.time = arguments[1] || 0) : n = e, n.time = parseInt(n.time) || 600, r = s({
            type: "tip",
            wallCss: "background:#fff;",
            wrapCss: "background:#0c0d0d;width:140px;height:140px;opacity:0.7;",
            icon: n.icon || {
                url: "//static.xiaojukeji.com/webapp/images/i-tip.png",
                width: "45px",
                height: "45px"
            },
            tip: {
                txt: n.text || "温馨提醒",
                color: "#fff",
                size: "14px"
            }
        }), r.show(), i = t.setTimeout(function() {
            r.hide()
        }, n.time)
    }, e.dialog.Fn = s, t.dd = e
}(window);