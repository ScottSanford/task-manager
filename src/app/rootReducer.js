import { combineReducers } from 'redux'
import { reducer } from './workspace/lists'
import { usersReducer } from './workspace/users'

const rootReducer = combineReducers({
	lists: reducer,
	users: usersReducer,
})

export default rootReducer