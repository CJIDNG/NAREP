import PostsActionTypes from './posts.types';

const INITIAL_STATE = {
  isLoading: true,
  error: null,
  singlePost: {}
};


const singlePostReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PostsActionTypes.FETCH_POST_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case PostsActionTypes.FETCH_POST_SUCCEEDED:
      return {
        ...state,
        singlePost: payload.data.post,
        isLoading: false
      };
    case PostsActionTypes.FETCH_POST_FAILED:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default singlePostReducer;
