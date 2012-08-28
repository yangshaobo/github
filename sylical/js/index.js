$(function(){
	
	$('#vantage').mobilyslider({
		content: '.sliderContent',
		children: 'li',
		transition: 'fade',
		animationSpeed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		bullets: true,
		arrows: true,
		arrowsHide: false,
		prev: 'prev',
		next: 'next',
		animationStart: function(){},
		animationComplete: function(){}
	});
	
});
