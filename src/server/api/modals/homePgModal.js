class HomePgModal {
	static list() {
		return global.blogsCollection.find().toArray()
	}
}

export default HomePgModal
