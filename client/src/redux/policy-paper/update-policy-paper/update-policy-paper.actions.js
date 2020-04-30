import PolicyPaperActionTypes from './update-policy-paper.types';

export const updatePolicyPaperStarted = (payload) => ({
  type: PolicyPaperActionTypes.UPDATE_POLICY_PAPER_STARTED,
  payload
});

export const updatePolicyPaperFailed = (error) => ({
  type: PolicyPaperActionTypes.UPDATE_POLICY_PAPER_FAILED,
  payload: error
});
