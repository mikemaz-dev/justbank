import { Field } from '@/components/ui/field/field.component'
import { userItem } from '@/components/ui/user-item/user-item.component'
import { BaseScreen } from '@/core/component/base-screen.component'
import renderService from '@/core/services/render.service'
import * as styles from './home.module.scss'
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(template, [], styles)

		return element
	}
}
