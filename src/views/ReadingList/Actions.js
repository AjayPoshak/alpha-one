import * as actions from './ActionTypes'

export function readingListFetching() {
	return {
		type: actions.FETCH_READING_LIST,
		isLoading: true
	}
}

export function readingListReceive(data) {
	return {
		type: actions.RECEIVE_READING_LIST,
		data
	}
}

export function readingListError() {
	return {
		type: actions.ERROR_READING_LIST,
		isError: true
	}
}
