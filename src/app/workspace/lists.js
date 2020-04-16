/**
 * I'm playing around with different architecture styles.
 * This file structure uses the "ducks" pattern recommended by the Redux team.
 * https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks
 */
import initialState from '../initialState'

// ACTIONS
export const ADD_LIST = 'workspace/add-list'
export const DELETE_LIST = 'workspace/delete-list'
export const ADD_CARD_TO_LIST = 'list/add-card'

// ACTION CREATORS
export function addCardListAction(payload) {
	return { type: ADD_LIST, payload }
}

export function addCardToListAction(payload, meta) {
	return { type: ADD_CARD_TO_LIST, payload, meta }
}

export function deleteCardListAction(payload) {
	return { type: DELETE_LIST, payload }
}

// REDUCER
export default function reducer(state = initialState.lists, action) {
	switch (action.type) {
		case ADD_LIST:
			return [...state, { ...action.payload }]
		case ADD_CARD_TO_LIST:
			return addCardToList(state, action)
		case DELETE_LIST:
			return state.filter(list => list.id !== action.payload)
		default:
			return state
	}
}

function addCardToList(state, action) {
	return state.map(list => {
		return list.id === action.meta.id
			? { ...list, cards: [...list.cards, { ...action.payload }] }
			: list
	})
}
