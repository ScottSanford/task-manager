import React, { useState } from 'react'
import './Workspace.css'
import CardList from '../card-list/CardList'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


const Workspace = () => {

	const [cardList1, setCardList1] = useState([{ title: 'Chicago Bears' }])
	const [cardList2, setCardList2] = useState([{ title: 'Green Bay Packers' }])
	const [cardList3, setCardList3] = useState([{ title: 'Detroit Lions' }])

	return (
		<DndProvider backend={Backend}>
			<div className="workspace">
				<CardList title="Todo" cardList={cardList1} updateCardList={setCardList1} />
				<CardList title="In Progress" cardList={cardList2} updateCardList={setCardList2} />
				<CardList title="Done" cardList={cardList3} updateCardList={setCardList3} />
			</div>
		</DndProvider>
	)
}

export default Workspace