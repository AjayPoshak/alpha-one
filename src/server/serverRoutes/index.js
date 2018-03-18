import loadData from "../LoadData"
import hydrateState from "../HydrateState"

module.exports = function routes(router) {
	router.get("/reading", loadData, hydrateState)
	router.get("/home", loadData, hydrateState)
}
