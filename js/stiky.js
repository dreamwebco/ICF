jQuery(window).scroll(function () {
	//if you hard code, then use console
	//.log to determine when you want the
	//nav bar to stick.
	//console.log(jQuery(window).scrollTop())
	if (jQuery(window).scrollTop() > 0) {
		jQuery('#header').addClass('stiky');
	}
	if (jQuery(window).scrollTop() < 1) {
		jQuery('#header').removeClass('stiky');
	}
});



if (matchMedia('only screen and (min-width: 768px) and (max-width: 959px)').matches) {
	jQuery(window).scroll(function () {
		if (jQuery(window).scrollTop() > 0) {
			jQuery('#header').addClass('stiky');
		}
	});
}
else if (matchMedia('only screen and (max-width: 767px)').matches) {
	jQuery(window).scroll(function () {
		if (jQuery(window).scrollTop() > 0) {
			jQuery('#header').addClass('stiky');
		}
	});
}