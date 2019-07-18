$(document).ready(function() {

	//Preloader
	setTimeout(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	}, 1000);

	// Img
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// MatchHeight
	$('.about-item, .projects-item, .portfolio-item').matchHeight();

	// Phone mask
    $(".phone-input").mask("+38 (999) 999-99-99");


	// Menu Toggle
	$('.main-menu-toggle').click(function() {
		$(this).toggleClass("on");
		$('.main-menu').slideToggle('slow');
	});

	
	$('.main-menu ul li a').click(function() {
		if ($(window).width() < 992) {
			$('.main-menu-toggle').toggleClass("on");
			$('.main-menu').slideToggle('fast');
		}
	});

	// Popup
	$('.more-button, .call-popup').magnificPopup({
		type:"inline",
        mainClass: 'mfp-fade',
        showCloseBtn: true,
        closeBtnInside: true,
        removalDelay: 300,
        callbacks: {open: function() {$('#navbar').css('padding-right', '17px');},close: function() {$('#navbar').css('padding-right', '0px');}}

	});

	$('.portfolio-item').magnificPopup({
		delegate: 'a',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tPrev: 'Предыдущая (Кнопка влево)',
			tNext: 'Следующая (Кнопка вправо)',
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
		},
		type: 'image',
		cursor: 'mfp-zoom-out-cur',
		mainClass: 'mfp-fade',
		removalDelay: 300,
		callbacks: {open: function() {$('#navbar').css('padding-right', '17px');},close: function() {$('#navbar').css('padding-right', '0px');}}

	});

	// Carousel
	$('.projects-slider, .portfolio-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		autoplay: false,
		items: 1,
		navText: ["",""],
		dots: true,
		//autoHeight: true,
		responsive:{
			0:{
	            items: 1
	        },
	        768:{
	            items: 1
	        },
	        992:{
	            items: 1
	        }
	    }
	});

	// Carousel
	$('.testimonials-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		autoplay: false,
		items: 1,
		navText: ["",""],
		dots: true,
		responsive:{
			0:{
	            nav: false
	        },
	        768:{
	            items: 1
	        }
	    }
	});

	$('.partners-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		autoplay: true,
		items: 4,
		navText: ["",""],
		dots: false,
		//autoHeight: true,
		responsive:{
			0:{
	            items: 1,
	            dots: true,
	            nav: false
	        },
			480:{
	            items: 2
	        },
	        768:{
	            items: 3
	        },
	        992:{
	            items: 4
	        }
	    }
	});

	// Аякс отправка форм
	$(".contact-form").submit(function(e) {
		if (!this.checkValidity()) {
      		e.preventDefault();
		    $.magnificPopup.open({
			    items: {
			        src: '#error' 
			    },
			    type:"inline",
		        mainClass: 'mfp-fade',
		        showCloseBtn: true,
		        closeBtnInside: true,
		        removalDelay: 300
			});
		} else {
			//$(this).parent('.form-inner').find('.error').fadeOut('slow');
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$.magnificPopup.open({
				    items: {
				        src: '#success' 
				    },
				    type:"inline",
			        mainClass: 'mfp-fade',
			        showCloseBtn: true,
			        closeBtnInside: true,
			        removalDelay: 300
				});
				setTimeout(function() {
					$(".contact-form").trigger("reset");
					//$(this).find("input[type=text], textarea").val("");
				}, 1000);
			});
			return false;
		}
	});

	$('.call-popup').click(function() {
		$('.success').css('display', 'none');
		$('.error').css('display', 'none');
	});

	// navbar
	$(window).scroll(function(){

	    if ($(window).scrollTop() >= 740) {
	        $('#navbar').fadeIn('slow');
	    } else {
	    	$('#navbar').fadeOut('slow');
	    }

	});

	// Scroll to tpp
	$(".main-menu a, .footer-logo a, .header-main-menu a").mPageScroll2id({
		offset:60
	});

	// Count to
	var trigger = false;
	$('#about').waypoint(function() {
		if (!trigger) {
			trigger = true;
			$('.counter span').countTo();
		}
	}, {offset:'60%'});

	// Wow animate init
	wow = new WOW(
    	{
    		offset: 60
    	});
    wow.init();

    //SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

});

