<template>
	<div>
		<scroll-indicator />
		<nuxt />
		<go-to-top />
		<footer class="bg-black text-white text-center">
			<container class="py-4">
				Lautaro Pereyra &copy;
				{{ new Date().getFullYear() }} · Made with
				<a href="https://nuxtjs.org/" class="text-primary"
					>Nuxt</a
				></container
			>
		</footer>
	</div>
</template>

<style lang="postcss">
html {
	scroll-behavior: smooth;
}
body {
	-webkit-tap-highlight-color: transparent;
}
</style>
