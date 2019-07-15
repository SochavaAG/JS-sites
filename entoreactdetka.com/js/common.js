$(document).ready(function() {
	$('body').fadeIn(1000)

	$('a[href^="#"]').click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 40
		}, 300);
	});

	AOS.init({
		offset: 300,
		anchorPlacement: 'top-center',
		once: true
	});

	var lazy = document.querySelectorAll('.lazy')
	lazyload(lazy)
});
