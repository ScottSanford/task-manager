import { combineReducers } from 'redux'
import listReducer from './listsReducer'

const rootReducer = combineReducers({
	lists: listReducer
})

export default rootReducer