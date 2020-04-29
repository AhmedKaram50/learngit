/*global $, console*/

$(function () {
	
	'use strict';
	
	// links 
	
	$(" ul li").click(function () {
		
		$("html, body").animate({
			
			scrollTop: $('#' + $(this).data('value')).offset().top
			
		}, 1000);
	});
	
	// BX-slider Option
	
	$(".bxslider").bxSlider({
        controls: false
    });
	
	// photos overlay
	
	$(".photos").eq(0).click(function () {
		$(".overlay-b").addClass('photo-one');
		$(".overlay-b").fadeIn(1000);
	});
	
	$(".photos").eq(1).click(function () {
		
		
		$(".overlay-b").addClass('photo-tow');
		$(".overlay-b").fadeIn(1000);
	});
	
	$(".photos").eq(2).click(function () {
		
		
		$(".overlay-b").addClass('photo-three');
		$(".overlay-b").fadeIn(1000);
	});
	
	$(".photos").eq(3).click(function () {
		
		
		$(".overlay-b").addClass('photo-four');
		$(".overlay-b").fadeIn(1000);
	});
	
	$(".photos").eq(4).click(function () {
		
		
		$(".overlay-b").addClass('photo-five');
		$(".overlay-b").fadeIn(1000);
	});
	
	//close large overlay
	
	$(".overlay-b i").click(function () {
		
		$(".overlay-b").fadeOut(1000);
	});
	
	// quote auto slider
	
	// nicescroll
	
	$("body").niceScroll();

	
});



































