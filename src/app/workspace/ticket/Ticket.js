import React from 'react'
import './Ticket.css'
import { useDrag } from 'react-dnd'

const Ticket = ({ item, onDragRemove }) => {
	const [, dragRef] = useDrag({
		item: { type: 'DRAG_CARD', title: item.title },
		end(item) {
			onDragRemove(item)
		}
	})

	return (
		<div ref={dragRef} className="ticket">
			<div className="ticket__tag">Urgent</div>
			<div className="ticket__options"><span className="fa fa-angle-down"></span></div>
			<div className="ticket__title">{item.title}</div>
			<div className="ticket__created-date">12/17/1992</div>
			<div className="ticket__due-date"><span className="fa fa-clock"></span> 12/12/2020</div>
			<div className="ticket__user-img"><span className="fa fa-user-circle"></span></div>
		</div>
	)
}

export default Ticket
