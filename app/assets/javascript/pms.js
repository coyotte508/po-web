function PMHolder() {
    var self = this;
    $.observable(self);

    self.pms = {};
}

PMHolder.prototype.pm = function(pid, open) {
    open = open || false;
    if (pid == webclient.ownId) {
        return undefined;
    }

    var pm;
    pid = +pid;
    if (pid in this.pms) {
        return this.pms[pid];
    }

    if (webclient.players.isIgnored(pid)) {
        return undefined;
    }

    webclient.players.addFriend(pid);

    pm = this.pms[pid] = new PMTab(pid);
    this.observe(pm);

    this.trigger("newpm", pid);

    if (open) {
        webclientUI.switchToTab("pm-" + pid);
    } else {
        pm.flashTab();
    }

    return pm;
};

PMHolder.prototype.observe = function(pm) {
    var self = this;

    pm.on("close", function() {
        delete self.pms[pm.id];
    });
};

$(function() {
    webclient.players.on("login", function(id) {
        if (id in webclient.pms.pms) {
            webclient.pms.pm(id).reconnect();
        }
    }).on("playerremove", function(id) {
        if (id in webclient.pms.pms) {
            webclient.pms.pm(id).disconnect();
        }
    });
});
