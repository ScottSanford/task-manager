import React from 'react'
import './Workspace.css'
import CardList from '../card-list/CardList'

const Workspace = () => (
	<div className="workspace">
		<CardList title="Todo" />
		<CardList title="In Progress" />
		<CardList title="Done" />
	</div>
)

export default Workspace