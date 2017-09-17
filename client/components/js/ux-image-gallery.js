Ractive.components["ux-image-gallery"] = Ractive.extend({
    template: ux_image_gallery,
    isolate: true,
    data: {
        images: [],
        selectedImage: ''
    },
    on: {
        init: function() {
            console.log('ux-image-gallery init');
        },
        render: function() {
            var images = this.get('images');
            _.each(images, function(data, index) {
                data.selected = (index == 0);
                data.index = index;
            });
            images.length = 4;
            this.set('images', images);
            this.set('selectedImage', images[0].url);
        },
        doShowSelectedImage: function(event) {
            var index = event.get('index');
            this.set('selectedImage', event.get('url'));
            this.set('images.*.selected', false);
            this.set('images.' + index + '.selected', true);
        }
    }
});