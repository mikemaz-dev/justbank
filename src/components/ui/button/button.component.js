import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/services/render.service.js'

import * as styles from './button.module.scss'
import template from './button.template.html'
import { $R } from '@/core/rquery/rquery.lib'

export class Button extends ChildComponent {
	constructor({ children, onClick, variant }) {
		super()

		if (!children) throw new Error('Children is empty')

		this.children = children
		this.onClick = onClick
		this.variant = variant
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$R(this.element).html(this.children).click(this.onClick)

		if(this.variant) $R(this.element).addClass(styles[this.variant])

		return this.element
	}
}
