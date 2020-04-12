import React from 'react'
import './CardComposer.css'

const CardComposer = (props) => {

	function handleEnter(event) {
		if (event.key === 'Enter') {
			console.log(event.target.value)
			props.onCardEnter({ title: event.target.value })
		}
	}

	return (
		<div className="card-composer">
			<textarea placeholder="Enter a title for this card..." onKeyPress={handleEnter}></textarea>
		</div>
	)
}

export default CardComposer
