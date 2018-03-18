import * as actions from "./Actions"
import { READING_LIST_URL } from "../../globals/constants"

export function fetchReadingList() {
	return dispatch => {
		fetch(READING_LIST_URL)
			.then(response => response.json())
			.then(json => {
				dispatch(actions.readingListReceive(json))
			})
			.catch(err => dispatch(actions.readingListError(err)))
	}
}

export function shouldFetchReadingList() {
	return (dispatch, getState) => {
		const state = getState(),
			{ readingList } = state

		if (readingList && readingList.data && Object.keys(readingList.data).length) {
			return false
		}

		dispatch(fetchReadingList())
		return null
	}
}
