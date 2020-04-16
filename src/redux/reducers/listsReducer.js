import { ADD_LIST, ADD_CARD_TO_LIST, DELETE_LIST } from '../actions/actionTypes'
import initialState from './initialState'

export default function listReducer(state = initialState.lists, action) {
	switch (action.type) {
		case ADD_LIST:
			return [...state, { ...action.list }]
		case ADD_CARD_TO_LIST:
			return state.map(list => {
				return list.id === action.id
					? { ...list, cards: [...list.cards, { ...action.card }] }
					: list
			})
		case DELETE_LIST:
			return state.filter(list => list.id !== action.id)
		default:
			return state
	}
}
