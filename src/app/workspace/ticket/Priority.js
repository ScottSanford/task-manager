import React from 'react'
import './Priority.css'
import _ from 'lodash'

const Priority = ({ level }) => {

	const overrideStyles = () => {
		switch (level) {
			case 'low':
				return { background: 'var(--color-green-7)' }
			case 'medium':
				return { background: 'var(--color-yellow-7)' }
			default:
				return { background: 'var(--color-red-7)' }
		}
	}

	return <div className="ticket__tag" style={overrideStyles()}></div>
}

export default Priority