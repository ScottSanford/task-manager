import React from 'react'
import './TextInput.css'

const TextInput = ({
	icon,
	iconStyle,
	onChange,
	placeholder,
	type = 'text',
	value,
}) => {

	const iconType = icon ? icon : 'pencil'

	return (
		<div className="TextInput">
			<div className="TextInput__Icon">
				<span className={`fa fa-${iconType}`} style={iconStyle}></span>
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