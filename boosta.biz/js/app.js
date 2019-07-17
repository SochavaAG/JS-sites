
function downloadJSAtOnload() {
    var jq = document.createElement("script");
    jq.src = "js/libs.min.js";
    document.body.appendChild(jq);

    jq.onload = function() {

        // header

        $(window).scroll(function() {
            var fromTopPx = 1;
            var scrolledFromtop = $(window).scrollTop();
            if (scrolledFromtop > fromTopPx) {
                $('.header').addClass('scrolled');
            } else {
                $('.header').removeClass('scrolled');
            }
        });

        // burger

        $('.js_burger-controller').click(function() {
            if($('.js_burger-container').hasClass('active') && $(this).hasClass('active')) {
                $(this).add('.js_burger-container').removeClass('active');
            } else {
                $(this).add('.js_burger-container').addClass('active');
            }
        });

        // valuesslider

        $('.js_values-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 20000,
            infinite: false,
            speed: 100,
            fade: true,
            cssEase: 'linear',
            responsive: [{
                breakpoint: 1120,
                settings: {
                    autoplay: false
                }
            }]
        });

        $('.js_value-controller').click(function() {
            if (!$(this).hasClass('active')) {
                var nextSlide = $(this).index();
                refreshController(nextSlide);
            }
        });

        $('.js_value-controller').hover(
            function() {
                $('.js_values-slider').slick('slickPause');
            },
            function() {
                $('.js_values-slider').slick('slickPlay');
            }
        );

        $('.js_values-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            refreshController(nextSlide);
        });



        function refreshController(nextSlide) {
            $('.js_values-slider').slick('slickGoTo', nextSlide);
            $('.js_value-controller.active').removeClass('active');
            $('.js_value-controller').eq(nextSlide).addClass('active').parent().attr("data-active", nextSlide);
        }

        // products-slider

        $('.js_poducts-list-slider').slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            responsive: [{
                breakpoint: 737,
                settings: "unslick"
            }]
        });

        // jobslistslider

        $('.js_jobs-list-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            responsive: [{
                breakpoint: 736,
                settings: "unslick"
            }]
        });

        // contactsslider

        $('.js_contacts-slider-map').click(function() {
            var me = $(this);
            var brother = $('.js_contacts-slider-list').eq($(this).index());
            var slide = brother;
            var activeControllers = $('.js_contacts-slider-list.active, .js_contacts-slider-map.active');

            contactsSliderController(me, brother, slide, activeControllers);
        });

        $('.js_contacts-slider-list').click(function() {
            var me = $(this);
            var brother = $('.js_contacts-slider-map').eq($(this).index());
            var slide = me;
            var activeControllers = $('.js_contacts-slider-list.active, .js_contacts-slider-map.active');

            contactsSliderController(me, brother, slide, activeControllers);
        });

        function contactsSliderController(me, brother, slide, activeControllers) {
            if (!$(slide).hasClass('active')) {
                $(activeControllers).removeClass('active').find('.hidden').slideUp();
                $(slide).find('.hidden').slideDown();
                $(slide).addClass('active');
                $(me).addClass('active');
                $(brother).addClass('active');
            }
        }

        // progressbar

        var getMax = function() {
            return $(document).height() - $(window).height();
        }
        var getValue = function() {
            return $(window).scrollTop();
        }

        if ('max' in document.createElement('progress')) {
            // Browser supports progress element
            var progressBar = $('progress');
            // Set the Max attr for the first time
            progressBar.attr({
                max: getMax()
            });
            $(document).on('scroll', function() {
                // On scroll only Value attr needs to be calculated
                progressBar.attr({
                    value: getValue()
                });
            });
            $(window).resize(function() {
                // On resize, both Max/Value attr needs to be calculated
                progressBar.attr({
                    max: getMax(),
                    value: getValue()
                });
            });
        } else {
            var progressBar = $('.progress-bar'),
                max = getMax(),
                value, width;
            var getWidth = function() {
                // Calculate width in percentage
                value = getValue();
                width = (value / max) * 100;
                width = width + '%';
                return width;
            }
            var setWidth = function() {
                progressBar.css({
                    width: getWidth()
                });
            }
            $(document).on('scroll', setWidth);
            $(window).on('resize', function() {
                // Need to reset the Max attr
                max = getMax();
                setWidth();
            });
        }

        // popups
        
        var writeUsController = $('.js_write-us-controller');
        var writeUsWindow = $('.js_write-us-window');

        createWindow(writeUsController, writeUsWindow);

        var sendCvController = $('.js_send-cv-controller');
        var sendCvWindow = $('.js_send-cv-window');

        createWindow(sendCvController, sendCvWindow);

        var formController = $('.js_form-controller');
        var formWindow = $('.js_form-window');

        createWindow(formController, formWindow, true);

        function createWindow(controller, window, isSubmit) {
            if (isSubmit) {
                $(controller).submit(function(e) {
                    e.preventDefault();
                    showWindow(window);

                    $(controller).click(function(e) {
                        e.preventDefault();
                        hideWindow(window);

                        $(this).off("click");
                    });
                });
            } else {
                $(controller).click(function(e) {
                    e.preventDefault();
                    toggleWindow(window);
                });
            }

            $(window).click(function(e) {
                 //e.preventDefault();

                if ($(e.target).hasClass('popup')) {
                    hideWindow(window);
                }

            });
        };

        $('.popup__form-wrapper').find('input[name="hr_email"]').val($('.hr_email').text());
        $('.popup__form-wrapper').find('input[name="vacancie_name"]').val($('.post_vacancy .post__title').text());
        $('.popup__form-wrapper').find('input[name="hr_redirect"]').val(window.location.href);

        function addEscape(window) {
            $(document).keydown(function(event) {
                if (event.which == 27) {
                    event.preventDefault();

                    hideWindow(window);
                }

                $(document).off("keydown");
            });
        };

        function toggleWindow(window) {
            if ($(window).hasClass('active')) {
                hideWindow(window);
            } else {
                showWindow(window);
            }
        };

        function hideWindow(window) {
            $(window).fadeOut().removeClass('active');
        };

        function showWindow(window) {
            $(window).fadeIn().css("display", "flex").addClass('active');
            addEscape(window);
        };

        // sitechecker

        $('.js_sitechecker').submit(function(event) {
            var site = $('.js_sitechecker-input').val();
            var address = 'https://sitechecker.pro/' + site;
            window.open(address);
            event.preventDefault();
        });

        // blogposts

        sortBlogPosts(6);

        function sortBlogPosts(max) {
            hideBlogPosts(max);

            $('.js_blog-posts-controller').click(function() {
                setTimeout(function() {
                    showBlogPosts(max);
                    $('.js_blog-posts-controller').trigger("blur");
                }, 1500);
            });
        }

        function hideBlogPosts(max) {
            var obj = $('.js_blog-posts-item');

            if (obj.length >= max) {
                $(obj).each(function() {
                    if ($(this).index() > max - 1) {
                        $(this).hide().addClass('hidden');
                    }
                });
            } else {
                $('.js_blog-posts-controller').hide();
            }
        }

        function showBlogPosts(max) {
            var obj = $('.hidden');

            if (obj.length > max) {
                $(obj).each(function(index) {
                    if (index == 6) return false;
                    $(this).fadeIn().css("display", "flex").removeClass('hidden');
                    return true;
                });
            } else {
                $(obj).fadeIn().css("display", "flex").removeClass('hidden');
                $('.js_blog-posts-controller').hide();
            }
        }

        // filter();

        if(window.location.href.indexOf('?sentCV') >= 0){
            $('.popup.popup_dark').fadeIn().css('display', 'flex');
            $('.popup.popup_dark .popup__close').click(function(e){
                e.preventDefault();
                $('.popup.popup_dark').fadeOut();
                var url = window.location.href;
                url = window.location.href.replace('?sentCV', '');
                window.location = url;
            })
        }

        // CV popup confirmation;

        $('#vacancyForm').submit(function(){

            $('.cv_error').css('display', 'none');

            if($('#cv-name').val() == ''){
                $('.name_error').css('display', 'block');
                return false;
            }
            if($('#cv-email').val() == ''){
                $('.email_error').css('display', 'block');
                return false;
            }
        })

    }
}

window.addEventListener("load", downloadJSAtOnload, false);
