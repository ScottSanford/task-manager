import initialState from '../../initialState'
import { ADD_TICKET } from './lists'

// REDUCER
export function ticketsReducer(state = initialState.tickets, action) {
	switch (action.type) {
		case ADD_TICKET:
			return addTicket(state, action)
		default:
			return state
	}
}

function addTicket(state, action) {
	return {
		...state,
		[action.payload.id]: action.payload
	}
}