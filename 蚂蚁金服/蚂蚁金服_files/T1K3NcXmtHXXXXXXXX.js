define("family", [], function() {
    function t() {
        $("li.content-wrapper").each(function(t, o) {
            if ($(o).isOnScreen()) {
                var i = $(o).find(".logo").attr("class"),
                    n = $(o).find(".logo span img");
                n.css(i.indexOf("fn-right") >= 0 ? {
                    right: 0,
                    opacity: 1
                } : {
                    left: 0,
                    opacity: 1
                })
            }
        })
    }
    function o() {
        $(document).ready(function() {
            t(), $(window).scroll(function() {
                t()
            })
        })
    }
    return $.fn.isOnScreen = function() {
        var t = $(window),
            o = {
                top: t.scrollTop(),
                left: t.scrollLeft()
            };
        o.right = o.left + t.width(), o.bottom = o.top + t.height();
        var i = this.offset();
        return i.right = i.left + this.outerWidth(), i.bottom = i.top + this.outerHeight(), !(o.right < i.left || o.left > i.right || o.bottom < i.top || o.top > i.bottom)
    }, {
        show: o
    }
});