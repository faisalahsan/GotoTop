(function($) {
	$.fn.goToUp = function(options) {


		var settings = $.extend({
			// These are the defaults.
			textVisibility: true,
			text:' Go to Top',
			color: "#556b2f",
			backgroundColor: "white",
			image:"gotoTop.png"
		}, options);

//		$("#toTop").css('background-image',"url('"+settings.image+"')");


		$(window).scroll(function() {
			if ($(this).scrollTop()) {
				$("#toTop").stop(true, true).fadeIn();
				console.log('scrollTop');
			} else {
				$('#toTop').stop(true, true).fadeOut();
				console.log('scrollTop bottom');
			}
		});

		$('#toTop').on('click', function() {
			console.log('clicked');

			$('body').animate({
				scrollTop: 0
			}, "slow");
		});
	};
}(jQuery));
