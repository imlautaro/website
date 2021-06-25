const colors = require('tailwindcss/colors')

module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['"Titillium Web"', 'sans-serif'],
		},
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			colors: {
				primary: '#F25E0D',
				secondary: '#F20D5E',
			},
		},
	},
	variants: {
		extend: {
			scale: ['active'],
			boxShadow: ['active'],
			display: ['group-hover'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
