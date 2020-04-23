import React from 'react'
import './WorkspaceContainer.css'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { connect } from 'react-redux'
import { addListAction, addCardToListAction, deleteCardListAction, deleteCardFromListAction, updateTicketAction } from './redux/lists'
import Workspace from './workspace/Workspace'

const WorkspacePage = ({
	addCardToList,
	deleteList,
	lists,
	removeCardFromList,
	users,
	updateTicket,
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
					updateTicket={updateTicket}
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
	updateTicket: updateTicketAction,
}

export default connect(mapStateToProps, actionCreators)(WorkspacePage)