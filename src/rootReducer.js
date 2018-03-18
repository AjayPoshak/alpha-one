import { combineReducers } from "redux"
import readingList from "./components/ReadingList/ReadingListReducer"
import homePage from "./components/HomePage/HomePageReducer"

const rootReducer = combineReducers({
	readingList,
	homePage
})

export default rootReducer
