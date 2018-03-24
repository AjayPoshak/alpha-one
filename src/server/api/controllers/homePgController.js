import HomePgModal from "../modals/homePgModal"

// const homeModal = new HomePgModal()

export async function list(ctx) {
	ctx.body = await HomePgModal.list()
}

export async function save(ctx) {
	const bookObj = ctx.request.body
	ctx.body = await HomePgModal.save(bookObj)
}
