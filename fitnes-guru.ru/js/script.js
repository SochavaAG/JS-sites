$(document).ready(function(){

  $('.header-down-slider').slick({
		prevArrow: '<a class="btn-slide-с btn-slide1-c"><img src="images/click-left.png"></a>',
    nextArrow: '<a class="btn-slide-с btn-slide2-c"><img src="images/click-right.png"></a>',
    adaptiveHeight: true,
  });

  $('.slider-1').slick({
    prevArrow: '<a class="btn-slide btn-slide1"><img src="images/click-left.png"></a>',
    nextArrow: '<a class="btn-slide btn-slide2"><img src="images/click-right.png"></a>',
  });

  $(".burger-icon").click(function() {
 		$('.nav__up-mobile').toggle();
	});

	$(".close-m").click(function() {
 		$('.nav__up-mobile').hide();
	});

	$(".menu__link-s").click(function() {
 		$('.submenu-m').slideToggle();
	});



  // $(".button").click(function() {
  //   $('.thank-block1').show();
  // });

  // $(".button2").click(function() {
  //   $('.thank-block2').show();
  // });

  // $(".button3").click(function() {
  //   $('.thank-block3').show();
  // });

  // $(".button4").click(function() {
  //   $('.thank-block4').show();
  // });

  $('.card-block__btn, .club-btn__trenirovka').magnificPopup({
    type: 'inline'
  });

  $('.card-block__btn, .club-btn__trenirovka').click(function(){
    var card = $(this).attr('data-title-pop-up');
    var submit = $(this).attr('data-submit-form');
    $('input[name=form-type]').val(card);
    $('.pop-up_title').html(card);
    $('.pop-up .pop-up_form').attr('onsubmit', submit);
  });

  $(".phones").mask("+7(999) 999-99-99");

  $('.gallery-1').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled:true
      }
    });
  });

  $(".b7-discount").addClass('pulse animated infinite');

  $('.b7-quest').slick({
    dots: false,
    arrows:false,
    slidesToShow: 1,
    draggable:false,
    swipe: false,
    infinite:false
  });
  $(".quest-prev").on("click", function() {
    $(".b7-quest").slick("slickPrev");
  });
  $(".quest-next").on("click", function() {
    $(".b7-quest").slick("slickNext")
  });
  $(".quest1 label").on("click", function() {
    $(".disc-opros").html("9");
  });
  $(".quest2 label").on("click", function() {
    $(".disc-opros").html("19");
  });
  $(".quest3 label").on("click", function() {
    $(".disc-opros").html("27");
  });
  $(".quest4 label").on("click", function() {
    $(".disc-opros").html("35");
    $(".b7-disc-off").css("display", "none");
    $(".b7-disc-on").css("display", "block");
    $(".b7-discount").addClass('pulse animated infinite');
    $(".b7-box .title").html("Карта со скидкой 35% уже готова и ждет Вас");
    $(".b7-text").html("Для получения заполните данные ниже");
  });
  $(".b7-disc-on").on("click", function() {
    $("#sendform3").click();
    });
  $('.question1').click(function(){
    var valueinput = $(this).find('input').val();
    $('#questsend1').val(valueinput);
  });
  $('.question2').click(function(){
    var valueinput = $(this).find('input').val();
    $('#questsend2').val(valueinput);
  });
  $('.question3').click(function(){
    var valueinput = $(this).find('input').val();
    $('#questsend3').val(valueinput);
  });
  $('.question4').click(function(){
    var valueinput = $(this).find('input').val();
    $('#questsend4').val(valueinput);
  });

});

/*-------video1------*/

var video = document.getElementById("bgvideo1");
var vid = document.getElementById("black-block1");
vid.onmouseover = function(){
  video.play();
}
vid.onmouseout = function(){
  video.pause(); 
}

/*-------video2------*/

var video2 = document.getElementById("bgvideo1");
var vid2 = document.getElementById("black-block2");
vid2.onmouseover = function(){
  video2.play();
}
vid2.onmouseout = function(){
  video2.pause(); 
}

/*-------video3------*/

var video3 = document.getElementById("bgvideo1");
var vid3 = document.getElementById("black-block3");
vid3.onmouseover = function(){
  video3.play();
}
vid3.onmouseout = function(){
  video3.pause(); 
}
