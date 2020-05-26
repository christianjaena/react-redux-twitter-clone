import React from 'react';
import SignIn from './components/SignIn/SignIn';
import Feed from './components/Feed/Feed';
import Register from './components/Register/Register';
import { connect } from 'react-redux';

import {
	emailInputAction,
	passwordInputAction,
	submitFormAction,
	toggleLogUser,
	logOutUser,
} from './redux/actions';

const mapStateToProps = (state) => ({
	email: state.email,
	password: state.password,
	data: state.data,
	error: state.error,
	onRoute: state.onRoute,
	isSignedIn: state.isSignedIn,
	isLogUserToggled: state.isLogUserToggled,
	username: state.username,
	name: state.name,
	isPending: state.isPending,
});

const mapDispatchToProps = (dispatch) => ({
	onInputChange: (event) => dispatch(emailInputAction(event.target.value)),
	onPasswordChange: (event) =>
		dispatch(passwordInputAction(event.target.value)),
	onFormSubmit: (event, email, password) => {
		event.preventDefault();
		dispatch(submitFormAction(email, password));
	},
	toggleLogUser: () => {
		dispatch(toggleLogUser());
	},
	logOutUser: () => {
		dispatch(logOutUser());
	},
});

class App extends React.Component {
	render() {
		const {
			onInputChange,
			onPasswordChange,
			onFormSubmit,
			isSignedIn,
			onRoute,
			toggleLogUser,
			isLogUserToggled,
			logOutUser,
			username,
			name,
			email,
			password,
			isPending,
		} = this.props;
		return isSignedIn && !isPending ? (
			<Feed
				isLogUserToggled={isLogUserToggled}
				toggleLogUser={toggleLogUser}
				logOutUser={logOutUser}
				username={username}
				name={name}
			/>
		) : onRoute === 'register' ? (
			<Register />
		) : (
			<SignIn
				onInputChange={onInputChange}
				onPasswordChange={onPasswordChange}
				onFormSubmit={onFormSubmit}
				email={email}
				password={password}
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
