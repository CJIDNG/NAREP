import { createSelector } from 'reselect';

const selectPolicyPapers = (state) => state.policyPapers;

export const selectItems = createSelector([selectPolicyPapers],
  (policyPapers) => policyPapers.policyPapers);

export const selectItemsCount = createSelector([selectPolicyPapers],
  (policyPapers) => policyPapers.numberOfFiles);
