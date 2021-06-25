<template>
	<nav
		class="bg-gray-800 shadow sticky text-white top-0 z-10"
		role="navigation"
	>
		<ui-container class="flex items-center justify-between py-4">
			<brand-imagotype />
			<div class="hidden sm:flex items-center text-sm">
				<nuxt-link class="nav-item" to="/blog">Blog</nuxt-link>
				<nuxt-link class="nav-item" to="/desarrollo-web">
					Desarrollo Web
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
import { defineComponent } from '@nuxtjs/composition-api'
import useUI from '~/composables/ui'

export default defineComponent({
	setup() {
		const { menu } = useUI()
		return { menu }
	},
})
</script>
