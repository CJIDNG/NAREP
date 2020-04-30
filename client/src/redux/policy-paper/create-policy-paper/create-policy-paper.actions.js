import PolicyPaperActionTypes from './create-policy-paper.types';

export const createPolicyPaperStarted = (payload) => ({
  type: PolicyPaperActionTypes.CREATE_POLICY_PAPER_STARTED,
  payload
});

export const createPolicyPaperFailed = (error) => ({
  type: PolicyPaperActionTypes.CREATE_POLICY_PAPER_FAILED,
  payload: error
});
