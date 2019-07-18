$(function () {
  var o = Macy({ container: '.portfolio-page__folio', columns: 2 })
  $(window).on('load resize', function (i) {
    $(window).width() >= 768
      ? ($(window).bind('scroll touchmove', function (o) {
        !(function () {
          var o = $(window).scrollTop()
          var i = $('.portfolio-page__folio-item')
          $('.portfolio-page__folio-item:odd').css(
            'margin-top',
            (0 - 0.1 * o) / 10 + 'rem'
          )
          $('.portfolio-page__folio-item:even').css(
            'margin-top',
            (0 - 0.1 * o) / 10 + 'rem'
          )
          i.each(function (i) {
            var n = $(this).find(
              '.portfolio-page__folio-item-caption-wrap'
            )
            var t = n.outerHeight()
            n.css('bottom', o * (t / 4e3) + 'rem')
          })
        })()
      }),
      o.reInit())
      : ($(window).unbind('scroll touchmove'), o.remove())
  })
})
