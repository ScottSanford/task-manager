import React from 'react'
import './AddButton.css'

const AddButton = () => {
	return (
		<div className="add-button">
			<span>Add</span>
			<div className="add-button__arrow">
				<span className="fa fa-angle-down"></span>
			</div>
		</div>
	)
}

export default AddButton