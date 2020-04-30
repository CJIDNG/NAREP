import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push } from 'react-router-redux';
import API_REQUEST from './delete-dataset.requests';
import DataSetsActionTypes from './delete-dataset.types';
import { deleteDatasetFailed } from './delete-dataset.actions';


export function* deleteDataset(action) {
  try {
    const response = yield call(API_REQUEST.deleteDataset, action.payload);
    const { data: { errors } } = response;
    switch (response.status) {
      case 404:
        toast.error(errors.message, { autoClose: 5000 });
        return false;
      case 200:
        toast.success('File deleted successfully', { autoClose: 5000 });
        yield put(push('/datasets'));
        return;

      default:
        return;
    }
  } catch (error) {
    yield put(deleteDatasetFailed(error));
  }
}
export function* onDeleteDatasetsStart() {
  yield takeLatest(DataSetsActionTypes.DELETE_DATASET_STARTED, deleteDataset);
}

export function* deleteDatasetSagas() {
  yield all([
    call(onDeleteDatasetsStart),
  ]);
}
