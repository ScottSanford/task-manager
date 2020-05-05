import React from 'react'
import styled from 'styled-components'
import cssVar from '../../theme/constants'

const AddButtonStyled = styled.div`
	align-items: baseline;
	align-self: baseline;
	background: ${cssVar.colorYellow5};
	border-radius: 10px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
	color: ${cssVar.colorWhite};
	display: flex;
	font-size: 1.4rem;
	font-weight: 600;
	padding: 0.7rem 1.2rem;
`

const ButtonArrow = styled.div`
	align-items: center;
	border-radius: 5px;
	display: flex;
	height: 20px;
	justify-content: center;
	margin-left: 5px;
	width: 20px;
`

const AddButton = () => {
	return (
		<AddButtonStyled>
			<span>Add</span>
			<ButtonArrow>
				<span className="fa fa-angle-down"></span>
			</ButtonArrow>
		</AddButtonStyled>
	)
}

export default AddButton