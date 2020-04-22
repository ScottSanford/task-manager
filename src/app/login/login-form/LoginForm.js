import React from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'

const LoginForm = () => {
	return (
		<form className="loginPage__form">
			<div className="loginPage__form-input">
				<div className="loginPage__form-icon">
					<span className="fa fa-user"></span>
				</div>
				<input type="text" placeholder="Username" />
			</div>
			<div className="loginPage__form-input">
				<div className="loginPage__form-icon">
					<span className="fa fa-key"></span>
				</div>
				<input type="text" placeholder="Password" />
			</div>
			<Link to="/workspace/dabears" className="loginPage__submit">
				<button className="loginPage__button">Login</button>
			</Link>
		</form>
	)
}

export default LoginForm