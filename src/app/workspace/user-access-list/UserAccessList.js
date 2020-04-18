import React from 'react'
import './UserAccessList.css'

const UserAccessList = ({ users }) => {
	console.log('da users', users)
	return (
		<div className="user-access-list">
			<div className="users">
				{users.map(user => {
					return (
						<div key={user.id} className="user-circle">
							{user.firstName[0]}{user.lastName[0]}
						</div>
					)
				})}
			</div>
			<div className="users__button">
				<span className="fa fa-plus"></span>
				<div>New Member</div>
			</div>
		</div>
	)
}

export default UserAccessList