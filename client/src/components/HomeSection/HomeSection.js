import React from 'react';
import { WiStars } from 'react-icons/wi';
import './HomeSection.css';

const HomeSection = () => {
	return (
		<div className='home-section'>
			<p>Home</p>
			<div>
				<WiStars style={{ fontSize: '45px', color: '#1DA1F2' }} />
			</div>
		</div>
	);
};

export default HomeSection;
