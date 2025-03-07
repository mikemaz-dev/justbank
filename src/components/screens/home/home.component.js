import { BaseScreen } from '@/core/component/base-screen.component.js'
import renderService from '@/core/services/render.service'
import template from './home.template.html'
import * as styles from './home.module.scss'
import { $R } from '@/core/rquery/rquery.lib'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(template, [], styles)

		$R(element).find('h1').css('color', 'cyan')

		return element
	}
}
