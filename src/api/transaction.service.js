import { RedQuery } from '@/core/red-query/red-query.lib'

export class UserService {
	#BASE_URL = '/users'

	getAll(searchTerm, onSuccess) {
		return RedQuery({
			path: `${this.#BASE_URL}${
				searchTerm ? `?${new URLSearchParams({ searchTerm })}` : ''
			}`,
			onSuccess
		})
	}
}
