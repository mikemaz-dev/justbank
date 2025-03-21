import { BaseScreen } from '@/core/component/base-screen.component'
import renderService from '@/core/services/render.service'

import * as styles from './home.module.scss'
import template from './home.template.html'

import { CardActions } from './card-actions/card-actions.component.js'
import { CardInfo } from './card-info/card-info.component.js'
import { RecentTransactions } from './recent-transactions/recent-transactions.component.js'
import { Statistics } from './statistics/statistics.component.js'
import { TransferMoney } from './transfer-money/transfer-money.component.js'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(
			template,
			[CardInfo, Statistics, CardActions, TransferMoney, RecentTransactions],
			styles
		)

		return element
	}
}
