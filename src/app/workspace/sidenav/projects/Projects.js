import React, { useState } from 'react'
import './Projects.css'

const Projects = ({ projects }) => {

	const [activeProject, setActiveProject] = useState('')
	const handleClick = id => setActiveProject(id)

	return (
		<div className="projects">
			{projects.map(project => {
				const selectedProject = activeProject === project.id ? 'project--selected' : ''
				return (
					<div key={project.id} className={`projects__item ${selectedProject}`} onClick={() => handleClick(project.id)}>
						<span className={`fa fa-${project.icon}`}></span>
						<span className="projects__item-title">{project.title}</span>
					</div>
				)
			})}
		</div>
	)
}

export default Projects
