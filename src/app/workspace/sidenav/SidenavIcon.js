import React from 'react'

const SidenavIcon = ({ handleClick }) => {

	return (
		<div className="sidenav__toggle" onClick={handleClick}>
			<span className="fa fa-angle-left"></span>
		</div>
	)
}

export default SidenavIcon