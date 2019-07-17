$(function() {

	

	// Свернуть - Развернуть



	$(document).on('click', '.spoiler_title', function() {  

		$(this).next().slideToggle(400, function() {

			var visible = $(this).is(':visible');

			$(this).prev().children(".spoiler_indicator").text(visible ? 'Свернуть' : 'Развернуть');

		});

	});





	$(document).on('click', '.more-info', function(event) {       

		var dat = $(this).parent().parent().attr('data-id');

		var val = $(".info [data-id="+dat+"]");

		$(this).html(val);   

	});



	var price = 0;

	var itogprice = 0;

	var item_price =0;

	var time = 0;

	var itogtime = 0;

	var quantity = 0;

	var max_quantity = 0;

	var price_margin = 0;

	var newItog = 0;

	var i = 0;

	var all = [];

	var showlist = [];

	var name,id;





    // Калькулятор

    

    /*

     не активные поля

     */

     $(".exp").attr('disabled','disabled');

     $(".second").attr('disabled','disabled');







     $(document).on('change', '.show', function(event) {

     	event.preventDefault();    	

     	var sel = $(this).attr('data-type');      

     	addItem(sel);



         // активизируем

         $(".exp").removeAttr('disabled','disabled');

         $(".second").removeAttr('disabled','disabled');

     });

     $(document).on('change', '.exp', function(event) {

     	event.preventDefault();    	

     	var sel = $(this).attr('data-type'); 

     	addItem(sel);



     });

     $(document).on('change', '.master', function(event) {

     	event.preventDefault();    	

     	var sel = $(this).attr('data-type'); 

     	addItem(sel);

     });

     $(document).on('change', '.animators', function(event) {

     	event.preventDefault();     

     	var sel = $(this).attr('data-type'); 

     	addItem(sel);

     });



     $(document).on('change', '.order-call-form input[type="checkbox"]', function(event) {

     	event.preventDefault(); 

     	if (this.checked) {

     		console.log("checked");

     		name = $(this).next().text();

     		id = $(this).attr('data-id');

     		$(".chosen-check.additional").css('display', 'block');

     		$(".chosen-check.additional ol").append('<li data-id="'+id+'"><div class="chosen-item"><p>'+name+'</p></div></li>');







     		price = parseInt($(this).val());    

     		time = parseInt($(this).attr('time'));

     		itogprice += price;

     		itogtime += time;

     		calc(itogprice,itogtime);





     	} else {

     		console.log("unchecked");



     		id = $(this).attr('data-id');



     		price = parseInt($(this).val());    

     		time = parseInt($(this).attr('time'));

     		itogprice -= price;

     		itogtime -= time;

     		calc(itogprice,itogtime);



     		$(".chosen-check.additional ol li[data-id="+id+"]").addClass('animated hinge');

     		setTimeout(function () {

     			$(".chosen-check.additional ol li[data-id="+id+"]").remove();}, 1800);

     	}



     });   







function calc (itogprice,itogtime,item_price) {     

	if (itogprice < 0) {

		itogprice = 0;

	} 

	$(".chosen-check-summ").css('display', 'block');

	$(".itog").html(itogtime+" минут - <span class='price'>"+itogprice+"</span> руб.<span>*</span>").addClass("animated rubberBand");    	

	$(".itog").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',

		function (e) {

			$(".itog").removeClass('animated rubberBand');

		});





}



$(document).on('click', '.del', function(event) {

	event.preventDefault();

	var dataid = $(this).attr('data-id'); 

	var sel = $(this).attr('data-type'); 	

	delItem(sel,dataid);

});	











function addItem (sel,price,time) {





	/* добавление скидки при заказе 2 и 3 шоу с 30 минутными шоу*/



	if (sel == "show") {  



		showlist.push(sel);



		if (showlist.length == 2){

			$("."+sel+" option[time='30']").each(function()

			{

				$(this).val(3500);

			});



		} 

		if (showlist.length == 3) {

			$("."+sel+" option[time='30']").each(function()

			{

				$(this).val(4000);

			});

		}

	} 







	price = parseInt($("."+sel+" option:selected").val());    

	time = parseInt($("."+sel+" option:selected").attr('time'));

	quantity = parseInt($(".quantity").val());

	max_quantity =  parseInt($("select."+sel).attr('data-quantity'));

	price_margin =  parseInt($("select."+sel).attr('data-price-margin'));

	all.push(price_margin); 









	if (quantity>max_quantity) { 

		item_price = (quantity-max_quantity)*price_margin;

		price += item_price;

	}



	itogprice += price;

	itogtime += time;

















	calc(itogprice,itogtime);



	name = $("."+sel+" option:selected").attr('name');

	id = $("."+sel+" option:selected").attr('data-id');    	

	$(".chosen-check."+sel+"").css('display', 'block');

	$(".items."+sel+"").append('<div class="chosen-item" data-id="'+id+'"><p>'+name+'<span class="more-info"></span></p><a href="" data-id="'+id+'" data-type="'+sel+'" class="del"></a></div>');

	$(".chosen-check."+sel+" ol").append('<li data-id="'+id+'"><div class="chosen-item"><p>'+name+'</p><a href="" data-type="'+sel+'" data-id="'+id+'" class="del"></a></div></li>');



	/* логика шоу+эксперементы*/

	if ($(".show option:selected").attr('data-id') == "2") {

		$(".exp option:eq(1)").attr('disabled', 'disabled');

	} else {

		$(".exp option:eq(1)").removeAttr('disabled', 'disabled');

	}



	if ($(".show option:selected").attr('data-id') == "3") {

		$(".exp option:eq(2)").attr('disabled', 'disabled');

	} else {

		$(".exp option:eq(2)").removeAttr('disabled', 'disabled');

	}



	if ($(".show option:selected").attr('data-id') == "6") {

		$(".exp option:eq(3)").attr('disabled', 'disabled');

	} else {

		$(".exp option:eq(3)").removeAttr('disabled', 'disabled');

	}





	$("."+sel+" option:first").prop("selected", "selected");



}



$(document).on('change', '.quantity', function(event) {

	event.preventDefault();

	if (quantity == max_quantity) {

		calc(itogprice,itogtime,item_price);

	}     

	quantity =  parseInt($(".quantity").val()) - max_quantity;



	var sum=0;

	for(var i=0;i<all.length;i++){

		sum = sum + parseInt(all[i]);

	} 

	if (quantity > 0) {

		newItog = sum*quantity;

		itogprice +=newItog;



		calc(itogprice,itogtime,item_price);

	}











});



function delItem (sel,dataid,price,time) {



	/* удаление скидки при заказе 2 и 3 шоу с 30 минутными шоу*/




	price = parseInt($("."+sel+" option[data-id="+dataid+"]").val());

	time = parseInt($("."+sel+" option[data-id="+dataid+"]").attr('time'));

	quantity = parseInt($(".quantity").val());

	max_quantity =  parseInt($("select."+sel).attr('data-quantity'));

	price_margin =  parseInt($("select."+sel).attr('data-price-margin'));

        // console.log (price + (quantity-max_quantity)*price_margin);



        if (max_quantity < quantity) {

        	itogprice -= price + (quantity-max_quantity)*price_margin;

        } else {

        	itogprice -= price - newItog;

        }

        itogtime -=time;

        calc(itogprice,itogtime);

        $(".items."+sel+" [data-id="+dataid+"]").remove();

        $(".chosen-check."+sel+" ol li[data-id="+dataid+"]").addClass('animated hinge');

        setTimeout(function () {

        	$(".chosen-check."+sel+" ol li[data-id="+dataid+"]").remove();}, 1800);







        if (sel == "show") {  



        	showlist.splice(0, 1);



        	console.log(showlist);



        	if (showlist.length == 1 || showlist.length==0){

        		$("."+sel+" option[time='30']").each(function()

        		{

        			$(this).val(8500);

        		});



        	} 

        	if (showlist.length == 2){

        		$("."+sel+" option[time='30']").each(function()

        		{

        			$(this).val(3500);

        		});



        	} 





        } 





    }















});





function calc (itogprice,itogtime,item_price) {      

	$(".chosen-check-summ").css('display', 'block');

	$(".itog").html(itogtime+" минут - <span class='price'>"+itogprice+"</span> руб.<span>*</span>").addClass("animated rubberBand");       

	$(".itog").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',

		function (e) {

			$(".itog").removeClass('animated rubberBand');

		});





}





$(".form-submit-btn").hover( function (e) {

	$(this).toggleClass('animated rubberBand', e.type === 'mouseenter');

	var bill = $(".calc-check").text();

	$(".bill").val(bill);

});







$(document).ready(function() {

	$('span.more-info').mouseover(function() {

		$('#data_'+ $(this).data('id')).show();

	}).mouseout(function() {

		$('#data_'+ $(this).data('id')).hide();

	});

})



