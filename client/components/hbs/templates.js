var ux_alert = "<div class='ux_alert'>{{#with alertData}}<div class='alert alert-{{type}}' role='alert'>{{{msg}}}</div>{{/with}} {{#if successMsg}}<div class='alert alert-success' role='alert'>{{{successMsg}}}</div>{{/if}}</div>";
var ux_carousel = "<div id='myCarousel' class='carousel slide ux-carousel' data-ride='carousel'><ol class='carousel-indicators'>{{#each carouselItems: i}}<li data-target='#myCarousel' data-slide-to='{{i}}' class='{{#if i==0 }} active{{/if}}'></li>{{/each}}</ol><div class='carousel-inner' role='listbox'>{{#each carouselItems: i}}<div class='item {{#if i==0 }} active{{/if}} carousel-inner-height'><img class='first-slide' src='{{icon_img}}' alt='First slide'><div class='container'><div class='carousel-caption'><p>{{description}}</p><p><button type='button' on-click='onBuyNowClick' class='button'>&nbsp;&nbsp;Buy Now &nbsp; &nbsp;</button></p></div></div></div>{{/each}}</div><a class='left carousel-control' href='#myCarousel' role='button' data-slide='prev'><span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span> <span class='sr-only'>Previous</span> </a><a class='right carousel-control' href='#myCarousel' role='button' data-slide='next'><span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span> <span class='sr-only'>Next</span></a></div>";
var ux_footer = "<div class='ux-footer v-large-top' style='{{style}}'><div class='copyright'>Copyright © 2017 Rathi Jewellers. All Rights Reserved</div><div class='poweredBy'>Powered by webworldcomputer.in</div></div>";
var ux_generic_box = " {{#each products:index}}<div class='ux-generic-box'><div class='col-md-2 data'><div on-click='onUserSelection' product='{{.}}' class='product'><div class='pager'><img src='{{icon_img}}' alt='Not Found'><div class='v-small product-material'>{{material}}</div><div class='v-small product-category'>{{category}}</div><div class='product-new-price'>Starting &#x20B9;{{startprice}}</div><div class='product-discount'>Min off {{discount}}%</div></div></div></div></div>{{/each}} ";
var ux_header="<div class='ux-header v-large-bottom'><div class='row margin-zero p-x-large-bottom'></div><nav class='navbar navbar-fixed-top'><div class='container p-small-bottom'><div class='p-medium-left navbar-header'><a class='navbar-brand'><img src='/img/logo.jpg' alt='Logo'></a></div><div id='navbar' class='navbar-collapse collapse'><ul class='nav navbar-nav'></ul><ul class='nav navbar-nav navbar-right p-normal-right'><li><br>Shop No. 9<br>Opp New Muncipal Corp.<br>Ambad, Jalna- 431204.</li></ul><br></div><!--/.nav-collapse --></div></nav></div>";
var ux_image_gallery = "<div class='v-normal ux-image-gallery'><img class='gallery-image' src='{{selectedImage}}'><div class='color-selection v-normal'>{{#each images:index}} <span on-click='doShowSelectedImage' class='image-selection-area col-md-3 p-none-right {{#if selected}} selected {{/if}} {{#if index == 0}} p-none-left {{/if}}'><img src='{{url}}' alt='Not found' class=''> </span>{{/each}}</div></div>";
var ux_image_url_box = " {{#each images:index}}<div class='v-normal-bottom col-sm-12 row ux-image-url-box'><span class='col-sm-10'><input minlength='4' maxlength='100' placeholder='Enter Image Url' class='form-control' type='text' value='{{url}}'></span><span class='col-sm-2'><button type='button' on-click='removeImage' index='{{index}}' class='btn btn-danger'>-</button></span></div>{{/each}} ";
var ux_image = "<div class='v-normal ux-image'><img src='{{url}}' alt='Not Found'></div>";
var ux_product_catalog="{{#each products:index}}<div class='ux-product-catalog'><div class='col-md-3 data'><div on-click='redirectToDetails' product='{{.}}' class='product'><div class='pager'><ux-image url='{{icon_img}}'></ux-image><div class='v-small product-name'>{{name}}</div><div class='product-new-price'>New Price : &#x20B9;{{parseInt(price-(price*(discount/100)))}}</div><div class='product-old-price'>Old Price : &#x20B9;{{price}}</div><div class='product-discount'>Discount: {{discount}}%off</div></div></div></div></div>{{/each}} ";
var ux_product_details = " {{#with product}}<div class='ux-product-details'><div class='v-normal product-name' style=''>{{name}}</div><div class='v-normal-top v-large-bottom'>{{{description}}}</div><div class='product-new-price'>&#x20B9;{{parseInt(price-(price*(discount/100)))}}</div><div class='product-old-price'>&#x20B9;{{price}}</div><div class='product-discount'>{{discount}}% off</div><button type='button' class='button v-large-top' data-toggle='modal' data-target='#myModal'>Buy Now</button></div>{{/with}}";
var ux_prouct_specification = "<div class='ux-prouct-specification'><div class='row col-md-12'><h1>Specification</h1></div>{{#each product.specification}}<div class='row border-bottom'><div><span class='col-md-4 v-normal'>{{key}}</span><span class='v-normal col-md-8'>{{value}}</span></div></div>{{/each}}</div>";
var ux_select = "<div class='ux-select'><select value='{{selected_value}}' on-change='onChange' class='form-control'>{{#each options:i}}<option value='{{value}}' selected='{{selected}}'>{{text}}</option>{{/each}}</select></div>";
var ux_slider="<div>{{title}}slide</div>";
var ux_specification_box = " {{#each specification :index}}<div class='v-normal-bottom col-sm-12 row ux-specification-box'><span class='col-sm-5'><input minlength='4' maxlength='100' placeholder='Enter Key Name' class='form-control' type='text' value='{{key}}'></span><span class='col-sm-5'><input minlength='4' maxlength='100' placeholder='Enter Value' class='form-control' type='text' value='{{value}}'></span><span class='col-sm-2'><button type='button' on-click='removeSpecification' index='{{index}}' class='btn btn-danger'>-</button></span></div>{{/each}} ";