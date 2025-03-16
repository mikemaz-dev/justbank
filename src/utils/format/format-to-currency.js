/**
 * Formats a number as a string with the specified currency symbol
 *
 * @param {number} number - The number to be converted into currency
 * @returns {string} - The formatted number with the currency symbol
 */

export function formatToCurrency(number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		currencyDisplay: 'code'
	}).format(number)
}
