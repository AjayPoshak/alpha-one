import React from "react"
import { StaticRouter } from "react-router"
import { renderToString } from "react-dom/server"
import { createStore } from "redux"
import { Provider } from "react-redux"

import App from "../routing"
import rootReducer from "../rootReducer"
import { renderFullPage } from "../utils/helpers"

async function hydrateState(ctx, next) {
	console.log("hydrating state======>", ctx.hydrateState)
	const store = createStore(rootReducer, ctx.hydrateState),
		preloadedState = store.getState(),
		context = {}

	const html = renderToString(
		<Provider store={store}>
			<StaticRouter location={ctx.request.url} context={context}>
				<App />
			</StaticRouter>
		</Provider>
	)
	if (context.url) {
		// Handle Redirection
		ctx.response.status(301, { Location: context.url })
	} else {
		ctx.body = renderFullPage(html, preloadedState)
	}
	await next()
}
export default hydrateState
