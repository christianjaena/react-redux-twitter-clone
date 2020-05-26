import {
	EMAIL_INPUT,
	PASSWORD_INPUT,
	SUBMIT_FORM_PENDING,
	SUBMIT_FORM_SUCCESS,
	SUBMIT_FORM_FAILED,
	TOGGLE_LOG_USER,
	LOG_OUT_USER,
} from './constants';

export const emailInputAction = (text) => {
	return {
		type: EMAIL_INPUT,
		payload: text,
	};
};

export const passwordInputAction = (password) => {
	return {
		type: PASSWORD_INPUT,
		payload: password,
	};
};

export const submitFormAction = (email, password) => (dispatch) => {
	console.log(email)
	console.log(password)
	dispatch({ type: SUBMIT_FORM_PENDING });
	fetch('http://localhost:3000/signin', {
		method: 'post',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({
			email: email,
			password: password
		})
	})
		.then((response) => response.json())
		.then((data) => dispatch({ type: SUBMIT_FORM_SUCCESS, payload: data }))
		.catch((err) => dispatch({ type: SUBMIT_FORM_FAILED, payload: err }));
};

export const toggleLogUser = () => {
	return {
		type: TOGGLE_LOG_USER,
	};
};

export const logOutUser = () => {
	return {
		type: LOG_OUT_USER,
	};
};
