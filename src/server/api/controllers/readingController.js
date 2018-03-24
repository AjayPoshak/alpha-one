import Reading from "../modals/readingListModal"

export default async function readingList(ctx) {
	ctx.body = await Reading.getList()
}
