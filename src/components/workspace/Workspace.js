import React from 'react'
import './Workspace.css'
import CardList from '../card-list/CardList'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCardListAction, deleteCardListAction } from '../../redux/actions/listActions'
import ListComposer from '../list-composer/ListComposer'

const Workspace = ({ lists, actions }) => {

	const cardLists = lists.map(list => {
		return (
			<CardList
				key={list.id}
				title={list.title}
				cardList={list.cards}
				listId={list.id}
				updateCardList={actions.updateCardList}
				deleteCardList={(action) => actions.deleteList(action)} />
		)
	})

	return (
		<DndProvider backend={Backend}>
			<div className="workspace">
				{cardLists}
				<ListComposer addList={actions.addList} />
			</div>
		</DndProvider>
	)
}

function mapStateToProps(state) {
	return {
		lists: state.lists
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			addList: bindActionCreators(addCardListAction, dispatch),
			deleteList: bindActionCreators(deleteCardListAction, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Workspace)