import ChildComponent from '@/core/component/child.component.js'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service.js'

import { formatToCurrency } from '@/utils/format/format-to-currency'

import * as styles from './inc-exp.module.scss'
import template from './inc-exp.template.html'

export class IncExp extends ChildComponent {
	constructor(statistics) {
		super()
		this.statistics = statistics || []
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$R(this.element).find('#item-income').addClass('fade-in')
		$R(this.element).find('#item-expense').addClass('fade-in')

		this.statistics.forEach(item => {
			const element = $R(this.element).find(
				`#${item.label.toLowerCase()}_amount`
			)
			if (element) {
				element.text(formatToCurrency(item.value))
			}
		})
		return this.element
	}
}
