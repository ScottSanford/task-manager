import React from 'react'
import './ActionItem.css'

const ActionItem = ({ item }) => {
	return (
		<div className="action-item">
			{item.title}
		</div>
	)
}

export default ActionItem
