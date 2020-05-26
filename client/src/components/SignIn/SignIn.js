import React from 'react';
import './SignIn.css';

const SignIn = ({ onInputChange, onPasswordChange, onFormSubmit, email, password }) => {
	return (
		<div className='container'>
			<form>
				<img
					src='https://pngimage.net/wp-content/uploads/2018/06/twitter-icon-white-png-4.png'
					alt='logo'
				/>
				<h2>Log in to Twitter</h2>
				<div className='input'>
					<p>Phone, email, or username</p>
					<input type='email' onChange={onInputChange} />
				</div>
				<div className='input'>
					<p>Password</p>
					<input type='password' onChange={onPasswordChange} />
				</div>
				<input
					className='submit'
					type='submit'
					value='Log in'
					onClick={(event) => onFormSubmit(event, email, password)}
				/>
				<div className='anchor'>
					<a href='#!'>Forgot password?</a>
					<span> · </span>
					<a href='#!'>Sign up for Twitter</a>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
