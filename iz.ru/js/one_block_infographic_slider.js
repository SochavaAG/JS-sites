
function destroy_sliders() {
	var one_b = '#block-front-bt-20-chart .one_infographic_block__row__list';
	jQuery(one_b).trigger('destroy.owl.carousel').removeClass(' owl-loaded');
	jQuery(one_b).find('.owl-stage-outer').children().unwrap();
	jQuery(one_b).css({'width': 'auto'});

	var two_b = '#block-front-bt-20-photo-list .one_infographic_block__row__list';
	jQuery(two_b).trigger('destroy.owl.carousel').removeClass(' owl-loaded');
	jQuery(two_b).find('.owl-stage-outer').children().unwrap();
	jQuery(two_b).css({'width': 'auto'});
	jQuery('block-front-bt-20-chart, #block-front-bt-20-photo-list').css({'width': 'auto'});

}


function one_block_infographic_slider() {
	setTimeout(function(){
		if (jQuery('.one_infographic_block .block-container-margins').length == 0 && 1==1) {
			var	chart_id = jQuery('#block-front-bt-20-chart').find('.block-content-class').attr('data-block_content_id'),
				photo_list_id = jQuery('#block-front-bt-20-photo-list').find('.block-content-class').attr('data-block_content_id');

			jQuery('#block-front-bt-20-chart').find('.block-content-class').remove();
			jQuery('#block-front-bt-20-photo-list').find('.block-content-class').remove();

			var chart = jQuery('#block-front-bt-20-chart').html(),
				photo_list = jQuery('#block-front-bt-20-photo-list').html();

			var content = '<div class="one_infographic_block">'+
				'<div class="block-container-margins">'+
					'<div class="one_infographic_block__content">'+
						'<div class="one_infographic_block__inside">'+
							'<div class="one_infographic_block__row block-content-class contextual-region" data-block_content_id="' + chart_id + '">'+ 
								'<div id="block-front-bt-20-chart" >' +
									'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + 
										'<use width="65" height="50" xlink:href="images/sprite-svg.svg#index--SVG_icons_type_materials--icon_3d" />' +
									'</svg>' + 
									chart + '</div>'+
							'</div>'+
							'<div class="one_infographic_block__row block-content-class contextual-region" data-block_content_id="' + photo_list_id + '">'+ 
								'<div id="block-front-bt-20-photo-list" >' + 
									'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + 
										'<use width="65" height="50" xlink:href="images/sprite-svg.svg#index--SVG_icons_type_materials--photo_icon_block" />' +
									'</svg>' + 									
									photo_list + '</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';

			jQuery('.one_infographic_block__row.first').each(function() {
				if (jQuery('.one_infographic_block__row.first').length > 1) {
					jQuery(this).remove();
				} if (jQuery('.one_infographic_block__row.first').length == 1) {
					jQuery(this).after(content);
					jQuery(this).remove();
				}
			});

		}

		destroy_sliders();

		if (jQuery(window).width() >= 940) {
			// jQuery('#block-front-bt-20-chart, #block-front-bt-20-photo-list').css({'width': 'auto'}).width(jQuery('#block-front-bt-20-chart').parent().width() - 20);
			// jQuery('#block-front-bt-20-chart, #block-front-bt-20-photo-list').css({'width': '640px'});
			// console.log("res " + (Number(jQuery('.one_infographic_block .block-container-margins').css('width').replace('px', '') ) )/2);

			// jQuery('#block-front-bt-20-chart, #block-front-bt-20-photo-list').css({'width': 'auto'}).width( (Number(jQuery('.one_infographic_block .block-container-margins').css('width').replace('px', '') ) - 5)/2 );
			jQuery('#block-front-bt-20-chart, #block-front-bt-20-photo-list').css({'width': 'auto'}).width( (Number(jQuery('#block-front-bt-20-chart .one_infographic_block__row__list').css('width').replace('px', '') ) ) );
			
			
		} else {
			jQuery('#block-front-bt-20-chart, #block-front-bt-20-photo-list').css({'width': 'auto'}).width(jQuery('.one_infographic_block__row').width());
		}
		
		var one_b = '#block-front-bt-20-chart .one_infographic_block__row__list';
		if (jQuery(one_b).length > 0 && 1==1) {
			var owl1 = jQuery(one_b);
			// owl1.width(owl1.parent().width());
			owl1.owlCarousel({
				items: 1,
				loop: true,
				margin: 0,
				autoplay: true,
				// autoplay: false,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				// autoplayHoverPause: false,
				nav: true,
				lazyLoad:true,
				smartSpeed: 800,
			  	navText: ["<div class='go_to_prev'><div class='icon'></div></div>","<div class='go_to_next'><div class='icon'></div></div>"]
			});
		}

		var one_b = '#block-front-bt-20-photo-list .one_infographic_block__row__list';
		if (jQuery(one_b).length > 0 && 1==1) {
			var owl2 = jQuery(one_b);
			// owl2.width(owl2.parent().width()-6);
			owl2.owlCarousel({
				items: 1,
				loop: true,
				margin: 0,
				autoplay: true,
				// autoplay: false,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				// autoplayHoverPause: false,
				nav: true,
				lazyLoad:true,
				smartSpeed: 800,
			  	navText: ["<div class='go_to_prev'><div class='icon'></div></div>","<div class='go_to_next'><div class='icon'></div></div>"]
			});
		}

		var autoplayDelay = 2000;

		if (autoplayDelay && owl2 != undefined) {
			owl2.trigger('stop.owl.autoplay');
			setTimeout(function() {
				owl2.trigger('play.owl.autoplay');
			}, autoplayDelay);
		}
	}, 1000);

}

one_block_infographic_slider();
jQuery(document).ready(function(){
	one_block_infographic_slider();
});

jQuery(window).on("load", function(){
	one_block_infographic_slider();
});

jQuery(window).on("resize", function(){
	destroy_sliders();
	one_block_infographic_slider();
});



