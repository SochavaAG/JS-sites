$(document).ready(function() {

  $(document).on('click', function(event) {
    if (!$(event.target).closest('.menu-icon').length) {
      $('.dropdown-menu').slideUp(500);
    }
  });

  $('.menu-icon').click(function() {
    $(this).find('.dropdown-menu').slideDown(500);
  }).find('.menu-list').children().click(function() {
    return false;
  });

  // Скролл к нужному блоку по клику в меню
  $('.menu-list a, .scroll').click(function(e){
    e.preventDefault();
    var blockLink = $(this).attr('href');
    var blockPosition = $(blockLink).offset().top;
    $('html, body').animate({
      scrollTop: blockPosition
    }, 500);
    $(this).parents('.dropdown-menu').slideUp(500);
  });

  // Анимация текстового блока Наша команда
  $('.about-section .text-block').hover(function() {
    $(this).find('.hover-block').stop(true, false).fadeIn(500);
  }, function() {
    $(this).find('.hover-block').stop(true, false).fadeOut(500);
  });

  // Анимация скрытого Интересного блока
  $('.hidden-text').hover(function() {
    $('.hidden-message').stop(true, false).fadeIn(500);
  }, function() {
    $('.hidden-message').stop(true, false).fadeOut(500);
  });

  // Анимация блоков вакансий
  $('.team-block').hover(function() {
    $(this).find('.left-side').stop(true, false).animate({
      bottom: '-131px',
      left: '240px'
    }, 450, function() {
      $(this).next('.right-side').stop(true, false).animate({
        top: '-11px',
        right: '209px'
      }, 300, function(){
        $(this).next('.hover-info').fadeIn(350);
      });
    });
    }, function() {
    $(this).find('.hover-info').fadeOut(350, function() {
      $(this).siblings('.left-side').stop(true, false).animate({
        bottom: '-330px',
        left: '-20px'
      }, 450); 
      $(this).siblings('.right-side').stop(true, false).animate({
        top: '-210px',
        right: '-10px'
      }, 450); 
    });
  });

  // Открытие блоков с описанием отделов; их закрытие
  $('.team-block').click(function(){
    if ($(this).hasClass('design')) {
      $(this).parent('.team-blocks').siblings('.description-block.design').fadeIn(500);
    } else if ($(this).hasClass('development')) {
      $(this).parent('.team-blocks').siblings('.description-block.development').fadeIn(500);
    } else {
      $(this).parent('.team-blocks').siblings('.description-block.support').fadeIn(500);
    }
  });
  $('.description-block .back').click(function(){
    $(this).parents('.description-block').fadeOut(500);
  })

  // Слайдер службы поддержки
  var owl = $('.support-slider');

  owl.owlCarousel({
    navigation : false,
    slideSpeed : 400,
    paginationSpeed : 400,
    autoHeight : true,
    singleItem: true
  });

  // Кастомные кнопки навигации
  $(".owl-next").click(function(){
    owl.trigger('owl.next');
  })
  $(".owl-prev").click(function(){
    owl.trigger('owl.prev');
  })

  // Открытие блоков с описанием вакансий; их закрытие
  $('.job-block li').click(function(){
    var jobIndex = $(this).data('index');
    $(this).parents('.job-block').slideUp(500);
    $(this).parents('.job-block').siblings('.job-description[data-index="' + jobIndex +'"]')
    .slideDown(500);
  });
  $('.job-description .back').click(function(){
    $(this).parents('.job-description').slideUp(500);
    $(this).parents('.job-description').siblings('.job-block').slideDown(500);
  });

  // Индексы для вакансий
  var liInd = 0;
  $('.job-block li').each(function(){
    $(this).attr('data-index', liInd);
    liInd++;
  });
  var vacancyInd = 0;
  $('.job-description').each(function(){
    $(this).attr('data-index', vacancyInd);
    vacancyInd++;
  });

  $('.team-block').click(function(){
    $('a[href="#third"]').trigger('click');
  });

});
