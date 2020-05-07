import PostActionTypes from './posts.types';

const INITIAL_STATE = {
  posts: [],
  numberOfPosts: 0,
  isLoading: false,
  error: null,
  tags: []
};


const postsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PostActionTypes.FETCH_ALL_POSTS_STARTED:
    case PostActionTypes.UPDATE_POST_STARTED:
    case PostActionTypes.DELETE_POST_STARTED:
    case PostActionTypes.FETCH_ALL_TAGS_STARTED:
    case PostActionTypes.FETCH_POST_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case PostActionTypes.FETCH_ALL_POSTS_SUCCEEDED:
      return {
        ...state,
        posts: payload.allPosts,
        numberOfPosts: Number(payload.postsCount),
        isLoading: false
      };
    case PostActionTypes.UPDATE_POST_SUCCEEDED:
      return {
        ...state,
        isLoading: false
      };
    case PostActionTypes.FETCH_ALL_TAGS_SUCCEEDED:
      return {
        ...state,
        tags: payload,
        isLoading: false
      };
    case PostActionTypes.FETCH_ALL_POSTS_FAILED:
    case PostActionTypes.UPDATE_POST_FAILED:
    case PostActionTypes.DELETE_POST_FAILED:
    case PostActionTypes.FETCH_ALL_TAGS_FAILED:
    case PostActionTypes.FETCH_POST_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default postsReducer;
