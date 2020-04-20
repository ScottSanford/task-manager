import React from 'react'
import './WorkspaceContainer.css'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { connect } from 'react-redux'
import { addListAction, addCardToListAction, deleteCardListAction, deleteCardFromListAction } from './redux/lists'
import Sidenav from './sidenav/Sidenav'
import Workspace from './workspace/Workspace'
import { useParams } from 'react-router-dom'

const WorkspacePage = ({
	addList,
	addCardToList,
	deleteList,
	lists,
	projects,
	removeCardFromList,
	users
}) => {

	const { projectId } = useParams()

	return (
		<DndProvider backend={Backend}>
			<div className="workspace-container">
				{/* <Sidenav projects={projects} /> */}
				{projectId
					? <Workspace
						users={users}
						lists={lists}
						addCardToList={addCardToList}
						removeCardFromList={removeCardFromList}
						deleteList={deleteList}
					/>
					: <h2>Empty State</h2>}
			</div>
		</DndProvider>
	)
}

function mapStateToProps(state) {
	return {
		projects: state.projects,
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