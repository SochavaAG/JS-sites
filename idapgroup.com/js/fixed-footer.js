$(function () {
  var e = $('.fixed-footer__page')

  var o = $('.fixed-footer')

  var t = $('.fixed-footer__fake-footer')

  var r = $('.fixed-footer__content')
  $(window)
    .on('resize', function () {
      return (
        $(this).outerHeight() >= r.outerHeight()
          ? o.addClass('fixed-footer--closed')
          : $(this).width() >= 1024 &&
            (o.removeClass('fixed-footer--closed'),
            t.outerHeight(r.outerHeight())),
        !1
      )
    })
    .resize()
  $(window).on('scroll', function () {
    return (
      $(this).scrollTop() >= e.outerHeight()
        ? (o.addClass('fixed-footer--static'),
        r.addClass('fixed-footer__content--scrolled'))
        : (o.removeClass('fixed-footer--static'),
        r.removeClass('fixed-footer__content--scrolled')),
      !1
    )
  })
})
