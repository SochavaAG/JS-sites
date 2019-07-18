(function ($) {

  jQuery(function () {
    var pageTitleBlock = jQuery('.page-title-block:first');
    var blockContainerMargins = jQuery('.block-container-margins:first');

    var clearfix = jQuery('<div class="clearfix"></div>');

    var rightNav = jQuery('<div class="rightNav"></div>');
    try {
      pageTitleBlock.append(rightNav);
    } catch (a) {
    }

    jQuery(blockContainerMargins).append(clearfix);

    var prevRubrica = jQuery('<div class="prevRubrica"></div>');
    var nextRubrica = jQuery('<div class="nextRubrica"></div>');

    

    var currentRubricaItem = jQuery('.menu-level--2 .is-active').parent().html();
    var firstRubrica = jQuery('.menu-level--2 .menu-item--first').html();
    var lastRubrica = jQuery('.menu-level--2 .menu-item--last').html();
    var prevRubricaItem, nextRubricaItem;

    if (jQuery('.menu-level--2 .is-active').parent().prev().html() !== undefined) {
      prevRubricaItem = jQuery('.menu-level--2 .is-active').parent().prev().html();
      prevRubrica.append(prevRubricaItem);
      rightNav.append(prevRubrica);
    } else {
      // prevRubricaItem = lastRubrica;
    }

    if (jQuery('.menu-level--2 .is-active').parent().next().html() !== undefined) {
      nextRubricaItem = jQuery('.menu-level--2 .is-active').parent().next().html();
      nextRubrica.append(nextRubricaItem);
      rightNav.append(nextRubrica);
    } else {
      // nextRubricaItem = firstRubrica;
    }

    rightNav.append(clearfix);



    // Триггер на стрелочках

    setTimeout(function() {

        var arrowNext = jQuery('.nextRubrica');
        var nextLink = arrowNext.find('a').attr('href');

        jQuery(arrowNext).on('click', function() {
          document.location.href = nextLink;
        });

        jQuery(arrowNext).on('mouseover', function(){
          (arrowNext).css('cursor', 'pointer');
        });

        var arrowPrev = jQuery('.prevRubrica'),
          prevLink = arrowPrev.find('a').attr('href');

        jQuery(arrowPrev).on('click', function() {
          document.location.href = prevLink;
        });

        jQuery(arrowPrev).on('mouseover', function(){
          (arrowPrev).css('cursor', 'pointer');
        });

    }, 1000);

  });
})(jQuery);

function check_main_news_big_img() {
  if (jQuery(window).width() >= 841) {
    var img_block = jQuery(".main-news-big-img__inside__top");
    if (img_block.length > 0) {
      var img_src = jQuery(".main-news-big-img__inside__top__photo img").attr("src");
      img_src = img_src.split("//iz.cdnvideo.ru");
      if (img_src.length>=2) img_src = 'http://iz.cdnvideo.ru'+img_src[1];
      img_block.css({"background": 'url(' + img_src + ') no-repeat', "background-position": "center 0px", "background-size": "cover", });
    }
  }
}

jQuery(document).ready(function(){
  check_main_news_big_img();
});

jQuery(window).on("load", function(){
  check_main_news_big_img();
});


