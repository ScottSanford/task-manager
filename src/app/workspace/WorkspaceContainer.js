import React from 'react'
import { connect } from 'react-redux'
import { addTicketAction, reorderListAction } from './redux/lists'
import { updateTicketAction } from './redux/tickets'
import Workspace from './workspace/Workspace'


const WorkspacePage = ({
	addTicketToList,
	tickets,
	lists,
	listOrder,
	users,
	reorderList,
	updateTicket
}) => {

	return (
		<div className="workspace-container">
			<Workspace
				users={users}
				lists={lists}
				listOrder={listOrder}
				tickets={tickets}
				reorderList={reorderList}
				addTicketToList={addTicketToList}
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
	addTicketToList: addTicketAction,
	reorderList: reorderListAction,
	updateTicket: updateTicketAction
}

export default connect(mapStateToProps, actionCreators)(WorkspacePage)