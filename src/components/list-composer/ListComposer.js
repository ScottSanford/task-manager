import React from 'react'
import './ListComposer.css'

const ListComposer = ({ addList, setComposing }) => {

	function handleEnter(event) {
		if (event.key === 'Enter') {
			addList({ title: event.target.value, id: '123', cards: [] })
			event.target.value = ''
			setComposing(false)
		}
	}

	return (
		<div className="card-composer">
			<input placeholder="Enter list title..." onKeyPress={handleEnter} autoFocus />
		</div>
	)
}

export default ListComposer
