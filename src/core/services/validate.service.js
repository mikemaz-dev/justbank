import { COLORS } from '@/config/colors.config'

class ValidationService {
	constructor() {
		this.errorBorderTimeout = {}
	}
	showError(element, timeout = 2500) {
		element.css('border-color', COLORS.error)

		if (this.errorBorderTimeout[element]) {
			clearTimeout(this.errorBorderTimeout[element])
		}

		this.errorBorderTimeout[element] = setTimeout(() => {
			element.css('border-color', '')
		}, timeout)
	}
}

export default new ValidationService()
