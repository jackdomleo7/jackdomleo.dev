$(document).ready(() => {
	$(function() {
		$('a[href^="#"]').click(function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-100
			}, 500);
		});
	});

	(function(){
		var words = [
			'Web Designer',
			'Junior Developer',
			'Web Developer',
		], i = 0;
		setInterval(function(){
			$('#changingword').fadeOut(function(){
				$(this).html(words[i=(i+1)%words.length]).fadeIn();
			});
		}, 3000);

	})();
});
