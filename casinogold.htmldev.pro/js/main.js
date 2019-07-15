wow = new WOW(
    {
        mobile: false,
    }
)
wow.init();


$(function () {

	$('.burger-content').on('click', function () {
	  $('.header__menu').addClass('active');
	  $('body').addClass('overflowHidden');
	});

	$('.mobile-menu-close').on('click', function () {
	  $('.header__menu').removeClass('active');
	  $('body').removeClass('overflowHidden');
	});

	/* SLOT MACHINE 
	=============================*/
	

	$(document).scroll(function(){
		var machine = $('#machine')
	    scroll = $(window).scrollTop();

	  if (scroll >= machine.height() - 100 ) {
	  	$('.sm .in').addClass('start-anim');
	  	$('.sm').addClass('shake');

	  	$('.sm').click();

	  	$(document).off('scroll');

	  	
	  }

	});


	$('.sm').on('click',function(){
		if ($('.sm .in').hasClass('start-anim')) {

			setInterval(function() {
				setTimeout(function() {
				    $(".sm .in").addClass('start-anim-cont');
				    $(".sm").addClass('shake-cont');
				}, 1000);

				setTimeout(function() {
				    $(".sm .in").removeClass('start-anim-cont');
				    $(".sm").removeClass('shake-cont');
				}, 2000);

	 		}, 7000);
		}
	});


	/* Roulette 
	=============================*/

	$(window).scroll(function(){
	  var roulette = $('#mandate'),
	      scroll = $(window).scrollTop();

	  if (scroll >= roulette.height() + 200) {
	  	$('.ball-wrapper').addClass('animated-ball');
	  	$(".image-roulette").addClass('animated-roulete');
	  	$(".mandate__image-content").addClass('shown');

	  }
	});


	$(window).scroll(function() {
	  
		if ($('.ball-wrapper').hasClass('animated-ball')) {

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-1');
			}, 4500);

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-2');
			}, 6060);

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-3');
			}, 6060);

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-4');
			}, 8050);

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-5');
			}, 14400);

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-6');
			}, 20550);

			roulette_loop();

			$(window).off('scroll');
		}

	});

	function roulette_loop() {
		setInterval(function() {
			setTimeout(function() {
				$(".ball-wrapper").removeClass('speed-1');
				$(".ball-wrapper").removeClass('speed-2');
				$(".ball-wrapper").removeClass('speed-3');
				$(".ball-wrapper").removeClass('speed-4');
				$(".ball-wrapper").removeClass('speed-5');
				$(".ball-wrapper").removeClass('speed-6');
			    $(".ball-wrapper").addClass('animated-ball-cont');
			    $(".image-roulette").addClass('animated-roulete-cont');
			}, 0);

			setTimeout(function() {
			   	$(".ball-wrapper").removeClass('animated-ball-cont');
			   	$(".image-roulette").removeClass('animated-roulete-cont');
			}, 20);

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-1');
			}, 4500);

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-2');
			}, 6060);

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-3');
			}, 6060);

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-4');
			}, 8050);

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-5');
			}, 14400);

			setTimeout(function() {
			    $(".ball-wrapper").addClass('speed-6');
			}, 20550);

		}, 24130);
	}


	$("#signup").validate({
	                // if valid, post data via AJAX
	    submitHandler: function(form) {
	        $.post("/wp-content/themes/casino-gold/mailchimp/subscribe.php", { email: $("#email").val() }, function(data) {
	            $('#response').html(data);
	        });
	    },
	    // all fields are required
	    rules: {
	        email: {
	            required: true,
	            email: true
	        }
	    }
	});



	$('.scroll').on('click', function(e) {
	  e.preventDefault();

	  var toBlock = $(this).attr("href");
	  var scrolling = $(toBlock).offset().top;

	  $('html, body').animate({
	    scrollTop: scrolling - 0
	  }, 1500);
	});





});
