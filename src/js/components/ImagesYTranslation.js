import { gsap } from 'gsap';

/**
 * Animation for images with class 'image-y-translation'.
 * Will animate the 'y' property of the image based on the value of the 'data-translate' attribute.
 * The animation will be triggered when the top of the image reaches the bottom of the viewport, and will end when the bottom of the image reaches the top of the viewport.
 * @param {HTMLElement} container - The container element that contains the image.
 * @param {HTMLElement} image - The image element.
 * @param {String} translate - The value of the 'data-translate' attribute on the container element.
 * @param {String} speed - The value of the 'data-speed' attribute on the container element.
 */

export default function ImagesYTranslation() {
	const images = document.querySelectorAll('.image-y-translation');

	images.forEach((container) => {
		const image = container.querySelector('img');

		return gsap
			.timeline({
				scrollTrigger: {
					trigger: container,
					scrub: true,
					start: 'top bottom',
					end: 'bottom top',
				},
			})
			.to(image, {
				yPercent: container.dataset.translate,
			});
	});
}
