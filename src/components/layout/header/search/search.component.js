import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/services/render.service.js'

import * as styles from './search.module.scss'
import template from './search.template.html'
import { $R } from '@/core/rquery/rquery.lib'

export class Search extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles)
		$R(this.element).find('input').input({
			type: 'search',
			name: 'search',
			placeholder: 'Search contacts'
		})
		return this.element
	}
}
