var CryptoJS = CryptoJS || function(e, t) {
        var i = {}, n = i.lib = {}, a = function() {}, o = n.Base = {
            extend: function(e) {
                a.prototype = this;
                var t = new a;
                return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                    t.$super.init.apply(this, arguments)
                }), t.init.prototype = t, t.$super = this, t
            },
            create: function() {
                var e = this.extend();
                return e.init.apply(e, arguments), e
            },
            init: function() {},
            mixIn: function(e) {
                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        }, r = n.WordArray = o.extend({
            init: function(e, i) {
                e = this.words = e || [], this.sigBytes = i != t ? i : 4 * e.length
            },
            toString: function(e) {
                return (e || d).stringify(this)
            },
            concat: function(e) {
                var t = this.words,
                    i = e.words,
                    n = this.sigBytes;
                if (e = e.sigBytes, this.clamp(), n % 4) for (var a = 0; e > a; a++) t[n + a >>> 2] |= (i[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 24 - 8 * ((n + a) % 4);
                else if (65535 < i.length) for (a = 0; e > a; a += 4) t[n + a >>> 2] = i[a >>> 2];
                else t.push.apply(t, i);
                return this.sigBytes += e, this
            },
            clamp: function() {
                var t = this.words,
                    i = this.sigBytes;
                t[i >>> 2] &= 4294967295 << 32 - 8 * (i % 4), t.length = e.ceil(i / 4)
            },
            clone: function() {
                var e = o.clone.call(this);
                return e.words = this.words.slice(0), e
            },
            random: function(t) {
                for (var i = [], n = 0; t > n; n += 4) i.push(4294967296 * e.random() | 0);
                return new r.init(i, t)
            }
        }),
            s = i.enc = {}, d = s.Hex = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var i = [], n = 0; e > n; n++) {
                        var a = t[n >>> 2] >>> 24 - 8 * (n % 4) & 255;
                        i.push((a >>> 4).toString(16)), i.push((15 & a).toString(16))
                    }
                    return i.join("")
                },
                parse: function(e) {
                    for (var t = e.length, i = [], n = 0; t > n; n += 2) i[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - 4 * (n % 8);
                    return new r.init(i, t / 2)
                }
            }, c = s.Latin1 = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var i = [], n = 0; e > n; n++) i.push(String.fromCharCode(t[n >>> 2] >>> 24 - 8 * (n % 4) & 255));
                    return i.join("")
                },
                parse: function(e) {
                    for (var t = e.length, i = [], n = 0; t > n; n++) i[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - 8 * (n % 4);
                    return new r.init(i, t)
                }
            }, l = s.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(c.stringify(e)))
                    } catch (t) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return c.parse(unescape(encodeURIComponent(e)))
                }
            }, u = n.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new r.init, this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var i = this._data,
                        n = i.words,
                        a = i.sigBytes,
                        o = this.blockSize,
                        s = a / (4 * o),
                        s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0);
                    if (t = s * o, a = e.min(4 * t, a), t) {
                        for (var d = 0; t > d; d += o) this._doProcessBlock(n, d);
                        d = n.splice(0, t), i.sigBytes -= a
                    }
                    return new r.init(d, a)
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e._data = this._data.clone(), e
                },
                _minBufferSize: 0
            });
        n.Hasher = u.extend({
            cfg: o.extend(),
            init: function(e) {
                this.cfg = this.cfg.extend(e), this.reset()
            },
            reset: function() {
                u.reset.call(this), this._doReset()
            },
            update: function(e) {
                return this._append(e), this._process(), this
            },
            finalize: function(e) {
                return e && this._append(e), this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(e) {
                return function(t, i) {
                    return new e.init(i).finalize(t)
                }
            },
            _createHmacHelper: function(e) {
                return function(t, i) {
                    return new f.HMAC.init(e, i).finalize(t)
                }
            }
        });
        var f = i.algo = {};
        return i
    }(Math);
! function() {
    var e = CryptoJS,
        t = e.lib,
        i = t.WordArray,
        n = t.Hasher,
        a = [],
        t = e.algo.SHA1 = n.extend({
            _doReset: function() {
                this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(e, t) {
                for (var i = this._hash.words, n = i[0], o = i[1], r = i[2], s = i[3], d = i[4], c = 0; 80 > c; c++) {
                    if (16 > c) a[c] = 0 | e[t + c];
                    else {
                        var l = a[c - 3] ^ a[c - 8] ^ a[c - 14] ^ a[c - 16];
                        a[c] = l << 1 | l >>> 31
                    }
                    l = (n << 5 | n >>> 27) + d + a[c], l = 20 > c ? l + ((o & r | ~o & s) + 1518500249) : 40 > c ? l + ((o ^ r ^ s) + 1859775393) : 60 > c ? l + ((o & r | o & s | r & s) - 1894007588) : l + ((o ^ r ^ s) - 899497514), d = s, s = r, r = o << 30 | o >>> 2, o = n, n = l
                }
                i[0] = i[0] + n | 0, i[1] = i[1] + o | 0, i[2] = i[2] + r | 0, i[3] = i[3] + s | 0, i[4] = i[4] + d | 0
            },
            _doFinalize: function() {
                var e = this._data,
                    t = e.words,
                    i = 8 * this._nDataBytes,
                    n = 8 * e.sigBytes;
                return t[n >>> 5] |= 128 << 24 - n % 32, t[(n + 64 >>> 9 << 4) + 14] = Math.floor(i / 4294967296), t[(n + 64 >>> 9 << 4) + 15] = i, e.sigBytes = 4 * t.length, this._process(), this._hash
            },
            clone: function() {
                var e = n.clone.call(this);
                return e._hash = this._hash.clone(), e
            }
        });
    e.SHA1 = n._createHelper(t), e.HmacSHA1 = n._createHmacHelper(t)
}(),
function(e) {
    function t(t) {
        var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.setTimeout,
            a = {
                template: '<div id="slide-bar-wg">                    <div class="slider"><div class="no-back-slider"></div></div>                    <div class="items">{items} </div>                    <div class="target sbw-radius"><div class="target-circle sbw-radius"></div></div></div>',
                initSlide: function() {
                    var e = t.styles || {}, i = t.list ? t.list.length : 0;
                    0 != i && (this.preLoadImg(t.list), this.createItemsDom(), this.initSlideConfig(), this.initTarget(e), this.initEvent())
                },
                initSlideConfig: function() {
                    var e = t.dom,
                        i = !e.offsetWidth;
                    i && (e.style.display = "block");
                    var n = t.selectedIndex,
                        a = e.querySelector("#slide-bar-wg"),
                        o = a.querySelectorAll(".item"),
                        r = a.offsetWidth,
                        s = o[0].offsetWidth,
                        d = o.length,
                        c = r - s,
                        l = c / (d - 1),
                        u = a.querySelector(".target"),
                        f = u.querySelector(".target-circle"),
                        p = t.noBack;
                    if (i && (e.style.display = "none"), p) {
                        var m = a.querySelector(".no-back-slider");
                        m.style.display = "block"
                    }
                    this.slideConfig = {
                        containEl: e,
                        curIndex: -1,
                        defaultIndex: n,
                        itemOffset: l,
                        itemWidth: s,
                        maxOffset: c,
                        minOffset: 0,
                        wraper: a,
                        flagEl: u,
                        flagCircle: f,
                        itemEls: o,
                        noBackSlider: m,
                        dataList: t.list,
                        callbacks: {
                            selectedCB: t.selectedCB,
                            confirmFn: t.confirmFn,
                            cancelCB: t.cancelCB
                        },
                        disabledColor: t.disabledColor || "#dcdcdc",
                        moveParam: {
                            lastTranlateX: n * l,
                            startX: "",
                            noBack: p
                        }
                    }
                },
                resetConfig: function() {
                    var e = this.slideConfig,
                        t = e.wraper.offsetWidth,
                        i = e.itemWidth,
                        n = t - i,
                        a = n / e.maxOffset,
                        o = e.moveParam.lastTranlateX * a;
                    e.maxOffset = n, e.itemOffset *= a, e.moveParam.lastTranlateX = o, e.moveParam.noBack && (e.minOffset *= a), this.translateX([e.flagEl, e.noBackSlider], o)
                },
                initTarget: function(e) {
                    var t = e.slideTargetColor,
                        i = this.slideConfig,
                        n = i.flagEl,
                        a = e.slideTargetWidth || 2.4,
                        o = e.slideCapWidth || 1.4,
                        r = -(a - o) / 2,
                        s = [t ? "background-color:" + t : "", "display: block"];
                    2.4 !== a && s.push("width:" + a + "rem", "height:" + a + "rem"), .5 !== r && s.push("top: " + r + "rem; left: " + r + "rem"), n.style.cssText = s.join(";"), e.noImg && this.updateClass(i.flagCircle, "target-circle-noimg", "add")
                },
                createItemsDom: function() {
                    var e = t.list,
                        i = t.styles || {}, n = "",
                        a = [],
                        o = [];
                    i.slideCapWidth && o.push("width:" + i.slideCapWidth + "rem", "height:" + i.slideCapWidth + "rem"), i.slideCapColor && o.push("background-color:" + i.slideCapColor), n = o.join(";"), e.forEach(function(e, t) {
                        a.push('<div class="item sbw-radius" title="' + e.title + '"data-url="' + (e.bgImgUrl || "") + '" data-index="' + t + '" style = "' + n + '"></div>')
                    }), temp = this.template.replace("{items}", a.join("")), t.dom.innerHTML = temp, t.dom.style.overflow = "hidden", i.slideLineHeight && (document.querySelector("#slide-bar-wg .slider").style.height = i.slideLineHeight + "rem")
                },
                updateState: function(e, t) {
                    var i = this,
                        n = i.slideConfig,
                        a = n.itemEls,
                        o = a[n.curIndex],
                        r = n.flagEl,
                        s = n.noBackSlider,
                        d = a[e].getAttribute("data-url"),
                        c = n.callbacks,
                        l = n.moveParam;
                    l.lastTranlateX = e * n.itemOffset, t && (o && i.updateClass(o, "active"), i.updateClass(a[e], "active", "add"), n.curIndex = e, d && (n.flagCircle.style.backgroundImage = "url(" + d + ")"), l.noBack && (n.minOffset = l.lastTranlateX), "function" == typeof c.selectedCB && c.selectedCB(n.dataList[e])), l.noBack && i.changePathColor(e), i.translateX([r, s], l.lastTranlateX), i.updateClass(r, "transition", "add").updateClass(s, "transition", "add")
                },
                selectedFinish: function(e) {
                    var t = this,
                        i = t.slideConfig,
                        n = i.dataList,
                        a = i.callbacks,
                        o = n[e],
                        r = i.moveParam,
                        s = i.curIndex;
                    r.noBack && s > e || (s === e ? t.updateState(e) : "function" == typeof a.confirmFn ? a.confirmFn(o, function() {
                        t.updateState(e, !0)
                    }, function() {
                        t.updateState(s), a.cancelCB && a.cancelCB()
                    }) : t.updateState(e, !0))
                },
                changePathColor: function(e) {
                    var t = this.slideConfig,
                        n = t.moveParam,
                        a = t.itemEls,
                        o = t.disabledColor,
                        r = e || n.lastTranlateX / t.itemOffset;
                    for (i = 0; i < a.length; i++) {
                        var s = r > i ? o : "#ff8a01";
                        a[i].style.backgroundColor = s
                    }
                },
                initEvent: function() {
                    var t = this,
                        i = 0,
                        a = t.slideConfig,
                        o = a.containEl,
                        r = a.flagEl,
                        s = a.noBackSlider,
                        d = a.defaultIndex,
                        c = null,
                        l = !1,
                        u = a.moveParam;
                    t.updateState(d, !0), e.addEventListener("onorientationchange" in e ? "orientationchange" : "resize", function() {
                        c && clearTimeout(c), c = setTimeout(t.resetConfig.bind(t), 300)
                    }, !1), o.addEventListener("touchstart", function(e) {
                        l = !1, t.updateClass(r, "transition").updateClass(s, "transition"), i = u.lastTranlateX, u.startX = e.changedTouches[0].pageX
                    }, !1), o.addEventListener("touchmove", function(e) {
                        l = !0, e.preventDefault();
                        var i = e.changedTouches[0].pageX;
                        u.lastTranlateX += i - u.startX, u.startX = i, u.lastTranlateX > a.maxOffset ? u.lastTranlateX = a.maxOffset : u.lastTranlateX < a.minOffset && (u.lastTranlateX = a.minOffset), n(function() {
                            t.translateX([r, s], u.lastTranlateX), u.noBack && t.changePathColor()
                        })
                    }, !1), o.addEventListener("touchend", function(e) {
                        var n = e.target,
                            o = n.getAttribute("data-index"),
                            r = o ? parseInt(o, 10) : -1;
                        if (-1 === r || l) {
                            var s = u.lastTranlateX,
                                d = a.itemOffset;
                            if (r = Math.round(s / d), s === i) return;
                            setTimeout(function() {
                                t.selectedFinish(r)
                            }, 30)
                        } else t.selectedFinish(r)
                    }, !1)
                },
                preLoadImg: function(e) {
                    e.forEach(function(e) {
                        var t = new Image;
                        t.src = e.bgImgUrl
                    })
                },
                translateX: function(e, t) {
                    "[object Array]" !== Object.prototype.toString.call(e) && (e = [e]), e.forEach(function(e) {
                        e && (e.style.webkitTransform = "translate(" + t + "px, 0)", e.style.webkitTransform = "translate3d(" + t + "px, 0, 0)", e.style.transform = "translate(" + t + "px, 0)", e.style.transform = "translate3d(" + t + "px, 0, 0)")
                    })
                },
                updateClass: function(e, t, i) {
                    return e ? i ? (e.classList.add(t), this) : (e.classList.remove(t), this) : this
                }
            };
        a.initSlide()
    }
    function n(e) {
        var i = {
            diditaxi: "//static.xiaojukeji.com/webapp/images/i-s-taxi.png",
            udache: "//static.xiaojukeji.com/webapp/images/i-s-udache.png",
            fastcar: "//static.xiaojukeji.com/webapp/images/i-s-fastcar.png",
            daijia: "//static.xiaojukeji.com/webapp/images/i-s-daijia.png",
            liftcar: "//static.xiaojukeji.com/webapp/images/i-s-liftcar.png"
        }, n = e.type,
            a = "biz" == n ? "#dv-slide-bar" : "#price-slide-bar";
        e.dom = document.querySelector(a), e.data.forEach(function(e) {
            e.title = e.desc, e.bgImgUrl = i[e.name] || i.diditaxi
        }), e.list = e.data, e.selectedIndex = e.defaultIndex, e.noBack = e.disablePath, e.styles = {
            slideTargetWidth: 3.4
        }, e.selectedCB = function(e) {
            "function" == typeof e.selectedCB && e.selectedCB(e)
        }, "price" == n && (e.styles = {
            slideCapColor: "#ff8a01",
            slideTargetWidth: 3.2,
            noImg: !0
        }, e.confirmFn = function(e, t, i) {
            "function" == typeof e.confirmFn && e.confirmFn(t, i)
        }), e.styles.slideCapWidth = 2, t(e)
    }
    return "undefined" == typeof dd && (dd = {}), "undefined" != typeof dd.initSlide ? dd.initSlide : (dd.initSlide = n, void 0)
}(window),
function(e) {
    function t(t) {
        t = t || {};
        var i = t.events || {}, n = i.tapFn,
            a = dd("header"),
            o = a.find("ul"),
            r = o.find(".adv"),
            s = r.find("a"),
            d = s.find("img"),
            c = dd.common.getChannel();
        dd.ajax.getJSON("/api/v2/webapp_share?channel_banner=" + c, {
            successFn: function(t) {
                0 === t.errno && (s.tap(function() {
                    dd.isFn(n) && n(), dd.dialog && dd.dialog.loading(), e.open(t.url, "_self")
                }), d[0].src = t.image, d[0].onload = function() {
                    o.css("left", "-100%")
                })
            }
        })
    }
    dd.ns("banner"), dd.banner = t
}(window),
function(e) {
    e || (window.dd = e = {});
    var t, i, n = {}, a = !1,
        o = !1,
        r = {
            permission_denied: "未授权使用定位，请检查设置后重试",
            position_unavailable: "定位失败，请退出后进入重试",
            unknow_error: "定位失败或未允许定位，请检查设置后重试",
            network_error: "网络错误，请检查设置后重试",
            timeout: "定位超时，请检查设置后重试"
        }, s = function(e) {
            return "function" == typeof e
        }, d = function(e) {
            var t, i = navigator.userAgent.toLowerCase();
            t = i.match(/(android)/) ? e.android : i.match(/(iphone|ipod|ios|ipad)/) ? e.ios : i.match(/(windows phone)/) ? e.wp : e.others, s(t) && t(i)
        };
    n.weixin = function(e, i) {
        if (e && i) {
            var n = i.timeout || {}, o = "",
                r = "",
                c = function() {
                    return i.appid || "wx69b6673576ec5a65"
                }, l = function() {
                    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = e.length, i = "", n = 0; 32 > n; n++) i += e.charAt(Math.floor(Math.random() * t));
                    return r = i, i
                }, u = function() {
                    var e = (new Date).getTime().toString();
                    return o = e, e
                }, f = function() {
                    var e = u(),
                        t = l(),
                        n = "accesstoken=" + i.accesstoken + "&appid=" + c() + "&noncestr=" + t + "&timestamp=" + e + "&url=" + location.href;
                    return CryptoJS.SHA1(n).toString()
                }, p = {
                    appId: c(),
                    scope: "jsapi_location",
                    signType: "SHA1",
                    addrSign: f(),
                    timeStamp: o,
                    nonceStr: r,
                    type: "wgs84"
                }, m = function(e) {
                    if (a) return s(n.CB) && n.CB(), void 0;
                    if ("geo_location:ok" == e.err_msg) {
                        var o = "";
                        d({
                            ios: function() {
                                o = "wgs"
                            },
                            android: function() {
                                o = e.type && "wgs84" === e.type ? "wgs" : "soso"
                            }
                        }), s(i.success) && i.success({
                            lat: e.latitude,
                            lng: e.longitude,
                            maptype: o
                        })
                    } else s(i.error) && i.error();
                    clearTimeout(t)
                };
            s(i.loading) && i.loading(), s(n.CB) && (t = setTimeout(function() {
                a = !0, n.CB()
            }, n.cnt || 6e3)), e.invoke("geoLocation", p, m)
        }
    }, n.mqq = function(e, t) {
        if (e && t) {
            var n = t.timeout || {};
            s(t.loading) && t.loading(), s(n.CB) && (i = setTimeout(function() {
                o = !0, n.CB()
            }, n.cnt || 6e3));
            try {
                if (window.top !== window) throw new Error("blocked");
                e.sensor.getLocation(function(e, a, r) {
                    return o ? (s(n.CB) && n.CB(), void 0) : ("0" == e ? s(t.success) && t.success({
                        lat: a,
                        lng: r,
                        maptype: "soso"
                    }) : s(t.error) && t.error(), clearTimeout(i), void 0)
                })
            } catch (a) {
                e.call("mqq.sensor.getLocation", function(e, a, r) {
                    return o ? (s(n.CB) && n.CB(), void 0) : ("0" == e ? s(t.success) && t.success({
                        lat: a,
                        lng: r,
                        maptype: "soso"
                    }) : s(t.error) && t.error(), clearTimeout(i), void 0)
                })
            }
        }
    }, n.alipay = function(e, t) {
        if (e && t) {
            s(t.loading) && t.loading();
            var i = function(e) {
                e.latitude && e.longitude && s(t.success) && t.success({
                    lat: e.latitude,
                    lng: e.longitude,
                    maptype: "soso"
                }), 11 == e.error ? s(t.error) && t.error(r.permission_denied) : 12 == e.error || 13 == e.error || 14 == e.error || 15 == e.error ? s(t.error) && t.error(r.position_unavailable) : e.error && s(t.error) && t.error(r.unknow_error)
            };
            e.call("getLocation", {
                requestType: 2
            }, i)
        }
    }, n.ddsdk = function(t) {
        e.loadJS("//static.udache.com/gulfstream/webapp/js/didi.sdk.js", function() {
            e.sdk && e.sdk.getLocationInfo(function(e) {
                return "0" != e.error ? (s(t.error) && t.error(r.unknow_error), void 0) : (s(t.success) && t.success({
                    lat: e.lat,
                    lng: e.lng,
                    maptype: e.maptype
                }), void 0)
            })
        })
    }, n.h5 = function(e) {
        if (e) {
            var t = e.timeout || {}, i = function(t) {
                var i = {
                    lat: t.coords.latitude,
                    lng: t.coords.longitude,
                    maptype: e.maptype || "wgs"
                };
                s(e.success) && e.success(i)
            }, n = function(i) {
                var n = "";
                switch (i.code) {
                    case i.TIMEOUT:
                        n = "timeout", s(t.CB) && t.CB(r.timeout);
                        break;
                    case i.POSITION_UNAVAILABLE:
                        s(e.error) && e.error(r.position_unavailable), n = "position_unavailable";
                        break;
                    case i.PERMISSION_DENIED:
                        s(e.denied) && e.denied(r.permission_denied), n = "permission_denied";
                        break;
                    case i.UNKNOWN_ERROR:
                        s(e.error) && e.error(r.unknow_error), n = "unknow_error"
                }
            };
            s(e.loading) && e.loading(), navigator.geolocation && navigator.geolocation.getCurrentPosition(i, n, {
                enableHighAccuracy: !0,
                timeout: t.cnt || 5e3,
                maximumAge: 2e3
            })
        }
    }, n.location = function(e, t) {
        if (t) {
            var i = t.type,
                a = i.split("|");
            if (a.length > 1) {
                if (s(t.error)) {
                    var o = t.error;
                    t.error = function() {
                        t.error = o, n.h5(t)
                    }
                }
                if (t.timeout && s(t.timeout.CB)) {
                    var r = t.timeout.CB;
                    t.timeout.CB = function() {
                        t.timeout.CB = r, n.h5(t)
                    }
                }
            }
            switch (a[0]) {
                case "weixin":
                    n.weixin(e, t);
                    break;
                case "mqq":
                    n.mqq(e, t);
                    break;
                case "alipay":
                    n.alipay(e, t);
                    break;
                case "ddsdk":
                    n.ddsdk(t);
                    break;
                default:
                    n.h5(t)
            }
        }
    }, e.geo = n
}(window.dd),
function() {
    function e(e, t) {
        t = t || {};
        for (var i = t.items || [], n = t.events || {}, a = n.tap, o = function(e, t) {
            e.className = e.className.replace(t, "")
        }, r = function() {
            var t = e.querySelectorAll(".active");
            if (t) for (var i = t.length - 1; i >= 0; i--) o(t[i], " active")
        }, s = function(e) {
            var t = e.getAttribute("_idx");
            return t || (e = e.parentNode, t = e.getAttribute("_idx")), t ? {
                el: e,
                idx: t
            } : void 0
        }, d = '<ul class="dd-menu ' + (t.clz || "") + '">', c = 0, l = i.length; l > c; c++) {
            var u = i[c];
            d += '<li class="dd-menu-item ' + (u.clz || "") + '" _idx="' + c + '"><a><i></i>' + u.title + "</a></li>"
        }
        d += "</ul>", e.innerHTML = d, e.addEventListener("touchstart", function(e) {
            var t = s(e.target);
            t && (i[t.idx].notNeedActive || (r(), t.el.className += " active"))
        }, !1), e.addEventListener("touchend", function(e) {
            var t = s(e.target);
            t && o(t.el, " active")
        }, !1), a && dd(e).tap(function(e) {
            var t = s(e.target);
            t && a({
                item: i[t.idx],
                itemEl: t.el
            })
        })
    }
    dd.ns("ui"), dd.ui.menu = e
}(window), dd(function() {
    function e(e) {
        if (e || (e = kt.getBiz()), !v || D !== e.name) {
            var t, i = e.name,
                n = function() {
                    return dd.webappBiz["fastcar" == D ? "udache" : D]
                }, a = kt.getBizData,
                o = function(e) {
                    dd.isFn(t[e]) && (xt[e] = t[e])
                }, r = function(e, i, n) {
                    var a = "";
                    dd.isFn(t.btnOrder.touchCB) && (a = t.btnOrder.touchCB(e, i, n)), a && (localStorage.otherCallOrderUrl = a, e.token ? w.doJump(a) : dt(dd.extend({
                        way: 4
                    }, e)))
                }, s = function() {
                    if ("fastcar" == D && vt.disabledMsg) return Q.html(vt.disabledMsg).attr("className", "btn-gray"), xt.showExtInfo(""), void 0;
                    var e = n();
                    e && (h && D != prevBiz && h.outCB && h.outCB(prevBiz), t = e.call(null, xt), t && (h = t, prevBiz = D, o("outCB"), o("onFromChange"), o("onDestChange"), Q.html(t.btnOrder.val), t.btnOrder.disabled ? Q[0].className = "btn-gray" : pt(), Q.un("touchend").on("touchend", function(e) {
                        if ("btn-orange" === e.target.className) {
                            var t = function(t) {
                                k.alert(t), e.target.className = "btn-orange"
                            }, i = a();
                            if (i.token = J, i.phone = N || q, !i.lng || !i.lat) return k.tip("未能获得您的位置");
                            if (!i.from_name) return k.tip("请输入起点");
                            if (!i.to_name) return k.tip("请输入终点");
                            if (!i.cityid) return k.tip("未能获得您当前所在城市");
                            var n = {
                                cityid: i.cityid,
                                tlat: i.tlat,
                                tlng: i.tlng,
                                to_name: i.to_name,
                                to_address: i.to_address
                            };
                            c(n), localStorage.lastBizName = D, kt.setBizForNewHome(D), e.target.className = "btn-gray";
                            var o = !localStorage.isOldUser && st() && "diditaxi" === i.business;
                            o ? w.getUserType(J, function(n) {
                                w.newOrderTip(n, {
                                    dialogType: 1,
                                    logParams: {
                                        phone: i.phone,
                                        channel: i.channel,
                                        area: i.cityid
                                    },
                                    travelInfo: {
                                        time: "司机接单后，会立即来接您",
                                        from: i.from_name,
                                        to: i.to_name
                                    },
                                    confirmFun: function(e) {
                                        r(i, t, e)
                                    },
                                    cancelFun: function() {
                                        e.target.className = "btn-orange"
                                    }
                                })
                            }, function() {
                                r(i, t)
                            }) : r(i, t)
                        }
                    }), at.un("touchend").on("touchend", function() {
                        dd.isFn(t.extTouchCB) && ("diditaxi" === D && w.collectLog({
                            type: "taxi_fee_adjust_hot_zone"
                        }), t.extTouchCB(at.html()))
                    })))
                };
            switch (D = i, xt.common = a(), sessionStorage.lastBizName = D, xt.showExtInfo(""), xt.showCarCnt(""), V.hide(), $.hide(), D) {
                case "fastcar":
                    vt.hideTipDot(), nt.html("辆" + e.desc);
                    break;
                case "diditaxi":
                    V.show(), nt.html("辆" + e.desc);
                    break;
                case "udache":
                    nt.html("辆" + e.desc);
                    break;
                case "daijia":
                    $.show(), nt.html("位" + e.desc + "司机")
            }
            v = 1, n() ? s() : dd.loadJS(e.js, s)
        }
    }
    function t() {
        var t = function() {
            if (x.biz && "diditaxi" !== D) {
                var e = kt.getBiz(D).desc,
                    t = !0;
                dd.each(wt, function(i) {
                    wt[i].desc === e && (t = !1)
                }), t === !0 && k.alert("当前城市不支持" + e + "服务！")
            }
        }, i = function(e) {
            if (e = e || {}, 1 == e.wanliu_flag && kt.insertBiz(1, ht.business), e.project_info) {
                var i = e.project_info.fast_car;
                i && 1 == i.open && (kt.insertBiz(0, vt.business), 1 != i.bill_ability && (vt.disabledMsg = i.msg))
            }
            _ && kt.insertBiz(0, bt.business);
            var a = kt.getBizIndex(D);
            t(), dd.initSlide({
                type: "biz",
                data: wt,
                defaultIndex: a
            }), wt.length < 2 && rt.hide(), 1 !== e.home_flag || w.getData("isShowUdacheTipForHome") || (w.setData("isShowUdacheTipForHome", 1), n())
        }, n = function() {
            var t = t.Fn({
                type: "confirm",
                title: {
                    txt: "滴滴专车  首单八折",
                    cssText: "display:block;font-size:2.3rem;color:#ff8903;line-height:30px;margin-top:150px"
                },
                tip: {
                    txt: "专业司机，正规资质，贴心服务，出行新选择！专车新乘客首单八折优惠~",
                    size: "1.2rem"
                },
                wrapCss: "text-align: center;  width: 280px;display: inline-block;background: url(//static.xiaojukeji.com/webapp/images/ad_biz.png) no-repeat rgb(255, 255, 255);background-size:100% auto;",
                height: "auto",
                close: !1,
                btns: [{
                    id: "btn-cancel",
                    val: "算了",
                    kls: "btn-white",
                    event: "click",
                    handler: function() {
                        t.hide()
                    }
                }, {
                    id: "btn-ok",
                    val: "去看看",
                    kls: "btn-orange",
                    event: "click",
                    handler: function() {
                        t.hide(), e(ht.business), dd.initSlide({
                            type: "biz",
                            data: wt,
                            defaultIndex: 1
                        })
                    }
                }]
            });
            t.show()
        }, a = function() {
            dd.ajax.getJSONP(z + "pGetFlag", {
                data: {
                    lat: X.lat,
                    lng: X.lng,
                    maptype: X.maptype,
                    from: kt.getBizFrom(),
                    phone: N
                },
                successFn: function(e) {
                    e && (0 === e.errno && (localStorage.udacheExportFlag = JSON.stringify(e)), ut(function() {
                        i(e)
                    }))
                }
            })
        }, o = function(e, t) {
            (e === !0 || 1 === e) && (wt.push(yt.business), t && yt.recoveryOrder()), a()
        }, r = function(e) {
            yt.switchOn({
                lat: X.lat,
                lng: X.lng,
                maptype: X.maptype
            }, function(t) {
                o(t.bizSwitch, e)
            }, a)
        };
        return B ? (dd.initSlide({
            type: "biz",
            data: [gt.business],
            defaultIndex: 0
        }), void 0) : (_ || C ? ft(function() {
            if (st()) {
                var e = yt.getToken();
                e.pid && e.token ? r(e.pid) : yt.login({
                    lat: X.lat,
                    lng: X.lng,
                    maptype: X.maptype
                }, function(e) {
                    o(e.switchOn, e.pid)
                }, a)
            } else r()
        }) : a(), void 0)
    }
    function i(e) {
        e && (X = dd.extend(X, e), sessionStorage.posInfo = JSON.stringify(X))
    }
    function n() {
        i({
            fromname: "",
            fromaddr: "",
            fromlat: "",
            fromlng: ""
        })
    }
    function a() {
        i({
            toname: "",
            toaddr: "",
            tolat: "",
            tolng: ""
        })
    }
    function o() {
        var e, n = function() {
            var t = 0,
                i = ["", ".", "..", "..."];
            e && clearInterval(e), e = setInterval(function() {
                G[0].placeholder = "定位中" + i[t], t++, t >= 4 && (t = 0)
            }, 300)
        }, a = function() {
            e && clearInterval(e), G[0].placeholder = "请输入起点", G[0].removeAttribute("disabled")
        }, o = function(e) {
            a(), e && (k.alert(e), dd("#h_title").html("定位失败"))
        }, r = function(e) {
            var t = {
                lat: e.lat,
                lng: e.lng,
                maptype: e.maptype
            };
            i(t), dd.ajax.getJSON("/api/v2/weixinapi/p_reversegeocoding", {
                data: {
                    lng: e.lng,
                    lat: e.lat,
                    appversion: e.version || 2.5,
                    maptype: e.maptype,
                    need: 1
                },
                successFn: s,
                failFn: a
            })
        }, s = function(e) {
            if (dd.geo.isGeoSucc !== !0 && e && 0 === e.errno) {
                a(), dd.geo.isGeoSucc = !0;
                var n = {};
                if (localStorage.lat = e.lat, localStorage.lng = e.lng, localStorage.new_guankong = e.new_guankong, e.cityid && (n.cityid = e.cityid, n.cityname = e.cityname || e.city), e.result && e.result.length) {
                    var o = e.result[0];
                    n.fromlat = o.lat, n.fromlng = o.lng, n.fromaddr = o.address, n.fromname = o.displayname, U = e.result, G.val(n.fromname), pt()
                }
                i(n), t()
            }
        }, d = function(e) {
            var t = _ && "weixin|h5";
            t || (t = S && "mqq|h5"), t || (t = C && "alipay"), t || (t = w.isDDSDK() && "ddsdk"), dd.geo.location(e, {
                type: t ? t : "h5",
                maptype: X.maptype,
                accesstoken: ot.val(),
                loading: n,
                success: r,
                error: o,
                denied: o,
                timeout: {
                    cnt: 5e3,
                    CB: o
                }
            }), ut(), ft()
        };
        if (i({}), y) return X.lat ? r({
            lat: X.lat,
            lng: X.lng,
            maptype: X.maptype || "wgs"
        }) : d();
        if (_) dd.weixinUtil.ready(d);
        else if (S) try {
            if (window.top !== window) throw new Error("blocked");
            dd.mqqUtil.ready(d)
        } catch (c) {
            dd.mqqUtil.connect(d)
        } else C ? dd.alipayUtil.ready(d) : d()
    }
    function r() {
        dd.weixinUtil.ready(function() {
            dd.loadJS("//static.xiaojukeji.com/webapp/wx.share.js", function() {
                define_wx_share(WeixinJSBridge)
            })
        });
        try {
            if (window.top !== window) throw new Error("blocked");
            dd.mqqUtil.ready(function(e) {
                e.data.setShareInfo({
                    title: "滴滴一下，马上出发",
                    desc: "滴滴打车，时下最热的手机打车神器",
                    image_url: "//static.xiaojukeji.com/webapp/images/logo-flat.jpg"
                })
            })
        } catch (e) {
            dd.mqqUtil.connect(function(e) {
                e.call("didi.setShareInfo", {
                    title: "滴滴一下，马上出发",
                    desc: "滴滴打车，时下最热的手机打车神器",
                    image_url: "//static.xiaojukeji.com/webapp/images/logo-flat.jpg"
                })
            })
        }
    }
    function s() {
        function e(e, t) {
            var i = {
                phone: t,
                trip: "我的行程",
                wallet: "我的钱包<span>余额，券，积分</span>",
                prize: "推荐有奖",
                imall: "积分商城",
                settings: "设置",
                advertisement: "司机招募",
                download: "下载客户端"
            }, n = [];
            return "all" === e ? e = ["phone", "trip", "wallet", "prize", "imall", "settings", "advertisement", "download"] : "medium" === e ? e = ["phone", "trip", "wallet", "imall", "settings", "advertisement", "download"] : "[object Array]" !== Object.prototype.toString.call(e) && (e = ["phone", "trip", "settings", "advertisement", "download"]), e.forEach(function(e) {
                var t = {
                    clz: e,
                    title: i[e]
                };
                "phone" === e && (t.notNeedActive = !0), n.push(t)
            }), n
        }
        var t = dd("#menu"),
            i = dd(".menu-mask"),
            n = i.find(".r"),
            a = dd("#btnMenu"),
            o = dd("#btnClose"),
            r = N ? N.substring(0, 3) + "****" + N.substring(7) : "",
            s = function() {
                return st() ? (window.blur && (G[0].blur(), K[0].blur()), setTimeout(function() {
                    i.removeClass("hidden").addClass("visible"), setTimeout(function() {
                        n.addClass("visible")
                    }, 100)
                }, 200), void 0) : (dt(), void 0)
            }, d = function() {
                n.removeClass("visible"), setTimeout(function() {
                    i.removeClass("visible").addClass("hidden")
                }, 100)
            }, c = function(e) {
                var t = yt.getToken();
                switch (e.item.clz) {
                    case "trip":
                        w.doJump("/api/v2/weixinapi?page=myTravel", {
                            daijia_pid: t.pid || "",
                            daijia_token: t.token || ""
                        }, !0);
                        break;
                    case "wallet":
                        w.doJump("//common.diditaxi.com.cn/passenger/wallet", {
                            lat: X.lat,
                            lng: X.lng,
                            maptype: X.maptype,
                            datatype: "webapp",
                            daijia_pid: t.pid || "",
                            daijia_token: t.token || ""
                        }, !0);
                        break;
                    case "prize":
                        w.doJump("http://recommend.xiaojukeji.com/growth/receiveCoupon.html?activityId=1&channelId=23&recommendMobile=" + N, !0);
                        break;
                    case "imall":
                        if (!st()) return dt(), void 0;
                        w.doJump("//imall.diditaxi.com.cn/imall/index", {
                            lat: X.lat,
                            lng: X.lng,
                            maptype: X.maptype
                        }, !0);
                        break;
                    case "settings":
                        w.doJump("/api/v2/weixinapi?page=setting", {
                            daijia_pid: t.pid || "",
                            daijia_token: t.token || ""
                        }, !0);
                        break;
                    case "download":
                        w.downloadApp();
                        break;
                    case "advertisement":
                        w.doJump("//static.udache.com/gulfstream/webapp/pages/driver-recruit/driver-recruit-home.html", !0)
                }
            }, l = {
                items: [{
                    clz: "phone",
                    title: r,
                    notNeedActive: !0
                }, {
                    clz: "trip",
                    title: "我的行程"
                }, {
                    clz: "wallet",
                    title: "我的钱包<span>余额，券，积分</span>"
                }, {
                    clz: "prize",
                    title: "推荐有奖"
                }, {
                    clz: "imall",
                    title: "积分商城"
                }, {
                    clz: "settings",
                    title: "设置"
                }, {
                    clz: "advertisement",
                    title: "司机招募"
                }, {
                    clz: "download",
                    title: "下载客户端"
                }],
                events: {
                    tap: c
                }
            };
        if (!_) {
            for (var u = l.items, f = u.length - 1; f >= 0; f--) switch (u[f].clz) {
                case "imall":
                case "prize":
                    u.splice(f, 1);
                    break;
                case "wallet":
                    !S && u.splice(f, 1);
                    break;
                case "advertisement":
                    B && u.splice(f, 1);
                    break;
                case "download":
                    B && u.splice(f, 1)
            }
            C && (l = {
                items: e(["phone", "trip", "wallet", "imall", "advertisement", "settings"], r),
                events: {
                    tap: c
                }
            })
        }
        a.on("touchend", s), o.on("click", d), dd.ui.menu(t[0], l)
    }
    function d(e) {
        var t = "",
            i = null,
            n = dd.parseJSON(localStorage.toList2);
        if (!dd.isArr(n)) return Y.hide(), void 0;
        for (var i = n.pop(); i;) e.cityid === i.cityid && (t += "<li>" + i.to_name + "<span>" + i.to_address + "</span><input type='hidden' lat='" + i.tlat + "' lng='" + i.tlng + "'></li>"), i = n.pop();
        t && (t += "<li style='border-bottom:none;color:#ff8a01' id='liExpand'><a>收起</a></li>"), g.html(t)
    }
    function c(e) {
        var t = function(e, t) {
            if (!dd.isArr(e)) return !1;
            for (var i = e.length; i--;) if (t.to_name === e[i].to_name) return !0;
            return !1
        }, i = dd.parseJSON(localStorage.toList2);
        dd.isArr(i) || (i = []), t(i, e) || (i.push(e), localStorage.toList2 = JSON.stringify(i))
    }
    function l() {
        "1" != localStorage.clearedHistory && (localStorage.removeItem("toList2"), localStorage.clearedHistory = "1")
    }
    function u() {
        var e = Y,
            t = Z,
            n = mt(),
            a = function() {
                return !K.is(".current")
            }, o = function() {
                return a() ? G : K
            }, r = function() {
                return a() ? et : tt
            }, s = function() {
                var t = o();
                e.css("width", R.clientWidth + "px").css("top", t.offset().top + t.parent().height() - 3 + "px").show()
            }, d = function(e) {
                if (e) {
                    switch (e) {
                        case "loading":
                            e = '<li class="no-click tip-loading"><i class="loading"></i>正在搜索</li>';
                            break;
                        case "noResult":
                            e = '<li class="no-click" id="no-slide-up">请重新输入并选择列表中地址</li><li class="no-click tip-box tip-noResult"><i class="s"></i> 搜索无结果</li>';
                            break;
                        case "research":
                            e = '<li class="no-click tip-box tip-research">网络有问题，点此重试</li>'
                    }
                    t.html(e), s()
                }
            }, c = function(e, t) {
                var i = "",
                    n = null;
                if (!e || !e.length) return i;
                for (var a = 0, o = e.length; o > a; a++) if (n = e[a]) {
                    var r = "";
                    t && 0 === a && (r += '<i class="curr_pos"></i>'), i += "<li>" + n.displayname + "<span>" + n.address + '</span><input type="hidden" value="' + (n.city || "") + '" lat="' + (n.lat || "") + '" lng="' + (n.lng || "") + '">' + r + "</li>"
                }
                return i += "<li style='color:#ff8a01;' id='liExpand'><a>收起</a></li>"
            }, l = function() {
                var t = o(),
                    i = t.val().replace("附近", "").trim();
                if (w.getBytesLen(i) < 2) return e.hide();
                var a = ++P,
                    r = function() {
                        var e = "";
                        switch (n) {
                            case "city":
                                X.cityname && (e = "/api/v2/p_placesuggestion");
                                break;
                            case "country":
                                e = "/api/v2/weixinapi/p_getstartsug"
                        }
                        return e ? e + "?" + dd.urlParams({
                            query: i,
                            appversion: 2.5,
                            maptype: X.maptype || "",
                            city: X.cityname || "",
                            ipcity: H || ""
                        }) : void 0
                    }, s = function() {
                        return e.attr("_sugsCounter") == a && "none" != e.css("display")
                    };
                d("loading"), e.attr("_sugsCounter", a), dd.ajax.getJSON(r(), {
                    isSequenceReq: !0,
                    successFn: function(e) {
                        s() && (0 === e.errno && e.result && e.result.length ? ("country" === n && (H = e.ipcity), d(c(e.result))) : d("noResult"))
                    },
                    failFn: function() {
                        s() && d("research")
                    }
                })
            };
        return e.on("click", "li", function() {
            var t = dd(this),
                n = r(),
                o = a();
            if (t.is(".tip-research")) return l(), void 0;
            if ("no-slide-up" !== t[0].id && (e.hide(), n.hide(), "liExpand" !== t[0].id && !t.is(".no-click") && !t.is(".for-to-addr"))) {
                var s = function(e, t) {
                    if (t) {
                        var n = e ? G : K,
                            a = e ? "from" : "to",
                            o = {};
                        for (var r in t) o[a + r] = t[r];
                        n.val(t.name), i(o), kt.appraisal(e, t), e ? W = !1 : M = !1, pt()
                    }
                }, d = t[0].childNodes,
                    c = d[0],
                    u = d[1],
                    f = d[2],
                    p = {
                        name: c.nodeValue,
                        addr: u.innerText,
                        lat: f.getAttribute("lat"),
                        lng: f.getAttribute("lng"),
                        maptype: X.maptype
                    };
                dd.geo.isGeoSucc || (X.cityname = d[2].getAttribute("value")), s(o, p)
            }
        }), {
            show: s,
            hide: e.hide,
            html: d,
            tmpl: c,
            doSearch: l
        }
    }
    function f() {
        dd.ajax.getJSON("/api/v2/c_orderrecover", {
            data: {
                __: Date.now()
            },
            successFn: function(e) {
                if (0 !== e.errno) return o();
                switch (e.product_type) {
                    case "TWc9PQ==":
                        e.oid ? ht.recoveryOrder(e):
                            o();
                            break;
                        case "TkE9PQ==":
                            e.oid ? vt.recoveryOrder(e):
                                o();
                                break;
                            case "TVE9PQ==":
                                e.oid ? gt.recoveryOrder(e):
                                    o();
                                    break;
                                default:
                                    o()
                }
            },
            failFn: o
        })
    }
    function p() {
        var e = function(e, t) {
            e && "input" == e.type && ("start" == t ? W = !0 : M = !0, Q[0].className = "btn-gray")
        }, t = function(e, t) {
            e.hide(), t.val(""), pt(), setTimeout(function() {
                !S && t[0].focus(), "txt_start" == t[0].id ? o() : r()
            }, 50)
        }, i = function(e) {
            var t = G[0].classList.contains("current");
            R[0].contains(e.target) || (t ? W ? e.preventDefault() : Y.hide() : M ? e.preventDefault() : Y.hide())
        }, o = function(t) {
            e(t, "start"); {
                var i = G.val().trim();
                K.val().trim()
            }
            return G.addClass("current"), K.removeClass("current"), et.hide(), tt.hide(), i && et.show("inline-block"), !dd.geo.isGeoSucc || i && i !== X.fromname ? (g.doSearch(), t && t.stopPropagation(), void 0) : (g.html(g.tmpl(U, !0), !0), void 0)
        }, r = function(t) {
            e(t, "end");
            var i = G.val().trim(),
                n = K.val().trim();
            if (G.removeClass("current"), K.addClass("current"), et.hide(), tt.hide(), n && tt.show("inline-block"), !i) {
                var o = G[0].placeholder.indexOf("定位中") > -1;
                return !o && n && K.val(""), window.blur && K[0].blur(), k.tip(o ? "定位中，请稍后" : "请输入起点"), void 0
            }
            n ? g.doSearch() : (t && "input" == t.type && (a(), kt.appraisal(!1, {
                toname: n,
                toaddr: n,
                tolat: "",
                tolng: ""
            })), d({
                cityid: X.cityid
            })), t && t.stopPropagation()
        };
        et.on("touchend", function() {
            t(et, G), n(), xt.showExtInfo("")
        }), tt.on("touchend", function() {
            t(tt, K), a(), xt.showExtInfo("")
        }), G.on("focus,input", o), K.on("focus,input", r), V.tap(function() {
            w.doJump("/api/v2/webapp_schedule", {
                lat: X.lat,
                lng: X.lng,
                maptype: X.maptype,
                scheduletime: x.scheduletime
            }, !0)
        }), $.tap(function() {
            w.doJump(E + "/m/djpxieyi.html", !0)
        }), Y.on("touchmove", function() {
            Z[0].childElementCount > 3 && (G[0].blur(), K[0].blur())
        }), b.documentElement.addEventListener("touchend", i, !1), b.body.addEventListener("touchend", i, !1), C && dd.platform({
            ios: function() {},
            android: function() {
                document.addEventListener("back", function(e) {
                    e.preventDefault(), AlipayJSBridge.call("closeWebview")
                }, !1)
            },
            wp: function() {}
        })
    }
    function m() {
        J && w.crossOriginStore("token", J, !0), N && w.crossOriginStore("phone", N, !0);
        var e, t;
        switch (y = !(_ || S || C || (!x.lat || !x.lng) && (!x.fromlat || !x.fromlng)), e = x.toaddr || "", t = x.toname || x.toshop || e.replace("{toaddr}", "") || "", L && "general_app" !== L && "0" !== L && (sessionStorage.openid = L), y ? dd.extend(X, {
            lat: x.lat || x.fromlat,
            lng: x.lng || x.fromlng,
            maptype: x.maptype.replace("wgs84", "wgs") || ""
        }) : n(), C ? dd.alipayUtil.ready(function(e) {
            var t = e.startupParams.endAddr;
            dd.extend(X, {
                toname: t || X.toname || "",
                toaddr: t || X.toaddr || ""
            }), K.val(X.toname), t && (K[0].setAttribute("disabled", "disabled"), document.querySelector(".wrap").classList.add("disabled-dest"))
        }) : (dd.extend(X, {
            toname: t || X.toname || "",
            toaddr: e || X.toaddr || ""
        }), K.val(X.toname)), x.biz) {
            case "1":
                D = "diditaxi";
                break;
            case "2":
                D = "udache";
                break;
            case "3":
                D = "fastcar";
                break;
            case "4":
                D = "daijia";
                break;
            default:
                D = sessionStorage.lastBizName || localStorage.lastBizName || D
        }
        return B && rt.hide(), s(), r(), g = new u, x.oid || !st() ? o() : (f(), lt(T + "images/loading_2.gif"), void 0)
    }
    dd.ns("geo"), dd.ns("webappBiz");
    var g, h, v, y, b = document,
        w = dd.common,
        k = dd.dialog,
        x = dd.urlParse(),
        _ = w.isWeixin(),
        S = w.isMQQ(),
        C = w.isAlipay(),
        B = "55237" == w.getChannel(),
        j = "20151204",
        T = "//static.xiaojukeji.com/webapp/",
        z = "//api.udache.com/gulfstream/api/v1/webapp/",
        O = "//static.udache.com/gulfstream/webapp/js/biz.min.js?" + j,
        I = "//assets.kuaidadi.com/daijia/passengerwebapp/1.2.2/daijiabiz.js",
        E = "//page.kuaidadi.com",
        F = "//static.xiaojukeji.com/webapp/js/merged-md5-kop-5836c66c20.js",
        A = {
            userRole: 1
        }, L = sessionStorage.openid || dd("#h_openid").val(),
        N = w.getData("phone") || "",
        q = dd("#h_phone").val(),
        J = encodeURIComponent(w.getData("token") || ""),
        P = 0,
        D = "diditaxi",
        H = "",
        U = [],
        X = dd.parseJSON(sessionStorage.posInfo) || {}, W = !1,
        M = !1,
        R = (dd("header"), dd(".content")),
        G = dd("#txt_start"),
        K = dd("#txt_end"),
        Q = dd("#btn_call"),
        V = dd("#btn_schedule"),
        $ = dd("#btn_agree"),
        Y = dd("#d_sugs"),
        Z = dd("#ul_pois"),
        et = dd("#i-close-s"),
        tt = dd("#i-close-e"),
        it = dd("#s_driver_num"),
        nt = (dd("#s_cartype"), dd("#s_cardname")),
        at = dd("#dv_charge"),
        ot = (dd("#h_priceTips"), dd("#h_access_token")),
        rt = dd("#dv-slide-bar"),
        st = function() {
            return N && J
        }, dt = function(e) {
            w.goLogin(dd.extend({
                way: 2,
                phone: q
            }, e))
        }, ct = function(e) {
            var t = -1 === e.indexOf("?") ? "?" : "&";
            return e + t + "v=" + j
        }, lt = function(e) {
            var t = new Image;
            t.src = e
        }, ut = function(e) {
            var t = dd("#preLoad img"),
                i = t.size();
            t.each(function() {
                var t = dd(this);
                t.attr("src", t.attr("_src"));
                var n = function() {
                    i--, 0 == i && (e && e(), ut = function(e) {
                        e && e()
                    })
                };
                t[0].onload = n, t[0].onerror = n
            })
        }, ft = function(e) {
            dd.loadJS(F, function() {
                e && e(), ft = function(e) {
                    e && e()
                }
            })
        }, pt = function() {
            var e = "btn-gray";
            K.val().trim() && G.val().trim() && !W && !M && ("fastcar" == D && vt.disabledMsg || (e = "btn-orange")), Q[0].className = e
        }, mt = function() {
            return dd.geo.isGeoSucc ? "city" : "country"
        }, gt = {
            business: {
                name: "diditaxi",
                desc: "出租车",
                js: ct("//static.xiaojukeji.com/webapp/js/diditaxi-47b1fd571c.js"),
                selectedCB: function() {
                    e(this)
                }
            },
            recoveryOrder: function(e) {
                function t(e) {
                    w.doJump("/api/v2/weixinapi", e, !0)
                }
                var i = +(w.getData("recoveryPageCode") || e.type);
                switch (i) {
                    case 1:
                        k.alert({
                            tip: e.msg,
                            btn: {
                                val: "马上恢复",
                                handler: function() {
                                    t({
                                        page: "waitforstrive",
                                        oid: e.oid
                                    })
                                }
                            }
                        });
                        break;
                    case 2:
                        k.confirm({
                            text: e.msg,
                            cancel: {
                                val: "取消",
                                handler: o
                            },
                            confirm: {
                                val: "进入",
                                handler: function() {
                                    t({
                                        page: "waitforcar",
                                        oid: e.oid
                                    })
                                }
                            }
                        });
                        break;
                    case 3:
                        k.confirm({
                            text: "您有订单在进行中",
                            tip: "您可现在进入，或稍后从“我的行程”中查看",
                            cancel: {
                                val: "取消",
                                handler: o
                            },
                            confirm: {
                                val: "进入",
                                handler: function() {
                                    t({
                                        page: "charge",
                                        oid: e.oid,
                                        isrecover: 1
                                    })
                                }
                            }
                        });
                        break;
                    case 4:
                        k.confirm({
                            text: "您有订单在进行中",
                            tip: "如已到达目的地，评价师傅以结束行程，或稍后从“我的行程”中查看",
                            cancel: {
                                val: "取消",
                                handler: o
                            },
                            confirm: {
                                val: "进入",
                                handler: function() {
                                    t({
                                        page: "travel_complete",
                                        noComplete: 1,
                                        oid: e.oid
                                    })
                                }
                            }
                        });
                        break;
                    default:
                        o()
                }
            }
        }, ht = {
            business: {
                name: "udache",
                desc: "专车",
                js: O,
                selectedCB: function() {
                    e(this)
                }
            },
            recoveryOrder: function(e) {
                if (e && e.oid) {
                    e.desc = e.desc || "专车";
                    var t = function() {
                        w.doJump(z + "pIndex", {
                            oid: encodeURIComponent(e.oid),
                            business: e.business || "udache"
                        })
                    };
                    switch (e.type) {
                        case 1:
                            k.alert({
                                tip: "您有" + e.desc + "订单正在呼叫，将为您恢复",
                                btn: {
                                    val: "马上恢复",
                                    handler: t
                                }
                            });
                            break;
                        case 2:
                            k.confirm({
                                text: "您有未完成的" + e.desc + "订单，是否进入？",
                                cancel: {
                                    val: "不进入",
                                    handler: o
                                },
                                confirm: {
                                    val: "进入",
                                    handler: t
                                }
                            });
                            break;
                        default:
                            o()
                    }
                }
            }
        }, vt = dd.extend({}, ht, {
            business: dd.extend({}, ht.business, {
                name: "fastcar",
                desc: "快车"
            }),
            recoveryOrder: function(e) {
                return ht.recoveryOrder(dd.extend({
                    desc: "快车",
                    business: "fastcar"
                }, e))
            },
            showTipDot: function() {
                var e = "fastcarTipDotFlag";
                if (!w.getData(e)) {
                    var t = document.createElement("span");
                    t.className = "tip-dot", rt.find(".item")[0].appendChild(t), w.setData(e, 1)
                }
            },
            hideTipDot: function() {
                rt.find(".tip-dot").hide()
            }
        }),
        yt = {
            business: {
                name: "daijia",
                desc: "代驾",
                js: I,
                selectedCB: function() {
                    e(this)
                }
            },
            getToken: function() {
                var e = localStorage.getItem("daijia_pid"),
                    t = localStorage.getItem("daijia_token");
                return {
                    pid: e || null,
                    token: t || null
                }
            },
            clearToken: function(e, t) {
                (999601 === e || 999602 === e || 620014 === e) && (localStorage.removeItem("daijia_pid"), localStorage.removeItem("daijia_token"), t && yt.login({
                    lat: X.lat,
                    lng: X.lng,
                    maptype: X.maptype
                }, function(e) {
                    t(e)
                }))
            },
            recoveryOrder: function() {
                var e = new dd.KOP(A),
                    t = yt.getToken(),
                    i = function(e) {
                        var i = e.oid || 0;
                        if (i) {
                            var n = E + (1 == e.orderState ? "/m/djwaiting.html" : "/m/djprocessing.html");
                            k.confirm({
                                text: "您有一个代驾订单正在进行中，您还可以从“我的行程”中访问。",
                                cancel: {
                                    val: "关闭",
                                    handler: function() {}
                                },
                                confirm: {
                                    val: "进入订单",
                                    handler: function() {
                                        w.doJump(n, {
                                            oid: i,
                                            did: e.did,
                                            pid: t.pid,
                                            token: t.token,
                                            daijia_pid: t.pid,
                                            daijia_token: t.token,
                                            sendTime: e.sendTime,
                                            startLat: X.lat,
                                            startLng: X.lng,
                                            maptype: X.maptype
                                        })
                                    }
                                }
                            })
                        }
                    };
                e.send("lj.o.p.last.order", {
                    pid: t.pid
                }, t.pid, t.token, function(e) {
                    e && i(e)
                }, function(e) {
                    yt.clearToken(e, yt.recoveryOrder)
                })
            },
            login: function(e, t, i) {
                var n = new dd.KOP(A);
                n.send("lj.u.p.login", {
                    mob: N,
                    source: 3,
                    tTicket: decodeURIComponent(J),
                    lng: e.lng,
                    lat: e.lat
                }, null, null, function(e) {
                    localStorage.setItem("daijia_pid", e.pid), localStorage.setItem("daijia_token", e.token), t && t(e)
                }, function(e) {
                    yt.clearToken(e), i && i()
                })
            },
            switchOn: function(e, t, i) {
                var n = new dd.KOP(A);
                n.send("lj.u.p.getEntrySwitch", {
                    bizType: 1,
                    lng: e.lng,
                    lat: e.lat,
                    source: 6,
                    phone: N
                }, null, null, function(e) {
                    t && t(e)
                }, function() {
                    i && i()
                })
            }
        }, bt = {
            business: {
                name: "liftcar",
                desc: "顺风车",
                selectedCB: function() {
                    J && w.crossOriginStore("token", J, !0), N ? w.crossOriginStore("phone", N, function() {
                        w.doJump("//common.diditaxi.com.cn/general/webEntry?fr=oldindex", !0)
                    }, !0) : w.doJump("//common.diditaxi.com.cn/general/webEntry?fr=oldindex", !0)
                }
            }
        }, wt = [gt.business],
        kt = {
            getBizIndex: function(e) {
                var t = 0;
                return e = e || D, dd.each(wt, function(i, n) {
                    return n.name == e ? (t = i, !1) : void 0
                }), t
            },
            setBizForNewHome: function(e) {
                switch (e) {
                    case "udache":
                        w.crossOriginStore("currentBiz", 258, !0);
                        break;
                    case "fastcar":
                        w.crossOriginStore("currentBiz", 260, !0);
                        break;
                    case "daijia":
                        w.crossOriginStore("currentBiz", 261, !0);
                        break;
                    case "liftcar":
                        w.crossOriginStore("currentBiz", 259, !0);
                        break;
                    default:
                        w.crossOriginStore("currentBiz", 257, !0)
                }
            },
            getBiz: function(e) {
                switch (e || D) {
                    case "udache":
                        return ht.business;
                    case "fastcar":
                        return vt.business;
                    case "daijia":
                        return yt.business;
                    case "liftcar":
                        return bt.business;
                    default:
                        return gt.business
                }
            },
            getBizData: function(e) {
                return {
                    lat: X.lat || "",
                    lng: X.lng || "",
                    maptype: X.maptype || "",
                    flat: X.fromlat || "",
                    flng: X.fromlng || "",
                    from_name: X.fromname || "",
                    from_address: X.fromaddr || "",
                    tlat: X.tolat || "",
                    tlng: X.tolng || "",
                    to_name: X.toname || "",
                    to_address: X.toaddr || "",
                    cityid: X.cityid || "",
                    cityname: X.cityname || "",
                    openid: L,
                    channel: w.getChannel(),
                    source: w.getSource(),
                    business: e || D
                }
            },
            getBizFrom: function() {
                var e = "webapp";
                return _ ? "wl" + e : S ? "qq" + e : C ? "ali" + e : "wap" + e
            },
            insertBiz: function(e, t) {
                wt.splice(e, 0, t)
            },
            appraisal: function(e, t) {
                xt.common = kt.getBizData();
                var i = e ? xt.onFromChange : xt.onDestChange;
                dd.isFn(i) && i.call(xt, t)
            }
        }, xt = {
            showCarCnt: function(e) {
                var t = it[0];
                e = "" + e, t.className = e ? "" : "loading", t.innerText = e
            },
            addMenus: function() {},
            showAdv: function() {},
            showExtInfo: function(e) {
                "diditaxi" === D ? at[0].classList.add("is_taxi") : at[0].classList.remove("is_taxi"), at.html(e), e ? at.show() : at.hide()
            },
            showBanner: function() {
                dd.banner({
                    events: {
                        tapFn: function() {
                            dd.ajax.get("/api/v2/weixinapi/collect_log?frompage=homeadv")
                        }
                    }
                })
            }
        };
    l(), m(), p()
});