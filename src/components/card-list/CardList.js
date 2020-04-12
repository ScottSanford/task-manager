import React, { useState } from 'react'
import './CardList.css'
import ActionItem from '../action-item/ActionItem'
import CardComposer from '../card-composer/CardComposer'
import { useDrop } from 'react-dnd'


const CardList = ({ title, cardList, updateCardList }) => {

	const [isComposing, setIsComposing] = useState(false)
	const [collectedProps, drop] = useDrop({
		accept: 'DRAG_CARD',
		drop(item) {
			updateCardList([...cardList, { title: item.title }])
		}
	})

	function handleAddActionClick() {
		setIsComposing(true)
	}

	function handleOnCardEnter(card) {
		setIsComposing(false)
		updateCardList([...cardList, { title: card.title }])
	}

	function handleDragRemove(removedItem) {
		const list = cardList.filter(item => item.title !== removedItem.title)
		console.log(list)
		updateCardList(list)
	}

	return (
		<div ref={drop} className="card-list">
			<div className="card-list__title">{title}</div>
			<div className="card-list__container">
				{cardList.map((item, index) => {
					return <ActionItem key={index.toString()} item={item} onDragRemove={(item) => handleDragRemove(item)} />
				})}
				{isComposing ? <CardComposer onCardEnter={handleOnCardEnter} /> : ''}
			</div>
			<div className="card-list__add-btn" onClick={handleAddActionClick}>+ Add a card</div>
		</div>
	)
}

export default CardList
