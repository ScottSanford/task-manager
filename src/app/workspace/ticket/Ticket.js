import React from 'react'
import './Ticket.css'
import Priority from './Priority'

const Ticket = ({ item, onDragRemove, openModal }) => {

	return (
		<div className="ticket" onClick={() => openModal(item)}>
			<Priority level={item.priority} />
			<div className="ticket__title">{item.title}</div>
			<div className="ticket__due-date"><span className="fa fa-clock"></span>Due {item.dueDate}</div>
		</div>
	)
}

export default Ticket
