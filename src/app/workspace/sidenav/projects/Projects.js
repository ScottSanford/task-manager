import React, { useState } from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'

const Projects = ({ projects }) => {

	const [activeProject, setActiveProject] = useState('')
	const handleClick = id => setActiveProject(id)

	return (
		<div className="projects">
			{projects.map(project => {
				const selectedProject = activeProject === project.id ? 'project--selected' : ''
				return (
					<Link key={project.id} to={`/${project.id}`} style={{ textDecoration: 'none' }}>
						<div className={`projects__item ${selectedProject}`} onClick={() => handleClick(project.id)}>
							<span className={`fa fa-${project.icon}`}></span>
							<span className="projects__item-title">{project.title}</span>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default Projects
