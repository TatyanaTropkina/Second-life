$(function(){
	let menu = $('.menu__list');
	let menuBtn = $('.menu__btn');
	let menuLink = $('.menu__list-link');
	$(menuBtn).on('click', function () {
		$(menu).toggleClass('open');
		$(this).toggleClass('open');
	});
	$(menuLink).on('click', function(){
		$(menu).removeClass('open');
		$(menuBtn).toggleClass('open');

	})
	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0
		) {
			menu.removeClass('open');
		
			$(menuBtn).removeClass('open');
		}
	});
	$(window).scroll(function () {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 500) {

			$(menuBtn).removeClass('open');
            $(menu).removeClass('open');
			      }
    });
	

	
	

	
	
	$('.project-slider').slick({
	
		dots: false,
		slidesToShow: 1,
		fade: true,
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="sleck-btn slick-next"></button>',
	});



});

