import { SERVER_URL } from '@/config/url.config.js'

import { NotificationService } from '../services/notification.service.js'
import { StorageService } from '../services/storage.service.js'

import { extractMessage } from './extract-error-message.js'
import { ACCESS_TOKEN_KEY } from '@/constants/auth.constants.js'

/**
 * RedQuery is a minimalistic library for handling API requests
 * Fetch data from API with provided options
 * @param {Object} options - Configuration object for the API request
 * @param {string} options.path - The API endpoint path
 * @param {('GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT')} [options.method='GET'] - The HTTP method to use for the request
 * @param {Object} [options.body=null] - The request payload to send as JSON
 * @param {Object} [options.headers={}] - Additional headers to include with requests
 * @param {Function} [options.onSuccess=null] - Callback function to be called on successful response
 * @param {Function} [options.onError=null] - Callback function to be called on error response
 * @returns {Promise<{isLoading: boolean, error: string | null, data: any | null}>} - An object containing the loading state, error, and data from the response
 */

export async function RedQuery({
	path,
	body = null,
	headers = {},
	method = 'GET',
	onError = null,
	onSuccess = null
}) {
	let isLoading = true,
		error = null,
		data = null,
		url = `${SERVER_URL}/api/${path}`

	/* ACCESS_TOKEN from LocalStorage */
	const accessToken = new StorageService().getItem(ACCESS_TOKEN_KEY)

	const requestOptions = {
		method,
		headers: {
			'Content-type': 'application/json',
			...headers
		}
	}

	if (accessToken) {
		requestOptions.headers.Authorization = `Bearer ${accessToken}`
	}

	if (body) {
		requestOptions.body = JSON.stringify(body)
	}

	try {
		const response = await fetch(url, requestOptions)
		try {
			if (response.ok) {
				data = await response.json()
				if (onSuccess) {
					onSuccess(data)
				}
			} else {
				let errorMessage = 'Unknown error'
				try {
					const errorData = await response.json()
					errorMessage = extractMessage(errorData)
				} catch {
					errorMessage = 'Failed to parse error response'
				}

				if (onError) {
					onError(errorMessage)
				}
				new NotificationService().show('error', errorMessage)
			}
		} catch (error) {
			const errorMessage = 'Network error or server unavailable'

			if (onError) {
				onError(errorMessage)
			}
			new NotificationService().show('error', errorMessage)
		}
	} finally {
		isLoading = false
	}
}
