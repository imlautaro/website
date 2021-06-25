<template>
	<footer class="bg-black text-white">
		<ui-container
			class="flex flex-col md:flex-row items-center justify-between py-8 space-y-4 md:space-y-0"
		>
			<div class="flex items-center space-x-2">
				<brand-logotype />
				<span>&copy;</span>
				<span> {{ new Date().getFullYear() }}</span>
			</div>
			<a href="https://nuxtjs.org" target="_blank">
				<img class="h-6" src="/built-with-nuxt-white.svg" />
			</a>
		</ui-container>
	</footer>
</template>
