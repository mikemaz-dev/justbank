import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/services/render.service.js'

import * as styles from './logout.module.scss'
import template from './logout.template.html'
import { $R } from '@/core/rquery/rquery.lib'

export class LogoutButton extends ChildComponent {
	constructor({ router }) {
		super()
		this.router = router
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$R(this.element)
			.find('button')
			.click(() => {
				this.router.navigate('/auth')
			})

		return this.element
	}
}
