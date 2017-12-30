import { combineReducers } from 'redux'
import {readingList} from './components/ReadingList/ReadingListReducer'

const rootReducer = combineReducers({
    readingList
})

export default rootReducer
