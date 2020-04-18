import React from 'react'
import './WorkspaceContainer.css'
import CardList from './card-list/CardList'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { connect } from 'react-redux'
import { addListAction, addCardToListAction, deleteCardListAction, deleteCardFromListAction } from './lists'
// import ListComposer from './list-composer/ListComposer'
import Sidenav from './sidenav/Sidenav'
import UserAccessList from './user-access-list/UserAccessList'

const Workspace = ({
	addList,
	addCardToList,
	deleteList,
	lists,
	removeCardFromList,
	users
}) => {

	console.log(users)
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
				<Sidenav />
				<div className="workspace">
					<div className="workspace__header">
						<UserAccessList />
						<div className="add-button">
							Add
							<div className="add-button__arrow">
								<span className="fa fa-angle-down"></span>
							</div>
						</div>
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