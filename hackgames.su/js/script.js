$( "#profile" ).hover(
	function() {
		$( '#miracle' ).addClass( "hover" );
	}, function() {
		$( '#miracle' ).removeClass( "hover" );
  	}
);

$( "#miracle" ).hover(
	function() {
		$( '#miracle' ).addClass( "hover" );
	}, function() {
		$( '#miracle' ).removeClass( "hover" );
  	}
);

$(window).scroll(function() {
	if (typeof mactive !== 'undefined' && mactive) {
	    if ($(this).scrollTop() >= $(window).height()) {
	    	$( '#mstart' ).addClass( "active" );
	    }
	    else{
	    	$( '#mstart' ).removeClass( "active" );
	    }
	}else{
		if (typeof mactive2 !== 'undefined' && mactive2) {

		}else{
		   	$( '#mstart' ).addClass( "active" );
		   	$('body').css('padding-top','50px');
		}
	}
});

function checkform(id, name, num){
	if($("#"+id).css('display') != 'none' && $("#"+id).css('display') != undefined){
		var value = $('#'+id+' input').eq(num).val();
		var data = name+'='+value;
		$.ajax({
	      type: 'POST',
	      url: '/api',
	      data: data,
	      success: function(data){
	        if(data == 1){
	          $('#'+id+' .alert').eq(num).css('opacity','0');
	          $('#'+id+' .alert').eq(num).css('height','0');
	          $('#'+id+' :input[type="submit"]').prop('disabled', false);
	        }
	        else{
	          $('#'+id+' .alert').eq(num).css('opacity','1');
	          $('#'+id+' .alert').eq(num).css('height','unset');
	          $('#'+id+' :input[type="submit"]').prop('disabled', true);
	        }
	      }
	    });
	}
}

function checkPayment(){
	var value = $('#payment-input').val();
	if(value.length > 0){
    	$("#payment-form").submit();
    }
    else{
        $("#form-alert h3").text('Введите сумму пополнения');
        $("#form-alert").addClass("open-form");
    }
}

function checkpass(id, num){
	var value = $('#'+id+' input').eq(num).val();
	if(value.length > 5){
       	$('#'+id+' .alert').eq(num).css('opacity','0');
        $('#'+id+' :input[type="submit"]').prop('disabled', false);
    }
    else{
        $('#'+id+' .alert').eq(num).css('opacity','1');
        $('#'+id+' :input[type="submit"]').prop('disabled', true);
    }
}

function checkrepass(id, pass, num){
	var value0 = $('#'+id+' input').eq(pass).val();
	var value = $('#'+id+' input').eq(num).val();
	if(value == value0){
       	$('#'+id+' .alert').eq(num).css('opacity','0');
        $('#'+id+' :input[type="submit"]').prop('disabled', false);
    }
    else{
        $('#'+id+' .alert').eq(num).css('opacity','1');
        $('#'+id+' :input[type="submit"]').prop('disabled', true);
    }
}

function infoHide(type, val){
	var data = 'info-hide=true&type='+type+'&value='+val;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
        	if(val == 1){
        		$("#form-alert h3").text('Информация скрыта');
        		$("#hide-"+type+" span").attr("onclick", 'infoHide('+type+',0);');
        		$("#hide-"+type+" span").removeClass('fa-eye');
        		$("#hide-"+type+" span").addClass('fa-eye-slash');
        	}
        	else{
        		$("#form-alert h3").text('Информация отображается');
        		$("#hide-"+type+" span").attr("onclick", 'infoHide('+type+',1);');
        		$("#hide-"+type+" span").removeClass('fa-eye-slash');
        		$("#hide-"+type+" span").addClass('fa-eye');
        	}
        	$("#form-alert").addClass("open-form");
        }
        else{
          alert("Произошла ошибка, попробуйте еще раз!");
        }
      }
    });
}

function sendCode(){
	var data = 'send-code=true';
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data == 2){
        	 alert("Произошла ошибка, попробуйте еще раз!");
        }
      }
    });
}

function userProfile(id){
	var data = 'profile-id='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
        	var user = JSON.parse(data);
        	$("#profile-user-img img").attr("src", user['img']);
        	$("#profile-user-nickname").text(user['nickname']);
        	$("#profile-user-status p").text(user['status']);
        	$("#profile-user-status").removeClass();
        	$("#profile-user-status").addClass("status");
        	$("#profile-user-status").addClass(user['status-class']);
        	if(user['online'] == 1){
        		$("#profile-user-online").addClass('active');
        	}
        	else{
        		$("#profile-user-online").removeClass('active');
        	}
        	if(user['verification'] == 2){
        		$("#profile-user-achive").css('display','none');
        		$("#profile-data").css('display','none');
        		$("#profile-ban").css('display','flex');
        	}
        	else{
        		$("#profile-user-achive span").text(user['achive']);
        		$("#profile-user-achive").css('display','block');
        		$("#profile-data").css('display','block');
        		$("#profile-ban").css('display','none');
	        	$("#profile-user-achive").attr("onclick", "showAchives('"+id+"'); return false;");
	        	if(user['verification'] == 1){
	        		$("#profile-user-verify p").text('Верифицирован');
	        	}
	        	else{
	        		$("#profile-user-verify p").html('<span class="colored">Не верифицирован</span>');
	        	}
	        	$("#profile-user-name p").text(user['name']);
	        	if(user['vk'] == ''){
	        		$("#profile-user-vk p").html('<span class="colored">Информация скрыта</span>');
	        	}
	        	else{
	        		$("#profile-user-vk p").html(user['vk']);
	        	}
	        	if(user['email'] == ''){
	        		$("#profile-user-mail p").html('<span class="colored">Информация скрыта</span>');
	        	}
	        	else{
	        		$("#profile-user-mail p").html(user['email']);
	        	}
	        	if(user['skype'] == ''){
	        		$("#profile-user-skype p").html('<span class="colored">Информация скрыта</span>');
	        	}
	        	else{
	        		$("#profile-user-skype p").html(user['skype']);
	        	}
	        	$("#profile-user-reg p").text(user['reg']);
	        	$("#profile-user-activity p").text(user['activity']);
	        	$("#form-user-profile input[type=submit]").attr("onclick", "writeUser('"+user['nickname']+"'); return false;");
	        	$("#show-nickname").attr("onclick", "showNickname('"+id+"'); return false;");
        	}
			changeform('user-profile');
        }
        else{
          alert("Произошла ошибка, попробуйте еще раз!");
        }
      }
    });
}

function showAchives(id){
	var data = 'profile-id-achives='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
      	if(data != 2){
      		var achives = JSON.parse(data);
			$("#numAch").html(achives['num']);
			$("#achhtml").html(achives['text']);
			changeform('user-profile-achive');
			changeform('user-profile');
        }
        else{
          alert("Произошла ошибка, попробуйте еще раз!");
        }
      }
    });
}

function showNickname(id){
	var data = 'profile-id-nickname='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
      	if(data == 3){
      		$("#history-nickname").html("<p class='regular'>История никнеймов пуста</p>");
      		$("#history-nickname").addClass('history-none');
      		$("#history-nickname").removeClass('history');
			changeform('user-nickname-history');
			changeform('user-profile');
      	}
        else if(data != 2){
			$("#history-nickname").html(data);
      		$("#history-nickname").removeClass('history-none');
      		$("#history-nickname").addClass('history');
			changeform('user-nickname-history');
			changeform('user-profile');
        }
        else{
          alert("Произошла ошибка, попробуйте еще раз!");
        }
      }
    });
}

function deleteProfile(val){
	$("#form-my-profile-delete input[type=hidden]").val(val);
	changeform('my-profile-delete');
	sendCode();
}

function editPhoto(){
	editPhoto2();
}

function editPhoto2(){
	$("#form-edit-profile-photo").submit();
}

function tabProfile(id){
	for (var i = 1; i <= 6; i++) {
		if(id != i){
			$('#profile-'+i).removeClass('profile-active');
			$('.menu').eq(i-1).removeClass('main-profile-active');
		}
		else{
			$('#profile-'+i).addClass('profile-active');
			$('.menu').eq(i-1).addClass('main-profile-active');
		}
	}
}

function tabMessage(id){
	$(".mail-action-window").removeClass('active');
	$(".mail-action-window").eq(id-1).addClass('active');
}

function tabComplain(id){
	$(".complain-action-window").removeClass('active');
	$(".complain-action-window").eq(id-1).addClass('active');
	if(id < 3){
		$(".kind-mail2").removeClass('active');
		$(".kind-mail2").eq(id-1).addClass('active');
	}
}

function getWhom(id){
	$(".sky").removeClass('active');
	$(".sky").eq(id-1).addClass('active');
	$("#complain-whom").val(id);
}

function countComplainFiles(type){
	if(type == 1){
		var input = document.getElementById("mail-files3");
		if (input.files && input.files[0]) {
			if(input.files.length > 5){
				alert("Максимальное количество файлов - 5");
				$("#complain-files p").text(5);
				return false;
			}
			$("#complain-files p").text(input.files.length);
	    }
	    else{
			$("#complain-files p").text(input.files.length);
	    }
	}
	else if(type == 2){
		var input = document.getElementById("mail-files4");
		if (input.files && input.files[0]) {
			if(input.files.length > 5){
				alert("Максимальное количество фотографий - 5");
				$("#complain-photos p").text(5);
				return false;
			}
			$("#complain-photos p").text(input.files.length);
	    }
	    else{
			$("#complain-photos p").text(input.files.length);
	    }
	}
}

function tabMessage2(id){
	if(id < 3){
		$('#mess-archive').css("display",'flex');
		$(".main-message-block").removeClass('active');
		$(".main-message-block").eq(id-1).addClass('active');
		$(".pages-number").removeClass('active');
		$(".pages-number").eq(id-1).addClass('active');
	}
	else if(id == 3){
		$(".text-mail2").removeClass('active');
		$(".text-mail2").eq(1).addClass('active');
	}
	else if(id == 4){
		$('#mess-archive').css("display",'none');
		$(".main-message-block").removeClass('active');
		$(".main-message-block").eq(2).addClass('active');
		$(".pages-number").removeClass('active');
		$(".pages-number").eq(2).addClass('active');
	}
	else if(id == 5){
		$(".text-mail2").removeClass('active');
		$(".text-mail2").eq(2).addClass('active');
	}
	$(".kind-mail").removeClass('active');
	$(".kind-mail").eq(id-1).addClass('active');
	$("#check_all").prop("checked", false);
}

var p1 = 1;
var p2 = 1;
var p3 = 1

function nextPage(type){
	if(type == 1){
		var data = 'get-messages='+(p1+1);
		$.ajax({
	      type: 'POST',
	      url: '/api',
	      data: data,
	      success: function(data){
	        if(data != 2){
		       	var message = JSON.parse(data);
		       	$('#main-messages-get').html(message['mess']);
		       	$(".mess-page").eq(0).text(message['page']);
		       	p1 = parseInt(message['jspage']);
	        }
	        else{
	        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
	          	$("#form-alert").addClass("open-form");
	        }
	      }
	    });
	}
	else if(type == 2){
		var data = 'send-messages='+(p2+1);
		$.ajax({
	      type: 'POST',
	      url: '/api',
	      data: data,
	      success: function(data){
	        if(data != 2){
		       	var message = JSON.parse(data);
		       	$('#main-messages-send').html(message['mess']);
		       	$(".mess-page").eq(1).text(message['page']);
		       	p2 = parseInt(message['jspage']);
	        }
	        else{
	        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
	          	$("#form-alert").addClass("open-form");
	        }
	      }
	    });
	}
	else{
		var data = 'archive-messages-get='+(p3+1);
		$.ajax({
	      type: 'POST',
	      url: '/api',
	      data: data,
	      success: function(data){
	        if(data != 2){
		       	var message = JSON.parse(data);
		       	$('#main-messages-archive').html(message['mess']);
		       	$(".mess-page").eq(2).text(message['page']);
		       	p3 = parseInt(message['jspage']);
	        }
	        else{
	        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
	          	$("#form-alert").addClass("open-form");
	        }
	      }
	    });
	}
}

function prevPage(type){
	if(type == 1){
		var data = 'get-messages='+(p1-1);
		$.ajax({
	      type: 'POST',
	      url: '/api',
	      data: data,
	      success: function(data){
	        if(data != 2){
		       	var message = JSON.parse(data);
		       	$('#main-messages-get').html(message['mess']);
		       	$(".mess-page").eq(0).text(message['page']);
		      	p1 = parseInt(message['jspage']);
	        }
	        else{
	        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
	          	$("#form-alert").addClass("open-form");
	        }
	      }
	    });
	}
	else if(type == 2){
		var data = 'send-messages='+(p2-1);
		$.ajax({
	      type: 'POST',
	      url: '/api',
	      data: data,
	      success: function(data){
	        if(data != 2){
		       	var message = JSON.parse(data);
		       	$('#main-messages-send').html(message['mess']);
		       	$(".mess-page").eq(1).text(message['page']);
		       	p2 = parseInt(message['jspage']);
	        }
	        else{
	        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
	          	$("#form-alert").addClass("open-form");
	        }
	      }
	    });
	}
	else{
		var data = 'archive-messages-get='+(p3-1);
		$.ajax({
	      type: 'POST',
	      url: '/api',
	      data: data,
	      success: function(data){
	        if(data != 2){
		       	var message = JSON.parse(data);
		       	$('#main-messages-archive').html(message['mess']);
		       	$(".mess-page").eq(2).text(message['page']);
		       	p3 = parseInt(message['jspage']);
	        }
	        else{
	        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
	          	$("#form-alert").addClass("open-form");
	        }
	      }
	    });
	}
}

function secretQuestionCheck(id){
	var text = $("p[secret_ask="+id+"]").text();
	$("#secret_ask").text(text);
	$("input[name=secret_ask]").val(id)
}

function pickMess(id){
	if($("input[mess="+id+"]").prop("checked")){
		$("#mess-"+id).addClass('active');
	}
	else{
		$("#mess-"+id).removeClass('active');
	}
}

function pickAll(type = 0){
	if(type == 0){
		if($("#check_all").prop("checked")){
			if($("#main-messages-get").hasClass('active') && $("#profile-2").hasClass('profile-active')){
				$("#main-messages-get input[type = checkbox]").prop("checked",true);
				$("#main-messages-get [id^='mess-']").addClass('active');
			}
			else if($("#main-messages-send").hasClass('active') && $("#profile-2").hasClass('profile-active')){
				$("#main-messages-send input[type = checkbox]").prop("checked",true);
				$("#main-messages-send [id^='mess-']").addClass('active');
			}
			else if($("#main-messages-archive").hasClass('active') && $("#profile-2").hasClass('profile-active')){
				$("#main-messages-archive input[type = checkbox]").prop("checked",true);
				$("#main-messages-archive [id^='mess-']").addClass('active');
			}
		}
		else{
			if($("#main-messages-get").hasClass('active') && $("#profile-2").hasClass('profile-active')){
				$("#main-messages-get input[type = checkbox]").prop("checked",false);
				$("#main-messages-get [id^='mess-']").removeClass('active');
			}
			else if($("#main-messages-send").hasClass('active') && $("#profile-2").hasClass('profile-active')){
				$("#main-messages-send input[type = checkbox]").prop("checked",false);
				$("#main-messages-send [id^='mess-']").removeClass('active');
			}
			else if($("#main-messages-archive").hasClass('active') && $("#profile-2").hasClass('profile-active')){
				$("#main-messages-archive input[type = checkbox]").prop("checked",false);
				$("#main-messages-archive [id^='mess-']").removeClass('active');
			}
		}
	}
	else if(type == 1){
		if($("#check_all2").prop("checked")){
			if($("#profile-6").hasClass('profile-active')){
				$("#mail-action2 input[type = checkbox]").prop("checked",true);
				$("#mail-action2 [id^='complain-']").addClass('active');
			}
		}
		else{
			if($("#profile-6").hasClass('profile-active')){
				$("#mail-action2 input[type = checkbox]").prop("checked",false);
				$("#mail-action2 [id^='complain-']").removeClass('active');
			}
		}
	}
}

function opensmile(){
	document.getElementById("smiles").classList.toggle('active');
}

function opensmile2(){
	document.getElementById("smiles2").classList.toggle('active');
}

function insertSmile(id){
	$("#textarea-mail").val($("#textarea-mail").val() + $(".emoji[smile="+id+"]").text());
}

function insertSmile2(id){
	$("#textarea-mail2").val($("#textarea-mail2").val() + $(".emoji[smile2="+id+"]").text());
}

function writeUser(nickname){
	$("[id^='form-']").removeClass("open-form");
	$("#form-my-profile").addClass('open-form');
	$("#text-mail input[name=nickname]").val(nickname);
	tabProfile(2);
	tabMessage(2); 
	tabMessage2(3);
}

function viewMessage(id, type=1){
	var data = 'get-message='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
	       	var message = JSON.parse(data);
	       	$('#text-mail .theme-message p').text(message['theme']);
	       	$('#text-mail .detail-message p').eq(0).text(message['nickname']);
	       	$('#text-mail .detail-message p').eq(1).text(message['date']);
	       	$('#text-mail .read-message p').text(message['text']);
	       	$('#text-mail #mess-additional-photo').html(message['files']);
	       	$('#text-mail').attr("mail", message['id']);
			$('.mail-action-window').removeClass('active');
			$('#text-mail').addClass('active');
			$(".text-mail2").removeClass('active');
			$(".text-mail2").eq(0).addClass('active');
	       	$('#text-mail .active .photo img').attr("src", message['img']);
			$("#b-answer").attr("onclick", "writeUser('"+message['nickname']+"');");
			if(type == 2){
				$("#b-answer").css("display", "none");
			}else{
				$("#b-answer").css("display", "flex");
			}
        }
        else{
        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
          	$("#form-alert").addClass("open-form");
        }
      }
    });
}

function viewComplain(id){
	var data = 'get-complain='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
	       	var message = JSON.parse(data);
	       	$('#text-mail3 .theme-message p').text(message['theme']);
	       	$('#text-mail3 .detail-message p').eq(1).text(message['date']);
	       	$('#text-mail3 .read-message p').html(message['text']);
	       	$('#text-mail3').attr("complain", message['id']);
			$("#text-mail3 .text-mail2").addClass('active');
	       	tabComplain(3);
        }
        else{
        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
          	$("#form-alert").addClass("open-form");
        }
      }
    });
}

function messageToArchive(){
	var id = $('#text-mail').attr("mail");
	var data = 'archive-message='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
	       location.reload(true);
        }
        else{
        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
          	$("#form-alert").addClass("open-form");
        }
      }
    });
}

function messageToTrash(){
	var id = $('#text-mail').attr("mail");
	var data = 'trash-message='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
	       location.reload(true);
        }
        else{
        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
          	$("#form-alert").addClass("open-form");
        }
      }
    });
}

function complainToTrash(){
	var id = $('#text-mail3').attr("complain");
	var data = 'trash-complain='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
	       location.reload(true);
        }
        else{
        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
          	$("#form-alert").addClass("open-form");
        }
      }
    });
}

function messagesToTrash(){
	var id = '';
	if($("#main-messages-get").hasClass('active')){
		$( "#main-messages-get input[type=checkbox]" ).each(function( index ) {
			if($( this ).prop("checked")){
				id += $( this ).attr("mess")+',';
			}
		});
	}
	else if($("#main-messages-send").hasClass('active')){
		$( "#main-messages-send input[type=checkbox]" ).each(function( index ) {
			if($( this ).prop("checked")){
				id += $( this ).attr("mess")+',';
			}
		});
	}
	else if($("#main-messages-archive").hasClass('active')){
		$( "#main-messages-archive input[type=checkbox]" ).each(function( index ) {
			if($( this ).prop("checked")){
				id += $( this ).attr("mess")+',';
			}
		});
	}
	id = id.slice(0, -1);
	if(id == '') return false;
	var data = 'trash-messages='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
	       location.reload(true);
        }
        else{
        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
          	$("#form-alert").addClass("open-form");
        }
      }
    });
}

function collabChange(id){
	$(".collabor-variant-1").addClass("info");
	$(".collabor-variant-2").addClass("info");
	$(".collabor-variant-3").addClass("info");
	$(".collabor-variant-"+id).removeClass("info");
}

function collabInfo(elem){
	if($(elem).children().css('display') == 'block'){
		$(elem).children().fadeOut(200);
		$(elem).parent().parent().css('z-index','0');
	}
	else{
		//$('.collab-v').css('z-index','0');
		//$('.collab-info div').fadeOut(200);
		var w = $(elem).parent().children().eq(0).width() + 40;
		$(elem).parent().parent().css('z-index',$(elem).parent().parent().attr("zz"));
		$(elem).children().css('max-width', w+'px');
		$(elem).children().slideDown(200);
	}
}

function complainsToTrash(){
	var id = '';
	$( "#profile-6 input[type=checkbox]" ).each(function( index ) {
		if($( this ).prop("checked")){
			id += $( this ).attr("complain")+',';
		}
	});
	id = id.slice(0, -1);
	if(id == '') return false;
	var data = 'trash-complains='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
	       location.reload(true);
        }
        else{
        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
          	$("#form-alert").addClass("open-form");
        }
      }
    });
}

function messagesToArchive(){
	var id = '';
	if($("#main-messages-get").hasClass('active')){
		$( "#main-messages-get input[type=checkbox]" ).each(function( index ) {
			if($( this ).prop("checked")){
				id += $( this ).attr("mess")+',';
			}
		});
	}
	else if($("#main-messages-send").hasClass('active')){
		$( "#main-messages-send input[type=checkbox]" ).each(function( index ) {
			if($( this ).prop("checked")){
				id += $( this ).attr("mess")+',';
			}
		});
	}
	else if($("#main-messages-archive").hasClass('active')){
		$( "#main-messages-archive input[type=checkbox]" ).each(function( index ) {
			if($( this ).prop("checked")){
				id += $( this ).attr("mess")+',';
			}
		});
	}
	id = id.slice(0, -1);
	if(id == '') return false;
	var data = 'archive-messages='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
	       location.reload(true);
        }
        else{
        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
          	$("#form-alert").addClass("open-form");
        }
      }
    });
}

function changeNickname(){
	var data = 'check_change_nickname=true';
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data == 1){
	       	sendCode();
	       	changeform('my-profile-change-nickname');
        }
        else if(data == 3){
          	$("#form-alert h3").html('На Вашем балансе недостаточно<br>средств для совершения покупки!');
          	$("#form-alert").addClass("open-form");
        }
        else{
        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
          	$("#form-alert").addClass("open-form");
        }
      }
    });
}

function checklogin(id){
	var email = $('#'+id+' input').eq(0).val();
	var pass = $('#'+id+' input').eq(1).val();
	res = $('#recaptcha-login #g-recaptcha-response').val();
	if (res == "" || res == undefined || res.length == 0){
    	$('#'+id+' .error-alert-captcha').css('opacity','1');
        $('#'+id+' .error-alert-captcha').css('height','auto');
        return false;
    }
    $('#'+id+' .error-alert-captcha').css('opacity','0');
    $('#'+id+' .error-alert-captcha').css('height','0');
    $('#'+id+' .error-alert').css('opacity','0');
    $('#'+id+' .error-alert').css('height','0');
	var data = 'checklogin=true&email='+email+'&password='+pass;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data == 1){
        	 $('#'+id+' form').submit();
        }
        else{
          $('#'+id+' .error-alert').css('opacity','1');
          $('#'+id+' .error-alert').css('height','auto');
        }
      }
    });
}

function capchaCheck(){
	var s = $('#recaptcha-check').attr("check");
	var value = $('#recaptcha-check textarea').val();
	if(s == '1'){
		$("#comment-capcha").val(value);
		changeform('alert-capcha');
		checkcomment();
	}
	else if(s == '2'){
		$("#capcha2").val(value);
		document.getElementById('send2').submit();
	}
	else if(s == '3'){
		$("#capcha3").val(value);
		if($("#complain-whom").val() == ''){
			alert('Выберите на кого жалоба!');
		}
		else if($("#send3 input[name=accused]").val() == ''){
			alert('Укажите никнейм обвиняемого!');
		}
		else if($("#send3 textarea[name=send-complain]").val() == '' || $("#send3 textarea[name=send-complain]").val() == undefined){
			alert('Опишите причину конфликта!');
		}
		else
			document.getElementById('send3').submit();
	}
}

function capcha(id){
	var r = $("#recaptcha-check textarea").val();
	if(r == "" || r == undefined || r.length == 0){
		$('#recaptcha-check').attr("check", id);
		grecaptcha.reset();
		changeform('alert-capcha');
		return false;
	}
	else{
		capchaCheck();
	}
}

function checkcomment(){
	if($("#can_send").val() != 1){
		$("#form-alert h3").text('Чтобы оставить отзыв, приобретите чит.');
        $("#form-alert").addClass("open-form");
		return false;
	}
	var comment = $('#comment-text').val();
	if(comment.length == 0){
		alert("Поле отзыва не должно быть пустым!");
		return false;
	}
	if(comment.length > 400){
		alert("Максимальная длина отзыва 400 символов!");
		return false;
	}
	var rate = document.getElementById("comment-rate").value;
	if(rate != '1' && rate != '2'){
		alert("Необходимо поставить оценку!");
		return false;
	}	
	var r = $("#comment-capcha").val();
	if(r == "" || r == undefined || r.length == 0){
		$('#recaptcha-check').attr("check", '1');
		grecaptcha.reset();
		changeform('alert-capcha');
		return false;
	}
	document.getElementById('comment').submit();
}

function clearComment(){
	$('#comment-text').val('');
	document.getElementById("comment-rate").value = '';
	document.getElementById("comment-files").innerHTML = document.getElementById("comment-files").innerHTML; 
	document.getElementById("load").innerHTML = '';
	document.getElementById("load").style.opacity = '0';
	document.getElementById('comment-dislike').classList.remove('active');
	document.getElementById('comment-like').classList.remove('active');
}

function buyCheat(type){
	var cheat = $("#form-compensation input[name=cheat]").val();
	var data = 'can_buy=true&cheat='+cheat+'&sub='+type;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data == 1){
        	changeform('compensation');
        	$("#form-compensation input[name=sub]").val(type);
        }
        else{
        	if(data == 3){
        		$("#form-alert h3").text('Данный чит имеет ограниченное количество слотов. Сейчас они все заполнены. Приходите на следующий месяц, либо следите за статусом трейнера =)');
        	}
        	else{
        		$("#form-alert h3").text('На Вашем балансе недостаточно средств для совершения покупки!');
        	}
         	$("#form-alert").addClass("open-form");
          	changeform('subs');
        }
      }
    });
}

function commentrate(rate){
	if(rate == 1){
		document.getElementById('comment-like').classList.add('active');
		document.getElementById('comment-dislike').classList.remove('active');
		document.getElementById("comment-rate").value = '1';
	}
	else{
		document.getElementById('comment-like').classList.remove('active');
		document.getElementById('comment-dislike').classList.add('active');
		document.getElementById("comment-rate").value = '2';
	}
}

function rule(type){
	if(type == 1){
		document.getElementById("kind-1").classList.add('active');
		document.getElementById("kind-2").classList.remove('active');
	}
	else{
		document.getElementById("kind-2").classList.add('active');
		document.getElementById("kind-1").classList.remove('active');
	}
}

function deletecomment(id){
	if(id != ''){
		var data = 'deletecomment=true&id='+id;
		$.ajax({
	      type: 'POST',
	      url: '/api',
	      data: data,
	      success: function(data){
	        if(data == 1){
	        	location.reload(true);
	        }
	        else{
	        	alert("Произошла ошибка, попробуйте еще раз!");
	        }
	      }
	    });
	}
}

function answercomment(id){
	document.getElementById("answer-id").value = id;
}

function editcomment(id){
	document.getElementById("edit-id").value = id;
	document.getElementById("comment-edit-text").value = $('p[comment='+id+']').eq(0).text();
}

function previewPhotos(){
	var input = document.getElementById("comment-files");
	
	document.getElementById("load").innerHTML = "";
	if (input.files && input.files[0]) {
		document.getElementById("load").style.opacity='1';
		for (i = 0; i < input.files.length; i++) {
			if(i > 4){
				alert("Максимальное количество файлов - 5");
				return false;
			}
			var reader = new FileReader();
			reader.onload = function (e) {
				document.getElementById("load").innerHTML += "<div><img src='"+e.target.result+"' alt ='screenshot'></div>";
			}
			reader.readAsDataURL(input.files[i]);
		}
    }
    else{
    	document.getElementById("load").style.opacity='0';
    }
}

function previewPhotosMail(){
	var input = document.getElementById("mail-files");
	
	document.getElementById("attached-photos").innerHTML = "";
	if (input.files && input.files[0]) {
		document.getElementById("attached-photos").style.opacity='1';
		$("#mess-clear").css("display","block");
		for (i = 0; i < input.files.length; i++) {
			if(i > 5){
				alert("Максимальное количество файлов - 6");
				return false;
			}
			var reader = new FileReader();
			reader.onload = function (e) {
				document.getElementById("attached-photos").innerHTML += "<div class='attached-photo'><img src='"+e.target.result+"' alt ='photo'></div>";
			}
			reader.readAsDataURL(input.files[i]);
		}
    }
    else{
    	document.getElementById("attached-photos").style.opacity='0';
		$("#mess-clear").css("display","none");
    }
}

function clearFileMess(){
	document.getElementById("mail-files").innerHTML = document.getElementById("mail-files").innerHTML; 
	$("#mess-clear").css("display","none");
	document.getElementById("attached-photos").innerHTML = "";
    document.getElementById("attached-photos").style.opacity='0';
}

function clearFileMess2(){
	document.getElementById("mail-files2").innerHTML = document.getElementById("mail-files").innerHTML; 
	$("#mess-clear2").css("display","none");
	document.getElementById("attached-photos2").innerHTML = "";
    document.getElementById("attached-photos2").style.opacity='0';
}

function previewPhotosMail2(){
	var input = document.getElementById("mail-files2");
	
	document.getElementById("attached-photos2").innerHTML = "";
	if (input.files && input.files[0]) {
		document.getElementById("attached-photos2").style.opacity='1';
		$("#mess-clear2").css("display","block");
		for (i = 0; i < input.files.length; i++) {
			if(i > 5){
				alert("Максимальное количество файлов - 6");
				return false;
			}
			var reader = new FileReader();
			reader.onload = function (e) {
				document.getElementById("attached-photos2").innerHTML += "<div class='attached-photo'><img src='"+e.target.result+"' alt ='photo'></div>";
			}
			reader.readAsDataURL(input.files[i]);
		}
    }
    else{
    	document.getElementById("attached-photos2").style.opacity='0';
		$("#mess-clear2").css("display","none");
    }
}

function changeform(id){
    document.getElementById("form-"+id).classList.toggle('open-form');
    if($('.open-form').not( ".popup-alert" ).length > 0){
   		$("body").css("overflow", "hidden");
   	}
   	else{
   		$("body").css("overflow", "unset");
   	}
}
function menu(){
    document.getElementById("menu").classList.toggle('active');
}

function faq(id){
    document.getElementById("faq"+id).classList.toggle('active');
}

function changeCheatInfo(){
    document.getElementById("info1").classList.toggle('info-active');
    document.getElementById("info2").classList.toggle('info-active');
    document.getElementById("tab-info1").classList.toggle('active');
    document.getElementById("tab-info2").classList.toggle('active');
}
jQuery(document).ready(function() {
	if (typeof mainPage !== 'undefined' && mainPage) {
		if($(window).width() > 880){
			var sources = document.querySelectorAll('video#player source');
			var video = document.querySelector('video#player');
			for(var i = 0; i<sources.length;i++) {
			  sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
			}
			video.load(); 
		}
	}
});

jQuery(document).ready(function() {
jQuery('.show-animate').addClass("hidden").viewportChecker({
classToAdd: 'visible animated fadeInDown',
offset: 100
});
});

jQuery(document).ready(function() {
jQuery('.show-animate-zoom').addClass("hidden").viewportChecker({
classToAdd: 'visible animated zoomIn',
offset: 100
});
});
jQuery(document).ready(function() {
jQuery('.show-animate-fadeleft').addClass("hidden").viewportChecker({
classToAdd: 'visible animated fadeInLeft',
offset: 100
});
});
jQuery(document).ready(function() {
jQuery('.show-animate-faderight').addClass("hidden").viewportChecker({
classToAdd: 'visible animated fadeInRight',
offset: 100
});
});

$(document).ready(function () {
    $("#down").click(function () {
        var destination = $(window).height();
        $('html').animate({ scrollTop: destination }, 1100);
        return false; 
    });
});

function answer(id){
	var data = 'quiz='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
	       	var qdata = JSON.parse(data);
	       	$("#interrogation").addClass( "active" );	
	       	for (var i = 0; i < 10; i++) {
			    $('.results').eq(i).css('width', qdata[i]+'%');
	       	}
        }
      }
    });
}

function check_if_capcha_is_filled(id){
	res = $('#recaptcha-'+id+'  textarea').val();

    if (res == "" || res == undefined || res.length == 0){
    	alert("Подтвердите капчу!");
        return false;
    }
    else
        return true;
}

function openNews(id){
	var data = 'get-news='+id;
	$.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(data){
        if(data != 2){
	       	var news = JSON.parse(data);
	       	$('#news-slider').slick('unslick');
			$('#slider-big').slick('unslick');
	       	$('#news-main-photo').attr("src", news['photo']);
	       	$('#news-main-topic').text(news['topic']);
	       	$('#news-slider').html(news['files']);
	       	$('#news-main-text').text(news['text']);
	       	$('#slider-big').html(news['slider']);
	       	$(".big-news").css("display","flex");
			$("body").css("height","100vh");
			$("body").css("overflow","hidden");
			document.getElementById('big-news').scrollTop = 0;
			restartSliderNews();
			$("#slider-big").slick({
		        infinite: true,
		        slidesToShow: 1,
		        initialSlide: 0
		    });
        }
        else{
        	$("#form-alert h3").text('Произошла ошибка, попробуйте еще раз!');
          	$("#form-alert").addClass("open-form");
        }
      }
    });
}

function recoveryPass(){
	if($("#form-recovery").css('display') != 'none' && $("#form-recovery").css('display') != undefined){
		var step = $("#recovery").attr("step");
		if(step == 0){
			var email = $('#recovery-email').val();
			var data = 'checkrecovery=true&email='+email;
			$.ajax({
		      type: 'POST',
		      url: '/api',
		      data: data,
		      success: function(data){
		      	if(data == 2){
	          		alert("Произошла ошибка, попробуйте еще раз!");
		        }
		        else if(data == 5){
		        	$("#form-alert h3").text('Данный аккаунт не имеет возможности восстановления пароля!');
	          		$("#form-alert").addClass("open-form");
	          		changeform('recovery');
		        }
		        else if(data == 3){
		        	$(".recovery2").css("display","block");
		        	$(".recovery1").css("display","none");
		        	$(".recovery1").val('');
		        	$("#recovery").attr("step","1");
		        }
		        else if(data == 4){
		        	$("#form-alert h3").text('Новый дополнительный пароль был отправлен к Вам на почту!');
	          		$("#form-alert").addClass("open-form");
	          		changeform('recovery');
		        }
		        else{
		        	var recovery = JSON.parse(data);
		        	if(recovery['type'] == 2){
		        		$(".recovery1").css("display","block");
		        		$(".tunderline2").css("display","block");
			        	$(".recovery2").css("display","none");
			        	$(".recovery2").val('');
			        	$("#recovery-quest").text(recovery['ask']);
			        	$("#recovery").attr("step","1");
		        	}
		        	else{
		        		$(".recovery1").css("display","block");
			        	$(".recovery2").css("display","none");
			        	$(".recovery2").val('');
			        	$("#recovery-quest").text(recovery['ask']);
			        	$("#recovery").attr("step","1");
		        	}
		        }
		      }
		    });
		}
		else if(step == 1){
			var email = $('#recovery-email').val();
			var data = 'checkrecovery=true&email='+email;
			$.ajax({
			    type: 'POST',
			    url: '/api',
			    data: data,
			    success: function(data){
					if(data == 2){
		          		alert("Произошла ошибка, попробуйте еще раз!");
			        }
			        else if(data == 5){
			        	$("#form-alert h3").text('Данный аккаунт не имеет возможности восстановления пароля!');
		          		$("#form-alert").addClass("open-form");
		          		changeform('recovery');
			        }
			        else{
			        	if($("input.recovery2").val() != '' || $("input.recovery1").val()){
			        		$("#recovery-form").submit();
						}
			        }
		      	}
		  	});
		}
	}
}

function changerecovery(){
	if($(".recovery1").css("display") == 'block'){
		$(".recovery2").css("display","block");
		$(".recovery1").css("display","none");
		$(".recovery1").val('');
	}
	else{
		$(".recovery1").css("display","block");
		$(".recovery2").css("display","none");
		$(".recovery2").val('');
	}
}

function closeNews(){
	$(".big-news").css("display","none");
	$("body").css("height","auto");
	$("body").css("overflow","unset");
}

function closeSlider(){
	$("#big-slider").css("display","none");
	jQuery("iframe").each(function() {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
    if($('.open-form').not( ".popup-alert" ).length > 0){
   		$("body").css("overflow", "hidden");
   	}
   	else{
   		$("body").css("overflow", "unset");
   	}
}

function openSliderNews(id){
	$("#big-slider").css("display","flex");
	restartBigSlider(id);
   	$("body").css("overflow", "hidden");
}

function restartSliderNews(){
	$("#news-slider").slick({
        infinite: true,
        slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
    });
}

function restartBigSlider(id){
	$('#slider-big').slick('unslick');
	$("#slider-big").slick({
        infinite: true,
        slidesToShow: 1,
        initialSlide: id-1
    });
	$('.js-page').text(id + ' из ' + $("#slider-big").slick("getSlick").slideCount);
}

$(document).on('ready', function() {
	 $("#news-slider").slick({
        infinite: true,
        slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
    });
	 $("#slider-big").slick({
        infinite: true,
        slidesToShow: 1
    });
	if($("#vscroll a") .size() > 4){
		$("#vscroll").css("height","685px !important");
		$("#vscroll").css("padding","30px 0");
	 	$("#vscroll").slick({
	        arrows: true,
	    	vertical: true,
	        infinite: false,
	        slidesToShow: 4
    	});
    }
    $("#purchase").slick({
        infinite: true,
        slidesToShow: 6,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
    });
	$('#screen-cheat').slick({
	  slidesToScroll: 1,
	  focusOnSelect: true,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
				}
			}
		]
	});
	$('#block').slick({
		autoplay: false,
	    dots: true,
		arrows: false,
	    customPaging : function(slider, i) {
		    var thumb = $(slider.$slides[i]).data();
		    return '<a>'+(i+1)+'</a>';
        }
	});
	$('#chat').slick({
		autoplay: false,
	    dots: true,
		arrows: false,
  		adaptiveHeight: true,
	    customPaging : function(slider, i) {
		    var thumb = $(slider.$slides[i]).data();
		    return '<a>'+(i+1)+'</a>';
        }
	});


	$('.slide-prev').click(function(){
	  $('#block').slick('slickPrev');
	});

	$('.slide-next').click(function(){
	  $('#block').slick('slickNext');
	});
	$('.slide-prev2').click(function(){
	  $('#chat').slick('slickPrev');
	});

	$('.slide-next2').click(function(){
	  $('#chat').slick('slickNext');
	});
});

$('#block').on('init', function(event, slick){
	$('#block .slick-dots').wrap("<div class='dots-center'></div>"); 
	$( "#block .slick-dots" ).before( "<div class='slide-prev' oncl></div>" );
	$( "#block .slick-dots" ).after( "<div class='slide-next'></div>" );
});

$('#chat').on('init', function(event, slick){
	$('#chat .slick-dots').wrap("<div class='dots-center'></div>"); 
	$( "#chat .slick-dots" ).before( "<div class='slide-prev2' oncl></div>" );
	$( "#chat .slick-dots" ).after( "<div class='slide-next2'></div>" );
});

$('#slider-big').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.js-page').text(i + ' из ' + slick.slideCount);
});

function video(){
	var v = document.getElementById("player");
	v[v.paused?"play":"pause"]();
	document.getElementById("play").classList.toggle('stop');
}

$(function(){
    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".upload_button" ),
        lbl = wrapper.find( "mark" );

    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
        }else
            btn.text( file_name );
    }).change();

});
$( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
});

function copy(elem){
	document.getElementById('clipboard').innerText = elem.href;
	var emailLink = document.querySelector('#clipboard');  
	var range = document.createRange();  
	range.selectNode(emailLink);  
	window.getSelection().addRange(range);  

	try {
	    var successful = document.execCommand('copy');
	    var msg = successful?'Сс':'неудачно';
	    alert('Ссылка скопирована в буфер обмена');
	    return 0;
	} catch(err) {
		return 1;
	}
	window.getSelection().removeAllRanges();
}

function videoPrev(){
	window.player.dispose();
	var pl = document.getElementById("video-cheat");
	var v = parseInt(pl.getAttribute("v"));
	v = (v == 0) ? (videos.length - 1) : (v-1);
	pl.setAttribute("v", v);
	var str = '<video id="video_1" poster="'+videos[v].poster+'" class="video-js vjs-default-skin" width="1000" controls data-setup="{}">';
	str += ' <source src="'+videos[v].link+'-360.mov" type="video/webm" label="360p" res="360" />';
	str += ' <source src="'+videos[v].link+'-480.mov" type="video/webm" label="480p" res="480" />';
	str += ' <source src="'+videos[v].link+'-720.mov" type="video/webm" label="720p" res="720" />';
	str += ' <source src="'+videos[v].link+'-1080.mov" type="video/webm" label="1080p" res="1080" />';
	str += '</video><div class="prev" onclick="videoPrev();"></div><div class="next" onclick="videoNext();"></div></div>';
	pl.innerHTML = str;
	window.player = videojs("video_1");
	player.videoJsResolutionSwitcher({default: 'high'});
	var options = {
		title: videos[v].title,
		floatPosition: 'left',
		margin: '10px',
		fontSize: '1.5em',
		debug: false
	}
	player.titleoverlay(options);
	var btnb = addNewButton({
		player: player,
		icon: "fa-share",
		alink: videos[v].alink
	});
}

function videoNext(){
	window.player.dispose();
	var pl = document.getElementById("video-cheat");
	var v = parseInt(pl.getAttribute("v"));
	v = (v == (videos.length - 1)) ? 0 : (v+1);
	pl.setAttribute("v", v);
	var str = '<video id="video_1" poster="'+videos[v].poster+'" class="video-js vjs-default-skin" width="1000" controls data-setup="{}">';
	str += ' <source src="'+videos[v].link+'-360.mov" type="video/webm" label="360p" res="360" />';
	str += ' <source src="'+videos[v].link+'-480.mov" type="video/webm" label="480p" res="480" />';
	str += ' <source src="'+videos[v].link+'-720.mov" type="video/webm" label="720p" res="720" />';
	str += ' <source src="'+videos[v].link+'-1080.mov" type="video/webm" label="1080p" res="1080" />';
	str += '</video><div class="prev" onclick="videoPrev();"></div><div class="next" onclick="videoNext();"></div></div>';
	pl.innerHTML = str;
	window.player = videojs("video_1");
	player.videoJsResolutionSwitcher({default: 'high'});
	var options = {
		title: videos[v].title,
		floatPosition: 'left',
		margin: '10px',
		fontSize: '1.5em',
		debug: false
	}
	player.titleoverlay(options);
	var btnb = addNewButton({
		player: player,
		icon: "fa-share",
		alink: videos[v].alink
	});
}
