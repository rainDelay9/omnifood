$(document).ready(function () {
	/* sticky navigation */
	$('.js--section-features').waypoint(
		function (direction) {
			if (direction === 'down') {
				$('nav').addClass('sticky');
			} else {
				$('nav').removeClass('sticky');
			}
		},
		{
			offset: '63px',
		}
	);

	/* scroll on buttons */
	$('.js--scroll-to-plans').click(function () {
		$('html, body').animate(
			{
				scrollTop: $('.js--section-plans').offset().top,
			},
			1000
		);
	});

	$('.js--scroll-to-features').click(function () {
		$('html, body').animate(
			{
				scrollTop: $('.js--section-features').offset().top,
			},
			1000
		);
	});

	/* NAVIGATION SCROLL*/
	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length
					? target
					: $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(':focus')) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});

	/* ANIMATIONS ON SCROLL */
	$('.js--wp-1').waypoint(
		function (_) {
			$('.js--wp-1').addClass('animate__animated animate__fadeIn');
		},
		{
			offset: '70%',
		}
	);

	$('.js--wp-1').waypoint(function (_) {
		$('.js--wp-1').addClass('animate__animated animate__fadeIn');
	});

	$('.section-meals').waypoint(function (_) {
		$('.js--wp-1').removeClass('animate__animated animate__fadeIn');
	});

	$('.js--wp-2').waypoint(
		function (_) {
			$('.js--wp-2').addClass('animate__animated animate__fadeInUp');
		},
		{
			offset: '70%',
		}
	);

	$('.js--wp-3').waypoint(
		function (_) {
			$('.js--wp-3').addClass('animate__animated animate__fadeIn');
		},
		{
			offset: '70%',
		}
	);

	$('.js--wp-4').waypoint(
		function (_) {
			$('.js--wp-4').addClass('animate__animated animate__pulse');
		},
		{
			offset: '70%',
		}
	);

	/* MOBILE NAVIGATION */
	$('.js--nav-icon').click(function () {
		const nav = $('.js--main-nav');
		nav.slideToggle(200);
		const iconName = $('.js--nav-icon').attr('name');
		if (iconName == 'menu') {
			$('.js--nav-icon').attr('name', 'close');
		} else {
			$('.js--nav-icon').attr('name', 'menu');
		}
	});
});

// var waypoint = new Waypoint({
//     element: document.getElementById('basic-waypoint'),
//     handler: function() {
//       notify('Basic waypoint triggered')
//     }
//   })
