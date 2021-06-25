import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api/module',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxtjs/google-fonts',
		'@nuxtclub/octicons',
	],
	colorMode: {
		classSuffix: '',
	},
	components: true,
	generate: {
		interval: 2000,
	},
	googleFonts: {
		display: 'swap',
		families: {
			'Titillium+Web': [400, 700],
		},
	},
	head: {
		meta: [
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1.0',
			},
		],
		link: [
			{
				rel: 'icon',
				href: '/icon.png',
			},
		],
	},
	modules: ['@nuxtjs/axios'],
	srcDir: 'src',
	target: 'static',
}

export default config
