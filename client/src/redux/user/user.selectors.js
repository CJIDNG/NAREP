import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser],
  (user) => user.currentUser);

export const seclectIsAuthenticated = createSelector([selectUser],
  (user) => user.isAuthenticated);

export const seclectAuthError = createSelector([selectUser],
  (user) => user.error);
