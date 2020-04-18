import React from 'react'
import './Ticket.css'
import { useDrag } from 'react-dnd'
import Priority from './Priority'
// import profileImg from '../../../assets/profile.png'

const Ticket = ({ item, onDragRemove }) => {
	const [, dragRef] = useDrag({
		item: { type: 'DRAG_CARD', title: item.title },
		end(item) {
			onDragRemove(item)
		}
	})

	return (
		<div ref={dragRef} className="ticket">
			<Priority level={item.priority} />
			<div className="ticket__options"><span className="fa fa-info-circle"></span></div>
			<div className="ticket__title">{item.title}</div>
			<div className="ticket__created-date">12/17/1992</div>
			<div className="ticket__due-date"><span className="fa fa-clock"></span>Due Aug 08</div>
			{/* <div className="ticket__user-img"><img alt="User Profile" src={profileImg} /></div> */}
		</div>
	)
}

export default Ticket
