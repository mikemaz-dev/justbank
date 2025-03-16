import { BaseScreen } from '@/core/component/base-screen.component'
import renderService from '@/core/services/render.service'

import * as styles from './home.module.scss'
import template from './home.template.html'

import { CardInfo } from './card-info/card-info.component.js'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(template, [CardInfo], styles)

		return element
	}
}
