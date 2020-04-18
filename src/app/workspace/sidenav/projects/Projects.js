import React from 'react'
import './Projects.css'

const Projects = ({ projects }) => {
	console.log('projects', projects)
	return (
		<div className="projects">
			{projects.map(project => {
				return (
					<div key={project.id} className="projects__item">
						<span className={`fa fa-${project.icon}`}></span>
						<span className="projects__item-title">{project.title}</span>
					</div>
				)
			})}
		</div>
	)
}

export default Projects
