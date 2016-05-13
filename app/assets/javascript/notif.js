/*
Notifications with Favico.js - Heark

Functions:
notif.count - total number of current notifications
notif.update() - Adds 1 notification to favicon
notif.titleUpdate() - updates the favicon (already called every second)
notif.clear() - Clears all notifications
notif.dec() - Removes 1 notification
notif.forEach(array) - Adds 1 notification for each value in array

*/

Object.prototype.watch || Object.defineProperty(Object.prototype, "watch", {
    enumerable: !1,
    configurable: !0,
    writable: !1,
    value: function(t, n) {
        var e = this[t],
            o = e,
            i = function() {
                return o
            },
            c = function(i) {
                return e = o, o = n.call(this, t, e, i)
            };
        delete this[t] && Object.defineProperty(this, t, {
            get: i,
            set: c,
            enumerable: !0,
            configurable: !0
        })
    }
}), Object.prototype.unwatch || Object.defineProperty(Object.prototype, "unwatch", {
    enumerable: !1,
    configurable: !0,
    writable: !1,
    value: function(t) {
        var n = this[t];
        delete this[t], this[t] = n
    }
});
var o = {
        p: 0
    },
    notif = {
        favicon: new Favico({
            animation: "pop",
            type: "rectangle"
        }),
        faviconNoAnim: new Favico({
            animation: "none",
            type: "rectangle"
        }),
        count: 0,
        update: function() {
            notif.count++, o.p++
        },
        titleUpdate: function() {
            o.watch("p", function(t, n, e) {
                return notif.favicon.badge(notif.count), e
            }), 0 == notif.count ? notif.favicon.badge("") : notif.faviconNoAnim.badge(notif.count)
        },
        clear: function() {
            notif.count = 0
        },
        dec: function() {
            notif.count--
        },
        forEach: function(t) {
            for (var n = 0; n < t.length; n++) notif.update()
        }
    };
setInterval(function() {
    notif.titleUpdate()
}, 1e3);
