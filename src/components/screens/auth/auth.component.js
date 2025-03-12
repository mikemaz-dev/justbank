import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import formService from '@/core/services/form.service'
import renderService from '@/core/services/render.service.js'
import validateService from '@/core/services/validate.service'

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

	#validateFields(formValues) {
		const emailLabel = $R(this.element).find('label:first-child')
		const passwordLabel = $R(this.element).find('label:last-child')

		if (!formValues.email) {
			validateService.showError(emailLabel)
		}
		if (!formValues.password) {
			validateService.showError(passwordLabel)
		}

		return formValues.email && formValues.password
	}

	#changeFormType = event => {
		event.preventDefault()
		$R(this.element)
			.find('h1')
			.text(this.#isTypeLogin ? 'Sign in' : 'Register')

		$R(this.element)
			.find('#auth-toggle>span')
			.text(
				this.#isTypeLogin
					? `Don't have an account?`
					: 'Already have an account?'
			)

		$R(this.element)
			.find('#auth-toggle>button')
			.text(this.#isTypeLogin ? 'Register' : 'Sign in')

		this.#isTypeLogin = !this.#isTypeLogin
	}

	#handleSubmit = event => {
		const formValues = formService.getFormValues(event.target)
		if (!this.#validateFields(formValues)) return
		new this.authService.main(this.#isTypeLogin, formValues)
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
		$R(this.element).find('form').submit(this.#handleSubmit)

		return this.element
	}
}
