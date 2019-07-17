/*---| Harvest Site Main |---*/

//---| Variables //---|

var view;
var AlertThis = "#Nav li.count";
var AlertSecNum = "#Nav li.secNum";
var w = $(window);
var d = $(document);
var TimeAmount = 550;
var iphoneExtra = 0
var wH = w.height(); //records the window Height
var wW = w.width(); //records the window Width
var secH = 0
var secCont = 0
var directThisTop;

//---| Init site //---|

/*!
 * Main Harvest Site
 * www.harvestcreative.com
 *
 * Author : Michael J. Hildebrand with Harvest Creative, 348 North Main, Memphis TN 38104
 */

var TimeAmount = 1500;

$(document).ready(function() {

//---| the start \---//
$(window).load(function() { StartThis(); });

function init() {
	if (navigator.userAgent.indexOf("iPhone") != -1){
		//setTimeout(function () {   window.scrollTo(0, 1); }, 1000);
	}
	if(navigator.userAgent.match(/MSIE\s(?!9.0)/)){
		$("body").css("overflow","hidden")
		$("body").css("overflow-x","hidden")
		$("body").css("overflow-y","hidden")
		$("body").css("height",w.height())
		$("body").css("width",w.width())
		parallaxScroll();
	}
	resizeMain();
	//$("#sectionNav a.movNav").click(navigateMain);
	//navigateKeys()
}

function resizeMain(){
	w.bind("resize", resizeWindow);
	$(".section").css("height",w.height() + iphoneExtra+"px")
	$(".allSameHeight").css("height",w.height())
	//$(".sectioncenter").css("height",w.height())

	$("#wrapper").css("height",w.height())
	var allHeight = $(".section").height() * $(".section").length;
	$("#innerWrapper").css("height",allHeight)

	if (navigator.userAgent.indexOf("Internet Explorer") != -1){
		$("body").css("height",w.height())
		$("body").css("width",w.width())
	}

	function resizeWindow(e){
		$(".section").css("height",w.height())
		$(".allSameHeight").css("height",w.height())
		$("#wrapper").css("height",w.height())
		allHeight = $(".section").height() * $(".section").length;
		$("#innerWrapper").css("height",allHeight)

		if (navigator.userAgent.indexOf("Internet Explorer") != -1){
			$("body").css("height",w.height())
			$("body").css("width",w.width())
		}

		wH = w.height();
		wW = w.width();
		resizethemenu();

	}
}

//---| paralax scrolling |---//

$("#wrapper").scroll(function(e){
		parallaxScroll()
		//scrollIdDetect()
		//$(AlertThis).html($("#wrapper").height()+", "+$("#innerWrapper").height()+", "+$("#innerWrapper").position().top+", "+$("#innerWrapper").offset().top)
})

function parallaxScroll(){

    var scrolled = $("#innerWrapper").position().top;

    if(navigator.userAgent.match(/MSIE\s(?!9.0)/)){
		directThisTop = "left"
	}else{
		directThisTop = "top"
	}

	var secComingSoonScroll = $("#sectionComingSoon").position().top
    var secOneScroll = $("#sectionOne").position().top
    var secTwoScroll = $("#sectionTwo").position().top
    var secThreeScroll = $("#sectionThree").position().top
    var secFourScroll = $("#sectionFour").position().top
    var secFiveScroll = $("#sectionFive").position().top
	var secSixScroll = $("#sectionSix").position().top

    bkgdParallaxThree("ComingSoon",0)
    bkgdParallaxTwo("One",0)
    bkgdParallaxTwo("Two",0)
    bkgdParallax("Three",0)
    bkgdParallaxTwo("Four",0)
    bkgdParallaxTwo("Five",0)
    bkgdParallax("Six",0)

	function bkgdParallax(bkgdNum,topNumAdj){

		var secDynScroll = eval("sec"+bkgdNum+"Scroll")
		var directThis = "left"

		$("#section"+bkgdNum+" .bgOne").css(directThis,(secDynScroll*.1+(scrolled*.1))+"px");
		$("#section"+bkgdNum+" .bgTwo").css(directThis,(secDynScroll*.25+(scrolled*.25))+"px");
		$("#section"+bkgdNum+" .bgThree").css(directThis,(secDynScroll*.5+(scrolled*.5))+"px");
		$("#section"+bkgdNum+" .bgFour").css(directThis,(secDynScroll*.75+(scrolled*.75))+"px");

	}
	function bkgdParallaxTwo(bkgdNum,topNumAdj){

		var secDynScroll = eval("sec"+bkgdNum+"Scroll")
		var directThis = "left"

		$("#section"+bkgdNum+" .bgZero").css(directThisTop,(secDynScroll*.4+(scrolled*.4))+"px");
		$("#section"+bkgdNum+" .bgOne").css(directThis,(secDynScroll*.1+(scrolled*.1))+"px");
		$("#section"+bkgdNum+" .bgTwo").css(directThis,(secDynScroll*.25+(scrolled*.25))+"px");
		$("#section"+bkgdNum+" .bgThree").css(directThis,(secDynScroll*.5+(scrolled*.5))+"px");
		$("#section"+bkgdNum+" .bgFour").css(directThis,(secDynScroll*.75+(scrolled*.75))+"px");

	}
	function bkgdParallaxThree(bkgdNum,topNumAdj){

		var secDynScroll = eval("sec"+bkgdNum+"Scroll")
		var directThis = "left"

		$("#section"+bkgdNum+" .bgZero").css(directThisTop,(secDynScroll*.4+(scrolled*.4))+"px");
		$("#section"+bkgdNum+" .bgOne").css(directThis,(secDynScroll*.8+(scrolled*.8))+"px");
		$("#section"+bkgdNum+" .bgTwo").css(directThis,(secDynScroll*.25+(scrolled*.25))+"px");
		$("#section"+bkgdNum+" .bgThree").css(directThis,(secDynScroll*.5+(scrolled*.5))+"px");
		$("#section"+bkgdNum+" .bgFour").css(directThis,(secDynScroll*.75+(scrolled*.75))+"px");
		$("#section"+bkgdNum+" .bgFive").css(directThis,(secDynScroll*.6+(scrolled*.6))+"px");
		$("#section"+bkgdNum+" .bgSix").css(directThis,(secDynScroll*.9+(scrolled*.9))+"px");

	}
}

//---| end paralax scrolling |---//

function navigateMain(e){

	e.preventDefault();
	$("#innerWrapper").animate().stop()

	var TheA = $(this).attr("href");
	var TheAtop = $(TheA).position().top * -1;
	var ScrollBarH = $("#wrapper").height()

	$(AlertThis).html($("#wrapper").height()+", "+$("#innerWrapper").height()+", "+$("#innerWrapper").position().top+", "+$("#innerWrapper").offset().top)

    // scroll to a href id location //
    $("#innerWrapper").animate({ top: TheAtop}, TimeAmount*2, "easeInOutQuad", function(){
    	//window.location.hash = TheA;
    });
}

function navigateHover(e){

}
//---| resize the menu \---//

var menuheight = $(".menu").height();

$.event.add(window, "load", resizethemenu);
$.event.add(window, "resize", resizethemenu);

resizethemenu();

function resizethemenu(){
	menuheight = $(".menu").height();
	$(".logonav").css({height: menuheight+"px"});
}

//---| Menu Move |---//

function theclickin(){
	$(".logonavinnerframe").unbind('click', theclickin);
	$(".logonavinnerframe").bind('click', theclickout);
	$(".logonav").animate({ left: "0px"}, TimeAmount/10, "easeOutQuad");
};
function theclickout(){
	$(".logonavinnerframe").unbind('click', theclickout);
	$(".logonavinnerframe").bind('click', theclickin);
	$(".logonav").animate({ left: "-200px"}, TimeAmount/10, "easeOutQuad");
};

if (navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPad") != -1){
	$(".logonavinnerframe").bind('click', theclickin);

}else{

$(".logonav").mouseenter(function() {
	$(".logonav").animate({ left: "0px"}, TimeAmount/10, "easeOutQuad");
}).mouseleave(function() {
	$(".logonav").animate({ left: "-200px"}, TimeAmount/10, "easeOutQuad");
});
};

//--- Click ---//

$(".navclick").click(function(e) {
	var navlinks = $(this).attr("name");
	$(".logonav").animate({ opacity: "0"}, TimeAmount/4, "easeOutQuad");
	$("#wrapper").animate({ opacity: "0"}, TimeAmount/4, "easeOutQuad", function(){
		if(navlinks == "home"){
			getOutOfHere("");
		}else{
			getOutOfHere(navlinks);
		}
	});
});

//--- Get Out Of Here ---//

function getOutOfHere(whereTo){
	window.location = "/"+whereTo;
}

//--- Starting it all ---//

function StartThis(){
	init();
	resizeMain();
	$("#TheLoader").animate({ opacity: "0"}, TimeAmount/4, "easeOutQuad", function(){
		$("#TheLoader").css({visibility: "hidden"});
	});
}
//---| the end \---//

});
