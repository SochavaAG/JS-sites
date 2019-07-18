
function two_col_with_advertise2__left__photo() {
	if (jQuery(window).width() > 767 && jQuery(".two-col-with-advertise2__left .two-col-with-advertise2__row:first-child .node__cart__item__inside__photo").length > 0 && jQuery(".article_page__right").length==0) {
		var one_col_img_list_item = jQuery(".two-col-with-advertise2__left .two-col-with-advertise2__row:first-child .node__cart__item__inside__photo");
		one_col_img_list_item.each(function() {
			var one_col_img_list_item_img = jQuery(this).find("img").attr("data-src");
			one_col_img_list_item_img = one_col_img_list_item_img.split("//iz.cdnvideo.ru");
			if (one_col_img_list_item_img.length>=2) one_col_img_list_item_img = 'http://iz.cdnvideo.ru'+one_col_img_list_item_img[1];
			var h_block = jQuery(this).height();
			// Remove from main page IMG as BG
			var $advertise2__right = jQuery(".two-col-with-advertise2__left").next(".two-col-with-advertise2__right");
			if(
					$advertise2__right.length == 0
					||
					$advertise2__right.length > 0 && $advertise2__right.height() > 0
			) {
				jQuery(this).height(h_block);
				jQuery(this).css({"background": 'url(' + one_col_img_list_item_img + ') no-repeat', "background-position": "center", "background-size": "cover", });
				jQuery(this).find("img").hide();
			}
		});
	} else {
		var one_col_img_list_item = jQuery(".two-col-with-advertise2__left .two-col-with-advertise2__row:first-child .node__cart__item__inside__photo");
		one_col_img_list_item.each(function() {
			jQuery(this).find("img").show().css({"height": "auto"});
			jQuery(this).css({"height": "auto"});
		});
	}
}

jQuery(window).on('load', function() {
	setTimeout(function(){
		two_col_with_advertise2__left__photo();
	}, 1000);
});

jQuery(window).on("resize", function(){
	two_col_with_advertise2__left__photo();
});
