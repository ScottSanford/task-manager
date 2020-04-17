import React, { useState } from 'react'
import './Sidenav.css'
import SidenavIcon from './SidenavIcon'

const Sidenav = () => {

	const [isSideNavOpen, setSideNavOpen] = useState(true)
	const [sidenavStyles, setSidenavStyles] = useState({
		minWidth: 250,
	})

	const toggleSidenav = () => {
		if (isSideNavOpen) {
			setSideNavOpen(false)
			setSidenavStyles({
				marginLeft: -190,
				transition: `margin-left 0.15s`
			})
		} else {
			setSideNavOpen(true)
			setSidenavStyles({
				marginLeft: 0,
				transition: `margin-left 0.15s`
			})
		}
	}

	return (
		<>
			<div className="sidenav" style={sidenavStyles}>
				<h2>Workspaces</h2>
				<SidenavIcon
					isOpen={isSideNavOpen}
					handleClick={toggleSidenav}
				/>
			</div>
		</>
	)
}

export default Sidenav
