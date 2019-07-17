$(document).ready( function() {

$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
        placeholder = $(this).find('option:selected').text();
    var template =  '<span class="' + classes + '">';
    //template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<span class="custom-select-trigger">' + placeholder + '</span>';

    template += '<div class="custom-options">';

    template += '<div class="scrollbar" id="scroll-style">';

    $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
}, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});

//27.09.2018 add ga 
$('.reviewsLink').on('click', function(){
	ga('send', 'event', 'Enroll', 'LinkBuilding', {nonInteraction: true});
});
$("#academy-form-contact form .wpcf7-submit").on('click', function(){
	ga('send', 'event', 'Enroll', 'Offer', {nonInteraction: true});
});
$('#wpcf7-f625-o2 form').on('submit', function(){
	ga('send', 'event', 'EnrollSubmit', 'PopUpForm', {nonInteraction: true});
});
$('#wpcf7-f623-o1 form').on('submit', function(){
	ga('send', 'event', 'EnrollSubmit', 'BotomForm', {nonInteraction: true});
});
$('#wpcf7-f624-o2 form').on('submit', function(){
	ga('send', 'event', 'EnrollSubmit', 'PopUpForm', {nonInteraction: true});
});
$('#wpcf7-f622-o1 form').on('submit', function(){
	ga('send', 'event', 'EnrollSubmit', 'BotomForm', {nonInteraction: true});
});



});



$(document).ready( function() {
    $(".file-upload input[type=file]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename").val(filename);
    });
});

$(document).ready( function() {
    $(".popup__form-academy .file-upload input[type=file]").change(function(){
        var filename_pop = $(this).val().replace(/.*\\/, "");
        $("#filename-popup").val(filename_pop);
    });
});

/*---------------POPUP SIMPLE-------------*/
$(document).on('click','.popupBtn',function(){
    $('body').addClass('jj');
    disblekeypress();

    $('.light').fadeIn(300);
    $('.popup-fade-rp').fadeIn(300);
});
$(document).on('click','.popup-close',function(){
    $('.light').fadeOut(300);
    $('.popup-fade-rp').fadeOut(300);
    activekeypress();
});
// On click Esc key Disabled Popup
$(document).on('keyup',function(evt) {

    if (evt.keyCode == 27) {
        //  if (evt.which == 27) {
        $('.light').fadeOut(300);
        $('.popup-fade-rp').fadeOut(300);
    }

});
function disblekeypress() {
    $("body.jj").on("keyup", function(e){
        if (e.which === 27){
            return false;
        }
    });
}
function activekeypress() {
    $("body").on("keyup", function(e){
        if (e.which === 27){
            alert("awesome");
            return true;
        }
    });
}
//On click Overlay hide Popup....
$(document).on('click','.black_overlay',function(){
    activekeypress();
    $('.light').fadeOut(300);
    $('.popup-fade-rp').fadeOut(300);
});
/*------------------------------------------*/
