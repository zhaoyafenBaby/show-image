var $wrapper = $('.wrapper'),
	$item = $('.item'),
	$close = $('.close');

var timer = setTimeout(function(){
	$wrapper.removeClass('init');
},200)

$item.click(function(){
	$wrapper.addClass('wrapper-init');
	$(this).addClass('active');
})

$close.click(function(e){
	e.stopPropagation();
	$wrapper.removeClass('wrapper-init');
	$('.active').removeClass('active');
})