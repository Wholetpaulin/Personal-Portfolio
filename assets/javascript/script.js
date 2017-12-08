
$(document).ready(function() {

	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$(".list-items").toggle(800);
	});


	$(window).scroll(function(){
    	$(".intro").css("opacity", 1 - $(window).scrollTop() / 250);
  	});

	$(window).scroll(function(){
    	$(".scroll-1").css("opacity", 0 + $(window).scrollTop() / 600);

  	});

	$(function(){$(".connectScroll").click(function(){$("html,body").animate({scrollTop:$("#connect").offset().top},"1000");return false})})

	$(function(){$(".workScroll").click(function(){$("html,body").animate({scrollTop:$("#work").offset().top},"1000");return false})})

	$(function(){$(".aboutScroll").click(function(){$("html,body").animate({scrollTop:$("#about").offset().top},"1000");return false})})

});