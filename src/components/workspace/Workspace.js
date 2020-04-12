import React, { useState } from 'react'
import './Workspace.css'
import CardList from '../card-list/CardList'

const Workspace = () => {

	const [cardList1, setCardList1] = useState([{ title: 'Chicago Bears' }])
	const [cardList2, setCardList2] = useState([{ title: 'Green Bay Packers' }])
	const [cardList3, setCardList3] = useState([{ title: 'Detroit Lions' }])

	return (
		<div className="workspace">
			<CardList title="Todo" cardList={cardList1} updateCardList={setCardList1} />
			<CardList title="In Progress" cardList={cardList2} updateCardList={setCardList2} />
			<CardList title="Done" cardList={cardList3} updateCardList={setCardList3} />
		</div>
	)
}

export default Workspace