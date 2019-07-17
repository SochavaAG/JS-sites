jQuery(document).ready(function(){
		    jQuery('#profile-scroll').scrollbar();
		    jQuery('#description-cheat').scrollbar();
		    $('[data-fancybox="gallery"]').fancybox({
			    selector : '[data-fancybox="gallery"]',
			    loop: true,
			      infobar: true,
			      transitionEffect: "tube",
			      buttons: [
        			"close"
   				  ]
			});
		    $('[data-fancybox="gallery2"]').fancybox({
			    selector : '[data-fancybox="gallery2"]',
			    loop: true,
			      infobar: true,
			      transitionEffect: "tube",
			      buttons: [
        			"close"
   				  ]
	});
});
