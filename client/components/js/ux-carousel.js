Ractive.components["ux-carousel"] = Ractive.extend({
    template: ux_carousel,
    isolate: true,
    data: {
        carouselItems: []
    },
    on: {
        init: function() {
            console.log('ux-carousel init');
            var self = this;
            $.ajax({
                url: "/slider/latest",
                success: function(result, model) {
                    self.set('carouselItems', result);
                },
                error: function(response) {
                    self.detach();
                    var error = response.responseJSON;
                    self.setAlertData(error.message + error.description, 'danger');
                }
            });
        },
        render: function() {
            console.log('ux-carousel render');
        },
        onBuyNowClick: function(event, data) {
            console.log('sadfsad');
            sessionStorage.setItem('product', JSON.stringify(event.get()));
            window.location.href = '/product.html';
        },
        config: function() {
            console.log('ux-carousel config');
        }
    }
});