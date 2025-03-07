import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/services/render.service.js'

import * as styles from './header.module.scss'
import template from './header.template.html'
import { userItem } from '@/components/ui/user-item/user-item.component'

export class Header extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, userItem, styles)
		return this.element
	}
}
