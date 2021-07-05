<template>
	<div class="bg-gray-50">
		<ui-menu />
		<layout-navigation />
		<ui-scroll-indicator />
		<ui-container class="py-8 md:py-16">
			<nuxt class="prose md:prose-lg mx-auto" />
		</ui-container>
		<go-to-top />
		<layout-footer />
	</div>
</template>
