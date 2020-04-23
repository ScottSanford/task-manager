import React from 'react'
import './Workspace.css'
import CardList from '../card-list/CardList'
import Header from '../../../components/header/Header'

const Workspace = ({
	lists,
	addCardToList,
	removeCardFromList,
	deleteList
}) => {
	const cardLists = lists.map(list => {
		return (
			<CardList
				key={list.id}
				{...list}
				addCardToList={(card) => addCardToList(card, { id: list.id })}
				removeCardFromList={(card) => removeCardFromList(card, { id: list.id })}
				deleteCardList={(id) => deleteList(id)} />
		)
	})

	return (
		<div className="workspace-page">
			<Header />
			<div className="workspace">
				<div className="workspace__header">
					<div className="ProjectInfo">
						<div className="project-type"><span className="fa fa-star fa-2x"></span></div>
						<div className="ProjectInfo__Meta">
							<span className="project__title">Personal</span>
							<span className="project__subtext">A project about getting things done quickly.</span>
						</div>
					</div>
				</div>
				<div className="lists-track">
					<div className="lists-container">
						{cardLists}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Workspace
