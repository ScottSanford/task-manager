import React, { useState } from 'react'
import './ListComposer.css'

const ListComposer = ({ addList }) => {

	const [isComposing, setComposing] = useState(false)
	const [listName, setListName] = useState('')

	function guidGenerator() {
		const S4 = function () {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
		};
		return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())
	}

	function handleSubmit(event) {
		event.preventDefault()
		addList({ title: listName, id: guidGenerator(), cards: [] })
		setListName('')
		setComposing(false)
	}

	function handleInputChange(event) {
		setListName(event.target.value)
	}

	const composer = !isComposing
		? <div onClick={() => setComposing(true)}>+ Add another list</div>
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
