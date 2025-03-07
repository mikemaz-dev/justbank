/**
 * Formats a credit card number starting by adding dashed(-) after every 4th character
 * @param {string} cardNumber - The credit card number string to format
 * @param {string} - Return the formatted credit card number string
 */

export function formatCardNumberWithDashes(cardNumber) {
	return cardNumber.replace(/(\d{4})(?=\d)/g, '$1-')
}
