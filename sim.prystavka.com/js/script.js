	function send(){
		var r = /^\w+@\w+\.\w{2,4}$/i;
		document.getElementById("fname").style.borderBottom='1px solid #666';
		document.getElementById("fmail").style.borderBottom='1px solid #666';
		document.getElementById("fmessage").style.borderBottom='1px solid #666';
		if (document.getElementById("fname").value.length == 0 ){
			document.getElementById("fname").style.borderBottom='2px solid #f00';
			alert("Вы не указали свое имя!");
		}
		else{
			if (!r.test(document.getElementById("fmail").value)) {
				document.getElementById("fmail").style.borderBottom='2px solid #f00';
				alert("Вы указали неверный Email!");
			}
			else
			if(document.getElementById("fmessage").value.length == 0 ) {
				document.getElementById("fmessage").style.borderBottom='2px solid #f00';
				alert("Вы не написали сообщение!");
			}
			else{
				var form_data = $("#contact-form").serialize(); //собераем все данные из формы
				$.ajax({
				type: "POST", //Метод отправки
				url: "manage.php", //путь до php файла отправителя
				data: form_data,
				success: function() {
					document.getElementById("contact").style.filter='blur(5px)';
					document.getElementById("sub1").style.opacity='0';
					setTimeout(function(){
						document.getElementById("subh1").style.display='block';
						document.getElementById("subh1").style.opacity='1';
						document.getElementById("contact-form").style.opacity='0';
						document.getElementById("sub1").style.height='0';
						setTimeout(function(){
							document.getElementById("contact").style.filter='';
							document.getElementById("sub1").style.display='none';
						}, 1000);
					}, 1000);
				}});					
			}
		}
	}
	
	function rezult(){
		var r = /^\w+@\w+\.\w{2,4}$/i;
		document.getElementById("fname").style.borderBottom='1px solid #666';
		document.getElementById("fsum").style.borderBottom='1px solid #666';
		document.getElementById("fdate").style.borderBottom='1px solid #666';
		if (document.getElementById("fname").value.length == 0 ){
			document.getElementById("fname").style.borderBottom='2px solid #f00';
			alert("Вы не указали номер заказа!");
		}
		else{
			if (document.getElementById("fsum").value.length == 0 ) {
				document.getElementById("fsum").style.borderBottom='2px solid #f00';
				alert("Вы не указали сумму заказа!");
			}
			else
			if(document.getElementById("fdate").value.length == 0 ) {
				document.getElementById("fdate").style.borderBottom='2px solid #f00';
				alert("Вы не указали время и дату оплаты!");
			}
			else{
				var form_data = $("#contact-form").serialize(); //собераем все данные из формы
				$.ajax({
				type: "POST", //Метод отправки
				url: "manage.php", //путь до php файла отправителя
				data: form_data,
				success: function() {
					document.getElementById("contact").style.filter='blur(5px)';
					document.getElementById("sub1").style.opacity='0';
					setTimeout(function(){
						document.getElementById("subh1").style.display='block';
						document.getElementById("subh1").style.opacity='1';
						document.getElementById("contact-form").style.opacity='0';
						document.getElementById("sub1").style.height='0';
						setTimeout(function(){
							document.getElementById("contact").style.filter='';
							document.getElementById("sub1").style.display='none';
						}, 1000);
					}, 1000);
				}});					
			}
		}
	}
	
	function buy_order(){
		var r = /^\w+@\w+\.\w{2,4}$/i;
		document.getElementById("bname").style.borderBottom='1px solid #666';
		document.getElementById("bmail").style.borderBottom='1px solid #666';
		document.getElementById("btext").style.borderBottom='1px solid #666';
		document.getElementById("bphone").style.borderBottom='1px solid #666';
		document.getElementById("btext").style.borderBottom='1px solid #666';
		document.getElementById("bdate").style.borderBottom='1px solid #666';
		document.getElementById("bdate2").style.borderBottom='1px solid #666';
		if (document.getElementById("bname").value.length == 0 ){
			document.getElementById("bname").style.borderBottom='2px solid #f00';
			alert("Вы не указали свое имя!");
			return false;		
		}
		if (!r.test(document.getElementById("bmail").value)) {
			document.getElementById("bmail").style.borderBottom='2px solid #f00';
			alert("Вы указали неверный Email!");
			return false;					
		}
		if(document.getElementById("bphone").value.length == 0 ) {
			document.getElementById("bphone").style.borderBottom='2px solid #f00';
			alert("Вы не указали номер телефона!");
			return false;		
		}
		if(document.getElementById("bdate").value.length == 0 ) {
			document.getElementById("bdate").style.borderBottom='2px solid #f00';
			alert("Вы не указали дату начала строка!");
			return false;			
		}
		if(document.getElementById("bdate2").value.length == 0 ) {
			document.getElementById("bdate2").style.borderBottom='2px solid #f00';
			alert("Вы не указали дату конца строка!");
			return false;	
		}
		if(document.getElementById("bdate").value.length == 0 ) {
			document.getElementById("bdate").style.borderBottom='2px solid #f00';
			alert("Вы не указали дату начала строка!");
			return false;		
		}
		var count=false;
		if(document.getElementById("pphone").checked ||
		 document.getElementById("cphone").checked ||
		 document.getElementById("psms").checked ||
		 document.getElementById("csms").checked ||
		 document.getElementById("ptelegram").checked ||
		 document.getElementById("ctelegram").checked ||
		 document.getElementById("pviber").checked ||
		 document.getElementById("cviber").checked ||
		 document.getElementById("pwhatsapp").checked ||
		 document.getElementById("cwhatsapp").checked ||
		 document.getElementById("pimessage").checked ||
		 document.getElementById("cimessage").checked){
			count = true;
		}
		if(!count){
			alert("Вы не выбрали услугу!");
			return false;
		}
		var form_data = $("#order-form").serialize(); //собераем все данные из формы
				$.ajax({
				type: "POST", //Метод отправки
				url: "manage.php", //путь до php файла отправителя
				data: form_data,
				success: function() {
					document.getElementById("cart2").style.filter='blur(5px)';
					document.getElementById("order-form").style.opacity='0';
					setTimeout(function(){
						document.getElementById("order1").style.display='block';
						document.getElementById("order1").style.opacity='1';
						document.getElementById("order3").style.display='block';
						document.getElementById("order3").style.opacity='1';
						document.getElementById("order-form").style.display='none';
						setTimeout(function(){
							document.getElementById("cart2").style.filter='';
						}, 1000);
					}, 1000);
				}});		
	}
	
	function open_cart(){
		document.getElementById("cart").style.display='block';
		document.getElementById("cart").style.opacity='1';
	}
	
	
	function close_cart(){
		document.getElementById("cart").style.opacity='0';
		setTimeout(function(){
			document.getElementById("cart").style.display='none';
		}, 1000);
	}

