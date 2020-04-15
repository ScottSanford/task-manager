import { ADD_LIST, DELETE_LIST } from '../actions/actionTypes'
import initialState from './initialState'

export default function listReducer(state = initialState.lists, action) {
	switch (action.type) {
		case ADD_LIST:
			return [...state, { ...action.list }]
		case DELETE_LIST:
			return state.filter(list => list.id !== action.id)
		default:
			return state
	}
}
