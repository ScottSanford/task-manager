import React, { useState } from 'react'
import './CardList.css'
import Ticket from '../ticket/Ticket'
import CardComposer from '../card-composer/CardComposer'
import { DropTarget } from 'react-dnd'
import { useDrop } from 'react-dnd'


const CardList = ({
	addCardToList,
	deleteCardList,
	cards,
	id,
	removeCardFromList,
	title,
}) => {

	const [isComposing, setIsComposing] = useState(false)
	const [, drop] = useDrop({
		accept: 'DRAG_CARD',
		drop(item) {
			addCardToList(item)
			console.log(item)
		}
	})

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
		<div ref={drop} className="card-list">
			<div className="card-list__header">
				<div className="card-list__title">{title}</div>
				<div className="fa fa-ellipsis-h" onClick={handleDeleteClick}></div>
			</div>
			<div className="card-list__container">
				{cards.map((item, index) => {
					return <Ticket key={index.toString()} item={item} onDragRemove={(item) => handleDragRemove(item)} />
				})}
				{isComposing ? <CardComposer onCardEnter={handleOnCardEnter} /> : ''}
			</div>
			{/* <div className="card-list__add-btn" onClick={(card) => handleAddActionClick(card)}>
				<span className="fa fa-plus"></span> Add a card
			</div> */}
		</div>
	)
}



export default DropTarget('DROP_TARGET', {}, (connect) => ({
	connectDropTarget: connect.dropTarget()
}))(CardList)
