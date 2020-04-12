import React from 'react'
import './ActionItem.css'
import { useDrag } from 'react-dnd'

const ActionItem = ({ item, onDragRemove }) => {
	const [{ opacity }, dragRef] = useDrag({
		item: { type: 'DRAG_CARD', title: item.title },
		end(item) {
			onDragRemove(item)
		}
	})

	return (
		<div ref={dragRef} style={{ opacity }} className="action-item">
			{item.title}
		</div>
	)
}

export default ActionItem
