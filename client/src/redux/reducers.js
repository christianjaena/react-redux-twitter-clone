import {
	EMAIL_INPUT,
	PASSWORD_INPUT,
	SUBMIT_FORM_PENDING,
	SUBMIT_FORM_SUCCESS,
	SUBMIT_FORM_FAILED,
	TOGGLE_LOG_USER,
	LOG_OUT_USER
} from './constants';

const initialStateSignIn = {
	email: '',
	password: '',
	isPending: false,
	error: '',
	data: '',
	onRoute: '',
	isSignedIn: false,
	isLogUserToggled: false,
	username: '',
	name: ''
};

export const signInReducer = (state = initialStateSignIn, action = {}) => {
	console.log(action.type)
	switch (action.type) {
		case EMAIL_INPUT:
			return Object.assign({}, state, { email: action.payload });
		case PASSWORD_INPUT:
			return Object.assign({}, state, { password: action.payload });
		case SUBMIT_FORM_PENDING:
			return Object.assign({}, state, { isPending: true });
		case SUBMIT_FORM_SUCCESS:
			return Object.assign({}, state, {
				data: action.payload,
				isPending: false,
				email: action.payload.email,
				name: action.payload.name,
				isSignedIn: true
			});
		case SUBMIT_FORM_FAILED:
			return Object.assign({}, state, {
				error: action.payload,
				isPending: true,
				isSignedIn: false
			});
		case TOGGLE_LOG_USER:
			return Object.assign({}, state, {
				isLogUserToggled: !state.isLogUserToggled,
			});
		case LOG_OUT_USER:
			return Object.assign({}, state, {
				isLogUserToggled: false, isSignedIn: false, onRoute: ''
			})
		default:
			return state;
	}
};
