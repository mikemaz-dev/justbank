import { RedQuery } from '@/core/red-query/red-query.lib'

export class StatisticService {
	#BASE_URL = '/statistic'

	main(onSuccess) {
		return RedQuery({
			path: this.#BASE_URL,
			onSuccess
		})
	}
}
