import React from 'react'

const SidenavIcon = ({ handleClick, isOpen }) => {

	const angleDirection = isOpen ? 'left' : 'right'

	return (
		<div className="sidenav__toggle" onClick={handleClick}>
			<span className={`fa fa-angle-${angleDirection}`}></span>
		</div>
	)
}

export default SidenavIcon