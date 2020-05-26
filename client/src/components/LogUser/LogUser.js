import React from 'react';
import UserAccount from '../UserAccount/UserAccount';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './LogUser.css';
const LogUser = ({ isLogUserToggled, toggleLogUser, logOutUser, username, name }) => {
	const display = isLogUserToggled ? 'block' : 'none';
	return (
		<div className='log-user-container'>
			<div className='log-user-popup' style={{ display: display }}>
				<div className='log-user-container-user'>
					<UserAccount />
				</div>
				<div className='log-user-option'>Add an existing account</div>
				<div className='log-user-option' onClick={logOutUser}>Log out @pdngl</div>
				<div class='triangle'></div>
				<div className='triangle' style={{ display: display }}></div>
			</div>

			<div className='user-profile' onClick={toggleLogUser}>
				<UserAccount username={username} name={name}/>
				<div className='account-button'>
					<MdKeyboardArrowDown
						style={{ fontSize: '30px', color: 'white' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default LogUser;
