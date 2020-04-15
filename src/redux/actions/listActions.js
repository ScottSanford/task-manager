import { ADD_LIST, ADD_CARD_TO_LIST, DELETE_LIST } from './actionTypes'

export function addCardListAction(list) {
	return { type: ADD_LIST, list }
}

export function addCardToListAction(card, id) {
	return { type: ADD_CARD_TO_LIST, card, id }
}

export function deleteCardListAction(id) {
	return { type: DELETE_LIST, id }
}
