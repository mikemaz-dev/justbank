import ChildComponent from '@/core/component/child.component.js'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service.js'
import { Store } from '@/core/store/store'

import { Heading } from '@/components/ui/heading/heading.component'
import {
	LOADER_SELECTOR,
	Loader
} from '@/components/ui/loader/loader.component.js'

import { TransactionService } from '@/api/transaction.service'

import * as styles from './recent-transactions.module.scss'
import template from './recent-transactions.template.html'

import { TransactionItem } from './transaction-item/transaction-item.component.js'
import { TRANSACTION_COMPLETED } from '@/constants/event.constants'

export class RecentTransactions extends ChildComponent {
	constructor() {
		super()

		this.store = Store.getInstance().state
		this.transactionService = new TransactionService()

		this.element = renderService.htmlToElement(
			template,
			[new Heading('Recent transactions')],
			styles
		)

		this.#addListeners()
	}

	fetchData() {
		this.transactionService.getAll(data => {
			if (!data) return

			const loaderElement = this.element.querySelector(LOADER_SELECTOR)
			if (loaderElement) loaderElement.remove()

			const transactionList = $R(this.element).find('#transaction-list')
			transactionList.text('')

			if (data.length) {
				for (const transaction of data.transactions) {
					if (transaction.amount === 0) continue
					transactionList.append(new TransactionItem(transaction).render())
				}
			} else {
				transactionList.text('Transactions not found')
			}
		})
	}

	#addListeners() {
		document.addEventListener(
			TRANSACTION_COMPLETED,
			this.#onTransactionCompleted
		)
	}

	#removeListeners() {
		document.removeEventListener(
			TRANSACTION_COMPLETED,
			this.#onTransactionCompleted
		)
	}

	#onTransactionCompleted = () => {
		this.fetchData()
	}

	destroy() {
		this.#removeListeners()
	}

	render() {
		if (this.store.user) {
			$R(this.element).append(new Loader().render())
			setTimeout(() => this.fetchData(), 500)
		}

		return this.element
	}
}
