import React from 'react'
import '@testing-library/jest-dom'
import TicketList from './TicketList'
import { render, fireEvent, wait } from '@testing-library/react'
import { DragDropContext } from 'react-beautiful-dnd'
import { verticalDrag } from 'react-beautiful-dnd-tester'

function renderComponent(args) {
	const defaultProps = {
		column: {
			id: 'dabears'
		},
		tickets: [],
	}

	const props = { ...defaultProps, ...args }
	return render(
		<DragDropContext>
			<TicketList {...props} />
		</DragDropContext>
	)
}

describe('<TicketList />', () => {

	test('should display the correct title passed through props', () => {
		const { getByText } = renderComponent({ column: { title: 'Chicago Bears' } })
		expect(getByText('Chicago Bears')).toBeInTheDocument()
	})

	test('should contain a list of action items', () => {
		const expectedTickets = [{ id: 'test1', title: 'test 1' }, { id: 'test2', title: 'test 2' }]
		const { getByTestId } = renderComponent({ tickets: expectedTickets })
		const ticketListContainer = getByTestId('ticketListContainer')
		expect(ticketListContainer.children.length).toBe(3)
	})

	test('should show the card composer when the add ticket button is clicked', () => {
		const expectedTickets = [{ id: 'test1', title: 'test 1' }, { id: 'test2', title: 'test 2' }]
		const { getByTestId, getByPlaceholderText } = renderComponent({ tickets: expectedTickets })
		const addButton = getByTestId('addTicketButton')
		fireEvent.click(addButton)
		expect(getByPlaceholderText('What needs to be done?')).toBeVisible()
	})

	test('should reorder the tickets if the user drags a ticket to a new position', async () => {
		// Arrange
		const expectedTickets = [{ id: 'test1', title: 'test 1' }, { id: 'test2', title: 'test 2' }]
		const { getAllByTestId } = renderComponent({ tickets: expectedTickets })
		const [first] = getAllByTestId('ticket')

		// Act
		// click spacebar to grab the item
		fireEvent.keyDown(first, {
			key: 'Space',
			keyCode: 32,
			which: 32,
		});

		await wait()

		// down arrow to move lower in the list
		fireEvent.keyDown(first, {
			key: 'ArrowDown',
			keyCode: 40,
			which: 40,
		})

		await wait()

		// space bar to drop the item
		fireEvent.keyDown(first, {
			key: 'Space',
			keyCode: 32,
			which: 32,
		})

		await wait()

		// Assert
		const [newFirst] = getAllByTestId('ticket')
		expect(newFirst.textContent).toBe(first.textContent)
	})
})
