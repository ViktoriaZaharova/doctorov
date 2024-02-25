$('[name="phone"]').mask('+7 (999) 999-99-99');

// mobile
$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.nav-menu').fadeToggle();
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
		$(this).parents('.form-search').find('.input-clear').css('display', 'flex');
		$('.form-search .result-search').fadeIn();
	} else {
		$('.form-search .result-search').fadeOut();
		$(this).parents('.form-search').find('.input-clear').css('display', 'none');
	}
});

$('.form-search .input-clear').click(function () {
	// $(this).parents('.form-search input').attr('value', '');
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
	if ($(this).find('li').length > 6) {
		$(this).find('li').slice(6).hide();
		$(this).parents('.row').find('.btn-toggle-services').css('display', 'flex');
	}
});

$('.btn-toggle-services').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.row').find('.list-services li:hidden').show();

	var onBlock = $(this).parents('.row').find('.list-services li:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});


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