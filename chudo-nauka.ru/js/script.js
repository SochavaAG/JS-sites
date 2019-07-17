jQuery(document).ready(function () {

  $('.fancy-modal').fancybox();

  $('.modal-trigger').fancybox({

    padding: 0,

    wrapCSS: 'custom-modal-wr'

  });

  $('.calculator-trigger').fancybox({

    padding: 0,

    wrapCSS: 'custom-calc-wr'

  });


  $(".tel-input").mask("+7(999) 999-99-99");

  // $('#custom1').owlCarousel({

  // 	items: 1,

  // 	pagination: true,

  // 	autoPlay: 3000


  // });

  $('.clients-slider').owlCarousel({

    items: 4,

    nav: true,

    loop: true,

    margin: 10,

    autoplay: true,

    autoplayTimeout: 3000,

    navText: false,

    responsive: {

      0: {

        items: 1,

        nav: true

      },

      600: {

        items: 2,

        nav: false

      },

      1000: {

        items: 4,

        nav: true,

        loop: true

      }

    },

    pagination: true

  });

  $('.popular-slider').owlCarousel({

    items: 3,

    nav: true,

    loop: true,

    margin: 10,

    autoplay: true,

    autoplayTimeout: 4000,

    navText: false,

    responsive: true,

    autoplayHoverPause: true,

    responsive: {

      0: {

        items: 1,

        nav: true

      },

      600: {

        items: 2,

        nav: false

      },

      1000: {

        items: 3,

        nav: true,

        loop: true

      }

    },

    pagination: true

  });


  $('.reviews-slider').owlCarousel({

    items: 1,

    nav: true,

    loop: true,

    margin: 10,


    navText: false,

    pagination: true

  });

  $('.news-slider').owlCarousel({

    items: 3,

    nav: true,

    loop: true,

    margin: 10,


    autoplay: false,

    autoplayTimeout: 3000,

    navText: false,

    autoplayHoverPause: true,

    responsive: {

      0: {

        items: 1,

        nav: true

      },

      600: {

        items: 2,

        nav: false

      },

      1000: {

        items: 3,

        nav: true,

        loop: true

      }

    },

    pagination: true

  });

  $('.fotoivideo-slider-new').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    centerMode: true,
    adaptiveHeight: true,
    customPaging: '0 0 20px 0',
    asNavFor: '.fotoivideo-nav-new',
    prevArrow: '<div class="slick-prev slick-arrow" style=""></div>',
    nextArrow: '<div class="slick-next slick-arrow" style=""></div>'
  });

  $('.fotoivideo-nav-new').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.fotoivideo-slider-new',
    dots: false,
    arrows: false,
    centerPadding: '40px',
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });


  $('.fotoivideo-nav-new, .fotoivideo-slider-new').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    onPlayerReady();
  });


  $('.fotoivideo-slider').owlCarousel({

    items: 3,

    nav: true,

    loop: true,

    margin: 10,

    autoplay: true,

    autoplayTimeout: 5000,

    navText: false,

    responsive: {

      0: {

        items: 1,

        nav: true

      },

      600: {

        items: 2,

        nav: false

      },

      1000: {

        items: 3,

        nav: true,

        loop: true

      }

    },

    pagination: true

  });


  $('.main-slider-decoration').owlCarousel({

    items: 1,
    autoHeight: true,
    nav: true,

    loop: true,


    autoplay: true,

    autoplayTimeout: 5000,

    navText: false,

    pagination: true

  });

  $('.main-slider-decoration-show').owlCarousel({

    items: 1,

    nav: true,

    loop: true,

    animateOut: 'fadeOut',

    animateIn: 'zoomInDown',

    autoplay: true,

    autoplayTimeout: 7000,

    navText: false,

    pagination: true

  });

  $('.main-slider-decoration-guests').owlCarousel({
    items: 3,

    nav: true,

    loop: true,

    margin: 50,

    animateOut: 'fadeOut',

    animateIn: 'zoomInDown',

    autoplay: true,

    autoplayTimeout: 7000,

    navText: false,

    pagination: true

  });


});

$(".fancybox-thumb").fancybox({

  prevEffect: 'none',

  nextEffect: 'none',

  helpers: {

    title: {

      type: 'outside'

    },

    thumbs: {

      width: 50,

      height: 50

    }


  }

});

$('.fancybox-media').fancybox({

  openEffect: 'none',

  closeEffect: 'none',

  helpers: {

    media: {}

  }

});

$('.header-menu-toggle-btn').on('click', function (e) {

  e.preventDefault();

  $('body').toggleClass('lockscroll');

});

$(".slize.nauka-logo").hover(function (e) {

  $(this).toggleClass('animated jello', e.type === 'mouseenter');

});

$(".slize.master-logo").hover(function (e) {

  $(this).toggleClass('animated rubberBand', e.type === 'mouseenter');

});

$(".slize.anima-logo").hover(function (e) {

  $(this).toggleClass('animated tada', e.type === 'mouseenter');

});

$("div.tooltips3 span.tooltip").hover(function (e) {

  $(this).toggleClass('animated rotateIn', e.type === 'mouseenter');

});

// $("a.tooltips2 span").hover( function (e) {

// 	$(this).toggleClass('animated shake', e.type === 'mouseenter');

// });


/*$( function() {





 $('#filters .spoiler_title').on('click', function(){

 $('#filters .spoiler_toggle').slideToggle(400, function() {

 var visible = $(this).is(':visible');

 $('#filters .spoiler_indicator').html(visible ? 'Свернуть' : 'Открыть фильтр');

 });

 $(this).toggleClass('active');

 return false;

 });



 var $container = $('.isotope'),



 filters = {};

 $container.isotope({

 itemSelector: '.research-shows',

 layoutMode: 'fitRows',

 sortBy : 'random',

 filter: ':not(.duration-15)',

 });

 var $desc = $('.textadd'),



 filters = {};

 $container.isotope({

 itemSelector: 'div',

 layoutMode: 'fitRows',

 filter: ':not(.duration-15)',

 });





 $(document).on('click', '#filters .button', function() {



 $desc.show();



 // console.log ($(this));

 var $this = $(this);



 if ($this.hasClass('is-checked')) {

 return;

 }



 var $optionSet = $this.parents('.button-group');



 $optionSet.find('.is-checked').removeClass('is-checked');

 $this.addClass('is-checked');





 var group = $optionSet.attr('data-filter-group');

 filters[group] = $this.attr('data-filter');





 var isoFilters = [];

 for (var prop in filters) {

 isoFilters.push(filters[prop])

 }

 var selector = isoFilters.join('');

 $container.isotope({



 filter: selector

 });

 $desc.isotope({

 filter: selector

 });





 return false;

 });

 });*/


$('div.price-block-2:empty').hide();

$('div.price-block-3:empty').hide();

// $('div.experiments:has(div.all-experiments)').hide();

// $('div.upsale-block:has(div.upsale-items)').hide();


// $('a.order-show').on( 'click', function() {


//   var city = $( this ).text();

//     $('input[name=hidden-563]').val(city);

//     $('.city-input').text(city);


// });

// $('.about-show .right-block').addClass('animated shake');

// $('.about-show .right-block').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 'animated bounceOutRight');


setInterval(function () {

  $(".option").animate({'margin-left': '20px'}, 300)

  $(".option").animate({'margin-left': '-20px'}, 300)

  $(".option").animate({'margin-left': '20px'}, 300)

  $(".option").animate({'margin-left': '-20px'}, 300)

  $(".option").animate({'margin-left': '20px'}, 300)

  $(".option").animate({'margin-left': '-20px'}, 300)

}, 7000);





