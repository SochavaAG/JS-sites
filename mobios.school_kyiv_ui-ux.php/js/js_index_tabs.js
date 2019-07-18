$(document).ready(function(){
    $('#footnote-num').html('01');
    $('.my-tabs .tab-link.reason').click(function(){
        var tab_id = $(this).attr('data-tab');
        if (tab_id < 10) {
            $('#footnote-num').html("0" + tab_id);
        } else {
            $('#footnote-num').html(tab_id);
        }
        $('.my-tabs .tab-link.reason').removeClass('current');
        $('.for-whom .tab-content').removeClass('current');
        $(this).addClass('current');
        $("#tab-"+tab_id).addClass('current');
    })
});
