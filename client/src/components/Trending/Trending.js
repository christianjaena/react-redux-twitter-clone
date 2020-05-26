import React from 'react';
import Trend from '../Trend/Trend';
import WhoToFollow from '../WhoToFollow/WhoToFollow';
import './Trending.css';
import { FiSearch } from 'react-icons/fi';
import { BsFillGearFill } from 'react-icons/bs';
const Trending = () => {
	return (
		<div className='trending-container'>
			<div className='search-container'>
				<span>
					<FiSearch />
				</span>
				<input type='text' placeholder='Search Twitter' />
			</div>
			<div className='scroll-container'>
				<div className='trending-section'>
					<div className='trending-title'>
						<h2>Trends for you</h2>
						<div>
							<BsFillGearFill />
						</div>
					</div>
					<Trend />
					<Trend />
					<Trend />
					<Trend />
					<Trend />
				</div>
				<WhoToFollow />
			</div>
		</div>
	);
};

export default Trending;
