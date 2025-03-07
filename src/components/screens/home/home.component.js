import { Button } from '@/components/ui/button/button.component'
import { BaseScreen } from '@/core/component/base-screen.component'
import renderService from '@/core/services/render.service'
import * as styles from './home.module.scss'
import template from './home.template.html'
import { Field } from '@/components/ui/field/field.component'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: 'some_name',
					placeholder: 'Enter Email',
					varian: 'gray'
				})
			],
			styles
		)

		return element
	}
}
