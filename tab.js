$(function(){
	$('.containers .tabs li:first-child a').addClass('active');
	$('<li class="spacer"></li>').insertAfter('li')
	$('.containers').each(function () {
		$(this).find('.container:first').addClass('active');
	});

	$('.containers .tabs li a').click(function () {
		var title = $(this).attr('id');
		var parent = $(this).closest('.containers');
		parent.find('.active').removeClass('active');
		$(this).addClass('active');
		parent.find('#' + title + 'Content').addClass('active');
	});
})