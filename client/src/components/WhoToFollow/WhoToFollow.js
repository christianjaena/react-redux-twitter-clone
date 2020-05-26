import React from 'react';
import AccountToFollow from '../AccountToFollowSection/AccountToFollowSection';
import './WhoToFollow.css'
const WhoToFollow = () => {
	return (
		<div className='trending-section follow-section'>
			<div className='trending-title'>
				<h2>Who To Follow</h2>
			</div>
			<AccountToFollow />
		</div>
	);
};

export default WhoToFollow;
