// Vinyl slides
var vinylBtn = $('.odjo-what__interactive-block')
var vinylSlide = $('.odjo-what__interactive-image')

vinylBtn.on('click', function () {
  var thisData = $(this).data('slide-btn')
  var thisDataSlide = $(
    '.odjo-what__interactive-image[data-slide="' + thisData + '"]'
  )

  if (thisDataSlide) {
    vinylSlide.removeClass('odjo-what__interactive-image--active')
    thisDataSlide.addClass('odjo-what__interactive-image--active')
    vinylBtn.removeClass('odjo-what__interactive-block--active')
    $(this).addClass('odjo-what__interactive-block--active')
  }
})

// Player
var video = document.querySelector('.odjo-video__player')

var playButton = document.querySelector('.odjo-video__play-btn')

var timeline = document.querySelector('.odjo-video__timeline')

var timelineProgress = document.querySelector('.odjo-video__timeline-progress')

var drag = document.querySelector('.odjo-video__timeline-drag')

var muteBtn = document.querySelector('.odjo-video__musictoggle-btn')

// Toggle Play / Pause
playButton.addEventListener('click', togglePlay, false)
video.addEventListener('click', togglePlay, false)
muteBtn.addEventListener('click', toggleMute, false)

function togglePlay () {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function toggleMute () {
  if (video.muted) {
    video.muted = false
    $('.odjo-video__musictoggle-btn').removeClass(
      'odjo-video__musictoggle-btn--mute'
    )
  } else {
    video.muted = true
    $('.odjo-video__musictoggle-btn').addClass(
      'odjo-video__musictoggle-btn--mute'
    )
  }
}

// on interaction with video controls
video.onplay = function () {
  TweenMax.ticker.addEventListener('tick', vidUpdate)
  $('.odjo-video__wrap').addClass('odjo-video__wrap--play')
}
video.onpause = function () {
  TweenMax.ticker.removeEventListener('tick', vidUpdate)
  $('.odjo-video__wrap').removeClass('odjo-video__wrap--play')
}
video.onended = function () {
  TweenMax.ticker.removeEventListener('tick', vidUpdate)
}

// Sync the timeline with the video duration
function vidUpdate () {
  TweenMax.set(timelineProgress, {
    scaleX: (video.currentTime / video.duration).toFixed(5)
  })
  TweenMax.set(drag, {
    x: ((video.currentTime / video.duration) * timeline.offsetWidth).toFixed(4)
  })
}

// Make the timeline draggable
Draggable.create(drag, {
  type: 'x',
  trigger: timeline,
  bounds: timeline,
  cursor: 'pointer',
  onPress: function (e) {
    video.currentTime = (this.x / this.maxX) * video.duration
    TweenMax.set(this.target, {
      x: this.pointerX - timeline.getBoundingClientRect().left
    })
    this.update()
    var progress = this.x / timeline.offsetWidth
    TweenMax.set(timelineProgress, {
      scaleX: progress
    })
  },
  onClick: function () {
    video.currentTime = (this.x / this.maxX) * video.duration
    var progress = this.x / timeline.offsetWidth
    TweenMax.set(timelineProgress, {
      scaleX: progress
    })
  },
  onDrag: function () {
    video.currentTime = (this.x / this.maxX) * video.duration
    var progress = this.x / timeline.offsetWidth
    TweenMax.set(timelineProgress, {
      scaleX: progress
    })
  },
  onRelease: function (e) {
    e.preventDefault()
  }
})

var equalizerLines = $('.odjo-summary__equlizer-line')

setInterval(function () {
  $.each(equalizerLines, function (index) {
    var rand = 0 - 0.5 + Math.random() * (100 - 0 + 1)
    rand = Math.round(rand)
    $(this).css({
      height: rand + '%'
    })
  })
}, 50)
