<template>
	<div>
		<span>Ups, parece que...</span>
		<h1 v-if="error.statusCode == 404">
			La página que buscas no existe
		</h1>
		<h1 v-else>
			Ha ocurrido un error
		</h1>
		<p>
			Será mejor que visites otra página, como la
			<nuxt-link to="/">página de inicio</nuxt-link> o el
			<nuxt-link to="/blog">blog</nuxt-link>.
		</p>
	</div>
</template>

<script>
export default {
	props: ['error'],
	head() {
		return {
			title: `${
				this.error.statusCode == 404
					? 'Página no encontrada'
					: 'Ha ocurrido un error'
			} | Error ${this.error.statusCode}`,
		}
	},
}
</script>
