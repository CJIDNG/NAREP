import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import API_REQUEST from './delete-policy-paper.requests';
import DeletePolicyPaperActionTypes from './delete-policy-paper.types';
import { deletePolicyPaperFailed } from './delete-policy-paper.actions';


export function* deletePolicyPaper(action) {
  try {
    const response = yield call(API_REQUEST.deletePolicyPaper, action.payload);
    const { data: { errors } } = response;
    switch (response.status) {
      case 404:
        toast.error(errors.message, { autoClose: 5000 });
        return false;
      case 200:
        toast.success('File deleted successfully', { autoClose: 5000 });
        window.location.reload();
        return;

      default:
        return;
    }
  } catch (error) {
    yield put(deletePolicyPaperFailed(error));
  }
}
export function* onDeletePolicyPaperStart() {
  yield takeLatest(DeletePolicyPaperActionTypes.DELETE_POLICY_PAPER_STARTED, deletePolicyPaper);
}

export function* deletePolicyPaperSagas() {
  yield all([
    call(onDeletePolicyPaperStart),
  ]);
}
