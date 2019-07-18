if (after768() && !device.mobile())
{
	var marquee_options = {
		//speed in milliseconds of the marquee
		// duration: 15500,
		duration: 20500,
		// duration: 5500,
		//gap in pixels between the tickers
		gap: 0,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,
		pauseOnHover: true,
		startVisible: true
	};

	function check_position_ticker() {
		if (jQuery(".ticker-wrapper").length > 0 && 1==1) {
			var partner_before_head = 0;
			if (jQuery(".partner_before_head").length > 0) {
				partner_before_head = Number(jQuery(".partner_before_head").height());
			}
			var admin_toolbar = 0;
			if (jQuery("#toolbar-item-administration-tray").length > 0) {
				admin_toolbar = Number(jQuery("#toolbar-item-administration-tray").height()) + Number(jQuery("#toolbar-bar").height());
			}
			var partner_before_head = 0;
			if (jQuery(".partner_before_head").length > 0) {
				partner_before_head = Number(jQuery(".partner_before_head").height());
			}

			// + Number(partner_before_head) 
			if ( jQuery(".ticker-wrapper").hasClass("inside_page") == false) {
				if ( (jQuery(window).scrollTop() ) + Number(admin_toolbar) + Number(jQuery(".top-panel-inside__bottom").height()) >= jQuery(".ticker-wrapper").offset().top ) {
					jQuery(".ticker").addClass("scroll");
					if (jQuery("#toolbar-administration").length > 0) {
						jQuery(".ticker").addClass("admin");
					}
				} else {
					jQuery(".ticker").removeClass("scroll").removeClass("admin");
				}
			} else {
				jQuery(".ticker").addClass("scroll");
				// if (jQuery(window).scrollTop() >= jQuery(".top-panel-inside__top").height()) {
				if (Number(jQuery(window).scrollTop()) + Number(jQuery(".top-panel-inside__top").height()) >= jQuery(".ticker-wrapper").offset().top) {
					// var menu_height = jQuery(".top-panel-inside__bottom__inside").height();
					jQuery(".ticker").removeClass("stop_scroll")
					if (jQuery("#toolbar-administration").length > 0) {
						jQuery(".ticker").addClass("admin");
					}
				} else {
					jQuery(".ticker").addClass("stop_scroll")
				}
			}
		}
	}

	jQuery(window).on("scroll", function(){
		check_position_ticker();
	});

	// jQuery(document).ready(function(){
	jQuery(window).on("load", function(){
		check_position_ticker();
		var marquee_block =  jQuery('.marquee');
		marquee_block
			.bind('beforeStarting', function(){
				jQuery('.ticker').addClass('started');
			})
			// .bind('finished', function(){
			// 	refresh_ticker();
			// })
			.marquee(marquee_options);
		function refresh_ticker() {
			jQuery.ajax({
		        type: "GET",
		        // url: "https://iz.ru/export/iz/rss/ticker/reload",
		        /*url: "/api/1/ticker/getList/json",*/
		        url: "JSON/marquee-news.json",
		        // url: "/testt.json",
		        // dataType: "xml",
	        	// success: xmlParserTicker,
	        	success: jsonParserTicker,
		        error: function(){
		            console.log("Ошибка подгрузки новостей в бегущую строку.");
		        }
		    });
		}

		function jsonParserTicker(json) {
			var items = '';
			for (key in json) {
				console.log(key);
				var link = json[key].alias;
				if ( jQuery('.marquee a[href="' + link+ '"]').length<=0 )
		    	{

		    		var title = json[key].title;
			    	var category = json[key].rubric_name;
			    	var item = '';
	    			if (category != '') {
	    				category = '<div class="ticker_item__inside__category"><div>' + category + '</div></div>';
	    			} else {
	    				category = '';
	    			}
					item = '' +
					'<a class="ticker_item" href="'+link+'">'+
						'<div class="ticker_item__inside">'+
							category +
							'<div class="ticker_item__inside__label"><div class="ticker_item__inside__label__news"><span>' + title + '</span></div></div>'+
						'</div>'+
					'</a>';
					items =  items + item;
	    		}

	    		marquee_block.marquee('destroy');
			    marquee_block.find(".four-col-news__list__row").append(items);
			    if (jQuery(".ticker_item").length >= 20) {
			    	var need_remove = jQuery(".ticker_item").length - 20;
			    	for (var i = 0; i <= need_remove; i++) {
			    		jQuery(".ticker_item").eq(i).remove()
			    	}
			    }
			    marquee_block
			    	.bind('beforeStarting', function(){
						jQuery('.ticker').addClass('started');
					})
					// .bind('finished', function(){
					// 	refresh_ticker();
					// })
					.marquee(marquee_options);
			    console.log("Бегущя строчка обновлена.");


			}

		}

		function xmlParserTicker(xml) {
			var items = '';
		    jQuery(xml).find("item").each(function () {
		    	var link = jQuery(this).find("link").text().replace(window.location.origin, '');
		    	if ( jQuery('.marquee a[href="' + link+ '"]').length<=0 )
		    	{
			    	var title = jQuery(this).find("title").text();
			    	var category = jQuery(this).find('creator').text();
			    	var item = '';
	    			if (category != '') {
	    				category = '<div class="ticker_item__inside__category"><div>' + category + '</div></div>';
	    			} else {
	    				category = '';
	    			}
					item = '' +
					'<a class="ticker_item" href="'+link+'">'+
						'<div class="ticker_item__inside">'+
							category +
							'<div class="ticker_item__inside__label"><div class="ticker_item__inside__label__news"><span>' + title + '</span></div></div>'+
						'</div>'+
					'</a>';
					items =  items + item;
				}
		    });
		    marquee_block.marquee('destroy');
		    marquee_block.find(".four-col-news__list__row").append(items);
		    if (jQuery(".ticker_item").length >= 20) {
		    	var need_remove = jQuery(".ticker_item").length - 20;
		    	for (var i = 0; i <= need_remove; i++) {
		    		jQuery(".ticker_item").eq(i).remove()
		    	}
		    }
		    marquee_block
		    	.bind('beforeStarting', function(){
					jQuery('.ticker').addClass('started');
				})
				// .bind('finished', function(){
				// 	refresh_ticker();
				// })
				.marquee(marquee_options);
		    console.log("Бегущя строчка обновлена.");
		}
	});

}
