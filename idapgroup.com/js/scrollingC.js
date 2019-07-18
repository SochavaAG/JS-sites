$(function () {
  var o = $('[data-scrolling=true]')

  var t = 'js-scrolled'

  var e = $(window)

  var r = (e.height() / 100) * 10
  e.on('load scroll touchmove resize', function () {
    var i = e.height() - r

    var l = e.scrollTop()

    var a = l + i
    $.each(o, function () {
      var o = $(this)

      var e = o.outerHeight()

      var r = o.offset().top
      r + e >= l && r <= a && o.addClass(t)
    })
  })
  e.trigger('load')
})
