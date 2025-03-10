import { RedQuery } from '@/core/red-query/red-query.lib'
import { NotificationService } from '@/core/services/notification.service'
import { StorageService } from '@/core/services/storage.service'

export class AuthService {
	#BASE_URL = '/auth'

	constructor() {
		// store
		this.notificationService = new NotificationService()
		this.storageServices = new StorageService()
	}

	main(type, body) {
		return RedQuery({
			path: `${this.#BASE_URL}/${type}`,
			body,
			onSuccess: data => {
				this.notificationService.show(
					'success',
					`You have successfully ${type} in`
				)
			},
			method: 'POST'
		})
	}
}
