import path from "path"
import Express from "express"
import React from "react"
import request from "request-promise-native"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router"
import rootReducer from "../rootReducer"
import App from "../routing"
import { READING_LIST_URL } from "../globals/constants"
import { handleRender } from "./helpers"

const app = Express()
const port = 3000

// Serve static files
app.use("build/server", Express.static("build/server"))

app.get("*", (req, res) => {
	const context = {},
		options = {
			uri: READING_LIST_URL,
			method: "GET"
		}

	let hydrateState = {}
	request(options)
		.then(response => {
			hydrateState = {
				readingList: {
					data: JSON.parse(response)
				}
			}

			const store = createStore(rootReducer, hydrateState),
				preloadedState = store.getState()

			const html = renderToString(
				<Provider store={store}>
					<StaticRouter location={req.url} context={context}>
						<App />
					</StaticRouter>
				</Provider>
			)

			if (context.url) {
				// Handle Redirection
				res.writeHead(301, { Location: context.url })
				res.end()
			} else {
				handleRender(req, res, html, preloadedState)
			}
		})
		.catch(err => console.log("error", err))
})

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get("*", (request, response) => {
	response.sendFile(path.resolve("src/index.html"))
})

app.listen(process.env.NODE_PORT || port, () => {
	console.log(`Started listneing on ${port}`)
})
