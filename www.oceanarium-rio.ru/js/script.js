var loadItemFlag = true;
$(document).ready(function(){
    $('.menu .mobile ul a').click(function () {
	$('html').removeClass('menu-open');
    })
    $('.to_top').click(function () {
	$('html, body').animate({scrollTop: 0},500);
    })
    $('.menu .close').click(function () {
	$('html').removeClass('menu-open');
    })
    $('.head .burger').click(function () {
	$('html').addClass('menu-open');
    })
    $(window).resize(function () {
	if ($(window).width() > 980 && $('html').hasClass('menu-open')) {
	    $('html').removeClass('menu-open');
	}
	setPriceText();
    })
    if ($('.event_item').length && loadItemFlag) {
	loadItem();
    }
    if ($('.events_list').length && loadItemFlag) {
	loadItemList();
	$('.events_list .btn_more').click(function () {
	    loadItemList();
	})
    }
    if ($('.our_world').length && loadItemFlag) {
	loadWorldList();
	$('.our_world .btn_more').click(function () {
	    loadWorldList();
	})
    }
    if ($('.gallery').length && loadItemFlag) {
	loadGalleryList();
	$('.gallery + .btn_more').click(function () {
	    loadGalleryList();
	})
    }
    $(window).scroll(function () {
	var scrollTop = $(window).scrollTop();
	if ($('.event_item').length && loadItemFlag) {
	    if ($('.event_item + .btn_more.to_all').is(":visible")) {
		var offsetTop = $('.event_item + .btn_more.to_all').offset().top;
		var wHeight = $(window).height();
		if ((scrollTop + wHeight + 300) > offsetTop) {
		    loadItem();
		}
	    }
	}
	if (scrollTop > $(window).height()) {
	    $('html').addClass('upper');
	} else {
	    $('html').removeClass('upper');
	}
    })
    setPriceText();
});
function setPriceText() {
    var height = 0;
    $('.price_text').each(function () {
	$(this).css({height:"auto"});
	height = $(this).height() > height ? $(this).height() : height;
    })
    if ($(window).width() > 1000) {
	$('.price_text').css({height: height + "px"});
    }
}
function loadGalleryList() {
    if (loadItemFlag) {
	loadItemFlag = false;
	var lid, section;
	if ($('.gallery').data('id')) {
	    section = $('.gallery').data('id');
	}
	$('.gallery a').each (function () {
	    if (lid) {
		lid = lid + ';' + $(this).data('id');
	    } else {
		lid = $(this).data('id');
	    }
	})
	$.get( '/ajax/?action=getgallerylist&lid=' + lid + '&section=' + section, $( this ).serialize(), function( data ) {
	    if (data) {
		$('.gallery').append(data);
		loadItemFlag = true;
	    }
	    lid = '';
	    $('.gallery a').each (function () {
		if (lid) {
		    lid = lid + ';' + $(this).data('id');
		} else {
		    lid = $(this).data('id');
		}
	    })
	    $.get( '/ajax/?action=getgallerylist&check=Y&lid=' + lid + '&section=' + section, $( this ).serialize(), function( data ) {
		if (!data) {
		    $('.gallery + .btn_more').hide();
		    loadItemFlag = false;
		}
	    });
	});
    }
}
function loadWorldList() {
    if (loadItemFlag) {
	loadItemFlag = false;
	var lid, section;
	if ($('.our_world').data('id')) {
	    section = $('.our_world').data('id');
	}
	
	$('.our_world .fish_item').each (function () {
	    if (lid) {
		lid = lid + ';' + $(this).data('id');
	    } else {
		lid = $(this).data('id');
	    }
	})
	$.get( '/ajax/?action=getworldlist&lid=' + lid + '&section=' + section, $( this ).serialize(), function( data ) {
	    if (data) {
		$('.our_world .btn_more').before(data);
		loadItemFlag = true;
	    }
	    lid = '';
	    $('.our_world .fish_item').each (function () {
		if (lid) {
		    lid = lid + ';' + $(this).data('id');
		} else {
		    lid = $(this).data('id');
		}
	    })
	    $('.owl-carousel.fish_img:not(.owl-loaded)').owlCarousel({
		margin: 0,
		loop: false,
		items: 1,
		responsiveClass:true,
		responsive:{
		    0:{
			margin: 10
		    },
		    768:{
			margin: 0
		    }
		},
		onDragged: function (event) {
		    $(event.target).closest('.fish_item').find('.other span').removeClass('active');
		    $(event.target).closest('.fish_item').find('.other span:eq(' + event.item.index + ')').addClass('active');
		}
	    })
	    $.get( '/ajax/?action=getworldlist&check=Y&lid=' + lid + '&section=' + section, $( this ).serialize(), function( data ) {
		if (!data) {
		    $('.our_world .btn_more').hide();
		    loadItemFlag = false;
		}
	    });
	});
    }
}
function loadItemList() {
    if (loadItemFlag) {
	loadItemFlag = false;
	var lid;
	$('.events_list .fish_item').each (function () {
	    if (lid) {
		lid = lid + ';' + $(this).data('id');
	    } else {
		lid = $(this).data('id');
	    }
	})
	var ib = 1;
	if ($('.action_list').length) {
	    ib = 8;
	}
	$.get( '/ajax/?action=geteventlist&lid=' + lid + '&ib=' + ib, $( this ).serialize(), function( data ) {
	    if (data) {
		$('.events_list .btn_more').before(data);
		loadItemFlag = true;
	    }
	    lid = '';
	    $('.events_list .fish_item').each (function () {
		if (lid) {
		    lid = lid + ';' + $(this).data('id');
		} else {
		    lid = $(this).data('id');
		}
	    })
	    $.get( '/ajax/?action=geteventlist&check=Y&lid=' + lid + '&ib=' + ib, $( this ).serialize(), function( data ) {
		if (!data) {
		    $('.events_list .btn_more').hide();
		    loadItemFlag = false;
		}
	    });
	});
    }
}
function loadItem() {
    if (loadItemFlag) {
	loadItemFlag = false;
	var lid;
	$('.ocean_bg.event_item').each (function () {
	    if (lid) {
		lid = lid + ';' + $(this).data('id');
	    } else {
		lid = $(this).data('id');
	    }
	})
	var ib = 1;
	if ($('.action_detail').length) {
	    ib = 8;
	}
	$.get( '/ajax/?action=getevent&lid=' + lid, $( this ).serialize() + '&ib=' + ib, function( data ) {
	    if (data) {
		$('.ocean_bg.event_item').last().after(data);
		loadItemFlag = true;
		$('.photos .owl-carousel:not(.owl-loaded)').owlCarousel({
		    margin: 10,
		    loop: true,
		    items: 1,
		    responsiveClass:true,
		    onInitialized: function (event) {
			$(event.target).closest('.photos').find('.cnt .all').html(event.item.count);
			$(event.target).closest('.photos').find('.cnt .cur').html(1);
		    },
		    onTranslated: function (event) {
			$(event.target).closest('.photos').find('.cnt .cur').html(event.page.index + 1);
		    }
		})
	    }
	});
    }
}

$( document ).ready( function () {
  $( '.popup .close' ).click( function() {
    $( '.popup' ).fadeOut();
    return false;
  } );
  
  $( '.popup' ).click( function( e ) {
    if( $( e.target ).closest( '.dialogue' ).length ) return;
    $( '.popup' ).fadeOut();
    e.stopPropagation();
  } );

  $( '.order_excursion' ).click( function() {
    $( '#order_excursion' ).fadeIn();
    return false;
  } );

  $( '.order_event' ).click( function() {
    $( '#order_event' ).fadeIn();
    return false;
  } );
  $('#about_form input[type=checkbox]').change(function () {
      if ($(this).is(":checked")) {
	$( this ).closest('.input_checkbox').removeClass( 'error' );
      }
  })
  $('#about_form input[name=num], #about_form input[name=code]').keypress(function (e) {
	if (e.ctrlKey || e.altKey || e.metaKey) return;
	var chr = $(e)[0].originalEvent.key
	if (chr == null) return;
	if (chr < '0' || chr > '9') {
	  return false;
	}
  })
  $('#about_form textarea, #about_form input[type=text]').keyup(function () {
      if ( ($(this).attr('name') == "code" || $(this).attr('name') == "num") ) {
	if (
	    $('#about_form input[name=code]').val()
	    & $('#about_form input[name=num]').val()
	    ) {
	    $( this ).closest('.input_wrapper').removeClass( 'error' );
	}
      } else if ($(this).val() != '') {
	$( this ).closest('.input_wrapper').removeClass( 'error' );
      }
  })
  $( 'form' ).submit( function( event ) {
    var noerrors = true;
    var ths = $(this);
    $( this ).find( 'input[type="text"]' ).each( function() {
	if ($(this).closest('.input_wrapper').length) {
	    if( $( this ).val() == '' ) {
	      noerrors = false;
	      $( this ).closest('.input_wrapper').addClass( 'error' );
	    } else {
	      $( this ).closest('.input_wrapper').removeClass( 'error' );
	    }
	} else {
	    if( $( this ).val() == '' ) {
	      noerrors = false;
	      $( this ).addClass( 'error' );
	    } else
	      $( this ).removeClass( 'error' );
	}
    } );
    $( this ).find( 'input[name="agree"]' ).each( function() {
	if($(this).closest('.input_checkbox').length) {
	    if (!$(this).is(":checked")) {
	      noerrors = false;
	      $( this ).closest('.input_checkbox').addClass( 'error' );
	    } else {
	      $( this ).closest('.input_checkbox').removeClass( 'error' );
	    }
	}
    } );
    $( this ).find( '.input_wrapper textarea' ).each( function() {
	if( $( this ).val() == '' ) {
	  noerrors = false;
	  $( this ).closest('.input_wrapper').addClass( 'error' );
	} else {
	  $( this ).closest('.input_wrapper').removeClass( 'error' );
	}
    } );

    if( noerrors ) {
      $.post( '/ajax/form.php', $( this ).serialize(), function( data ) {
	  console.log(data)
        ths . find( 'button' ).fadeOut(
          'fast',
          function() {
            ths . find( '.ok' ).fadeIn(
              'fast',
              function() {
//                setTimeout( function() { window.location.reload(); }, 5000 );
              }
            )
          }
        );
      } );
    }
    
    return false;
  } );
  
    $('.main_gallery_block .owl-carousel.mobile_hide').owlCarousel({
	margin: 0,
	loop: true,
	autoWidth: true,
	onDrag: function () {
	    $('.main_gallery_block .swipe').fadeOut(500, function () {
		$(this).remove();
	    });
	}
    })
    $('.main_gallery_block .owl-carousel.mobile').owlCarousel({
	margin: 0,
	loop: true,
	items: 1,
	onDrag: function () {
	    $('.main_gallery_block .swipe').fadeOut(500, function () {
		$(this).remove();
	    });
	}
    })
    $('.owl-carousel.fish_img').owlCarousel({
	margin: 0,
	loop: false,
	items: 1,
	responsiveClass:true,
	responsive:{
	    0:{
		margin: 10
	    },
	    768:{
		margin: 0
	    }
	},
	onDragged: function (event) {
	    $(event.target).closest('.fish_item').find('.other span').removeClass('active');
	    $(event.target).closest('.fish_item').find('.other span:eq(' + event.item.index + ')').addClass('active');
//	    $(event.target).closest('.fish_item').find('.owl-dots').find('.owl-dot:eq(' + $(this).index() + ')').click();
	}
    })
    $('.photos .owl-carousel').owlCarousel({
	margin: 10,
	loop: true,
	items: 1,
	responsiveClass:true,
	onInitialized: function (event) {
	    $(event.target).closest('.photos').find('.cnt .all').html(event.item.count);
	    $(event.target).closest('.photos').find('.cnt .cur').html(1);
	},
	onTranslated: function (event) {
	    $(event.target).closest('.photos').find('.cnt .cur').html(event.page.index + 1);
	}
    })
    $('body').delegate(".photos .arrow_right", "click", function () {
	$(this).closest('.photos').find('.owl-next').click();
    })
    $('body').delegate(".photos .arrow_left", "click", function () {
	$(this).closest('.photos').find('.owl-prev').click();
    })
    
    $('body').delegate(".fish_item .other span", "click", function () {
	$(this).closest('.fish_item').find('.other span').removeClass('active');
	$(this).addClass('active');
	$(this).closest('.fish_item').find('.owl-dots').find('.owl-dot:eq(' + $(this).index() + ')').click();
    })
} );
function initMap() {
    var Lat = 55.909953;
    var Lng = 37.541191;
    if ($(window).outerWidth() <= 960) {
	Lat = 55.911053;
//	Lng = 37.537191;
    }
    var mapOptions = {
	zoom: 15,
	center: new google.maps.LatLng(Lat, Lng), 
	disableDefaultUI: true,
	styles: [
		    {
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
			    {
				"color": "#a8c0ff"
			    }
			]
		    },
		    {
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
			    {
				"color": "#071f6e"
			    }
			]
		    },
		    {
			"featureType": "administrative",
			"elementType": "all",
			"stylers": [
			    {
				"color": "#465ead"
			    }
			]
		    },
		    {
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
			    {
				"color": "#a8c0ff"
			    }
			]
		    },
		    {
			"featureType": "administrative",
			"elementType": "labels.text.stroke",
			"stylers": [
			    {
				"color": "#071f6e"
			    }
			]
		    },
		    {
			"featureType": "landscape",
			"elementType": "geometry.fill",
			"stylers": [
			    {
				"color": "#02286a"
			    }
			]
		    },
		    {
			"featureType": "landscape",
			"elementType": "geometry.stroke",
			"stylers": [
			    {
				"color": "#233b8a"
			    }
			]
		    },
		    {
			"featureType": "poi",
			"stylers": [
			    {
			      "visibility": "off"
			    }
			]
		    },
		    {
			"featureType": "poi",
			"elementType": "geometry.fill",
			"stylers": [
			    {
				"color": "#2b4392"
			    }
			]
		    },
		    {
			"featureType": "poi",
			"elementType": "geometry.stroke",
			"stylers": [
			    {
				"color": "#233b8a"
			    }
			]
		    },
		    {
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
			    {
				"color": "#133a7d"
			    }
			]
		    },
		    {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
			    {
				"color": "#2c4493"
			    }
			]
		    },
		    {
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			    {
				"color": "#a3bbff"
			    }
			]
		    },
		    {
			"featureType": "road.highway",
			"elementType": "labels.text.stroke",
			"stylers": [
			    {
				"color": "#112978"
			    }
			]
		    },
		    {
			"featureType": "road.arterial",
			"elementType": "geometry.fill",
			"stylers": [
			    {
				"color": "#011e52"
			    }
			]
		    },
		    {
			"featureType": "road.arterial",
			"elementType": "geometry.stroke",
			"stylers": [
			    {
				"color": "#0d2574"
			    }
			]
		    },
		    {
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
			    {
				"color": "#011e52"
			    }
			]
		    },
		    {
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
			    {
				"color": "#133a7d"
			    }
			]
		    },
		    {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			    {
				"color": "#20478a"
			    }
			]
		    }
		]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
	position: new google.maps.LatLng(55.909953, 37.541191),
	map: map,
	title: 'ТРЦ РИО, Дмитровское ш., 163, Москва, 127204',
	icon: {
		url: "/v/img/ico_map_pin.png",
		scaledSize: new google.maps.Size(33, 43)
	}
    });
    var infowindow = new google.maps.InfoWindow({
            content: '<div class="pin_title">ТРЦ РИО, Дмитровское ш., 163,<br/>Москва, 127204</div>'
    });
    infowindow.open(map, marker);
    $('.gm-style-iw').prev('div').addClass('gm-style-iw-prev')
    
    google.maps.event.addListener(infowindow, 'domready', function() {
       var iwOuter = $('.gm-style-iw');
       var iwBackground = iwOuter.prev();
       iwOuter.parent().addClass('gm-style-iw-parent');
       iwOuter.next().remove();
       iwBackground.remove();
    });
}
