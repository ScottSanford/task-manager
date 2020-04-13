import React from 'react'
import './ListComposer.css'

const ListComposer = ({ addList }) => {

	function handleEnter(event) {
		if (event.key === 'Enter') {
			addList({ title: event.target.value, id: '123', cards: [] })
		}
	}

	return (
		<div className="card-composer">
			<input placeholder="Enter list title..." onKeyPress={handleEnter} autoFocus />
		</div>
	)
}

export default ListComposer
