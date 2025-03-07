/**
 * Representing the RQuery class for working with DOM elements
 */

class RQuery {
	/**
	 * Create a new RQuery instance
	 * @param {string | HTMLElement} - CSS selector could be string or HTMLElement
	 */
	constructor(selector) {
		if (typeof selector === 'string') {
			this.element = document.querySelector(selector)

			if (!this.element) {
				throw new Error(`Element ${selector} not found!`)
			}
		} else if (selector instanceof HTMLElement) {
			this.element = selector
		} else {
			throw new Error('Invalid selector type')
		}
	}

	/**
	 * Find the first element that matches the specified selector within the selected method.
	 * @param {string} selector - A Css selector string to search for withing the selected method.
	 * @returns {RQuery} A new RQuery instance for the found element.
	 */

	find(selector) {
		const element = new RQuery(this.element.querySelector(selector))
		if (element) {
			return element
		} else {
			throw new Error(`Element ${selector} not found`)
		}
	}

	/**
	 * Append element using appendChild
	 * @param {string | HTMLElement} Element
	 * @returns
	 */

	append(content) {
		this.element.appendChild(content)
		return this
	}

	/**
	 * Insert a new element before selected element
	 * @param {HTMLElement} HTMLElement - The new element to insert before selected element
	 * @returns {RQuery} The current RQuery instance for chaining
	 */

	before(newElement) {
		if (!(newElement instanceof HTMLElement)) {
			throw new Error('Element must be an HtmlElement')
		}
		const parentElement = this.element.parentElement
		if (parentElement) {
			parentElement.insertBefore(newElement, this.element)
		} else {
			throw new Error('Element does not have parent element')
		}
	}

	/**
	 * Get or set the inter html of the selected element
	 * @param {string} [htmlContent] - Optional HTML content to set. If not provided, will be returned current html
	 * @returns {RQuery | string} The current RQuery instance for chaining
	 */

	html(htmlContent) {
		if (typeof htmlContent === 'undefined') {
			return this.element.innerHTML
		} else {
			this.element.innerHTML = htmlContent
			return this
		}
	}

	/**
	 * Set the CSS styles style of the selected element
	 * @param {string} property - The css property to set
	 * @param {string} value - The value to set to css property
	 * @returns {RQuery} The current RQuery instance for chaining
	 */
	css(property, value) {
		if (typeof property !== 'string' || typeof value !== 'string') {
			throw new Error('property and value must be a string')
		}

		this.element.style[property] = value
		return this
	}
}

/**
 * Create a new RQuery instance for the given selector
 * @param {string | HTMLElement} selector
 * @returns {RQuery}
 */
export function $R(selector) {
	return new RQuery(selector)
}
