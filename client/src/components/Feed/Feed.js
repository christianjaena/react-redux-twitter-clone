import React from 'react';
import SideBar from '../SideBar/SideBar';
import Tweets from '../Tweets/Tweets';
import Trending from '../Trending/Trending';
import './Feed.css';

const Feed = ({ isLogUserToggled, toggleLogUser, logOutUser, username, name }) => {
	return (
		<div className='grid'>
			<SideBar
				isLogUserToggled={isLogUserToggled} toggleLogUser={toggleLogUser}
				logOutUser={logOutUser}
				username={username}
				name={name}
			/>
			<Tweets />
			<Trending />
		</div>
	);
};

export default Feed;
