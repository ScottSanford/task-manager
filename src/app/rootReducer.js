import { combineReducers } from 'redux'
import listReducer from './workspace/listsReducer'

const rootReducer = combineReducers({
	lists: listReducer
})

export default rootReducer