<template>
	<i v-if="0" />
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: String,
	},
	head() {
		const defaultImage = `https://${this.$config.domain}/featured-image.jpg`
		return {
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.description,
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.title,
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.description,
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: this.image || defaultImage,
				},
				{
					hid: 'twitter:image:alt',
					name: 'twitter:image:alt',
					content: this.title,
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.title,
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.description,
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.image || defaultImage,
				},
				{
					hid: 'og:image:secure_url',
					property: 'og:image:secure_url',
					content: this.image || defaultImage,
				},
				{
					hid: 'og:image:alt',
					property: 'og:image:alt',
					content: this.title,
				},
			],
		}
	},
}
</script>
