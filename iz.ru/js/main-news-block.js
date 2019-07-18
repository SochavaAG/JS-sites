
// динамичног задается высота блока чтобы в IE было нормлаьно
function check_main_events_table_height() {
		var anonse__list_count = jQuery(".main-events-table__inside__left .three-col-news-with-anonse__list").length
		if (jQuery(".main-events-table__inside").length > 0 && anonse__list_count == 0) {
			if (jQuery(window).width() >= 841) {
				if (jQuery('.page-content.inside_page').hasClass('pmef_2018_page') == false) {
					jQuery(".main-events-table__inside").height(Number(Number(jQuery(".short-last-news").height()) + Number(jQuery(".live-news__wrapper").height()) + Number(20) ) );
				}
				jQuery(".main-news-big-img__inside__top").height(Number(Number(jQuery(".short-last-news").height()) + Number(jQuery(".live-news__wrapper").height()) + Number(20) ) - Number(jQuery('.main-news-big-img__inside__bottom').height()) );
			}
		}
}

jQuery(document).ready(function(){
	
	check_main_events_table_height();

	if (jQuery(window).width() > 768 && jQuery(".main-news-big-img").length > 0) {
		var first_block = '';
		var first_block_details = '';
		jQuery(".main-news-big-img__inside__bottom__inside__details__item").each(function(){
			first_block_details += '<a href="' + jQuery(this).attr("href") + '" class="main-news-big-img__details__item">'+
				'<div class="main-news-big-img__details__item__title">'+
					'<div class="main-news-big-img__details__item__title__text"><span>' + jQuery(this).text() + '</span></div>'+
				'</div>'+
			'</a>';
		});
		first_block_description = '';
		if (jQuery(".main-news-big-img__inside__top__photo__info__description").text().replace(/\s/ig, '').length >0) {
			first_block_description = '<div class="main-news-big-img__inside__bottom__inside__top__description">' + jQuery(".main-news-big-img__inside__top__photo__info__description").text() + '</div>';
		}
		first_block += '<div class="main-news-big-img__inside__bottom__inside">'+
			'<div class="main-news-big-img__inside__bottom__inside__top">'+
				'<div class="main-news-big-img__inside__bottom__inside__top__category">' + jQuery(".main-news-big-img__inside__bottom__inside__top__category").text() + '</div>'+
				'<div class="clearfix"></div>'+
				'<a href="' + jQuery(".main-news-big-img__inside__top__photo__info__title").attr("href") + '">'+
					'<div class="main-news-big-img__inside__bottom__inside__top__title">'+
						'<div class="main-news-big-img__inside__bottom__inside__top__title__text"><span>' + jQuery(".main-news-big-img__inside__top__photo__info__title").text() + '</span></div>'+
					'</div>'+
					'<div class="clearfix"></div>'+
					first_block_description +
				'</a>'+
			'</div>'+
			
		'</div>';
	}
	
});

jQuery(window).on("resize", function(){
	check_main_events_table_height();
});

jQuery(window).on("load", function(){
	check_main_events_table_height();
});


jQuery(".main-events-table__inside__left").addClass('article-box');

