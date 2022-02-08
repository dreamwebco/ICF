$(document).ready(function(){
	$('.portfolio-list').owlCarousel({
		loop: true,
		center: false,
		margin: 15,
		nav: true,
		navText: ["", ""],
		dots: false,
		dotsEach: false,
		smartSpeed: 700,
		mouseDrag: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				margin: 15,
				nav: false,
				dotsContainer: false,
				dots: true,
			},
			600:{
				items: 2,
				margin: 15,
				nav: false,
				dotsContainer: false,
				dots: true,
			},
			1000:{
				items: 2,
				margin: 15,
				nav: false,
				dotsContainer: false,
				dots: true,
			},
			1100:{
				items: 4,
			}
		}
	})
});
