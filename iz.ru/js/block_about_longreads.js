
function block_about_longreads() {
	var banner_item = jQuery('.block_about_longreads .block_about_longreads__inside__item.banner .block_about_longreads__inside__item__inside');
	var first_item = jQuery('.block_about_longreads .block_about_longreads__inside__item:first-child').height();
	banner_item.css({'height': 'auto'});
	if (jQuery(window).width() > 600 && jQuery(".block_about_longreads__inside__item").length > 0 && jQuery(".article_page__right").length==0) {
		if (banner_item.height() < first_item) {
			banner_item.height(first_item);
		}
	}
}

// jQuery(window).on('load', function() {
// 	setTimeout(function(){
// 		block_about_longreads();
// 	}, 1000);
// });

// jQuery(window).on("resize", function(){
// 	block_about_longreads();
// });
