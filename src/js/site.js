//libs
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import barba from '@barba/core';

//gsap plugins
gsap.registerPlugin(ScrollTrigger);

//components
import HistoryTimeline from './components/HistoryTimeline';
import ImagesYTranslation from './components/ImagesYTranslation';
import HomeBlog from './components/HomeBlog.js';

export default class Site {
	constructor() {
		this.setupResize();
		this.initBarba();
		console.log('💖😎 Site made with love by Rodrigo G. Wilkens 😎💖');

		this.initComponents();
	}

	/**
	 * Trigger ScrollTrigger to update and refresh on window resize.
	 * This is needed to recalculate the position of all ScrollTriggers
	 * when the window is resized.
	 * @returns {void}
	 */
	resize() {
		ScrollTrigger.update();
		ScrollTrigger.refresh();
	}
	setupResize() {
		window.addEventListener('resize', () => {
			this.resize.bind(this);
		});
	}

	initComponents() {
		//Home
		HomeBlog();
		HistoryTimeline();

		//General
		ImagesYTranslation();
	}

	initBarba() {
		barba.init({
			transitions: [
				{
					name: 'default-transition',
					leave(data) {
						return gsap.to(data.current.container, {
							opacity: 0,
						});
					},
					enter(data) {
						return gsap.to(data.next.container, {
							opacity: 1,
						});
					},
				},
			],
		});
	}
}
