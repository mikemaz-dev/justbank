import { BaseScreen } from '@/core/component/base-screen.component.js'
import renderService from '@/core/services/render.service'
import template from './home.template.html'
import styles from './home.module.scss'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}
	render() {
		const element = renderService.htmlToElement(template, [], styles)
		return element.outerHTML
	}
}
