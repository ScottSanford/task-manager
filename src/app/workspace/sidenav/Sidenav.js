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
				<div className="sidenav__title">
					<span className="fa fa-tasks"></span>
					<span>Projects</span>
				</div>
				<div className="projects">
					<div className="projects__item project--selected">
						<span className="fa fa-user"></span>
						<span className="projects__item-title">Personal</span>
					</div>
					<div className="projects__item">
						<span className="fa fa-briefcase"></span>
						<span className="projects__item-title">Career</span>
					</div>
					<div className="projects__item">
						<span className="fa fa-bicycle"></span>
						<span className="projects__item-title">Fitness</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Sidenav
