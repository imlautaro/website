interface Route {
	url: string
	lastmod: string
}

export const createSitemapRoutes = async () => {
	let routes: Route[] = []
	const { $content } = require('@nuxt/content')
	const articles = await $content('articles').fetch()
	const pages = await $content('pages').fetch()
	const content = [...articles, ...pages]
	content.forEach((document) =>
		routes.push({
			url: document.slug,
			lastmod: document.updatedAt,
		})
	)
	return routes
}
