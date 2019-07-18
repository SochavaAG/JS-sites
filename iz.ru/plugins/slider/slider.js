(function ($) {
	// Drupal.behaviors.myModuleBehavior = {
 //    	attach: function (context, settings) {

			$(document).ready(function() {
				var owl = $('.slider-block__inside__rows');
				owl.owlCarousel({
					items: 1,
					loop: true,
					margin: 0,
					autoplay: true,
					autoplayTimeout: 5000,
					autoplayHoverPause: true,
					nav: true,
					lazyLoad:true,
					smartSpeed: 800,
				  	navText: ["<div class='go_to_prev'><div class='icon'></div></div>","<div class='go_to_next'><div class='icon'></div></div>"]
				});

				$(".slider-block .go_to_next").on("mouseover", function() {
						$(".slider-block__inside__item .slider-block__inside__item__next-info").addClass("hovered");
					}
				);
				$(".slider-block .go_to_next").on("mouseleave", function() {
						$(".slider-block__inside__item .slider-block__inside__item__next-info").removeClass("hovered");
					}
				);

				$(".slider-block .go_to_prev").on("mouseover", function() {
						$(".slider-block__inside__item .slider-block__inside__item__prev-info").addClass("hovered");
					}
				);
				$(".slider-block .go_to_prev").on("mouseleave", function() {
						$(".slider-block__inside__item .slider-block__inside__item__prev-info").removeClass("hovered");
					}
				);

			});

	// 	}
	// }

})(jQuery);
