import React from 'react'
import './CardComposer.css'

const CardComposer = ({ onCardEnter }) => {

	function handleEnter(event) {
		if (event.key === 'Enter') {
			onCardEnter({ title: event.target.value })
		}
	}

	return (
		<div className="card-composer">
			<textarea placeholder="Enter a title for this card..." onKeyPress={handleEnter} autoFocus></textarea>
		</div>
	)
}

export default CardComposer
