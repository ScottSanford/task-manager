import React from 'react'
import styled from 'styled-components'

const TextInputStyled = styled.div`
	border: 1px solid ${({ theme }) => theme.colorNeutral9};
	border-radius: ${({ theme }) => theme.bRadiusSm};
	color: ${({ theme }) => theme.colorNeutral9};
	display: grid;
	font-size: 2rem;
	grid-template-columns: 5rem 2fr;
	margin-bottom: 15px;
	padding-right: 10px;

	&:focus-within {
		border: 1px solid ${({ theme }) => theme.colorNeutral5};
	}

	& input {
		border: none;
		margin-left: 1rem;
		font-size: 1.4rem;

		&:focus {
			outline: none;
		}
	}
`

const Icon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border-right: 1px solid currentColor;
`

const TextInput = ({
	icon,
	iconStyle,
	onChange,
	placeholder,
	type = 'text',
	value,
}) => {

	const iconType = icon ? icon : 'pencil'

	return (
		<TextInputStyled>
			<Icon>
				<span className={`fa fa-${iconType}`} style={iconStyle}></span>
			</Icon>
			<input
				className="TextInput__Input"
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</TextInputStyled>
	)
}

export default TextInput