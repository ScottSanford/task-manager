import React from 'react'
import './Ticket.css'
import Priority from './Priority'
import { Draggable } from 'react-beautiful-dnd'

const Ticket = ({ item, index, onDragRemove, openModal }) => {

	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided) => (
				<div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} className="ticket" onClick={() => openModal(item)}>
					<Priority level={item.priority} />
					<div className="ticket__title">{item.title}</div>
					<div className="ticket__due-date"><span className="fa fa-clock"></span>Due {item.dueDate}</div>
				</div>
			)}
		</Draggable>
	)
}

export default Ticket
