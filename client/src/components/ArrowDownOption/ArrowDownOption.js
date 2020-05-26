import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
const ArrowDownOption = () => {
	return (
		<div className='tweet-options-container'>
			<span className='reaction-icon tweet-options'>
				<FiChevronDown style={{ fontSize: '18px' }} />
			</span>
		</div>
	);
};

export default ArrowDownOption;
