import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/services/render.service.js'

import { userItem } from '@/components/ui/user-item/user-item.component'
import * as styles from './header.module.scss'
import template from './header.template.html'
import { Logo } from './logo/logo.component.js'
import { LogoutButton } from './logout/logout.component.js'
import { Search } from './search/search.component.js'

export class Header extends ChildComponent {
	constructor({ router }) {
		super()

		this.router = router
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
				new userItem(
					{
						avatarPath: './icons/user.svg',
						name: 'Mike'
					},
					true,
					() => alert('Hello user!')
				)
			],
			styles
		)
		return this.element
	}
}
