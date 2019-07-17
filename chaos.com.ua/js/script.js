$(window).on('load', function() {
  $('#page-loader').fadeOut();
  $('.loader').length && loaderInit();

  if ($('#fullpage-index').length && $(window).width() > 1023) {
    // $('.intro__main-contant').addClass('animated fadeInUp');
    $('.intro-cocaine').removeClass('intro-cocaine--hidden');
  }
});

// var Loader = {
//     hide: function() { $('.loader').fadeOut(); },
//     // show: function() { $('.loader').addClass('loader--visible') }
// };

// function loaderInit() {
//   setTimeout(Loader.hide, 5000);
// }

$(document).ready(function() {
  //All pages
  //menu toggle button
  $('.navbar-toggle').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu--open');
    $('.menu__overlay').toggleClass('menu__overlay--open');
    $('.navbar-toggle').toggleClass('navbar-toggle--active');
    if ($('.menu').hasClass('menu--open')) {
      $.fn.fullpage.setAllowScrolling(false);
    } else {
      $.fn.fullpage.setAllowScrolling(true);
    }

    if ($('.menu').hasClass('menu--open') && !$('#fullpage-index').length) {
      $.fn.fullpage.setAllowScrolling(false);
      $('html, body').css('overflow', 'hidden');
    } else if (!$('#fullpage-index').length){
      $.fn.fullpage.setAllowScrolling(true);
      $('html, body').css('overflow', 'auto');
    }

    if ($('#fullpage-projects').length) {
      $('.projects-filters__filter-btn--desktop').fadeToggle();
      $.fn.fullpage.destroy();
      $.fn.fullpage.reBuild();
    }
  });

  $('.menu__overlay').on('click', function(e) {
    e.preventDefault();
    $('.menu').removeClass('menu--open');
    $('.menu__overlay').removeClass('menu__overlay--open');
    $('.navbar-toggle').removeClass('navbar-toggle--active');
    $.fn.fullpage.setAllowScrolling(true);

    if (!$('#fullpage-index').length) {
      $('html, body').css('overflow', 'auto');
    }
  });

  if ($(window).width() > 1023) {
    $('.menu__nav-link').on('click', function(e) {
      $('.menu').removeClass('menu--open');
      $('.menu__overlay').removeClass('menu__overlay--open');
      $('.navbar-toggle').removeClass('navbar-toggle--active');
      $.fn.fullpage.setAllowScrolling(true);

      if (!$('#fullpage-index').length) {
        $('html, body').css('overflow', 'auto');
      }
    });
  }

  $(".navbar-toggle").hover( function (e) {
    $('.left').toggleClass('left--hover', e.type === 'mouseenter');
    $('.navbar-toggle').toggleClass('navbar-toggle--hover', e.type === 'mouseenter');
  });

  //section arrows
  $('.section__down, .section__down-center').on('click', function(e) {
    e.preventDefault();
    $('.menu').removeClass('menu--open');
    $('.menu__overlay').removeClass('menu__overlay--open');
    $('.navbar-toggle').removeClass('navbar-toggle--active');
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.moveSectionDown();
    e.stopPropagation();
    if (!$('#fullpage-index').length) {
      $('html, body').css('overflow', 'auto');
    }
  });

  $('.section__up').on('click', function(e) {
    e.preventDefault();
    $('.menu').removeClass('menu--open');
    $('.menu__overlay').removeClass('menu__overlay--open');
    $('.navbar-toggle').removeClass('navbar-toggle--active');
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.moveSectionUp();
    e.stopPropagation();
    if (!$('#fullpage-index').length) {
      $('html, body').css('overflow', 'auto');
    }
  });

  //mobile menu toggle buttons
  $('.mobile-toggle').on('click', function(e) {
    e.preventDefault();
    $('.header-nav').addClass('header-nav--open');
  });

  $('.header-nav__mobile-close').on('click', function(e) {
    e.preventDefault();
    $('.header-nav').removeClass('header-nav--open');
  });

  $('.menu__mobile-close').on('click', function(e) {
    e.preventDefault();
    $('.menu__nav').removeClass('menu__nav--open');
    $('.header-nav').removeClass('header-nav--open');
    $('.menu__mobile-close').hide();
    $('.menu__mobile-back').hide();
  });

  if ($(window).width() < 1024) {
    $('.menu__nav-link').on('click', function(e) {
      $('.menu__nav').removeClass('menu__nav--open');
      $('.header-nav').removeClass('header-nav--open');
      $('.menu__mobile-close').hide();
      $('.menu__mobile-back').hide();
    });
  }

  $('.menu__mobile-back').on('click', function(e) {
    e.preventDefault();
    $('.menu__nav').removeClass('menu__nav--open');
    $('.menu__mobile-close').hide();
    $('.menu__mobile-back').hide();
  });

  $('.header-nav__link--agency').on('click', function(e) {
    e.preventDefault();
    $('.menu__nav').toggleClass('menu__nav--open');
    $('.menu__mobile-close').show();
    $('.menu__mobile-back').show();
  });

  $('.menu__contacts-text--location').on('click', function(e) {
    e.preventDefault();
    $('.menu__contacts-text--location').toggleClass('menu__contacts-text--location--hover');
    $('.menu__map').toggleClass('menu__map--active');
    e.stopPropagation();
    initMenuMap();
  });

  $('.menu__map-close, .navbar-toggle, .menu__overlay, .section__down, .section__up, .section__down-center').on('click', function(e) {
    e.preventDefault();
    $('.menu__contacts-text--location').removeClass('menu__contacts-text--location--hover');
    $('.menu__map').removeClass('menu__map--active');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).hasClass("projects-filters__btn") && !$('.projects-filters__list-wrapper').find(e.target).length) {
      $('.projects-filters__btn').removeClass('projects-filters__btn--active');
      $('.projects-filters__list-wrapper').removeClass('projects-filters__list-wrapper--on');
    }

    if (e.target.id != 'menu-map' && !$('#menu-map').find(e.target).length) {
      $('.menu__map').removeClass('menu__map--active');
      $('.menu__contacts-text--location').removeClass('menu__contacts-text--location--hover');
    }

    if (e.target.id != 'contacts-map' && !$('#contacts-map').find(e.target).length) {
      $('.contacts__item--location').removeClass('contacts__item--location--hover');
      $('.contacts__map').removeClass('contacts__map--active');
    }
  });

  //Footer scroll to top button
  $('.footer__scroll-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop : 0}, 800);
  });

  $('.footer-nav__link--services').on('click', function(e) {
    e.preventDefault();
    $('.footer-agency').hide();
    $('.footer-services').show();
    $('.footer-nav__link').removeClass('footer-nav__link--active');
    $(this).addClass('footer-nav__link--active');
    if ($('#fullpage-index').length && $(window).width() > 1023) {
      $.fn.fullpage.reBuild();
    }
  });

  $('.footer-nav__link--agency').on('click', function(e) {
    e.preventDefault();
    $('.footer-services').hide();
    $('.footer-agency').show();
    $('.footer-nav__link').removeClass('footer-nav__link--active');
    $(this).addClass('footer-nav__link--active');
    if ($('#fullpage-index').length && $(window).width() > 1023) {
      $.fn.fullpage.reBuild();
    }
  });

  $('.footer-text__btn').on('click', function(e) {
    e.preventDefault();
    $('.footer-text').toggleClass('footer-text--open');
    $('.footer-text__ovarlay').fadeToggle();
    $(this).toggleClass('footer-text__btn--open');
    if ($('#fullpage-index').length && $(window).width() > 1023) {
      $.fn.fullpage.reBuild();
    }
  });

  // $("#footer-phone, #menu-phone, #contacts-phone").mask("+380999999999");

  $(".contacts-form__input-contacts-phone, #footer-phone, #menu-phone").on({
    focus: function() {
      if (this.value==='') this.value = '+';
    },
    blur: function() {
      if (this.value==='+') this.value = '';
    }
  });

  $(".contacts-form__input-contacts-phone, #footer-phone, #menu-phone").keydown(function (e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
      (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      (e.keyCode >= 35 && e.keyCode <= 40)) {
      return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });

  $('#footer-phone').keydown(function() {
    if (this.value.length > 1) {
      $('.contacts__callme-submit').css("visibility","visible");
    } else {
      $('.contacts__callme-submit').css("visibility","hidden");
    }
  });

  $('#menu-phone').keydown(function() {
    if (this.value.length > 1) {
      $('.menu__callme-submit').css("visibility","visible");
    } else {
      $('.menu__callme-submit').css("visibility","hidden");
    }
  });

  //Accordion
  $('.accordion__list > li:eq(0) p').slideDown();

  $('.accordion__list a').click(function(e) {
    var dropDown = $(this).closest('li').find('p');

    $(this).closest('.accordion__list').find('p').not(dropDown).slideUp();

    if ($(this).children().hasClass('accordion__btn--active')) {
      $(this).children().removeClass('accordion__btn--active');
    } else {
      $(this).closest('.accordion__list').find('span.accordion__btn--active').removeClass('accordion__btn--active');
      $(this).children().addClass('accordion__btn--active');
    }
    dropDown.stop(false, true).slideToggle();
    e.preventDefault();
  });

  function witty() {
    var $win = $(window);
    var winH = $win.height();

    $win.on("scroll", function () {
      if($(this).scrollTop() + winH > $(document).height() - 170) {
        $('.contacts').addClass('contacts--scale');
        $('.top').addClass('top--hide');
        $('.bottom').addClass('bottom--hide');
        $('.left').addClass('left--hide');
        $('.right').addClass('right--hide');
        $('.header-top').addClass('header-top--hide');
        $('.navbar-toggle').addClass('navbar-toggle--hide');
        $('.header-socials').addClass('header-socials--hide');
        // $('.section__down').fadeOut();
      } else {
        $('.contacts').removeClass('contacts--scale');
        $('.top').removeClass('top--hide');
        $('.bottom').removeClass('bottom--hide');
        $('.left').removeClass('left--hide');
        $('.right').removeClass('right--hide');
        $('.header-top').removeClass('header-top--hide');
        $('.navbar-toggle').removeClass('navbar-toggle--hide');
        $('.header-socials').removeClass('header-socials--hide');
      }
    }).on("resize", function(){
      winH = $(this).height();
    });
  };

  //Main page
  if ($('#fullpage-index').length && $(window).width() < 1024) {
    $('.discuss__link').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('.contacts').offset().top
      }, 400);
    });
  }

  if ($('#fullpage-index').length && $(window).width() > 1023) {
    $('#fullpage-index').fullpage({
      controlArrows: false,

      afterLoad: function(anchorLink, index){

        $('.discuss__link, .header-right__request').on('click', function(e) {
          $.fn.fullpage.moveTo(6);
        });
      },

      onLeave: function (index, nextIndex, direction) {
        if (index == 1 && direction =='down'){
          $('.section__down-center').fadeOut();
          $('.section__down, .section__up').fadeIn();
        } else if (index == 2 && direction =='up'){
          $('.section__down-center').fadeIn();
          $('.section__down, .section__up').fadeOut();
        } else if (index == 2 && direction =='down') {
          // $('.discuss__right').addClass('animated fadeInDown');
        } else if (index == 3 && direction =='down') {
          // $('.discuss__right').removeClass('animated fadeInDown');
          $('.design__subheading').addClass('animated fadeInLeft');
          $('.design__link').addClass('animated fadeInRight');
          $('.design__title-bold').addClass('animated zoomIn');
        } else if (index == 4 && direction =='down') {
          $('.design__subheading').removeClass('animated fadeInLeft');
          $('.design__link').removeClass('animated fadeInRight');
          $('.design__title-bold').removeClass('animated zoomIn');
          $('.numbers__item').addClass('animated zoomIn');
          $('.numbers__number').addClass('animated zoomIn');
          $('.numbers__text').addClass('animated zoomIn');
        } else if (index == 5 && direction =='down') {
          $('.numbers__item').removeClass('animated zoomIn');
          $('.numbers__number').removeClass('animated zoomIn');
          $('.numbers__text').removeClass('animated zoomIn');
        } else if (index == 6 && direction =='down'){
          $('.contacts').addClass('contacts--scale');
          $('.top').addClass('top--hide');
          $('.bottom').addClass('bottom--hide');
          $('.left').addClass('left--hide');
          $('.right').addClass('right--hide');
          $('.header-top').addClass('header-top--hide');
          $('.navbar-toggle').addClass('navbar-toggle--hide');
          $('.header-socials').addClass('header-socials--hide');
          $('.section__down').hide();
        } else if (index == 7 && direction == 'up'){
          $('.contacts').removeClass('contacts--scale');
          $('.top').removeClass('top--hide');
          $('.bottom').removeClass('bottom--hide');
          $('.left').removeClass('left--hide');
          $('.right').removeClass('right--hide');
          $('.header-top').removeClass('header-top--hide');
          $('.navbar-toggle').removeClass('navbar-toggle--hide');
          $('.header-socials').removeClass('header-socials--hide');
          $('.section__down').show();
        }
      }
    });
  }

  var swiper = new Swiper('#projects-slider', {
    direction: 'vertical',
    pagination: '.projects__pagination',
    paginationClickable: true,
    bulletClass: 'projects__page',
    bulletActiveClass: 'projects__page--active',
    autoplay: 7000,
    speed: 1000,
    loop: true,
    calculateHeight:true,
    autoplayDisableOnInteraction: false,
    breakpoints: {
      1023: {
        direction: 'horizontal'
      }
    },
    paginationBulletRender: function (swiper, index, className) {
      return '<div class="' + className + '">' + 0 + (index + 1) + '</div>';
    }
  });

  var introVideo = plyr.setup('.plyr__index', {
    enabled: true,
    volume : 2,
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
  })[0];

  $('.intro__watch-btn, .video-design-header__watch-btn').on('click', function(e) {
    $('.intro__video').addClass('intro__video--open');
    $('.top').addClass('top--hide');
    $('.bottom').addClass('bottom--hide');
    $('.left').addClass('left--hide');
    $('.right').addClass('right--hide');
    $('.header-top').addClass('header-top--hide');
    $('.navbar-toggle').addClass('navbar-toggle--hide');
    $('.header-socials').addClass('header-socials--hide');
    $('.section__down-center').fadeOut();
    if ($(window).width() > 1023) {
      $.fn.fullpage.setAllowScrolling(false);
    }
    introVideo.play();
    e.stopPropagation();
  });

  $('.intro__stop, .intro__overlay').on('click', function(e) {
    introVideo.pause();
    $('.top').removeClass('top--hide');
    $('.bottom').removeClass('bottom--hide');
    $('.left').removeClass('left--hide');
    $('.right').removeClass('right--hide');
    $('.header-top').removeClass('header-top--hide');
    $('.navbar-toggle').removeClass('navbar-toggle--hide');
    $('.header-socials').removeClass('header-socials--hide');
    $('.intro__video').removeClass('intro__video--open');
    $('.section__down-center').fadeIn();
    if ($(window).width() > 1023) {
      $.fn.fullpage.setAllowScrolling(true);
    }
    e.stopPropagation();
  });

  //Scroll to projects
  $('.projects__scroll-down').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.projects__heading-mobile').offset().top
    }, 400);
  });

  $('.contacts__item--location').on('click', function(e) {
    e.preventDefault();
    $('.contacts__item--location').toggleClass('contacts__item--location--hover');
    $('.contacts__map').toggleClass('contacts__map--active');
    initContactsMap();
    e.stopPropagation();
  });

  $('.contacts__map-close, .navbar-toggle, .section__down, .section__up, .section__down-center').on('click', function(e) {
    e.preventDefault();
    $('.contacts__item--location').removeClass('contacts__item--location--hover');
    $('.contacts__map').removeClass('contacts__map--active');
  });

  $(".contacts-form-attach__input").change(function(){
    var filename = $('input[type=file]').val().split('\\').pop();
    $('#uploadFile').removeClass('hidden');
    $('.contacts-form__format').hide();
    $('#uploadFile').text('Файл ' + filename + ' прикреплен');
    $(this).css("visibility","hidden");
    $(".contacts-form-attach__label").css("visibility","hidden");
  });

  //design section hovers
  $(".design__middle").hover( function (e) {
    $('.design__link--bg').toggleClass('design__link--bg--hover', e.type === 'mouseenter');
  });

  $(".design__right").hover( function (e) {
    $('.design__middle').toggleClass('design__middle--hover', e.type === 'mouseenter');
    $('.design__link--bg').toggleClass('design__link--bg--hover', e.type === 'mouseenter');
    $('.design__link--bg2').toggleClass('design__link--bg2--hover', e.type === 'mouseenter');
  });

  //Services page
  if ($('#fullpage-services').length && $(window).width() > 1023) {
    witty();

    $('#fullpage-services').fullpage({
      controlArrows: false,
      paddingTop: '0px',
      paddingBottom: '0px',
      autoScrolling: false,
      fitToSection: false,
      bigSectionsDestination: top,

      afterLoad: function(anchorLink, index){
        $('.header-right__request').on('click', function(e) {
          $.fn.fullpage.moveTo(3);
        });
      },

      onLeave: function (index, nextIndex, direction) {
        var leavingSection = $(this);

        if(index == 1 && direction =='down'){
          $('.section__down-center').fadeOut();
          $('.section__down, .section__up').fadeIn();
        } else if (index == 2 && direction =='up'){
          $('.section__down-center').fadeIn();
          $('.section__down, .section__up').fadeOut();
        } else if (index == 3 && direction =='down'){
          $('.section__down').fadeOut();
        } else if (index == 4 && direction =='up') {
          $('.section__down').fadeIn();
        }
      }
    });
  };

  //design section hovers
  $(".services__middle").hover( function (e) {
    $('.services__link--bg').toggleClass('services__link--bg--hover', e.type === 'mouseenter');
  });

  $(".services__right").hover( function (e) {
    $('.services__middle').toggleClass('services__middle--hover', e.type === 'mouseenter');
    $('.services__link--bg').toggleClass('services__link--bg--hover', e.type === 'mouseenter');
    $('.services__link--bg2').toggleClass('services__link--bg2--hover', e.type === 'mouseenter');
  });

  //Agency page
  if ($('#fullpage-agency').length && $(window).width() > 1023) {
    witty();

    $('#fullpage-agency').fullpage({
      controlArrows: false,
      autoScrolling: false,
      fitToSection: false,
      bigSectionsDestination: top,
      anchors: ['whoweare','whatwedo','whyus','history', 'trust', 'career', 'contacts', 'footer'],

      afterLoad: function(anchorLink, index){
        $('.header-right__request').on('click', function(e) {
          $.fn.fullpage.moveTo(7);
        });
      },

      onLeave: function (index, nextIndex, direction) {

        if(index == 1 && direction =='down'){
          $('.section__down-center').fadeOut();
          $('.section__down, .section__up').fadeIn();
        } else if (index == 2 && direction =='up') {
          $('.section__down-center').fadeIn();
          $('.section__down, .section__up').fadeOut();
        } else if (index == 7 && direction =='down'){
          $('.section__down').fadeOut();
        } else if (index == 8 && direction =='up') {
          $('.section__down').fadeIn();
        }
      }
    });
  } else if ($('#fullpage-agency').length && $(window).width() < 1024) {
    $('#fullpage-agency').fullpage({
      controlArrows: false,
      autoScrolling: false,
      fitToSection: false,
      bigSectionsDestination: top,
      paddingTop: '0',
      paddingBottom: '0',
      anchors: ['whoweare','whatwedo','whyus','history', 'trust', 'career', 'contacts', 'footer'],
      afterLoad: function(anchorLink, index){
        $('.section').addClass('fp-auto-height');
      }
    });
  }

  var swiper = new Swiper('#agency-trust-slider', {
    slidesPerView: 6,
    spaceBetween: 40,
    nextButton: '.agency-trust__next',
    prevButton: '.agency-trust__prev',
    loop: true,
    autoplay: 2000,
    speed: 600,
    autoplayDisableOnInteraction: false,

    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      1439: {
        slidesPerView: 4,
        spaceBetween: 0
      }
    }
  });

  //Booklets page
  if ($('#fullpage-booklets').length && $(window).width() > 1023) {
    witty();

    $('#fullpage-booklets').fullpage({
      controlArrows: false,
      autoScrolling: false,
      fitToSection: false,
      bigSectionsDestination: top,

      afterLoad: function(anchorLink, index){
        $('.header-right__request').on('click', function(e) {
          $.fn.fullpage.moveTo(4);
        });
      },

      onLeave: function (index, nextIndex, direction) {

        if(index == 1 && direction =='down'){
          $('.section__down-center').fadeOut();
          $('.section__down, .section__up').fadeIn();
        } else if (index == 2 && direction =='up') {
          $('.section__down-center').fadeIn();
          $('.section__down, .section__up').fadeOut();
        } else if (index == 4 && direction =='down'){
          $('.section__down').fadeOut();
        } else if (index == 5 && direction =='up') {
          $('.section__down').fadeIn();
        }
      }
    });
  };

  var swiper = new Swiper('#booklets-result-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    nextButton: '.booklets-result__next',
    prevButton: '.booklets-result__prev',
    loop: false,
    onInit: function(swiper) {
      if(swiper.slides.length == 1) {
        $('.booklets-result__next').hide();
        $('.booklets-result__prev').hide();
      }
    },
    onProgress: function(e){
      if(e.isBeginning){
        $('.booklets-result__prev').hide();
      } else if(e.isEnd){
        $('.booklets-result__next').hide();
      } else {
        $('.booklets-result__prev').show();
        $('.booklets-result__next').show();
      }
    }
  });

  //Video Design page
  if ($('#fullpage-video-design').length && $(window).width() > 1023) {
    witty();

    $('#fullpage-video-design').fullpage({
      controlArrows: false,
      autoScrolling: false,
      fitToSection: false,
      bigSectionsDestination: top,

      afterLoad: function(anchorLink, index){
        $('.header-right__request').on('click', function(e) {
          $.fn.fullpage.moveTo(11);
        });
      },

      onLeave: function (index, nextIndex, direction) {

        if(index == 1 && direction =='down'){
          $('.section__down-center').fadeOut();
          $('.section__down, .section__up').fadeIn();
        } else if (index == 2 && direction =='up') {
          $('.section__down-center').fadeIn();
          $('.section__down, .section__up').fadeOut();
        } else if (index == 11 && direction =='down'){
          $('.section__down').fadeOut();
        } else if (index == 12 && direction =='up') {
          $('.section__down').fadeIn();
        }
      }
    });
  };

  var swiper = new Swiper('#video-design-slider', {
    nextButton: '.video-design-slider__pagination-arrow',
    prevButton: '.video-design-slider__pagination-arrow-prev',
    pagination: '.video-design-slider__pagination',
    paginationClickable: true,
    bulletClass: 'video-design-slider__page',
    bulletActiveClass: 'video-design-slider__page--active',
    autoplay: 4000,
    speed: 1000,
    loop: true,
    autoplayDisableOnInteraction: false,
    paginationBulletRender: function (swiper, index, className) {
      return '<div class="' + className + '">' + 0 + (index + 1) + '</div>';
    }
  });

  var swiper = new Swiper('#video-design-result-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    nextButton: '.video-design-result__next',
    prevButton: '.video-design-result__prev',
    loop: false,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1439: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    onInit: function(swiper) {
      if(swiper.slides.length == 1) {
        $('.video-design-result__next').hide();
        $('.video-design-result__prev').hide();
      } else if (swiper.slides.length < 4 && $(window).width() > 1023) {
        $('.video-design-result__next').hide();
        $('.video-design-result__prev').hide();
      }
    },
    onProgress: function(e){
      if(e.isBeginning){
        $('.video-design-result__prev').hide();
      } else if(e.isEnd){
        $('.video-design-result__next').hide();
      } else {
        $('.video-design-result__prev').show();
        $('.video-design-result__next').show();
      }
    }
  });

  var sellingVideo = plyr.setup('.plyr__01, .plyr__02', {
    enabled: true,
    volume: 2,
    controls: ['play-large', 'play', 'progress', 'mute', 'volume', 'fullscreen']
  });

  $('.video-selling-result__next, .video-selling-result__prev').on('click', function(e) {
    plyr.get().forEach(function(instance) {
      instance.pause();
    });
  });

  var designVideo = plyr.setup('.plyr__video', {
    enabled: true,
    volume: 2,
    controls: ['play-large', 'play', 'progress', 'mute', 'volume']
  });

  //Video selling page
  if ($('#fullpage-video-selling').length && $(window).width() > 1023) {
    witty();

    $('#fullpage-video-selling').fullpage({
      controlArrows: false,
      autoScrolling: false,
      fitToSection: false,
      bigSectionsDestination: top,

      afterLoad: function(anchorLink, index){
        $('.header-right__request').on('click', function(e) {
          $.fn.fullpage.moveTo(4);
        });
      },

      onLeave: function (index, nextIndex, direction) {

        if(index == 1 && direction =='down'){
          $('.section__down-center').fadeOut();
          $('.section__down, .section__up').fadeIn();
        } else if (index == 2 && direction =='up') {
          $('.section__down-center').fadeIn();
          $('.section__down, .section__up').fadeOut();
        } else if (index == 4 && direction =='down'){
          $('.section__down').fadeOut();
        } else if (index == 5 && direction =='up') {
          $('.section__down').fadeIn();
        }
      }
    });
  };

  //Presentations page
  if ($('#fullpage-presentations').length && $(window).width() > 1023) {
    witty();

    $('#fullpage-presentations').fullpage({
      controlArrows: false,
      autoScrolling: false,
      fitToSection: false,
      bigSectionsDestination: top,

      afterLoad: function(anchorLink, index){
        $('.header-right__request').on('click', function(e) {
          $.fn.fullpage.moveTo(11);
        });
      },

      onLeave: function (index, nextIndex, direction) {

        if(index == 1 && direction =='down'){
          $('.section__down-center').fadeOut();
          $('.section__down, .section__up').fadeIn();
        } else if (index == 2 && direction =='up') {
          $('.section__down-center').fadeIn();
          $('.section__down, .section__up').fadeOut();
        } else if (index == 11 && direction =='down'){
          $('.section__down').fadeOut();
        } else if (index == 12 && direction =='up') {
          $('.section__down').fadeIn();
        }
      }
    });
  };


  var swiper = new Swiper('#presentations-slider', {
    nextButton: '.presentations-slider__pagination-arrow',
    prevButton: '.presentations-slider__pagination-arrow-prev',
    pagination: '.presentations-slider__pagination',
    paginationClickable: true,
    bulletClass: 'presentations-slider__page',
    bulletActiveClass: 'presentations-slider__page--active',
    autoplay: 4000,
    speed: 1000,
    loop: true,
    autoplayDisableOnInteraction: false,
    paginationBulletRender: function (swiper, index, className) {
      return '<div class="' + className + '">' + 0 + (index + 1) + '</div>';
    }
  });

  //Contacts page
  if ($('#fullpage-contacts').length && $(window).width() > 1023) {
    witty();

    $('#fullpage-contacts').fullpage({
      autoScrolling: false,
      fitToSection: false,
      bigSectionsDestination: top,

      afterLoad: function(anchorLink, index){
        $('.header-right__request').on('click', function(e) {
          e.preventDefault();
          $.fn.fullpage.moveTo(2);
        });
      },

      onLeave: function (index, nextIndex, direction) {

        if(index == 1 && direction =='down'){
          $('.section__down-center').fadeOut();
          $('.section__down, .section__up').fadeIn();
        } else if (index == 2 && direction =='up') {
          $('.section__down-center').fadeIn();
          $('.section__down, .section__up').fadeOut();
        } else if (index == 2 && direction =='down'){
          $('.section__down').fadeOut();
        } else if (index == 3 && direction =='up') {
          $('.section__down').fadeIn();
        }
      }
    });
  };

  var swiper = new Swiper('#video-selling-result-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    nextButton: '.video-selling-result__next',
    prevButton: '.video-selling-result__prev',
    loop: false,
    noSwiping: true,
    noSwipingClass: 'no-swiping',
    breakpoints: {
      1023: {
        noSwiping: false
      }
    },

    onInit: function(swiper) {
      if(swiper.slides.length == 1) {
        $('.video-selling-result__next').hide();
        $('.video-selling-result__prev').hide();
      }
    },
    onProgress: function(e){
      if(e.isBeginning){
        $('.video-selling-result__prev').hide();
        $('.video-selling-result__next').show();
      } else if(e.isEnd){
        $('.video-selling-result__next').hide();
        $('.video-selling-result__prev').show();
      } else {
        $('.video-selling-result__prev').show();
        $('.video-selling-result__next').show();
      }
    }
  });

  //Project page
  if ($('#fullpage-project').length && $(window).width() > 1023) {
    witty();

    $('#fullpage-project').fullpage({
      controlArrows: false,
      autoScrolling: false,
      fitToSection: false,
      bigSectionsDestination: top,

      afterLoad: function(anchorLink, index){
        $('.header-right__request').on('click', function(e) {
          $.fn.fullpage.moveTo(6);
        });
      },

      onLeave: function (index, nextIndex, direction) {

        if(index == 1 && direction =='down'){
          $('.section__down-center').fadeOut();
          $('.section__down, .section__up').fadeIn();
        } else if (index == 2 && direction =='up') {
          $('.section__down-center').fadeIn();
          $('.section__down, .section__up').fadeOut();
        } else if (index == 6 && direction =='down'){
          $('.section__down').fadeOut();
        } else if (index == 7 && direction =='up') {
          $('.section__down').fadeIn();
        }
      }
    });
  };

  var swiper = new Swiper('#project-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    nextButton: '.project-slider__next-small',
    prevButton: '.project-slider__prev-small',
    loop: false,
    onInit: function(swiper) {
      if(swiper.slides.length == 1) {
        $('.project-slider__next-small').hide();
        $('.project-slider__prev-small').hide();
      }
    },
    onProgress: function(e){
      if(e.isBeginning){
        $('.project-slider__prev-small').hide();
      } else if(e.isEnd){
        $('.project-slider__next-small').hide();
      } else {
        $('.project-slider__prev-small').show();
        $('.project-slider__next-small').show();
      }
    }
  });

  function scrollUp() {
    var vheight = $(window).height();
    $('html, body').animate({
      scrollTop: (Math.ceil($(window).scrollTop() / vheight)-1) * vheight
    }, 500);
  };


  function scrollDown() {
    var vheight = $(window).height();
    $('html, body').animate({
      scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
    }, 500);
  };

  $(".project-about__blockquote").niceScroll({
    cursorcolor: "#ffd92d",
    cursorwidth: "4px",
    cursorborder: "1px solid #ffd92d",
    autohidemode: false
  });

  //Projects page
  if ($('#fullpage-projects').length && $(window).width() > 1023) {
    $('.footer-nav__link--agency').click(function(e){
      e.preventDefault();
    });

    $('.section-projects__down-center, .section-projects__down').click(function(e){
      scrollDown();
      e.preventDefault();
    });

    $('.section-projects__up').click(function(e){
      scrollUp();
      e.preventDefault();
    });

    var $win = $(window);
    var winH = $win.height();

    $win.on("scroll", function () {
      if ($(this).scrollTop() > winH - 10) {
        $('.section-projects__down-center').hide();
        $('.section-projects__down').show();
        $('.section-projects__up').show();
      } else {
        $('.section-projects__down-center').show();
        $('.section-projects__down').hide();
        $('.section-projects__up').hide();
      }

      if($(this).scrollTop() + winH > $(document).height() - 170) {
        $('.contacts').addClass('contacts--scale');
        $('.top').addClass('top--hide');
        $('.bottom').addClass('bottom--hide');
        $('.left').addClass('left--hide');
        $('.right').addClass('right--hide');
        $('.header-top').addClass('header-top--hide');
        $('.navbar-toggle').addClass('navbar-toggle--hide');
        $('.header-socials').addClass('header-socials--hide');
        $('.section-projects__down').hide();
        $('.projects-filters').removeClass('projects-filters--fixed');
        $('.projects-filters__filter-btn--desktop').addClass('projects-filters__filter-btn--hide');
      } else if ($(this).scrollTop() <= 100) {
        $('.projects-filters__filter-btn--desktop').addClass('projects-filters__filter-btn--hide');
      } else {
        $('.contacts').removeClass('contacts--scale');
        $('.top').removeClass('top--hide');
        $('.bottom').removeClass('bottom--hide');
        $('.left').removeClass('left--hide');
        $('.right').removeClass('right--hide');
        $('.header-top').removeClass('header-top--hide');
        $('.navbar-toggle').removeClass('navbar-toggle--hide');
        $('.header-socials').removeClass('header-socials--hide');
        $('.projects-filters__filter-btn--desktop').removeClass('projects-filters__filter-btn--hide');
      }
    }).on("resize", function(){
      winH = $(this).height();
    });

    $('#fullpage-projects').fullpage({
      controlArrows: false,
      autoScrolling: false,
      fitToSection: false,
      lazyLoading: false,
      bigSectionsDestination: top,

      afterLoad: function(anchorLink, index){
        $('.header-right__request').on('click', function(e) {
          $.fn.fullpage.moveTo(2);
        });
      }
    });
  };

  $('.projects-filters__filter-btn--mobile').on('click', function(e) {
    e.preventDefault();
    $('.projects-filters__btns').toggleClass('projects-filters__btns--on');
  });

  $('.projects-filters__filter-btn--desktop').on('click', function(e) {
    e.preventDefault();
    $('.projects-filters').toggleClass('projects-filters--fixed');
  });

  $('.projects-filters__btn').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('projects-filters__btn--active')) {
      $('.projects-filters__btn').removeClass('projects-filters__btn--active');
      $('.projects-filters__list-wrapper').removeClass('projects-filters__list-wrapper--on');
    } else {
      $('.projects-filters__btn').removeClass('projects-filters__btn--active');
      $('.projects-filters__list-wrapper').removeClass('projects-filters__list-wrapper--on');
      $(this).addClass('projects-filters__btn--active');
      $(this).next('.projects-filters__list-wrapper').toggleClass('projects-filters__list-wrapper--on');
    }
  });

  $('.projects-filters__link').on('click', function(e) {
    // e.preventDefault();
    var text = $(this).text();
    $(this).closest('.projects-filters__block').find('.projects-filters__btn').addClass('projects-filters__btn--chosen').text(text);
    $('.projects-filters__reset-btn').fadeIn();
    $('.projects-filters__btn').removeClass('projects-filters__btn--active');
    $('.projects-filters__list-wrapper').removeClass('projects-filters__list-wrapper--on');
  });

  $('.projects-grid__load-more').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('projects-grid__load-more--spin');
    $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function() {
        $(this).removeClass('projects-grid__load-more--spin');
      });
  });

  $('.projects-grid__img').lazy({
    effect: 'fadeIn',
    effectTime: 500,
    // visibleOnly: true,
    enableThrottle: true,
    throttle: 250
  });

  if ($(window).width() < 1023) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  };

  $('.scroll-to-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop : 0}, 800);
  });

  $('.contacts__callme-form').submit(function(e) {

    $.ajax({
      url: this.action,
      type: this.method,
      data: $(this).serialize(),
      success: function(responseData, textStatus, jqXHR) {
        $('.contacts__callme-form').addClass('hidden');
        $('.contacts__callme-success').removeClass('hidden');
      }
    });
    e.preventDefault();
  });

  $('.menu__callme-form').submit(function(e) {

    $.ajax({
      url: this.action,
      type: this.method,
      data: $(this).serialize(),
      success: function(responseData, textStatus, jqXHR) {
        $('.menu__callme-form').addClass('hidden');
        $('.menu__callme-success').removeClass('hidden');
      }
    });
    e.preventDefault();
  });

  function initMenuMap() {
    var mapOptions = {
      zoom: 15,
      scrollwheel: false,
      fullscreenControl: false,
      mapTypeControl:false,
      streetViewControl:false,
      center: new google.maps.LatLng(50.4145459,30.422009),

      styles:
        [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType": "all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType": "road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#fdeb06"},{"visibility":"on"}]}]
    };

    var mapElement = document.getElementById('menu-map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(50.4145459,30.422009),
      map: map,
      title: 'Chaos',
      icon: 'images/map-marker.svg',
      animation: google.maps.Animation.DROP
    });
  }

  function initContactsMap() {
    var mapOptions = {
      zoom: 15,
      scrollwheel: false,
      fullscreenControl: false,
      mapTypeControl:false,
      streetViewControl:false,
      center: new google.maps.LatLng(50.4145459,30.422009),

      styles:
        [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType": "all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType": "road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#fdeb06"},{"visibility":"on"}]}]
    };

    var mapElement = document.getElementById('contacts-map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(50.4145459,30.422009),
      map: map,
      title: 'Chaos',
      icon: 'images/map-marker.svg',
      animation: google.maps.Animation.DROP
    });
  }

  $(window).on('load', function() {
    $('#menu-map').length && initMenuMap();
    $('#contacts-map').length && initContactsMap();
  });

  //clap
  $(".project-about__blockquote--clap").niceScroll({
    cursorcolor: "#1abecb",
    cursorwidth: "4px",
    cursorborder: "1px solid #1abecb",
    autohidemode: false
  });

  var clapVideo = plyr.setup('.plyr__clap', {
    enabled: true,
    volume: 2,
    controls: []
  });

  if ($('#fullpage-clap').length && $(window).width() > 1023) {
    witty();

    $('#fullpage-clap').fullpage({
      controlArrows: false,
      autoScrolling: false,
      fitToSection: false,
      bigSectionsDestination: top,

      onLeave: function (index, nextIndex, direction) {

        if(index == 1 && direction =='down'){
          $('.section__down-center').fadeOut();
          $('.section__down, .section__up').fadeIn();
        } else if (index == 2 && direction =='up') {
          $('.section__down-center').fadeIn();
          $('.section__down, .section__up').fadeOut();
        } else if (index == 7 && direction =='down'){
          $('.section__down').fadeOut();
        } else if (index == 8 && direction =='up') {
          $('.section__down').fadeIn();
        }
      }
    });
  };

  var swiper = new Swiper('#clap-slider', {
    slidesPerView: 4,
    spaceBetween: 0,
    nextButton: '.clap-slider__next',
    prevButton: '.clap-slider__prev',
    loop: true,

    breakpoints: {
      400: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 0
      },
    }
  });
  //clap end
});
