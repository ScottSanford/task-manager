import React, { useState } from 'react'
import './ListComposer.css'
import uniqueId from '../../../services/unique-id'
import styled from 'styled-components'

const ListComposerStyled = styled.div`
	width: 272px;
	background: #b4cadf;
	display: flex;
	align-items: center;
	margin-top: 10px;
	transition: 0.3s;
	height: 20px;
	padding: 10px;
	border-radius: 4px;
`

const ListComposer = ({ addList }) => {

	const [isComposing, setComposing] = useState(false)
	const [listName, setListName] = useState('')

	function handleSubmit(event) {
		event.preventDefault()
		if (!listName) {
			return
		}

		addList({ title: listName, id: uniqueId(), cards: [] })
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
				<div className="list-composer__controls">
					<button type="submit" onClick={handleSubmit}>Add List</button>
					<div className="list-composer__close fa fa-times" onClick={() => setComposing(false)}></div>
				</div>
			</>
		)

	return (
		<ListComposerStyled>
			<form onSubmit={handleSubmit}>
				{composer}
			</form>
		</ListComposerStyled>
	)
}

export default ListComposer
