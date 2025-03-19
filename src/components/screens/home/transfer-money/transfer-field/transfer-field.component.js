import ChildComponent from '@/core/component/child.component.js'
import { $R } from '@/core/rquery/rquery.lib'
import { NotificationService } from '@/core/services/notification.service'
import renderService from '@/core/services/render.service.js'
import validateService from '@/core/services/validate.service'
import { Store } from '@/core/store/store'

import { Button } from '@/components/ui/button/button.component.js'
import { Field } from '@/components/ui/field/field.component.js'

import { CardService } from '@/api/card.service'

import * as styles from './transfer-field.module.scss'
import template from './transfer-field.template.html'

import {
	BALANCED_UPDATED,
	TRANSACTION_COMPLETED
} from '@/constants/event.constants'

export class TransferField extends ChildComponent {
	constructor() {
		super()

		this.store = Store.getInstance().state
		this.cardService = new CardService()
		this.notificationService = new NotificationService()
	}

	handleTransfer = event => {
		event.preventDefault()

		if (!this.store.user) {
			this.notificationService.show('error', 'You must be authorized')
		}

		$R(event.target).text('Sending...').attr('disabled', true)

		const inputElement = $R(this.element).find('input')
		const toCardNumber = inputElement.value().replaceAll('-', '')

		const reset = () => {
			$R(event.target).text('Send').attr('disabled', false)
		}

		if (!toCardNumber) {
			validateService.showError($R(this.element).find('label'))
			reset()
			return
		}

		let amount = prompt('Transfer amount 👇')

		this.cardService.transfer({ amount, toCardNumber }, () => {
			inputElement.value('')
			amount = ''

			document.dispatchEvent(new Event(TRANSACTION_COMPLETED))
			document.dispatchEvent(new Event(BALANCED_UPDATED))

			reset()
		})
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: 'card-number',
					placeholder: 'XXXX-XXXX-XXXX-XXXX',
					variant: 'credit-card'
				}),
				new Button({
					children: 'Send',
					variant: 'purple',
					onClick: this.handleTransfer
				})
			],
			styles
		)
		return this.element
	}
}
