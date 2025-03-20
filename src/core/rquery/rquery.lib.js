import { formatCardNumberWithDashes } from '@/utils/format/format-card-number'

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

	/* Find */

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
	 * Find all elements to match the specified selector within the selected element.
	 * @param {string} selector - A CSS selector string to search for within the selected element
	 * @returns {RQuery[]} An array of new RQuery instances for the found elements
	 */
	findAll(selector) {
		const elements = this.element.querySelectorAll(selector)
		return Array.from(elements).map(element => new RQuery(element))
	}

	/* Insert */

	/**
	 * Append element using appendChild
	 * @param {string | HTMLElement} Element
	 * @returns
	 */

	/* Insert elements */

	append(content) {
		this.element.appendChild(content)
		return this
	}

	/* Insert a new element before selected element
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

	/* Events */

	/**
	 * Add an event listener to the selected element for the specified event type
	 * @param {string} eventType - The type of event listener (e.g., 'click', 'input', etc.)
	 * @param {function(Event): void} callback - The event listener function to execute when the event is triggered. The function will receive the event object as its argument
	 * @return {RQuery} The current RQuery instance for chaining
	 */

	on(evenType, callback) {
		if (typeof evenType !== 'string' || typeof callback !== 'function') {
			throw new Error(
				'eventType must be a string and callback must be a function'
			)
		}

		this.element.addEventListener(evenType, callback)
	}

	/** Attach a click event listener to the selected element.
	 * @param {function(Event): void}  callback - The event listener function to execute when the selected element is clicked. The function will receive the event object as its argument.
	 * @return {RQuery} The current RQuery instance for chaining
	 */

	click(callback) {
		this.element.addEventListener('click', callback)
		return this
	}

	/* Form */

	input({ onInput, ...rest }) {
		if (this.element.tagName.toLowerCase() !== 'input')
			throw new Error('Element must be an input')

		for (const [key, value] of Object.entries(rest)) {
			this.element.setAttribute(key, value)
		}

		if (onInput) {
			this.element.addEventListener('input', onInput)
		}

		return this
	}

	/**
	 * Gets or sets the value of input element
	 * @param {*} [newValue] - The new value to ser for the input element. If not provided, the method returns the current value
	 * @return {string | RQuery} - If newValue is provided, returns the RQuery instance. Otherwise, returns the current value of the input element
	 */
	value(newValue) {
		if (typeof newValue === 'undefined') {
			return this.element.value
		} else {
			this.element.value = newValue
			return this
		}
	}

	/**
	 * Get or set the `src` attribute of an `<img>` element.
	 * @param {string} [url] - The image URL to set. If not provided, returns the current `src` value.
	 * @returns {RQuery | string} The current RQuery instance for chaining or the current `src` value.
	 */

	/**
	 * Set an event listener for the submit event of a form element
	 * @param {function(Event): void} onSubmit - The event listener for the form's submit event
	 * @returns {Object} The current RQuery instance for chaining
	 */

	submit(onSubmit) {
		if (this.element.tagName.toLowerCase() === 'form') {
			this.element.addEventListener('submit', e => {
				e.preventDefault()
				onSubmit(e)
			})
		} else {
			throw new Error('Element must be a form')
		}

		return this
	}

	/**
	 * Set attribute and event listener for a number input element
	 * @param {number} [limit] - The maximum length of input value.
	 * @returns {RQuery} The current RQuery instance for chaining
	 */

	numberInput(limit) {
		if (
			this.element.tagName.toLowerCase() !== 'input' ||
			this.element.type !== 'number'
		)
			throw new Error('Element must be an input with type number')

		this.element.addEventListener('input', e => {
			let value = e.target.value.replace(/[^0-9]/g, '')
			if (limit) value = value.substring(0, limit)
			e.target.value = value
		})
	}

	/**
	 * Set attribute and event listener for a credit card input element
	 * @returns {RQuery} The current RQuery instance for chaining
	 */

	creditCardInput() {
		const limit = 16
		if (
			this.element.tagName.toLowerCase() !== 'input' ||
			this.element.type !== 'text'
		)
			throw new Error('Element must be an input with type text')

		this.element.addEventListener('input', e => {
			let value = e.target.value.replace(/[^0-9]/g, '')
			if (limit) value = value.substring(0, limit)
			e.target.value = formatCardNumberWithDashes(value)
		})

		return this
	}

	/* html */

	/** Get or set the inter html of the selected element
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

	/** Get or set the text content of the selected element
	 * @param {string} [htmlContent] - Optional text content to set. If not provided, the current text content will be returned
	 * @returns {RQuery | string} The current RQuery instance for chaining
	 */
	src(url) {
		if (this.element.tagName.toLowerCase() !== 'img') {
			throw new Error('Element must be an <img> tag')
		}

		if (typeof url === 'undefined') {
			return this.element.getAttribute('src')
		} else {
			this.element.setAttribute('src', url)
			return this
		}
	}

	text(textContent) {
		if (typeof textContent === 'undefined') {
			return this.element.textContent
		} else {
			this.element.textContent = textContent
			return this
		}
	}

	// Styles

	/**
	 * Shows the selected element by removing the 'display' style property
	 * @returns {RQuery} The current RQuery instance for chaining
	 */

	show() {
		this.element.style.removeProperty('display')
		return this
	}

	/**
	 * Hides the selected element by setting it display style to 'none'
	 * @returns {RQuery} The current RQuery instance for chaining
	 */

	hide() {
		this.element.style.display = 'none'
		return this
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

	addClass(classNames) {
		if (Array.isArray(classNames)) {
			for (const className of classNames) {
				this.element.classList.add(className)
			}
		} else {
			this.element.classList.add(classNames)
		}
		return this
	}

	/** Remove a class or a list of classes to the current element
	 * @param {string | string[]} classNames - A single class name or an array of class names to remove to element
	 * @returns {RQuery}
	 */
	removeClass(classNames) {
		if (Array.isArray(classNames)) {
			for (const className of classNames) {
				this.element.classList.remove(className)
			}
		} else {
			this.element.classList.remove(classNames)
		}
		return this
	}

	/**
	 * Set or get a value of an attribute on the selected element
	 * @param {string} attributeName The name of attribute to set or get
	 * @param {string} [value] The value to set for attribute. If not provided, th current value of the attribute will be returned
	 * @returns {RQuery | string} The current RQuery instance for chaining
	 */

	attr(attributeName, value) {
		if (typeof attributeName !== 'string') {
			throw new Error('Attribute name must be provided')
		}
		if (typeof value === 'undefined') {
			return this.element.getAttribute(attributeName)
		} else {
			this.element.setAttribute(attributeName, value)
			return this
		}
	}

	/**
	 * Removes the attribute from the current element
	 * @param {*} attrName - The name of the attribute to remove
	 * @return {RQuery} The current RQuery instance for chaining
	 */
	removeAttr(attrName) {
		if (typeof attrName !== 'string') {
			throw new Error('Attribute name must be provided')
		}
		this.element.removeAttribute(attrName)

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
