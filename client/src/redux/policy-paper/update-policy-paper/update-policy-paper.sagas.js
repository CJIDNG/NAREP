import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import API_REQUEST from './update-policy-paper.requests';
import PolicyPaperActionTypes from './update-policy-paper.types';
import { updatePolicyPaperFailed } from './update-policy-paper.actions';


export function* updatePolicyPaper(action) {
  try {
    const response = yield call(API_REQUEST.updatePolicyPaper, action.payload);
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
    yield put(updatePolicyPaperFailed(error));
  }
}
export function* onUpdatePolicyPaperStart() {
  yield takeLatest(PolicyPaperActionTypes.UPDATE_POLICY_PAPER_STARTED, updatePolicyPaper);
}

export function* updatePolicyPaperSagas() {
  yield all([
    call(onUpdatePolicyPaperStart),
  ]);
}
