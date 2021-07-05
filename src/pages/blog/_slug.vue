<template>
	<div>
		<social-head
			:title="article.title"
			:description="article.description"
			:image="article.image"
		/>
		<h1>{{ article.title }}</h1>
		<nuxt-content :document="article" />
	</div>
</template>

<script>
export default {
	async asyncData({ params, $content, error }) {
		let article
		try {
			article = await $content('articles', params.slug).fetch()
		} catch {
			return error({ statusCode: 404, message: 'Page not found' })
		}
		return { article }
	},
	head() {
		return {
			title: this.article.seotitle,
		}
	},
}
</script>
