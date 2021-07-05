<template>
	<div>
		<h1>{{ page.title }}</h1>
		<nuxt-content :document="page" />
	</div>
</template>

<script>
export default {
	async asyncData({ params, $content, error }) {
		let page
		try {
			page = await $content('pages', params.slug).fetch()
		} catch {
			return error({ statusCode: 404, message: 'Page not found' })
		}
		return { page }
	},
	head() {
		return {
			title: this.page.seotitle,
		}
	},
}
</script>
