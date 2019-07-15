// helpers
function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,'');
  }
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return min + (max - min) * Math.random();
}

var headerNavButton = document.querySelector('.navbar-toggle');
var mainHeader = document.querySelector('.main-header');
var menuSection = document.querySelector('.menu-section');
var menuElements = document.querySelectorAll('.mobile-menu-section_menu-item');
var vacancies = document.querySelectorAll('.single-vacancy-block');
var fullVacancies = document.querySelectorAll('.full-vacancy');
var closeBtn = document.querySelectorAll('.full-vacancy_close-btn');
var body = document.querySelector('body');

// Menu handlers
headerNavButton.addEventListener('click', function(e){
	e.preventDefault();
	console.log('menu clicked');
	if(hasClass(this, 'collapsed')){
		removeClass(this, 'collapsed');
		addClass(menuSection, 'expanded');
	} else {
		addClass(this, 'collapsed');
		removeClass(menuSection, 'expanded');
	}
})

// Full vacancies click handlers
for(var i = 0, len = vacancies.length; i < len; i++){
	vacancies[i].addEventListener('click', function(e){
		e.preventDefault();
		if(hasClass(body, 'overflow-y-h')){
			removeClass(body, 'overflow-y-h')
		} else {
			addClass(body, 'overflow-y-h')
		}	
		for(var i = 0, len = fullVacancies.length; i < len; i++){
			if(hasClass(fullVacancies[i], this.attributes['data-link'].value)){
				addClass(fullVacancies[i], 'active');
				runFullVacancyAnim(fullVacancies[i]);
			}
		}
	})
}

for(var i = 0, len = closeBtn.length; i < len; i++){
	closeBtn[i].addEventListener('click', function(e){
		e.preventDefault();
		removeClass(body, 'overflow-y-h');
		var parentSection = this.parentElement;
		removeClass(parentSection, 'active');
		resetFullVacancyAnim(parentSection);
	})
}

for(var i = 0, len = menuElements.length; i < len; i++){
	menuElements[i].addEventListener("click", function(e){
		document.querySelector('.navbar-toggle').click();
	})
}

// GSAP
var topSectionAnchor = document.querySelector('#top-section');
var topTitleChars = document.querySelectorAll('.top-section_title span');
var topSubtitleWrapper = document.querySelectorAll('.top-section_subtitle-wrapper > *');
var topImageBlock =  document.querySelector('.top-section_block-image');

// var principlesSectionAnchor = document.querySelector('#principles-section');
// var principlesSectionRightBlock = document.querySelector('.principles-section_right-block-wrapper');


// var aboutSectionAnchor = document.querySelector('#about-section');
// var aboutSectionLeftBlock = document.querySelector('.about-section_left-image-block');

// var benefitsSectionAnchor = document.querySelector('#benefits-section');
// var benefitsSectionRightBlock = document.querySelector('.benefits-section_blocks-1-image-block');

var fadeInBlocks = document.querySelectorAll('.fadeIn-block');
var rightSideBlocks = document.querySelectorAll('.right-side');
var leftSideBlocks = document.querySelectorAll('.left-side');
var parallaxBlocks = document.querySelectorAll('.parallax-block');
var sectionsWithTitle = document.querySelectorAll('.section-with-title');
var singleVacancyBlockElems = document.querySelectorAll('.single-vacancy-block');
var fullVacancies = document.querySelectorAll('.full-vacancy');
var hoverBlocks = document.querySelectorAll('.hover-block');

var ctrl = new ScrollMagic.Controller({});

// Main page top section animation
var topTitleLetters = new TimelineMax();
topTitleLetters.set(topTitleChars, {
	autoAlpha: 0
})
topTitleLetters.staggerTo(topTitleChars, 0, {
	cycle: {
		y: function(index){
			if(index % 2 == 0){
				return random(100)
			} else {
				return -random(100)
			}
		},
		x: function(index){
			if(index % 3 == 0){
				return -100
			} else {
				return 100
			}
		}
	}
})
topTitleLetters.staggerTo(topTitleChars, 1, {
	autoAlpha: 1,
	x: 0
})
.staggerTo(topTitleChars, 1, {
	y: 0
})

TweenMax.staggerTo(topSubtitleWrapper, 0, {autoAlpha: 0}, 0);
TweenMax.staggerTo(topSubtitleWrapper, 2, {
	autoAlpha: 1
}, .5)

TweenMax.set(topImageBlock, {xPercent: 100});
TweenMax.to(topImageBlock, 1, {
	xPercent: 0
})

// Vacancies animations

function runFullVacancyAnim(currentFullVacancy){
	var imageBlock = currentFullVacancy.querySelector('.full-vacancy-wrapper-image');
	var fadeBlocks = currentFullVacancy.querySelectorAll('.full-vacancy_list');
	var allTitles = currentFullVacancy.querySelectorAll('.full-vacancy_subtitle, .full-vacancy_title');
	var topTitleChars = currentFullVacancy.querySelectorAll('.full-vacancy_subtitle span');
	var topTitleLine = currentFullVacancy.querySelector('.line-block');
	var parallaxBlock = currentFullVacancy.querySelector('.parallax-block');

	TweenMax.set(topTitleChars, {autoAlpha: 0});
	TweenMax.set(topTitleLine, {autoAlpha: 0, x: -100});

	var lineAnim = TweenMax.to(topTitleLine, 1.5, {autoAlpha: 1, x:0});

	var vacanCtrl = new ScrollMagic.Controller({container: currentFullVacancy});

	for(var i = 0, len = allTitles.length; i < len; i++){
		var chars = allTitles[i].querySelectorAll('span');
		var titleAnim = new TimelineMax({delay: 1});
		var mainAnim = new TimelineMax();
		titleAnim.staggerTo(chars, 0, {
			cycle: {
				autoAlpha: 0,
				y: function(index){
					if(index % 2 == 0){
						return random(100)
					} else {
						return -random(100)
					}
				},
				x: function(index){
					if(index % 3 == 0){
						return -100
					} else {
						return 100
					}
				}
			}
		})
		.staggerTo(chars, .5, {
			autoAlpha: 1,
			x: 0
		})
		.staggerTo(chars, .5, {
			y: 0
		});

		mainAnim.add(titleAnim, '-=.8')

		var sectionScene = new ScrollMagic.Scene({
				triggerHook: 1,
		    triggerElement: allTitles[i],
		})
		.setTween(mainAnim)
		// .addIndicators({name: "fullVacancy", colorTrigger: 'white', colorStart: 'white'})
		.addTo(vacanCtrl);
	}

	var imageAnim = new TimelineMax();

	TweenMax.set(imageBlock, {xPercent: -110});
	TweenMax.set(fadeBlocks, {autoAlpha: 0});

	imageAnim.to(imageBlock, 2, {xPercent: 0});

	for(var i = 0, len = fadeBlocks.length; i < len; i++){
		
		var fadeAnim = TweenMax.to(fadeBlocks[i], 2, {autoAlpha: 1, delay: 0})
		var sectionScene = new ScrollMagic.Scene({
				triggerHook: 1,
		    triggerElement: fadeBlocks[i],
		})
		.setTween(fadeAnim)
		// .addIndicators({name: "fullVacancy", colorTrigger: 'white', colorStart: 'white'})
		.addTo(vacanCtrl);
	}

	parallaxAnim = new TimelineMax();

	parallaxAnim.from(parallaxBlock, 1, {
		y: '-10%',
		ease: Linear.easeNone
	}, 0)
	.to(parallaxBlock, 1, {
		y: '10%',
		ease: Linear.easeNone
	})
	var query = '#'+parallaxBlock.getAttribute('data-trigger');
	var trigger = document.querySelector(query);
	var parallaxScene = new ScrollMagic.Scene({
		triggerHook: .7,
		duration: '150%',
		triggerElement: trigger
	})
	.setTween(parallaxAnim)
	// .addIndicators({name: "parallax"})
	.addTo(vacanCtrl)
}

function resetFullVacancyAnim(currentFullVacancy){
	var allTitleChars = currentFullVacancy.querySelectorAll('.full-vacancy_subtitle > span, .full-vacancy_title > span');
	var topTitleLine = currentFullVacancy.querySelector('.line-block');
	TweenMax.to([allTitleChars, topTitleLine], .5, {autoAlpha: 0});
}

// Fade in blocks animation
for(var i = 0, len = fadeInBlocks.length; i < len; i++){
	TweenMax.set(fadeInBlocks[i], {autoAlpha: 0});
	var fadeInTween = TweenMax.to(fadeInBlocks[i], 1, {autoAlpha:1});
	var scene = new ScrollMagic.Scene({
		triggerElement: fadeInBlocks[i],
		triggerHook: 1
	})
	.setTween(fadeInTween)
	// .addIndicators({name: "fade"})
	.addTo(ctrl)
}

// Hover animation
for(var i = 0, len = hoverBlocks.length; i < len; i++){
	hoverBlocks[i].addEventListener('mouseenter', function(e){
		var currentSpans = this.querySelectorAll('span');
		TweenMax.staggerTo(currentSpans, .5, {
			cycle: {
				y: function(index){
					if(index % 2 == 0){
						return random(20)
					} else {
						return -random(20)
					}
				}
			}
		});
	})
	hoverBlocks[i].addEventListener('mouseleave', function(e){
		var currentSpans = this.querySelectorAll('span');
		TweenMax.staggerTo(currentSpans, .5, {y: 0});
	})
}

// Parallax image blocks animations
for(var i = 0, len = parallaxBlocks.length; i < len; i++){
	parallaxAnim = new TimelineMax();

	parallaxAnim.from(parallaxBlocks[i], 1, {
		y: '-10%',
		ease: Linear.easeNone
	}, 0)
	.to(parallaxBlocks[i], 1, {
		y: '10%',
		ease: Linear.easeNone
	})
	var query = '#'+parallaxBlocks[i].getAttribute('data-trigger');
	var trigger = document.querySelector(query);
	var parallaxScene = new ScrollMagic.Scene({
		triggerHook: .7,
		duration: '150%',
		triggerElement: trigger
	})
	.setTween(parallaxAnim)
	// .addIndicators({name: "parallax"})
	.addTo(ctrl)
}


// Titles animation
for(var i = 0, len = sectionsWithTitle.length; i < len; i++){
	var line = sectionsWithTitle[i].querySelector('.line-block');
	var titleChars = sectionsWithTitle[i].querySelectorAll('.line_subtitle span');
	TweenMax.set(titleChars, {autoAlpha: 0});
	TweenMax.set(line, {autoAlpha: 0, x: -100});

	var lineAnim = TweenMax.to(line, 1.5, {autoAlpha: 1, x:0});
	var mainAnim = new TimelineMax();
	var titleAnim = new TimelineMax();
	titleAnim.staggerTo(titleChars, 0, {
		cycle: {
			autoAlpha: 0,
			y: function(index){
				if(index % 2 == 0){
					return random(100)
				} else {
					return -random(100)
				}
			},
			x: function(index){
				if(index % 3 == 0){
					return -100
				} else {
					return 100
				}
			}
		}
	})
	.staggerTo(titleChars, .5, {
		autoAlpha: 1,
		x: 0
	})
	.staggerTo(titleChars, .5, {
		y: 0
	});

	mainAnim
		.add(lineAnim, '-=1')
		.add(titleAnim, '-=1')

	var sectionScene = new ScrollMagic.Scene({
			triggerHook: .8,
	    triggerElement: sectionsWithTitle[i],
	})
	.setTween(mainAnim)
	// .addIndicators({name: "Titles"})
	.addTo(ctrl);
}

// Appear from side animations
for(var i = 0, len = rightSideBlocks.length; i < len; i++){
	TweenMax.set(rightSideBlocks[i], {xPercent: 110});

	var rightAnim = TweenMax.to(rightSideBlocks[i], 1.5, {xPercent: 0});

	var sectionScene = new ScrollMagic.Scene({
			triggerHook: .8,
	    triggerElement: rightSideBlocks[i],
	})
	.setTween(rightAnim)
	.addTo(ctrl);
}
for(var i = 0, len = leftSideBlocks.length; i < len; i++){
	TweenMax.set(leftSideBlocks[i], {xPercent: -110});

	var leftAnim = TweenMax.to(leftSideBlocks[i], 1.5, {xPercent: 0});

	var sectionScene = new ScrollMagic.Scene({
			triggerHook: .8,
	    triggerElement: leftSideBlocks[i],
	})
	.setTween(leftAnim)
	.addTo(ctrl);
}

// Header on scroll
var headerScrollScene = new ScrollMagic.Scene({
	triggerHook: 0,
	offset: 40,
	triggerElement: body
})
.setClassToggle(mainHeader, 'sticky')
// .addIndicators({name: "menuToggle"})
.addTo(ctrl)

// Menus link handlers

// change behaviour of controller to animate scroll instead of jump
ctrl.scrollTo(function (newpos) {
	TweenMax.to(window, 0.5, {scrollTo: {y: newpos, autoKill:false}});
});

//  bind scroll to anchor links
var links = document.querySelectorAll("a[href^='#']");
for(var i = 0, len = links.length; i < len; i++){
	links[i].addEventListener("click", function (e) {
		e.preventDefault();
		var id = this.getAttribute("href");
		if (id.length > 0) {
			// trigger scroll
			ctrl.scrollTo(id);

				// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});
}

// document.querySelector('.to-principles-section').addEventListener('click', function(e){
// 	console.log('here');
// 	ctrl.scrollTo(document.querySelector('#principles-section'))
// })
