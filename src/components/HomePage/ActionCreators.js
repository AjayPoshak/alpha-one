import { BLOGS_LIST_URL } from "../../globals/constants"
import * as actions from "./Actions"

export function fetchBlogsList() {
	return dispatch => {
		fetch(BLOGS_LIST_URL)
			.then(response => response.json())
			.then(result => {
				dispatch(actions.blogsDataReceived(result))
			})
			.catch(err => dispatch(actions.blogsDataError(err)))
	}
}

export function shouldFetchBlogsList() {
	return (dispatch, getState) => {
		const { state } = getState(),
			{ homePage } = state
		if (homePage && homePage.data && homePage.data.length > 0) {
			fetchBlogsList()
		}
	}
}
