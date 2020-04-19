import React from 'react'
import './Sidenav.css'
import Projects from './projects/Projects'

const Sidenav = ({ projects }) => {

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
