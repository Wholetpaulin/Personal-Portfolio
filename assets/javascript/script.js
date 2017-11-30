
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



	



});