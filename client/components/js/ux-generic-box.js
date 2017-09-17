Ractive.components['ux-generic-box'] = Ractive.extend({
    template: Ractive.parse(ux_generic_box),
    isolated: true,
    data: {
        types: []
    },
    on: {
        init: function() {
            console.log('ux-generic-box');
        },
        complete: function() {
            console.log('ux-generic-box complete');
        },
        onUserSelection: function(event) {
            var data = event.get();
            sessionStorage.setItem('selectedMaterial', data.material);
            sessionStorage.setItem('selectedCategory', data.category);
            window.location.href = '/products.html'
        }
    }
});