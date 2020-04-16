import { ADD_LIST, ADD_CARD_TO_LIST, DELETE_LIST } from './actionTypes'

export function addCardListAction(payload) {
	return { type: ADD_LIST, payload }
}

export function addCardToListAction(payload, meta) {
	return { type: ADD_CARD_TO_LIST, payload, meta }
}

export function deleteCardListAction(payload) {
	return { type: DELETE_LIST, payload }
}
