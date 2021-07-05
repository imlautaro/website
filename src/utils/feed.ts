export const createFeed = async (feed: any) => {
	feed.options = {
		title: 'Lautaro Pereyra',
		link: `https://${process.env.DOMAIN}/feed.xml`,
		description: 'Feed de Lautaro Pereyra',
	}

	const { $content } = require('@nuxt/content')
	const articles = await $content('articles').fetch()

	articles.forEach((article: any) => {
		feed.addItem({
			title: article.title,
			id: article.slug,
			link: `https://${process.env.DOMAIN}/blog/${article.slug}`,
			description: article.description,
			date: new Date(article.createdAt),
			image: article.image,
		})
	})
}
