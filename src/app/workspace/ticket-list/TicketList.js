import React, { useState } from 'react'
import './TicketList.css'
import Ticket from '../ticket/Ticket'
import CardComposer from '../card-composer/CardComposer'


const TicketList = ({
	addCardToList,
	deleteCardList,
	cards,
	id,
	removeCardFromList,
	title,
	openModal,
}) => {

	const [isComposing, setIsComposing] = useState(false)
	function handleAddActionClick() {
		setIsComposing(true)
	}

	function handleOnCardEnter(card) {
		setIsComposing(false)
		addCardToList(card)
	}

	function handleDragRemove(card) {
		addCardToList(card)
		removeCardFromList(card)
	}

	function handleDeleteClick() {
		deleteCardList(id)
	}

	return (
		<div className="card-list">
			<div className="card-list__header">
				<div className="card-list__title">{title}</div>
				<div className="fa fa-ellipsis-h" onClick={handleDeleteClick}></div>
			</div>
			<div className="card-list__container">
				<div className="ticket-list__container">
					{/* {cards.map((item, index) => {
						return <Ticket
							key={index.toString()}
							item={item}
							onDragRemove={(item) => handleDragRemove(item)}
							openModal={(item) => openModal(item, id)} />
					})} */}
				</div>
				{isComposing ? <CardComposer onCardEnter={handleOnCardEnter} /> : ''}
				<div className="card-list__add-button" onClick={handleAddActionClick}>Add Card</div>
			</div>
		</div>
	)
}



export default TicketList
