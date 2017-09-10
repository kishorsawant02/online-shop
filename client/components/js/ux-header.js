var Ractive = require('ractive');
var template =  require('../hbs/ux-header.html');

export default Ractive.components['ux-header'] = Ractive.extend({
    template: template,
    isolated: true,
    data: {
        title: 'ux-header'
    },
    oninit: function() {
        console.log('ux-header');
    },
    oncomplete: function() {
        console.log('ux-header complete');
    }
});