var video = document.querySelector('.doc-video')

var playButton = document.querySelector('.doc-video__play-btn')

var timeline = document.querySelector('.doc-video__timeline')

var timelineProgress = document.querySelector('.doc-video__timeline-progress')

var drag = document.querySelector('.doc-video__timeline-drag')

var muteBtn = document.querySelector('.doc-video__musictoggle-btn')

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
    $('.doc-video__musictoggle-btn').removeClass(
      'doc-video__musictoggle-btn--mute'
    )
  } else {
    video.muted = true
    $('.doc-video__musictoggle-btn').addClass(
      'doc-video__musictoggle-btn--mute'
    )
  }
}

// on interaction with video controls
video.onplay = function () {
  TweenMax.ticker.addEventListener('tick', vidUpdate)
  $('.doc-video__wrap').addClass('doc-video__wrap--play')
}
video.onpause = function () {
  TweenMax.ticker.removeEventListener('tick', vidUpdate)
  $('.doc-video__wrap').removeClass('doc-video__wrap--play')
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
