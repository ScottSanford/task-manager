import { ADD_LIST, ADD_CARD_TO_LIST, DELETE_LIST } from '../../app/actionTypes'
import initialState from '../../app/initialState'

export default function listReducer(state = initialState.lists, action) {
	switch (action.type) {
		case ADD_LIST:
			return [...state, { ...action.payload }]
		case ADD_CARD_TO_LIST:
			return state.map(list => {
				return list.id === action.meta.id
					? { ...list, cards: [...list.cards, { ...action.payload }] }
					: list
			})
		case DELETE_LIST:
			return state.filter(list => list.id !== action.payload)
		default:
			return state
	}
}
