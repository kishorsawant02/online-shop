Ractive.components["ux-image"] = Ractive.extend({
    template: ux_image,
    isolate: true,
    oninit: function() {
        console.log('ux-image init');
    },
    onrender: function() {
        console.log('ux-image render');
    }
});