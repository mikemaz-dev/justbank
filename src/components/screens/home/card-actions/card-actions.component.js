import ChildComponent from '@/core/component/child.component.js'
import { $R } from '@/core/rquery/rquery.lib'
import { NotificationService } from '@/core/services/notification.service'
import renderService from '@/core/services/render.service.js'
import validateService from '@/core/services/validate.service'
import { Store } from '@/core/store/store'

import { Button } from '@/components/ui/button/button.component.js'
import { Field } from '@/components/ui/field/field.component.js'

import { CardService } from '@/api/card.service'

import * as styles from './card-actions.module.scss'
import template from './card-actions.template.html'

import { BALANCED_UPDATED } from '@/constants/event.constants'

export class CardActions extends ChildComponent {
	constructor() {
		super()

		this.store = Store.getInstance().state
		this.cardService = new CardService()
		this.notificationService = new NotificationService()
	}

	/**
	 * @param {Event} event - The event object from the button click event
	 * @param {'top-up' | 'withdrawal'} type - The type of the transaction, either 'top-up' or 'withdrawal'
	 */
	updateBalance(event, type) {
		event.preventDefault()

		if (!this.store.user) {
			this.notificationService.show('error', 'You must be authorized')
			return
		}

		$R(event.target).text('Sending...').attr('disabled', true)

		let inputElement = this.element.querySelector('input')

		if (!inputElement) {
			console.error('Error: input element not found in this.element!')
			inputElement = document.querySelector('input')
		}

		const amount = parseFloat(inputElement.value.trim())

		if (isNaN(amount) || amount <= 0) {
			this.notificationService.show('error', 'Enter a valid amount')
			$R(event.target).text(type).removeAttr('disabled')
			return
		}

		console.log('Sending request with:', { amount, type })

		this.cardService.updateBalance(amount, type, () => {
			inputElement.value = ''
			document.dispatchEvent(new Event(BALANCED_UPDATED))
		})

		$R(event.target).removeAttr('disabled').text(type)
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: 'amount',
					placeholder: 'Enter amount:',
					type: 'number'
				})
			],
			styles
		)

		$R(this.element)
			.find('#action-buttons')
			.append(
				new Button({
					children: 'Top-up',
					variant: 'green',
					onClick: e => this.updateBalance(e, 'top-up')
				}).render()
			)
			.append(
				new Button({
					children: 'Withdrawal',
					variant: 'purple',
					onClick: e => this.updateBalance(e, 'withdrawal')
				}).render()
			)

		return this.element
	}
}
