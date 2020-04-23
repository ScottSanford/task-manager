import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ show, onClose, data }) => {
	const [ticketPriority, setItemPriority] = useState(data.priority)

	if (!show) {
		return null
	}

	const handlePriority = (priority) => {
		setItemPriority(priority)
	}

	return (
		<>
			<div className="modal-backdrop"></div>
			<div className="modal" id="modal">
				<div className="modal__header">
					<div className="modal__header-title">{data.title}</div>
				</div>
				<div className="modal__content">
					<div className="item-meta">
						<div className="item-meta-title">Select Priority</div>
						<div className="item-priority">
							<div className="priority-type priority-low" style={{ border: ticketPriority === 'low' ? '2px solid var(--color-green-1)' : '' }} onClick={() => handlePriority('low')}>Low</div>
							<div className="priority-type priority-medium" style={{ border: ticketPriority === 'medium' ? '2px solid var(--color-yellow-5)' : '' }} onClick={() => handlePriority('medium')}>Medium</div>
							<div className="priority-type priority-high" style={{ border: ticketPriority === 'high' ? '2px solid var(--color-red-1)' : '' }} onClick={() => handlePriority('high')}>High</div>
						</div>
					</div>
				</div>
				<div className="modal__footer">
					<button className="cancel-button" onClick={onClose}>Cancel</button>
					<button className="save-button">Save</button>
				</div>
			</div>
		</>
	)
}

export default Modal