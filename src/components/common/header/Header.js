import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {


	return (
		<nav className="header">
			<div className="header__logo">Logo</div>
			<Link to="/" className="header__nav">Workspace</Link>
			<Link to="/dashboard" className="header__nav">Dashboard</Link>
		</nav>
	)
}

export default Header
