(function ($) {
	// Drupal.behaviors.myModuleBehavior = {
 //		attach: function (context, settings) {
			// $(document).ready(function() {
			jQuery(window).on('load', function(){
				var opinions_block = $('.opinions_block__inside__list .four-col-news__list__row');
				opinions_block.owlCarousel({
					items: 4,
					loop: false,
					margin: 0,
					autoplay: false,
					autoplayTimeout: 5000,
					autoplayHoverPause: true,
					nav: true,
					lazyLoad:true,
					smartSpeed: 200,
				  	navText: ["<div class='go_to_prev'><div class='icon'></div></div>","<div class='go_to_next'><div class='icon'></div></div>"],
					responsiveClass:true,
					responsive:{
						0:{
							items:1
						},
						320:{
							items:1
						},
						540:{
							items:1
						},
						767:{
							items:1
						},
						768:{
							items:3
						},
						1024:{
							items:4
						}
					}

				});
			});

	// 	}
	// }

})(jQuery);
