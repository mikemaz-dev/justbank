import ChildComponent from '@/core/component/child.component.js'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service.js'
import { Store } from '@/core/store/store'

import { Heading } from '@/components/ui/heading/heading.component'
import {
	LOADER_SELECTOR,
	Loader
} from '@/components/ui/loader/loader.component'

import { StatisticService } from '@/api/statistic.service'

import * as styles from './statistics.module.scss'
import template from './statistics.template.html'

import { IncExp } from './inc-exp_widget/inc-exp.component.js'

export class Statistics extends ChildComponent {
	constructor() {
		super()

		this.statisticService = new StatisticService()
		this.store = Store.getInstance().state

		this.element = renderService.htmlToElement(
			template,
			[new Heading('Statistics')],
			styles
		)

		this.#addListeners
	}

	fetchData() {
		this.statisticService.main(data => {
			if (!data) return

			const loaderElement = this.element.querySelector(LOADER_SELECTOR)
			if (loaderElement) loaderElement.remove()

			const statsItemsElement = $R(this.element).find('#stats-items')
			statsItemsElement.text('')

			// const circleChartElement = $R(this.element).find('#circle-chart')
			// circleChartElement.text('')

			statsItemsElement.append(new IncExp(data).render())
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
			$R(this.element).append(new Loader(150, 150).render())
			this.fetchData()
		}

		return this.element
	}
}
