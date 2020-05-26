import React from 'react';
import UserAccountDetails from '../UserAccountDetails/UserAccountDetails';
import UserAccountIcon from '../UserAccountIcon/UserAccountIcon';
import { FaRegCommentAlt, FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import './Tweet.css';
import ArrowDownOption from '../ArrowDownOption/ArrowDownOption';
const Tweet = () => {
	return (
		<div className='tweet-user'>
			<UserAccountIcon />
			<div class='tweet-content-container'>
				<UserAccountDetails />
				<div className='tweet-content'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Distinctio magnam accusantium placeat saepe quo eum culpa velit
					aperiam animi, voluptatum beatae maxime, consequatur illum
					aspernatur repellat doloremque earum quae. Laborum temporibus
					dolorum perferendis ullam maxime tempora? Consequatur, rem, nam
					at sed, facere praesentium doloremque nostrum repellendus
					adipisci fugit ullam aperiam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam accusantium placeat saepe quo eum culpa velit aperiam animi, voluptatum beatae maxime, consequatur illum aspernatur repellat doloremque earum quae. Laborum temporibus dolorum perferendis ullam maxime tempora? Consequatur, rem, nam at sed, facere praesentium doloremque nostrum repellendus adipisci fugit ullam aperiam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam accusantium placeat saepe quo eum culpa velit aperiam animi, voluptatum beatae maxime, consequatur illum aspernatur repellat doloremque earum quae. Laborum temporibus dolorum perferendis ullam maxime tempora? Consequatur, rem, nam at sed, facere praesentium doloremque nostrum repellendus adipisci fugit ullam aperiam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam accusantium placeat saepe quo eum culpa velit aperiam animi, voluptatum beatae maxime, consequatur illum aspernatur repellat doloremque earum quae. Laborum temporibus dolorum perferendis ullam maxime tempora? Consequatur, rem, nam at sed, facere praesentium doloremque nostrum repellendus adipisci fugit ullam aperiam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam accusantium placeat saepe quo eum culpa velit aperiam animi, voluptatum beatae maxime, consequatur illum aspernatur repellat doloremque earum quae. Laborum temporibus dolorum perferendis ullam maxime tempora? Consequatur, rem, nam at sed, facere praesentium doloremque nostrum repellendus adipisci fugit ullam aperiam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam accusantium placeat saepe quo eum culpa velit aperiam animi, voluptatum beatae maxime, consequatur illum aspernatur repellat doloremque earum quae. Laborum temporibus dolorum perferendis ullam maxime tempora? Consequatur, rem, nam at sed, facere praesentium doloremque nostrum repellendus adipisci fugit ullam aperiam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam accusantium placeat saepe quo eum culpa velit aperiam animi, voluptatum beatae maxime, consequatur illum aspernatur repellat doloremque earum quae. Laborum temporibus dolorum perferendis ullam maxime tempora? Consequatur, rem, nam at sed, facere praesentium doloremque nostrum repellendus adipisci fugit ullam aperiam!
				</div>
				<div className='reaction-container'>
					<div className='reaction comment'>
						<span className='reaction-icon'>
							<FaRegCommentAlt />
						</span>
						<div className='metrics'>{113}</div>
					</div>
					<div className='reaction like'>
						<span className='reaction-icon'>
							<FaRetweet style={{ fontSize: '20px' }} />
						</span>
						<div className='metrics'>{18}</div>
					</div>
					<div className='reaction retweet'>
						<span className='reaction-icon'>
							<AiOutlineHeart style={{ fontSize: '18px' }} />
						</span>
						<div className='metrics'>{21}</div>
					</div>
					<span className='reaction-icon'>
						<FiShare style={{ fontSize: '18px' }} />
					</span>
				</div>
			</div>
			<ArrowDownOption />
		</div>
	);
};

export default Tweet;
