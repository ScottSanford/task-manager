import React from 'react'
import './Workspace.css'
import CardList from '../card-list/CardList'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { connect } from 'react-redux'
import { addCardListAction, addCardToListAction, deleteCardListAction } from './listActions'
import ListComposer from '../list-composer/ListComposer'

const Workspace = ({
	addList,
	addCardToList,
	deleteList,
	lists,
}) => {

	const cardLists = lists.map(list => {
		return (
			<CardList
				key={list.id}
				{...list}
				addCardToList={(card) => addCardToList(card, { id: list.id })}
				deleteCardList={(action) => deleteList(action)} />
		)
	})

	return (
		<DndProvider backend={Backend}>
			<div className="workspace">
				{cardLists}
				<ListComposer addList={addList} />
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
	addList: addCardListAction,
	deleteList: deleteCardListAction,
}

export default connect(mapStateToProps, actionCreators)(Workspace)