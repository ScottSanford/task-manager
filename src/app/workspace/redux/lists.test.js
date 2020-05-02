import * as lists from './lists'

describe('Lists Action Creators', () => {

	it('should create an addListAction action', () => {
		// arrange
		const payload = {
			title: 'My new card',
			id: 'abc123',
			priority: 'low',
			dueDate: 'in 6 days'
		}
		const expectedAction = {
			type: lists.ADD_TICKET,
			payload,
		}

		// act
		const action = lists.addTicketAction(payload)

		// assert
		expect(action).toEqual(expectedAction)
	})

	it.skip('should create an deleteCardListAction action', () => {
		// arrange
		const payload = 'abc'
		const expectedAction = {
			type: lists.DELETE_LIST,
			payload,
		}

		// act
		const action = lists.deleteCardListAction(payload)

		// assert
		expect(action).toEqual(expectedAction)
	})
})
