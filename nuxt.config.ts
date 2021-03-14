export default {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxtjs/google-fonts',
		'@nuxtjs/pwa',
	],
	colorMode: {
		classSuffix: '',
	},
	components: true,
	googleFonts: {
		families: {
			Overpass: [400, 700],
		},
	},
	modules: ['@nuxtjs/axios'],
	plugins: ['~/plugins/octicons'],
	pwa: {
		manifest: {
			display: 'browser',
			lang: 'es-AR',
			name: 'Lautaro Pereyra',
			start_url: '/',
			theme_color: process.env.COLOR_PRIMARY || '#FF0000',
		},
		workbox: false,
	},
	srcDir: 'src',
	target: 'static',
}
