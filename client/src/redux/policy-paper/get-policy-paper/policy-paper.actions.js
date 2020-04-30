import PolicyPaperActionTypes from './policy-paper.types';

export const fetchPolicyPapersStarted = (payload) => ({
  type: PolicyPaperActionTypes.FETCH_ALL_POLICY_PAPER_STARTED,
  payload
});

export const fetchPolicyPapersSucceeded = (policyPapers) => ({
  type: PolicyPaperActionTypes.FETCH_ALL_POLICY_PAPER_SUCCEEDED,
  payload: policyPapers
});
export const fetchPolicyPapersFailed = (error) => ({
  type: PolicyPaperActionTypes.FETCH_ALL_POLICY_PAPER_FAILED,
  payload: error
});
