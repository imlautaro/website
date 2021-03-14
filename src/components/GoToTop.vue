<template>
	<transition name="scroll-to-top">
		<button
			@click="scrollToTop()"
			aria-label="Ir arriba"
			v-if="show"
			class="btn--primary duration-100 focus:ring-4 outline-none transform active:shadow active:scale-95 hover:scale-105 hover:shadow-lg fixed bottom-8 right-8 p-4 rounded-full"
		>
			<octicons name="arrow-up" />
		</button>
	</transition>
</template>

<style lang="postcss">
.scroll-to-top-enter-active,
.scroll-to-top-leave-active {
	@apply duration-200 transform translate-y-0;
}
.scroll-to-top-enter,
.scroll-to-top-leave-to {
	@apply opacity-0 translate-y-full;
}
</style>

<script>
export default {
	data() {
		return {
			show: false,
		}
	},
	mounted() {
		document.addEventListener('scroll', (event) => {
			this.show = event.target.scrollingElement.scrollTop > 128
		})
	},
	methods: {
		scrollToTop() {
			document.scrollingElement.scrollTop = 0
		},
	},
}
</script>
