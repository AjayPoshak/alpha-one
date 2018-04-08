import { combineReducers } from "redux"
import readingList from "../views/ReadingList/ReadingListReducer"
import homePage from "../views/HomePage/HomePageReducer"

export default combineReducers({
	readingList,
	homePage
})
