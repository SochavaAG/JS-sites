$(document).ready(function() {
//time
clock();
clockMain();
clockSec();
clockTh();
clockFour();
clockFif();
clockSix();


	//small
	$("#bnt-1").on("click",function(e){
		e.preventDefault();
		$("#confirm1").fadeIn("slow");
	});
	$("#bnt-2").on("click",function(e){
		e.preventDefault();
		$("#confirm2").fadeIn("slow");
	});
	$("#bnt-3").on("click",function(e){
		e.preventDefault();
		$("#confirm3").fadeIn("slow");
	});

	new WOW().init();

	setTimeout(function() {
		$("#preload").fadeOut();
	}, 1000);

	$(window).scroll(function(){

		var height = $("body").scrollTop();

		if ( height > 500 ) { 
			$(".to-top").fadeIn();
		} else { 
			$(".to-top").fadeOut();
		};


	});


	$(".radio-btn").on("click", function(){

		var check = $(this).find("input");

		$(".radio-btn").removeClass("active");

		if ($(this).hasClass("pro")) {
			$("#watch").addClass("pro").removeClass("air");
			$("#watch").children(".image-wrap").children("img").attr("src","images/2.png");
			$(".hand-ok").attr("src","images/hand2.png");
			$(".img-on-small").children("img").attr("src","images/1-2.png");
			$(".img-on-small").addClass("pro-small");

			if (check.prop("checked", true)) {
				$(this).addClass("active");
			};

			$("#proChoosen").addClass("active");
			$("#airChoosen").removeClass("active");

		};

		if ($(this).hasClass("air")) {
			$("#watch").addClass("air").removeClass("pro");
			$("#watch").children(".image-wrap").children("img").attr("src","images/1.png");
			$(".hand-ok").attr("src","images/hand.png");
			$(".img-on-small").children("img").attr("src","images/1-1.png");
			$(".img-on-small").removeClass("pro-small");

			if (check.prop("checked", true)) {
				$(this).addClass("active");
			};

			$("#airChoosen").addClass("active");
			$("#proChoosen").removeClass("active");

		};

		if ($("#airChoosen").hasClass("active")) {
			$("#air17").prop("checked", true);
		};

		if ($("#proChoosen").hasClass("active")) {
			$("#pro17").prop("checked", true);
		}

	});

	$(".blue-check").on("click", "label", function(){

		var choose = $(this).siblings("input");

		if (choose.prop("checked")) {
			$(this).parents(".watch-section-choose").removeClass("active");
			
		} else {
			$(this).parents(".watch-section-choose").addClass("active");
		}
	});


	$(".watch-color").on("click", function(){

		var className = $(this).attr("for");
		var watch = $(this).parents(".option").siblings(".watch-card").children(".big-watch-preview");

		watch.removeClass().addClass("big-watch-preview");

		$(".watch-color").removeClass("active");

		watch.addClass(className);

		if (watch.hasClass("green")) {
			watch.find("img").attr("src","images/air-green.jpg");
			$(".other-watch-list").children(".green").hide();
			$(".other-watch-list").children(".blue").show().css("display", "inline-block");
			$(".other-watch-list").children(".pink").show().css("display", "inline-block");


		} else if (watch.hasClass("blue")){
			watch.find("img").attr("src","images/air-blue.jpg");
			$(".other-watch-list").children(".blue").hide();
			$(".other-watch-list").children(".green").show().css("display", "inline-block");
			$(".other-watch-list").children(".pink").show().css("display", "inline-block");


		} else if (watch.hasClass("pink")) {
			watch.find("img").attr("src","images/air-pink.jpg");
			$(".other-watch-list").children(".pink").hide();
			$(".other-watch-list").children(".green").show().css("display", "inline-block");
			$(".other-watch-list").children(".blue").show().css("display", "inline-block");

		} else if (watch.hasClass("gray")) {
			watch.find("img").attr("src","images/pro2.jpg");

			$(".other-watch-list").children(".gray").hide();
			$(".other-watch-list").children(".brown").show().css("display", "inline-block");

		} else if (watch.hasClass("brown")) {
			watch.find("img").attr("src","images/pro1.jpg");

			$(".other-watch-list").children(".brown").hide();
			$(".other-watch-list").children(".gray").show().css("display", "inline-block");

		}

	});

	$(".owl-back").owlCarousel({

		navigation : false,
		pagination: false,
		slideSpeed : 3000,
		paginationSpeed : 4000,
		autoPlay: true,
		transitionStyle : "fade",
		singleItem:true

	});
	$(".owl-feed").owlCarousel({

		navigation : true,
		pagination: true,
		slideSpeed : 3000,
		paginationSpeed : 4000,
		transitionStyle : "fade",
		singleItem:true

	});
	$("#form").submit(function () {

		var error = 0;
		var phoneV = $(this).find('.phone-number').val();
		var phoneLngth = phoneV.length;

		if( /[^0-9]/.test(phoneV) ) {
			$(this).find('.phone-number').addClass('not-valid');
			$(this).children(".input-holder").children(".message").text('Номер телефона должен содержать только цифры');
			error = 2;
		} else if (phoneLngth <= 3) {
			$(this).find('.phone-number').addClass('not-valid');
			$(this).children(".input-holder").children(".message").text('Введите пожалуйста ваш номер телефона');
			error = 1;
		} else {
			$(this).find('.phone-number').addClass('valid');
		}

		if (error === 0) {
			return true;
		}
		else {
			return false;
		}
	});
	PopUpHide();

	$(document).mouseup(function (e) {

		var container = $(".popup-step");

		if (container.has(e.target).length === 0){
			container.fadeOut("slow");
		}


		var blockFade = $(".popup-confirm");

		if (blockFade.has(e.target).length === 0){
			blockFade.fadeOut("slow");
		}
	});
	$(".buy-btn").on("click",function(e){
		e.preventDefault();
		$("#popup").fadeIn("slow");
	});
	$(".step-two").on("click",function(e){
		e.preventDefault();
		$("#popup").fadeOut("slow");
		$("#popup2").fadeIn("slow");
	});
	$(".step-three").on("click",function(e){
		e.preventDefault();
		$("#popup2").fadeOut("slow");
		$("#popup3").fadeIn("slow");
	});

	$(".step-four").on("click",function(e){
		e.preventDefault();
		$("#popup3").fadeOut("slow");
		$("#popup4").fadeIn("slow");
	});
	$(".close-popup").on("click",function(){
		$(".popup-confirm").fadeOut("slow");
	});
	$(".close-popup").on("click",function(){
		$(".popup-step").fadeOut("slow");
		  $('iframe').attr('src','');
	});
	$(".video-btn").on("click",function(e){
		e.preventDefault();
		$("#videoPopup").fadeIn("slow");
		 $('iframe').attr('src','https://www.youtube.com/embed/S9tobSJMmuM');
	});

	$(".parent").on("click", function(){

		var radio = $(this).children(".simple-radio");

		if($(this).hasClass('active')) {

			$(this).removeClass('active');
			$(this).next(".dropdown-wrap").slideUp();

		}else{

			$(".dropdown-wrap").slideUp("slow");
			$(".parent").removeClass('active');
			$(this).addClass('active');
			$(this).next(".dropdown-wrap").slideDown();
			radio.prop("checked", true);

			return false;
		};
	});


	$('.min').on('click', function() {
		var $input = $(this).parent().find('input');
		var $total = $(this).parent().next().find('.basket-cost');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').on('click', function() {
		var $input = $(this).parent().find('input');
		var $total = $(this).parent().next().find('.basket-cost');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$(".remove-item").on("click", function(){
		$(this).parent(".product-img").parent("li").remove();
	});

	$(".change-input").on("click", function(){
		$(this).siblings("input").prop('disabled', false).focus().val("");

	});
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);
		return false;
	});
	$("#openNav").on("click", function(){
		$(this).addClass("clicked");
		$("#mainNav").fadeIn();
		$(".main-nav-list").addClass("open");
	});

	$("#closeNav").on("click", function(){
		$("#mainNav").fadeOut();
		$("#openNav").removeClass("clicked");
	});

	function PopUpHide() {
		$(".popup-step").fadeOut("slow");
	}

	function closest(el, selector) {
		var matchesSelector = el.matches ||
		el.webkitMatchesSelector ||
		el.mozMatchesSelector ||
		el.msMatchesSelector;
		while (el) {
			if (matchesSelector.call(el, selector)) {
				break;
			}
			el = el.parentElement;
		}
		return el;
	}

	var caller = document.getElementById('caller'),
	popup = document.querySelector('.call-back'),
	close = document.querySelector('.close-popup');

	caller.addEventListener('click', function(e){
		e.preventDefault();
		popup.style.display = 'block';
		setTimeout(function(){
			popup.classList.add('active');
		}, 10);
		document.body.classList.add('overlayed');
	});
	closeFunction = function(){
		popup.classList.remove('active');
		setTimeout(function(){
			popup.style.display = 'none';
		}, 310);
		document.body.classList.remove('overlayed');
	};
	close.addEventListener('click', function(e){
		e.preventDefault();
		closeFunction();
	});

	document.body.addEventListener('click', function(e){
		isClickOnInner = closest(e.target, '.inner, #caller');
		if (!isClickOnInner){
			closeFunction();
		}
	});


	$('#page').fullpage({
		
		css3: true,
		scrollingSpeed: 700,
		
		normalScrollElements: '.popup-step',
		fixedElements: '.main-header, .to-top, .social-btn, .watch-wrap-2',
		
		sectionSelector: '.section',
		scrollBar: true,
		afterRender: function(){
			new WOW().init();
		}
		
	});
	var $win = $(window).width();

	if ( $win < 1199 ) {
		$.fn.fullpage.destroy('all');

		$('.wow').removeClass("wow slideInUp slideInRight slideInLeft bounceInDown  bounceInUp bounceInRight");

		$("#mainNav").on("click",  function(){
			$("#mainNav").fadeOut();
			$("#openNav").removeClass("clicked");
		});
		$("#mainNav li a").on("click",  function(){
			$("#mainNav").fadeOut();
			$("#openNav").removeClass("clicked");
		});
	}
});
function clock() {
	var date = new Date();
	var hour=date.getHours();
	var minute=date.getMinutes();

	document.getElementById('clock').innerHTML = hour+':'+(minute<10?'0':'')+minute;
	window.setTimeout('clock()',1000);
}
function clockSec() {
	var date = new Date();
	var hour=date.getHours();
	var minute=date.getMinutes();

	document.getElementById('clock2').innerHTML = hour+':'+(minute<10?'0':'')+minute;
	window.setTimeout('clockSec()',1000);
}
function clockTh() {
	var date = new Date();
	var hour=date.getHours();
	var minute=date.getMinutes();

	document.getElementById('clock3').innerHTML = hour+':'+(minute<10?'0':'')+minute;
	window.setTimeout('clockTh()',1000);
}
function clockFour() {
	var date = new Date();
	var hour=date.getHours();
	var minute=date.getMinutes();

	document.getElementById('clock4').innerHTML = hour+':'+(minute<10?'0':'')+minute;
	window.setTimeout('clockFour()',1000);
}
function clockFif() {
	var date = new Date();
	var hour=date.getHours();
	var minute=date.getMinutes();

	document.getElementById('clock5').innerHTML = hour+':'+(minute<10?'0':'')+minute;
	window.setTimeout('clockFif()',1000);
}
function clockSix() {
	var date = new Date();
	var hour=date.getHours();
	var minute=date.getMinutes();

	document.getElementById('clock6').innerHTML = hour+':'+(minute<10?'0':'')+minute;
	window.setTimeout('clockSix()',1000);
}
function clockMain() {
	var date = new Date();
	var hour=date.getHours();
	var minute=date.getMinutes();

	document.getElementById('clockMain').innerHTML = hour+':'+(minute<10?'0':'')+minute;
	window.setTimeout('clockMain()',1000);
}
