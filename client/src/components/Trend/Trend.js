import React from 'react';
import ArrowDownOption from '../ArrowDownOption/ArrowDownOption';
import './Trend.css';
const Trend = () => {
	return (
		<div className='trend'>
			<div>
				<h4>#Trending</h4>
			</div>
			<ArrowDownOption />
		</div>
	);
};

export default Trend;
