import React from 'react'
import './LoginPage.css'
import logo from '../../assets/logo.png'

const LoginPage = () => {

	return (
		<div className="loginPage">
			<div className="loginPage__left">
				<img className="loginPage__logo" alt="logo" src={logo} />
			</div>
			<div className="loginPage__right"></div>
		</div>
	)
}

export default LoginPage
