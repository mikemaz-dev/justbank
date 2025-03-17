import ChildComponent from '@/core/component/child.component.js'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service.js'
import { Store } from '@/core/store/store'

import { formatCardNumber } from '@/utils/format/format-card-number'
import { formatToCurrency } from '@/utils/format/format-to-currency'

import { CardService } from '@/api/card.service.js'

import * as styles from './card-info.module.scss'
import template from './card-info.template.html'

import { BALANCED_UPDATED } from '@/constants/event.constants'

const CODE = '*****'

export class CardInfo extends ChildComponent {
	constructor() {
		super()

		this.store = Store.getInstance()
		this.cardService = new CardService()

		this.element = renderService.htmlToElement(template, [], styles)

		this.#addListeners()
	}

	#addListeners() {
		document.addEventListener(BALANCED_UPDATED, this.#onBalanceUpdated)
	}

	#removeListeners() {
		document.removeEventListener(BALANCED_UPDATED, this.#onBalanceUpdated)
	}

	#onBalanceUpdated = () => {
		this.fetchData()
	}

	destroy() {
		this.#removeListeners()
	}

	#copyCardNumber(e) {
		const element = e.target
		const originalText = formatCardNumber(this.card.number)
		navigator.clipboard.writeText(originalText).then(() => {
			element.innerText = 'Card number copied!'
			setTimeout(() => {
				element.innerText = originalText
			}, 2000)
		})
	}

	#toggleCvc(cardCvcElement) {
		const isHidden = cardCvcElement.text() === CODE
		cardCvcElement.text(isHidden ? this.card.cvc : CODE)
	}

	fillElement() {
		$R(this.element).html(
			renderService.htmlToElement(template, [], styles).innerHTML
		)

		$R(this.element)
			.findAll(':scope > div')
			.forEach(child => {
				child.addClass('fade-in')
			})

		$R(this.element)
			.find('#card-number')
			.text(formatCardNumber(this.card.number))
			.click(this.#copyCardNumber.bind(this))

		const cardCvcElement = $R(this.element).find('#card-cvc')
		cardCvcElement.text(CODE).css('width', '44px')

		$R(this.element).find('#card-expire-date').text(this.card.expireDate)

		$R(this.element)
			.find('#toggle-cvc')
			.click(this.#toggleCvc.bind(this, cardCvcElement))

		$R(this.element)
			.find('#card-balance')
			.text(formatToCurrency(this.card.balance))
	}

	fetchData() {
		this.cardService.byUser(data => {
			if (data?.id) {
				this.card = data
				this.fillElement()
				this.store.updateCard(data)
			} else {
				this.card = null
				this.store.updateCard(null)
			}
		})
	}

	render() {
		if (this.store.state.user) this.fetchData()

		return this.element
	}
}
