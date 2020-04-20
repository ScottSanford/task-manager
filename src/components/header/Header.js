import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {

	return (
		<nav className="header">
			<div className="header__boards">
				<span className="fa fa-clone"></span>
				<span>Boards</span>
			</div>
			<div className="header__search">
				<span className="fa fa-search"></span>
				<input type="text" placeholder="Search..." />
			</div>
			<div className="header__logo"><img alt="logo" src={logo} /></div>
			<NavLink exact to="/" className="header__nav" activeClassName="header--selected">Workspace</NavLink>
			<NavLink exact to="/dashboard" className="header__nav" activeClassName="header--selected">Dashboard</NavLink>
		</nav>
	)
}

export default Header
