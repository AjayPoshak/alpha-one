require("babel-polyfill")
const koa = require("koa")

const app = new koa()
require("dotenv").config({ path: "./dev.env" })

const Router = require("koa-router"),
	router = new Router()

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
		console.error(err)
	}
})

require("./serverRoutes/index")(router)

app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT)
