$(document).ready(() => {

	$(function() {
		$('a[href^="#"]').click(function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset()
			}, 500);
		});
	});

});
