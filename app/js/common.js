document.addEventListener("DOMContentLoaded", function () {


	if($('.suggestions-suggestion:visible').length == 1)
	{
		$('.email').toggleClass('email-focus');
	
	}

	

	$('#email').autocomplete({
		lookup: function (query, done) {
			// Do Ajax call or lookup locally, when done,
			// call the callback and pass your results:
			var result = {
				suggestions: [
					{ "value": "United Arab Emirates", "data": "AE" },
					{ "value": "United Kingdom",       "data": "UK" },
					{ "value": "United States",        "data": "US" }
				]
			};
	
			done(result);
		},
	});


		
		$('#selection').select2({
			maximumSelectionLength: 2,
		  });

		
		if ($('.autocomplete-suggestion').is(':visible')) {
			$('.email').toggleClass('email-focus')
		}



		$('.cabinet-profile__icon').click(function(){
			$(this).closest('.cabinet-profile__left').toggleClass('active');
		})

		$('.admin-popup__button').click(function(){
			$('.carousel__button.is-close').click();
		})

		$('.cabinet-reports__bottom-wrapper').click(function(){
			$(this).closest('.cabinet-reports__item').toggleClass('active');
		})

		$('.header__burger').click(function(){
			$('body').toggleClass('show')
		});
		$('.js-scroll').click(function(){
			$('body').removeClass('show')
		});
		$('.cabinet__button').click(function(){
			$('body').removeClass('show')
		});
		$('.cabinet__list-link').click(function(){
			$('body').removeClass('show')
		});

		$('.cabinet__scores-inner2').addClass('active');

		
		jQuery({someValue: 0}).animate({someValue: 487}, {
			duration: 4000,
			easing:'swing',
			step: function() {
				$('.cabinet__scores-text p').text(Math.ceil(this.someValue));
			}
		});

		
	

	$('.popup__button').click(function () {
		$('.carousel__button').click();
	})

	$('.step-1 .fields__button').click(function () {
		$('.step-1').css("display", "none");
		$('.step-2').css("display", "block");
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})

	$(".step-2 .passport__container-bottom-back").click(function () {
		$('.step-2').css("display", "none");
		$('.step-1').css("display", "block");
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})
	$(".step-2 .fields__button").click(function () {
		$('.step-2').css("display", "none");
		$('.step-3').css("display", "block");
		$("html, body").animate({ scrollTop: 0 }, "slow");
		
		jQuery({someValue: 0}).animate({someValue: 100}, {
			duration: 4500,
			easing:'swing',
			step: function() {
				$('.step-3__scores-text p').text(Math.ceil(this.someValue));
			}
		});

		$('.step-3__scores-inner2').addClass('active');

		setTimeout(function() { 
			$('.step-3').css("display", "none");
			$('.step-4').css("display", "block");
			$('.step-3__scores-inner2').removeClass('active');
		}, 5000);
	})

	$(".step-4__form-button").click(function () {
		$('.step-4').css("display", "none");
		$('.step-5').css("display", "block");
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})
	$(".step-4__back").click(function () {
		$('.step-4').css("display", "none");
		$('.step-2').css("display", "block");
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})

	$(".step-5__form-button").click(function () {
		$('.step-5').css("display", "none");
		$('.step-6').css("display", "block");
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})



	$(".step-6 .passport__container-bottom-back").click(function () {
		$('.step-6').css("display", "none");
		$('.step-5').css("display", "block");
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})









	if ($('.input-card-number').length) {
		$('.input-card-number').inputmask('9999 9999 9999 9999');
	}
	if ($('.input-card-date').length) {
		$('.input-card-date').inputmask('99/99');
	}
	if ($('.input-card-code').length) {
		$('.input-card-code').inputmask('999');
	}
	if ($('.input-phone-code').length) {
		$('.input-phone-code').inputmask('999999');
	}
	if ($('.enter__phone').length) {
		$('.enter__phone').inputmask('+7(999)999 99 99');
	}
	if ($('.subscribe__phone').length) {
		$('.subscribe__phone').inputmask('+7(999)999 99 99');
	}

	// loader
	setTimeout(function () {
		document.querySelector('body').classList.remove('loaded');
	}, 400);

	// lazy load
	// setTimeout(function () {
	// 	$(".js-bg").each(function () {
	// 		$(this).css('background-image', 'url(' + $(this).data("bg") + ')');
	// 	});
	// 	$(".js-img").each(function () {
	// 		$(this).attr('src', $(this).data("src"));
	// 	});
	// }, 200);


	/*
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	*/
	let slider = document.getElementById('slider');

	if (slider) {

		noUiSlider.create(slider, {
			start: [25000],
			connect: 'lower',
			range: {
				'min': 0,
				'max': 70000
			},
			padding: [1000, 10000],
			step: 1000,
		});

	}


	let slider2 = document.getElementById('slider-2');

	if (slider2) {

		noUiSlider.create(slider2, {
			start: [25000],
			connect: 'lower',
			range: {
				'min': 0,
				'max': 70000
			},
			padding: [1000, 10000],
			step: 1000,
		});

	}







	slider.noUiSlider.on('update', function (values, handle) {

		let totalAmount = document.getElementsByClassName('total');
		let totalAmountOld = document.getElementsByClassName('total-old');

		let result = parseInt(values[handle]);
		let resultOld = ((parseInt(values[handle])) / 100) * 120;

		for (key in totalAmount) {
			totalAmount[key].innerHTML = numberWithCommas(result) + " ₽"
		}

		for (keyOld in totalAmountOld) {
			totalAmountOld[keyOld].innerHTML = numberWithCommas(resultOld) + " ₽"
		}


		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

	});

	slider2.noUiSlider.on('update', function (values, handle) {

		let totalAmount = document.getElementsByClassName('total-2');
		let totalAmountOld = document.getElementsByClassName('total-old-2');

		let result = parseInt(values[handle]);
		let resultOld = ((parseInt(values[handle])) / 100) * 120;

		for (key in totalAmount) {
			totalAmount[key].innerHTML = numberWithCommas(result) + " ₽"
		}

		for (keyOld in totalAmountOld) {
			totalAmountOld[keyOld].innerHTML = numberWithCommas(resultOld) + " ₽"
		}


		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

	});


	//prevent drag img and a
	const imagesAndLinks = document.querySelectorAll('img, a');
	if (imagesAndLinks) {
		imagesAndLinks.forEach(function (item, i, arr) {
			item.addEventListener('dragstart', function (e) {
				e.preventDefault();
			})
		});
	}


	const handlerResize = function () {
		let viewport_wid = viewport().width;
		let viewport_height = viewport().height;

		// if (viewport_wid <= 991) {

		// }
	}

	window.addEventListener('load', handlerResize);
	window.addEventListener('resize', handlerResize);

	$('.accordeon dd').hide()

	$('.accordeon dl:first-child').addClass('active-2');
	$('.accordeon dl:first-child dt').addClass('active');
	$('.accordeon dl:first-child dd').slideDown(300);

	$(".accordeon dd").prev().click(function () {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown(300).prev().addClass("active");
		$('dl').not($(this).parent('dl')).removeClass('active-2')
		$(this).parent('dl').toggleClass('active-2');
	});



	$(".calc__item").click(function () {
		$(this).siblings('.calc__item').removeClass('calc__item-active');
		$(this).addClass('calc__item-active');
		if ($(".calc__item").hasClass("calc__item-active")) {
			let content = $(this).html()
			$('.calc__bottom-item-desc.week').html(content);
		};
	});

	$('.calc__dropdown-list-item').click(function () {
		$('.calc__item').removeClass('calc__item-active')
		let content = $(this).html()
		$('.calc__bottom-item-desc.week').html(content)
	})

	$('.calc__dropdown').click(function () {
		if ($('.calc__dropdown-list').is(':visible')) {
			$(this).children('.calc__dropdown-list').slideToggle(400);
			$(this).children('.calc__dropdown-list-fade').hide();
		} else {
			$(this).children('.calc__dropdown-list').slideToggle(400);
			$(this).children('.calc__dropdown-list-fade').delay(400).slideToggle(400);
		}
	})

	$(document).click(function (event) {
		if (!$(event.target).is(".calc__dropdown")) {
			$(".calc__dropdown-list").slideUp(400)
			$(".calc__dropdown-list-fade").hide()
		}
	});



	Fancybox.bind('[data-fancybox="gallery"]', {
		Image: {
			zoom: true,
		},
	});


	new WOW().init();



});

/* viewport width */
function viewport() {
	let e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */

const mainPageVideo = document.querySelector(".video__block")
if (mainPageVideo) {
	const playerPlay = document.querySelector('#playVideo');
	playerPlay.addEventListener("click", () => {
		const player = document.querySelector('#mainVideo');
		let data = { method: "play" };
		player.contentWindow.postMessage(JSON.stringify(data), "*");
		mainPageVideo.classList.add("activeVideo")
	})
}


$('.feedbacks__container').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	variableWidth: true,
	centerPadding: '40px',
	dots: true,
	centerMode: true,
	responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: true,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ],
});







// js-scroll
(function () {

	const smoothScroll = function (targetEl, duration) {
		const headerElHeight = document.querySelector('.header').clientHeight;
		let target = document.querySelector(targetEl);
		let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		let startPosition = window.pageYOffset;
		let startTime = null;

		const ease = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		};

		const animation = function (currentTime) {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};
		requestAnimationFrame(animation);

	};

	const scrollTo = function () {
		const links = document.querySelectorAll('.js-scroll');
		links.forEach(each => {
			each.addEventListener('click', function () {
				const currentTarget = this.getAttribute('href');
				smoothScroll(currentTarget, 1000);
			});
		});
	};
	scrollTo();
}());





let slider3 = document.getElementById('slider-3');


if (slider3) {
	noUiSlider.create(slider3, {
		start: [25000],
		connect: 'lower',
		range: {
			'min': 0,
			'max': 64000
		},
		padding: [1000, 4000],
		step: 1000,
	});

	slider3.noUiSlider.on('update', function (values, handle) {

		let totalAmount = document.getElementsByClassName('total-3');
		let totalAmountOld = document.getElementsByClassName('total-old-3');

		let result = parseInt(values[handle]);
		let resultOld = ((parseInt(values[handle])) / 100) * 120;

		for (key in totalAmount) {
			totalAmount[key].innerHTML = numberWithCommas(result) + " ₽"
		}

		for (keyOld in totalAmountOld) {
			totalAmountOld[keyOld].innerHTML = numberWithCommas(resultOld) + " ₽"
		}


		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

	});

	$(".form-calc__item").click(function () {
		$(this).siblings('.form-calc__item').removeClass('form-calc__item-active');
		$(this).addClass('form-calc__item-active');
		if ($(".form-calc__item").hasClass("form-calc__item-active")) {
			let content = $(this).html()
			$('.form-calc__bottom-item-desc.week').html(content);
		};
	});

	$('.form-calc__dropdown-list-item').click(function () {
		$('.form-calc__item').removeClass('form-calc__item-active')
		let content = $(this).html()
		$('.form-calc__bottom-item-desc.week').html(content)
	})

	$('.form-calc__dropdown').click(function () {
		if ($('.form-calc__dropdown-list').is(':visible')) {
			$(this).children('.form-calc__dropdown-list').slideToggle(400);
			$(this).children('.form-calc__dropdown-list-fade').hide();
		} else {
			$(this).children('.form-calc__dropdown-list').slideToggle(400);
			$(this).children('.form-calc__dropdown-list-fade').delay(400).slideToggle(400);
		}
	})


	$(document).click(function (event) {
		if (!$(event.target).is(".form-calc__dropdown")) {
			$(".form-calc__dropdown-list").slideUp(400)
			$(".form-calc__dropdown-list-fade").hide()
		}
	});


}











	