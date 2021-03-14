<template>
	<div>
		<button @click="value--">-</button>
		{{ value }}
		<button @click="value++">+</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	data: () => ({
		value: 0,
	}),
})
</script>
