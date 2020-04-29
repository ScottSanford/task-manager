import React, { useState } from 'react'
import './Workspace.css'
import TicketList from '../ticket-list/TicketList'
import Header from '../../../components/header/Header'
import Modal from '../../../components/modal/Modal'
import { DragDropContext } from 'react-beautiful-dnd'

const Workspace = ({
	tickets,
	lists,
	listOrder,
	updateTicket,
}) => {

	const [showModal, setShowModal] = useState(false)
	const [modalData, setModalData] = useState({})

	const ticketList = listOrder.map(listId => {
		const column = lists[listId]
		const columnTickets = column.ticketIds.map(ticketId => tickets[ticketId])
		return (
			<TicketList key={column.id} column={column} tickets={columnTickets} />
		)
	})

	const handleTicketModal = (item, id) => {
		setModalData({ ...item, listId: id })
		setShowModal(true)
	}

	const handleModalClose = () => setShowModal(false)
	const handleModalSave = (aTicket) => {
		setShowModal(false)
		updateTicket(aTicket, { id: aTicket.listId })
	}

	const handleOnDragEnd = result => {
		// TODO: Reorder columsn
		console.log(result)
	}


	return (
		<div className="workspace-page">
			<Header />
			<div className="workspace">
				<div className="workspace__header">
					<div className="ProjectInfo">
						<div className="project-type"><span className="fa fa-star fa-2x"></span></div>
						<div className="ProjectInfo__Meta">
							<span className="project__title">Personal</span>
							<span className="project__subtext">A project about getting things done quickly.</span>
						</div>
					</div>
				</div>
				<DragDropContext onDragEnd={handleOnDragEnd}>
					<div className="lists-track">
						<div className="lists-container">
							{ticketList}
						</div>
					</div>
				</DragDropContext>
			</div>
			<Modal
				show={showModal}
				onClose={handleModalClose}
				onSave={(ticket) => handleModalSave(ticket)}
				data={modalData} />
		</div>
	)
}

export default Workspace
