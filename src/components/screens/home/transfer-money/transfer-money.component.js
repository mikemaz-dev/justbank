import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/services/render.service.js'

import { Heading } from '@/components/ui/heading/heading.component.js'

import * as styles from './transfer-money.module.scss'
import template from './transfer-money.template.html'

import { ContactsList } from './contacts-list/contacts-list.component.js'

export class TransferMoney extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(
			template,
			[new Heading('Transfer money'), ContactsList],
			styles
		)
		return this.element
	}
}
