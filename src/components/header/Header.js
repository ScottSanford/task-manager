import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'
import profileImg from '../../assets/profile.png'

const Header = () => {

	return (
		<nav className="header">
			<NavLink className="header__boards" exact to="/workspace/test" activeClassName="header--selected">
				<span className="fa fa-clone"></span>
				<span>Boards</span>
			</NavLink>
			<div className="header__search">
				<span className="fa fa-search"></span>
				<input type="text" placeholder="Search..." />
			</div>
			<div className="header__logo"><img alt="logo" src={logo} /></div>
			<div className="header__user">
				<img className="header__user-img" alt="profile" src={profileImg} />
				<span className="header__user-name">Hello, Scott!</span>
				<span className="fa fa-bell"></span>
			</div>
			<NavLink exact to="/dashboard" className="header__menu" activeClassName="header--selected">
				<span className="fa fa-bars"></span>
			</NavLink>
		</nav>
	)
}

export default Header
