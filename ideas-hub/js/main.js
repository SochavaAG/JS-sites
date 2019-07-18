(function ($) {
  $(function () {

    //console.log($('.js-words-wrapper').children('.is-visible').index());

    $('#js-slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      pauseOnHover: false,
      cssEase: 'linear'
    });


    /* toggle menu */
    var agMenuBtn = $('.js-nav-bars_btn'),
      agMenuNav = $('.js-nav-block');

    agMenuBtn.on('click', function () {
      $(this).children().toggleClass('js-ag-nav-bars_icon-show');
      agMenuNav.toggleClass('js-ag-nav-block');
    });
    /* /toggle menu */

    $(window).on('scroll', function () {
      agNavMenuShow();
    });

    agNavMenuShow();

    function agNavMenuShow() {
      var agSliderHeight = $('#js-slider').height();

      if ($(window).scrollTop() >= agSliderHeight - 100) {
        $('.js-header').addClass('js-ag-header');
      } else if ($(window).scrollTop() <= 1) {
        $('.js-header').removeClass('js-ag-header');
      }
    }


    var agItemTitle = $('.js-search_title-item'),
      agItemText = $('.js-search_text-item');

    agItemTitle.on('click', function () {
      agItemTitle.next(agItemText).slideUp();
      agItemTitle.parent('li').removeClass('js-ag-search_item__active');

      if ($(this).next(agItemText).css('display') == 'none') {
        $(this).next(agItemText).slideDown();
        $(this).parent('li').addClass('js-ag-search_item__active');
      }
    });


    $('.js-nav_btn-anchor').on('click', function (e) {
      e.preventDefault();

      var agBlockID = $(this).attr('href'),
        agBlockAnchor = $(agBlockID).offset().top,
        agWindowSize = agGetWindowSize(),
        agHeaderHeight = $('.js-header').height();


      $('body, html').animate({scrollTop: agBlockAnchor - agHeaderHeight}, 500);
      setTimeout(function () {
        $('.js-nav_link-anchor').parent().removeClass('js-ag-nav_item__active');
      }, 505);

    });

// Cache selectors
    var agLastID,
      agTopMenu = $('.js-header'),
      agTopMenuHeight = agTopMenu.outerHeight(),
      // All list items
      agMenuItems = $('.js-nav_link-anchor'),
      // Anchors corresponding to menu items
      agScrollItems = agMenuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
          return item;
        }
      });

// Bind click handler to menu items
// so we can get a fancy scroll animation
    agMenuItems.click(function(e){
      var agHREF = $(this).attr('href'),
        agOffsetTop = agHREF === "#" ? 0 : $(agHREF).offset().top - agTopMenuHeight + 1;

      $('html, body').stop().animate({ scrollTop: agOffsetTop }, 300);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
      // Get container scroll position
      var agFromTop = $(this).scrollTop() + agTopMenuHeight;
      // Get id of current scroll item
      var cur = agScrollItems.map(function () {
        if ($(this).offset().top < agFromTop)
          return this;
      });
      // Get the id of the current element
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";

      //console.log(cur);
      if (agLastID !== id) {
        agLastID = id;

        // Set/remove active class
        agMenuItems.parent().removeClass('js-ag-nav_item__active').end().filter("[href='#" + id + "']").parent().addClass('js-ag-nav_item__active');
      }

      if (agLastID == 'anchor-sart') {
        agMenuItems.parent().removeClass('js-ag-nav_item__active');
        $('.js-nav_link-anchor').filter("[href='#anchor-sart']").parent().addClass('js-ag-nav_item__active');
      }

      if ($(window).height() >= Math.round($(document).height() - $('#anchor-contact').parent('div').offset().top)) {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
          agMenuItems.parent().removeClass('js-ag-nav_item__active');
          $('.js-nav_link-anchor').filter("[href='#anchor-contact']").parent().addClass('js-ag-nav_item__active');
        } else {
          $('.js-nav_link-anchor').filter("[href='#anchor-contact']").parent().removeClass('js-ag-nav_item__active');
        }
      }
    });

    function agGetWindowSize() {
      var winWidth = 0,
        winHeight = 0;

      if (typeof window.innerWidth === "number") {
        //Non-IE
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;
      } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in "standards compliant mode"
        winWidth = document.documentElement.clientWidth;
        winHeight = document.documentElement.clientHeight;
      } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        winWidth = document.body.clientWidth;
        winHeight = document.body.clientHeight;
      }

      return {
        width: winWidth,
        height: winHeight
      };
    }


  });
})(jQuery);