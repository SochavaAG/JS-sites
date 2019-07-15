jQuery(document).ready(function($){

	$('#account-info').on('submit', function(event){
		event.preventDefault();
		$('.kayzp-errors').hide();
		$('.kayzp-success').hide();
		var first_name = $(this).find('#first_name').val(),
		 	last_name = $(this).find('#last_name').val(),
		 	email = $(this).find('#email').val(),
		 	new_password = $(this).find('#new_password').val(),
		 	confirm_password = $(this).find('#confirm_password').val(),
		 	mailing_list = $(this).find('#mailing_list').prop('checked'),
		 	error = false,
		 	errors = [];


		 if (new_password != confirm_password) {
		 	error = true;
		 	errors.push('Passwords does not match');
		 }

		 if (email == '') {
		 	error = true;
		 	errors.push('Email can not be empty');
		 }

		 if (new_password != '') {
		 	if (/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?"]).*$/.test(new_password) == false) {

			 	error = true;
			 	errors.push('Incorrect password format');
		 	}
		 }

		 if (error) {
		 	$('.kayzp-errors').html(errors.join(', <br>')).show();
		 }
		 else{

			jQuery.ajax({
			   type: 'post',
			    dataType: 'json',
			    url: MyAjax.ajaxurl,
			    data: {
			        action: 'updateAccountInfo',
			        first_name : first_name,
					last_name : last_name,
					email : email,
					new_password : new_password,
					mailing_list : mailing_list	
		    	},
			    success: function(data) {
			    	if (data) {
		 				$('.kayzp-errors').html(data).show();
			    	}
			    	else{
		 				$('.kayzp-errors').hide();
		 				$('.kayzp-success').show();
			    	}
			    },
			    error: function (jqXHR, textStatus, errorThrown) {
			        // alert('Error! Refresh the page and try again.');
				    console.log(jqXHR.responseText + '. ERRORS: ' + errorThrown);
				}
			});

		 }
	})




	$('#pesonal-info').on('submit', function(event){
		event.preventDefault();
		$('.kayzp-errors').hide();
		$('.kayzp-success').hide();
		var about = $(this).find('#about').val(),
		 	education = $(this).find('#education').val(),
		 	events = $(this).find('#events').val(),
		 	exhibitions = $(this).find('#exhibitions').val(),
		 	fb = $(this).find('#fb').val(),
		 	insta = $(this).find('#insta').val(),
		 	website = $(this).find('#website').val(),
		 	country = $(this).find('#country').val(),
		 	city = $(this).find('#city').val(),
		 	region = $(this).find('#region').val(),
		 	zip = $(this).find('#zip').val(),
		 	error = false,
		 	errors = [];

		
		 if (error) {
		 	$('.kayzp-errors').html(errors.join(', <br>')).show();
		 }
		 else{

			jQuery.ajax({
			   type: 'post',
			    dataType: 'json',
			    url: MyAjax.ajaxurl,
			    data: {
			        action: 'updatePersonalInfo',
			        about : about,
					education : education,
					events : events,
					exhibitions : exhibitions,
					fb : fb,
					insta : insta,
					website : website,
					country : country,
					city : city,
					region : region,
					zip : zip	
		    	},
			    success: function(data) {
			    	console.log(data);
			    	if (data) {
		 				$('.kayzp-errors').html(data).show();
			    	}
			    	else{
		 				$('.kayzp-errors').hide();
		 				$('.kayzp-success').show();
			    	}
			    },
			    error: function (jqXHR, textStatus, errorThrown) {
			        // alert('Error! Refresh the page and try again.');
				    console.log(jqXHR.responseText + '. ERRORS: ' + errorThrown);
				}
			});

		 }
	})



	$('#kayzp-select-file').on('click', function(e){
   		e.preventDefault();
   		$('#kayzp_avatar').click();
   	})

   	$('#image-info').on('submit', function(event){
		event.preventDefault();
		$('.kayzp-errors').hide();
		$('.kayzp-success').hide();
		var file = $(this).find('#kayzp_avatar_data').val();

		
		 if (file != '') {

			jQuery.ajax({
			   type: 'post',
			    dataType: 'json',
			    url: MyAjax.ajaxurl,
			    data: {
			        action: 'updateAvatarInfo',
			        file : file
		    	},
			    success: function(data) {
			    	if (data) {
		 				$('.kayzp-errors').html(data).show();
			    	}
			    	else{
		 				$('.kayzp-errors').hide();
		 				$('.kayzp-success').show();
		 				$('#user_current_avatar').attr('src', file);
			    	}
			    },
			    error: function (jqXHR, textStatus, errorThrown) {
			        // alert('Error! Refresh the page and try again.');
				    console.log(jqXHR.responseText + '. ERRORS: ' + errorThrown);
				}
			});

		 }
	})



   	$('a.delete_product').on('click', function(event){
		event.preventDefault();
		var id = $(this).attr('data-product-id'),
			product = $(this).parents('.product-wrapper');


		
		 if (confirm("Are you sure?")) {

			jQuery.ajax({
			   type: 'post',
			    dataType: 'json',
			    url: MyAjax.ajaxurl,
			    data: {
			        action: 'deleteArtwork',
			        id : id
		    	},
			    success: function(data) {
			    	if (data == true) {
		 				$(product).remove();
			    	}
			    	else{
				        alert('Error! Refresh the page and try again.');
			    	}
			    },
			    error: function (jqXHR, textStatus, errorThrown) {
			        // alert('Error! Refresh the page and try again.');
				    console.log(jqXHR.responseText + '. ERRORS: ' + errorThrown);
				}
			});

		 }
	})

	$('#kayp-add-new').on('click', function(e){
		e.preventDefault();
		location.href = '/create-artwork';
	})

	$('#create-artwork').on('submit', function(event){
		event.preventDefault();
		$('.kayzp-errors').hide();
		$('.kayzp-success').hide();
		var error = false,
		 	errors = [];

		var kayzp_cat1 = $(this).find('#kayzp_cat1').val(),
			kayzp_style1 = $(this).find('#kayzp_style1').val(),
			kayzp_subject1 = $(this).find('#kayzp_subject1').val(),
			kayzp_title1 = $(this).find('#kayzp_title1').val(),
			kayzp_desc1 = $(this).find('#kayzp_desc1').val(),
			kayzp_medium1 = $(this).find('#kayzp_medium1').val(),
			kayzp_size1 = $(this).find('#kayzp_size1').val(),
			kayzp_h1 = $(this).find('#kayzp_h1').val(),
			kayzp_w1 = $(this).find('#kayzp_w1').val(),
			kayzp_d1 = $(this).find('#kayzp_d1').val(),
			kayzp_price1 = $(this).find('#kayzp_price1').val(),
			kayzp_file1_data = $(this).find('#kayzp_avatar_data').val();

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
			$.ajax({
				type: 'POST',
		    		dataType: 'json',
			    	url: MyAjax.ajaxurl,
				data: { 
		        	'action': 'SubmitUserArtWork',
			  		'cat' : kayzp_cat1,
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
		 				$('.kayzp-errors').hide();
		 				$('.kayzp-success').show();
		    		}
		    		else{
		 				$('.kayzp-errors').html(response.error).show();
										  
		    		}
		    	},
		    	error: function(jqXHR, textStatus){
					alert('Request failed. Please try later.')
				  	console.log( "Request failed: " + textStatus );
		    	}
			});
		}
		else{
		 	$('.kayzp-errors').html(errors.join(', <br>')).show();
		}
	})



	$('#update-artwork').on('submit', function(event){
		event.preventDefault();
		$('.kayzp-errors').hide();
		$('.kayzp-success').hide();
		var error = false,
		 	errors = [];

		var kayzp_cat1 = $(this).find('#kayzp_cat1').val(),
			kayzp_style1 = $(this).find('#kayzp_style1').val(),
			kayzp_subject1 = $(this).find('#kayzp_subject1').val(),
			kayzp_title1 = $(this).find('#kayzp_title1').val(),
			kayzp_desc1 = $(this).find('#kayzp_desc1').val(),
			kayzp_medium1 = $(this).find('#kayzp_medium1').val(),
			kayzp_size1 = $(this).find('#kayzp_size1').val(),
			kayzp_h1 = $(this).find('#kayzp_h1').val(),
			kayzp_w1 = $(this).find('#kayzp_w1').val(),
			kayzp_d1 = $(this).find('#kayzp_d1').val(),
			kayzp_price1 = $(this).find('#kayzp_price1').val(),
			artwork_id = $(this).find('#artwork_id').val(),
			kayzp_file1_data = $(this).find('#kayzp_avatar_data').val();

		if (	kayzp_cat1 == '' || 
			kayzp_title1 == '' || 
			kayzp_medium1 == '' || 
			kayzp_size1 == '' || 
			kayzp_price1 == '' || 
			kayzp_style1 == '' ||
			kayzp_subject1 == '' ||
			kayzp_h1 == '' ||
			kayzp_w1 == '' ||
			kayzp_d1 == ''
			 ) {errors.push('Please complete all required fields')}


		if (errors.length == 0) {
			$.ajax({
				type: 'POST',
		    		dataType: 'json',
			    	url: MyAjax.ajaxurl,
				data: { 
		        	'action': 'SubmitUserUpdateArtWork',
			  		'cat' : kayzp_cat1,
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
			  		'file_data' : kayzp_file1_data,
			  		'artwork_id' : artwork_id
				},
		    	success: function(response){
		    		if (response.status == true) {
		 				$('.kayzp-errors').hide();
		 				$('.kayzp-success').show();
		    		}
		    		else{
		 				$('.kayzp-errors').html(response.error).show();
										  
		    		}
		    	},
		    	error: function(jqXHR, textStatus){
					alert('Request failed. Please try later.')
				  	console.log( "Request failed: " + textStatus );
		    	}
			});
		}
		else{
		 	$('.kayzp-errors').html(errors.join(', <br>')).show();
		}
	})

	$('.kayzp_artworks a.quickview.ss').on('click', function(e){
		e.preventDefault();
		location.href = $(this).attr('href');
	})

	$('input#fb').on('keyup', function(){
		if ($(this).val().indexOf('https://www.facebook.com/') < 0) {
			$(this).val('https://www.facebook.com/'+$(this).val());
		}
	})

	$('input#insta').on('keyup', function(){
		if ($(this).val().indexOf('https://www.instagram.com/') < 0) {
			$(this).val('https://www.instagram.com/'+$(this).val());
		}
	})

	if ($('.uruana-topmenu').length > 0) {
		var account_replace_status = $('.account-replace').css('display');
		var for_customers_status = $('.for-customers').css('display');

		if (account_replace_status == 'inline-block') {
			$('.account-replace li a').each(function(){
				$('.active-mobile.setting-popup.pull-left ul.active-content').append('<li class="'+$(this).parent().attr('class')+'"><a href="'+$(this).attr('href')+'">'+$(this).text()+'</a></li>')
			})
		}
		else if(for_customers_status == 'inline-block'){
			$('li.for-customers a').each(function(){
				$('.active-mobile.setting-popup.pull-left ul.active-content').append('<li class="'+$(this).parent().attr('class')+'"><a href="'+$(this).attr('href')+'">'+$(this).text()+'</a></li>')
			})
		}
	}

	if($('h2.bread-title').length > 0){
		$('h2.bread-title').each(function(){
			if ($(this).text() == 'Product detail') {$(this).text('Product details')}
		})
	}


})
