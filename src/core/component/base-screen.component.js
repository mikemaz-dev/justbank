import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	/**
	 * BaseScreen render a title on the tab
	 * @param {Object} options - The options for the BaseScreen
	 * @param {string} options.title - The title for the BaseScreen
	 */
	constructor({ title }) {
		document.title = getTitle(title)
	}

	/**
	 * Render the child component content
	 * @returns {HTMLElement}
	 */
	render() {
		throw new Error('Render method must be implemented in the child class')
	}
}
