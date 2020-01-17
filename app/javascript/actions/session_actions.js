import * as ApiUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const oldLogin = formUser => dispatch => ApiUtil.login(formUser).then(
  user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON))
);

export const signup = formUser => dispatch => ApiUtil.signup(formUser).then(
  user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON))
);

export const logout = () => dispatch => ApiUtil.logout().then(
  () => dispatch(logoutCurrentUser()),
  errors => dispatch(receiveErrors(errors.responseJSON))
);

