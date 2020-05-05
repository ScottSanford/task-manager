import initialState from '../../initialState'

// ACTIONS
export const CHANGE_THEME = '[theme] Change Theme'

// ACTION CREATORS
export function changeThemeAction(payload) {
	return { type: CHANGE_THEME, payload }
}

// REDUCER
export function themeReducer(state = initialState.theme, action) {
	console.log(action)
	switch (action.type) {
		case CHANGE_THEME:
			return action.payload
		default:
			return state
	}
}