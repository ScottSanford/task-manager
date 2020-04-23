import React from 'react'
import './Ticket.css'
import { useDrag } from 'react-dnd'
import Priority from './Priority'

const Ticket = ({ item, onDragRemove }) => {
	const [, dragRef] = useDrag({
		item: { type: 'DRAG_CARD', ...item },
		end(item) {
			onDragRemove(item)
		}
	})

	return (
		<div ref={dragRef} className="ticket">
			<Priority level={item.priority} />
			<div className="ticket__title">{item.title}</div>
			<div className="ticket__due-date"><span className="fa fa-clock"></span>Due {item.dueDate}</div>
		</div>
	)
}

export default Ticket
