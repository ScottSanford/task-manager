/**
 * I'm playing around with different architecture styles.
 * This file structure uses the "ducks" pattern recommended by the Redux team.
 * https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks
 */
import initialState from '../../initialState'

// ACTIONS
export const ADD_LIST = '[workspace] Add List'
export const DELETE_LIST = '[workspace] Delete List'
export const DELETE_CARD_FROM_LIST = '[list] Delete Card'
export const REORDER_TICKET_IN_LIST = '[list] Reorder Ticket in List'

// ACTION CREATORS
export function addListAction(payload) {
	return { type: ADD_LIST, payload }
}

export function deleteCardListAction(payload) {
	return { type: DELETE_LIST, payload }
}

export function deleteCardFromListAction(payload, meta) {
	return { type: DELETE_CARD_FROM_LIST, payload, meta }
}

export function reorderListAction(payload) {
	return { type: REORDER_TICKET_IN_LIST, payload }
}

// REDUCER
export function listsReducer(state = initialState.lists, action) {
	switch (action.type) {
		case ADD_LIST:
			return [...state, { ...action.payload }]
		case DELETE_LIST:
			return state.filter(list => list.id !== action.payload)
		case DELETE_CARD_FROM_LIST:
			return deleteCardFromList(state, action)
		case REORDER_TICKET_IN_LIST:
			return reorderList(state, action)
		default:
			return state
	}
}

function deleteCardFromList(state, action) {
	// 
}

function reorderList(state, action) {
	const { source, destination, draggableId } = action.payload
	const start = state[source.droppableId]
	const finish = state[destination.droppableId]

	if (start === finish) {
		const ticketIdsArray = [...start.ticketIds]
		ticketIdsArray.splice(source.index, 1)
		ticketIdsArray.splice(destination.index, 0, draggableId)

		const newList = { ...start, ticketIds: ticketIdsArray }
		return { ...state, [newList.id]: newList }
	}

	return moveTicketToNewList(state, action, { start, finish })
}

function moveTicketToNewList(state, action, { start, finish }) {

	const { source, destination, draggableId } = action.payload
	const startTicketIds = [...start.ticketIds]
	startTicketIds.splice(source.index, 1)
	const newStart = { ...start, ticketIds: startTicketIds }

	const finishedTicketIds = [...finish.ticketIds]
	finishedTicketIds.splice(destination.index, 0, draggableId)
	const newFinish = { ...finish, ticketIds: finishedTicketIds }

	return {
		...state,
		[newStart.id]: newStart,
		[newFinish.id]: newFinish,
	}
}
