import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import API_REQUEST from './create-dataset.requests';
import DataSetsActionTypes from './create-dataset.types';
import { createDatasetFailed } from './create-dataset.actions';


export function* createDataset({ payload }) {
  try {
    const response = yield call(API_REQUEST.createDataset, payload);
    const { data: { errors } } = response;
    switch (response.status) {
      case 404:
      case 409:
        toast.error(errors.message, { autoClose: 5000 });
        return false;
      case 400:
        Object.values(errors).map((eachError) => toast.error(eachError, { autoClose: 5000 }));
        return false;
      case 201:
        toast.success('File successfully created', { autoClose: 5000 });
        window.location.reload();
        return;

      default:
        return;
    }
  } catch (error) {
    yield put(createDatasetFailed(error));
  }
}
export function* onCreateDatasetsStart() {
  yield takeLatest(DataSetsActionTypes.CREATE_DATASET_STARTED, createDataset);
}

export function* createDatasetSagas() {
  yield all([
    call(onCreateDatasetsStart),
  ]);
}
