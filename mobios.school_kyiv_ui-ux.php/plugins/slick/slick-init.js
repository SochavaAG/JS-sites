$(window).load(function () {

    $('.courses-responsive-slick').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        infinite: false,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.courses-testimonials-slick').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 2,
        infinite: false,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });
});
