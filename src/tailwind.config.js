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
			sans: ['Overpass', 'sans-serif'],
		},
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			colors: {
				primary: process.env.COLOR_PRIMARY || colors.blue[600],
				secondary: process.env.COLOR_SECONDARY || colors.purple[600],
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
	plugins: [],
}
