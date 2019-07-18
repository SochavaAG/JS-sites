$(function () {
    //footer bottom
    function foottoBottom() {
        var foot = $('#footer'),
            main = $('#main');
        var footHeight = foot[0].offsetHeight;
        foot.css({'margin-top': '-' + footHeight + 'px'});
        main.css({'padding-bottom': footHeight + 'px'});
    }

    foottoBottom();
    $(window).resize(function () {
        foottoBottom();
    });



    $('.down-to-form').click(function () {
        $('html, body').animate({
            scrollTop: ($('#footer .form-wr').first().offset().top )
        }, 1000);
        $('#footer .form-wr input[name=your-name]').focus();
    });

    //slider height
    var heightHead = $('header#masthead')[0].clientHeight;
    $('.rev-slider-block').height($(window).height() - heightHead);

    $(window).resize(function () {
        var heightHead = $('header#masthead')[0].clientHeight;
        $('.rev-slider-block').height($(window).height() - heightHead);
    });


});

$(function () {
    $('#nav-mobile').mmenu({
        extensions: ["pagedim-black", "theme-black", "listview-huge", "fx-panels-slide-100", "fx-listitems-slide", "fx-menu-slide", "border-offset"],
        "navbars": [
            {
                "position": "top",
                "content": '<a href="/" class="logo-mob"></a>',
                "height": 1
            },
            {
                "position": "bottom",
                "content": '<div class="social"></div>',
                "height": 1
            }
        ],
        navbar: {
            title: false
        },
        counters: true
    }, {
        offCanvas: {
            pageSelector: "#wrapp-for-mobile"
        }
    });

    var img = new Image();
    img.src = $('#masthead .logo img').attr('src');
    $('.logo-mob').html(img);

    $('#nav-mobile .social').html($('#masthead .social').html());


});

$(function () {
    $('#footer .form-wr .caption, .contactus-head').click(function () {
        $('#footer .form-wr .wpcf7').slideToggle();
        $('html, body').animate({
            scrollTop: ($('#footer .form-wr').first().offset().top )
        }, 1000);
    });
})


$(function () {
    var bgrimg = $('section.services .bgr-im');
    if (bgrimg.length > 0) {

        if ($(bgrimg).attr('src') == '') {
            $(bgrimg).addClass('hidden-xs-up');
        }

        var leftof = $('header#masthead .header-bgr')[0].getBoundingClientRect();
        $(window).resize(function () {
            var leftof = $('header#masthead .header-bgr')[0].getBoundingClientRect();
            bgrimg.width(leftof.width + leftof.left);
        });
        bgrimg.width(leftof.width + leftof.left);
    }
});


$(function () {

//popup
    $(function () {
        var formClass,
            popupSlidde = $('#popup-slide'),
            bgrPopup = $('.bgr-popup');
        if (popupSlidde.length > 0) {
            $(popupSlidde).mCustomScrollbar();
        }
        $(popupSlidde).append('<div class="close-popup">x</div>');
        //show
        $('*[data-formClass]').click(function () {
            $(popupSlidde).children('.formHidden').hide();
            formClass = $(this).attr('data-formClass');
            var curent = $(popupSlidde).find('.' + formClass);
            $(curent).show();
            $(bgrPopup).fadeIn();

            if ($(popupSlidde)[0].clientHeight > $(curent)[0].clientHeight) {
                resizeTop();
            }
            $(curent).bind('onresize',function () {
                resizeTop();
            });
            $(window).resize(function () {
                resizeTop();
            })

            function resizeTop() {
                if ($(popupSlidde)[0].clientHeight > $(curent)[0].clientHeight) {
                    var marginTop = ($(popupSlidde)[0].clientHeight - $(curent)[0].clientHeight) / 2;
                    $(curent).css({"margin-top": marginTop + "px"});
                }else{
                    $(curent).css({"margin-top": "0px"});
                }
            }

            $(popupSlidde).animate({right: '0%'}, 800);
        });

        //mob
        $(document).on("swiperight","#popup-slide", function () {
            $(bgrPopup).fadeOut();
            $(popupSlidde).animate({right: '-150%'}, 1000);
        });
        //hide
        $('.close-popup').click(function () {
            $(bgrPopup).fadeOut();
            $(popupSlidde).animate({right: '-150%'}, 1000);
        });

    });

    function hidePopup() {
        setTimeout(function () {
            $('.bgr-popup').fadeOut();
            $('#popup-slide').animate({right: '-150%'}, 1000, 'easeOutQuint');
            $('.wpcf7-display-none').hide();
        }, 2500);
    }


});

