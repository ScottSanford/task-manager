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
	const [usernameIcon, setUsernameIcon] = useState({ color: 'var(--color-neutral-9)' })

	const handleUsernameChange = event => setUsername(event.target.value)
	const handlePasswordChange = event => setPassword(event.target.value)
	const handleSubmit = event => {
		event.preventDefault()
		if (username === 'test@test.com' && password === 'Chicago85') {
			history.push('/workspace/chicago')
		}
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
			{/* <Link to="/workspace/dabears" className="loginPage__submit"> */}
			<button className="loginPage__button" type="submit">Login</button>
			{/* </Link> */}
		</form>
	)
}

export default LoginForm