<template>
	<button class="flex outline-none focus:outline-none" @click="navigate()">
		<slot />
	</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		to: String,
	},
	methods: {
		navigate() {
			const element = document.getElementById(this.to)
			const header = document.getElementById('header')
			if (element) {
				if (document.scrollingElement) {
					if (header) {
						document.scrollingElement.scrollTop =
							element.offsetTop - header.offsetHeight
					} else {
						document.scrollingElement.scrollTop = element.offsetTop
					}
					this.$emit('navigate')
				}
			}
		},
	},
})
</script>
