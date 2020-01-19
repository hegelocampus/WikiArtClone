import { call, fork, put, take } from 'redux-saga/effects';
import {
  USER,
  receiveUser,
  logoutCurrentUser,
  receiveErrors
} from '../actions/session_actions';

function* loginUser(action) {
  try {
    const currentUser = yield call(ApiUtil.login, action.payload.userData);
    yield put(receiveCurrentUser(currentUser));
  } catch (error) {
    yield put(receiveErrors(error));
  }
}

function* loginWatcher(action, signupTask) {
  const { login } = yield takeLatest(USER.LOGIN);
  yield call(loginUser, login);
  yield cancel(signupTask);
}

function* signupUser(action) {
  try {
    const currentUser = yield call(ApiUtil.signup, action.payload.userData);
    yield put(receiveCurrentUser(currentUser));
  } catch (error) {
    yield put(receiveErrors(error));
  }
}

function* signupWatcher(action, loginTask) {
  const { login } = yield takeLatest(USER.SIGNUP);
  yield call(signupUser, login);
  yield cancel(loginTask);
}

function* logoutUser() {
  try {
    yield call(ApiUtil.logout());
    yield put(logoutCurrentUser());
  } catch (error) {
    yield put(receiveErrors(error));
  }
}

export default function* sessionWatcher() {
  while (true) {
    let loginTask, signupTask;
    loginTask = yield fork(loginUser, signupTask);
    signupTask = yield fork(signupUser, loginTask);
    yield take(USER.REQUEST_LOGOUT, logoutUser);
  }
}

