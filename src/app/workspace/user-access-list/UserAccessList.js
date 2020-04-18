import React from 'react'
import './UserAccessList.css'

const UserAccessList = () => {

	return (
		<>
			<div className="users">
				<div className="user-circle">SS</div>
				<div className="user-circle">PS</div>
				<div className="user-circle">ON</div>
				<div className="user-circle">LG</div>
			</div>
			<div className="users__button">
				<span className="fa fa-plus"></span>
				<div>New Member</div>
			</div>
		</>
	)
}

export default UserAccessList