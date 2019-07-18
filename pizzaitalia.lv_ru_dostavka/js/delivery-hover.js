(function ($) {

  Array.prototype.diff = function (a) {
    return this.filter(function (i) {
      return a.indexOf(i) < 0;
    });
  };

  function agPropPrefix(agPropName, agValue, agDivide, agExclusionArr) {
    if (agExclusionArr === undefined) {
      var agExclusionArr = [];
    }

    var agPrefixesArr = ['-webkit-', '-moz-', '-ms-', '-o-'],
      agVendors = agPrefixesArr.diff(agExclusionArr),
      result = '',
      agDivide = agDivide;

    for (var i = 0; i < agVendors.length; i++) {
      var agLastItem = i < (agVendors.length - 1);

      if (agLastItem) {
        agDivide = agDivide;
      } else {
        agDivide = '';
      }
      result += '\'' + agVendors[i] + agPropName + '\':\'' + agValue + '\'' + agDivide;
    }
    return result;
  }

  /*console.log(agPropPrefix('clip-path', 'polygon(15% 0, 84% 15%, 100% 50%, 89% 85%, 0 100%)', ',', ['-o-', '-moz-', '-webkit-']));*/


  var uA = window.navigator.userAgent,
    onlyIEorEdge = /msie\s|trident\/|edge\//i.test(uA) && !!( document.uniqueID || window.MSInputMethodContext),
    checkVersion = (onlyIEorEdge && +(/(edge\/|rv:|msie\s)([\d.]+)/i.exec(uA)[2])) || NaN,
    result = document.getElementById('resultado');

  if (!isNaN(checkVersion)) {
    $('.delivery-container-1').removeClass('hidden');
    $('.page-delivery').removeClass('hidden');
    $('.page-delivery-background').addClass('hidden');
    $('.page-delivery-1').addClass('hidden');
  }
  else {
    $('.delivery-arrow-back-1').addClass('my-anim');
    $('.delivery-arrow-back-2').addClass('my-anim');
    $('.delivery-arrow-back-3').addClass('my-anim');
    $(document).ready(function () {
      if ($(window).width() >= 975) {
        $('.delivery-arrow-front-1').css('-webkit-clip-path',
          'polygon(15% 0, 84% 15%, 100% 50%, 89% 85%, 0 100%)');
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(1% 15%, 79% 0, 96% 50%, 80% 100%, 5% 85%, 15% 50%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(0 0, 85% 15%, 100% 85%, 0 100%, 15% 50%)');
        $('.delivery-arrow-front-1').css('clip-path',
          'polygon(15% 0, 84% 15%, 100% 50%, 89% 85%, 0 100%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(1% 15%, 79% 0, 96% 50%, 80% 100%, 5% 85%, 15% 50%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(0 0, 85% 15%, 100% 85%, 0 100%, 15% 50%)');
      } else {
        $('.delivery-arrow-front-1').css('-webkit-clip-path',
          'polygon(0 15%, 100% 0%, 85% 84%, 50% 100%, 15% 89%)');
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 100% 79%, 50% 96%, 0 80%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(0 0, 50% 15%, 100% 0, 85% 95%, 15% 90%)');
        $('.delivery-arrow-front-1').css('clip-path',
          'polygon(0 15%, 100% 0%, 85% 84%, 50% 100%, 15% 89%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 100% 79%, 50% 96%, 0 80%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(0 0, 50% 15%, 100% 0, 85% 95%, 15% 90%)');
      }
      OnResize();
    });

    // block-1 >=992
    function HoverBlock1b() {
      $('.delivery-block-1').hover(function () {
        $('.delivery-arrow-front-1').css({
          '-webkit-clip-path': 'polygon(15% 5%, 84% 10%, 100% 50%, 89% 90%, 0 95%)',
          'clip-path': 'polygon(15% 5%, 84% 10%, 100% 50%, 89% 90%, 0 95%)'
        });
        $('.delivery-arrow-front-2').css({
          '-webkit-clip-path': 'polygon(1% 10%, 79% 0, 96% 50%, 80% 100%, 5% 90%, 15% 50%)',
          'clip-path': 'polygon(1% 10%, 79% 0, 96% 50%, 80% 100%, 5% 90%, 15% 50%)'
        });
      }, function () {
        // on mouseout reset
        $('.delivery-arrow-front-1').css('-webkit-clip-path',
          'polygon(15% 0, 84% 15%, 100% 50%, 89% 85%, 0 100%)');
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(1% 15%, 79% 0, 96% 50%, 80% 100%, 5% 85%, 15% 50%)');
        $('.delivery-arrow-front-1').css('clip-path',
          'polygon(15% 0, 84% 15%, 100% 50%, 89% 85%, 0 100%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(1% 15%, 79% 0, 96% 50%, 80% 100%, 5% 85%, 15% 50%)');
      });
    }

    // block-2 >=992
    function HoverBlock2b() {
      $('.delivery-block-2').hover(function () {
        $('.delivery-arrow-front-1').css('-webkit-clip-path',
          'polygon(15% 0%, 84% 10%, 100% 50%, 89% 90%, 0 100%)');
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(1% 10%, 79% 5%, 96% 50%, 80% 95%, 5% 90%, 15% 50%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(0 5%, 85% 15%, 100% 85%, 0 95%, 15% 50%)');
        $('.delivery-arrow-front-1').css('clip-path',
          'polygon(15% 0%, 84% 10%, 100% 50%, 89% 90%, 0 100%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(1% 10%, 79% 5%, 96% 50%, 80% 95%, 5% 90%, 15% 50%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(0 5%, 85% 15%, 100% 85%, 0 95%, 15% 50%)');
      }, function () {
        // on mouseout reset
        $('.delivery-arrow-front-1').css('-webkit-clip-path',
          'polygon(15% 0, 84% 15%, 100% 50%, 89% 85%, 0 100%)');
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(1% 15%, 79% 0, 96% 50%, 80% 100%, 5% 85%, 15% 50%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(0 0, 85% 15%, 100% 85%, 0 100%, 15% 50%)');
        $('.delivery-arrow-front-1').css('clip-path',
          'polygon(15% 0, 84% 15%, 100% 50%, 89% 85%, 0 100%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(1% 15%, 79% 0, 96% 50%, 80% 100%, 5% 85%, 15% 50%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(0 0, 85% 15%, 100% 85%, 0 100%, 15% 50%)');
      });
    }

    // block-3 >=992
    function HoverBlock3b() {
      $('.delivery-block-3').hover(function () {
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(1% 15%, 79% 5%, 96% 50%, 80% 95%, 5% 85%, 15% 50%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(0 5%, 85% 10%, 100% 90%, 0 95%, 15% 50%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(1% 15%, 79% 5%, 96% 50%, 80% 95%, 5% 85%, 15% 50%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(0 5%, 85% 10%, 100% 90%, 0 95%, 15% 50%)');
      }, function () {
        // on mouseout reset
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(1% 15%, 79% 0, 96% 50%, 80% 100%, 5% 85%, 15% 50%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(0 0, 85% 15%, 100% 85%, 0 100%, 15% 50%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(1% 15%, 79% 0, 96% 50%, 80% 100%, 5% 85%, 15% 50%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(0 0, 85% 15%, 100% 85%, 0 100%, 15% 50%)');
      });
    }

    // block-1 <992
    function HoverBlock1s() {
      $('.delivery-block-1').hover(function () {
        $('.delivery-arrow-front-1').css('-webkit-clip-path',
          'polygon(5% 15%, 95% 0, 90% 84%, 50% 100%, 10% 89%)');
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(10% 5%, 50% 15%, 90% 1%, 100% 79%, 50% 96%, 0 80%)');
        $('.delivery-arrow-front-1').css('clip-path',
          'polygon(5% 15%, 95% 0, 90% 84%, 50% 100%, 10% 89%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(10% 5%, 50% 15%, 90% 1%, 100% 79%, 50% 96%, 0 80%)');
      }, function () {
        // on mouseout reset
        $('.delivery-arrow-front-1').css('-webkit-clip-path',
          'polygon(0 15%, 100% 0, 85% 84%, 50% 100%, 15% 89%)');
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 100% 79%, 50% 96%, 0 80%)');
        $('.delivery-arrow-front-1').css('clip-path',
          'polygon(0 15%, 100% 0, 85% 84%, 50% 100%, 15% 89%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 100% 79%, 50% 96%, 0 80%)');
      });
    }

    // block-2 <992
    function HoverBlock2s() {
      $('.delivery-block-2').hover(function () {
        $('.delivery-arrow-front-1').css('-webkit-clip-path',
          'polygon(0 15%, 100% 0, 90% 84%, 50% 100%, 10% 89%)');
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(10% 5%, 50% 15%, 90% 1%, 95% 79%, 50% 96%, 5% 80%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(5% 0, 50% 15%, 95% 0, 85% 95%, 15% 90%)');
        $('.delivery-arrow-front-1').css('clip-path',
          'polygon(0 15%, 100% 0, 90% 84%, 50% 100%, 10% 89%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(10% 5%, 50% 15%, 90% 1%, 95% 79%, 50% 96%, 5% 80%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(5% 0, 50% 15%, 95% 0, 85% 95%, 15% 90%)');
      }, function () {
        // on mouseout reset
        $('.delivery-arrow-front-1').css('-webkit-clip-path',
          'polygon(0 15%, 100% 0, 85% 84%, 50% 100%, 15% 89%)');
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 100% 79%, 50% 96%, 0 80%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(0 0, 50% 15%, 100% 0, 85% 95%, 15% 90%)');
        $('.delivery-arrow-front-1').css('clip-path',
          'polygon(0 15%, 100% 0, 85% 84%, 50% 100%, 15% 89%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 100% 79%, 50% 96%, 0 80%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(0 0, 50% 15%, 100% 0, 85% 95%, 15% 90%)');
      });
    }

    // block-3 <992
    function HoverBlock3s() {
      $('.delivery-block-3').hover(function () {
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 95% 79%, 50% 96%, 5% 80%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(5% 0, 50% 15%, 95% 0, 87% 95%, 13% 90%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 95% 79%, 50% 96%, 5% 80%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(5% 0, 50% 15%, 95% 0, 87% 95%, 13% 90%)');
      }, function () {
        // on mouseout reset
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 100% 79%, 50% 96%, 0 80%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(0 0, 50% 15%, 100% 0, 85% 95%, 15% 90%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 100% 79%, 50% 96%, 0 80%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(0 0, 50% 15%, 100% 0, 85% 95%, 15% 90%)');
      });
    }

    function OnResize() {
      if ($(window).width() >= 975) {
        HoverBlock1b();
        HoverBlock2b();
        HoverBlock3b();
      } else {
        HoverBlock1s();
        HoverBlock2s();
        HoverBlock3s();
      }
    }

    $(window).resize(function () {
      if ($(window).width() >= 976) {
        $('.delivery-arrow-front-1').css('-webkit-clip-path',
          'polygon(15% 0, 84% 15%, 100% 50%, 89% 85%, 0 100%)');
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(1% 15%, 79% 0, 96% 50%, 80% 100%, 5% 85%, 15% 50%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(0 0, 85% 15%, 100% 85%, 0 100%, 15% 50%)');
        $('.delivery-arrow-front-1').css('clip-path',
          'polygon(15% 0, 84% 15%, 100% 50%, 89% 85%, 0 100%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(1% 15%, 79% 0, 96% 50%, 80% 100%, 5% 85%, 15% 50%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(0 0, 85% 15%, 100% 85%, 0 100%, 15% 50%)');
      } else {
        $('.delivery-arrow-front-1').css('-webkit-clip-path',
          'polygon(0 15%, 100% 0, 85% 84%, 50% 100%, 15% 89%)');
        $('.delivery-arrow-front-2').css('-webkit-clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 100% 79%, 50% 96%, 0 80%)');
        $('.delivery-arrow-front-3').css('-webkit-clip-path',
          'polygon(0 0, 50% 15%, 100% 0, 85% 95%, 15% 90%)');
        $('.delivery-arrow-front-1').css('clip-path',
          'polygon(0 15%, 100% 0, 85% 84%, 50% 100%, 15% 89%)');
        $('.delivery-arrow-front-2').css('clip-path',
          'polygon(15% 5%, 50% 15%, 85% 1%, 100% 79%, 50% 96%, 0 80%)');
        $('.delivery-arrow-front-3').css('clip-path',
          'polygon(0 0, 50% 15%, 100% 0, 85% 95%, 15% 90%)');
      }
      OnResize();
    });

  }

}(jQuery));
