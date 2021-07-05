<template>
	<div>
		<h1>Blog</h1>
		<div v-for="article in articles" :key="article.slug">
			<h3>{{ article.title }}</h3>
			<p>{{ article.description }}</p>
			<nuxt-link :to="`/blog/${article.slug}`">Leer artículo</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

export default defineComponent({
	head() {
		return {
			title: 'Blog',
		}
	},
	setup() {
		const { $content } = useContext()

		const articles = useAsync(() => $content('articles').fetch())

		return { articles }
	},
})
</script>
