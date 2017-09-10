var template =  require('../hbs/ux-footer.html') ;

Ractive.components['ux-footer'] = Ractive.extend({
    template: template,
    isolated: true,
    data: {
        title: 'ux-footer'
    },
    oninit: function() {
        console.log('ux-footer');
    },
    oncomplete: function() {
        console.log('ux-footer complete');
    }
});