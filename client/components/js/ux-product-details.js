Ractive.components["ux-product-details"] = Ractive.extend({
    template: ux_product_details,
    isolate: true,
    oninit: function() {
        console.log('ux-product-details init');
    },
    onrender: function() {
        console.log('ux-product-details render');
    }
});