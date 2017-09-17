Ractive.components['ux-header'] = Ractive.extend({
    template: Ractive.parse(ux_header),
    isolated: true,
    data: {
        title: 'ux-header'
    },
    oninit: function() {
        console.log('ux-heddader');
    },
    oncomplete: function() {
        console.log('ux-header complete');
    }
});