import PostActionTypes from './posts.types';

export const fetchPostsStarted = (payload) => ({
  type: PostActionTypes.FETCH_ALL_POSTS_STARTED,
  payload
});

export const fetchPostsSucceeded = (posts) => ({
  type: PostActionTypes.FETCH_ALL_POSTS_SUCCEEDED,
  payload: posts
});
export const fetchPostsFailed = (error) => ({
  type: PostActionTypes.FETCH_ALL_POSTS_FAILED,
  payload: error
});

export const deletePostStarted = (payload) => ({
  type: PostActionTypes.DELETE_POST_STARTED,
  payload
});

export const deletePostFailed = (error) => ({
  type: PostActionTypes.DELETE_POST_FAILED,
  payload: error
});

export const updatePostStarted = (payload) => ({
  type: PostActionTypes.UPDATE_POST_STARTED,
  payload
});
export const updatePostSucceeded = (post) => ({
  type: PostActionTypes.UPDATE_POST_SUCCEEDED,
  payload: post
});
export const updatePostFailed = (error) => ({
  type: PostActionTypes.UPDATE_POST_FAILED,
  payload: error
});

export const fetchTagsStarted = (payload) => ({
  type: PostActionTypes.FETCH_ALL_TAGS_STARTED,
  payload
});

export const fetchTagsSucceeded = (tags) => ({
  type: PostActionTypes.FETCH_ALL_TAGS_SUCCEEDED,
  payload: tags
});
export const fetchTagsFailed = (error) => ({
  type: PostActionTypes.FETCH_ALL_TAGS_FAILED,
  payload: error
});