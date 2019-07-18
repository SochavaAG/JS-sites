$(function () {
    var slidesShow = 4;
    if($(window).width() < 1200){
        slidesShow = 3;
    }
    if($(window).width() < 768){
        slidesShow = 2;
    }
    if($(window).width() < 575){
        slidesShow = 1;
    }

    $('.slide-brand').on("init", function(){
        $('.slide-brand').removeClass('noactive');
    }).slick({
        slidesToShow: slidesShow,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});
