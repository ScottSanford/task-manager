import React, { useState } from 'react'
import './Workspace.css'
import CardList from '../card-list/CardList'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCardListAction } from '../../redux/actions/listActions'
import ListComposer from '../list-composer/ListComposer'

const Workspace = ({ lists, actions }) => {

	const [isComposingList, setComposingList] = useState(false)

	function handleAddListClick() {
		setComposingList(true)
	}

	const cardLists = lists.map(list => {
		return (
			<CardList
				key={list.id}
				title={list.title}
				cardList={list.cards}
				updateCardList={actions.updateCardList} />
		)
	})

	const composingList = isComposingList
		? <ListComposer addList={actions.addList} setComposing={setComposingList} />
		: <div onClick={handleAddListClick}>+ Add another list</div>

	return (
		<DndProvider backend={Backend}>
			<div className="workspace">
				{cardLists}
				{composingList}
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
			addList: bindActionCreators(addCardListAction, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Workspace)