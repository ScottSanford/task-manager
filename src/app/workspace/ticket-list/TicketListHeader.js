import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
	color: var(--color-neutral-1);
	display: flex;
	justify-content: space-between;
	width: 100%;
`

const Title = styled.div`
	font-size: 1.4rem;
	font-weight: 800;
	margin-bottom: 1rem;
	text-transform: uppercase;
`

const TicketListHeader = ({ title, handleDeleteClick }) => {
	return (
		<Header>
			<Title>{title}</Title>
			<div className="fa fa-ellipsis-h" onClick={handleDeleteClick}></div>
		</Header>
	)
}

export default TicketListHeader
