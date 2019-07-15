$(document).ready(function(){
    console.log('test');
    // set cookie on click
    //$(".lang-item a").on('click', function() {
    //    $.cookie("lang", 'ru', { expires : 1, path: '/' });
    //});
    // Parallax init
    InitBrowserType();
    var $parallax = $('#fullpage');
    var scrollTime = 500;
    var delay = scrollTime / 2.5;
    var winWidth = $(window).width();

    // mobileMenu();
    if ( winWidth < 420 ) {
        setMobileVerticalSlider();
    }

    window.addEventListener("orientationchange", function() {
        killMobileVerticalSlider();
        setMobileVerticalSlider();
    }, false);



    if ( window.location.pathname === '/ru/' && langOfPage === 'ru' ) {
        setRightLinkForCustomers('.opened-vacancy');
    }

    if (window.location.pathname === '/career/' && $('html').attr('lang')==='EN' ) {
        setRightLinkForCustomers('.lang-item a');
    }

    if ($('html').attr('lang')==='RU' ) {
        setRightLinkForCustomers('.menu-item-70 a');
    }


    if($parallax.length && winWidth > 900) {
        $parallax.fullpage({
            scrollingSpeed: scrollTime,
            verticalCentered: true,
            onLeave: function(){
                var $screen = $('.window-height.active');

                $(".anim", $screen).each(function(){

                    var $el = $(this);
                    if(!$el.hasClass('finish')) {
                        $el.css({'visibility':'hidden'});
                    }
                });
            },

            afterLoad: function(){

                var $screen = $('.window-height.active');

                var numIndex = $screen.index();

                switch (numIndex) {

                    case 1:

                        elementForAnimate($('#screen-second-title'), delay / 1.5);

                        window.setTimeout(function(){
                            elementForAnimate($('#screen-second-decoration'), delay * 1.5);
                            elementForAnimate($('#screen-second-text'), delay * 1.5);
                        }, delay * 1.5);

                        break;

                    case 2:

                        elementForAnimate($('#screen-product-title'), delay / 1.5);

                        window.setTimeout(function(){
                            elementForAnimate($('#screen-product-decoration'), delay * 1.5);
                            elementForAnimate($('#screen-product-text'), delay * 1.5);
                        }, delay * 1.5);

                        window.setTimeout(function(){
                            elementForAnimate($("#screen-product-icon", $screen), delay * 2);
                        }, delay * 3);

                        window.setTimeout(function(){
                            elementForAnimate($("#screen-product-btn", $screen), delay * 3);
                        }, delay * 4);

                        break;

                    case 3:

                        elementForAnimate($('#screen-seven-title'), delay / 1.5);

                        window.setTimeout(function(){
                            elementForAnimate($('#screen-seven-decoration'), delay * 1.5);
                            elementForAnimate($('#screen-seven-text'), delay * 1.5);
                        }, delay * 1.5);

                        window.setTimeout(function(){
                            elementForAnimate($('#footer'), delay);
                            elementForAnimate($('#screen-seven-vacancy'), delay * 2.5);
                            elementForAnimate($('#screen-seven-man'), delay * 3);
                        }, delay * 3);


                        break;

                    default :

                        $(".anim", $screen).each(function(){

                            var $el = $(this);
                            var delay = scrollTime / 2.5;

                            elementForAnimate($el, delay);
                        });
                }

            }
        });

        mainSliderAutoInit();

    } else {
        mobileSlider();
        setInterval(mobileSlider, 4000);
    }

    // mobile slider of main page header

    function mobileSlider() {
        var slides = $('.header-slider .slide'),
            currentSlide = $('.header-slider .slide.active'),
            nextSlide = currentSlide.next();

        slides.hide();
        currentSlide.removeClass('active').fadeOut(1000);

        if(nextSlide.length === 0) {
            nextSlide.removeClass('active').fadeOut(1000);
            currentSlide = $('.header-slider .slide').first().addClass('active').fadeIn(1000);
        }

        nextSlide.addClass('active').fadeIn(1000);

    }

    var $layout = $('#layout');
    if($layout.length && winWidth > 1000) {

        windowScreen();

        $(window).resize(function() {
            windowScreen();
        });

        $('.news-page-slider').flexslider({
            directionNav: false,
            controlNav: true,
            animation: "slide"
        });

        $('.office-slider').flexslider({
            slideshowSpeed: 5000,
            animation: "slide",
            animationSpeed: 1000,
            itemWidth: 200,
            itemMargin: 35,
            minItems: 6,
            maxItems: 6,
            directionNav: false,
            controlNav: false,
            pauseOnHover: true,
            touch: true,
            move: 1
        });

        // wowInit();
    }

    // ColorBox Gallery init
    var $groupBox1 = $('.group1');
    var $groupBox2 = $('.group2');
    var $groupBox3 = $('.group3');
    var $groupBox4 = $('.group4');
    var $groupBox5 = $('.group5');
    var $groupBox6 = $('.group6');
    if($groupBox1.length) {
        $groupBox1.colorbox({rel:'group1'});
    }
    if($groupBox2.length) {
        $groupBox2.colorbox({rel:'group2'});
    }
    if($groupBox3.length) {
        $groupBox3.colorbox({rel:'group3'});
    }
    if($groupBox4.length) {
        $groupBox4.colorbox({rel:'group4'});
    }
    if($groupBox5.length) {
        $groupBox5.colorbox({rel:'group5'});
    }
    if($groupBox6.length) {
        $groupBox6.colorbox({rel:'group6'});
    }

    var $slider = $('#carousel');
    if($slider.length && winWidth > 1024) {
        $(function() {
            $slider.carouFredSel({
                align: false,
                items: 7,
                width: "100%",
                scroll: {
                    items: 1,
                    duration: 6000,
                    timeoutDuration: 1,
                    easing: 'linear',
                    pauseOnHover: 'immediate'
                }
            });
        });
    }


    $('li:first-child', '.h-menu, #footer nav ul').on('click', function(e) {
        e.preventDefault();
        if (window.location.pathname === '/' || window.location.pathname === '/ru/') {
            $('#fp-nav').find('ul li:eq(1) a').click();
        } else {
            var host = document.location.host;
            if (document.location.href.indexOf('ru')+1) {
                document.location.href = 'http://' + host + '/ru/#about-us';
            } else {
                document.location.href = 'http://' + host + '/#about-us';
            }

        }
    });
    if (document.location.hash === '#about-us') {
        window.location.hash = '';
        $('#fp-nav').find('ul li:eq(1) a').click();
    }


    TabsContent();
    AnimateSliderContacts();

    var $vacancies = $('.vacancies');
    if ( $vacancies.length ) {

        $('.vacancy-item:nth-child(3n+3)', $vacancies).after('<div class="clearfix" style="margin-bottom: 50px;"></div>');

    }

    // fix on 1366x768 screen & windows (for QA)
    if ($(window).height() < 767 && navigator.appVersion.indexOf("Win")!=-1) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = '/wp-content/themes/template/assets/css/fix-768.css';
        link.media = 'all';
        head.appendChild(link);
    }


    // chosen init
    if ($('select#category').length) {
        $('#category').chosen({disable_search_threshold: 10});
    }

    //$('#category').chosen({disable_search_threshold: 10});

    // social hover

    $('.social-links .icon').hover(function() {
        $('.social-links .icon').not($(this)).css({opacity: 0.5});
    }, function() {
        $('.social-links .icon').not($(this)).css({opacity: 1});
    })

    // Play demo
     $('[data-game]').on('click', function() {
        var gameName = $(this).attr('data-game'),
            gameBaseUrl = 'https://demo.monkeyboxsrv.com/demo/fullstate/html5/evoplay/',
            // backUrl = encodeURIComponent(window.location.href),
            $gameContainer,
            gameContainerHeight;

        $gameContainer = $('<iframe/>', {
            "class": "game-iframe",
            src: gameBaseUrl + gameName
        });

        gameContainerHeight = (gameName == 'monster_lab') ? '100%' : '90%';
        $(this).colorbox({html: $gameContainer, width: '80%', height: gameContainerHeight});
    });

    // Init news slider
    if ($(window).width() > 900) {
        slideInit();
    }

    $('body.mobile-menu-open').on('click', function() {
        console.log('this is it!');
    });

    if (winWidth < 1000) {
        var header = document.querySelector("#header-affix");
        new Headroom(header, {
            tolerance: {
                down : 10,
                up : 20
            },
            offset : 100,
            classes: {
                initial: "affix",
                pinned: "affix--reset",
                unpinned: "affix--up"
            }
        }).init();
    }

});


// Main Tabs

function TabsContent() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent()
            .addClass("current")
            .siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");

        $(tab).fadeIn();
        var tabOffset = $('#tabs-container').position().top;
        $('html, body').animate({scrollTop: tabOffset}, 700);
    });
}

function elementForAnimate(block, delay) {

    var $el = block;
    var x = $el.data('effect');
    var bonus = $el.data('bonus');

    if(!$el.hasClass('finish')) {
        $el.css({'visibility':'hidden'});
        window.setTimeout(function(){
            animate($el, x);
        }, delay);
    } else {
        if(bonus) {
            window.setTimeout(function(){
                animateBonus($el, bonus);
            }, delay);
        }
    }
}

function animate($el, x) {
    $el.css({'visibility':'visible'});
    $el.removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass().addClass('finish');
    });
}

function animateBonus($el, bonus) {
    $el.removeClass().addClass(bonus + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass().addClass('finish');
    });
}

function AnimateSliderContacts() {
    var firstBlock = $(".slider_content_first"),
        secondBlock = $(".slider_content_second"),
        thirdBlock = $(".slider_content_third"),
        controlNav = $(".flex-control-nav a"),
        zoomOut = "animated zoomOut",
        fadeIn = "animated fadeIn",
        fadeOutRight = "fadeOutRight",
        fadeOutLeft = "fadeOutLeft",
        flexActive = "flex-active";

    $(".flex-control-nav a.second, .show_on_map").on('click', function(){
        firstBlock.parent().removeClass('fix-cursor-bug');
        controlNav.removeClass(flexActive);
        $(".flex-control-nav a.second").addClass(flexActive);

        firstBlock.find(".right").removeClass(fadeOutRight);
        firstBlock.find(".left").removeClass(fadeOutLeft);

        if (secondBlock.hasClass(zoomOut)) {
            secondBlock.removeClass(zoomOut).addClass(fadeIn);
        }

        $(this).addClass(flexActive);
        setTimeout(function(){
            firstBlock.find(".right").addClass("animated").addClass(fadeOutRight);
        }, 100);
        setTimeout(function(){
            firstBlock.find(".left").addClass("animated").addClass(fadeOutLeft);
        }, 300);
        setTimeout(function(){
            firstBlock.fadeOut();
        }, 500);
    });

    $(".flex-control-nav a.third").on('click', function(){
        controlNav.removeClass(flexActive);
        $(this).addClass(flexActive);
        secondBlock.addClass(zoomOut);
        firstBlock.addClass(zoomOut);
        setTimeout(function() {
            firstBlock.parent().addClass('fix-cursor-bug');
        }, 400);
    });

    $(".flex-control-nav a.first").on('click', function(){
        firstBlock.parent().removeClass('fix-cursor-bug');
        controlNav.removeClass(flexActive);
        $(this).addClass(flexActive);
        firstBlock.find(".right").removeClass(fadeOutRight);
        firstBlock.find(".left").removeClass(fadeOutLeft);
        secondBlock.removeClass(zoomOut).addClass(fadeIn);
        firstBlock.removeClass(zoomOut).fadeIn();
    });

}

function wowInit() {
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100
        }
    );
    wow.init();
}

function windowScreen() {

    var $windowScreen = $('.window-height', '#layout');
    var $window = $(window);
    var $body = $('html, body');
    if($windowScreen.length) {

        var windowWidth = $body.width();
        var windowHeight = $window.height();

        $windowScreen.each(function(){
            $(this).css({
                'width': windowWidth,
                'height': windowHeight
            });
        });
    }
}

function mainSliderAutoInit() {

    var $slider = $('.slider-top');
    var $sliderNav = $('.fp-slidesNav', $slider);

    window.setInterval(function(){

        mainSliderAutoFade($sliderNav);

    }, 7000);

}
function mainSliderAutoFade($sliderNav) {

    var $item = $('a', $sliderNav),
        $itemCurr = $('a.active', $sliderNav),

        $itemParent = $itemCurr.parent(),
        $itemNext,
        itemLength = $item.length,
        indexCurr = $itemParent.index() + 1;

    if(indexCurr != itemLength) {
        $itemNext = $itemParent.next();
    } else {
        $itemNext = $('li', $sliderNav).first();
    }

    $('a', $itemNext).click();

}

    function slideInit() {
        var $slider = $('.slider');
        if ($slider.length) {
            $slider.bxSlider({
                slideWidth: '100%',
                mode: 'fade',
                useCSS: false,
                infiniteLoop: true,
                hideControlOnEnd: true,
                speed: 1500,
                auto: true,
                controls: false,
                responsive: true,
                pager: true
            });
        }
    }



// $(function() {

//     var $win = $(window);
//     var $marker = $('.background-screen');
//     var $container = $('html, body');
//     var timerScroll = false;

//     $marker.each(function(){
//         var $el = $(this);
//         var timer;
//         $win.scroll(function() {
//             var t = $win.scrollTop() + $win.height() - $el.offset().top;
//             var h = $el.height();
//             // console.log($win.height());
//             if ($win.scrollTop() + $win.height() >= $el.offset().top) {

//                 if(t >= h/2) {
//                     $marker.removeClass('active');
//                     $el.addClass('active');
//                     var el_t = t;

//                 }
//             } else {
//                 $el.removeClass('active');
//             }


//         });
//     });

//     $win.scroll(function() {
//         if (timerScroll)
//             return;
//         timerScroll = true;
//         var $el = $('.background-screen.active');
//         if($el.length) {
//             changeBg($el);
//         }
//     });

//     function changeBg($el) {

//     timer = setTimeout(function(){

//         var $container = $('html, body');
//          $container.animate({
//              'scrollTop': $el.offset().top
//          }, 300, function() {
//             timerScroll = false;
//             clearTimeout(timer);
//             // $container.unbind('scroll');
//             if ($el.hasClass('odd')) {
//                 $('#tab-1').addClass('revert-screen');
//             } else {
//                 $('#tab-1').removeClass('revert-screen');
//             }
//          })
//     }, 5000);
// }

// });







/*
 function redirectOnEnglishVersion() {

 if (window.location.pathname === '/' && $.cookie("lang") != 'ru') {
 window.location = "/en/";
 }

 }*/

/**
 * Define what browser we use
 */
function InitBrowserType() {

    var ua = navigator.userAgent,
        browserClass;

    if (ua.search(/Safari/) > 0) {
        browserClass = 'safari';
    }
    if (ua.search(/Chrome/) > 0) {
        browserClass = 'chrome';
    }
    if (ua.search(/Firefox/) > 0) {
        browserClass = 'firefox';
    }
    if (ua.search(/OPR/) > 0 || ua.search(/Opera/) > 0) {
        browserClass = 'opera';
    }
    if (ua.search(/MSIE/) > 0 || ua.search(/rv:11.0/) > 0) {
        browserClass = 'ie';
    }
    if (ua.search(/YaBrowser/) > 0) {
        browserClass = 'yandex';
    }

    if (browserClass == 'yandex') {
        $('#browser-chrome').addClass('in');
    }
    $('html').addClass(browserClass);
    $('#browser-' + browserClass).addClass('in');

    return browserClass;
}

// for mobile menu

// function mobileMenu() {
//     var $mobMenu = $('.mobile-menu');
//     $('.h-menu').clone().appendTo($mobMenu);
//     $('.h-lang').clone().prependTo($mobMenu);
//     console.log('mobile menu call');
// }

function setMobileVerticalSlider() {

    var indexOfSlide;

    $('.header-slider').addClass('mobile-slider');
    $.each($('[data-index]'), function(ind, el) {
        indexOfSlide = $(el).data('index');

        if ( indexOfSlide === 1) {
            $('.mobile-slider [data-index='+ indexOfSlide +'] .mob-slide').attr('style', 'background-image: url("https://evoplay.com/wp-content/themes/template/assets/img/pics/top_slider_img-mob_'+ indexOfSlide + '-en' +'.jpg")');
        } else {
            $('.mobile-slider [data-index='+ indexOfSlide +'] .mob-slide').attr('style', 'background-image: url("https://evoplay.com/wp-content/themes/template/assets/img/pics/top_slider_img-mob_'+ indexOfSlide +'-'+ langOfPage +'.jpg")');
        }
    })
}

function killMobileVerticalSlider() {
    $('.header-slider').removeClass('mobile-slider');
}

function setRightLinkForCustomers(link) {
    $(link).attr('href', 'http://jobs.evoplay.com');
}


