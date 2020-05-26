import React from 'react';
import UserAccountIcon from '../UserAccountIcon/UserAccountIcon';
import './WriteTweet.css';
import { BsFillImageFill } from 'react-icons/bs';
import { AiOutlineFileGif } from 'react-icons/ai';
import { GoSmiley } from 'react-icons/go';
import { FaPollH } from 'react-icons/fa';
const WriteTweet = () => {
	return (
		<div className='tweet-container'>
			<UserAccountIcon />
			<div className='tweet-input'>
				<input
					type='textarea'
					placeholder="What's happening?"
					maxLength='280'
				/>
				<div className='tweet-inner-container'>
					<div className='media-container'>
						<span>
							<BsFillImageFill
								style={{ fontSize: '20px', color: '#1DA1F2' }}
							/>
						</span>
						<span>
							<AiOutlineFileGif
								style={{ fontSize: '20px', color: '#1DA1F2' }}
							/>
						</span>
						<span>
							<FaPollH
								style={{ fontSize: '20px', color: '#1DA1F2' }}
							/>
						</span>
						<span>
							<GoSmiley style={{ fontSize: '20px', color: '#1DA1F2' }} />
						</span>
					</div>
					<button>Tweet</button>
				</div>
			</div>
		</div>
	);
};

export default WriteTweet;
