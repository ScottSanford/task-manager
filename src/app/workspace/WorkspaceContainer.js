import React from 'react'
import { connect } from 'react-redux'
import { addTicketAction, reorderListAction } from './redux/lists'
import { updateTicketAction } from './redux/tickets'
import Workspace from './workspace/Workspace'
import { changeThemeAction } from './redux/theme'

const WorkspacePage = ({
	addTicketToList,
	changeTheme,
	lists,
	listOrder,
	reorderList,
	theme,
	tickets,
	updateTicket,
	users,
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
				changeTheme={changeTheme}
				theme={theme}
			/>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		theme: state.theme,
		tickets: state.tickets,
		lists: state.lists,
		listOrder: state.listOrder,
		users: state.users,
	}
}

const actionCreators = {
	addTicketToList: addTicketAction,
	changeTheme: changeThemeAction,
	reorderList: reorderListAction,
	updateTicket: updateTicketAction
}

export default connect(mapStateToProps, actionCreators)(WorkspacePage)