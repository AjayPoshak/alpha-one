require("babel-polyfill")
// Imports
const Koa = require("koa"),
	bodyParser = require("koa-bodyparser"),
	Router = require("koa-router"),
	db = require("./bootStrap")

require("dotenv").config({ path: "./dev.env" })

const app = new Koa(),
	router = new Router()

db.connect()

app.use(bodyParser())
app.use(async (ctx, next) => {
	const start = Date.now()
	await next()
	const end = Date.now()
	console.log(`${ctx.method} ${ctx.url} time taken ${end - start}`)
})

app.use(async (ctx, next) => {
	try {
		await next()
	} catch (err) {
		console.error(`Global error handling ${err}`)
	}
})

require("./serverRoutes/index")(router)

app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT)
