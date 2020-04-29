import React from 'react'
import uniqueId from '../../../services/unique-id'
import styled from 'styled-components'

const CardComposerStyled = styled.div`
	background: #fff;
	border-radius: 4px;
	height: 40px;
	display: flex;
	margin: 5px 0;
	padding: 10px;

	& textarea {
		height: 100%;
		width: 100%;
		border-style: none;
		border-color: Transparent;
		overflow: auto;
		resize: none;
		font-size: 14px;

		&:focus, &:active {
			outline: 0px !important;
			-webkit-appearance: none;
			box-shadow: none !important;
		}

		&::placeholder {
			font-size: 14px;
		}
	}
`

const CardComposer = ({ onCardEnter }) => {

	const handleEnter = event => {
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
		<CardComposerStyled>
			<textarea placeholder="What needs to be done?" onKeyPress={handleEnter} autoFocus></textarea>
		</CardComposerStyled>
	)
}

export default CardComposer
