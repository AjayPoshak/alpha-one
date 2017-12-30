import * as types from './ActionTypes'

export function readingList(state = [], action) {
	switch(action.type){
		case types.FETCH_READING_LIST:
			return { ...state, isLoading: true, isError: false }
		
		case types.RECEIVE_READING_LIST:
			return { ...state, isLoading: false, isError: false, data: action.data }

		case types.ERROR_READING_LIST:
			return { ...state, isLoading: false, isError: true }

		default: 
			return state;
	}
}
