import React from 'react'
import './WorkspaceContainer.css'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { connect } from 'react-redux'
import { addListAction, addCardToListAction, deleteCardListAction, deleteCardFromListAction } from './redux/lists'
import Workspace from './workspace/Workspace'

const WorkspacePage = ({
	addCardToList,
	deleteList,
	lists,
	removeCardFromList,
	users
}) => {

	return (
		<DndProvider backend={Backend}>
			<div className="workspace-container">
				<Workspace
					users={users}
					lists={lists}
					addCardToList={addCardToList}
					removeCardFromList={removeCardFromList}
					deleteList={deleteList}
				/>
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

export default connect(mapStateToProps, actionCreators)(WorkspacePage)