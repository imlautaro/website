import { NuxtConfig } from '@nuxt/types'

import { createSitemapRoutes } from './src/utils/sitemap'
import { createFeed } from './src/utils/feed'

const colors = require('tailwindcss/colors')

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
	feed: [
		{
			path: '/feed.xml',
			create: createFeed,
			cacheTime: 1000 * 60 * 15,
			type: 'rss2',
		},
	],
	generate: {
		interval: 2000,
	},
	googleFonts: {
		display: 'swap',
		families: {
			'Titillium+Web': [400, 700],
		},
	},
	gtm: {
		id: process.env.GTM_ID,
	},
	head: {
		meta: [
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1.0',
			},
			{
				name: 'theme-color',
				content: colors.coolGray[800],
			},
		],
		link: [
			{
				rel: 'icon',
				href: '/icon.png',
			},
		],
	},
	modules: [
		'@nuxtjs/axios',
		'@nuxt/content',
		'@nuxtjs/gtm',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
		'@nuxtjs/feed',
	],
	publicRuntimeConfig: {
		domain: process.env.DOMAIN,
	},
	robots: {
		Sitemap: `https://${process.env.DOMAIN}/sitemap.xml`,
	},
	sitemap: {
		hostname: `https://${process.env.DOMAIN}`,
		routes: createSitemapRoutes,
		trailingSlash: false,
	},
	srcDir: 'src',
	target: 'static',
}

export default config
