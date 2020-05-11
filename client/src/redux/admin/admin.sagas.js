import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import API_REQUEST from './admin.requests';
import AdminActionTypes from './admin.types';
import {
  fetchUsersFailed, fetchUsersSucceeded, deleteUserFailed, updateUserFailed, updateUserSucceeded
} from './admin.actions';


export function* fetchUsers () {
  try {
    const fetchedUsers = yield call(API_REQUEST.fetchUsers);
    yield put(fetchUsersSucceeded(fetchedUsers.data.users));
  } catch (error) {
    yield put(fetchUsersFailed(error));
  }
}

export function* deleteUser (action) {
  try {
    const response = yield call(API_REQUEST.deleteUser, action.payload);
    const { data: { errors } } = response;
    switch (response.status) {
      case 404:
        toast.error(errors.message, { autoClose: 5000 });
        return false;
      case 200:
        toast.success('User deleted successfully', { autoClose: 5000 });
        window.location.reload();
        return;

      default:
        return;
    }
  } catch (error) {
    yield put(deleteUserFailed(error));
  }
}
export function* updateUser ({ payload }) {
  try {
    const response = yield call(API_REQUEST.updateUser, payload);
    const { data: { errors } } = response;
    switch (response.status) {
      case 404:
      case 409:
        toast.error(errors.message, { autoClose: 5000 });
        return false;
      case 400:
        Object.values(errors).map((eachError) => toast.error(eachError, { autoClose: 5000 }));
        return false;
      case 200:
        yield put(updateUserSucceeded(response.data));
        toast.success('User updated successfully', { autoClose: 5000 });
        return;

      default:
        return;
    }
  } catch (error) {
    yield put(updateUserFailed(error));
  }
}
export function* onUpdateUserStart () {
  yield takeLatest(AdminActionTypes.UPDATE_USER_STARTED, updateUser);
}

export function* onDeleteUserStart () {
  yield takeLatest(AdminActionTypes.DELETE_USER_STARTED, deleteUser);
}

export function* onFetchUsersStart () {
  yield takeLatest(AdminActionTypes.FETCH_ALL_USERS_STARTED, fetchUsers);
}

export function* adminSagas () {
  yield all([
    call(onFetchUsersStart),
    call(onDeleteUserStart),
    call(onUpdateUserStart)

  ]);
}
