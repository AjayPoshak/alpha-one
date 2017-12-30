import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './routing'
import configureStore from './store'
import { BrowserRouter } from 'react-router-dom'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState); //Initial State can be passed here
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
