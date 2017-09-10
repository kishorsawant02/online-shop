var template =  require('../hbs/ux-slider.html');

Ractive.extend({
    template: template,
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
