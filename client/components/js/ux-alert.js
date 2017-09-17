Ractive.components["ux-alert"] = Ractive.extend({
    template: Ractive.parse(ux_alert),
    isolate: true,
    data: {
        alertData: null,
        successMsg:null
    },
    oninit: function() {
        console.log('ux-alert init');
    },
    onrender: function() {
        console.log('ux-alert render');
    },
    onconfig: function() {
        this.observe('alertData', function() {
            window.setTimeout(function() {
                this.set('alertData', null);
            }.bind(this), 4000);
        });
        this.observe('successMsg', function() {
            window.setTimeout(function() {
                this.set('successMsg', null);
            }.bind(this), 7000);
        });
    }
});