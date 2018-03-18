import request from "request-promise-native"
import { makeAPICall } from "../utils/helpers"
import { READING_LIST_URL } from "../globals/constants"

async function loadData(ctx, next) {
	const readingList = {}
	switch (ctx.request.url) {
		case "/reading":
			readingList.data = await makeAPICall(request, READING_LIST_URL)

			if (readingList) {
				ctx.hydrateState = { ...ctx.hydrateState, readingList }
			}
			await next()
			break

		case "/home":
			console.log("Trying to access home URL")
			ctx.hydrateState = { ...ctx.hydrateState }
			await next()
			break

		default: {
			await next()
			break
		}
	}
}
export default loadData
