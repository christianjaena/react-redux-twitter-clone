import React from 'react'

const Register = ({ onInputChange, onPasswordChange, onFormSubmit }) => {
	return (
		<div className='container'>
			<form>
				<img
					src='https://pngimage.net/wp-content/uploads/2018/06/twitter-icon-white-png-4.png'
					alt='logo'
				/>
				<h2>Sign up to Twitter</h2>
				<div className='input'>
					<p>First Name</p>
					<input type='text' onChange={onInputChange} />
				</div>
				<div className='input'>
					<p>Last Name</p>
					<input type='text' onChange={onInputChange} />
				</div>
				<div className='input'>
					<p>User Name</p>
					<input type='text' onChange={onInputChange} />
				</div>
				<div className='input'>
					<p>Email</p>
					<input type='email' onChange={onInputChange} />
				</div>
				<div className='input'>
					<p>Password</p>
					<input type='password' onChange={onPasswordChange} />
				</div>
				<input
					className='submit'
					type='submit'
					value='Register'
					onClick={onFormSubmit}
				/>
			</form>
		</div>
	)
}

export default Register
