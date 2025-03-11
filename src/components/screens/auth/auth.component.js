import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service.js'

import { Button } from '@/components/ui/button/button.component'
import { Field } from '@/components/ui/field/field.component.js'

import { AuthService } from '@/api/auth.service'

import * as styles from './auth.module.scss'
import template from './auth.template.html'

export class Auth extends BaseScreen {
	constructor() {
		super({ title: 'Auth' })
		this.authService = new AuthService()
	}

	#isTypeLogin = true

	#changeFormType = event => {
		event.preventDefault()
		$R(this.element)
			.find('h1')
			.text(this.#isTypeLogin ? 'Register' : 'Sign in')

		$R(event.target).text(this.#isTypeLogin ? 'Login' : 'Register')
		this.#isTypeLogin = !this.#isTypeLogin
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new Button({
					children: 'Submit'
				})
			],
			styles
		)

		$R(this.element)
			.find('#auth-fields')
			.append(
				new Field({
					placeholder: 'Enter email',
					name: 'email',
					type: 'email'
				}).render()
			)
			.append(
				new Field({
					placeholder: 'Enter password',
					name: 'password',
					type: 'password'
				}).render()
			)

		$R(this.element).find('#auth-toggle').click(this.#changeFormType)

		return this.element
	}
}
