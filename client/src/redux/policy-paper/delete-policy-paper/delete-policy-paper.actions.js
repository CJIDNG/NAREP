import DeletePolicyPaperActionTypes from './delete-policy-paper.types';

export const deletePolicyPaperStarted = (payload) => ({
  type: DeletePolicyPaperActionTypes.DELETE_POLICY_PAPER_STARTED,
  payload
});

export const deletePolicyPaperFailed = (error) => ({
  type: DeletePolicyPaperActionTypes.DELETE_POLICY_PAPER_FAILED,
  payload: error
});
