// All redux data store related initialization or store state hydration
// logic must be written here.

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'

const configureStore = (preloadedState) => {
	const store = createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(thunk),
		// eslint-disable-next-line
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
}

export default configureStore
