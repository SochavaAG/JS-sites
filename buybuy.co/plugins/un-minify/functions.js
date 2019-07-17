(function ($) {
    "use strict";
    //Search Ajax Custom
    $( document ).ready( function($) {


    
      $( ".customlinks-lang" ).click(function() {
        if($(".subliul").css("display")=="none"){
               $(".subliul").show("slow");
        }
        else{
             $(".subliul").hide("slow"); 
        }
     
      });


    
        var currentRequest = null;
        
        $("#arp_search_input").on('input',function(e){
            
            e.stopPropagation();

            var input_val = $(this).val();
            
            if( input_val.length >= $(this).data('min-chars') )
            {
                currentRequest = $.ajax({
                    url : franco_params.ajax_url,
                    type : 'post',
                    data : {
                    action : 'franco_ajax_search',
                    keyword : input_val
                    },
                    beforeSend : function()    {
                        if(currentRequest != null) {
                            currentRequest.abort();
                        }
                        
                        $('#arp_search_input').css({'background-image': 'url('+franco_ajax_search_loader+')', 'background-repeat': 'no-repeat', 'background-position': 'right center', 'background-size': '20px 20px'});
                        
                        $('.ajax_search_results').hide();
                    },
                    success : function( response ) 
                    {
                        var obj = $.parseJSON( response );
                        
                        var html = '';

                        $.each(obj.search_results, function (i,result) {
                                            
                            //console.log( result.value );
                            
                            var pro_val = result.value.replace(new RegExp(input_val, 'gi'), '<strong>'+input_val+'<\/strong>');
                            
                            html += '<div class="ajax_search_result" data-pname="' + result.value + '" data-index="' + i + '"><a id="pro-'+ result.id +'" href="'+ result.url +'">' + pro_val + '</a></div>';
                        });
                        
                        $('#arp_search_input').css({'background-image': '', 'background-repeat': 'no-repeat', 'background-position': 'right center'});

                        $('.ajax_search_results').html(html).show();
                    }
                    
                });
                
            }
            else
            {
                
                $('.ajax_search_results').hide();
                
            }
            
        });
        
    });
    $(document).ready(function($){
       
        $('#arp_search_input').on('keydown',function(e)
        {
            
            var $listItems = $('.ajax_search_result');

            //console.log($listItems);
        
            var key = e.keyCode,
            
                $selected = $listItems.filter('.result_selected'),
                
                $current;

            if ( key != 40 && key != 38 ) return;

            $listItems.removeClass('result_selected');

            if ( key == 40 ) // Down key
            {
                if ( ! $selected.length || $selected.is(':last-child') ) {
                    
                    $current = $listItems.eq(0);
                    
                }
                else {
                    
                    $current = $selected.next();
                    
                }
                
            }
            else if ( key == 38 ) // Up key
            {
                
                if ( ! $selected.length || $selected.is(':first-child') ) {
                    
                    $current = $listItems.last();
                    
                }
                else {
                    
                    $current = $selected.prev();
                    
                }
                
            }
            
            var replace_code = $current.data('pname').replace(/→/g, "&rarr;");
            
            //console.log(sdvfsvd);
            //console.log(data_array);
            
            $('#arp_search_input').val(replace_code);
            
            $current.addClass('result_selected');
            
        });
        
        $('body').bind('click',function(e){
     
            $('.ajax_search_results').hide();

        });
         
        $("#arp_search_input").bind('click',function(e){
            
            e.stopPropagation();
            
            $('.ajax_search_results').show();
         
        });

    });
    //End Search Ajax
    $(document).ready(function ($) {
        $(".fancybox").on("click", function () {
            $.fancybox({
                href: this.href,
                type: $(this).data("type")
            }); // fancybox
            return false;
        }); // on
        $('img').hover(function(e){
            $(this).data("title", $(this).attr("title")).removeAttr("title");
        });    
        $("a.cart_label").click(function(event){
            event.preventDefault();
        }); 

        //blog
        $('#owl-blog').owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            lazyLoad: true,
            loop: true,
            navText :[''],
        });
        //coming-soon
        $('#getting-started').countdown(franco_params.under_end_date).on('update.countdown', function(event) {
           var $this = $(this).html(event.strftime(''
             + '<div class="coming-timer"><span>%D</span>days</div> '
             + '<div class="coming-timer"><span>%H</span>hours</div>'
             + '<div class="coming-timer"><span>%M</span>minutes</div>'
             + ''));
        });
        //validate form
        $('#commentform').validate();
        //fullpage
        var fullpage_tooltips = [];
        $('#fullpage .section .number-slide h2').each(function() {
            fullpage_tooltips.push($(this).text());
        });
        $('#fullpage').fullpage({
            'scrollingSpeed': 800,
            'verticalCentered': true,
            'css3': true,
            'navigation': true,
            'navigationPosition': 'left',
            'navigationTooltips': fullpage_tooltips,
            
            'afterLoad': function(anchorLink, index){
                if(index == 2){
                    $('#animation_1, #animation_2, #animation_3', '#animation_4', '#animation_5').addClass('active');
                }
            },
        });
        //animation
        $('.animated').appear(function() {
            var item = $(this);
            var animation = item.data('animation');
            if ( !item.hasClass('visible') ) {
                var animationDelay = item.data('animation-delay');
                if ( animationDelay ) {
                    setTimeout(function(){
                        item.addClass( animation + " visible" );
                    }, animationDelay);
                } else {
                    item.addClass( animation + " visible" );
                }
            }
        });
        //One page
          $('.scroll-down a[href*=#]:not([href=#]),a[href*=#]:not([href=#]).scroll-to-bottom ').click(function(){
           $('.scroll-down a[href*=#]:not([href=#]),a[href*=#]:not([href=#]).scroll-to-bottom').removeClass('active');
           $(this).addClass('active');
           if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) 
           {
             
             var target = $(this.hash),           
             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               
             if (target.length) 
             {
            $('html,body').animate({
              scrollTop: target.offset().top - 90
            }, 500);
            return false;
             }
           }
          });
    });
        // Media product details
    if(!!$.prototype.elevateZoom) {
        $("img.zoom").elevateZoom({ zoomType: "inner", cursor: "crosshair", gallery:'thumbs_list_frame', imageCrossfade: true });
    }
		//Add class category
		$('.widget_categories ul').each(function(){
			if($(this).hasClass('children')) {
				$(this).parent().addClass('cat-item-parent');
			} 
		});
    $('.owl-carousel').each(function(){ 
    
        /* Max items counting */
        var max_items = $(this).attr('data-max-items');
        var tablet_items = max_items;
        if(max_items > 1){
            tablet_items = max_items - 1;
        }
        var mobile_items = 1;

        var autoplay_carousel = $(this).attr('data-autoplay');
        
        /* Install Owl Carousel */
        $(this).owlCarousel({
            
            items : max_items,
            navSpeed : 800,
            nav : true,
            loop  : false,
            autoplay : autoplay_carousel,
            autoplaySpeed : 800,
            navText : false,
            responsive : {
                0:{
                    items:mobile_items
                },
                481:{
                    items:tablet_items
                },
                1200:{
                    items:max_items
                }
            }                    
        }); 
    });
   
    $('.zoom-container').easyZoom();
    $('.owl-prd-thumbnail').each(function(){ 
    
        /* Max items counting */
        var max_items = $(this).attr('data-max-items');
        var tablet_items = max_items;
        if(max_items > 1){
            tablet_items = max_items - 1;
        }
        var mobile_items = 1;

        var autoplay_carousel = $(this).attr('data-autoplay');
        
        /* Install Owl Carousel */
        $(this).owlCarousel({
            
            items : max_items,
            navSpeed : 800,
            nav : true,
            loop  : false,
            autoplay : autoplay_carousel,
            autoplaySpeed : 800,
            navText : true,
            responsive : {
                0:{
                    items:mobile_items
                },
                481:{
                    items:tablet_items
                },
                1200:{
                    items:max_items
                }
            }                    
        }); 
    });
    
    var w = $(window).width();
    var h = $(window).height();
    $('header:not(.header-v2) .woocommerce-search').css('height', h + 'px'); 
    $('header:not(.header-v2) .woocommerce-search').css('width', w + 'px');
    
    $('.adapt-height .vc_column-inner').css('height', h + 'px'); 
    /* remove old "view cart" text*/

    $('body').on('added_to_cart', function () {
        $("a.added_to_cart").remove();
    });
    // Vertical Menu
    var clickOutSite = true;
    $('.open-vertical').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.vertical-menu').show().animate({
                'margin-left' : 0
            }, 400);
        } else {
            $(this).removeClass('active');
            $('.vertical-menu').animate({
                'margin-left' : '-270px'
            }, 400, function () {
                $('.vertical-menu').hide()
            });
        }
        clickOutSite = false;
        setTimeout(function () {
            clickOutSite = true;
        }, 100);
    });
    $('.vertical-menu').click(function () {
        clickOutSite = false;
        setTimeout(function () {
            clickOutSite = true;
        }, 100);
    });
    $(document).click(function () {
        if (clickOutSite && $('.open-vertical').hasClass('active')) {
            $('.open-vertical').trigger('click');
        }
    });
	//Testimonial Style4
    var Testimonial = {
        _initialized: false,
        init: function () {
            if (this._initialized)
                return false;
            this._initialized = true;
            this.testimonialGallery();
        },
        testimonialGallery: function () {
            if (!$('.testimonial-style4'))
                return;
            $('.testimonial-style4').each(function () {
                var viewport = $(this).find('.testimonial-viewport').first();
                var thumbnails = $(this).find('.profile-thumbnail').first();
                var thumbs_display = thumbnails.attr('data-thumbs') ? thumbnails.attr('data-thumbs') : 6;
                var flag = false;
                if (!viewport.length || !thumbnails.length)
                    return;

                viewport.owlCarousel({
                    items: 1,
                    nav: false,
                    dotClass: 'owl-page',
                    dotsClass: 'owl-pagination',
                    mouseDrag: true,
                    autoHeight: true
                }).on('changed.owl.carousel', function (e) {
                    if (!flag) {
                        flag = true;
                        thumbnails.trigger('to.owl.carousel', [e.item.index, 200, true]);
                        flag = false;
                    }
                });

                thumbnails.owlCarousel({
                    nav: false,
                    dots: false,
                    mouseDrag: false,
                    items: thumbs_display,
                    navContainerClass: 'owl-buttons',
                    center: false,
                    navRewind: false,
                    responsive: {
                        0: {items: 1},
                        479: {items: 1},
                        768: {items: 1},
                        979: {items: 1},
                        1199: {items: thumbs_display}
                    },
                    afterInit: function (el) {
                        el.find('.owl-item').eq(0).addClass('active');
                    }
                });

                thumbnails.on('click', '.owl-item', function (e) {
                    viewport.trigger('to.owl.carousel', [$(this).index(), 500]);
                });

            });
        },
    };
    //Sub-menu
    $(function(){
        $(".dropdown-menu > li > .caret").on("click",function(e){
              $(this).toggleClass('active');
              var current=$(this).next();
              var grandparent=$(this).parent().parent();
              if($(this).hasClass('caret'))
              grandparent.find(".mega-menu li ul li ul:visible").not(current).hide();
              current.toggle();
              e.stopPropagation();
        });
    });
    
    //Scroll to top
    $(window).load(function () {
        var wd = $(window).width();
        if ($('.scroll-to-top').length) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 1) {
                    $('.scroll-to-top').css({bottom: "25px"});
                    if(franco_params.header_sticky_mobile != 1){
                        if(wd > 991){
                            if(franco_params.header_sticky == 1) {
                                $('.site-header').addClass("is-sticky");
                            }
                        } 
                    }else{
                        if(franco_params.header_sticky == 1) {
                            $('.site-header').addClass("is-sticky");
                        }
                    }
                } else {
                    $('.scroll-to-top').css({bottom: "-100px"});
                    $('.site-header').removeClass("is-sticky");
                }
				
                if ($(this).scrollTop() > 500) {
                    $('.slide-section').addClass("active");
                }
                else {
                    $('.slide-section').removeClass("active");
                }
				
				if ($(this).scrollTop() > 130) {
                    $('.menu-menu-features-container').addClass("menu-sticky");
                }
                else {
					$('.menu-menu-features-container').removeClass("menu-sticky");
                }
            });

            $('.scroll-to-top').click(function () {
                $('html, body').animate({scrollTop: '0px'}, 800);
                return false;
            });
            // $('.scroll-to-bottom').click(function () {
            //      $("html, body").animate({ scrollTop: $(document).height() }, 800);
            //     return false;
            // });
        }
        $(document).ready(function ($) {
		//Up to top
		$('.to-top').click(function () {
			$('html, body').animate({scrollTop: '0px'}, 800);
			return false;
		});
		
        var wd = $(window).width();
        if(wd<768){
            $('.bxslider').owlCarousel({
                items: 6,
                margin: 20,
                responsive : {
                    0:{
                        items:3
                    },
                    481:{
                        items:6
                    },
                }  
            });
        }else{
            var hei = $('.main-images img').height();
            $('.views-block').css('height', hei + 'px');
            $('.bxslider').bxSlider({
                  mode: 'vertical',
                  slideMargin: 20,
                  pager : false,
                  nextSelector : '.next-btn',
                  prevSelector : '.prev-btn',
                  prevText : '<i class="pe-7s-angle-up"></i><i class="pe-7s-angle-up"></i>',
                  nextText: '<i class="pe-7s-angle-down"></i><i class="pe-7s-angle-down"></i>',
                  maxSlides: 5,
                  adaptiveHeight: true,
                  minSlides: 5,
                  infiniteLoop: false
            });
        }
            $(".bx-viewport #thumbs_list_frame a").click(function(event){
                event.preventDefault();
            });
        });
        var $grid = $('.isotope');
            // layout Isotope after each image loads
        $grid.imagesLoaded().progress( function() {
          $grid.isotope('layout');
        });
        
        var $grid1 = $('.product-isotope');
            // layout Isotope after each image loads
        $grid1.imagesLoaded().progress( function() {
          $grid1.isotope('layout');
        });
        var $grid2 = $('.fit-rows');
            // layout Isotope after each image loads
        $grid2.imagesLoaded().progress( function() {
          $grid2.isotope('layout');
        });        
        
        
    });
    
    //like count gallery
    $('body').on('click', '.franco-post-like', function (event) {
        event.preventDefault();
        var heart = $(this);
        var post_id = heart.data("post_id");
        var like_type = heart.data('like_type') ? heart.data('like_type') : 'post';
        heart.html("<i id='icon-like' class='fa fa-heart-o'></i> <i id='icon-spinner' class='fa fa-spinner fa-spin'></i>");
        $.ajax({
            type: "post",
            url: ajax_var.url,
            data: "action=franco-post-like&nonce=" + ajax_var.nonce + "&franco_post_like=&post_id=" + post_id + "&like_type=" + like_type,
            success: function (count) {
                if (count.indexOf("already") !== -1)
                {
                    var lecount = count.replace("already", "");
                    if (lecount === "0")
                    {
                        lecount = "Like";
                    }
                    heart.prop('title', 'Like');
                    heart.removeClass("liked");
                    heart.html("<i id='icon-unlike' class='fa fa-heart-o'></i>" + lecount);
                }
                else
                {
                    heart.prop('title', 'Unlike');
                    heart.addClass("liked");
                    heart.html("<i id='icon-like' class='fa fa-heart-o'></i>" + count);
                }
            }
        });
    });
	//category sidebar  
    $("<p></p>").insertAfter(".widget_product_categories ul.product-categories > li > a");
    var $p = $(".widget_product_categories ul.product-categories > li p");
    $(".widget_product_categories ul.product-categories > li:not(.current-cat):not(.current-cat-parent) p").append('<span><i class="fa fa-plus" aria-hidden="true"></i></span>');
    $(".widget_product_categories ul.product-categories > li.current-cat p").append('<span><i class="fa fa-minus" aria-hidden="true"></i></span>');
    $(".widget_product_categories ul.product-categories > li.current-cat-parent p").append('<span><i class="fa fa-minus" aria-hidden="true"></i></span>');
    $(".widget_product_categories ul.product-categories > li:not(.current-cat):not(.current-cat-parent) > ul").hide();

    $(".widget_product_categories ul.product-categories > li").each(function () {
        if ($(this).find("ul > li").length == 0) {
            $(this).find('p').remove();
        }

    });

    $p.click(function () {
        var $accordion = $(this).nextAll('ul');

        if ($accordion.is(':hidden') === true) {

            $(".widget_product_categories ul.product-categories > li > ul").slideUp();
            $accordion.slideDown();

            $p.find('span').remove();
            $p.append('<span><i class="fa fa-plus" aria-hidden="true"></i></span>');
            $(this).find('span').remove();
            $(this).append('<span><i class="fa fa-minus" aria-hidden="true"></i></span>');
        }
        else {
            $accordion.slideUp();
            $(this).find('span').remove();
            $(this).append('<span><i class="fa fa-plus" aria-hidden="true"></i></span>');
        }
    });

	// Menu Lever 2
    $("<p></p>").insertAfter(".widget_product_categories ul.product-categories > li > ul > li > a");
    var $pp = $(".widget_product_categories ul.product-categories > li > ul > li p");
    $(".widget_product_categories ul.product-categories > li >ul >li > ul").hide();
    $(".widget_product_categories ul.product-categories > li > ul > li p").append('<span><i class="fa fa-plus" aria-hidden="true"></i></span>');

    $(".widget_product_categories ul.product-categories > li > ul > li").each(function () {
        if ($(this).find("ul > li").length == 0) {
            $(this).find('p').remove();
        }
    });

    $pp.click(function () {
        var $accordions = $(this).nextAll('ul');

        if ($accordions.is(':hidden') === true) {

            $(".widget_product_categories ul.product-categories > li > ul > li > ul").slideUp();
            $accordions.slideDown();

            $pp.find('span').remove();
            $pp.append('<span><i class="fa fa-plus" aria-hidden="true"></i></span>');
            $(this).find('span').remove();
            $(this).append('<span><i class="fa fa-minus" aria-hidden="true"></i></span>');
        }
        else {
            $accordions.slideUp();
            $(this).find('span').remove();
            $(this).append('<span><i class="fa fa-plus" aria-hidden="true"></i></span>');
        }
    });
	
	// Menu Lever 3
	$("<p></p>").insertAfter(".widget_product_categories ul.product-categories > li > ul > li > ul > li > a");
    var $ppp = $(".widget_product_categories ul.product-categories > li > ul > li > ul > li p");
    $(".widget_product_categories ul.product-categories > li > ul > li > ul > li > ul").hide();
    $(".widget_product_categories ul.product-categories > li > ul > li > ul > li p").append('<span><i class="fa fa-plus" aria-hidden="true"></i></span>');
	
	$(".widget_product_categories ul.product-categories > li > ul > li > ul > li").each(function () {
        if ($(this).find("ul > li").length == 0) {
            $(this).find('p').remove();
        }
    });
	
	$ppp.click(function () {
        var $accordions = $(this).nextAll('ul');

        if ($accordions.is(':hidden') === true) {

            $(".widget_product_categories ul.product-categories > li > ul > li > ul > li > ul").slideUp();
            $accordions.slideDown();

            $ppp.find('span').remove();
            $ppp.append('<span><i class="fa fa-plus" aria-hidden="true"></i></span>');
            $(this).find('span').remove();
            $(this).append('<span><i class="fa fa-minus" aria-hidden="true"></i></span>');
        }
        else {
            $accordions.slideUp();
            $(this).find('span').remove();
            $(this).append('<span><i class="fa fa-plus" aria-hidden="true"></i></span>');
        }
    });
    /* Filter iostop */
    // init Isotope
    $(window).ready(function() {
        var $grid = $('.isotope').isotope({
          layoutMode: 'masonry',
          itemSelector: '.item',
            getSortData: {
                name: '.item'
            },
            transitionDuration:"0.7s",
            masonry : {
                columnWidth:".item"
            }
        });
        $('.isotope.gallery_parkery').isotope({
          layoutMode: 'packery',
          itemSelector: '.item',
          percentPosition: true,
            getSortData: {
                name: '.item'
            },
            transitionDuration:"0.7s",
            masonry : {
                columnWidth:".item"
            }
        });
        
        $('.fit-rows').isotope({
          layoutMode: 'fitRows',
          itemSelector: '.item',
          percentPosition: true,
            getSortData: {
                name: '.item'
            },
            transitionDuration:"0.7s",
            masonry : {
                columnWidth:".item"
            }
        });        
        var $prd_grid = $('.isotope.product-isotope').isotope({
          layoutMode: 'fitRows',
          itemSelector: '.item',
            getSortData: {
                name: '.item'
            },
            transitionDuration:"0.7s",
            masonry : {
                columnWidth:".item"
            }
        });
        $('.isotope.gallery-style3').isotope({
          layoutMode: 'fitRows',
          itemSelector: '.item',
          percentPosition: true,
            getSortData: {
                name: '.item'
            },
            transitionDuration:"0.7s",
            masonry : {
                columnWidth:".item"
            }
        });        
        var $prd_grid = $('.isotope.fitRows').isotope({
          layoutMode: 'fitRows',
          itemSelector: '.item',
            getSortData: {
                name: '.item'
            },
            transitionDuration:"0.7s",
            masonry : {
                columnWidth:".item"
            }
        });
        var $prd_grid = $('.classic_gallery').isotope({
          layoutMode: 'fitRows',
          itemSelector: '.item',
            getSortData: {
                name: '.item'
            },
            transitionDuration:"0.7s",
            masonry : {
                columnWidth:".item"
            }
        });
        // filter items on button click
        $('.button-group').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
          $('.button-group button').removeClass('is-checked');
          $(this).addClass('is-checked');
        });
    });
	// One page features
	function scrollToElement (selector) {
		if(w > 991){
		  jQuery('html, body').animate({
			scrollTop: jQuery(selector).offset().top - 130
		  }, 300); 
		}else{
			jQuery('html, body').animate({
				scrollTop: jQuery(selector).offset().top
			}, 300);  
		}
	};
	jQuery(document).ready(function() {
		jQuery('.content-section').each(function() {
			jQuery(this).mouseenter(function(){
				clearTimeout(jQuery(this).data('timeoutId'));
			}).mouseleave(function(){
				var someElement = jQuery(this),
					timeoutId = setTimeout(function(){
					}, 450);
				//set the timeoutId, allowing us to clear this trigger if the mouse comes back over
				someElement.data('timeoutId', timeoutId); 
			});
		});
		jQuery('#menu-menu-features .menu-item').click(function(){
			scrollToElement(jQuery('#' + jQuery(this).attr('id').replace('menu-', '')));
			jQuery("#menu-menu-features .menu-item").removeClass('selected');
			jQuery(this).addClass('selected');
		});
	});
	
    /*Animation*/
    window.scrollReveal = new scrollReveal({
        mobile: false
    });
	// Load Popup
/*



    if($.cookie('popup') != 'seen') {
        $.cookie('popup', 'seen', { expires: 365, path: '/' });
        $(".popup_holder").delay(2000).fadeIn();
        $('#closePopup').click(function(e) // You are clicking the close button
        {
        $('.popup_holder').fadeOut(); // Now the pop up is hiden.
        });
        $('.popup_holder').click(function(e) 
        {
        $('.popup_holder').fadeOut(); 
        });
    }else{
        $(".popup_holder").delay(2000).fadeIn();
        $('#closePopup').click(function(e) // You are clicking the close button
        {
        $('.popup_holder').fadeOut(); // Now the pop up is hiden.
        });
    };

    */
    //mini cart
    $(document).ready(function(){
        /* Menu responsive*/
        $(".btn-open").click(function(){
            $(".mega-menu").slideToggle("slow");
        });
		$(".btn-open-right").click(function(){
            $(".right-header").slideToggle("slow");
        });
        $(".btn-open-social").click(function(){
            $(".slideDown").slideToggle("slow");
        });

    });

    $('#commentform .form-submit .submit').addClass("btn btn-primary");
    //remove class
    $( ".megamenu .dropdown-menu.children > li > ul.children" ).removeClass( "dropdown-menu" )
    //woocommerce
    $('body').bind('added_to_cart', function (response) {
        $('body').trigger('wc_fragments_loaded');
    });
    //tooltip
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    //last menu level 3
    //$('li.menu-item-has-children > .children li ul.children').last().addClass('menu-lv3-last');
    //ajaxload cart
    function woocommerce_add_cart_ajax_message() {
        if ($('.add_to_cart_button').length !== 0 && $('#cart_added_msg_popup').length === 0) {
            var message_div = $('<div>')
                    .attr('id', 'cart_added_msg'),
                    popup_div = $('<div>')
                    .attr('id', 'cart_added_msg_popup')
                    .html(message_div)
                    .hide();

            $('body').prepend(popup_div);
        }
    }

    woocommerce_add_cart_ajax_message();
    //Woocommerce update cart sidebar
    $('body').bind('added_to_cart', function (response) {
        $('body').trigger('wc_fragments_loaded');
        $('ul.products li .added_to_cart').remove();
        var msg = $('#cart_added_msg_popup');
        $('#cart_added_msg').html(franco_params.ajax_cart_added_msg);
        msg.css('margin-left', '-' + $(msg).width() / 2 + 'px').fadeIn();
        window.setTimeout(function () {
            msg.fadeOut();
        }, 2000);
    });
    // tabs
    $("form.cart").on("change", "input.qty", function() {
        if (this.value === "0")
            this.value = "1";

        $(this.form).find("button[data-quantity]").data("quantity", this.value);
    });
    var tabs = $('.tabs');
    if(tabs.length){
        $('.tabs').tabs({
            beforeActivate: function(event, ui) {
                var hash = ui.newTab.children("li a").attr("href");
            },
            hide : {
                effect : "fadeOut",
                duration : 450
            },
            show : {
                effect : "fadeIn",
                duration : 450
            },
            updateHash : false
        });
    }
    $( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: "content",
    });
    $('.coming-soon-container').css('height', h + 'px'); 
    $('.page-404').css('height', h + 'px');
	// var heightMenu = $('.main-navigation .mega-menu').height(); 
	// if(w < 992){
	// 	$('.main-navigation .mega-menu').css('height', heightMenu + 20 + 'px'); 
	// }
    $('ul.mega-menu > li.megamenu .menu-bottom').hide();
    $('ul.mega-menu > li.megamenu .menu-bottom').each(function(){
        var className = $(this).parent().parent().attr('id');
            if($(this).hasClass(className)){
                $(this).show();
            }
    });
    //Check if Safari
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('html').addClass('safari');
    }
    //Check if MAC
     if(navigator.userAgent.indexOf('Mac')>1){
       $('html').addClass('safari');
     }
    $(window).resize(function () {
        var h = $(window).height();
        $('.coming-soon-container').css('height', h + 'px'); 
        $('.page-404').css('height', h + 'px');
         $('.adapt-height .vc_column-inner').css('height', h + 'px'); 
        var wdw = $(window).width();
		// var heightMenu = $('.main-navigation .mega-menu').height();
        if(wdw > 991){
            var left_ser = $('.page-home-4 .left-services').height();
            $('.page-home-4 .right-services').height(left_ser);
        }
		// if(wdw < 992){
		// 	$('.main-navigation .mega-menu').css('height', heightMenu + 20 + 'px'); 
		// }
        var wd = $(window).width();
        if(wd<768){
            $('.bxslider').owlCarousel({
                items: 6,
                margin: 20,
                responsive : {
                    0:{
                        items:3
                    },
                    481:{
                        items:6
                    },
                }  
            });
        }else{
            $('.bxslider').bxSlider({
              mode: 'vertical',
              slideMargin: 20,
              pager : false,
              nextSelector : '.next-btn',
              prevSelector : '.prev-btn',
              prevText : '<i class="pe-7s-angle-up"></i><i class="pe-7s-angle-up"></i>',
              nextText: '<i class="pe-7s-angle-down"></i><i class="pe-7s-angle-down"></i>',
              maxSlides: 5,
              adaptiveHeight: true,
              minSlides: 5,
              infiniteLoop: false
            });
        }
            var hei = $('.main-images').height();
            $('.views-block').css('height', hei + 'px');
    });
    $('.page-coming-soon .mc4wp-form button[type="submit"]').html("<i class='pe-7s-mail'></i>Notify me");
//product list view mode
if(franco_params.type_product == 'list-default' || franco_params.type_product == 'grid-default' || franco_params.shop_list != true || franco_params.type_product == ''){
    $('#grid_mode').unbind('click').click(function () {
        var $toggle = $('.viewmode-toggle');
        var $parent = $toggle.parent();
        var $products = $parent.find('ul.products');
        $('.product_types').addClass('product-grid').removeClass('product-list');
        $products.find('li').removeClass('col-md-12 col-sm-12');
        $('this').addClass('active');
        $('#list_mode').removeClass('active');
        if (($.cookie && $.cookie('viewmodecookie') == 'list') || !$.cookie) {
            if ($toggle.length) {
                $products.fadeOut(300, function () {
                    $products.addClass('grid').removeClass('list').fadeIn(300);
                });
            }
        }
        if ($.cookie)
            $.cookie('viewmodecookie', 'grid', {
                path: '/'
            });
        return false;
    });

    $('#list_mode').unbind('click').click(function () {
        var $toggle = $('.viewmode-toggle');
        var $parent = $toggle.parent();
        var $products = $parent.find('ul.products');
        $('.product_types').addClass('product-list').removeClass('product-grid');
        $products.find('li').addClass('col-md-12 col-sm-12');
        $(this).addClass('active');
        $('#grid_mode').removeClass('active');
        if (($.cookie && $.cookie('viewmodecookie') == 'grid') || !$.cookie) {
            if ($toggle.length) {
                $products.fadeOut(300, function () {
                    $products.addClass('list').removeClass('grid').fadeIn(300);
                });
            }
        }
        if ($.cookie)
            $.cookie('viewmodecookie', 'list', {
                path: '/'
            });
        return false;
    });

    if ($.cookie && $.cookie('viewmodecookie')) {
        var $toggle = $('.viewmode-toggle');
        if ($toggle.length) {
            var $parent = $toggle.parent();
            if ($parent.find('ul.products').hasClass('grid')) {
                $.cookie('viewmodecookie', 'grid', {
                    path: '/'
                });
            } else if ($parent.find('ul.products').hasClass('list')) {
                $.cookie('viewmodecookie', 'list', {
                    path: '/'
                });
            } else {
                $parent.find('ul.products').addClass($.cookie('viewmodecookie'));
            }
        }
    }
    if ($.cookie && $.cookie('viewmodecookie') == 'grid') {
        var $toggle = $('.viewmode-toggle');
        var $parent = $toggle.parent();
        var $products = $parent.find('ul.products');
        $('.viewmode-toggle #grid_mode').addClass('active');
        $('.product_types').addClass('product-grid').removeClass('product-list');
        $('.viewmode-toggle #list_mode').removeClass('active');
    }
    if ($.cookie && $.cookie('viewmodecookie') == 'list') {
        var $toggle = $('.viewmode-toggle');
        var $parent = $toggle.parent();
        var $products = $parent.find('ul.products');
        $('.viewmode-toggle #grid_mode').addClass('active');
        $('.product_types').addClass('product-grid').removeClass('product-list');
        $('.viewmode-toggle #list_mode').removeClass('active');
    }
    if(franco_params.type_product == 'grid-default' || franco_params.shop_list != true){
        if ($.cookie && $.cookie('viewmodecookie') == null) {
            var $toggle = $('.viewmode-toggle');
            if ($toggle.length) {
                var $parent = $toggle.parent();
                $parent.find('ul.products').addClass('grid');
                $('.product_types').addClass('product-grid')
            }
            $('.viewmode-toggle #grid_mode').addClass('active');
            if ($.cookie)
                $.cookie('viewmodecookie', 'grid', {
                    path: '/'
                });
        }
    }  
    if(franco_params.type_product == 'list-default' || franco_params.shop_list != true){
        if ($.cookie && $.cookie('viewmodecookie') == null) {
            var $toggle = $('.viewmode-toggle');
            if ($toggle.length) {
                var $parent = $toggle.parent();
                $parent.find('ul.products').addClass('list');
                $('.product_types').addClass('product-list')
            }
            $('.viewmode-toggle #list_mode').addClass('active');
            if ($.cookie)
                $.cookie('viewmodecookie', 'list', {
                    path: '/'
                });
        }
    }      
}
    // fix placeholder IE 9
    $('[placeholder]').focus(function () {
        var input = $(this);
        if (input.val() === input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function () {
        var input = $(this);
        if (input.val() === '' || input.val() === input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur().parents('form').submit(function () {
        $(this).find('[placeholder]').each(function () {
            var input = $(this);
            if (input.val() === input.attr('placeholder')) {
                input.val('');
            }
        });
    });

    //quantily
    $('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<div class="qty-number"><button class="increase-qty plus" onclick="">+</button></div>').prepend('<div class="qty-number"><button class="increase-qty minus" onclick="">-</button></div>');

    // Target quantity inputs on product pages
    $('input.qty:not(.product-quantity input.qty)').each(function () {
        var min = parseFloat($(this).attr('min'));

        if (min && min > 0 && parseFloat($(this).val()) < min) {
            $(this).val(min);
        }
    });

    $(document).off('click', '.plus, .minus').on('click', '.plus, .minus', function () {

        // Get values
        var $qty = $(this).closest('.quantity').find('.qty'),
                currentVal = parseFloat($qty.val()),
                max = parseFloat($qty.attr('max')),
                min = parseFloat($qty.attr('min')),
                step = $qty.attr('step');

        // Format values
        if (!currentVal || currentVal === '' || currentVal === 'NaN')
            currentVal = 0;
        if (max === '' || max === 'NaN')
            max = '';
        if (min === '' || min === 'NaN')
            min = 0;
        if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN')
            step = 1;

        // Change the value
        if ($(this).is('.plus')) {

            if (max && (max === currentVal || currentVal > max)) {
                $qty.val(max);
            } else {
                $qty.val(currentVal + parseFloat(step));
            }

        } else {

            if (min && (min === currentVal || currentVal < min)) {
                $qty.val(min);
            } else if (currentVal > 0) {
                $qty.val(currentVal - parseFloat(step));
            }

        }

        // Trigger change event
        $qty.trigger('change');
    });
    if($('input.qty:not(.product-quantity input.qty)').val() < 10){
      $('input.qty:not(.product-quantity input.qty)').val('0'+$('input.qty:not(.product-quantity input.qty)').val());  
    }
    $('input.qty:not(.product-quantity input.qty)').on('change', function() {
        if($(this).val() < 10 && $(this).val() > 0) {
            $(this).val('0'+$(this).val());
        }
    });
    //wishlist
    $( document ).ready( function($){
        if(typeof yith_wcwl_l10n != 'undefined') {
            var update_wishlist_count = function() {
                var data = {
                    action: 'update_wishlist_count'
                };
                $.ajax({
                    type: 'POST',
                    url: yith_wcwl_l10n.ajax_url,
                    data: data,
                    dataType: 'json',
                    beforeSend: function () {

                    },
                    success   : function (data) {
                        $('a.update-wishlist span').html('('+data+')');
                    }
                });
            };

            $('body').on( 'added_to_wishlist removed_from_wishlist', update_wishlist_count );
        }
    } );
    $('.ult_acord').remove();

    // Viewby
    $( '.woocommerce-viewing' ).off( 'change' ).on( 'change', 'select.count', function() {
        $( this ).closest( 'form' ).submit();
    });
    //gallery
        var gallery_paged = $('#gallery-loadmore').data('paged');
        var gallery_page = gallery_paged ? gallery_paged + 1 : 2;
        var Gallery = {
            _initialized: false,
            init: function () {
                if (this._initialized)
                    return false;
                this._initialized = true;
                this.galleryLoadmore();
            },
            galleryLoadmore: function () {
                $('#gallery-loadmore').click(function (event) {
                    event.preventDefault();
                    var el = $(this);
                    var gallery_wrap = $('.gallery-entries-wrap');
                    var url = $(this).attr('href');
                    
                    $('#gallery-loadmore').after('<i class="fa fa-refresh fa-spin"></i>');
                    el.addClass('hide-loadmore');
                    $.ajax({
                        type: 'GET',
                        url: url,
                        data: {paged: gallery_page},
                        success: function (response) {
                            $('.load-more').find('.fa-spin').remove();
                            el.removeClass('hide-loadmore');
                            var result = $(response).find('.gallery-entries-wrap').html();
                            if ($().isotope) {
                                $(result).imagesLoaded(function () {
                                    if (gallery_wrap.data('isotope')) {
                                        gallery_wrap.isotope('insert', $(result));
                                    }
                                });
                            }
                            gallery_page++;
                            if (gallery_page > parseInt(el.data('totalpage'))) {
                                el.parent().remove();
                            }
                        }
                    });
                });
            }
        };
    
    var Product = {
        _initialized :false,
        init: function(){
            if(this._initialized)
                return false;
            this._initialized = true;
            this.isotopeChangeLayout();
        },
        isotopeChangeLayout : function(){

            var button = $('[data-isotope-container]');

            button.each(function(){

                var $this = $(this),

                    container = $($this.data('isotope-container')),

                    layout = $this.data('isotope-layout');

                $this.on('click',function(){

                    $(this).addClass('black_button_active').siblings().removeClass('black_button_active').addClass('black_hover');

                    if(layout == "list"){

                        container.children("[class*='isotope_item']").addClass('list_view_type');

                    }

                    else{

                        container.children("[class*='isotope_item']").removeClass('list_view_type');

                    }

                    container.isotope('layout');

                    container.find('.tooltip_container').tooltip('.tooltip').tooltip('.tooltip');

                });

            });

        },

    };
    $(document).ready(function () {
        Gallery.init();
		Testimonial.init();
        Product.init();
    });
    $('.header-v3 .cart_label').click(function () {
        if($(this).parent().find('.content-filter').hasClass('active')){
            $('.mini-cart-special').addClass('active');
        }else{
            $('.mini-cart-special').removeClass('active');
        }
        if($('body').hasClass('special-cart-open')){
            $('body').removeClass('special-cart-open');
        }else{
            $('body').addClass('special-cart-open');
        }
    });
    $('.close_mini_special').click(function () {
        if($('body').hasClass('special-cart-open')){
            $('body').removeClass('special-cart-open');
        }else{
            $('body').addClass('special-cart-open');
        }
    });
	$('.overlay').click(function () {
        if($('body').hasClass('special-cart-open')){
            $('body').removeClass('special-cart-open');
        }
    });
	
	//demo switch color
    var themeChanger = {
    settings: {
      wrapper: $('.body_wrap'),
      wrapper_2: $('.scroll-to-top'),
      wrapper_3: $('.yith-wcqv-wrapper'),
      buttons: $('.controls > li > button')
    },
    
    init: function () {
      var _self = this;
      this.settings.buttons.on('click', function () {
        var $node = $(this),
            theme = $node.data('theme');
        _self.settings.wrapper.removeClass().addClass('body_wrapper ' + theme);
        _self.settings.wrapper_2.removeClass().addClass('scroll-to-top ' + theme);
        _self.settings.wrapper_3.removeClass().addClass('yith-wcqv-wrapper ' + theme);
        _self.settings.buttons.removeAttr('disabled');
        $node.attr('disabled', true);
      });
    }
  };
  themeChanger.init();
    $(".changer-opener").on("click",function(e){
          $('body').toggleClass('changer-active');
    });
    $('.controls > li > button').on("click",function(e){
        $('body').addClass('changer-active');
    });
  // End demo
})(jQuery);
// Active Cart, Search
function toggleFilter(obj){
    if(jQuery(obj).parent().find('.content-filter').hasClass('active')){
        jQuery(obj).parent().find('.content-filter').removeClass('active');
        
    }else{
        jQuery('.content-filter').removeClass('active');
        jQuery(obj).parent().find('.content-filter').addClass('active');
        
    }
}
// Add class IE
var ms_ie = false;
var ua = window.navigator.userAgent;
var old_ie = ua.indexOf('MSIE ');
var new_ie = ua.indexOf('Trident/');
if ((old_ie > -1) || (new_ie > -1)) {
	ms_ie = true;
}
if ( ms_ie ) {
   jQuery('body').addClass('ie-11');
}

//Check if Safari
function isSafari() {
  return /^((?!chrome).)*safari/i.test(navigator.userAgent);
}
//Check if MAC
if(navigator.userAgent.indexOf('Mac')>1){
   jQuery('html').addClass('macbook');
}
