import { combineReducers } from "redux"
import readingList from "../components/ReadingList/ReadingListReducer"
import homePage from "../components/HomePage/HomePageReducer"

export default combineReducers({
	readingList,
	homePage
})
