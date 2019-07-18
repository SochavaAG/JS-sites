$(document).ready(function(){
  $(".step6").click(function(e) {
		e.preventDefault();
		$(".history-block").hide();
		$(".history-block6").show();
  });

	$(".phone-masc").mask("+7 (999) 999-99-99");
  $("#phone2").mask("+7 (999) 999-99-99");

  $(".btn").click(function() {
    $('.thanks').show();
  });
  
  $(".marker-more").click(function(e) {
  	e.preventDefault();
    $('.marker_desc-hide').show();
  });

  $(".directions_item").click(function(e) {
    e.preventDefault(); 
    var title = $(this).find(".direction_name").html();
    
    $(".modal-title_span").html(title);
    $(".input-hidden").val(title);
  });

  $(".directions_add").click(function(e) {
    e.preventDefault(); 
    var title = $(this).find(".mod").html();
    $(".modal-title_span").text(title);
    $(".input-hidden").val(title);
  });


   $('.form_header').submit(function(e) {

      e.preventDefault();

      var inp = $('.active').text();
   
      $(".input_hidden").val(inp);

      var form = $(this), button = $(this).find('[type=submit]'), thanks = $('.thanks-block');
      button.html('Подождите').attr('disabled', true);

      $.post('form.php', form.serialize(), function(data) {
      
        thanks.show();

      });
  });

  $('.modal_form').submit(function(e) {

    e.preventDefault();  

    var form = $(this), button = $(this).find('[type=submit]'), thanks = $('.thanks-block-modal');
    button.html('Подождите').attr('disabled', true);

    $.post('form.php', form.serialize(), function(data) {
    
      thanks.slideDown();

    });

  });

  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    var id  = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

});

