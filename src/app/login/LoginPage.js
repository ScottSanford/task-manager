import React from 'react'
import './LoginPage.css'
import logo from '../../assets/logo.png'
import video from '../../assets/mountains.mp4'

const LoginPage = () => {

	return (
		<div className="loginPage">
			<div className="loginPage__left">
				<img className="loginPage__logo" alt="logo" src={logo} />
				<form className="loginPage__form">
					<div>
						<span className="fa fa-user"></span>
						<input type="text" placeholder="Username" />
					</div>
					<div>
						<span className="fa fa-lock"></span>
						<input type="text" placeholder="Password" />
					</div>
					<div>Login</div>
				</form>
			</div>
			<div className="loginPage__right">
				<video className="bkgVideo" autoPlay muted loop>
					<source src={video} type="video/mp4" />
				</video>
				<div className="bkgVideo__content">
					<div className="donutcircle__container">
						<div className="donutcircle"></div>
					</div>
					<div className="loginPage__play-btn">
						<span className="fa fa-play"></span>
					</div>
					<div className="loginPage__title">Plan Your Adventure</div>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
