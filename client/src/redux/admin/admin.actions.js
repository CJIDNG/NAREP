import AdminActionTypes from './admin.types';

export const fetchUsersStarted = (payload) => ({
  type: AdminActionTypes.FETCH_ALL_USERS_STARTED,
  payload
});

export const fetchUsersSucceeded = (users) => ({
  type: AdminActionTypes.FETCH_ALL_USERS_SUCCEEDED,
  payload: users
});
export const fetchUsersFailed = (error) => ({
  type: AdminActionTypes.FETCH_ALL_USERS_FAILED,
  payload: error
});

export const deleteUserStarted = (payload) => ({
  type: AdminActionTypes.DELETE_USER_STARTED,
  payload
});

export const deleteUserFailed = (error) => ({
  type: AdminActionTypes.DELETE_USER_FAILED,
  payload: error
});

export const updateUserStarted = (payload) => ({
  type: AdminActionTypes.UPDATE_USER_STARTED,
  payload
});
export const updateUserSucceeded = (user) => ({
  type: AdminActionTypes.UPDATE_USER_SUCCEEDED,
  payload: user
});
export const updateUserFailed = (error) => ({
  type: AdminActionTypes.UPDATE_USER_FAILED,
  payload: error
});
