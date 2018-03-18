import * as types from "./ActionTypes"

export function blogsDataFetching() {
	return {
		type: types.BLOG_DATA_LOADING
	}
}

export function blogsDataReceived(data) {
	return {
		type: types.BLOG_DATA_FETCHED,
		data
	}
}

export function blogsDataError(error) {
	return {
		type: types.BLOG_DATA_ERROR,
		error
	}
}
