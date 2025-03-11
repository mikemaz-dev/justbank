import { RedQuery } from '@/core/red-query/red-query.lib'
import { NotificationService } from '@/core/services/notification.service'
import { Store } from '@/core/store/store'

export class CardService {
	#BASE_URL = '/cards'

	constructor() {
		this.store = Store.getInstance()
		this.notificationService = new NotificationService()
	}

	byUser(onSuccess) {
		return RedQuery({
			path: `${this.#BASE_URL}/by-user`,
			onSuccess
		})
	}

	/**
	 * Update the user balance with the specified amount and type
	 *
	 * @param {number} amount - The amount to be added or withdrawal from the user's balance
	 * @param {'top-up' | 'withdrawal'} type - The type of the transaction, either 'top-up' or 'withdrawal'
	 * @param {function} onSuccess - The callback function to be executed when the balance update is successful
	 * @returns {Promise} - A promise object that resolves to the response from the API
	 */
	updateBalance(amount, type, onSuccess) {
		return RedQuery({
			path: `${this.#BASE_URL}/balance/${type}`,
			method: 'PATCH',
			body: { amount: +amount },
			onSuccess: () => {
				this.notificationService.show(
					'success',
					'Balance successfully changed'
				),
					onSuccess()
			}
		})
	}

	/**
	 * Transfers money between cards
	 * @function
	 * @param {object} body - The transfer details
	 * @param {number} body.amount - The amount to be transferred
	 * @param {string} body.toCardNumber - The recipient's card number
	 * @param {Function} onSuccess - The callback function to be executed upon successful transfer
	 * @returns {Promise} - A promise that resolves with RedQuery response
	 */
	transfer({ amount, toCardNumber }, onSuccess) {
		return RedQuery({
			path: `${this.#BASE_URL}/transfer-money`,
			method: 'PATCH',
			body: {
				amount: +amount,
				formCardNumber: this.store.user.card.number,
				toCardNumber
			},
			onSuccess: () => {
				this.notificationService.show(
					'success',
					'Transfer successfully completed!'
				),
					onSuccess()
			}
		})
	}
}
