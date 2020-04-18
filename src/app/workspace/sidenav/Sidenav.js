import React, { useState } from 'react'
import './Sidenav.css'
import Projects from './projects/Projects'

const Sidenav = ({ projects }) => {

	// const [isSideNavOpen, setSideNavOpen] = useState(true)
	// const [sidenavStyles, setSidenavStyles] = useState({
	// 	minWidth: 250,
	// })

	// const toggleSidenav = () => {
	// 	if (isSideNavOpen) {
	// 		setSideNavOpen(false)
	// 		setSidenavStyles({
	// 			marginLeft: -190,
	// 			transition: `margin-left 0.15s`
	// 		})
	// 	} else {
	// 		setSideNavOpen(true)
	// 		setSidenavStyles({
	// 			marginLeft: 0,
	// 			transition: `margin-left 0.15s`
	// 		})
	// 	}
	// }

	return (
		<>
			<div className="sidenav">
				<div className="sidenav__title">
					<span className="fa fa-tasks"></span>
					<span>Projects</span>
				</div>
				<Projects projects={projects} />
			</div>
		</>
	)
}

export default Sidenav
