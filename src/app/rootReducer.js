import { combineReducers } from 'redux'
import listReducer from '../components/workspace/listsReducer'

const rootReducer = combineReducers({
	lists: listReducer
})

export default rootReducer