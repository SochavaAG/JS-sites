
var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 56.014134, lng: 92.974895},
   zoom: 16,
   scrollwheel: false,
   zoomControl: false,
   styles: [
     
     {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
     {elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]},
     {
       featureType: 'administrative.locality',
       elementType: 'labels.text.fill',
       stylers: [{color: '#ffffff'}]
     },
     {
       featureType: 'poi',
       elementType: 'labels.text.fill',
       stylers: [{color: '#ffffff'}]
     },
     {
       featureType: 'poi.park',
       elementType: 'geometry',
       stylers: [{color: '#263c3f'}]
     },
     {
       featureType: 'poi.park',
       elementType: 'labels.text.fill',
       stylers: [{color: '#6b9a76'}]
     },
      
     {
     	"featureType": "landscape.all",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#bababc"
                }
            ]
     },
     {
      "featureType": "landscape.all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#373741"
                }
            ]
     },
     {
       featureType: 'road',
       elementType: 'geometry',
       stylers: [{color: '#848594'}]
     },
     {
       featureType: 'road',
       elementType: 'geometry.stroke',
       stylers: [{color: '#ffffff'}]
     },
     {
       featureType: 'road',
       elementType: 'labels.text.fill',
       stylers: [{color: '#ffffff'}]
     },
     {
       featureType: 'road.highway',
       elementType: 'geometry',
       stylers: [{color: '#848594'}]
     },
     {
       featureType: 'road.highway',
       elementType: 'geometry.stroke',
       stylers: [{color: '#ffffff'}]
     },
     {
       featureType: 'road.highway',
       elementType: 'labels.text.fill',
       stylers: [{color: '#ffffff'}]
     },
     {
       featureType: 'transit',
       elementType: 'geometry',
       stylers: [{color: '#2f3948'}]
     },
     {
       featureType: 'transit.station',
       elementType: 'labels.text.fill',
       stylers: [{color: '#d59563'}]
     },
     {
       featureType: 'water',
       elementType: 'geometry',
       stylers: [{color: '#17263c'}]
     },
     {
       featureType: 'water',
       elementType: 'labels.text.fill',
       stylers: [{color: '#515c6d'}]
     },
     {
       featureType: 'water',
       elementType: 'labels.text.stroke',
       stylers: [{color: '#17263c'}]
     }
   ]
 });
 var marker;
 marker = new google.maps.Marker({

  position: {lat: 56.014134, lng: 92.974895},          
  map: map,                           
  icon:"img/marker.png"
});

};




$(function() {
    function linesAnimation(elem) {
        var $elem = $(elem),
            elemW = $elem.width();
        $elem.css({
            width: 0,
            opacity: 1
        });
        $elem.animate({
            width: elemW
        }, 1000);
    }
    var $slider = $("#slider");
    $slider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        $slider.find('.slick-slide').not('.slick-active').find('.line-block').css('opacity', 0);

    });
    $slider.on('afterChange', function (e, slick, currentSlide) {
        var $lineBlocks = $slider.find('.slick-slide.slick-active .line-block');
        $lineBlocks.each(function (i, item) {
            var $lineBlock = $(item);
            linesAnimation($lineBlock);
        });

    });
    $slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  rows: 1,
	  arrows: false,
	  speed: 700,
	  autoplay: false,
	  autoplaySpeed: 3000,
	  dots: false,
	  /*responsive: [
	      {
	        breakpoint: 1300,
	        settings: {
	          arrows: false,
	          slidesToShow: 4
	        }
	      },
	      {
	        breakpoint: 1000,
	        settings: {
	          arrows: false,
	          slidesToShow: 3
	        }
	      },
	      {
	        breakpoint: 700,
	        settings: {
	          arrows: false,
	          slidesToShow: 2
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          arrows: false,
	          slidesToShow: 1
	        }
	      }
	    ]*/
	});

	$(".work__slider-btn--prev").on("click", function() {
		$("#slider").slick("slickPrev");
	});

	$(".work__slider-btn--next").on("click", function() {
		$("#slider").slick("slickNext");
	});


  $("#slider-mob").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    arrows: false,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true
  });


  $("#intro-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    arrows: false,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false
  });

  $(".work__slider-btn--prev").on("click", function() {
    $("#intro-slider").slick("slickPrev");
  });

  $(".work__slider-btn--next").on("click", function() {
    $("#intro-slider").slick("slickNext");
  });


  $("#slider-reviews").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    arrows: false,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '260px',
    dots: false
  });



	$(".input-mask").inputmask("+7 ( 999 ) 9999999", { clearMaskOnLostFocus: true, showMaskOnHover: false, });

  $('.menu-side').hover(function () {
    $('.menu-side').toggleClass('active');
  });


  $('#scene').parallax({
    calibrateX: false,
    calibrateY: true,
    invertX: false,
    invertY: true,
    limitX: false,
    limitY: false,
    scalarX: 2,
    scalarY: 2,
    frictionX: 0.2,
    frictionY: 0.8
  });

  $('#scene-info').parallax({
    calibrateX: false,
    calibrateY: true,
    invertX: false,
    invertY: true,
    limitX: false,
    limitY: 10,
    scalarX: 2,
    scalarY: 2,
    frictionX: 0.2,
    frictionY: 0.8
  });

  $('#scene-social-2').parallax({
    calibrateX: false,
    calibrateY: true,
    invertX: false,
    invertY: true,
    limitX: false,
    limitY: 10,
    scalarX: 2,
    scalarY: 2,
    frictionX: 0.2,
    frictionY: 0.8
  });

  $('#scene-social').parallax({
    calibrateX: false,
    calibrateY: true,
    invertX: false,
    invertY: true,
    limitX: false,
    limitY: 10,
    scalarX: 2,
    scalarY: 2,
    frictionX: 0.2,
    frictionY: 0.8
  });

  $('#scene-sites').parallax({
    calibrateX: false,
    calibrateY: true,
    invertX: false,
    invertY: true,
    limitX: false,
    limitY: false,
    scalarX: 2,
    scalarY: 2,
    frictionX: 0.2,
    frictionY: 0.8
  });

  $('#scene-sites-2').parallax({
    calibrateX: false,
    calibrateY: true,
    invertX: false,
    invertY: true,
    limitX: false,
    limitY: false,
    scalarX: 2,
    scalarY: 2,
    frictionX: 0.2,
    frictionY: 0.8
  });



  
	
  if ($(window).width() > 591) {
      $('.line-block').viewportChecker({
            callbackFunction: function(elem, action){
                linesAnimation(elem);
            }
        });

      new WOW().init();
  }

	/* Mobile menu
	=======================================*/

	$('.burger-content').on('click', function () {
	  $('.header__menu').addClass('active');
	  $('body').addClass('overflowHidden');
	});

	$('.mobile-menu-close').on('click', function () {
	  $('.header__menu').removeClass('active');
	  $('body').removeClass('overflowHidden');
	});

  if ($(window).width() > 1100) {
      if ( $('#intro').length > 0 ) {
            // init controller
            var copter = document.getElementById('copter'),
                eagle = document.getElementById('eagle'),
                cloudRight1 = document.getElementById('cloud-right-1'),
                cloudRight2 = document.getElementById('cloud-right-2'),
                cloudLeft1 = document.getElementById('cloud-left-1'),
                cloudLeft2 = document.getElementById('cloud-left-2'),
                cloudLeft2Height = $('#cloud-left-2').height();

            var controller = new ScrollMagic.Controller();
            var scene1 = new ScrollMagic.Scene({
                duration: 1000, // the scne should last for a scroll distance of 100px
                offset: $('.header').height()   // start this scene after scrolling for 50px
            })
                .setPin("#intro") // pins the element for the the scene's duration
                .addTo(controller); // assign the scene to the controller


            var delayCloudRight2 = 0,
                delayCloudLeft1 = 700,
                delayCloudLeft2 = 0,
                delayEagle = 100,
                delayCopter = 550;
            function callback (event) {
                var scrollPos = event.scrollPos;
                cloudRight1.style.transform = 'translateY('+ (-scrollPos) +'px)';


                if (scrollPos > delayCloudRight2) {
                    var clR2ScrollPos = scrollPos - delayCloudRight2;
                    TweenLite.to(cloudRight2, 0.1, {y: -Math.round(clR2ScrollPos*0.8),force3D:true});
                    // cloudRight2.style.transform = 'translateY('+ (-Math.round(clR2ScrollPos*2)) +'px)'
                }
                if (scrollPos > delayEagle) {
                    var eagleScrollPos = scrollPos - delayEagle;
                    TweenLite.to(eagle, 0.1, {y: -Math.round(eagleScrollPos*1.6),force3D:true});
                    // eagle.style.transform = 'translateY('+ (-Math.round(eagleScrollPos*2.7)) +'px)'
                }
                if (scrollPos > delayCopter) {
                    var copterScrollPos = scrollPos - delayCopter;
                    TweenLite.to(copter, 1.1, {x: +Math.round(copterScrollPos*3.5),force3D:true});
                    TweenLite.to(copter, 0.1, {y: +Math.round(copterScrollPos*3),force3D:true});
                    // copter.style.transform = 'translateY('+ (-Math.round(copterScrollPos*2.7)) +'px)'
                }
                if (scrollPos > delayCloudLeft1) {
                    var clL1ScrollPos = scrollPos - delayCloudLeft1;
                    TweenLite.to(cloudLeft1, 0.1, {y: -Math.round(clL1ScrollPos*1.2),force3D:true});
                    // cloudLeft1.style.transform = 'translateY('+ (-Math.round(clL1ScrollPos*2.3)) +'px)'
                }
                if (scrollPos > delayCloudLeft2) {
                    var clL2ScrollPos = scrollPos - delayCloudLeft2;
                    TweenLite.to(cloudLeft2, 0.1, {y: -Math.round(clL2ScrollPos*0.15),force3D:true});
                    // cloudLeft2.style.transform = 'translateY('+ (-Math.round(clL2ScrollPos*0.5)) +'px)';

                    if (clL2ScrollPos > cloudLeft2Height/4.9) {
                    }
                }

            }
            scene1.on("update", callback);
        }
  }

  if ($(window).width() > 1100) {
      if ( $('#intro-2').length > 0 ) {
            // init controller
            var plane = document.getElementById('plane'),
                sdCloudRight = document.getElementById('sd-cloud-right'),
                sdCloudLeft = document.getElementById('sd-cloud-left');

            var controller = new ScrollMagic.Controller();
            var scene2 = new ScrollMagic.Scene({
                duration: 1000, // the scne should last for a scroll distance of 100px
                offset: $('.header').height()   // start this scene after scrolling for 50px
            })
                .setPin("#intro-2") // pins the element for the the scene's duration
                .addTo(controller); // assign the scene to the controller


            var delayPlane = 400,
                delaySdCloudRight = 600,
                delaySdCloudLeft = 0;
            function callback (event) {
                var scrollPos = event.scrollPos;


                if (scrollPos > delayPlane) {
                    var planeScrollPos = scrollPos - delayPlane;
                    TweenLite.to(plane, 0.1, {x: +Math.round(planeScrollPos*3),force3D:true});
                    TweenLite.to(plane, 0.1, {y: -Math.round(planeScrollPos*2.5),force3D:true});
                    // copter.style.transform = 'translateY('+ (-Math.round(copterScrollPos*2.7)) +'px)'
                }
                if (scrollPos > delaySdCloudLeft) {
                    var sdCloudLeftScrollPos = scrollPos - delaySdCloudLeft;
                    TweenLite.to(sdCloudLeft, 0.1, {y: -Math.round(sdCloudLeftScrollPos*1.4),force3D:true});
                }
                if (scrollPos > delaySdCloudRight) {
                    var sdCloudRightScrollPos = scrollPos - delaySdCloudRight;
                    TweenLite.to(sdCloudRight, 0.1, {y: -Math.round(sdCloudRightScrollPos*0.4),force3D:true});
                }
                


            }
            scene2.on("update", callback);
        }



  }

  if ($(window).width() > 1100) {
      if ( $('#intro-3').length > 0 ) {
            // init controller
            var comet = document.getElementById('comet'),
                pdCloudLeft = document.getElementById('pd-cloud-left'),
                pdCloudRight = document.getElementById('pd-cloud-right');

            var controller = new ScrollMagic.Controller();
            var scene3 = new ScrollMagic.Scene({
                duration: 1000,
                offset: $('.header').height()
            })
                .setPin("#intro-3")
                .addTo(controller);


            var delayComet = 0,
                delayPdCloudRight = 300,
                delayPdCloudLeft = 400;


            function callback (event) {
                var scrollPos = event.scrollPos;


                if (scrollPos > delayComet) {
                    var cometScrollPos = scrollPos - delayComet;
                    TweenLite.to(comet, 0.1, {x: +Math.round(cometScrollPos*1.2),force3D:true});
                    TweenLite.to(comet, 0.1, {y: +Math.round(cometScrollPos*2.5),force3D:true});
                    // copter.style.transform = 'translateY('+ (-Math.round(copterScrollPos*2.7)) +'px)'
                }
                if (scrollPos > delayPdCloudLeft) {
                    var pdCloudLeftScrollPos = scrollPos - delayPdCloudLeft;
                    TweenLite.to(pdCloudLeft, 0.1, {y: -Math.round(pdCloudLeftScrollPos*0.7),force3D:true});
                }
                if (scrollPos > delayPdCloudRight) {
                    var pdCloudRightScrollPos = scrollPos - delayPdCloudRight;
                    TweenLite.to(pdCloudRight, 0.1, {y: -Math.round(pdCloudRightScrollPos*0.2),force3D:true});
                }
                


            }
            scene3.on("update", callback);
        }



  }

  if($('.swiper-container').length > 0) {
      var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 50,
            loop: true,
            // centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
      });
      $(window).resize(function(){
        var ww = $(window).width()
        if (ww<=1100) swiper.params.slidesPerView = 3;
        if (ww<=998) swiper.params.slidesPerView = 1;
      })
      $(window).trigger('resize')
  }



  $('.scroll').on('click', function(e) {
      e.preventDefault();

      var toBlock = $(this).attr("href");
      var scrolling = $(toBlock).offset().top;

      $('html, body').animate({
        scrollTop: scrolling - 0
      }, 2300);
    });


  $('.scroll-fast').on('click', function(e) {
      e.preventDefault();

      var toBlock = $(this).attr("href");
      var scrolling = $(toBlock).offset().top;

      $('html, body').animate({
        scrollTop: scrolling - 0
      }, 1000);
    });

  if($('.rellax').length > 0) {
      var rellax = new Rellax('.rellax');
  }



  /* start forms */

  var $forms = $('form');
  if ($forms.length > 0) {
      $forms.each(function (i, item) {
          var $form = $(item);
          $form.validate({
              rules: {
                  name: {
                      required: true
                  },
                  email: {
                      email: true,
                      required: true
                  },
                  tel: {
                      required: true
                  }
              },
              messages: {
                  name: {
                      required: 'Укажите ваше имя'
                  },
                  tel: {
                      required: 'Укажите ваш телефон'
                  },
                  email: {
                      required: 'Укажите ваш e-mail'
                  }
              },
              submitHandler: function(form) {
                  var $form = $(form);
                  $.ajax({
                      type: "POST",
                      url: "mail.php",
                      data: $form.serialize()
                  }).done(function(e) {
                      $form.find('.dispatch-message').removeClass('error').addClass('success').html('Спасибо! Мы свяжемся с вами').slideDown();
                      $form.trigger('reset');
                  }).fail(function (e) {
                      $form.find('.dispatch-message').removeClass('success').addClass('error').html('Произошла ошибка. Попробуйте еще раз').slideDown();
                      $form.trigger('reset');
                      setTimeout(function () {
                          $form.find('.dispatch-message').slideUp();
                      }, 5000);
                  })
              }
          });
      })
  }

  /* end forms */


});
