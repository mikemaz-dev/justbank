import ChildComponent from '@/core/component/child.component.js'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service.js'
import { Store } from '@/core/store/store'

import { userItem } from '@/components/ui/user-item/user-item.component'

import * as styles from './header.module.scss'
import template from './header.template.html'

import { Logo } from './logo/logo.component.js'
import { LogoutButton } from './logout/logout.component.js'
import { Search } from './search/search.component.js'

export class Header extends ChildComponent {
	constructor({ router }) {
		super()

		this.store = Store.getInstance()
		this.store.addObserver(this)

		this.userItem = new userItem(
			{
				avatarPath: './icons/user.svg',
				name: 'User'
			},
			true,
			() => alert('Hello user!')
		)

		this.router = router
	}

	update() {
		this.user = this.store.state.user

		const authSideElement = $R(this.element).find('#auth-side')

		if (this.user) {
			authSideElement.show()
			this.userItem.update(this.user)
			this.router.navigate('/')
		} else {
			authSideElement.hide()
		}
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new Logo(),
				new LogoutButton({
					router: this.router
				}),
				Search,
				this.userItem
			],
			styles
		)

		this.update()

		return this.element
	}
}
