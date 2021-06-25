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
			<InpageLink
				@navigate="menu = false"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="who"
				>Who we are?</InpageLink
			>
			<InpageLink
				@navigate="menu = false"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="what"
				>What we do?</InpageLink
			>
			<InpageLink
				@navigate="menu = false"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="products"
				>Our products</InpageLink
			>
			<InpageLink
				@navigate="menu = false"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="where"
				>Where we are?</InpageLink
			>
			<InpageLink
				@navigate="menu = false"
				class="px-8 py-4 hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
				to="contact"
				>Contact</InpageLink
			>
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
import { defineComponent } from '@nuxtjs/composition-api'
import useUI from '~/composables/ui'

export default defineComponent({
	setup() {
		const { menu } = useUI()

		return { menu }
	},
})
</script>
