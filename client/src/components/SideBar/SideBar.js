import React from 'react';
import LogUser from '../LogUser/LogUser';
import './SideBar.css';
import {
	FaHome,
	FaHashtag,
	FaBell,
	FaEnvelope,
	FaUserAlt,
	FaEllipsisH,
	FaTwitter,
} from 'react-icons/fa';

const SideBar = ({ isLogUserToggled, toggleLogUser, logOutUser, username, name }) => {
	return (
		<div className='sidebar'>
			<ul>
				<li>
					<FaTwitter
						style={{
							fontSize: '30px',
							color: 'white',
						}}
					/>
				</li>
				<li>
					<FaHome style={{ fontSize: '30px', marginRight: '20px' }} />
					Home
				</li>
				<li>
					<FaHashtag style={{ fontSize: '30px', marginRight: '20px' }} />
					Explore
				</li>
				<li>
					<FaBell style={{ fontSize: '30px', marginRight: '20px' }} />
					Notifications
				</li>
				<li>
					<FaEnvelope style={{ fontSize: '30px', marginRight: '20px' }} />
					Messages
				</li>
				<li>
					<FaUserAlt style={{ fontSize: '30px', marginRight: '20px' }} />
					Profile
				</li>
				<li>
					<FaEllipsisH style={{ fontSize: '30px', marginRight: '20px' }} />
					More&More
				</li>
			</ul>
			<button className='tweet-button-sidebar'>Tweet</button>
			<LogUser
				isLogUserToggled={isLogUserToggled}
				toggleLogUser={toggleLogUser}
				logOutUser={logOutUser}
				username={username}
				name={name}
			/>
		</div>
	);
};

export default SideBar;
