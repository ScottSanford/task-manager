import React from 'react'
import './WorkspaceContainer.css'
import { connect } from 'react-redux'
import { addListAction, addCardToListAction, deleteCardListAction, deleteCardFromListAction, updateTicketAction } from './redux/lists'
import Workspace from './workspace/Workspace'

const WorkspacePage = ({
	tickets,
	addCardToList,
	deleteList,
	lists,
	listOrder,
	removeCardFromList,
	users,
	updateTicket,
}) => {

	return (
		<div className="workspace-container">
			<Workspace
				users={users}
				lists={lists}
				listOrder={listOrder}
				tickets={tickets}
				addCardToList={addCardToList}
				removeCardFromList={removeCardFromList}
				deleteList={deleteList}
				updateTicket={updateTicket}
			/>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		tickets: state.tickets,
		lists: state.lists,
		listOrder: state.listOrder,
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