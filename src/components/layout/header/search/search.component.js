import ChildComponent from '@/core/component/child.component.js'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service.js'

import { UserItem } from '@/components/ui/user-item/user-item.component'

import { debounce } from '@/utils/debounce.util'

import { UserService } from '@/api/user.service'

import * as styles from './search.module.scss'
import template from './search.template.html'

export class Search extends ChildComponent {
	constructor() {
		super()
		this.userService = new UserService()
	}

	#handleSearch = async event => {
		const searchTerm = event.target.value
		const searchResultElement = $R(this.element).find('#search-results')

		if (!searchTerm) {
			searchResultElement.html('')
			return
		}

		await this.userService.getAll(searchTerm, users => {
			searchResultElement.html('')
			users.forEach((user, i) => {
				const userItem = new UserItem(user, true, () => {
					searchResultElement.html('')
				}).render()

				$R(userItem)
					.addClass(styles.item)
					.css('transition-delay', `${i * 0.1}s`)

				searchResultElement.append(userItem)

				setTimeout(() => {
					$R(userItem).addClass(styles.visible)
				}, 50)
			})
		})
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		const debaunceHandleSearch = debounce(this.#handleSearch, 300)

		$R(this.element)
			.find('input')
			.input({
				type: 'search',
				name: 'search',
				placeholder: 'Search contacts...'
			})
			.on('input', debaunceHandleSearch)

		return this.element
	}
}
