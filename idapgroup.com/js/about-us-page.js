$(function () {
  function t () {
    e.is(':visible') &&
      e.length > 0 &&
      (e.each(function (t) {
        var s = $(this).outerHeight()

        var e = $(this).outerWidth()

        var l = (t * (s + 2 * i)) / 2
        $(this).css({
          position: 'absolute',
          transform: 'translateY(' + l / c + 'rem) translateZ(0)'
        })
        t % 2 !== 0
          ? ($(this).css({ left: (e + i) / c + 'rem' }), r++, (o += s))
          : ($(this).css({ left: '0rem' }), n++, (a += s))
      }),
      (a += (n + 1) * (2 * i) - i),
      (o += (r + 1) * (2 * i) - i))
  }
  function s () {
    e.is(':visible') &&
      e.length > 0 &&
      e.each(function (t) {
        parseInt($(this).css('left'))
        var s = parseFloat(
          $(this)
            .css('transform')
            .split(/[()]/)[1]
            .split(',')[5]
        )

        var e = $(this).outerHeight()

        var n = a - e - 3 * i
        s <= -1 * (e + 2 * i)
          ? $(this).css({
            transform: 'translateY(' + n / c + 'rem) translateZ(0)'
          })
          : $(this).css({
            transform: 'translateY(' + (s - l / 2) / c + 'rem) translateZ(0)'
          })
      })
    requestAnimationFrame(s)
  }
  $('.about-foundation__carousel')
  var e = $('.about-foundation__carousel-item')

  var i = parseInt(e.css('margin'))

  var n = 0

  var a = 0

  var r = 0

  var o = 0

  var l = 0.7

  var c = 10
  $(window).on('resize', function () {
    t()
  })
  t()
  s()
})
