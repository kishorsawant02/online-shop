
Ractive.components['ux-footer'] = Ractive.extend({
    template: Ractive.parse(ux_footer),
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