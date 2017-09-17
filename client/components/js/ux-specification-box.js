Ractive.components["ux-specification-box"] = Ractive.extend({
    template: ux_specification_box,
    isolate: true,
    oninit: function() {
        console.log('ux-specification-box init');
    },
    onrender: function() {
        console.log('ux-specification-box render');
    },
    onconfig: function() {
        console.log('ux-specification-box config');
        this.on('onChange', function(event) {
            console.log('on change Action');
        });
    },
    on: {
        removeSpecification: function(event) {
            var index = event.get('index');
            var specification = this.get('specification');
            specification.splice(index, 1);
            this.set('specification', specification);
        }
    }
});