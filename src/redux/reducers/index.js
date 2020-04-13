import { combineReducers } from 'redux'
import lists from './courseReducer'

const rootReducer = combineReducers({
	lists
})

export default rootReducer