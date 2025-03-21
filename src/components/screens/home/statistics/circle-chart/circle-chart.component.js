import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/services/render.service.js'

import { DonutChart } from '@/components/ui/donut-chart/donut-chart.component.js'

import * as styles from './circle-chart.module.scss'
import template from './circle-chart.template.html'

export class CircleChart extends ChildComponent {
	constructor(incomePercent, expensePercent) {
		super()

		this.incomePercent = incomePercent
		this.expensePercent = expensePercent
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new DonutChart([
					{ value: this.incomePercent, color: '#08f0c8' },
					{ value: this.expensePercent, color: '#917cff' }
				])
			],
			styles
		)
		return this.element
	}
}
