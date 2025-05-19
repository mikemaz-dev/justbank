import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'
import { Store } from '@/core/store/store'

import { AuthRequiredMessage } from '@/components/ui/auth-required-message/auth-required-message.component'

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

		this.store = Store.getInstance()

		this.store.addObserver(this)

		this.components = {
			cardInfo: null,
			transactions: null,
			statistics: null
		}
	}

	createOrUpdateComponent(component, componentName) {
		if (this.components[componentName]) {
			this.components[componentName].destroy()
		}
		this.components[componentName] = new component()
		return this.components[componentName]
	}

	update() {
		this.user = this.store.state.user

		if (!this.user) {
			$R(this.element).html(new AuthRequiredMessage().render().outerHTML)
		}
	}

	render() {
		const componentsToRender = [
			this.createOrUpdateComponent(CardInfo, 'cardInfo'),
			this.createOrUpdateComponent(RecentTransactions, 'RecentTransactions'),
			this.createOrUpdateComponent(Statistics, 'statistics'),
			this.createOrUpdateComponent(CardActions, 'CardActions'),
			this.createOrUpdateComponent(TransferMoney, 'TransferMoney')
		]

		this.element = renderService.htmlToElement(
			template,
			componentsToRender,
			styles
		)

		this.update()

		return this.element
	}
}
