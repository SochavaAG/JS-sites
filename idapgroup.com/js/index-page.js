$(function () {
  $('.index-folio__block').tilt({
    maxTilt: 10,
    perspective: 1e3,
    speed: 600,
    scale: 1.05
  })
})
var pathToJson = 'JSON/heading-animation.json'
bodymovin.loadAnimation({
  container: document.querySelector('.index-heading__animation-content-block'),
  path: pathToJson,
  renderer: 'svg',
  loop: !0,
  autoplay: !0
})

$(function () {
  var arrowBtn = $('.index-heading__arrow-wrap')
  var scrollSection = $('.index-brands__section')

  arrowBtn.on('mousedown', function (e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: scrollSection.offset().top
      },
      1000
    )
  })
})
