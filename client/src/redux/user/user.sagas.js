import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';
import API_REQUEST from './user.requests';
import UserActionTypes from './user.types';
import {
  signUpFailure, signUpSuccess, handleLoginError, loginUser, signOutSuccess, signOutFailure
} from './user.action';

export function* signUpUser({ payload }) {
  try {
    const response = yield call(API_REQUEST.signupUser, payload);
    const { data: { errors } } = response;
    switch (response.status) {
      case 409:
        yield put({ type: UserActionTypes.LOGIN_RESET });
        toast.error(errors.message, { autoClose: 5000 });
        return false;
      case 201:
        yield put({ type: UserActionTypes.ERROR_RESET });
        yield put(signUpSuccess(response));
        yield put(push('/signin'));
        return;
      default:
        yield put({ type: UserActionTypes.LOGIN_RESET });
        return;
    }
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* onSignupStart() {
  yield takeLatest(UserActionTypes.SIGNUP_START, signUpUser);
}

export function* fetchLogin({ payload }) {
  try {
    const response = yield call(API_REQUEST.signinUser, payload);
    const { data: { errors, user } } = response;
    switch (response.status) {
      case 404:
      case 400:
        yield put({ type: UserActionTypes.LOGIN_RESET });
        toast.error(errors.message, { autoClose: 5000 });
        return false;
      case 200:
        localStorage.setItem('jwtToken', user.token);
        yield put({ type: UserActionTypes.ERROR_RESET });
        yield put(loginUser(jwtDecode(user.token)));
        yield put(push('/'));
        return;
      default:
        yield put({ type: UserActionTypes.LOGIN_RESET });
        return;
    }
  } catch (error) {
    yield put({ type: UserActionTypes.LOGIN_RESET });
    yield put(handleLoginError({ error: 'server error' }));
  }
}
export function* userSignout() {
  try {
    localStorage.removeItem('jwtToken');
    yield put(signOutSuccess());
    window.location.href = '/';
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onEmailSigninStart() {
  yield takeLatest(UserActionTypes.LOGIN_IN_PROGRESS, fetchLogin);
}
export function* onSignoutStart() {
  yield takeLatest(UserActionTypes.SIGNOUT_START, userSignout);
}
export function* userSagas() {
  yield all([
    call(onSignupStart),
    call(onEmailSigninStart),
    call(onSignoutStart),
  ]);
}
