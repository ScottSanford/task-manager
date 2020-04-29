import React from 'react'
import './WorkspaceContainer.css'
import { connect } from 'react-redux'
import { addListAction, deleteCardListAction, deleteCardFromListAction, reorderListAction } from './redux/lists'
import Workspace from './workspace/Workspace'

const WorkspacePage = ({
	tickets,
	deleteList,
	lists,
	listOrder,
	removeCardFromList,
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
				removeCardFromList={removeCardFromList}
				deleteList={deleteList}
				reorderList={reorderList}
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
	addList: addListAction,
	deleteList: deleteCardListAction,
	removeCardFromList: deleteCardFromListAction,
	reorderList: reorderListAction,
}

export default connect(mapStateToProps, actionCreators)(WorkspacePage)