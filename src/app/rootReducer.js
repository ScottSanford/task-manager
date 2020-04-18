import { combineReducers } from 'redux'
import { listsReducer } from './workspace/redux/lists'
import { usersReducer } from './workspace/redux/users'
import { projectsReducer } from './workspace/redux/projects'

const rootReducer = combineReducers({
	projects: projectsReducer,
	lists: listsReducer,
	users: usersReducer,
})

export default rootReducer