Ractive.components["ux-product-catalog"] = Ractive.extend({
    template: ux_product_catalog,
    isolate: true,
    on: {
        init: function() {
            console.log('ux-product-catalog init');
        },
        render: function() {
            console.log('ux-product-catalog render');
        },
        redirectToDetails: function(event, ee) {
            sessionStorage.setItem('product', JSON.stringify(event.get()));
            window.location.href = '/product.html';
        }
    }
});