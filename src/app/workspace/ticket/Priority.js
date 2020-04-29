import React from 'react'
import styled from 'styled-components'


const overrideStyles = (level) => {
	switch (level) {
		case 'low':
			return 'var(--color-green-7)'
		case 'medium':
			return 'var(--color-yellow-7)'
		default:
			return 'var(--color-red-7)'
	}
}

const PriorityWrapper = styled.div`
	background: ${({ level }) => overrideStyles(level)};
	grid-column: 1 / 3;
	border-radius: var(--b-radius-sm);
	width: 5rem;
	height: 5px;
`

const Priority = ({ level }) => <PriorityWrapper level={level}></PriorityWrapper>

export default Priority