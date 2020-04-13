import initialState from './initialState'

export default function listReducer(state = initialState.lists, action) {
	switch (action.type) {
		case 'ADD_LIST':
			return [...state, { ...action.list }]
		default:
			return state
	}
}
