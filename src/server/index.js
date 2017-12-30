import path from 'path'
import http from 'http'
import Express from 'express'
import React from 'react'
import request from 'request-promise-native'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import rootReducer from '../rootReducer'
import ReadingList from '../components/ReadingList/index'
const router = require('Express').Router()
import App from '../routing'
import {READING_LIST_URL} from '../globals/constants'

const app = Express();
const port = 3000;

//Serve static files
app.use('build/server', Express.static('build/server'));

//app.use(handleRender)

app.get('*', (req, res) => {
	const context = {},
		options = {
			uri: READING_LIST_URL,
			method: 'GET'
		}

	let hydrateState = {}
	request(options)
		.then(response => {
			hydrateState = {
				readingList: {
					data : JSON.parse(response)
				}
			}

			const store = createStore(rootReducer, hydrateState),
				preloadedState = store.getState();

			const html = renderToString(
				<Provider store={store}>
					<StaticRouter location={req.url} context={context}>
						<App />
					</StaticRouter>
				</Provider>
			)

			if(context.url) {
				// Handle Redirection
				res.writeHead(301,{ Location: context.url })
				res.end()
			} else {

				handleRender(req, res, html, preloadedState)
			}
		})
		.catch(err => console.log('error', err))
})


function handleRender(req, res, html, preloadedState) {

	//Send the rendered page back to client
	res.send(renderFullPage(html, preloadedState));
	res.end()
	
}

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve('src/index.html'))
})

function renderFullPage(html, preloadedState) {
	return `
		<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Demo</title>
	</head>
	<body>
		<div id="root">${html}</div>
	</body>
	<script>
	window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
	</script>
	<script src="http://localhost:8080/build/client/app.bundle.js"></script>
</html>
`
}

app.listen(process.env.NODE_PORT || port, () => {
	console.log(`Started listneing on ${port}`);
});
