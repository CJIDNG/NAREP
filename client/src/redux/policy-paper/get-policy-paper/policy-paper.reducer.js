import PolicyPaperActionTypes from './policy-paper.types';

const INITIAL_STATE = {
  policyPapers: [],
  numberOfFiles: 0,
  isLoading: false,
  error: null,
};


const policyPapersReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PolicyPaperActionTypes.FETCH_ALL_POLICY_PAPER_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case PolicyPaperActionTypes.FETCH_ALL_POLICY_PAPER_SUCCEEDED:
      return {
        ...state,
        policyPapers: payload.allFiles,
        numberOfFiles: Number(payload.filesCount),
        isLoading: false
      };
    case PolicyPaperActionTypes.FETCH_ALL_POLICY_PAPER_FAILED:
      return {
        ...state,
        error: payload.errors
      };
    default:
      return state;
  }
};

export default policyPapersReducer;
