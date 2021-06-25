import { ref } from '@nuxtjs/composition-api'

const menu = ref(false)

const useUI = () => {
	return { menu }
}

export default useUI
