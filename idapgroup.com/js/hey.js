// Lotttie animation
var animationPhoneData = {
  container: document.querySelector('.hey-page__animated-phone'),
  path: 'JSON/hey-phone.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  rendererSettings: {
    progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
    hideOnTransparent: true // Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
  }
}
bodymovin.loadAnimation(animationPhoneData)

// Progressbar
var heyAccentFontColor = '#ffb363'

var heyMutedFontColor = '#efefef'

var progressBarId = 'hey-page__how-created-progress'

var progressAccentFontColorClass =
  'hey-page__how-created-progress-text-accent-letter'

var progressActiveBottomFontColorClass =
  'hey-page__how-created-progress-bottom-text-active'

var progressSpot2 = 0.29

var progressSpot3 = 0.42

var progressSpot4 = 0.57

var progressSpot5 = 0.71

var progressSpot6 = 0.86

var progressSpot7 = 1

var bar = new ProgressBar.Line('#' + progressBarId, {
  color: heyAccentFontColor,
  trailColor: heyMutedFontColor,
  strokeWidth: 0.5,
  duration: 500,
  easing: 'easeInOut'
})
bar.animate(progressSpot2)

// Animating progressbar with waypoints
var progressWaypoint3 = new Waypoint({
  element: document.getElementById(progressBarId),
  handler: function (direction) {
    if (direction === 'down') {
      $('#hey-page__how-created-progress-text-accent-letter-fourth').addClass(
        progressAccentFontColorClass
      )
      $('#hey-page__how-created-progress-final-circle').css('left', '42%')
      $('#hey-page__how-created-progress-bottom-text-second').addClass(
        progressActiveBottomFontColorClass
      )
      bar.animate(progressSpot3)
    } else {
      $(
        '#hey-page__how-created-progress-text-accent-letter-fourth'
      ).removeClass(progressAccentFontColorClass)
      $('#hey-page__how-created-progress-final-circle').css('left', '29%')
      $('#hey-page__how-created-progress-bottom-text-second').removeClass(
        progressActiveBottomFontColorClass
      )
      bar.animate(progressSpot2)
    }
  },
  offset: '70%'
})
var progressWaypoint4 = new Waypoint({
  element: document.getElementById(progressBarId),
  handler: function (direction) {
    if (direction === 'down') {
      $('#hey-page__how-created-progress-text-accent-letter-fifth').addClass(
        progressAccentFontColorClass
      )
      $('#hey-page__how-created-progress-final-circle').css('left', '57%')
      $('#hey-page__how-created-progress-bottom-text-third').addClass(
        progressActiveBottomFontColorClass
      )
      bar.animate(progressSpot4)
    } else {
      $('#hey-page__how-created-progress-text-accent-letter-fifth').removeClass(
        progressAccentFontColorClass
      )
      $('#hey-page__how-created-progress-final-circle').css('left', '42%')
      $('#hey-page__how-created-progress-bottom-text-third').removeClass(
        progressActiveBottomFontColorClass
      )
      bar.animate(progressSpot3)
    }
  },
  offset: '60%'
})
var progressWaypoint5 = new Waypoint({
  element: document.getElementById(progressBarId),
  handler: function (direction) {
    if (direction === 'down') {
      $('#hey-page__how-created-progress-text-accent-letter-sixth').addClass(
        progressAccentFontColorClass
      )
      $('#hey-page__how-created-progress-final-circle').css('left', '71%')
      $('#hey-page__how-created-progress-bottom-text-fourth').addClass(
        progressActiveBottomFontColorClass
      )
      bar.animate(progressSpot5)
    } else {
      $('#hey-page__how-created-progress-text-accent-letter-sixth').removeClass(
        progressAccentFontColorClass
      )
      $('#hey-page__how-created-progress-final-circle').css('left', '57%')
      $('#hey-page__how-created-progress-bottom-text-fourth').removeClass(
        progressActiveBottomFontColorClass
      )
      bar.animate(progressSpot4)
    }
  },
  offset: '50%'
})
var progressWaypoint6 = new Waypoint({
  element: document.getElementById(progressBarId),
  handler: function (direction) {
    if (direction === 'down') {
      $('#hey-page__how-created-progress-text-accent-letter-seventh').addClass(
        progressAccentFontColorClass
      )
      $('#hey-page__how-created-progress-final-circle').css('left', '86%')
      $('#hey-page__how-created-progress-bottom-text-fifth').addClass(
        progressActiveBottomFontColorClass
      )
      bar.animate(progressSpot6)
    } else {
      $(
        '#hey-page__how-created-progress-text-accent-letter-seventh'
      ).removeClass(progressAccentFontColorClass)
      $('#hey-page__how-created-progress-final-circle').css('left', '71%')
      $('#hey-page__how-created-progress-bottom-text-fifth').removeClass(
        progressActiveBottomFontColorClass
      )
      bar.animate(progressSpot5)
    }
  },
  offset: '40%'
})
var progressWaypoint7 = new Waypoint({
  element: document.getElementById(progressBarId),
  handler: function (direction) {
    if (direction === 'down') {
      $('#hey-page__how-created-progress-text-accent-letter-eight').addClass(
        progressAccentFontColorClass
      )
      $('#hey-page__how-created-progress-final-circle').css('left', '100%')
      $('#hey-page__how-created-progress-bottom-text-sixth').addClass(
        progressActiveBottomFontColorClass
      )
      bar.animate(progressSpot7)
    } else {
      $('#hey-page__how-created-progress-text-accent-letter-eight').removeClass(
        progressAccentFontColorClass
      )
      $('#hey-page__how-created-progress-final-circle').css('left', '86%')
      $('#hey-page__how-created-progress-bottom-text-sixth').removeClass(
        progressActiveBottomFontColorClass
      )
      bar.animate(progressSpot6)
    }
  },
  offset: '30%'
})
