// All redux data store related initialization or store state hydration
// logic must be written here.

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const configureStore = (preloadedState) => {
    const store = createStore(
			rootReducer,
			preloadedState,
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
    return store;
}

export default configureStore
