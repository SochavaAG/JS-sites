$(document).ready(function() {
	$('.header-menu__burger, .header-menu__nav').click(function() {
	$('.header-menu__nav').toggleClass('visible');
	$('.header-menu__burger').toggleClass('open');
});

setTimeout(function() {
	$('.buyer__hipster').addClass('visible')
	setTimeout(function() {
		$('.buyer__mark').fadeIn(200)
	}, 900)
}, 400)

new Parallax(document.getElementById('slum-big'))
new Parallax(document.getElementById('slum-small'))
new Parallax(document.getElementById('mark'))
new Parallax(document.getElementById('tv'))

	
var aboutItemImg = document.querySelectorAll('.about__item-img')

aboutItemImg.forEach(function(img) {
	new Parallax(img)
})

	
new Parallax(document.getElementById('sculpture'))
new Parallax(document.getElementById('sun-small'))

	

var benefits = document.querySelectorAll('.benefits__img')
benefits.forEach(function(benefit) {
	new Parallax(benefit)
})

	
var hitImg = document.querySelectorAll('.differences__hit-img')
hitImg.forEach(function(img) {
	new Parallax(img)
})

	$('.choose__item-title').click(function() {
	$(this).next().toggleClass('visible')
});

	var footerCat = document.querySelectorAll('.footer__cat-wrap')

footerCat.forEach(function(img) {
	new Parallax(img)
})

});


$('.choose__item-title').click(function() {
	$('#form input[name=category]').val($(this).text())
});
$('.choose__list-item').click(function() {
	$('#form input[name=subcategory]').val($(this).text())
	$('#form').removeClass().addClass('reg-form '+$(this).attr('id')+'')
});

$('#form').submit(function(e) {
	e.preventDefault();
	
	var form_data = {
		name: $(this['name']).val(),
		social: $(this['social']).val(),
		social_link: $(this['social_link']).val(),
		category: $(this['category']).val(),
		subcategory: $(this['subcategory']).val(),
		about_me: $(this['about_me']).val()
	}
	
	$.ajax({
		type: "POST",
		url: "https://entoreactdetka.com/mailer/send",
		data: JSON.stringify(form_data),
		beforeSend: function( xhr ) {
			xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
		},
		headers: {
			'Content-Type': 'application/json'
		},
		success: function() {
			$('.form-wrap__text, .reg-form').slideUp(200);
			$('.form-congrats').slideDown(200);
		},
		error: function() {
			$('.form-wrap__text, .reg-form').slideUp(200);
			$('.form-congrats__text').text('Извините, что-то пошло не так. Попробуйте снова.');
			$('.form-congrats').slideDown(200);
		}
	});
});

/*terms.js*/
function openPolicy(e){$(".terms--policy")&&$(".terms--policy").fadeIn(200),$(".terms-overlay")&&$(".terms-overlay").fadeIn(200)}function openTerms(){$(".terms--use")&&$(".terms--use").fadeIn(200),$(".terms-overlay")&&$(".terms-overlay").fadeIn(200)}$(document).ready(function(){var e=$(".terms-overlay");$(".terms__close")&&$(".terms__close, .terms-overlay").on("click",function(r){r.preventDefault(),$(".terms").fadeOut(200),e.fadeOut(200)})});

