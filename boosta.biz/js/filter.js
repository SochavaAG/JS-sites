function filter() {
    var cardsTags = {};
    var cardsCityTags = {};
    var allTags = [];
    var allCityTags = [];

    var tagsController = $('.filter__list').not('.city-list');
    var cityTagsController = $('.filter__list.city-list');

    fillTags();

    fillController(tagsController, allTags);
    fillController(cityTagsController, allCityTags);

    $('.filter__tag').click(function() {
        var tag = $(this).html();

        $('.job-card').each(function() {
            var taglist = $(this).data("map");
            var isCorrect = taglist.includes(tag);

            if (!isCorrect) {
                $(this).fadeOut();
            } else {
                $(this).fadeIn();
            }
        });
    });

    function fillTags() {
        $('.job-card').each(function() {
            theIndex = $(this).index();

            cardsTags[theIndex] = [];
            cardsCityTags[theIndex] = [];

            $(this).find('.job-card__tag').each(function() {
                if ($(this).hasClass('city-tag')) {
                    cardsCityTags[theIndex].push($(this).html());
                    allCityTags.push($(this).html());
                } else {
                    cardsTags[theIndex].push($(this).html());
                    allTags.push($(this).html());
                }
            });

            $(this).data("map", cardsTags[theIndex] + cardsCityTags[theIndex]);
        });
    }

    function fillController(controller, tags) {
        var arr = unique(tags);
        for (var i = 0; i < arr.length; i++) {
            $(controller).append("<div class=\"filter__tag\">" + arr[i] + "</div>")
        }
    }

    function unique(A) {
        var n = A.length,
            k = 0,
            B = [];
        for (var i = 0; i < n; i++) {
            var j = 0;
            while (j < k && B[j] !== A[i]) j++;
            if (j == k) B[k++] = A[i];
        }
        return B;
    }
}
