$(document).ready(() => {

	//Smooth scroll
	$(function() {
		$('a[href^="#"]').click(function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-60
			}, 500);
		});
	});
});
