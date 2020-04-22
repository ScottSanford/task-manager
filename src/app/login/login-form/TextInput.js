import React from 'react'
import './TextInput.css'

const TextInput = ({
	iconStyle,
	value,
	type = 'text',
	onChange
}) => {
	return (
		<div className="TextInput">
			<div className="TextInput__Icon">
				<span className="fa fa-user" style={iconStyle}></span>
			</div>
			<input
				type={type}
				value={value}
				placeholder="Username"
				onChange={onChange}
			/>
		</div>
	)
}

export default TextInput