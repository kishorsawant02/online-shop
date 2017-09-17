 Ractive.components["ux-image-url-box"] = Ractive.extend({
     template: ux_image_url_box,
     isolate: true,
     oninit: function() {
         console.log('ux-image-url-box init');
     },
     onrender: function() {
         console.log('ux-image-url-box render');
     },
     onconfig: function() {
         console.log('ux-image-url-box config');
         this.on('onChange', function(event) {
             console.log('on change Action');
         });
     },
     on: {
         removeImage: function(event) {
             var index = event.get('index');
             var images = this.get('images');
             images.splice(index, 1);
             this.set('images', images);
         }
     }
 });