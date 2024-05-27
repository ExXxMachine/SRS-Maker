$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active')
		$('body').toggleClass('lock')
	})
})

if (localStorage.getItem('flag') == 1) {
	$(document).ready(function () {
		$('.header__li').toggleClass('confirmed')
		$('.disabled__link').toggleClass('active__link')
	})
}

const logout = () => {
	localStorage.flag = 0
	window.location.href = '/public/index.html'
}
