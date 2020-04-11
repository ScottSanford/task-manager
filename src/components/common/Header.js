import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	const activeStyle = { color: '#F15B2A' }

	return (
		<nav>
			<NavLink exact to="/" activeStyle={activeStyle}>Workspace</NavLink>{" | "}
			<NavLink to="/about" activeStyle={activeStyle}>Dashboard</NavLink>
		</nav>
	)
}

export default Header