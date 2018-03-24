import loadData from "../LoadData"
import hydrateState from "../HydrateState"
import { list } from "../api/controllers/homePgController"
import readingList from "../api/controllers/readingController"

module.exports = function routes(router) {
	router.get("/books", loadData, hydrateState)
	router.get("/home", loadData, hydrateState)
	router.get("/api/home", list)
	router.get("/api/reading", readingList)
}
