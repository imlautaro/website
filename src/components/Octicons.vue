<template>
	<div class="octicons" v-html="icon"></div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: 'Octoface',
		},
		size: {
			type: undefined,
			default: 24,
		},
	},
	computed: {
		icon() {
			try {
				return this.$octicons[this.name].toSVG({ width: this.size })
			} catch {
				return this.$octicons['octoface'].toSVG({
					width: this.size,
				})
			}
		},
	},
}
</script>

<style>
.octicons {
	display: flex;
	fill: currentColor;
}
</style>
