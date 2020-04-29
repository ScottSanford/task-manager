import React from 'react'
import './WorkspaceContainer.css'
import { connect } from 'react-redux'
import { addTicketAction, reorderListAction } from './redux/lists'
import Workspace from './workspace/Workspace'

const WorkspacePage = ({
	addTicketToList,
	tickets,
	lists,
	listOrder,
	users,
	reorderList,
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
}

export default connect(mapStateToProps, actionCreators)(WorkspacePage)