import React, { useState } from 'react'
import './LoginForm.css'
import { useHistory } from 'react-router-dom'

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}

const LoginForm = () => {

	const history = useHistory()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const [errors, setErrors] = useState({})
	const [usernameIcon, setUsernameIcon] = useState({ color: 'var(--color-neutral-9)' })

	const handleUsernameChange = event => setUsername(event.target.value)
	const handlePasswordChange = event => setPassword(event.target.value)
	const handleSubmit = event => {
		event.preventDefault()

		if (!formIsValid()) {
			setUsernameIcon({ color: 'var(--color-red-6)' })
			return
		}

		history.push('/workspace/chicago')
	}

	const formIsValid = () => {
		const errors = {}

		if (!validateEmail(username)) errors.username = 'Email is not valid.'
		if (!password) errors.password = 'Password is required.'

		setErrors(errors)
		return Object.keys(errors).length === 0
	}

	return (
		<form className="loginPage__form" onSubmit={handleSubmit}>
			<div className="loginPage__form-input">
				<div className="loginPage__form-icon">
					<span className="fa fa-user" style={usernameIcon}></span>
				</div>
				<input
					type="text"
					value={username}
					placeholder="Username"
					onChange={handleUsernameChange}
				/>
			</div>
			{errors.username && <div className="error-validation"><span className="error-emoji" role="img" aria-label="">😩</span> {errors.username}</div>}
			<div className="loginPage__form-input">
				<div className="loginPage__form-icon">
					<span className="fa fa-key"></span>
				</div>
				<input
					type="password"
					value={password}
					placeholder="Password"
					onChange={handlePasswordChange} />
			</div>
			{errors.password && <div className="error-validation"><span className="error-emoji" role="img" aria-label="">🤫</span> {errors.password}</div>}

			<div className="loginPage__submit">
				<button className="loginPage__button" type="submit">Login</button>
			</div>
		</form>
	)
}

export default LoginForm