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
		expect(action).toEqual(expectedAction)
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
		expect(action).toEqual(expectedAction)
	})

	it('should create an deleteCardListAction action', () => {
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

describe('Lists Reducer', () => {

	it('should add a list when passed ADD_LIST', () => {
		// arrange
		const initialState = {
			lists: [
				{ title: 'one', id: '1', cards: [] },
				{ title: 'two', id: '2', cards: [] },
				{ title: 'three', id: '3', cards: [] },
			]
		}
		const newList = { title: 'four', id: '4', cards: [] }
		const action = lists.addListAction(newList)
		// action
		const newState = lists.listsReducer(initialState.lists, action)

		// assert
		expect(newState).toHaveLength(4)
	})
})