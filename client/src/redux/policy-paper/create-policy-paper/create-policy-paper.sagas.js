import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import API_REQUEST from './create-policy-paper.requests';
import PolicyPaperActionTypes from './create-policy-paper.types';
import { createPolicyPaperFailed } from './create-policy-paper.actions';


export function* createPolicyPaper({ payload }) {
  try {
    const response = yield call(API_REQUEST.createPolicyPaper, payload);
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
    yield put(createPolicyPaperFailed(error));
  }
}
export function* onCreatePolicyPaperStart() {
  yield takeLatest(PolicyPaperActionTypes.CREATE_POLICY_PAPER_STARTED, createPolicyPaper);
}

export function* createPolicyPaperSagas() {
  yield all([
    call(onCreatePolicyPaperStart),
  ]);
}
