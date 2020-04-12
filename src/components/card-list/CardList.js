import React, { useState } from 'react'
import './CardList.css'
import ActionItem from '../action-item/ActionItem'
import CardComposer from '../card-composer/CardComposer'

const CardList = ({ title }) => {

	const [isComposing, setIsComposing] = useState(false)
	const [cardList, setCardList] = useState([{ title: 'Chicago Bears' }])

	function handleAddActionClick() {
		setIsComposing(true)
	}

	function handleOnCardEnter(card) {
		setIsComposing(false)
		setCardList([...cardList, { title: card.title }])
	}

	return (
		<div className="card-list">
			<div className="card-list__title">{title}</div>
			<div className="card-list__container">
				{cardList.map((item, index) => {
					return <ActionItem key={index.toString()} item={item} />
				})}
				{isComposing ? <CardComposer onCardEnter={handleOnCardEnter} /> : ''}
			</div>
			<div className="card-list__add-btn" onClick={handleAddActionClick}>+ Add a card</div>
		</div>
	)
}

export default CardList
