import ChildComponent from '@/core/component/child.component.js'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service.js'

import { formatToCurrency } from '@/utils/format/format-to-currency'
import { formatDate } from '@/utils/format/format-to-date'

import * as styles from './transaction-item.module.scss'
import template from './transaction-item.template.html'

export class TransactionItem extends ChildComponent {
	constructor(transaction) {
		super()
		this.transaction = transaction
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		const IsIncome = this.transaction.type === 'TOP_UP'
		const name = IsIncome ? 'Income' : 'Expense'
		const icon_src = IsIncome
			? '/icons/money-income.svg'
			: '/icons/money-expense.svg'

		$R(this.element).find('#transaction-icon').src(icon_src)
		$R(this.element).find('#transaction-type').text(name)
		$R(this.element)
			.find('#transaction-date')
			.text(formatDate(this.transaction.createdAt))
		$R(this.element)
			.find('#transaction-amount')
			.text(formatToCurrency(this.transaction.amount))

		return this.element
	}
}
