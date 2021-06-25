<template>
	<div>
		<header
			class="bg-gradient-to-br from-primary to-secondary p-16 text-white"
		>
			<ui-container>
				<h1 class="font-bold text-4xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</h1>
			</ui-container>
		</header>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
	head() {
		return {
			title: 'Lautaro Pereyra',
		}
	},
	setup() {},
})
</script>
