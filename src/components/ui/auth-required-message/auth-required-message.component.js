import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/services/render.service.js'

import * as styles from './auth-required-message.module.scss'
import template from './auth-required-message.template.html'

export class AuthRequiredMessage extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles)
		return this.element
	}
}
