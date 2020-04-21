
// search
const ba_search = document.querySelector('.ba-search__field');
var ba_input_value = '';

// navigation
const ba_wrap = document.querySelector('.ba-nav__wrap');
const ba_hamb = document.querySelector('.ba-nav__hamb');
const ba_body = document.querySelector('body');

// svg paths
const ba_default_path = 'M0.500006 0H679.5V896H0.500006C0.500006 896 189 783 189 683.5C189 584 52.5 587 52.5 465.5C52.5 344 189 248.5 189 159.5C189 70.5 0.500006 0 0.500006 0Z';
const ba_midl_path = 'M0.0181427 0H679.018V896H0.0181427C0.0181427 896 31.5205 814 22.5 713C13.4795 612 -14.5 563.5 22.5 456.5C59.5 349.5 -6.72101 256 10.5 171.5C27.721 87 0.0181427 0 0.0181427 0Z';
const ba_fin_path = 'M0.500006 0H679.5V896H0.500006C0.500006 896 0.499999 808 0.50001 708.5C0.500022 609 0.500017 564.5 0.500008 443C0.5 321.5 0.500015 219 0.500005 130C0.499994 41 0.500006 0 0.500006 0Z';

// nav toggle
let toggle = false;

// books - accordion
const ba_books = document.querySelectorAll('.ba-book');



// hero search
ba_search.addEventListener('focus', () => {
	ba_search.classList.add('ba-search__field--filled');
});

ba_search.addEventListener('blur', () => {
	ba_input_value = document.getElementsByClassName("ba-search__field")[0].value;
	if (ba_input_value == '') {
		ba_search.classList.toggle('ba-search__field--filled');
	}
});



// mobile menu
ba_hamb.addEventListener('click', () => {
	ba_body.classList.toggle('ba-hidden');
	ba_hamb.classList.toggle('ba-nav__hamb--cross');
	ba_wrap.classList.toggle('ba-nav__wrap--displayed');

	const ba_timeline = anime.timeline({
		duration: 700,
		easing: "easeOutQuad"
	});

	ba_timeline
		.add({
			targets: ".ba-nav__wrap",
			opacity: toggle ? 0 : 1
		}, "-=500")

		.add({
			targets: ".ba-nav__background",
			translateX: toggle ? [0, 1000] : [1000, 0]

		})
		.add({
			targets: ".ba-nav__list",
			translateX: toggle ? [0, 1000] : [1000, 0]
		}, "-=350")
		.add({
			targets: ".ba-nav__path",
			d: [{ value: toggle ? ba_default_path : ba_midl_path }]
		}, '-=250')
		.add({
			targets: ".ba-nav__path",
			d: [{ value: toggle ? ba_midl_path : ba_fin_path }],
		}, '-=200')
		.add({
			targets: ".ba-nav__wrap",
			backgroundColor: toggle ? '#733283f2' : '#FFF3DC'
		}, '-=400');

	if (!toggle) {
		toggle = true;
	} else {
		toggle = false;
	}

});


// books accordion
ba_books.forEach(book => {
	console.log(book);
	book.addEventListener('click', () => {
		book.classList.toggle('ba-book--full');
	});
});