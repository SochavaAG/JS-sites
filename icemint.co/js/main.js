// Preloader
$(function () {
    setTimeout(function () {
        $('#preloader').addClass('remove');
    }, 1000);
});

// Wrap every letter in a span
$('.h3').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

// pagePiling.js initialization
$(document).ready(function() {
    $('#pagepiling').pagepiling({
		menu: '#menu',
        anchors: ['icemint', 'eltexsoft', 'bashtannik'],
        sectionsColor: ['#252525', '#333842', '#1a1a1a'],
        navigation: false,
		afterRender: function(){
            $('.content-1 .section__icon, .header').addClass('animated animated-d4 fadeIn');
            $('.content-1 .section__company-name, .main-menu').addClass('animated animated-d5 fadeIn');
            $('.content-1 .section__description').addClass('animated animated-d6 fadeIn');
            $('.section__footer, .footer').addClass('animated animated-d7 fadeIn');
        },
        onLeave: function(index, nextIndex, direction) {
            $('.section__icon, .header').removeClass('animated animated-d0 animated-d1 fadeIn');
            $('.section__company-name').removeClass('animated animated-d1 fadeIn');
            $('.section__description').removeClass('animated animated-d2 fadeIn');
            $('.section__footer, .btn--default, .footer').removeClass('animated animated-d3 fadeIn');

            switch(nextIndex){
                case 1:
                    $('.content-1 .section__icon').addClass('animated animated-d0 fadeIn');
                    $('.content-1 .section__company-name').addClass('animated animated-d1 fadeIn');                  
                    $('.content-1 .section__description').addClass('animated animated-d2 fadeIn');
                    $('.section__footer').addClass('animated animated-d3 fadeIn');
                break;
                case 2:
                    $('.content-2 .section__icon').addClass('animated animated-d1 fadeIn');
                    $('.content-2 .section__description').addClass('animated animated-d2 fadeIn');
                    $('.content-2 .btn').addClass('animated animated-d3 fadeIn');
                break;
                case 3:
                    anime.timeline()
                    .add({
                        targets: '.h3 .letter',
                        opacity: [0,1],
                        easing: "easeInOutQuad",
                        duration: 600,
                        delay: function(el, i) {
                            return 70 * (i+1)
                        }
                    });

                    $('.content-3 .section__description').addClass('animated animated-d2 fadeIn');
                    $('.content-3 .btn').addClass('animated animated-d3 fadeIn');

                break;
                default:
                break;
            }

        }
    });

    $('.btn--scroll').click(function () {
        $.fn.pagepiling.moveSectionDown();
    });
});
