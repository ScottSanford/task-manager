import React from 'react'
import './Priority.css'
import _ from 'lodash'

const Priority = ({ level }) => {

	const overrideStyles = () => {
		switch (level) {
			case 'low':
				return {
					background: '#E3FCEC',
					color: '#197741',
				}
			case 'medium':
				return {
					background: '#FDF3D7',
					color: '#8C6D1F',
				}

			default:
				return {
					background: '#fce8e8',
					color: '#b72020',
				}
		}
	}

	return (
		<div className="ticket__tag">
			<span style={overrideStyles()}>{_.capitalize(level)}</span>
		</div>
	)
}

export default Priority