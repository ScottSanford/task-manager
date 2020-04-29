import initialState from '../../initialState'
import { ADD_TICKET } from './lists'

export const UPDATE_TICKET = '[ticket] Update ticket'

// Action Creators
export function updateTicketAction(payload) {
	return { type: UPDATE_TICKET, payload }
}

// REDUCER
export function ticketsReducer(state = initialState.tickets, action) {
	switch (action.type) {
		case ADD_TICKET:
			return addTicket(state, action)
		case UPDATE_TICKET:
			return updateTicket(state, action)
		default:
			return state
	}
}

function addTicket(state, action) {
	return updateTicketInList(state, action)
}

function updateTicket(state, action) {
	return updateTicketInList(state, action)
}

function updateTicketInList(state, action) {
	return {
		...state,
		[action.payload.id]: action.payload
	}
}