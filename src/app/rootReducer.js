import { combineReducers } from 'redux'
import { reducer } from './workspace/lists'

const rootReducer = combineReducers({
	lists: reducer
})

export default rootReducer