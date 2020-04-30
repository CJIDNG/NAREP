import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import API_REQUEST from './policy-paper.requests';
import PolicyPaperActionTypes from './policy-paper.types';
import {
  fetchPolicyPapersFailed, fetchPolicyPapersSucceeded,
} from './policy-paper.actions';


export function* fetchPolicyPapers({ payload: page }) {
  try {
    const response = yield call(API_REQUEST.fetchPolicyPapers, page);

    yield put(fetchPolicyPapersSucceeded(response.data.files));
    return;
  } catch (error) {
    yield put(fetchPolicyPapersFailed(error));
  }
}

export function* onFetchPolicyPaperStart() {
  yield takeLatest(PolicyPaperActionTypes.FETCH_ALL_POLICY_PAPER_STARTED, fetchPolicyPapers);
}
export function* policyPaperSagas() {
  yield all([
    call(onFetchPolicyPaperStart),
  ]);
}
