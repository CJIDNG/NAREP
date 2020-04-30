import AdminActionTypes from './admin.types';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  error: null,
};


const adminReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AdminActionTypes.FETCH_ALL_USERS_STARTED:
    case AdminActionTypes.UPDATE_USER_STARTED:
    case AdminActionTypes.DELETE_USER_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case AdminActionTypes.FETCH_ALL_USERS_SUCCEEDED:
      return {
        ...state,
        users: payload.allUsers,
        isLoading: false
      };
    case AdminActionTypes.UPDATE_USER_SUCCEEDED:
      return {
        ...state,
        isLoading: false
      };
    case AdminActionTypes.FETCH_ALL_USERS_FAILED:
    case AdminActionTypes.UPDATE_USER_FAILED:
    case AdminActionTypes.DELETE_USER_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default adminReducer;
