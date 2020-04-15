import React from 'react'
import CardList from './CardList'
import { mount } from 'enzyme'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

function render(args) {
	const defaultProps = {
		title: '',
		cardList: [],
		deleteCardList: () => { }
	}

	const props = { ...defaultProps, ...args }
	return mount(
		<DndProvider backend={Backend}>
			<CardList {...props} />
		</DndProvider>
	)
}

describe('CardList Component', () => {

	it('should display the correct title passed through props', () => {
		const wrapper = render({ title: 'Chicago Bears' })
		expect(wrapper.find('.card-list__title').text()).toEqual('Chicago Bears')
	})

	it('should contain a list of action items', () => {
		const wrapper = render({ cardList: [{}, {}, {}] })
		expect(wrapper.find('.card-list__container').children()).toHaveLength(3)
	})

	it('should add an action item to the list', () => {
		const mockCallBack = jest.fn()
		const wrapper = render({ deleteCardList: mockCallBack })
		wrapper.find('.fa-trash').simulate('click')
		expect(mockCallBack).toHaveBeenCalled()
	})
})
