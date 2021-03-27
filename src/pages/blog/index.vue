<template>
	<div
		class="flex flex-col space-y-4 py-16 container max-w-screen-md mx-auto"
	>
		<div
			class="p-8 rounded-md shadow-md"
			v-for="{
				id,
				data: article,
				last_publication_date: publishedAt,
			} in articles.results"
			:key="id"
		>
			<h2 class="text-2xl font-bold">
				{{ $prismic.asText(article.title) }}
			</h2>
			<p>{{ article.seo_description }}</p>
			{{ publishedAt }}
		</div>
	</div>
</template>

<script>
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

export default defineComponent({
	setup() {
		const { $prismic } = useContext()

		const articles = useAsync(() =>
			$prismic.api.query(
				$prismic.predicates.at('document.type', 'article')
			)
		)

		return { articles }
	},
})
</script>
