const swiper = new Swiper('.Swiper1', {
	direction: 'horizontal',
	loop: true, //true -слайдер идет по кругу ,false - в конце он остановится и не пойдет дальше
	speed: 300,
	effect: 'slider', //cards, coverflow, flip,fade , cube,slider
	// slidesPerView: 2, //выбирает сколько картинок будет в слайдере
	// centeredSlides: false, //делает какую-то картинку по середине,
	// initialSlide: 2, //начинается со 2 слайдера
	// spaceBetween: 30,
	// slidesPerGroup: 2,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// autoplay: {
	// 	// delay: 1000,
	// },

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

const swiper2 = new Swiper('.Swiper2 ', {
	direction: 'horizontal',
	loop: false,
	effect: 'fade',
	speed: 1000,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
	},
})

const swiperThumbs = new Swiper('.Swiper-thumbs', {
	loop: true,
	slidesPerView: 3, // Количество миниатюр на экране
	spaceBetween: 10, // Расстояние между миниатюрами
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
})

const swiperThree = new Swiper('.Swiper3', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	thumbs: {
		swiper: swiperThumbs,
	},
})
