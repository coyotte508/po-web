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
var notif = {
    favicon: new Favico({
        animation: "pop",
        type: "circle"
    }),
    faviconNoAnim: new Favico({
        animation: "none",
        type: "circle"
    }),
    count: 0,
    one_count: 0, // inital notification

    update: function() {
        notif.count++
    },

    titleUpdate: function() {
        if (notif.count == 1) {
            if (notif.one_count == 1) { // checks for initial notification to prevent looping animation
                notif.faviconNoAnim.badge(notif.count)
            } else {
                notif.one_count = 1
                notif.favicon.badge(notif.count)
            }
        } else if (notif.count == 0) {
            notif.faviconNoAnim.badge("");
        } else {
            notif.faviconNoAnim.badge(notif.count)
        }

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
