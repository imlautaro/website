<template>
	<transition name="menu">
		<div
			v-if="menu"
			class="bg-white dark:bg-gray-800 z-20 w-3/4 md:w-2/4 lg:w-1/4 flex flex-col right-0 h-screen fixed shadow-2xl top-0"
		>
			<div class="flex items-center justify-between px-8 py-8">
				<span class="text-xl font-semibold">Menú</span>
				<button class="icon-btn" @click="menu = false">
					<octicons name="x" size="16" />
				</button>
			</div>
			<ui-menu-item to="/blog" @navigate="menu = false">
				Blog
			</ui-menu-item>
			<ui-menu-item
				v-for="page in pages"
				:key="page.slug"
				:to="`/${page.slug}`"
				@navigate="menu = false"
			>
				{{ page.title }}
			</ui-menu-item>
		</div>
	</transition>
</template>

<style lang="postcss" scoped>
.menu-enter-active,
.menu-leave-active {
	@apply duration-300 transform translate-x-0;
}
.menu-enter,
.menu-leave-to {
	@apply transform translate-x-full;
}
</style>

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
