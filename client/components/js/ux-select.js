Ractive.components["ux-select"] = Ractive.extend({
    template: Ractive.parse(ux_select),
    isolate: true,
    oninit: function() {
        console.log('ux-select init');
    },
    onrender: function() {
        console.log('ux-select render');
    },
    onconfig: function() {
        console.log('ux-select config');
        this.on('onChange', function(event) {
            console.log('on change Action');
        });
    }
});