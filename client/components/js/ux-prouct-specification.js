Ractive.components["ux-prouct-specification"] = Ractive.extend({
    template: ux_prouct_specification,
    isolate: true,
    oninit: function() {
        console.log('ux-prouct-specification init');
    },
    onrender: function() {
        console.log('ux-prouct-specification render');
    }
});