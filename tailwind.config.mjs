/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				sm: '3rem', //640px
				md: '3rem', //768px
				lg: '3rem', //1024px
				xl: '3rem', //1280px
			},
		},
		extend: {
			colors: {
				white: '#FAFCFF',
				green: '#2F5A48',
				beige: '#FFFDEB',
				gray: '#8C8D8D',
				slate: '#4D4D4D',
			},
			fontFamily: {
				sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
				serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
				'serif-alt': ['Lexend', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
};

// Container basics
// container max-w-screen-md xl-max-w-screen-xl
