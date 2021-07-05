<template>
	<nav class="bg-gray-800 shadow text-white z-10" role="navigation">
		<ui-container class="flex items-center justify-between py-4">
			<brand-imagotype />
			<div class="hidden sm:flex items-center text-sm">
				<nuxt-link class="nav-item" to="/blog">Blog</nuxt-link>
				<nuxt-link
					v-for="page in pages"
					:key="page.slug"
					class="nav-item"
					:to="`/${page.slug}`"
				>
					{{ page.title }}
				</nuxt-link>
			</div>
			<button
				class="nav-item flex sm:hidden p-2 rounded-md"
				@click="menu = true"
			>
				<octicons name="three-bars" size="16" />
			</button>
		</ui-container>
	</nav>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'
import useUI from '~/composables/ui'

export default defineComponent({
	setup() {
		const { menu } = useUI()

		const { $content } = useContext()

		const pages = useAsync(() => $content('pages').fetch())

		return { menu, pages }
	},
})
</script>
