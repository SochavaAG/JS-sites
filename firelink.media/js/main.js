window.onload = function() {
    var div = document.querySelector('.wrapper');
    div && div.classList.remove('loaded')
};

$(document).ready(function() {
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        css3: true,
        scrollingSpeed: 700,
        navigation: true,
        navigationPosition: 'right',
        menu: '#menu',
        anchors:['Home', 'About', 'WeDo', 'Technology', 'GEO', 'Contacts'],
        fixedElements: '.header, .aside,.main-menu,.page-decor,.page-nav',
        responsiveWidth: 760,

	    onLeave: function(origin, destination, direction){

		    //after leaving section 2
		    if(origin.index == 0 && direction =='down'){
			    $('.header').removeClass('home-header');
			    $('.page-nav').removeClass('white-txt');
		    }

		    else if(origin.index == 1 && direction == 'up'){
			    $('.header').addClass('home-header');
			    $('.page-nav').addClass('white-txt');
		    }
	    },
        //remove icon on last slide
	    afterLoad: function(origin, destination, direction){
		    if(destination.index === 5) {
		        $('.section-move-decor').fadeOut()
            }
            else {
			    $('.section-move-decor').fadeIn();
		    }
	    }
    });

    document.querySelector('.aboutLink').addEventListener('click', function(e){
        e.preventDefault();
        fullpage_api.moveTo(2);
    });
    document.querySelector('.geoLink').addEventListener('click', function(e){
        e.preventDefault();
        fullpage_api.moveTo(5);
    });
    document.querySelector('.technologyLink').addEventListener('click', function(e){
        e.preventDefault();
        fullpage_api.moveTo(4);
    });

    // main menu

    var menu_active = 0;
    $('.main-menu-open').click(function(){
        if (!$('.main-menu').hasClass('active')) {
            $('.main-menu').addClass('active');
            $('.wrapper').addClass('closed');
            $('.main-menu-open').addClass('active');
            menu_active = 1;
        } else{
            $('.main-menu').removeClass('active');
            $('.wrapper').removeClass('closed');
            $('.main-menu-open').removeClass('active');
            menu_active = 0;
        }
    });
    $('.main-menu-overlay').click(function(){
        if (menu_active == 1) {
            $('.main-menu').removeClass('active');
            $('.wrapper').removeClass('closed');
            $('.main-menu-open').removeClass('active');
            menu_active = 0;
        }
    });

    $('.main-menu-close').click(function(){
        if (menu_active == 1) {
            $('.main-menu').removeClass('active');
            $('.wrapper').removeClass('closed');
            $('.main-menu-open').removeClass('active');
            menu_active = 0;
        }
    });
    //show map
    // $('.contacts__img').on('click', function () {
    //     $('.contacts__img').hide();
    //     $('.contacts__right').show();
    // })
    //change map
    // $('#js-map-toggler li').on('click', function () {
	 //    $('.contacts__img').hide();
	 //    $('.contacts__right').show();
    //
    //     var data = $(this).data('map');
	 //    $(data).slideDown().siblings().slideUp();
    //     $(this).addClass('is-active').siblings().removeClass('is-active')
    // })


});
