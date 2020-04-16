import React, { useState } from 'react'
import './CardList.css'
import ActionItem from '../action-item/ActionItem'
import CardComposer from '../card-composer/CardComposer'
import { DropTarget } from 'react-dnd'
import { useDrop } from 'react-dnd'


const CardList = ({
	addCardToList,
	deleteCardList,
	cards,
	id,
	title,
}) => {

	const [isComposing, setIsComposing] = useState(false)
	const [, drop] = useDrop({
		accept: 'DRAG_CARD',
		drop(item) {
			addCardToList({ title: item.title })
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

	function handleDragRemove(removedItem) {
		const newList = cards.filter(item => item.title !== removedItem.title)
		addCardToList(newList)
	}

	function handleDeleteClick() {
		deleteCardList(id)
	}

	return (
		<div ref={drop} className="card-list">
			<div className="card-list__header">
				<div className="card-list__title">{title}</div>
				<div className="fa fa-trash" onClick={handleDeleteClick}></div>
			</div>
			<div className="card-list__container">
				{cards.map((item, index) => {
					return <ActionItem key={index.toString()} item={item} onDragRemove={(item) => handleDragRemove(item)} />
				})}
				{isComposing ? <CardComposer onCardEnter={handleOnCardEnter} /> : ''}
			</div>
			<div className="card-list__add-btn" onClick={(card) => handleAddActionClick(card)}>
				<span className="fa fa-plus"></span> Add a card
			</div>
		</div>
	)
}



export default DropTarget('DROP_TARGET', {}, (connect) => ({
	connectDropTarget: connect.dropTarget()
}))(CardList)
