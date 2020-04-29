import React from 'react'
import Priority from './Priority'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const TicketWrapper = styled.div`
	background: ${props => (props.isDragging ? 'var(--color-neutral-9)' : 'var(--color-white)')};
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
`

const TicketTitle = styled.div`
	grid-column: 1 / 3;
	grid-row: 2;
	font-weight: 700;
	line-height: 1.2;
	color: var(--color-neutral-1);
	font-size: 16px;
	margin-top: 1rem;
`

const TicketDueDate = styled.div`
	grid-row: 3;
    grid-column: 1;
    display: flex;
    align-items: baseline;
    color: var(--color-neutral-4);
    font-weight: 600;
    margin-top: 2rem;
	
	& span {
		margin-right: 5px;
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
