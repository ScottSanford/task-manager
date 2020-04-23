import React, { useState } from 'react'
import './Workspace.css'
import TicketList from '../ticket-list/TicketList'
import Header from '../../../components/header/Header'
import Modal from '../../../components/modal/Modal'

const Workspace = ({
	lists,
	addCardToList,
	removeCardFromList,
	deleteList
}) => {

	const [showModal, setShowModal] = useState(false)
	const cardLists = lists.map(list => {
		return (
			<TicketList
				key={list.id}
				{...list}
				addCardToList={(card) => addCardToList(card, { id: list.id })}
				removeCardFromList={(card) => removeCardFromList(card, { id: list.id })}
				deleteCardList={(id) => deleteList(id)} />
		)
	})

	const handleShowModal = () => {
		setShowModal(true)
	}

	const handleModalClose = (event) => {
		setShowModal(false)
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
				<div className="lists-track">
					<div className="lists-container">
						{cardLists}
					</div>
				</div>
			</div>
			<Modal show={showModal} onClose={event => handleModalClose(event)}>Here is some content!</Modal>
			<button onClick={handleShowModal}>Open Modal!</button>
		</div>
	)
}

export default Workspace
