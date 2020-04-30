import UserActionTypes from './user.types';

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGNUP_START,
  payload: userCredentials
});
export const signUpSuccess = (currentUser) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: currentUser.data.user
});
export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: error.response.data.errors
});

export const requestLogin = (payload) => ({
  type: UserActionTypes.LOGIN_IN_PROGRESS,
  payload
});
export const loginUser = (payload) => ({
  type: UserActionTypes.LOGIN_USER,
  payload
});
export const handleLoginError = (payload) => ({
  type: UserActionTypes.LOGIN_ERROR,
  payload
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGNOUT_START
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS
});
export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGNOUT_FAILURE,
  payload: error
});
