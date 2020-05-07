const PostActionTypes = {
  FETCH_ALL_POSTS_STARTED: 'FETCH_ALL_POSTS_STARTED',
  FETCH_ALL_POSTS_SUCCEEDED: 'FETCH_ALL_POSTS_SUCCEEDED',
  FETCH_ALL_POSTS_FAILED: 'FETCH_ALL_POSTS_FAILED',
  DELETE_POST_STARTED: 'DELETE_POST_STARTED',
  DELETE_POST_FAILED: 'DELETE_POST_FAILED',
  UPDATE_POST_STARTED: 'UPDATE_POST_STARTED',
  UPDATE_POST_SUCCEEDED: 'UPDATE_POST_SUCCEEDED',
  UPDATE_POST_FAILED: 'UPDATE_POST_FAILED',
  FETCH_ALL_TAGS_STARTED: 'FETCH_ALL_TAGS_STARTED',
  FETCH_ALL_TAGS_SUCCEEDED: 'FETCH_ALL_TAGS_SUCCEEDED',
  FETCH_ALL_TAGS_FAILED: 'FETCH_ALL_TAGS_FAILED',
  FETCH_POST_STARTED: 'FETCH_POST_STARTED',
  FETCH_POST_SUCCEEDED: 'FETCH_POST_SUCCEEDED',
  FETCH_POST_FAILED: 'FETCH_POST_FAILED',
  CREATE_POST_STARTED: 'CREATE_POST_STARTED',
  CREATE_POST_SUCCEEDED: 'CREATE_POST_SUCCEEDED',
  CREATE_POST_FAILED: 'CREATE_POST_FAILED',
};
export default PostActionTypes;