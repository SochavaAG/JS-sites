$(function () {
  var resultButton = $('.results-anchor__btn')
  var page = $('html, body')

  resultButton.on('click', function () {
    var selfAttr = $(this).attr('data-go-btn')
    var attrSection = $('.abfp-result__image-wrap[data-go="' + selfAttr + '"]')

    if (attrSection.length !== 0) {
      page.animate(
        {
          scrollTop: attrSection.offset().top
        },
        1000,
        function () {
          page.off(
            'scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove'
          )
        }
      )
    }
    page.on(
      'scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove',
      function () {
        page.stop()
      }
    )

    return false
  })
})
