class FormService {
	/**
	 * Retrieves the value of input elements within a form element
	 * @param {HTMLFormElement} formElement - The form element containing input elements
	 * @returns {Object} An object containing the input element's name as the key and its value as the value
	 */
	getFormValues(formElement) {
		const inputs = formElement.querySelectorAll('input')
		const values = {}

		for (const input of inputs) {
			values[input.name] = input.value
		}

		return values
	}
}

export default new FormService()
