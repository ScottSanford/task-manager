import React from 'react'
import './CardComposer.css'
import uniqueId from '../../../services/unique-id'

const CardComposer = ({ onCardEnter }) => {

	function handleEnter(event) {
		if (event.key === 'Enter') {
			onCardEnter({
				title: event.target.value,
				id: uniqueId(),
				priority: 'low', // should be dynamic
				dueDate: 'in 6 days' // should be dynamic
			})
		}
	}

	return (
		<div className="card-composer">
			<textarea placeholder="What needs to be done?" onKeyPress={handleEnter} autoFocus></textarea>
		</div>
	)
}

export default CardComposer
