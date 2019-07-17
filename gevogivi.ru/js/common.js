$(document).ready(function() {

	$(".more").click(function(){
		$(".action-list").addClass("active",  2000);
		$(this).addClass("none");
		$(".lesss").addClass("blocks");
	});

	$(".lesss").click(function(){
		$(".action-list").removeClass("active",  2000);
		$(".more").removeClass("none");
		$(this).removeClass("blocks");
		var x = $(".actions").offset().top;
        $('html,body').animate({scrollTop:x},400);
	});
	
	var wow = new WOW({
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       false,       // trigger animations on mobile devices (default is true)
		live:         true,       // act on asynchronously loaded content (default is true)
		callback:     function(box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
		},
	    scrollContainer: null,    // optional scroll container selector, otherwise use window,
	    resetAnimation: true,     // reset animation on end (default is true)
	});
	
	wow.init();
	
	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene);

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.menu').addClass("active-menu");
			$('.logo').removeClass("zoomIn");
			$('.logo').css("animation-name", "zoomInss");
		} else {
			$('.menu').removeClass("active-menu")
		}
	});

	var one = $("#one");
	var two = $("#two");
	var three = $("#three");
	var four = $("#four");
	var five = $("#five");
	var six = $("#six");
	var seven = $("#seven");
	var startItem = $('.item').length - 1;

	one.owlCarousel({
		autoWidth:true,
		dots: false,
		nav: false,
		center: true,
		items:10,
		autoplay:true,
		autoplayTimeout:2000,
		loop: true,
		margin:30,
		responsive:{
			0:{
				items:3,
				autoWidth:false,
			},
			767:{
				items:4,
			},
			992:{
				items:10,
			}
		}
	});

	two.owlCarousel({
		autoWidth:true,
		dots: true,
		nav: true,
		items:1,
		navText: ["<svg width='17' height='10' viewBox='0 0 17 10' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='17' height='10' fill='black' fill-opacity='0' transform='translate(17 10) rotate(180)'/><path d='M5 10L0 5.04761L5 0L5 10Z' fill='#F6941D'/><path fill-rule='evenodd' clip-rule='evenodd' d='M17 6L5 6V4L17 4V6Z' fill='#F6941D'/></svg>","<svg width='17' height='10' viewBox='0 0 17 10' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='17' height='10' fill='black' fill-opacity='0'/><path d='M12 0L17 4.95239L12 10V0Z' fill='#F6941D'/><path fill-rule='evenodd' clip-rule='evenodd' d='M0 4H12V6H0V4Z' fill='#F6941D'/></svg>"],
		loop:true,
		margin:20,
		responsive:{
			0:{
				items:1,
				autoWidth:false,
				nav: false,
			},
			767:{
				items:1,
				nav: false
			},
			992:{
				items:7,
			}
		}
	});

	three.owlCarousel({
		autoWidth:true,
		dots: true,
		nav: true,
		startPosition: startItem,
		items:2,
		navText: ["<svg width='17' height='10' viewBox='0 0 17 10' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='17' height='10' fill='black' fill-opacity='0' transform='translate(17 10) rotate(180)'/><path d='M5 10L0 5.04761L5 0L5 10Z' fill='#F6941D'/><path fill-rule='evenodd' clip-rule='evenodd' d='M17 6L5 6V4L17 4V6Z' fill='#F6941D'/></svg>","<svg width='17' height='10' viewBox='0 0 17 10' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='17' height='10' fill='black' fill-opacity='0'/><path d='M12 0L17 4.95239L12 10V0Z' fill='#F6941D'/><path fill-rule='evenodd' clip-rule='evenodd' d='M0 4H12V6H0V4Z' fill='#F6941D'/></svg>"],
		loop:true,
		margin:20,
		responsive:{
			0:{
				items:1,
				autoWidth:false,
				nav: false,
			},
			767:{
				items:2,
				nav: false,
				dotsEach: 2,
			},
			992:{
				items:4,
				dotsEach: 30,
			}
		}
	});

	four.owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		dots: false,
		nav: true,
		items:1,
		/*navText: ["<img src='assets/templates/gg/img/left.svg'>","<img src='assets/templates/gg/img/right.svg'>"],*/
		navText: ["<img src='images/left.svg'>","<img src='images/right.svg'>"],
		loop: true,
		responsive:{
			0:{
				items:1,
				nav: false,
				dots: true,
			},
			767:{
				items:1,
			},
			992:{
				items:1,
			}
		}
	});


	var five = $("#five");

	five.owlCarousel({
		autoWidth:true,
		dots: true,
		nav: false,
		mouseDrag: false,
		items:1,
		loop: true,
		margin:20,
		responsive:{
			0:{
				items:1,
				autoWidth:false,
				stagePadding: 0,
			},
			767:{
				items:2,
			},
			992:{
				items:2,
			}
		}
	});

		six.owlCarousel({
			dots: false,
			nav: true,
			items:1,
			margin: 20,
			navText: ["<svg width='17' height='10' viewBox='0 0 17 10' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='17' height='10' fill='black' fill-opacity='0' transform='translate(17 10) rotate(180)'/><path d='M5 10L0 5.04761L5 0L5 10Z' fill='#F6941D'/><path fill-rule='evenodd' clip-rule='evenodd' d='M17 6L5 6V4L17 4V6Z' fill='#F6941D'/></svg>","<svg width='17' height='10' viewBox='0 0 17 10' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='17' height='10' fill='black' fill-opacity='0'/><path d='M12 0L17 4.95239L12 10V0Z' fill='#F6941D'/><path fill-rule='evenodd' clip-rule='evenodd' d='M0 4H12V6H0V4Z' fill='#F6941D'/></svg>"],
			loop:true,
			responsive:{
				0:{
					items:1,
					nav: false,
					dots: true
				},
				767:{
					items:2
				},
				992:{
					items:2
				}
			}
		});

	seven.owlCarousel({
		dots: true,
		nav: false,
		items:1,
		loop: true,
		margin:20,
		responsive:{
			0:{
				items:1,
			},
			767:{
				items:2,
			},
			1000:{
				items:2,
			}
		}
	});

	five.owlCarousel();
        
    // Go to the next item
    $('.btn-next').click(function() {
    	five.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.btn-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        five.trigger('prev.owl.carousel', [300]);
    }) 

	
	
    $('a[href^="#"]').on('click', function (e) {
    	e.preventDefault();
    	$(document).off("scroll");
    	
    	$('a').each(function () {
    		$(this).removeClass('active');
    	})
    	$(this).addClass('active');
    	
    	var target = this.hash,
    	menu = target;
    	$target = $(target);
    	$('html, body').stop().animate({
    		'scrollTop': $target.offset().top-50
    	}, 1500, 'swing', function () {
    		window.location.hash = target;
    		$(document).on("scroll", onScroll);
    	});
    });
    
    
    
   
		

	$('.open_popup').on('click', function(e){
		e.preventDefault();
		var popup_id = $(this).data('popup-id');
		$('#my_popup_'+popup_id).popup('show');
	});
	
	$('.my_popup_close').on('click', function(e){
		e.preventDefault();
		$(this).closest('.popup_wrapper').popup('hide');
	})
	
	
    $('#my_popup_cart').popup({
    	opacity: 0.9,
    	transition: 'all 0.4s',
    	openelement: '.my_popup_cart',
    	closeelement: '.my_popup_cart_close'
    });
    
    $('.my_popup_success_close').on('click', function(){
    	$('#my_popup_success').popup('hide');
    })
    /*
    $('#my_popup_2').popup({
    	opacity: 0.9,
    	transition: 'all 0.4s',
    	openelement: '.my_popup_open_2',
    	closeelement: '.my_popup_close_2'
    });

    $('#my_popup_3').popup({
    	opacity: 0.9,
    	transition: 'all 0.4s',
    	openelement: '.my_popup_open_3',
    	closeelement: '.my_popup_close_3'
    });

    $('#my_popup_4').popup({
    	opacity: 0.9,
    	transition: 'all 0.4s',
    	openelement: '.my_popup_open_4',
    	closeelement: '.my_popup_close_4'
    });

    $('#my_popup_5').popup({
    	opacity: 0.9,
    	transition: 'all 0.4s',
    	openelement: '.my_popup_open_5',
    	closeelement: '.my_popup_close_5'
    });

    $('#my_popup_6').popup({
    	opacity: 0.9,
    	transition: 'all 0.4s',
    	openelement: '.my_popup_open_6',
    	closeelement: '.my_popup_close_6'
    });

    $('#my_popup_7').popup({
    	opacity: 0.9,
    	transition: 'all 0.4s',
    	openelement: '.my_popup_open_7',
    	closeelement: '.my_popup_close_7'
    });

    $('#my_popup_8').popup({
    	opacity: 0.9,
    	transition: 'all 0.4s',
    	openelement: '.my_popup_open_8',
    	closeelement: '.my_popup_close_8'
    });

    $('#my_popup_9').popup({
    	opacity: 0.9,
    	transition: 'all 0.4s',
    	openelement: '.my_popup_open_9',
    	closeelement: '.my_popup_close_9'
    });

    $('#my_popup_10').popup({
    	opacity: 0.9,
    	transition: 'all 0.4s',
    	openelement: '.my_popup_open_10',
    	closeelement: '.my_popup_close_10'
    });*/

	$(".moret").click(function(){
	    $(".show-text").addClass("intro", 2000);
	    $(".moret").addClass("none");
	    $(".less").addClass("block");
	});
	
	$(".less").click(function(){
	    $(".show-text").removeClass("intro", 2000);
	    $(".moret").removeClass("none");
	    $(".less").removeClass("block");

	});


});


