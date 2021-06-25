<template>
	<div class="w-screen h-1 bg-gray-800 fixed top-0 left-0 z-20">
		<div class="bg-primary h-full w-0" ref="progress"></div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	mounted() {
		document.onscroll = (event) => {
			if (document.scrollingElement) {
				const progress = this.$refs['progress'] as HTMLDivElement
				const value =
					(100 /
						(document.scrollingElement.scrollHeight -
							document.scrollingElement.clientHeight)) *
					document.scrollingElement.scrollTop
				progress.style.width = `${value}%`
			}
		}
	},
})
</script>
