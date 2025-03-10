import ChildComponent from '@/core/component/child.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service.js'

import * as styles from './layout.module.scss'
import template from './layout.template.html'

import { Header } from './header/header.component.js'
import { Notification } from './notification/notification.component.js'

export class Layout extends ChildComponent {
	constructor({ router, children }) {
		super()

		this.router = router
		this.children = children
	}

	render() {
		this.element = renderService.htmlToElement(template, [Notification], styles)

		const mainElement = this.element.querySelector('main')

		const contentContainer = $R(this.element).find('#content')
		contentContainer.append(this.children)

		mainElement.insertAdjacentElement(
			'beforebegin',
			new Header({
				router: this.router
			}).render()
		)

		mainElement.append(contentContainer.element)

		return this.element
	}
}
