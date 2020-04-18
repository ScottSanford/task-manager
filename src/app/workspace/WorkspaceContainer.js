import React from 'react'
import './WorkspaceContainer.css'
import CardList from './card-list/CardList'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { connect } from 'react-redux'
import { addListAction, addCardToListAction, deleteCardListAction, deleteCardFromListAction } from './redux/lists'
// import ListComposer from './list-composer/ListComposer'
import Sidenav from './sidenav/Sidenav'
import UserAccessList from './user-access-list/UserAccessList'
import AddButton from './add-button/AddButton'

const Workspace = ({
	addList,
	addCardToList,
	deleteList,
	lists,
	projects,
	removeCardFromList,
	users
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
		<DndProvider backend={Backend}>
			<div className="workspace-container">
				<Sidenav projects={projects} />
				<div className="workspace">
					<div className="workspace__header">
						<UserAccessList users={users} />
						<AddButton />
					</div>
					<div className="lists-container">
						{cardLists}
					</div>
					{/* <ListComposer addList={addList} /> */}
				</div>
			</div>
		</DndProvider>
	)
}

function mapStateToProps(state) {
	return {
		projects: state.projects,
		lists: state.lists,
		users: state.users,
	}
}

const actionCreators = {
	addCardToList: addCardToListAction,
	addList: addListAction,
	deleteList: deleteCardListAction,
	removeCardFromList: deleteCardFromListAction,
}

export default connect(mapStateToProps, actionCreators)(Workspace)