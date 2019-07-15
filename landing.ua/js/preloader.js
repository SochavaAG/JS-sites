var preloader = {
	enabled: true,
	functions: {
		delay: function(ms) {
			var start = +new Date;
			while ((+new Date - start) < ms);
		},
		finish: function() {
			$('.main-wrapper').addClass('show');
			$([
				'.b-main-homescreen-bg',
				'.b-main-homescreen-text',
				'.b-main-homescreen-title p',
				'.b-landing-homescreen-text',
				'.b-landing-homescreen-title p',
				'.b-landing-homescreen-subtitle p'
			].join(',')).addClass('animate');
			setTimeout(function () {
				$('.b-main-homescreen-line').addClass('show');
			}, 2000);
			setTimeout(function () {
				$('.b-main-homescreen-button').addClass('show');
			}, 500);
			setTimeout(function () {
				$('.b-main-homescreen-award').addClass('show');
			}, 1000);
			landingua.functions.cookieSet('cached', '1');
		}
	}
};

$(document).ready(function() {
	if (preloader.enabled && typeof landingua.functions.cookieGet('cached') === 'undefined') {
		(function() {
			var block = $('.b-preloader');
			var items = block.find('.b-preloader-item');
			function preloaderSetItem(n) {
				setTimeout(function() {
					items.eq(n).addClass('show').prev().removeClass('show');
					if (n === items.length - 1)
						/*
						checker = setInterval(function() {
							if (jQuery('body').hasClass('window-loaded')) {
								block.addClass('hide').removeClass('bg-black');
								clearInterval(checker);
								setTimeout(function() {
									preloader.functions.finish();
								}, 0);
							}
						}, 1800);
						*/
						setTimeout(function() {
							block.addClass('hide').removeClass('bg-black');
							preloader.functions.finish();
						}, 1800);
				}, n * 400);
			}
			if (block.length) {
				block.addClass('bg-black show');
				setTimeout(function() {
					items.not(':last-child').addClass('zoom-out');
					for (i = 0; i < items.length; i++) {
						preloaderSetItem(i);
					}
				}, 900);
			}
			else {
				preloader.functions.finish();
			}
		})();
	}
	else {
		preloader.functions.finish();
	}
});

$(window).on('load', function() {
	$('body').addClass('window-loaded');
});

$(window).on('beforeunload', function() {});
