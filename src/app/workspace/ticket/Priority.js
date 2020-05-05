import React from 'react'
import styled from 'styled-components'
import cssVar from '../../theme/constants'


const overrideStyles = (level) => {
	switch (level) {
		case 'low':
			return cssVar.colorGreen7
		case 'medium':
			return cssVar.colorYellow7
		default:
			return cssVar.colorRed7
	}
}

const PriorityWrapper = styled.div`
	background: ${({ level }) => overrideStyles(level)};
	grid-column: 1 / 3;
	border-radius: ${cssVar.bRadiusSm};
	width: 5rem;
	height: 5px;

	@media only screen and (max-width: 500px) {
		border-radius: 100%;
		grid-column: 2 / -1;
		height: 1.5rem;
		justify-self: flex-end;
		margin-right: 1rem;
		width: 1.5rem;
	}
`

const Priority = ({ level }) => <PriorityWrapper level={level}></PriorityWrapper>

export default Priority