//libs
import { gsap } from 'gsap';

import Site from './site.js';

document.addEventListener('DOMContentLoaded', () => {
	gsap.to('#loader', {
		opacity: 0,
		delay: 1.5,
		onComplete: () => {
			gsap.set('#loader', { pointerEvents: 'none' });
		},
	});

	new Site();
});
