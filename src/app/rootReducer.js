import { combineReducers } from 'redux'
import { listsReducer } from './workspace/redux/lists'
import { usersReducer } from './workspace/redux/users'
import { projectsReducer } from './workspace/redux/projects'
import { listOrderReducer } from './workspace/redux/listOrder'
import { ticketsReducer } from './workspace/redux/tickets'
import { themeReducer } from './workspace/redux/theme'

const rootReducer = combineReducers({
	projects: projectsReducer,
	lists: listsReducer,
	listOrder: listOrderReducer,
	users: usersReducer,
	tickets: ticketsReducer,
	theme: themeReducer
})

export default rootReducer