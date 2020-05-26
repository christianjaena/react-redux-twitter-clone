import React from 'react';
import UserAccount from '../UserAccount/UserAccount';
import './AccountToFollow.css';
const AccountToFollow = () => {
	return (
		<div className='trend follow'>
			<UserAccount />
			<div className='follow-button'>
				<button>Follow</button>
			</div>
		</div>
	);
};

export default AccountToFollow;
