/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '0.5rem',
				sm: '1rem', //640px
				md: '1rem', //768px
				lg: '2rem', //1024px
				xl: '0rem', //1280px
				'2xl': '0rem', //1536px
			},
		},
		extend: {
			fontFamily: {
				sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
				serif: ['Lexend', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				primary: '#796F83',
				secondary: '#11051d',
				white: '#FCF9FF',
				slate: '#323232',
				gray: '#6C6C6C',
				black: '#171717',
			},
		},
	},
	plugins: [],
};
