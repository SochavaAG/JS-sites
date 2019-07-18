(function ($) {

	if (!after768()) {
		$(document).ready(function() {
			if (!after768()){
				$('.mobile-menu-footer .top-new').html($(".top-panel-inside__top__left__fast-hrefs").html()); 
				$('.wrapper_01 a img').css("width", '100%');
				$('.wrapper_01 div').css("width", '100%');
			}
		})
		var fancLiveNews = function(){
			if (!after768()){
				var LiveNews = $(".live-news__wrapper").html();
				$(".live-news__wrapper").remove();
				$(".page-content").before('<div class="live-news__wrapper">'+LiveNews+'</div>');
			}
		};
		var showNavTV = function(){

		};
		fancLiveNews();
		$('.live-news__close').click(function(){
			if ( !$(".live-news__wrapper").hasClass("scroll") ) {
				$(".live-news__wrapper").toggle();
				$(".toggle-LiveNews").toggle();
			} else {
				$(".live-news__wrapper").addClass("hide-block");
			}
		});
		$('.toggle-LiveNews').click(function(){
			$(".live-news__wrapper").toggle();
			$(".toggle-LiveNews").toggle();
		});
		
		jQuery(".burger-menu").click(function () {
			jQuery('.top-panel-inside__bottom__right__logos').removeClass("logo-show");
			jQuery('.top-panel-inside__bottom__left__logo').removeClass("arrow-up");
			
		   	jQuery('.burger-menu').toggleClass("menu-on"); //изменение вида бургера
		   	//jQuery('.top-panel-inside__bottom__right__logos').removeClass("logo-show");
		   	//jQuery('.top-panel-inside__bottom__left__logo').removeClass("arrow-up");
		   	 
		   	jQuery(".top-panel-inside__bottom").toggleClass("dropdown-menu"); //Добавление класса к меню мобильной версии
		   	if (jQuery(".burger-menu").hasClass("menu-on")){
		   		jQuery('.dropdown-menu').css("height", jQuery(window).height())
		   	}else{
		   		jQuery('.top-panel-inside__bottom').css("height", '50px')
		   	}
		});
	/*
		jQuery(function(){
	    jQuery(window).resize(function() {
	    	jQuery('.dropdown-menu').css("height", jQuery(window).height());
		    })
		})
	*/	
		$(".top-panel-inside__bottom__left__logo").click(function(){
			if (!after768()){
				if (jQuery(".top-panel-inside__bottom").hasClass("dropdown-menu")){	
			    
				}else{
					jQuery('.top-panel-inside__bottom__right__logos').toggleClass("logo-show");
			   		jQuery('.top-panel-inside__bottom__left__logo').toggleClass("arrow-up");
				}
				
		    	return false;
			}
		});



				
		$(".live-news__wrapper__show__live").click(function() {
			$(".live-news__wrapper").removeClass("hide-block");
		});



		
	
    }
})(jQuery);
