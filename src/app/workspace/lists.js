/**
 * I'm playing around with different architecture styles.
 * This file structure uses the "ducks" pattern recommended by the Redux team.
 * https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks
 */
import initialState from '../initialState'

// ACTIONS
export const ADD_LIST = '[workspace] Add List'
export const DELETE_LIST = '[workspace] Delete List'
export const ADD_CARD_TO_LIST = '[list] Add Card'
export const DELETE_CARD_FROM_LIST = '[list] Delete Card'

// ACTION CREATORS
export function addListAction(payload) {
	return { type: ADD_LIST, payload }
}

export function addCardToListAction(payload, meta) {
	return { type: ADD_CARD_TO_LIST, payload, meta }
}

export function deleteCardListAction(payload) {
	return { type: DELETE_LIST, payload }
}

export function deleteCardFromListAction(payload, meta) {
	return { type: DELETE_CARD_FROM_LIST, payload, meta }
}

// REDUCER
export function reducer(state = initialState.lists, action) {
	switch (action.type) {
		case ADD_LIST:
			return [...state, { ...action.payload }]
		case ADD_CARD_TO_LIST:
			return addCardToList(state, action)
		case DELETE_LIST:
			return state.filter(list => list.id !== action.payload)
		case DELETE_CARD_FROM_LIST:
			return deleteCardFromList(state, action)
		default:
			return state
	}
}

// Reducer Logic Extracted
function addCardToList(state, action) {
	return state.map(list => {
		return list.id === action.meta.id
			? { ...list, cards: [...list.cards, { ...action.payload }] }
			: list
	})
}

function deleteCardFromList(state, action) {
	return state.map(list => {
		return list.id === action.meta.id
			? {
				...list,
				cards: list.cards.filter(card => card.title !== action.payload.title)
			}
			: list
	})
}
