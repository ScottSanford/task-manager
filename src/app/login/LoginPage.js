import React from 'react'
import './LoginPage.css'
import logo from '../../assets/logo.png'
import video from '../../assets/mountains2.mp4'

import LoginForm from './login-form/LoginForm'

const LoginPage = () => {

	return (
		<div className="loginPage">

			<div className="loginPage__left">
				<img className="loginPage__logo" alt="logo" src={logo} />
				<LoginForm />
			</div>

			<div className="loginPage__right">
				<video className="bkgVideo" autoPlay muted loop>
					<source src={video} type="video/mp4" />
				</video>
				<div className="bkgVideo__content">
					<div className="loginPage__play-btn">
						<span className="fa fa-map"></span>
					</div>
					<div className="loginPage__title">Plan Your Adventure</div>
					<span className="loginPage__subtext">Lorem Ipsum Dolor Sit Amet</span>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
