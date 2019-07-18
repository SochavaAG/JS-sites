function onYouTubeIframeAPIReady() {
  if (jQuery("#muteYouTubeVideoPlayer").length>0) {
    var iframe = jQuery("#muteYouTubeVideoPlayer");
    var player;
    player = new YT.Player('muteYouTubeVideoPlayer', {
      videoId: 'jKKKZVjha74', // YouTube Video ID
      // videoId: 'HKO741hUWq0', // YouTube Video ID
      
      width: 420,               // Player width (in px)
      height: 236,              // Player height (in px)
      playerVars: {
        modestbranding: 1,  // Hide the Youtube Logo
        autoplay: 1,        // Auto-play the video on load
        controls: 0,        // Show pause/play buttons in player
        
        fs: 0,              // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        autohide: 0         // Hide video controls when playing

      },
      events: {
        onReady: function(e) {
          e.target.mute();
        }
      }
    });

    jQuery(".live-news__inside__control__icons__item.fullscreen").click();
    jQuery(".live-news__inside__control__icons__item.record").click(function(){
      // player.playVideo();
      player.pauseVideo();
    });
  }
}

function check_position_live_news() {
  if (jQuery(".live-news__wrapper").length>0) {
    if (!after768() && device.mobile()) {

      if (1==1) {
        if (jQuery(".live-news__wrapper").css("display") != "none" && !jQuery(".live-news__wrapper").hasClass("busy")) {
          if ( (jQuery(window).scrollTop() ) >= ( jQuery(".live-news__wrapper").offset().top ) + jQuery(".live-news__wrapper").height() ) {
            jQuery(".live-news__wrapper").height( Number(jQuery(".live-news__wrapper").height() ) );
            jQuery(".live-news__wrapper").addClass("scroll");
          } else {
            jQuery(".live-news__wrapper").removeClass("scroll");
            jQuery(".live-news__wrapper").height("auto");
          }
        } else {
          if (1==1) {
            if ( (jQuery(window).scrollTop() ) >= ( jQuery(".toggle-LiveNews").offset().top ) + jQuery(".toggle-LiveNews").height() ) {
              jQuery(".live-news__wrapper").addClass("scroll");
            } else {
              jQuery(".live-news__wrapper").removeClass("scroll").removeClass("busy");
              jQuery(".live-news__wrapper").addClass("hide-block");
              jQuery(".live-news__wrapper").height("auto");
            }
          }
        }
      }

    } else {
      if ( (jQuery(window).scrollTop() ) + (jQuery(".top-panel-inside__bottom").height()) >= Number( jQuery(".live-news__wrapper").offset().top ) + Number( jQuery(".live-news__wrapper").height() ) + 37 ) {
        jQuery(".live-news__wrapper").height(jQuery(".live-news__wrapper").height());
        jQuery(".live-news__wrapper").addClass("scroll");
        setTimeout(function(){
          if ( (jQuery(window).scrollTop() )  >= Number( jQuery(".live-news__wrapper").offset().top ) + Number( jQuery(".live-news__wrapper").height() ) + 37 ) {
            jQuery(".live-news__wrapper").addClass("show_animate");
          }
        }, 200);
      } else {
        jQuery(".live-news__wrapper").removeClass("show_animate");
        setTimeout(function(){
          if ( (jQuery(window).scrollTop() )  >= Number( jQuery(".live-news__wrapper").offset().top ) + Number( jQuery(".live-news__wrapper").height() ) + 37 ) {
          } else {
            jQuery(".live-news__wrapper").removeClass("scroll");
            jQuery(".live-news__wrapper").height("auto");
          }
        }, 200);
      }
    }
  }
}

jQuery(window).on('load', function(){

  // Скрывает плеер
  jQuery(".live-news__close").click(function() {
    jQuery(".live-news__wrapper").addClass("hide-block");
    localStorage.setItem('player.live.hide', true);
    // ga('send', 'event', 'Мини плеер ', 'Сворачивание плеера (действие пользователя)', document.URL);
    yaCounter44834683.reachGoal('9');
  });

  // Скрыть плеер, если его скрывали до этого
  if (localStorage.getItem('player.live.hide') == 'true') {
      jQuery(".live-news__wrapper").addClass("hide-block");
      // ga('send', 'event', 'Мини плеер ', 'Плеер свернут (при загрузке страницы)', document.URL);
      yaCounter44834683.reachGoal('6');
  }

  // Ставит live на паузу
  jQuery('.live-news__wrapper').on('click', '.live-news__close', function () {
      //jQuery('.iz_player_mini').contents().find('video')[0].pause();
      localStorage.setItem('player.live.current.play', false);
      // ga('send', 'event', 'Мини плеер ', 'Остановка плеера (действие пользователя)', document.URL);
      yaCounter44834683.reachGoal('8');
  });

  // Запускает live
  jQuery('.live-news__wrapper').on('click', '.live-news__wrapper__show__live', function () {
      //jQuery('.iz_player_mini').contents().find('video')[0].play();
      localStorage.setItem('player.live.current.play', true);
      ga('send', 'event', 'Мини плеер ', 'Запуск плеера (действие пользователя)', document.URL);
      yaCounter44834683.reachGoal('7');
  });

  // Раскрывает плеер
  jQuery(".live-news__wrapper__show__live").click(function() {
    jQuery(".live-news__wrapper").removeClass("hide-block");
    localStorage.setItem('player.live.hide', false);
    ga('send', 'event', 'Мини плеер ', 'Разворачивание плеера (действие пользователя)', document.URL);
    yaCounter44834683.reachGoal('10');
  });

  // Раскрыть плеер, если его раскрывали до этого
  if (localStorage.getItem('player.live.hide') == 'false') {
      jQuery(".live-news__wrapper").removeClass("hide-block");
      ga('send', 'event', 'Мини плеер ', 'Плеер активен (при загрузке страницы)', document.URL);
      yaCounter44834683.reachGoal('5');
  }


  jQuery(window).on("load", function(){
    check_position_live_news();
    onYouTubeIframeAPIReady();
  });


  jQuery(window).on("scroll", function(){
    check_position_live_news();
  });

});



if (1==1) {

  if (window.location.hash == "#show_player=1") {
    jQuery('.play_main_news').show();
  }

  var current_news = 0;
  var activated_news = null;

  var list_top_news = [
  ];
    // {
    //   'title': 'Новость 1 длинная новость длинная новость длинная новость длинная новость длинная новость длинная новость длинная новость длинная новость длинная новость длинная новость  длинная новость длинная новость   ',
    //   'text': 'Первая Работниками склада в сгоревшем торговом центре «Синдика» были в основном мигранты из ближнего зарубежья. ',
    // }, {
    //   'title': 'Новость 21Новость 21Новость 21Новость 21Новость 21Новость 21Новость 21Новость 21Новость 21Новость 21',
    //   'text': 'вторая Об этом заявили СМИ в понедельник, 9 октября. «На складе работали в основном мигранты из стран ближнего зарубежья. ',
    // }, {
    //   'title': 'Новость 3',
    //   'text': 'третья Жили ли они прямо на складе, сейчас выясняется, как и то, имели ли они все необходимые документы», — цитирует сообщение источника ТАСС.',
    // }


  function play_top_news() {
    activated_news = current_news;
    document.getElementById('play_top_news').play();
    document.getElementById('play_top_news').onended = function() {
      // console.log('Прослушано до конца');
      jQuery('.play_main_news__inside__left__name').marquee('destroy');
      if (++current_news == list_top_news.length) {
        current_news = 0;
      }
      change_top_news(current_news);
      
    };
  }



  function change_top_news(number_news) {
    if (play_main_news == undefined) {
      var play_main_news = jQuery('.play_main_news__inside__left__name');
    } else {
      // console.log('destroy');
      jQuery('.play_main_news__inside__left__name').marquee('destroy');
    }
    jQuery('.play_main_news__inside__left__name').text(list_top_news[number_news].title);

    var play_main_news_options = {
      //speed in milliseconds of the marquee
      // duration: 15500,
      duration: 5500,
      delayBeforeStart: 2000,
      // duration: 5500,
      //gap in pixels between the tickers
      gap: 0,
      //time in milliseconds before the marquee will start animating
      //'left' or 'right'
      direction: 'left',
      //true or false - should the marquee be duplicated to show an effect of continues flow
      duplicated: false,
      pauseOnHover: true,
      startVisible: true
    };
    if (list_top_news[number_news].title.length > 34) {
      play_main_news
        .bind('finished', function(){
          // refresh_ticker();
        })
        .marquee(play_main_news_options);
    }


    var audio_block = '<audio controls  id="play_top_news"><source src="/voice?text=' + list_top_news[number_news].text + '&format=mp3&speed=1.5&lang=ru-RU&speaker=valtz&emotion=good" type="audio/mpeg"></audio>';
    jQuery('.play_main_news__inside__track').html(audio_block);

    jQuery('.play_main_news__inside__left__label').addClass('hide');
    jQuery('.play_main_news__inside__left__name').addClass('active');
    
    if (jQuery('.play_main_news__inside__right__play').hasClass('active')) {
      // воспроизводим новость
      play_top_news();
      // jQuery('.play_main_news__inside__right__play').addClass('active');
    }
  }


  jQuery('.play_main_news__inside__right__play').on('click', function(){
    if (!jQuery(this).hasClass('active')) {
      if (activated_news != current_news) {
        change_top_news(current_news);
      }
      jQuery(this).addClass('active');
      play_top_news();
    } else {
      jQuery(this).removeClass('active');
      document.getElementById('play_top_news').pause();
    }
  });

  jQuery('.play_main_news__inside__right__next').on('click', function() {
    if (++current_news == list_top_news.length) {
      current_news = 0;
    }
    change_top_news(current_news);
  });

  jQuery('.play_main_news__inside__right__back').on('click', function() {
    if (--current_news < 0) {
      current_news = list_top_news.length-1;
    }
    change_top_news(current_news);
  });

}





