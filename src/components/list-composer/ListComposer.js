import React, { useState } from 'react'
import './ListComposer.css'

const ListComposer = ({ addList }) => {

	const [isComposing, setComposing] = useState(false)
	const [listName, setListName] = useState('')

	function handleSubmit(event) {
		event.preventDefault()
		addList({ title: listName, id: '123', cards: [] })
		setListName('')
		setComposing(false)
	}

	function handleInputChange(event) {
		setListName(event.target.value)
	}

	const composer = !isComposing
		? <div className="add-list" onClick={() => setComposing(true)}>+ Add another list</div>
		: (
			<>
				<input placeholder="Enter list title..." value={listName} onChange={handleInputChange} autoFocus />
				<button type="submit" onClick={handleSubmit}>Add List</button>
				<div onClick={() => setComposing(false)}>X</div>
			</>
		)

	return (
		<div className="card-composer">
			<form onSubmit={handleSubmit}>
				{composer}
			</form>
		</div>
	)
}

export default ListComposer
