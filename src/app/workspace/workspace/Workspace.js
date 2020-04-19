import React from 'react'
import './Workspace.css'
import UserAccessList from '../user-access-list/UserAccessList'
import AddButton from '../add-button/AddButton'
import CardList from '../card-list/CardList'

const Workspace = ({
	users,
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
		<div className="workspace">
			<div className="workspace__header">
				<div>
					<div className="project__title">Personal</div>
					<UserAccessList users={users} />
				</div>
				<AddButton />
			</div>
			<div className="lists-container">
				{cardLists}
			</div>
		</div>
	)
}

export default Workspace
