import { createSelector } from 'reselect';

const selectAdminState = (state) => state.admin;

export const selectUsers = createSelector([selectAdminState],
  (admin) => admin.users);

export const selectLoading = createSelector([selectAdminState],
  (admin) => admin.isLoading);
