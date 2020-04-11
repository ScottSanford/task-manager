import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
	const activeStyle = { color: '#F15B2A' }

	return (
		<nav className="header">
			<div>Logo</div>
			<NavLink exact to="/" activeStyle={activeStyle}>Workspace</NavLink>{" | "}
			<NavLink to="/dashboard" activeStyle={activeStyle}>Dashboard</NavLink>
		</nav>
	)
}

export default Header