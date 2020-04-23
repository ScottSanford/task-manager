import React from 'react'
import './Modal.css'

const Modal = ({ children, show, onClose }) => {
	if (!show) {
		return null
	}

	return (
		<>
			<div className="modal" id="modal">
				<h2>Modal Window</h2>
				<div className="content">{children}</div>
				<div className="actions">
					<button className="toggle-button">OK</button>
					<button onClick={onClose}>Close</button>
				</div>
			</div>
		</>
	)
}

export default Modal