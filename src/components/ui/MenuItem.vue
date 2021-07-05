<template>
	<button
		@click="navigate"
		class="px-8 py-4 hover:bg-black hover:bg-opacity-5 text-left dark:hover:bg-white dark:hover:bg-opacity-5"
	>
		<slot />
	</button>
</template>

<script>
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
	props: ['to'],
	setup(props, { emit }) {
		const router = useRouter()
		const navigate = () => {
			emit('navigate')
			router.push(props.to)
		}
		return { navigate }
	},
})
</script>
