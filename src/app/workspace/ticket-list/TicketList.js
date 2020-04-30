import React, { useState } from 'react'
import Ticket from '../ticket/Ticket'
import CardComposer from '../card-composer/CardComposer'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import TicketListHeader from './TicketListHeader'

const TicketListStyled = styled.div`
	border-radius: ${({ theme }) => theme.bRadiusSm};
	height: fit-content;
`

const ListContainer = styled.div`
	background: ${({ isDraggingOver, theme }) => isDraggingOver ? theme.colorNeutral7 : theme.colorWhite};
	border-radius: ${({ theme }) => theme.bRadiusSm};
	min-height: 5rem;
	padding: 1rem;
`

const AddButton = styled.div`
	align-items: center;
	border-radius: ${({ theme }) => theme.bRadiusSm};
	color: ${({ theme }) => theme.colorNeutral6};
	display: flex;
	height: 4rem;
	justify-content: center;
	margin-top: 1rem;
	font-size: 1.4rem;
	font-weight: 600;
	transition: background 0.25s, color 0.25s;

	&:hover {
		background: ${({ theme }) => theme.colorNeutral10};
		color: ${({ theme }) => theme.colorNeutral2};
	}
`

const TicketList = ({
	column,
	addTicketToList,
	deleteCardList,
	tickets,
	id,
	openModal,
}) => {

	const [isComposing, setIsComposing] = useState(false)

	const handleAddActionClick = () => setIsComposing(true)
	const handleDeleteClick = () => deleteCardList(id)
	const handleOnTicketEnter = aTicket => {
		setIsComposing(false)
		addTicketToList(aTicket)
	}

	return (
		<Droppable droppableId={column.id}>
			{(provided, snapshot) => (
				<TicketListStyled ref={provided.innerRef} {...provided.droppableProps}>
					<TicketListHeader title={column.title} handleDeleteClick={handleDeleteClick} />
					<ListContainer isDraggingOver={snapshot.isDraggingOver}>
						{tickets.map((item, index) => {
							return <Ticket
								key={item.id}
								item={item}
								index={index}
								openModal={(item) => openModal(item, id)} />
						})}
						{provided.placeholder}
						{isComposing ? <CardComposer onCardEnter={handleOnTicketEnter} /> : ''}
						<AddButton onClick={handleAddActionClick}>Add Card</AddButton>
					</ListContainer>
				</TicketListStyled>
			)}
		</Droppable>
	)
}



export default TicketList
