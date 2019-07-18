// jQuery(window).on("load", function(){
if (1==1) {
    jQuery(document).ready(function() {
				if (jQuery(".pmef_2018_page .short-last-news__inside__list__items").length) {
					jQuery(".pmef_2018_page .short-last-news__inside__list__items ul li")
						.css({
							'margin-bottom': '10px'
						});
				}
        if ( jQuery(window).width()>768) {

            var anonse__list_count = jQuery(".main-events-table__inside__left .three-col-news-with-anonse__list").length
            if (anonse__list_count > 0 && 1==2)
            {
                
                setTimeout(function(){
                    var left_side_height = jQuery(".main-events-table__inside__left__content").outerHeight();
                    var live_news__wrapper_height = jQuery(".live-news__wrapper").outerHeight();
                    var short_last_news_margin_top = jQuery(".short-last-news").css("margin-top").replace("px", "");
                    var short_last_news_title = Number(jQuery(".short-last-news__inside__title").outerHeight());
                    var total_height_short_news = left_side_height - live_news__wrapper_height - short_last_news_margin_top - short_last_news_title - 2;
                    
                    jQuery(".short-last-news__inside__list__wrapper").css({"height": total_height_short_news + "px"});
                    jQuery(".short-last-news__inside__list__items").css({"height": total_height_short_news + "px"});
                    var list_items = jQuery(".short-last-news__inside__list__items").jScrollPane({
                        autoReinitialise: true
                    });
                }, 300);
            } else {
                // if (jQuery(window).widht() >= 1000) {

                    
                    // if (jQuery('.page-content.inside_page').hasClass('pmef_2018_page') == true) {
                        var left_side_height = jQuery(".main-events-table__inside__left").outerHeight();
                        var live_news__wrapper_height = jQuery(".live-news__wrapper").outerHeight();
												
                        var short_last_news_margin_top = jQuery(".short-last-news").length? jQuery(".short-last-news").css("margin-top").replace("px", "") : 0;
												
                        var short_last_news_title = Number(jQuery(".short-last-news__inside__title").outerHeight());
                        var total_height_short_news = left_side_height - live_news__wrapper_height - short_last_news_margin_top - short_last_news_title - 2;
                        jQuery(".short-last-news__inside__list").css({"height": total_height_short_news + "px"});
                    // }

                    jQuery(".short-last-news__inside__list__wrapper").height(jQuery(".short-last-news__inside__list__wrapper").parent().height());

                    jQuery(".short-last-news__inside__list__items").height(jQuery(".short-last-news__inside__list__wrapper").parent().height()*3);

                    jQuery(".short-last-news__inside__list__wrapper").mouseover(function() {
                        var main = jQuery(window).height()-jQuery(".top-panel-inside__bottom").height()-jQuery(".footer__top").height()
                        var scroll_data = jQuery(".short-last-news").offset().top-jQuery(window).scrollTop();
                        
                        if (scroll_data > 0) {
                            main_height = Number(main - scroll_data) + Number(jQuery(".top-panel-inside__top").height()) - 24;
                            jQuery(".short-last-news__inside__list__items").height(main_height);
                        } else {
                            var plus_height = jQuery(window).scrollTop()-jQuery(".short-last-news").offset().top-jQuery(".short-last-news").height()
                            
                            main_height = Number(main)+Number(plus_height);
                            jQuery(".short-last-news__inside__list__items").height(main_height);
                        }
                        jQuery(".short-last-news__inside__list__wrapper").height(main_height);
                        
                    });
                    jQuery(".short-last-news__inside__list__wrapper").mouseleave(function() {
                        jQuery(".short-last-news__inside__list__wrapper").height(jQuery(".short-last-news__inside__list__wrapper").parent().height());
                        jQuery(".short-last-news__inside__list__items").height(jQuery(".short-last-news__inside__list__wrapper").parent().height()*3);
                    });

                    setTimeout(function(){
                        jQuery(".short-last-news__inside__list__items")
													.jScrollPane({
															autoReinitialise: true
													});
                    }, 300);
                // }
            }

            jQuery(window).on("load", function(){
                
                jQuery('.short-last-news').bind('mousewheel DOMMouseScroll', function(e) {
                    var scrollTo = null;
                    if (e.type == 'mousewheel') {
                        scrollTo = (e.originalEvent.wheelDelta * -1);
                    }
                    else if (e.type == 'DOMMouseScroll') {
                        scrollTo = 40 * e.originalEvent.detail;
                    }
                    if (scrollTo) {
                        e.preventDefault();
                        jQuery(this).scrollTop(scrollTo + jQuery(this).scrollTop());
                    }
                });
            });

            if (1==2) {
                
                // setInterval(function(){
                    jQuery.ajax({
                        type: "GET",
                        url: "/export/iz/rss/news/last",
                        // url: "/get_last_news.xml",
                        dataType: "xml",
                        success: xmlParserLastNews,
                        error: function(){
                            // console.log("Ошибка загрузки новостей в блок Последние новости.");
                        }
                    });
                // }, 7000);
            }


        } else {
						if (jQuery(".pmef_2018_page .short-last-news__inside__list__items").length) {
							// Прогружаем картинки, не вошедшие в lazyload
							var $owlImages = jQuery('#block-purple-content').find('img[data-src!=""]').slice(0, 4);
							$owlImages.each(function(index) {
								var $this = jQuery(this),
										attrSRC = $this.attr('src');
									if( attrSRC && attrSRC.match(/data:/) ) {
										console.log('---owlImages - attrSRC---');
										$this.attr('src', $this.data('src'));
									}
							});
						}
            // var short_news_height = 0;
            // short_news_height = Number(short_news_height) + Number(jQuery(".short-last-news__inside__list__items ul").css("padding-top").replace("px", ""));
            // var number_item = 0;
            // jQuery(".short-last-news__inside__list__items ul li").each(function(){
            //  if (number_item <=14) {
            //      short_news_height = Number(short_news_height) + Number(jQuery(this).height());
            //      short_news_height = Number(short_news_height) + Number(jQuery(this).css("padding-bottom").replace("px", ""));
            //      short_news_height = Number(short_news_height) + Number(jQuery(this).css("margin-bottom").replace("px", ""));
            //      ++number_item;
            //  }
            // });
            // jQuery(".short-last-news__inside__list__wrapper").height(short_news_height - 6);
        }

        function xmlParserLastNews(xml) {
            var items = '';
            jQuery(xml).find("item").each(function () {
                
                    var title = jQuery(this).find("title").text();
                    var link = jQuery(this).find("link").text().replace(window.location.origin, '');
                    var time = jQuery(this).find("pubDate").text().split(" ");
                    hours = time[4].split(":");
                    var item = '';
                    if ( jQuery('.short-last-news__inside__list__items li .short-last-news__inside__list__item[href="' + link+ '"]').length<=0 ) {
                        item = '' +
                        '<li class="news__inside__list__li new">'+
                            '<a href="'+link+'" class="short-last-news__inside__list__item ">'+
                                '<div class="short-last-news__inside__list__item__label">'+
                                    title+
                                '</div>'+
                                '<div class="short-last-news__inside__list__item__time">'+
                                    '<time datetime="">' + hours[0] + ':' + hours[1] + '</time>'+
                                '</div>'+
                            '</a>'+
                        '</li>';
                    setTimeout(function(){
                        jQuery(".short-last-news__inside__list__items ul").prepend(item);
                        var current_item = jQuery('.short-last-news__inside__list__items ul .short-last-news__inside__list__item[href="' + link+ '"]');
                        current_item_height = Number(current_item.height()) + Number(current_item.css("margin-bottom").replace("px", "")) + Number(current_item.css("padding-bottom").replace("px", ""));
                        current_item.parent().height(current_item_height);
                        setTimeout(function(){
                            current_item.parent().removeClass("new").css({"height": "auto"});
                        }, 1000);

                    }, 2000);
                    }
            });

        }

    });
}
