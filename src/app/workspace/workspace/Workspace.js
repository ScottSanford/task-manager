import React, { useState } from 'react'
import TicketList from '../ticket-list/TicketList'
import Header from '../../../components/header/Header'
import Modal from '../../../components/modal/Modal'
import { DragDropContext } from 'react-beautiful-dnd'
import WorkspaceHeader from './WorkspaceHeader'
import styled from 'styled-components'

const StyledWorkspace = styled.div`
	padding: 3rem;
	width: 100%;
`

const ListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(20rem, 1fr));
	gap: 3rem;
	justify-content: center;

	@media only screen and (max-width: 700px) {
		grid-template-columns: 100%;
	}
`

const Workspace = ({
	addTicketToList,
	tickets,
	lists,
	listOrder,
	updateTicket,
	reorderList,
	changeTheme,
	theme,
}) => {

	const [showModal, setShowModal] = useState(false)
	const [modalData, setModalData] = useState({})

	const ticketList = listOrder.map(listId => {
		const column = lists[listId]
		const columnTickets = column.ticketIds.map(ticketId => tickets[ticketId])
		return (
			<TicketList
				key={column.id}
				column={column}
				tickets={columnTickets}
				addTicketToList={(aTicket) => addTicketToList(aTicket, column.id)}
				openModal={(item) => handleTicketModal(item, column.id)} />
		)
	})

	const handleTicketModal = (item, id) => {
		setModalData({ ...item, listId: id })
		setShowModal(true)
	}

	const handleModalClose = () => setShowModal(false)
	const handleModalSave = (aTicket) => {
		setShowModal(false)
		updateTicket(aTicket)
	}

	const handleOnDragEnd = ({ destination, source, draggableId }) => {
		if (!destination ||
			(destination.droppableId === source.droppableId &&
				destination.index === source.index)
		) {
			return
		}

		reorderList({ destination, source, draggableId })
	}


	return (
		<div className="workspace-page">
			<Header theme={theme} changeTheme={changeTheme} />
			<StyledWorkspace>
				<WorkspaceHeader />
				<DragDropContext onDragEnd={handleOnDragEnd}>
					<ListContainer>{ticketList}</ListContainer>
				</DragDropContext>
			</StyledWorkspace>
			<Modal
				show={showModal}
				onClose={handleModalClose}
				onSave={(ticket) => handleModalSave(ticket)}
				data={modalData} />
		</div>
	)
}

export default Workspace
