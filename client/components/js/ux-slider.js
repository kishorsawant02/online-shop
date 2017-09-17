Ractive.components['ux-slider'] = Ractive.extend({
    template: Ractive.parse(ux_slider),
    isolated: true,
    data: {
    	title: 'ux-slider'
    },
    oninit: function() {
        console.log('ux-slider');
    },
    oncomplete: function () {
    	console.log('ux-slider complete');
    }
});
