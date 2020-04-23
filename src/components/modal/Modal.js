import React, { useState } from 'react'
import './Modal.css'

const Modal = ({
	data,
	onClose,
	onSave,
	show,
}) => {
	const [item, setItem] = useState({ ...data })

	if (!show) {
		return null
	}

	const handlePriority = (priority) => {
		setItem({ ...data, priority })
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
							<div className="priority-type priority-low" style={{ border: item.priority === 'low' ? '2px solid var(--color-green-5)' : '' }} onClick={() => handlePriority('low')}>Low</div>
							<div className="priority-type priority-medium" style={{ border: item.priority === 'medium' ? '2px solid var(--color-yellow-5)' : '' }} onClick={() => handlePriority('medium')}>Medium</div>
							<div className="priority-type priority-high" style={{ border: item.priority === 'high' ? '2px solid var(--color-red-5)' : '' }} onClick={() => handlePriority('high')}>High</div>
						</div>
					</div>
				</div>
				<div className="modal__footer">
					<button className="cancel-button" onClick={() => onClose()}>Cancel</button>
					<button className="save-button" onClick={() => onSave(item)}>Save</button>
				</div>
			</div>
		</>
	)
}

export default Modal