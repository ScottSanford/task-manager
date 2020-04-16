import * as lists from './lists'

describe('Lists Action Creators', () => {

	it('should create an addListAction action', () => {
		// arrange
		const payload = {
			title: 'test',
			id: '123',
			cards: []
		}
		const expectedAction = {
			type: lists.ADD_LIST,
			payload,
		}

		// act
		const action = lists.addListAction(payload)

		// assert
		expect(expectedAction).toEqual(action)
	})

	it('should create an addCardToListAction action', () => {
		// arrange
		const payload = {
			title: 'Clean Laundry',
			id: 'abcdeg'
		}
		const meta = { id: 'asdf' }
		const expectedAction = {
			type: lists.ADD_CARD_TO_LIST,
			payload,
			meta,
		}

		// act
		const action = lists.addCardToListAction(payload, meta)

		// assert
		expect(expectedAction).toEqual(action)
	})
})