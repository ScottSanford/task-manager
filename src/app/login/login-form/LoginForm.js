import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TextInput from './TextInput'
import styled from 'styled-components'
import { theme } from '../../Theme'

const FormStyled = styled.form`
	margin-top: 15rem;

	@media only screen and (max-width: 800px) {
		margin-top: 5rem;
	}
`

const Submit = styled.div`
	display: flex;
	justify-content: flex-end;
	text-decoration: none;
`

const SubmitButton = styled.button`
	background: ${({ theme }) => theme.colorPrimary5};
	border: none;
	border-radius: ${({ theme }) => theme.bRadiusSm};
	box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	text-transform: uppercase;
	padding: 1rem 2.5rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colorNeutral10};

	&:focus {
		outline: none;
	}

	&:active {
		box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
	}

	@media only screen and (max-width: 700px) {
		width: 100%;
	}
`

const LoginForm = () => {

	// React Router DOM
	const history = useHistory()

	// Form State
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState({})

	// Form Styles
	const [usernameIcon, setUsernameIcon] = useState({ color: theme.colorNeutral9 })
	const [passwordIcon, setPasswordIcon] = useState({ color: theme.colorNeutral9 })

	// Event Handlers for Form
	const handleUsernameChange = event => {
		const { value } = event.target

		setUsername(value)

		/**
		 * Simple email validation
		 * In a real applcation, validation would happen on the backend.
		 */
		if (errors && validateEmail(value)) {
			setErrors({ ...errors, username: '' })
			setUsernameIcon({ color: theme.colorGreen6 })
		}
	}

	const handlePasswordChange = event => {
		const { value } = event.target

		setPassword(value)

		/**
		 * Simple password validation
		 * In a real applcation, validation would happen on the backend.
		 */
		if (errors && value.length >= 5) {
			setErrors({ ...errors, password: '' })
			setPasswordIcon({ color: theme.colorNeutral9 })
		}
	}

	const handleSubmit = event => {
		event.preventDefault()

		if (!formIsValid()) {
			setUsernameIcon({ color: theme.colorRed6 })
			setPasswordIcon({ color: theme.colorRed6 })
			return
		}

		// Navigate to Workspace Page
		history.push('/workspace/chicago')
	}

	// Validate form
	const formIsValid = () => {
		const errors = {}

		if (!validateEmail(username)) errors.username = 'Email is not valid.'
		if (!password) errors.password = 'Password must be 5 characters.'

		setErrors(errors)
		return Object.keys(errors).length === 0
	}

	return (
		<FormStyled onSubmit={handleSubmit}>
			<TextInput
				data-test="textInput"
				value={username}
				placeholder="Username"
				icon="user"
				iconStyle={usernameIcon}
				onChange={handleUsernameChange}
			/>
			{errors.username && <FormValidation type="username" error={errors.username} />}
			<TextInput
				data-test="textInput"
				type="password"
				placeholder="Password"
				value={password}
				icon="key"
				iconStyle={passwordIcon}
				onChange={handlePasswordChange}
			/>
			{errors.password && <FormValidation type="password" error={errors.password} />}
			<Submit>
				<SubmitButton id="submit-button" type="submit" data-test="loginSubmitButton">Login</SubmitButton>
			</Submit>
		</FormStyled>
	)
}

const ErrorValidation = styled.div`
	background: ${({ theme }) => theme.colorRed9};
	color: ${({ theme }) => theme.colorRed3};
	padding: 1rem 2rem;
	width: 100%;
	border-radius: 3px;
	margin-bottom: 10px;
	font-size: 1.4rem;
	display: flex;
	align-items: center;
`

const FormValidation = ({ type, error }) => {

	const validEmojiFace = type === 'username'
		? <span style={{ fontSize: '1.8rem', marginRight: '5px' }} role="img" aria-label="">😩</span>
		: <span style={{ fontSize: '1.8rem', marginRight: '5px' }} role="img" aria-label="">🤫</span>

	return (
		<ErrorValidation>{validEmojiFace} {error}</ErrorValidation>
	)
}

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}

export default LoginForm