import initialState from '../../initialState'

// ACTIONS
export const TOGGLE_DARKTHEME = '[theme] Change Theme'

// ACTION CREATORS
export function changeThemeAction(payload) {
	return { type: TOGGLE_DARKTHEME, payload }
}

// REDUCER
export function themeReducer(state = initialState.appTheme, action) {
	console.log(action)
	switch (action.type) {
		case TOGGLE_DARKTHEME:
			return action.payload
		default:
			return state
	}
}