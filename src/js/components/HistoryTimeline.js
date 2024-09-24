import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function HistoryTimeline() {
	const section = document.getElementById('home__timeline');
	const container = document.querySelector('.years__container');
	const years = container.querySelectorAll('.timeline__year');
	const initialClasses = ['opacity-0', 'translate-y-16', 'transform-all'];
	const removeClasses = ['opacity-0', 'translate-y-16'];
	const bigYearContainer = container.querySelector('.timeline__bigyear');
	const bigYear = bigYearContainer.querySelector('h6');

	//methods
	function changeYear(year) {
		gsap.timeline()
			.to(bigYear, {
				duration: 0.3,
				opacity: 0,
				ease: 'power2.out',
			})
			.call(() => {
				bigYear.textContent = year;
			})
			.to(bigYear, {
				duration: 0.3,
				opacity: 0.2,
				ease: 'power2.out',
			});
	}

	//Setup
	years.forEach((year) => {
		year.classList.add(...initialClasses);
	});

	ScrollTrigger.create({
		trigger: container,
		start: 'top top',
		end: 'bottom bottom',
		pin: bigYearContainer,
		onUpdate: (self) => {
			if (self.progress > 0.5) {
				section.classList.remove('bg-white');
				section.classList.add('bg-beige');
			} else {
				section.classList.remove('bg-beige');
				section.classList.add('bg-white');
			}
		},
	});

	years.forEach((year, i) => {
		ScrollTrigger.create({
			trigger: year,
			start: 'top center',
			end: 'bottom center',
			onEnter: () => {
				if (i !== 0) changeYear(year.dataset.year);
				year.classList.remove(...removeClasses);
			},
			onEnterBack: () => {
				changeYear(year.dataset.year);
				year.classList.remove(...removeClasses);
			},
		});
	});
}
