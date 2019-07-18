(function ($) {

	jQuery('body').on('click', '.vit_item__inside__info__bottom__btn, .web_journal__top__btns__item.download', function(){
		window.open( $(this).attr('href').replace('//cdn.iz.ru', '') ,'_blank');
		return false;
	});

    
    function check_back_over() {
    	if (1==21) {
	    	if (jQuery(window).width() > 1750 && jQuery('#header').hasClass('landing') == false) {

	    		var section_meta = '';
	    		if (jQuery('meta[property="article:section"]').length > 0) {
					section_meta = jQuery('meta[property="article:section"]').attr('content').split(",");
				}
				/*
				if (section_meta.length > 0 && section_meta[0] == "Культура") {
					if (jQuery('.back_over').length == 0) {
						var back_over = '<div class="back_over"><div class="block-container">'+
						'<div class="back_over__left"><a href="http://victorymuseum.ru/?part=17&id_single=3774" target="_blnak"><img src="/profiles/portal/themes/purple/images/back_over/1.jpg"></a></div>'+
						'<div class="back_over__right"><a href="http://victorymuseum.ru/?part=17&id_single=3774" target="_blnak"><img src="/profiles/portal/themes/purple/images/back_over/2.jpg"></a></div>'+
						'</div></div>';
						jQuery('body').prepend(back_over);
					}
					jQuery('.back_over').addClass('active');
				} else {
				}
				*/
					if (jQuery('.back_over').length == 0) {
						var back_over = '<div class="back_over new_year"><div class="block-container">'+
						'<div class="back_over__left"></div>'+
						'<div class="back_over__right"></div>'+
						'</div></div>';
						jQuery('body').prepend(back_over);
					}
					var width_back_over_item = (jQuery(window).width()-jQuery('.top-panel-inside__bottom .block-container').width())/2;
					jQuery('.back_over__left, .back_over__right').width(width_back_over_item);
					// jQuery('.back_over__left a').css({'margin-left': '-' + width_back_over_item + 'px'});
					// jQuery('.back_over__right a').css({'margin-right': '-' + width_back_over_item + 'px'});

					jQuery('.back_over').addClass('active');


			} else {
				if (jQuery('.back_over').length > 0) {
					jQuery('.back_over').removeClass('active');
				}
			}
		}
	}

	jQuery('body').on('click', '.back_over a', function(){
		ga('send', 'event', 'Баннеры BackOver', 'Клик по банеру', document.URL);
	});

	
	


	(function (d, w, c) {
	    (w[c] = w[c] || []).push(function() {
	        try {
	            w.yaCounter44834683 = new Ya.Metrika({
	               id:44834683,
	                clickmap:true,
	                trackLinks:true,
	                accurateTrackBounce:true
	            });
	        } catch(e) { }
	    });

	    var n = d.getElementsByTagName("script")[0],
	        s = d.createElement("script"),
	        f = function () { n.parentNode.insertBefore(s, n); };
	    s.type = "text/javascript";
	    s.async = true;
	    s.src = "https://mc.yandex.ru/metrika/watch.js";

	    if (w.opera == "[object Opera]") {
	        d.addEventListener("DOMContentLoaded", f, false);
	    } else { f(); }
	})(document, window, "yandex_metrika_callbacks");

	valute();
	function valute() {
		var eur, usd;
		
		
		function ajax_get(url, callback) {
			try {
				xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
						if( xmlhttp.status == 404 ) {
							return;
						}
						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
								
								var Valute = JSON.parse(xmlhttp.responseText);
									var USDRUB = Valute.usd.current,
										EURRUB = Valute.eur.current,
										USDRUBprev = Valute.usd.old,
										EURRUBprev = Valute.eur.old;
										$(".dollar .top-panel-inside__top__right__courses__item__number").text(parseFloat(USDRUB).toFixed(2));
						$(".euro .top-panel-inside__top__right__courses__item__number").text(parseFloat(EURRUB).toFixed(2));
						if (parseFloat(EURRUB)>parseFloat(EURRUBprev)){
							$(".euro .top-panel-inside__top__right__courses__item__arrow").removeClass('down').addClass('up');
						}else{
							$(".euro .top-panel-inside__top__right__courses__item__arrow").removeClass('up').addClass('down');
						}
						if (parseFloat(USDRUB)>parseFloat(USDRUBprev)){
							$(".dollar .top-panel-inside__top__right__courses__item__arrow").removeClass('down').addClass('up');
						}else{
							$(".dollar .top-panel-inside__top__right__courses__item__arrow").removeClass('up').addClass('down');
						}
								try {
										var data = JSON.parse(xmlhttp.responseText);
								} catch(err) {
										return;
								}
								callback(data);
						}
				};
			
				xmlhttp.open("GET", url, true);
				xmlhttp.send();
			} catch(err){};
		}
		ajax_get('/api/course/all.json', function(data) {});
		
		
	}


	
 	
 	var scroll = 0, //переменная для хранения предыдущего значения скролла
		scrollStatusTop = true; //переменная хранения статуса прокрутки (вниз/вверх)
	function showFuter(){
		$( ".footer__block" ).removeClass("footer__block_hide"); 
	}
	function hideFuter(){
		$( ".footer__block" ).addClass("footer__block_hide"); //класс скрытого футера
	}
	function down_page_footer() {
		if($(window).scrollTop()+$(window).height()>=$(document).height()){
	  		showFuter();
		}
	}
	function footerScroll() {
		if (after768() && !device.mobile()){  
			if ($(window).scrollTop()!=scroll){
				if ($(window).scrollTop()>scroll && $(window).scrollTop()!=scroll){ //проверка на прокрутку вниз
					if (scrollStatusTop != false){ 
						hideFuter();
						scrollStatusTop = false; //вниз
					}
				}else{
					if (scrollStatusTop != true){
						scrollStatusTop = true; //наверх
						showFuter();
					}
				}
				scroll = $(window).scrollTop();
			}
		}
	}

	function check_top_panel() {
		if (after768() && !device.mobile()){  
			var admin_toolbar = 0;
			if ($("#toolbar-item-administration-tray").length > 0) {
				admin_toolbar = Number($("#toolbar-item-administration-tray").height()) * 2;
			}

			var partner_before_head = 0;
			if ($(".partner_before_head").length > 0) {
				partner_before_head = Number($(".partner_before_head").height());
			}

			if ($(window).scrollTop() >= $(".top-panel-inside__top").height() + Number(partner_before_head) + Number(admin_toolbar) ) {
				$(".top-panel-inside__bottom").addClass("scroll");
				if ($("#toolbar-administration").length > 0) {
					$(".top-panel-inside__bottom").addClass("admin");
				}
			} else {
				$(".top-panel-inside__bottom").removeClass("scroll").removeClass("admin");
			}
		}
	}

	var lastScrollTop = 0;
	function check_footer(lastScrollTop) {
		var direction = 0;
		var st = $(window).scrollTop();
		if (st > lastScrollTop){
		   direction = 'bottom';
		} else {
		  direction = 'top';
		}
		lastScrollTop = st;
	}

	function check_height_three_col_news_one_col_img__list__item() {
		if (jQuery(window).width() > 767 && !device.mobile()) {
			if ($(".three-col-news-one-col-img__list__item").length > 0) {
				var one_col_img_list_item = $(".three-col-news-one-col-img__list__item");
				var one_col_img_list_item_img = one_col_img_list_item.find("img").attr("src");
				one_col_img_list_item_img = one_col_img_list_item_img.split("//iz.cdnvideo.ru");
				if (one_col_img_list_item_img.length>=2) one_col_img_list_item_img = 'http://iz.cdnvideo.ru'+one_col_img_list_item_img[1];
				one_col_img_list_item.find(".three-col-news-one-col-img__list__item__photo").css({"background": 'url(' + one_col_img_list_item_img + ') no-repeat', "background-position": "center", "background-size": "cover", });
				one_col_img_list_item.find("img").hide();

				one_col_img_list_item.css({"height": "auto"}).height(one_col_img_list_item.parent().height());
			}
			
			
		}
	}

	jQuery(".top-panel-inside__bottom__left__menu .burger-box").on('click', function(){
		/*
		jQuery(".top-panel-inside__bottom__left__menu nav").toggle();
		jQuery(this).toggleClass("menu-on");
		*/
			var desktop_burger_menu = $(".top-panel-inside__bottom__left__menu .burger-box .burger-menu");
			var main_menu = $(".top-panel-inside__bottom__left__menu nav");
			
			if (!desktop_burger_menu.hasClass("menu-on")) {
				desktop_burger_menu.addClass("menu-on");
				main_menu.show();
			} else {
				desktop_burger_menu.removeClass("menu-on");
				main_menu.hide();
			}
		});
	

 	$('a.search').click(function() {
		search_hide();
		$('.search_block__top #edit-text').focus();
		return false;
	});

	function search_hide(){
		$(".search_block").toggleClass('active');
		if(after768()){

			$('a.search').toggle();
			$('.top-panel-inside__bottom__right__icons-list').toggleClass("active-search-box");
		}else{
			$('a.search').toggleClass("active-search");
		}
		$('.fix-black-bg').toggle();

		//$('.search_li').css('right', '100px')
	}
	$('.fix-black-bg').click(function() {
		search_hide();
	})
	$(document).click( function(event){

      if( $(event.target).closest(".search_block").length ) 
        return;
    if ($(".search_block").hasClass("active")){	
    search_hide();
      event.stopPropagation();}
    });
	/*
    $('.search_block__top input').keyup(function(){
    	if(after768()){
	    	if ($('.search_block__top input').val()!=''){
	    		$(".search_block__bottom").show();
	    	}else{
	    		$(".search_block__bottom").hide();
	    	}
	    }
    });
*/
	

	

	function check_width_fast_hrfs() {
		jQuery("#header .top-panel-inside__top__left__fast-hrefs").css({"width": "auto"});
		var width_fast_hrefs = jQuery("#header .top-panel-inside__top .block-container-margins").width()-jQuery(".top-panel-inside__top__right").width();

		jQuery("#header .top-panel-inside__top__left__fast-hrefs").width(width_fast_hrefs);
	}

	// $(window).on("load", function(){
	$(document).ready(function(){
		// на странице "новости по теме" главный блок не должен быть ссылкой
		$(".one_big_news a").on("click", function(){
			return false
		});

		// удаляем ссылку из главного блока на странице рубрики
		if ($("#block-views-block-taxonomy-term-display-block-full-author").length > 0) {
			$("#block-views-block-taxonomy-term-display-block-full-author .views-row a").each(function(){
				$(this).removeAttr("href");
			});
		}
		
		// выпадающее меню
		if (after768() && !device.mobile()) {
			$( ".top-panel-inside__bottom__left__menu nav li:nth-child(7)" ).hover(
			  function() {
			    $(".sub-rubrics").addClass("opened");
			    $(".top-panel-inside__bottom__left__menu nav li:nth-child(7)").addClass("opened");
			  }, function() {
			    $(".sub-rubrics").removeClass("opened");
			    $(".top-panel-inside__bottom__left__menu nav li:nth-child(7)").removeClass("opened");
			  }
			);

			$( ".sub-rubrics" ).hover(
			  function() {
			    $(".sub-rubrics").addClass("opened");
			    $(".top-panel-inside__bottom__left__menu nav li:nth-child(7)").addClass("opened");
			  }, function() {
			    $(".sub-rubrics").removeClass("opened");
			    $(".top-panel-inside__bottom__left__menu nav li:nth-child(7)").removeClass("opened");
			  }
			);
		}
		
		if (after768() && !device.mobile() && !device.tablet()){
			$('ul.person li').mouseover(function () {
			var persone = $(this).data('lipersone');
			$('.person-image-wrapper-active .persone-img-active').each(function(i,elem) { //обход всех секций
					$(this).removeClass("active-img"); //снять активность со всех пунктов
					$('.info-person-wrapper').addClass("hide-box");
				if	($('.person-image-wrapper').hasClass("disable-box")){}else{$('.person-image-wrapper').addClass("disable-box")}
				if ($(this).data('imgpersone') == persone) {
					$(this).addClass("active-img"); //наначить активность
					
					
						//$(this).removeClass("dissable-person"); //наначить активность
					}
					$('.'+persone+'-text').removeClass("hide-box");
				});
			})
		}else{
			$('.person-box').hide();
			$('.info-person').hide();
		}
		/*$('.person-wrapper').mouseleave(
		function (){
			$('.person-image-wrapper').removeClass("disable-box");
			$('.person-image-wrapper-active .persone-img-active').removeClass("active-img");
			$('.info-person-wrapper').addClass("hide-box");
		})*/

		// вставляем меню в отдельный див так чтобы он был под панелью чтобы сделать анимациюпоявления
		$(".sub-rubrics ul").html( $(".top-panel-inside__bottom__left__menu nav li:nth-child(7) ul").html() );
		if (after768() && !device.mobile()) {
			$(".top-panel-inside__bottom__left__menu nav li:nth-child(7)").click(function(){
				if (!$(this).hasClass("opened")) {
					$(".top-panel-inside__bottom__left__menu nav li:nth-child(7)").addClass("opened");
					$(".sub-rubrics").addClass("opened");
				} else {
					$(".top-panel-inside__bottom__left__menu nav li:nth-child(7)").removeClass("opened");
					$(".sub-rubrics").removeClass("opened");
				}
				return false;
			});
		
			
		}
				if ($(document).height()==$(window).height()){
			$('.footer__block').removeClass('footer__block_hide');
		}else{
			hideFuter();
		}
		
		check_height_three_col_news_one_col_img__list__item();
		// верхняя панель которая всегда сверху при прокрутке
		check_top_panel();
		check_footer();

		$(".top-panel-inside__bottom__left__menu .categories").click(function(){
			if ($(this).parent().hasClass("open")) {
				$(this).parent().removeClass("open");
			} else {
				$(this).parent().addClass("open");
			}
			return false;
		});

		$('body').click(function(e){
		    if (!$(e.target).closest('.top-panel-inside__bottom__left__menu').length){
		        $(".top-panel-inside__bottom__left__menu li").removeClass("open");
		    }

		    if (!$(e.target).closest('.footer').length){
		        $(".footer").removeClass("opened");
		        if ($(".live-news__wrapper").hasClass("need-open")) {
					$(".live-news__wrapper").removeClass("hide-block").removeClass("need-open");
				}
		    }

		});

		$(".footer__top__inside__left__menu_label").click(function(){
			if ($(".footer").hasClass("opened") === false) {
				$(".footer").addClass("opened");
				if (!$(".live-news__wrapper").hasClass("hide-block")) {
					$(".live-news__wrapper").addClass("hide-block").addClass("need-open");
				}
			} else {
				$(".footer").removeClass("opened");
				
				if ($(".live-news__wrapper").hasClass("need-open")) {
					$(".live-news__wrapper").removeClass("hide-block").removeClass("need-open");
				}
			}
		});

		if (jQuery(window).width() > 767) {
			// {# для отслеживания доступности баннера width 100% height: 250px #}
			jQuery('body').append('<div><img src="https://ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=637596&bt=21&pid=2616747&bid=5210249&bn=5210249&rnd=1187033731" style="border:0;position:absolute;left:-9999px;" alt="" /></div>');
			// {# для отслеживания доступности баннера width 240px height: 400px #}
			jQuery('body').append('<div><img src="https://ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=637596&bt=21&pid=2616748&bid=5210419&bn=5210419&rnd=955516104" style="border:0;position:absolute;left:-9999px;" alt="" /></div>');
		} else {
			// {# для отслеживания доступности баннера width 300px height: 250px #}
			jQuery('body').append('<div><img src="https://ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=637596&bt=21&pid=2616749&bid=5210429&bn=5210429&rnd=1606524824" style="border:0;position:absolute;left:-9999px;" alt="" /></div>');
		}

	});

	function button_position_got_to_top() {
		var button_to_top_area = jQuery(".button_to_top_area");
		if ( jQuery(window).scrollTop() > jQuery(window).height()/2 ) {
			button_to_top_area.addClass("show");
		} else {
			button_to_top_area.removeClass("show");
		}
	}

	if (jQuery('input[name="type_material"]').length == 0) {
		jQuery('.button_to_top_area').click(function(){
			jQuery('html, body').animate( { scrollTop: 0 }, 100 );
		});
	} else {
		jQuery('.button_to_top_area').click(function(){
			var prev_element = jQuery('.page-content.inside_page.active').prev();
			if (prev_element.hasClass('inside_page') == false) {
				jQuery('html, body').animate( { scrollTop: 0 }, 100 );
			} else {
				// console.log('here');
				// console.log(prev_element);
				
				var admin_toolbar = 0;
		        if (jQuery("#toolbar-item-administration-tray").length > 0) {
		          admin_toolbar = Number(jQuery("#toolbar-item-administration-tray").height()) + Number(jQuery("#toolbar-bar").height());
		        }
				var total_top_margin = Number(jQuery(".top-panel-inside__bottom").height()) + Number(jQuery(".ticker").height()) + Number(admin_toolbar) ;
				var destination = Number(prev_element.offset().top) - Number(total_top_margin) + 5;
				
				// console.log(destination);
				// console.log(total_top_margin);
				if (destination < jQuery(window).height()/2) {
					destination = 0;
				}
				jQuery('html, body').animate( { scrollTop: destination }, 500 );
			}
		});
		
	}

	jQuery(document).ready(function () {
		check_width_fast_hrfs();
		button_position_got_to_top();
	});
	
	$(window).on("load", function(){
		check_back_over();
		check_width_fast_hrfs();
		setTimeout(function() {
			check_top_panel();
		}, 1000);
	});

	$(window).on("resize", function(){
		check_back_over();
		check_width_fast_hrfs();
		check_height_three_col_news_one_col_img__list__item();
	});

	$(window).on("scroll", function(){
		if (after768() && !device.mobile()){  
			check_top_panel();
			check_footer();
			footerScroll();
			down_page_footer();
		}
		button_position_got_to_top();
	});

/* Блок стори, скрыть или показать содержимое полностью */
	$('.show-full-field_text_info').click(function () {
		$(".full-field_text_info").show();
		$('.show-full-field_text_info').toggle();
		$('.hide-full-field_text_info').toggle();
	});

	$('.hide-full-field_text_info').click(function () {
		$(".full-field_text_info").hide();
		$('.show-full-field_text_info').toggle();
		$('.hide-full-field_text_info').toggle();
	});


	// Логирование JS ошибок в метрику
	window.onerror=function a(b,c,d,e,f){if(window.JSON&&!(a.count>5)){for(var g=44834683,h={},i=h,j=f&&f.stack,k=["JS "+(!c||/iz\.ru|cdnvideo\.ru/.test(c)?"in":"ex")+"ternal errors","message: "+b,j?"stack: "+j:c?"filename: "+c+":"+d+":"+e:"nofilename","href: "+location.href],l=0;l<k.length-1;l++){var m=k[l];i[m]={},i=i[m]}i[k[l]]=1;var n="https://mc.yandex.ru/watch/"+g+"/?site-info="+encodeURIComponent(JSON.stringify(h))+"&rn="+Math.random();"function"==typeof navigator.sendBeacon?navigator.sendBeacon(n," "):(new Image).src=n,a.count?a.count++:a.count=1}};

	window.fbAsyncInit = function() {
		FB.init({
			appId      : '1922653761338871',
			xfbml      : true,
			version    : 'v2.9'
		});
	FB.AppEvents.logPageView();
	};

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

	
  
	// Lazyload activate
	(function() {
		
		try {
			$('img.owl-lazy:not([data-src=""],.owl-lazyonload),img:not([data-src=""],.owl-lazyonload)')
				.filter(function(){
					return $(this).parents('.owl-carousel').length <= 0;
				}).lazyload({
					data_attribute: 'src',
					load : function()
					{
						setTimeout(function() {
							$(window).trigger('scroll');
							$(document).trigger('scroll');
						}, 400);
						$(this).addClass('owl-lazyonload');
					}
				});

		} catch(err){};
	
		$(document).ajaxComplete(function() {
			
			try {
				$('img.owl-lazy:not([data-src=""],.owl-lazyonload),img:not([data-src=""],.owl-lazyonload)')
					.filter(function(){
						var bool = $(this).parents('.owl-carousel').length <= 0 || $(this).parents('.owl-carousel').length > 0 && $(this).parents('.two_big_photos__inside').length > 0;
						return bool;
					}).lazyload({
						data_attribute: 'src',
						load : function()
						{
							$(this).addClass('owl-lazyonload');
						}
					});
			} catch(err){};
		});
		
	}());
	
	$(window).on('load', function() {
		try {
			$('img.owl-lazy:not([data-src=""],.owl-lazyonload),img:not([data-src=""],.owl-lazyonload)')
				.filter(function(){
					return $(this).parents('.owl-carousel').length <= 0 || $(this).parents('.owl-carousel').length > 0 && $(this).parents('.two_big_photos__inside').length > 0;
				}).lazyload({
					data_attribute: 'src',
					load : function()
					{
						$(this).addClass('owl-lazyonload');
					}
				});
		} catch(err){};
	});
	
})(jQuery);



