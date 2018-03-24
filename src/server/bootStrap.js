/**
 * This file contains all bootstrapping variables that would be initialized whenever
 *  server starts
 */
const MongoClient = require("mongodb").MongoClient // eslint-disable-line

// export async function connect() {
module.exports.connect = async function connection() {
	const client = await MongoClient.connect(process.env.MONGO_URL)
	try {
		global.mongoDB = client.db(process.env.DB)
		global.blogsCollection = global.mongoDB.collection("blog")
		global.readingListCollection = global.mongoDB.collection("readingList")
		console.log("Database connection has been established successfully")
	} catch (e) {
		console.error(e)
	}
}
