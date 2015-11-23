(function($) {
	$.fn.goToUp = function(options) {

		/* define paramerters */
		var settings = $.extend({
			up_arrow_btn_background: "rgba(140, 80, 147, 0.7)",
			search_row_background:"rgba(140, 80, 147, 0.7)",
			up_arrow_btn_padding: "5px 5px 5px 5px",
			search_row_padding: "8px 8px 8px 8px",
			lastScrollTop : 0,
			bottom : '50px',
			right : '50px',
		}, options);


		$('head').append('<link rel="stylesheet" type="text/css" href="plugin/go-top.css" />');
		$('body').append("<div id='wrapper'><div id='searchtop-btn'><form accept='#'><fieldset><div class='row'><input type='submit' value='' id='goto-top-search-btn'><input type='search' placeholder='Search' id='goto-top-search-field'></div></fieldset></form><a href='javascript:void(0);' id='go-top'></a></div></div>");

		/* setting css properties */
		$('#searchtop-btn').css({"right": settings.right});
		$('#searchtop-btn').css({"bottom": settings.bottom});
		$('#searchtop-btn .row').css({"background":settings.search_row_background});
		$('#go-top').css({"background":settings.up_arrow_btn_background});
		
		$('#searchtop-btn .row').css({"padding":settings.search_row_padding});
		$('#go-top').css({"padding":settings.up_arrow_btn_padding});


		/* handle scroll action */
		$(window).scroll(function() {
			if ($(this).scrollTop()) {
				$('#wrapper').show();
				$("#searchtop-btn").stop(true, true).fadeIn();
			} else {
				$('#searchtop-btn').stop(true, true).fadeOut();
			}
		});

		/* handle click action for goto-top button */
		$('#go-top').on('click', function() {
			console.log('clicked');

			$('body').animate({
				scrollTop: 0
			}, "slow");
		});
	};
}(jQuery));
