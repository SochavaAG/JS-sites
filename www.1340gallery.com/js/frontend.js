jQuery(document).ready(function($){

	var user_id = localStorage.getItem('user_id');
	//var current_step = localStorage.getItem('current_step');
	var current_step = '';

	 if (current_step == 'step2') {
	 	$('.kayzp_step1').hide();
	 	$('.kayzp_step1-1').show();
	 }
	 else if (current_step == 'step3') {
	 	$('.kayzp_step1').hide();
	 	$('.kayzp_step2-1').show();
	 }
	 else if (current_step == 'step4') {
	 	$('.kayzp_step1').hide();
	 	$('.kayzp_step2-2').show();
	 }
	 else if (current_step == 'step5') {
	 	$('.kayzp_step1').hide();
	 	$('.kayzp_step2-3').show();
	 }
	 else if (current_step == 'step6') {
	 	$('.kayzp_step1').hide();
	 	$('.kayzp_step3').show();
	 }

	$('.kayzp_step1 #url').on('keyup', function(){
		var string = $(this).val(),
    		substring = 'http://1340gallery.com/';
		
		if (string.indexOf(substring) == -1 && $(this).val() =='' ) {
			$(this).val('http://1340gallery.com/'+$(this).val());
		}
		else if (string.indexOf(substring) == -1 ) {
			$(this).val('http://1340gallery.com/');
		}
	})

	// Step 1. Validate data and register user
	$('.kayzp_step1 .kayzp_next_step_btn.kayzp_register_btn').on('click', function(){
		var errors = [];
		$('.kayzp_error').remove();

		var 	first_name = $('.kayzp_step1 #first_name').val(),
			last_name = $('.kayzp_step1 #last_name').val(),
			email = $('.kayzp_step1 #email').val(),
			pass = $('.kayzp_step1 #pass').val();

		if (first_name == '' || last_name == '' || email == '' || pass == '') {errors.push('All fields are required!')}

		if (!isValidName(first_name)) {errors.push('Please check your first name')}
		if (!isValidName(last_name)) {errors.push('Please check your last name')}
		if (!isValidEmail(email)) {errors.push('Incorrect email!')}

		if (errors.length == 0) {
			$('.background-rgba').css('display', 'flex');
			$.ajax({
			    	type: 'POST',
		    		dataType: 'json',
			    	url: wpgrAjax.ajaxurl,
				data: { 
		        			'action': 'wpgrSubmitRegistrationUserForm',
			  		'first_name' : first_name,
			  		'last_name' : last_name,
			  		'email' : email,
			  		'pass' : pass
				},
			    	success: function(response){
			    		if (response.status == true) {
			    			user_id = response.user_id;

			    			setTimeout(function(){
				    			$('.kayzp_step1').hide();
				    			$('.kayzp_step1-0').show();
			    				$('.background-rgba').css('display', 'none');
			    			}, 1000)

			    			localStorage.setItem('user_id', user_id);
			    			localStorage.setItem('current_step', 'step2');
			    		}
			    		else{
			    			$('.kayzp_step1 .kayzp_next_step_btn.kayzp_register_btn ').after('<div class="kayzp_error">'+response.error+'</div>');
			    				$('.background-rgba').css('display', 'none');
			    		}
			    	},
			    	error: function(jqXHR, textStatus){
					alert('Request failed. Please try later.')
				  	console.log( "Request failed: " + textStatus );
			    	}
			});
		}
		else{
			for (var i = 0; i < errors.length; i++) {
				$('.kayzp_step1 .kayzp_next_step_btn.kayzp_register_btn ').after('<div class="kayzp_error">'+errors[i]+'</div>')
			}

		}
	})

	function isValidName(name) {
	   	return /^[a-zA-Z'][a-zA-Z' ]+[a-zA-Z']?$/u.test(name); 
	} 


	function isValidUrl(url) {
		if (url == 'http://1340gallery.com/') { return false;}
	   	return  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url); 
	} 

	function isValidEmail(email) { 
	   	return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email); 
	} 

	function isValidPass(pass) { 
	   	return /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g.test(pass); 
	} 

	$('.kayzp_step1-0 .kayzp_next_step_btn.kayzp_register_btn').on('click', function(){
			$('.background-rgba').css('display', 'flex');

			setTimeout(function(){
	    			$('.kayzp_step1-0').hide();
	    			$('.kayzp_step1-1').show();
    				$('.background-rgba').css('display', 'none');
    			}, 1500)

	});



	// Step 2. Update user data
	$('.kayzp_step1-1 .kayzp_next_step_btn.kayzp_register_btn').on('click', function(){
		var errors = [];
		$('.kayzp_error').remove();

		var 	file = $('.kayzp_step1-1 #kayzp_avatar_data').val(),
			bio = $('.kayzp_step1-1 textarea.tex-teria').val(),
			website = $('.kayzp_step1-1 #website_profile').val(),
			instagram = $('.kayzp_step1-1 #instagram_profile').val(),
			facebook = $('.kayzp_step1-1 #facebook_profile').val();

		if (file == '' ) {errors.push('Please upload a profile photo')}

		if (errors.length == 0) {
			$('.background-rgba').css('display', 'flex');
			$.ajax({
			    	type: 'POST',
		    		dataType: 'json',
			    	url: wpgrAjax.ajaxurl,
				data: { 
		        			'action': 'wpgrSubmitUpdateUserDataForm',
			  		'file' : file,
			  		'bio' : bio,
			  		'website' : website,
			  		'instagram' : instagram,
			  		'user_id' : user_id,
			  		'facebook' : facebook
				},
			    	success: function(response){
			    		console.log(response);
			    		if (response.status == true) {

			    			setTimeout(function(){
				    			$('.kayzp_step1-1').hide();
				    			$('.kayzp_step2-1').show();
			    				$('.background-rgba').css('display', 'none');
			    			}, 1000)

			    			localStorage.setItem('current_step', 'step3');
			    		}
			    		else{
			    			$('.kayzp_step1-1 .kayzp_next_step_btn.kayzp_register_btn ').after('<div class="kayzp_error">'+response.error+'</div>');

			    				$('.background-rgba').css('display', 'none');
			    		}
			    	},
			    	error: function(jqXHR, textStatus){
					alert('Request failed. Please try later.')
				  	console.log( "Request failed: " + textStatus );
			    	}
			});
		}
		else{
			for (var i = 0; i < errors.length; i++) {
				$('.kayzp_step1-1 .kayzp_next_step_btn.kayzp_register_btn ').after('<div class="kayzp_error">'+errors[i]+'</div>')
			}

		}
	})



	// Step 3. Upload work 1
	$('.kayzp_step2-1 .kayzp_next_step_btn.kayzp_register_btn').on('click', function(){
		
		var errors = [];
		$('.kayzp_error').remove();

		var 	kayzp_cat1 = $('.kayzp_step2-1 #kayzp_cat1').val(),
			kayzp_style1 = $('.kayzp_step2-1 #kayzp_style1').val(),
			kayzp_subject1 = $('.kayzp_step2-1 #kayzp_subject1').val(),
			kayzp_title1 = $('.kayzp_step2-1 #kayzp_title1').val(),
			kayzp_desc1 = $('.kayzp_step2-1 #kayzp_desc1').val(),
			kayzp_medium1 = $('.kayzp_step2-1 #kayzp_medium1').val(),
			kayzp_size1 = $('.kayzp_step2-1 #kayzp_size1').val(),
			kayzp_h1 = $('.kayzp_step2-1 #kayzp_h1').val(),
			kayzp_w1 = $('.kayzp_step2-1 #kayzp_w1').val(),
			kayzp_d1 = $('.kayzp_step2-1 #kayzp_d1').val(),
			kayzp_price1 = $('.kayzp_step2-1 #kayzp_price1').val(),
			kayzp_file1_data = $('.kayzp_step2-1 #kayzp_file1_data').val();

		if (	kayzp_cat1 == '' || 
			kayzp_title1 == '' || 
			kayzp_medium1 == '' || 
			kayzp_size1 == '' || 
			kayzp_price1 == '' || 
			kayzp_file1_data == '' ||
			kayzp_style1 == '' ||
			kayzp_subject1 == '' ||
			kayzp_h1 == '' ||
			kayzp_w1 == '' ||
			kayzp_d1 == ''
			 ) {errors.push('Please complete all required fields')}


		if (errors.length == 0) {
			$('.background-rgba').css('display', 'flex');
			$.ajax({
				type: 'POST',
		    		dataType: 'json',
			    	url: wpgrAjax.ajaxurl,
				data: { 
		        			'action': 'wpgrSubmitUserWorkForm',
			  		'cat' : kayzp_cat1,
			  		'user_id' : user_id,
			  		'title' : kayzp_title1,
			  		'medium' : kayzp_medium1,
			  		'size' : kayzp_size1,
			  		'price' : kayzp_price1,
			  		'style' : kayzp_style1,
			  		'subject' : kayzp_subject1,
			  		'h' : kayzp_h1,
			  		'w' : kayzp_w1,
			  		'd' : kayzp_d1,
			  		'description' : kayzp_desc1,
			  		'file_data' : kayzp_file1_data
				},
			    	success: function(response){
			    		if (response.status == true) {

			    			setTimeout(function(){
				    			$('.kayzp_step2-1').hide();
				    			$('.kayzp_step2-2').show();
			    				$('.background-rgba').css('display', 'none');
			    			}, 1000)

			    			localStorage.setItem('current_step', 'step4');
			    		}
			    		else{
			    			$('.kayzp_step2-1 ').append('<div class="kayzp_error">'+response.error+'</div>');
											  
			    				$('.background-rgba').css('display', 'none');
			    		}
			    	},
			    	error: function(jqXHR, textStatus){
					alert('Request failed. Please try later.')
				  	console.log( "Request failed: " + textStatus );
			    	}
			});
		}
		else{
			for (var i = 0; i < errors.length; i++) {
				$('.kayzp_step2-1 ').append('<div class="kayzp_error">'+errors[i]+'</div>')
			}

		}
	})




	// Step 4. Upload work 2
	$('.kayzp_step2-2 .kayzp_next_step_btn.kayzp_register_btn').on('click', function(){
		
		var errors = [];
		$('.kayzp_error').remove();

		var 	kayzp_cat1 = $('.kayzp_step2-2 #kayzp_cat2').val(),
			kayzp_style1 = $('.kayzp_step2-2 #kayzp_style2').val(),
			kayzp_subject1 = $('.kayzp_step2-2 #kayzp_subject2').val(),
			kayzp_title1 = $('.kayzp_step2-2 #kayzp_title2').val(),
			kayzp_desc1 = $('.kayzp_step2-2 #kayzp_desc2').val(),
			kayzp_medium1 = $('.kayzp_step2-2 #kayzp_medium2').val(),
			kayzp_size1 = $('.kayzp_step2-2 #kayzp_size2').val(),
			kayzp_h1 = $('.kayzp_step2-2 #kayzp_h2').val(),
			kayzp_w1 = $('.kayzp_step2-2 #kayzp_w2').val(),
			kayzp_d1 = $('.kayzp_step2-2 #kayzp_d2').val(),
			kayzp_price1 = $('.kayzp_step2-2 #kayzp_price2').val(),
			kayzp_file1_data = $('.kayzp_step2-2 #kayzp_file2_data').val();

		if (	kayzp_cat1 == '' || 
			kayzp_title1 == '' || 
			kayzp_medium1 == '' || 
			kayzp_size1 == '' || 
			kayzp_price1 == '' || 
			kayzp_file1_data == '' ||
			kayzp_style1 == '' ||
			kayzp_subject1 == '' ||
			kayzp_h1 == '' ||
			kayzp_w1 == '' ||
			kayzp_d1 == ''
			  ) {errors.push('Please complete all required fields')}


		if (errors.length == 0) {
			$('.background-rgba').css('display', 'flex');
			$.ajax({
				type: 'POST',
		    		dataType: 'json',
			    	url: wpgrAjax.ajaxurl,
				data: { 
		        			'action': 'wpgrSubmitUserWorkForm',
			  		'cat' : kayzp_cat1,
			  		'user_id' : user_id,
			  		'title' : kayzp_title1,
			  		'medium' : kayzp_medium1,
			  		'size' : kayzp_size1,
			  		'price' : kayzp_price1,
			  		'style' : kayzp_style1,
			  		'subject' : kayzp_subject1,
			  		'h' : kayzp_h1,
			  		'w' : kayzp_w1,
			  		'd' : kayzp_d1,
			  		'description' : kayzp_desc1,
			  		'file_data' : kayzp_file1_data
				},
			    	success: function(response){
			    		if (response.status == true) {

			    			setTimeout(function(){
				    			$('.kayzp_step2-2').hide();
				    			$('.kayzp_step2-3').show();
			    				$('.background-rgba').css('display', 'none');
			    			}, 1000)

			    			localStorage.setItem('current_step', 'step5');
			    		}
			    		else{
			    			$('.kayzp_step2-2 ').append('<div class="kayzp_error">'+response.error+'</div>');
			    				$('.background-rgba').css('display', 'none');
			    		}
			    	},
			    	error: function(jqXHR, textStatus){
					alert('Request failed. Please try later.')
				  	console.log( "Request failed: " + textStatus );
			    	}
			});
		}
		else{
			for (var i = 0; i < errors.length; i++) {
				$('.kayzp_step2-2 ').append('<div class="kayzp_error">'+errors[i]+'</div>')
			}

		}
	})




	// Step 5. Upload work 3
	$('.kayzp_step2-3 .kayzp_next_step_btn.kayzp_register_btn').on('click', function(){
		
		var errors = [];
		$('.kayzp_error').remove();

		var 	kayzp_cat1 = $('.kayzp_step2-3 #kayzp_cat3').val(),
			kayzp_style1 = $('.kayzp_step2-3 #kayzp_style3').val(),
			kayzp_subject1 = $('.kayzp_step2-3 #kayzp_subject3').val(),
			kayzp_title1 = $('.kayzp_step2-3 #kayzp_title3').val(),
			kayzp_desc1 = $('.kayzp_step2-3 #kayzp_desc3').val(),
			kayzp_medium1 = $('.kayzp_step2-3 #kayzp_medium3').val(),
			kayzp_size1 = $('.kayzp_step2-3 #kayzp_size3').val(),
			kayzp_h1 = $('.kayzp_step2-3 #kayzp_h3').val(),
			kayzp_w1 = $('.kayzp_step2-3 #kayzp_w3').val(),
			kayzp_d1 = $('.kayzp_step2-3 #kayzp_d3').val(),
			kayzp_price1 = $('.kayzp_step2-3 #kayzp_price3').val(),
			kayzp_file1_data = $('.kayzp_step2-3 #kayzp_file3_data').val();

		if (	kayzp_cat1 == '' || 
			kayzp_title1 == '' || 
			kayzp_medium1 == '' || 
			kayzp_size1 == '' || 
			kayzp_price1 == '' || 
			kayzp_file1_data == '' ||
			kayzp_style1 == '' ||
			kayzp_subject1 == '' ||
			kayzp_h1 == '' ||
			kayzp_w1 == '' ||
			kayzp_d1 == ''
			 ) {errors.push('Please complete all required fields')}


		if (errors.length == 0) {
			$('.background-rgba').css('display', 'flex');
			$.ajax({
				type: 'POST',
		    		dataType: 'json',
			    	url: wpgrAjax.ajaxurl,
				data: { 
		        			'action': 'wpgrSubmitUserWorkForm',
			  		'cat' : kayzp_cat1,
			  		'user_id' : user_id,
			  		'title' : kayzp_title1,
			  		'medium' : kayzp_medium1,
			  		'size' : kayzp_size1,
			  		'price' : kayzp_price1,
			  		'style' : kayzp_style1,
			  		'subject' : kayzp_subject1,
			  		'h' : kayzp_h1,
			  		'w' : kayzp_w1,
			  		'd' : kayzp_d1,
			  		'description' : kayzp_desc1,
			  		'file_data' : kayzp_file1_data
				},
			    	success: function(response){
			    		if (response.status == true) {

			    			setTimeout(function(){
				    			$('.kayzp_step2-3').hide();
				    			$('.kayzp_step3').show();
			    				$('.background-rgba').css('display', 'none');
			    			}, 1000)

			    			localStorage.setItem('current_step', 'step6');
			    		}
			    		else{
			    			$('.kayzp_step2-3 ').append('<div class="kayzp_error">'+response.error+'</div>');
			    				$('.background-rgba').css('display', 'none');
			    		}
			    	},
			    	error: function(jqXHR, textStatus){
					alert('Request failed. Please try later.')
				  	console.log( "Request failed: " + textStatus );
			    	}
			});
		}
		else{
			for (var i = 0; i < errors.length; i++) {
				$('.kayzp_step2-3 ').append('<div class="kayzp_error">'+errors[i]+'</div>')
			}

		}
	})

	// Skip work 2
	$('.kayzp_step2-2 .kayzp_skin_btn2.kayzp_register_btn').on('click', function(){
		$('.background-rgba').css('display', 'flex');
		setTimeout(function(){
			$('.kayzp_step2-2').hide();
			$('.kayzp_step2-3').show();
			$('.background-rgba').css('display', 'none');
		}, 1000)
		localStorage.setItem('current_step', 'step5');

	})

	// Skip work 3
	$('.kayzp_step2-3 .kayzp_skin_btn3.kayzp_register_btn').on('click', function(){
		$('.background-rgba').css('display', 'flex');
		setTimeout(function(){
			$('.kayzp_step2-3').hide();
			$('.kayzp_step3').show();
			$('.background-rgba').css('display', 'none');
		}, 1000)
		localStorage.setItem('current_step', 'step6');

	})

	$('.file-photo').on('click', function(){
		$('input#kayzp_avatar').click();
	})


})
