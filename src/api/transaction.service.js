import { RedQuery } from '@/core/red-query/red-query.lib'

export class TransactionService {
	#BASE_URL = 'transactions'

	getAll(onSuccess) {
		return RedQuery({
			path: this.#BASE_URL,
			method: 'GET',
			onSuccess
		})
	}
}
