import React, { useState } from 'react'
import './TicketList.css'
import Ticket from '../ticket/Ticket'
import CardComposer from '../card-composer/CardComposer'
import { Droppable } from 'react-beautiful-dnd'

const TicketList = ({
	column,
	addTicketToList,
	deleteCardList,
	tickets,
	id,
	openModal,
}) => {

	const [isComposing, setIsComposing] = useState(false)
	function handleAddActionClick() {
		setIsComposing(true)
	}

	const handleOnTicketEnter = aTicket => {
		setIsComposing(false)
		addTicketToList(aTicket)
	}

	function handleDeleteClick() {
		deleteCardList(id)
	}

	const cardListStyles = snapshot => {
		return {
			backgroundColor: snapshot.isDraggingOver ? 'var(--color-neutral-7)' : '',
			transition: 'backgroundColor 0.2 ease'
		}
	}

	return (
		<Droppable droppableId={column.id}>
			{(provided, snapshot) => (
				<div ref={provided.innerRef} {...provided.droppableProps} className="card-list">
					<div className="card-list__header">
						<div className="card-list__title">{column.title}</div>
						<div className="fa fa-ellipsis-h" onClick={handleDeleteClick}></div>
					</div>
					<div className="card-list__container" style={cardListStyles(snapshot)}>
						<div className="ticket-list__container">
							{tickets.map((item, index) => {
								return <Ticket
									key={item.id}
									item={item}
									index={index}
									openModal={(item) => openModal(item, id)} />
							})}
						</div>
						{provided.placeholder}
						{isComposing ? <CardComposer onCardEnter={handleOnTicketEnter} /> : ''}
						<div className="card-list__add-button" onClick={handleAddActionClick}>Add Card</div>
					</div>
				</div>
			)}
		</Droppable>
	)
}



export default TicketList
