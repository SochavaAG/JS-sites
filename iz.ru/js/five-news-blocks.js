
function check_sizes_five_news_blocks() {
	if (jQuery(window).width() > 923 && jQuery(".five-news-blocks__list__item__photo").length > 0 && jQuery(".article_page__right").length==0) {
		var one_col_img_list_item = jQuery(".five-news-blocks__list__item__photo");
		one_col_img_list_item.each(function() {
			var img_tag = jQuery(this).find("img");
			if (img_tag.attr("data-src") != undefined && img_tag.attr("data-src") != 'undefined') {
				var one_col_img_list_item_img = img_tag.attr("data-src");
			} else {
				var one_col_img_list_item_img = img_tag.attr("src");
			}
			one_col_img_list_item_img = one_col_img_list_item_img.split("//iz.cdnvideo.ru");
			if (one_col_img_list_item_img.length >= 2) one_col_img_list_item_img = 'http://iz.cdnvideo.ru'+one_col_img_list_item_img[1];
			jQuery(this).css({"background": 'url(' + one_col_img_list_item_img + ') no-repeat', "background-position": "center", "background-size": "cover", });
			img_tag.addClass('hidden_important');
			jQuery(this).css({"height": "auto"});
			var h_block = jQuery(this).parent().parent().parent().next().height();
			jQuery(this).height(h_block);
		});
	}
}


jQuery(window).on('load', function() {
	check_sizes_five_news_blocks();
	setTimeout(function(){
		check_sizes_five_news_blocks();
	}, 1000);
});

jQuery(window).on("resize", function(){
	check_sizes_five_news_blocks();
});
