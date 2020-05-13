import React from 'react'
import Priority from './Priority'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import cssVar from '../../theme/constants'
import theme from 'styled-theming'

const color = theme('mode', {
	'light': cssVar.colorNeutral4,
	'dark': cssVar.colorNeutral9,
})

const TicketWrapper = styled.div`
	background: ${({ isDragging, localTheme }) => (
		(isDragging && localTheme === 'light')
			? cssVar.colorNeutral9
			: (!isDragging && localTheme === 'light')
				? cssVar.colorWhite
				: (isDragging && localTheme === 'dark')
					? cssVar.colorNeutral2
					: (!isDragging && localTheme === 'dark')
						? cssVar.colorNeutral4
						: cssVar.colorWhite
	)};
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	color: hsl(212, 18%, 35%);
	display: grid;
	font-size: 1.2rem;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, auto);
	height: fit-content;
	padding: 1.5rem 1rem;

	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}

	@media only screen and (max-width: 700px) {
		grid-template: auto 1fr / 1fr 3fr; 
	}

	@media only screen and (max-width: 500px) {
		grid-template: auto / 3fr 5rem; 
	}
`

const TicketTitle = styled.div`
	grid-column: 1 / 3;
	grid-row: 2;
	font-weight: 700;
	line-height: 1.2;
	color: ${color};
	font-size: 16px;
	margin-top: 1rem;

	@media only screen and (max-width: 500px) {
		grid-column: 1 / 1;
		grid-row: 1;
		margin-top: 0;
	}
`

const TicketDueDate = styled.div`
	grid-row: 3;
    grid-column: 1 / -1;
    display: flex;
    align-items: baseline;
    color: ${color};
    font-weight: 600;
    margin-top: 2rem;
	
	& span {
		margin-right: 5px;
	}

	@media only screen and (max-width: 700px) {
		align-self: flex-end;
		grid-row: 2 / -1;
		grid-column: 3 / -1;
		justify-self: center;
		margin-top: 0;
	}

	@media only screen and (max-width: 500px) {
		display: none;
	}
`

const Ticket = ({ item, index, openModal }) => {


	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided, snapshot) => {

				return (
					<TicketWrapper
						ref={provided.innerRef}
						{...provided.dragHandleProps}
						{...provided.draggableProps}
						isDragging={snapshot.isDragging}
						onClick={() => openModal(item)}
						localTheme={window.localStorage.getItem('appTheme')}
						data-testid="ticket">
						<Priority level={item.priority} />
						<TicketTitle>{item.title}</TicketTitle>
						<TicketDueDate>
							<span className="fa fa-clock"></span>Due {item.dueDate}
						</TicketDueDate>
					</TicketWrapper>
				)
			}}
		</Draggable>
	)
}

export default Ticket
