import React from 'react';
import './UserAccountDetails.css';
const UserAccountDetails = ({ username, name }) => {
	return (
		<div className='user-details'>
			<p className='user-name'>{name}</p>
			<p>@{username}</p>
		</div>
	);
};

export default UserAccountDetails;
