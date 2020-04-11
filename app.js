
const ba_search = document.querySelector('.ba-search__field');
var ba_input_value = '';


ba_search.addEventListener('focus', () => {
	ba_search.classList.add('ba-search__field--filled');
});

ba_search.addEventListener('blur', () => {
	ba_input_value = document.getElementsByClassName("ba-search__field")[0].value;
	if (ba_input_value == '') {
		ba_search.classList.toggle('ba-search__field--filled');
	}
});