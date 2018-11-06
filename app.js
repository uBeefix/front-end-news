// Document Ready 

$(document).ready(() => {
	$('.js-like').on('click', function(e) {
		e.preventDefault();

		$(this)
			.text('Liked!')
			.closest('.news-item')
			.addClass('is-liked');
	})

	$('.js-add-link').on('click', function(event) {
		event.preventDefault();	

		$('.js-form').toggleClass('is-visible');
	})
})






















