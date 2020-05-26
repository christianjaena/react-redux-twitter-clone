import React from 'react';
import './UserAccount.css';
import UserAccountIcon from '../UserAccountIcon/UserAccountIcon';
import UserAccountDetails from '../UserAccountDetails/UserAccountDetails';
const UserAccount = ({ username, name}) => {
	return (
		<div className='user-icon-container'>
			<UserAccountIcon />
			<UserAccountDetails username={username} name={name}/>
		</div>
	);
};

export default UserAccount;
