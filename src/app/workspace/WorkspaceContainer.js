import React from 'react'
import './WorkspaceContainer.css'
import CardList from './card-list/CardList'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { connect } from 'react-redux'
import { addListAction, addCardToListAction, deleteCardListAction, deleteCardFromListAction } from './lists'
import ListComposer from './list-composer/ListComposer'
import Sidenav from './sidenav/Sidenav'

const Workspace = ({
	addList,
	addCardToList,
	deleteList,
	lists,
	removeCardFromList,
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
				<Sidenav />
				<div className="workspace">
					{cardLists}
					<ListComposer addList={addList} />
				</div>
			</div>
		</DndProvider>
	)
}

function mapStateToProps(state) {
	return {
		lists: state.lists
	}
}

const actionCreators = {
	addCardToList: addCardToListAction,
	addList: addListAction,
	deleteList: deleteCardListAction,
	removeCardFromList: deleteCardFromListAction,
}

export default connect(mapStateToProps, actionCreators)(Workspace)