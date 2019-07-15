var landingua = {
	cursorPosition: {
		x: Math.ceil($(window).width() / 2),
		y: Math.ceil($(window).height() / 2)
	},
	isMobile: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),
	isTouch: Modernizr.touchevents,
	scrollWidth: window.innerWidth - document.documentElement.clientWidth,
	sliders: {
		homescreenCases: {
			current: 0,
			offset: 0,
			slideDelta: 300,
			updateInfo: function () {
				var slide = $('.b-main-cases-slide.active');
				var info = $('.b-main-cases-slide-content');
				var logo = info.find('.b-main-cases-slide-logo');
				info.addClass('animate');
				setTimeout(function () {
					logo.empty();
					slide.find('.b-main-cases-slide-logo img').clone().appendTo(logo);
					info.find('.b-main-cases-slide-text').text(slide.data('title'));
					info.attr('href', slide.attr('href'));
				}, 450);
				setTimeout(function () {
					info.removeClass('animate');
				}, 900);
			}
		},
		portfolio: {
			
		}
	},
	functions: {
		cookieSet: function (name, value, options) {
			options = options || {};
			var expires = options.expires;
			if (typeof expires === 'number' && expires) {
				var d = new Date();
				d.setTime(d.getTime() + expires * 1000);
				expires = options.expires = d;
			}
			if (expires && expires.toUTCString) {
				options.expires = expires.toUTCString();
			}
			value = encodeURIComponent(value);
			var updatedCookie = name + "=" + value;
			for (var propName in options) {
				updatedCookie += "; " + propName;
				var propValue = options[propName];
				if (propValue !== true) {
					updatedCookie += "=" + propValue;
				}
			}
			document.cookie = updatedCookie;
		},
		cookieDelete: function (name) {
			this.cookieSet(name, '', {
				expires: -1
			});
		},
		cookieGet: function (name) {
			var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
			return matches ? decodeURIComponent(matches[1]) : undefined;
		},
		scrollLock: function () {
			$('html').addClass('scroll-lock');
			$('.main-wrapper, .b-fixed-content, .b-header').css('padding-right', landingua.scrollWidth + 'px');
		},
		scrollUnlock: function () {
			$('html').removeClass('scroll-lock');
			$('.main-wrapper, .b-fixed-content, .b-header').css('padding-right', '0');
		},
		scrollPageTo: function (anchor) {
			var target = $(anchor);
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1500);
				$('body').removeClass('menu-active');
			}
		},
		getCursorCenterOffset: function () {
			var windowCenterX = $(window).width() / 2;
			var windowCenterY = $(window).height() / 2;
			return {
				x: Math.ceil(landingua.cursorPosition.x - windowCenterX),
				y: Math.ceil(landingua.cursorPosition.y - windowCenterY)
			};
		},
		getBlockScrollProgress: function (block, bottom) {
			var result = 0;
			var windowScrollPosition = $(window).scrollTop();
			var blockOffsetTop = block.offset().top;
			var blockHeight = block.outerHeight();
			var blockOffsetBottom = blockOffsetTop + blockHeight;
			if (bottom)
				windowScrollPosition += $(window).outerHeight();
			if (windowScrollPosition >= blockOffsetTop && windowScrollPosition <= blockOffsetBottom)
				result = Math.ceil(((windowScrollPosition - blockOffsetTop) / blockHeight) * 100);
			if (windowScrollPosition > blockOffsetBottom)
				result = 100;
			return result;
		},
		getBlockViewportProgress: function (block) {
			var windowScrollPositionTop = $(window).scrollTop();
			var windowScrollPositionBottom = windowScrollPositionTop + $(window).outerHeight();
			var blockOffsetTop = block.offset().top;
			var blockOffsetBottom = blockOffsetTop + block.outerHeight();
			if (this.checkBlockIsInViewport(block))
				return Math.ceil((Math.ceil((blockOffsetBottom + blockOffsetTop) / 2) - windowScrollPositionTop) / (windowScrollPositionBottom - windowScrollPositionTop) * 100);
			else
				return 0;
		},
		checkBlockIsInViewport: function (block) {
			if (block.length)
				return (this.getBlockScrollProgress(block, true) > 0 && this.getBlockScrollProgress(block) < 100);
			else
				return false;
		},
		addZeroes: function (number, length) {
			var result = '' + number;
			while (result.length < length)
				result = '0' + result;
			return result;
		},
		fixedPlaceholder: function() {
			$('.b-fixed').each(function() {
				var content = $(this).find('.b-fixed-content');
				$(this).css('height', content.height() + 'px');
			});
		},
		portfolioFixUp: function() {
			var arrow = $('.b-portfolio-up');
			var firstItem = $('.b-portfolio-item-image:visible').first();
			if (firstItem.length) {
				arrow.css('top', firstItem.height() + 60 + 'px');
			}
		}
	}
};

$(window).on('load resize', function (e) {
	var windowOuterWidth = $(window).outerWidth();
	landingua.functions.fixedPlaceholder();
	landingua.functions.portfolioFixUp();
	switch (e.type) {
		case 'load':
			break;
		case 'resize':
			break;
	}
	// Responsive (strict)
	(function () {
		switch (true) {
			case (windowOuterWidth <= 1199 && windowOuterWidth > 992):
				landingua.sliders.homescreenCases.slideDelta = 210;
				break;
			case (windowOuterWidth <= 991 && windowOuterWidth > 768):
				landingua.sliders.homescreenCases.slideDelta = 165;
				break;
			case (windowOuterWidth <= 767 && windowOuterWidth > 576):
				landingua.sliders.homescreenCases.slideDelta = 165;
				break;
			case (windowOuterWidth <= 575):
				landingua.sliders.homescreenCases.slideDelta = 95;
				break;
			default:
				landingua.sliders.homescreenCases.slideDelta = 300;
		}
	})();
	// Responsive (breakpoints)
	// DEPRECATED
	(function () {
		switch (true) {
			case (windowOuterWidth <= 991):
				$('.b-main-blog-items').not('.slick-initialized').slick({
					slidesToShow: 2,
					responsive: [
						{
							breakpoint: 576,
							settings: {
								slidesToShow: 1
							}
						}
					]
				});
		}
	})();
});

$(window).on('load scroll', function (e) {
	switch (e.type) {
		case 'load':
			break;
		case 'scroll':
			// Main -> Homescreen
			(function () {
				var block = $('.b-main-homescreen');
				if (block.length) {
					if (landingua.functions.getBlockScrollProgress(block) > 50) {
						block.find('.b-main-homescreen-line').removeClass('show');
						$('.b-main-header-menu-button').addClass('transparent');
					}
					else {
						block.find('.b-main-homescreen-line').addClass('show');
						$('.b-main-header-menu-button').removeClass('transparent');
					}
					if (landingua.functions.getBlockScrollProgress(block) >= 100)
						$('.b-main-header-menu-button').addClass('fixed');
					else
						$('.b-main-header-menu-button').removeClass('fixed');
				}
			})();
			// Main -> Partners
			/*
			(function () {
				var block = $('.b-main-partners');
				if (block.length) {
					var blockViewportProgress = landingua.functions.getBlockViewportProgress(block);
					block.find('.b-main-partners-items').css({
						'margin-left': Math.ceil((blockViewportProgress * -1) / 10) + '%'
					});
				}
			})();
			*/
			break;
	}
	// Main -> About
	(function () {
		var block = $('.b-main-about');
		if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 50 && landingua.functions.checkBlockIsInViewport(block)) { // 90
			var i = 0;
			block.addClass('show');
			block.find('.b-main-about-text p').addClass('animate');
			$('.b-main-about-text strong').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 1000 * (i + 2));
				i++;
			});
		}
	})();
	// Main -> Categories
	(function () {
		var block = $('.b-main-categories');
		if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 50 && landingua.functions.checkBlockIsInViewport(block)) { // 90
			var i = 0;
			block.addClass('show');
			$('.b-main-categories-row ul').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 300 * i);
				setTimeout(function () {
					block.addClass('no-delay');
				}, (300 * i) + 1000);
				i++;
			});
		}
	})();
	// Main -> Cases
	(function () {
		var block = $('.b-main-cases');
		if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 30 && landingua.functions.checkBlockIsInViewport(block)) { // 50
			var i = 0;
			block.addClass('show');
			$('.b-main-cases-slide').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 300 * i);
				i++;
			});
		}
	})();
	// Main -> Scope
	(function () {
		var block = $('.b-main-scope');
		if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 30 && landingua.functions.checkBlockIsInViewport(block)) { // 50
			var i_pins = 0;
			var i_text = 0;
			block.addClass('show');
			block.find('.b-main-scope-map-title').addClass('animate');
			$('.b-main-scope-map-pins span').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 50 * i_pins);
				i_pins++;
			});
			$('.b-main-scope-content > div').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, i_text * 300 + i_pins * 50);
				i_text++;
			});
		}
	})();
	// Main -> Partners
	(function () {
		var block = $('.b-main-partners');
		if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 30 && landingua.functions.checkBlockIsInViewport(block)) {
			$('.b-main-partner-item').each(function (i) {
				var block = $(this);
				setTimeout(function () {
					block.addClass('show');
				}, i * 150);
			});
		}
	})();
	// Main -> Blog
	(function () {
		var block = $('.b-main-blog');
		if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 30 && landingua.functions.checkBlockIsInViewport(block)) { // 50
			var i = 0;
			block.addClass('show');
			$('.b-main-blog-item').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 300 * i);
				i++;
			});
		}
	})();
	// Main -> CTA
	(function () {
		$('.b-main-cta').each(function () {
			var block = $(this);
			if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 30 && landingua.functions.checkBlockIsInViewport(block)) { // 50
				block.addClass('show');
				block.find('.b-main-cta-title p, .b-main-cta-text').addClass('animate');
				setTimeout(function () {
					block.find('.b-main-cta-line').addClass('show');
				}, 1000);
			}
		});
	})();
	// Inner -> Tasks
	(function () {
		var block = $('.b-tasks');
		if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 30 && landingua.functions.checkBlockIsInViewport(block)) { // 50
			var i_text = 0;
			var i_items = 0;
			block.addClass('show');
			$('.b-tasks-title, .b-tasks-text p').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 300 * i_text);
				i_text++;
			});
			$('.b-tasks-list li').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 300 * i_items);
				i_items++;
			});
		}
	})();
	// Inner -> Results
	(function () {
		var block = $('.b-results');
		if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 30 && landingua.functions.checkBlockIsInViewport(block)) { // 50
			var i_nav = 0;
			var i_text = 0;
			block.addClass('show');
			$('.b-results-nav a').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 100 * i_nav);
				i_nav++;
			});
			$('.b-results-slide-text').find('h3, p').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 300 * i_text);
				i_text++;
			});
		}
	})();
	// Inner -> Technologies
	(function () {
		$('.b-technologies').each(function () {
			var block = $(this);
			if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 30 && landingua.functions.checkBlockIsInViewport(block)) { // 50
				var i = 0;
				block.addClass('show');
				block.find('.b-technologies-title').addClass('animate');
				$('.b-technologies-row').each(function () {
					var block = $(this);
					setTimeout(function () {
						block.addClass('animate');
					}, 300 * i);
					i++;
				});
			}
		});
	})();
	// Inner -> Steps
	(function () {
		var block = $('.b-steps');
		if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 30 && landingua.functions.checkBlockIsInViewport(block)) { // 50
			var i_list = 0;
			var i_text = 0;
			block.addClass('show');
			$('.b-steps-list li').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 100 * i_list);
				i_list++;
			});
			$('.b-steps-slide-text p').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 300 * i_text);
				i_text++;
			});
		}
	})();
	// Inner -> Reviews
	(function () {
		var block = $('.b-reviews');
		if (block.length && !block.hasClass('show') && landingua.functions.getBlockScrollProgress(block, true) > 30 && landingua.functions.checkBlockIsInViewport(block)) { // 50
			var i = 0;
			block.addClass('show');
			$('.b-reviews-slide-title, .b-reviews-slide-subtitle, .b-reviews-slide-text p').each(function () {
				var block = $(this);
				setTimeout(function () {
					block.addClass('animate');
				}, 300 * i);
				i++;
			});
		}
	})();
});

window.onmousemove = function (e) {
	landingua.cursorPosition.x = e.clientX;
	landingua.cursorPosition.y = e.clientY;
	(function () {
		$('.b-cursor').css({
			'left': landingua.cursorPosition.x + 'px',
			'top': landingua.cursorPosition.y + 'px'
		});
	})();
	/*
	 (function () {
	 var block = $('.b-main-homescreen-line, .b-main-cta-line');
	 block.each(function () {
	 var block = $(this);
	 if (landingua.functions.checkBlockIsInViewport(block)) {
	 var offset = landingua.functions.getCursorCenterOffset();
	 block.css({
	 'transform': 'translateX(' + Math.ceil((offset.x * -1) / 200) + 'px)'
	 });
	 }
	 });
	 })();
	 */
};

/*
 $(document).on('mousemove', function (e) {
 landingua.cursorPosition.x = e.originalEvent.clientX;
 landingua.cursorPosition.y = e.originalEvent.clientY;
 (function () {
 $('.b-cursor').css({
 'left': landingua.cursorPosition.x + 'px',
 'top': landingua.cursorPosition.y + 'px'
 });
 })();
 });
 */

$(document).on('mouseenter mouseleave', 'a, button, input, textarea', function (e) {
	(function () {
		switch (e.type) {
			case 'mouseenter':
				$('.b-cursor').addClass('big');
				break;
			case 'mouseleave':
				$('.b-cursor').removeClass('big');
				break;
		}
	})();
});

/*
 $(document).on('click', '.b-header-menu-button, .b-main-homescreen-menu-button', function () {
 $('.b-menu').addClass('show');
 landingua.functions.scrollLock();
 return false;
 });
 */

$(document).on('click', 'a[href^="#modal_"]', function () {
	var button = $(this);
	var modal = $(button.attr('href'));
	var from;
	if (typeof button.data('from') !== 'undefined')
		from = button.data('from');
	else
		from = button.text();
	if (typeof button.data('subtitle') !== 'undefined') {
		var subtitle = modal.find('.placeholder-subtitle');
		subtitle.attr('data-placeholder-text', subtitle.text()).text(button.data('subtitle'));
	}
	$('<input/>', {
		'type': 'hidden',
		'name': 'from',
		'value': from
	}).appendTo(modal.find('form'));
	modal.addClass('show');
	setTimeout(function() {
		modal.find('video').trigger('play');
	}, 1500);
	landingua.functions.scrollLock();
	return false;
});

$(document).on('click', '.b-menu-close, .b-order-close, .b-thanks-close, .b-video-close', function () {
	var modals = $('[id^="modal_"]');
	setTimeout(function() {
		modals.find('video').trigger('pause');
	}, 1500);
	modals.find('[data-placeholder-text]').each(function () {
		var row = $(this);
		row.text(row.attr('data-placeholder-text')).removeAttr('data-placeholder-text');
	});
	modals.find('input[name="from"]').remove();
	modals.removeClass('show');
	landingua.functions.scrollUnlock();
	return false;
});

$(document).on('focusin focusout', '[class*="input-"] input, [class*="textarea-"] textarea', function (e) {
	switch (e.type) {
		case 'focusin':
			$(this).parent().addClass('focus');
			break;
		case 'focusout':
			$(this).parent().removeClass('focus');
			break;
	}
});

$(document).on('submit', '.callback-form', function () {
	var form = $(this);
	var thanks = 'thanks.html';
	//$('.b-thanks').addClass('show');
	if (typeof form.data('thanks') !== 'undefined')
		thanks = form.data('thanks');
	form.find('button').addClass('disabled');
	$.ajax({
		type: form.attr('method'),
		url: form.attr('action'),
		data: form.serialize(),
		success: function (data) {
			//console.log(data);
			window.location.href = thanks;
		}
	});
	return false;
});

$(document).on('click', 'button.disabled', function () {
	return false;
});

$(document).ready(function () {
	landingua.functions.fixedPlaceholder();
	landingua.functions.portfolioFixUp();
	
	document.ondragstart = function() { return false; };
	document.onselectstart = function() { return false; }; // запрещает выделять текст курсором
	document.oncontextmenu = function() { return false; };
	if (typeof WOW === 'function' && !landingua.isMobile) {
		new WOW().init();
	}
	$('a[href^="#"]').not('a[href^="#modal"], a[href="#prev"], a[href="#next"], a[href="#"]').click(function () {
		var target = $(this).attr('href');
		$('[id^="modal_"]').removeClass('show');
		landingua.functions.scrollUnlock();
		landingua.functions.scrollPageTo(target);
		return false;
	});
	$(document).on('click', '.slick-nav a', function () { // fix?
		var action = $(this).attr('href').substring(1);
		var parent = $(this).parent();
		var i = 0;
		while (parent.find('.slick-slider.slick-initialized').length < 1 && i < 10) {
			parent = parent.parent();
			i++;
		}
		parent.find('.slick-slider.slick-initialized').slick(action);
		return false;
	});
	// All inner pages
	(function () {
		var preloader = $('.b-preloader');
		if (preloader.length) {
			landingua.functions.cookieSet('back', location.origin + location.pathname);
		}
		else {
			var back = landingua.functions.cookieGet('back');
			$('.main-wrapper').addClass('short-preloader');
			if (typeof back !== 'undefined') {
				$('.b-header-back').each(function() {
					$(this).attr('href', back + '#cases');
				});
			}
		}
	})();
	// Main -> Cases
	(function () {
		var slider = landingua.sliders.homescreenCases;
		var slidesContainer = $('.b-main-cases-slides');
		var slidesReal = $('.b-main-cases-slide').not('.slide-clone');

		slidesReal.first().addClass('active');
		slider.updateInfo();

		$(document).on('swiperight', slidesContainer, function (e) {
			$('.b-main-cases-slider-nav a[href="#prev"]').trigger('click');
		});

		$(document).on('swipeleft', slidesContainer, function (e) {
			$('.b-main-cases-slider-nav a[href="#next"]').trigger('click');
		});

		$(document).on('click', '.b-main-cases-slider-nav a', function () {
			var button = $(this);
			var direction = button.attr('href').substring(1);

			if (slider.current >= 0) {
				switch (direction) {
					case 'prev':
						if (slider.current > 0) {
							slider.current--;
						}
						break;
					case 'next':
						var cloneIndex = slider.current % slidesReal.length;
						slidesReal.eq(cloneIndex).clone().removeClass('active').addClass('slide-clone').appendTo(slidesContainer);
						slider.current++;
						break;
				}
				slider.offset = slider.slideDelta * slider.current;
				slidesContainer.css({
					'transform': 'translateX(-' + slider.offset + 'px)'
				});
				$('.b-main-cases-slide').removeClass('active').eq(slider.current).addClass('active');
				slider.updateInfo();
			}
			return false;
		});
	})();
	/* Main -> Portfolio
	(function () {
		var itemsPerRow = 3;
		var itemsPerCol = 2;
		var itemsTotal = itemsPerRow * itemsPerCol;
		var itemsContainer = $('.b-main-portfolio-items');
		var items = $('.b-main-portfolio-item');
		if (items.length > itemsTotal) {
			var colsToAdd = Math.ceil(items.length / 2) - itemsPerRow;
			var colsScrolled = 0;
			itemsContainer.css('width', 100 + parseFloat((100 / itemsPerRow).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]) * colsToAdd + '%');
			items.css('width', parseFloat((100 / (itemsPerRow + colsToAdd)).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]) + '%');

			$(document).on('mousewheel', function(e) {
				var triggerPosition = $(window).scrollTop() + $(window).outerHeight();
				var portfolioBottom = $('.b-main-portfolio').offset().top + $('.b-main-portfolio').outerHeight();
				if (triggerPosition >= portfolioBottom && e.deltaY === -1 && colsScrolled < colsToAdd) {
					$(window).scrollTop(portfolioBottom - $(window).outerHeight() + 5);
					colsScrolled++;
					itemsContainer.css('left', parseFloat((100 / itemsPerRow).toFixed(2)) * colsScrolled * -1 + '%');
					return false;
				}
				if ($(window).scrollTop() <= $('.b-main-portfolio').offset().top && e.deltaY === 1 && colsScrolled > 0) {
					colsScrolled--;
					itemsContainer.css('left', parseFloat((100 / itemsPerRow).toFixed(2)) * colsScrolled * -1 + '%');		
					return false;
				}
			});
		}
	})();
	*/
	// Main -> Portfolio
	(function () {
		$(document).on('click', '.b-main-portfolio-button a', function() {
			var show = 6;
			var items = $('.b-main-portfolio-item');
			var itemsHidden = $('.b-main-portfolio-item').not(':visible');
			if (itemsHidden.length > 0) {
				itemsHidden.slice(0, show).slideDown(650);
				if (itemsHidden.length <= show) {
					$('.b-main-portfolio-button').slideUp();
				};
			}
			return false;
		});
	})();
	// Main -> CTA
	(function() {
		$('.b-main-cta.size-large').each(function() {
			var form = $(this).find('.b-main-cta-form');
			if (form.length)
				var formHeight = form.outerHeight(true);
			else
				var formHeight = $(this).find('.b-main-cta-heading').outerHeight(true);
			$(this).find('.b-main-cta-right').css('height', formHeight + 'px').mCustomScrollbar();
		});
	})();
	// Main -> Blog
	(function () {
		$('.articles-latest__items').slick({
			'mobileFirst': true,
			'arrows': false,
			'dots': true,
			'responsive': [
				{
					breakpoint: 768,
					settings: 'unslick'
				}
			]
		});
	})();
	// Inner -> tasks
	(function () {
		$('.b-tasks-text').slick({
			'arrows': false,
			'fade': true
		});
		$(document).on('click mouseenter', '.b-tasks-list a', function () {
			var index = $(this).parent().index();
			$('.b-tasks-text').slick('slickGoTo', index);
			$('.b-tasks-num').text(landingua.functions.addZeroes(index + 1, 2));
			$('.b-tasks-list a').removeClass('active');
			$(this).addClass('active');
			return false;
		});
		$('.b-tasks-list li').first().find('a').trigger('click');
	})();
	//Inner -> nonstandard
	(function() {
		var slidesTotal = $('.b-nonstandard-slide').length;
		$(document).on('click', '.b-nonstandard-pending .slick-arrow', function() {
			var button = $(this);
			if (button.hasClass('slick-prev')) {
				$('.b-nonstandard-prev, .b-nonstandard-slider').slick('slickPrev');
			}
			if (button.hasClass('slick-next')) {
				$('.b-nonstandard-prev, .b-nonstandard-slider').slick('slickNext');
			}
		});
		$('.b-nonstandard-pending').slick({
			'slidesToShow': 3,
			'slidesToScroll': 1,
			'draggable': false,
			'responsive': [
				{
					'breakpoint': 1200,
					settings: {
						'slidesToShow': 2
					}
				}
			]
		}).on('beforeChange', function(e, s, c, n) {
			$('.b-nonstandard-pager .page-current').text(landingua.functions.addZeroes(n + 1, 2));
		});
		$('.b-nonstandard-prev').slick({
			'draggable': false,
			'initialSlide': slidesTotal - 1,
			'arrows': false
		});
		$('.b-nonstandard-slider').slick({
			'draggable': false,
			'fade': true,
			'arrows': false
		});
	})();
	//Inner -> results
	(function () {
		$('.b-results-slide-image').each(function () {
			var block = $(this);
			for (i = 0; i < 4; i++) {
				$('<span/>', {'class': 'b-results-slide-image-line line-' + (i + 1)}).appendTo(block);
			}
		});
		$('.b-results-slider').slick({
			'fade': true,
			'responsive': [
				{
					'breakpoint': 992,
					settings: {
						'arrows': false
					}
				}
			]
		}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			$('.b-results-nav a').removeClass('active');
			$('.b-results-nav li').eq(nextSlide).find('a').addClass('active');
		});
		$(document).on('click mouseenter', '.b-results-nav a', function () {
			var index = $(this).parent().index();
			$('.b-results-slider').slick('slickGoTo', index);
			return false;
		});
		$('.b-results-nav li').first().find('a').addClass('active');
	})();
	// Inner -> team
	(function () {
		$('.b-team-slider').slick({
			'slidesToShow': 3,
			'responsive': [
				{
					'breakpoint': 768,
					settings: {
						'slidesToShow': 2
					}
				},
				{
					'breakpoint': 576,
					settings: {
						'slidesToShow': 1
					}
				}
			]
		});
	})();
	// Inner -> steps
	(function () {
		$('.b-steps-slide-image').each(function () {
			var block = $(this);
			for (i = 0; i < 4; i++) {
				$('<span/>', {'class': 'b-steps-slide-image-line line-' + (i + 1)}).appendTo(block);
			}
		});
		$('.b-steps-slider').slick({
			'fade': true,
			'responsive': [
				{
					'breakpoint': 768,
					settings: {
						'arrows': false
					}
				}
			]
		}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			$('.b-steps-list a').removeClass('active');
			$('.b-steps-list li').eq(nextSlide).find('a').addClass('active');
		});
		$(document).on('click mouseenter', '.b-steps-list a', function () {
			var index = $(this).parent().index();
			$('.b-steps-slider').slick('slickGoTo', index);
			return false;
		});
		$('.b-steps-list li').first().find('a').addClass('active');
	})();
	// Inner -> reviews
	(function () {
		$('.b-reviews-slider').slick({
			'fade': true
		});
	})();
	// Portfolio
	(function () {
		var category, type, results;
		$(document).on('click', '.b-portfolio-item-list a', function() {
			var tab = $(this);
			var results = $('.b-portfolio-item').slice(2);
			tab.closest('.b-portfolio-item-list').find('a').removeClass('active');
			tab.addClass('active');
			category = $('.b-portfolio-item').eq(0).find('.b-portfolio-item-list a.active').data('category');
			type = $('.b-portfolio-item').eq(1).find('.b-portfolio-item-list a.active').data('type');
			results.hide();
			if (typeof category !== 'undefined')
				results = results.filter('[data-category=' + category + ']');
			if (typeof type !== 'undefined')
				results = results.filter('[data-type=' + type + ']');
			results.fadeIn(1000);
			landingua.functions.portfolioFixUp();
			return false;
		});
		$('.b-portfolio-item-list').each(function() {
			$(this).find('li').first().find('a').trigger('click');
		});
	})();
});
