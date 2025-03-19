import { RedQuery } from '@/core/red-query/red-query.lib'

export class UserService {
	#BASE_URL = 'users'

	getAll(searchTerm, onSuccess) {
		return RedQuery({
			path: searchTerm
				? `${this.#BASE_URL}${
						searchTerm ? `?${new URLSearchParams({ searchTerm })}` : ''
					}`
				: this.#BASE_URL,
			onSuccess
		})
	}
}
