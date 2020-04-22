import React from 'react'
import './TextInput.css'

const TextInput = ({
	iconStyle,
	onChange,
	placeholder,
	type = 'text',
	value,
}) => {
	return (
		<div className="TextInput">
			<div className="TextInput__Icon">
				<span className="fa fa-user" style={iconStyle}></span>
			</div>
			<input
				className="TextInput__Input"
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	)
}

export default TextInput