import React from 'react'
import './LoginPage.css'
import logo from '../../assets/logo.png'
import video from '../../assets/mountains2.mp4'
import { Link } from 'react-router-dom'

const LoginPage = () => {

	return (
		<div className="loginPage">
			<div className="loginPage__left">
				<img className="loginPage__logo" alt="logo" src={logo} />

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

			</div>
			<div className="loginPage__right">
				<video className="bkgVideo" autoPlay muted loop>
					<source src={video} type="video/mp4" />
				</video>
				<div className="bkgVideo__content">
					<div className="loginPage__play-btn">
						<span className="fa fa-play"></span>
					</div>
					<div className="loginPage__title">Plan Your Adventure</div>
					<span className="loginPage__subtext">Lorem Ipsum Dolor Sit Amet</span>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
