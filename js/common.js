$('[name="phone"]').mask('+7 (999) 999-99-99');

// mobile
$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.nav-menu').fadeToggle();
});

$('.nav-menu__close').on('click', function (e) {
	e.preventDefault();
	$('.nav-menu').fadeOut();
});

// filter
$('.btn-filter').on('click', function (e) {
	e.preventDefault();
	$('.filter-mobile').fadeToggle();
});

$('.filter-mobile__close').on('click', function () {
	$('.filter-mobile').fadeOut();
});

// animate scroll
$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	return false;
});

// search header
$('.btn-search').on('click', function () {
	$('.header-search-wrapper').fadeToggle();
});

// form search
$('.form-search input').on('keyup change', function () {
	if (this.value.length > 0) {
		$(this).parents('label').find('.input-clear').css('display', 'flex');
		$('.form-search .result-search').fadeIn();
	} else {
		$('.form-search .result-search').fadeOut();
		$(this).parents('.form-search').find('.input-clear').css('display', 'none');
	}
});

$('.form-search .input-clear').click(function () {
	$(this).parents('.form-search').find('input[type=text]').each(function () {
		$(this).val('');
	});
	$('.form-search').trigger('reset');
	$(this).parents('.form-search').find('.result-search').fadeOut();
	$(this).fadeOut();
});

// hidden list
$('.list-category').each(function () {
	if ($(this).find('.list-category__link').length > 29) {
		$(this).find('.list-category__link').slice(29).hide();
		$(this).find('.link-toggle-category').css('display', 'flex');
	}
});

// show list all
$('.link-toggle-category').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.list-category').find('.list-category__link:hidden').show();

	var onBlock = $(this).parents('.list-category').find('.list-category__link:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

$('.list-services').each(function () {
	if ($(this).find('.list-services__link').length > 6) {
		$(this).find('.list-services__link').slice(6).hide();
		$(this).parents('.row').find('.btn-toggle-services').css('display', 'flex');
	}
});

$('.btn-toggle-services').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.row').find('.list-services .list-services__link:hidden').show();

	var onBlock = $(this).parents('.row').find('.list-services .list-services__link:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

$('.btn-toggle-card').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.row').find('.doctors-card:hidden').slice(0, 10).css('display', 'flex');
	var onBlock = $(this).parents('.row').find('.doctors-card:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

$('.btn-toggle-reviews').on('click', function (e) {
	e.preventDefault();
	$(this).prev('.reviews-box-wrapper').find('.reviews-box:hidden').slice(0, 4).css('display', 'flex');
	var onBlock = $(this).prev('.reviews-box-wrapper').find('.reviews-box:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

$('.btn-toggle-prices').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.prices-category').find('.prices-box:hidden').slice(0, 4).fadeIn();
	var onBlock = $(this).parents('.prices-category').find('.prices-box:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});


$('.btn-toggle-text').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parents('.doctors-card').find('.doctors-card__description'),
		content2 = $(this).parents('.product-content__box').find('.box-text');


	if (!$this.hasClass('active')) {
		$this.addClass('active');
		$this.find('.link-text').html('Скрыть');
		content.addClass('open');
		content2.addClass('open');
	} else {
		$this.removeClass('active');
		$this.find('.link-text').html('Подробнее');

		content.removeClass('open');
		content2.removeClass('open');
	}
});

// sliders
$('.reviews-slider').slick({
	slidesToShow: 2,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$('.certificates-slider').slick({
	slidesToShow: 3,
	dots: true,
	appendDots: '.certificates-slider__nav',
	appendArrows: '.certificates-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [

		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2
			}
		}
	]
});

$(document).on('shown.bs.tab', function () {
	$('.slick-slider').filter(':visible').slick('setPosition');
});

$('.time-list-slider').slick({
	slidesToShow: 4,
	prevArrow: '<button type="button" class="slick-prev slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.doctors-neardy-slider').slick({
	slidesToShow: 1,
	dots: true,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				arrows: false,
				// autoplay: true
			}
		}
	]
});

// slick active
// $(window).on('load resize', function () {
// 	if ($(window).width() < 576) {
// 		$('.time-list-slider-mob:not(.slick-initialized)').slick({
// 			dots: false,
// 			infinite: true,
// 			speed: 100,
// 			slidesToShow: 1,
// 			arrows: false,
// 			variableWidth: true,
// 		});
// 	} else {
// 		$(".time-list-slider-mob.slick-initialized").slick("unslick");
// 	}
// });
// slick active

// tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

// datepicker
$(function () {
	//Сменим язык календаря на русский
	$.datepicker.setDefaults(
		{
			closeText: 'Закрыть',
			prevText: '',
			currentText: 'Сегодня',
			monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
				'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
				'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
			dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
			dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
			dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			weekHeader: 'Не',
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
		});

});
$(function () {
	$(".datepicker1").datepicker();
});


// fancybox
Fancybox.bind("[data-fancybox]", {
	// Your custom options
});