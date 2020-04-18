import React from 'react'

const SidenavIcon = ({ handleClick, isOpen }) => {

	const angleDirection = isOpen ? 'left' : 'right'

	return (
		<div className="sidenav__toggle" onClick={handleClick}>
			<input id="slide-sidebar" type="checkbox" role="button" />
			<label htmlFor="slide-sidebar"><span>close</span></label>
			<span className={`fa fa-angle-${angleDirection}`}></span>
		</div>
	)
}

export default SidenavIcon