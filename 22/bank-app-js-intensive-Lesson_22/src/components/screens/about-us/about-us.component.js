import { BaseScreen } from '@/core/component/base-screen.component'

export class AboutUs extends BaseScreen {
	constructor() {
		super({ title: 'About us' })
	}

	render() {
		return '<p>About us</p>'
	}
}
