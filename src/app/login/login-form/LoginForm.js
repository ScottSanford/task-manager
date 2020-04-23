import React, { useState } from 'react'
import './LoginForm.css'
import { useHistory } from 'react-router-dom'
import TextInput from './TextInput'

const LoginForm = () => {

	// React Router DOM
	const history = useHistory()

	// Form State
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState({})

	// Form Styles
	const [usernameIcon, setUsernameIcon] = useState({ color: 'var(--color-neutral-9)' })
	const [passwordIcon, setPasswordIcon] = useState({ color: 'var(--color-neutral-9)' })

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
			setUsernameIcon({ color: 'var(--color-green-6)' })
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
			setPasswordIcon({ color: 'var(--color-neutral-9)' })
		}
	}

	const handleSubmit = event => {
		event.preventDefault()

		if (!formIsValid()) {
			setUsernameIcon({ color: 'var(--color-red-6)' })
			setPasswordIcon({ color: 'var(--color-red-6)' })
			return
		}

		// Navigate to Workspace Page
		history.push('/workspace/chicago')
	}

	// Validate form
	const formIsValid = () => {
		const errors = {}

		if (!validateEmail(username)) errors.username = 'Email is not valid.'
		if (!password) errors.password = 'Password is required.'

		setErrors(errors)
		return Object.keys(errors).length === 0
	}

	return (
		<form className="loginPage__form" onSubmit={handleSubmit}>
			<TextInput
				value={username}
				placeholder="Username"
				icon="user"
				iconStyle={usernameIcon}
				onChange={handleUsernameChange}
			/>
			{errors.username && <FormValidation type="username" error={errors.username} />}
			<TextInput
				type="password"
				placeholder="Password"
				value={password}
				icon="key"
				iconStyle={passwordIcon}
				onChange={handlePasswordChange}
			/>
			{errors.password && <FormValidation type="password" error={errors.password} />}
			<div className="loginPage__submit">
				<button className="loginPage__button" type="submit">Login</button>
			</div>
		</form>
	)
}

const FormValidation = ({ type, error }) => {

	const validEmojiFace = type === 'username'
		? <span className="error-emoji" role="img" aria-label="">😩</span>
		: <span className="error-emoji" role="img" aria-label="">🤫</span>

	return (
		<div className="error-validation">{validEmojiFace} {error}</div>
	)
}

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}

export default LoginForm