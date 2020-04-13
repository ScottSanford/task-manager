import { ADD_LIST } from './actionTypes'

export function addCardListAction(list) {
	return { type: ADD_LIST, list }
}
