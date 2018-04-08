import * as types from "./ActionTypes"

const initialState = {
	isLoading: false,
	isError: false,
	blogs: []
}
export default function homePage(state = initialState, action) {
	switch (action.type) {
		case types.BLOG_DATA_LOADING: {
			return { ...state, isLoading: true }
		}

		case types.BLOG_DATA_FETCHED: {
			return { ...state, isLoading: false, blogs: action.data, isError: false }
		}

		case types.BLOG_DATA_ERROR: {
			return { ...state, isLoading: false, isError: true }
		}

		default:
			return state
	}
}
