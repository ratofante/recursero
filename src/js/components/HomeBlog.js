import Swiper from 'swiper';

export default function HomeBlog() {
	return new Swiper('#blog-slides', {
		slidesPerView: 1.6,
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 2.2,
			},
			840: {
				slidesPerView: 2.4,
			},
		},
	});
}
