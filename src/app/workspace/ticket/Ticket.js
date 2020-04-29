import React from 'react'
import './Ticket.css'
import Priority from './Priority'
import { Draggable } from 'react-beautiful-dnd'

const Ticket = ({ item, index, openModal }) => {

	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided, snapshot) => {

				// Change background when dragging ticket
				const style = {
					...provided.draggableProps.style,
					background: snapshot.isDragging ? 'var(--color-neutral-9)' : ''
				}

				return (
					<div
						ref={provided.innerRef}
						{...provided.dragHandleProps}
						{...provided.draggableProps}
						className="ticket"
						onClick={() => openModal(item)}
						style={style}
					>
						<Priority level={item.priority} />
						<div className="ticket__title">{item.title}</div>
						<div className="ticket__due-date"><span className="fa fa-clock"></span>Due {item.dueDate}</div>
					</div>
				)
			}}
		</Draggable>
	)
}

export default Ticket
