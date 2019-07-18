$(function () {
  var e = $('.main-header__hamburger-btn');
  $('.main-header__navigation');
  e.on('mousedown', function () {
    return (
      $(this).toggleClass('main-header__hamburger-btn--to-close'),
      $('html').toggleClass('lock'),
      $('.page').toggleClass('js--open'),
      $('.main-header').toggleClass('js--open'),
      false;
    )
  })
  var o;

  var n = 0;

  var a = 0;

  var s = $('.main-header').outerHeight()
  $(window).scroll(function (e) {
    o = true;
    $(this).scrollTop() >= s ? $('.main-header__logo-link').css({ opacity: 0}) : $('.main-header__logo-link').css({ opacity: 1});
  })
  setInterval(function () {
    o &&
      (!(function () {
          var e = $(this).scrollTop()
          Math.abs(n - e) <= a ||
            (e > n ?
              $('.main-header')
              .removeClass('scrolling-down')
              .addClass('scrolling-up') :
              e + $(window).height() < $(document).height() &&
              $('.main-header')
              .removeClass('scrolling-up')
              .addClass('scrolling-down'),
              (n = e))
        })(),
        (o = false))
  }, 250)
  $(window).on('resize', function () {
    $(this).width() > 992 &&
      ($('html').removeClass('lock'),
        $('.page').removeClass('js--open'),
        $('.main-header').removeClass('js--open'),
        e.removeClass('main-header__hamburger-btn--to-close'))
  })
  $('.main-footer__navigation-title').on('mousedown', function () {
    return (
      $(this)
      .parents('.main-footer__navigation-section')
      .toggleClass('main-footer__navigation-section--show'),
      false
    )
  })
  $('#footer__year').html(new Date().getFullYear())
})
