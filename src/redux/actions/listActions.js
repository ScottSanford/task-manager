import { ADD_LIST, DELETE_LIST } from './actionTypes'

export function addCardListAction(list) {
	return { type: ADD_LIST, list }
}

export function deleteCardListAction(id) {
	return { type: DELETE_LIST, id }
}
