import { makeAPICall } from "../utils/helpers"
import { READING_LIST_URL, BLOGS_LIST_URL } from "../globals/constants"

async function loadData(ctx, next) {
	switch (ctx.request.url) {
		case "/books":
			const readingList = {}
			readingList.data = await makeAPICall(READING_LIST_URL)
			if (readingList) {
				ctx.hydrateState = { ...ctx.hydrateState, readingList }
			}
			await next()
			break

		case "/home":
			const homePage = {}
			homePage.blogs = await makeAPICall(BLOGS_LIST_URL)
			ctx.hydrateState = { ...ctx.hydrateState, homePage }
			await next()
			break

		default: {
			await next()
			break
		}
	}
}
export default loadData
