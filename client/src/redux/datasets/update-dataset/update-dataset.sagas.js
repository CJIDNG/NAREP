import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import API_REQUEST from './update-dataset.requests';
import DataSetsActionTypes from './update-dataset.types';
import { updateDatasetFailed } from './update-dataset.actions';


export function* updateDataset(action) {
  try {
    const response = yield call(API_REQUEST.updateDataset, action.payload);
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
        toast.success('File updated successfully', { autoClose: 5000 });
        window.location.reload();
        return;

      default:
        return;
    }
  } catch (error) {
    yield put(updateDatasetFailed(error));
  }
}
export function* onUpdateDatasetsStart() {
  yield takeLatest(DataSetsActionTypes.UPDATE_DATASET_STARTED, updateDataset);
}

export function* updateDatasetSagas() {
  yield all([
    call(onUpdateDatasetsStart),
  ]);
}
