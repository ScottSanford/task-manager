import React from 'react'
import Priority from './Priority'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const TicketWrapper = styled.div`
	background: ${({ isDragging, theme }) => (isDragging ? theme.colorNeutral9 : theme.colorWhite)};
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
`

const TicketTitle = styled.div`
	grid-column: 1 / 3;
	grid-row: 2;
	font-weight: 700;
	line-height: 1.2;
	color: ${({ theme }) => theme.colorNeutral1};
	font-size: 16px;
	margin-top: 1rem;
`

const TicketDueDate = styled.div`
	grid-row: 3;
    grid-column: 1 / -1;
    display: flex;
    align-items: baseline;
    color: ${({ theme }) => theme.colorNeutral1};
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
						onClick={() => openModal(item)}>
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
