import React, { useState } from 'react'
import './CardList.css'
import ActionItem from '../action-item/ActionItem'

const CardList = ({ title }) => {

	const [cardList, setCardList] = useState([])

	function handleAddActionClick() {
		setCardList([...cardList, ActionItem])
	}

	return (
		<div className="card-list">
			<div className="card-list__title">{title}</div>
			<div className="card-list__container">
				{cardList.map((item, index) => {
					return <ActionItem key={index} {...item} />
				})}
			</div>
			<div className="card-list__add-btn" onClick={handleAddActionClick}>+ Add a card</div>
		</div>
	)
}

export default CardList
