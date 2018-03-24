class ReadingListModal {
	static getList() {
		return global.readingListCollection.find().toArray()
	}
}

export default ReadingListModal
