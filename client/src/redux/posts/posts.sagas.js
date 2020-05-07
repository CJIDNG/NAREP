import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import API_REQUEST from './posts.requests';
import PostsActionTypes from './posts.types';
import {
  fetchPostsFailed, fetchPostsSucceeded, fetchTagsFailed, fetchTagsSucceeded,
  fetchSinglePostFailed, fetchSinglePostSucceeded
} from './posts.actions';


export function* fetchPosts () {
  try {
    const query = new URLSearchParams(window.location.search);
    const tags = query.get('tags');
    if (tags) {
      const fetchedPosts = yield call(API_REQUEST.fetchPosts, tags);
      yield put(fetchPostsSucceeded(fetchedPosts.data.posts));
      return;
    }
    const fetchedPosts = yield call(API_REQUEST.fetchPosts);
    yield put(fetchPostsSucceeded(fetchedPosts.data.posts));
    return;
  } catch (error) {
    yield put(fetchPostsFailed(error));
    toast.error('An error occurred')
  }
}
export function* fetchTags () {
  try {
    const fetchedTags = yield call(API_REQUEST.fetchTags);
    yield put(fetchTagsSucceeded(fetchedTags.data.tags));
  } catch (error) {
    yield put(fetchTagsFailed(error));
  }
}

export function* fetchPostBySlug ({ payload: slug }) {
  try {
    const response = yield call(API_REQUEST.fetchSinglePost, slug);
    switch (response.status) {
      case 404:
        yield put(fetchSinglePostFailed(response.data.errors.message));
        return;
      case 200:
        yield put(fetchSinglePostSucceeded(response));
        return;
      default:
        return;
    }
  } catch (error) {
    yield put(fetchSinglePostFailed(error.data.errors.message));
  }
}
export function* onFetchPostsStart () {
  yield takeLatest(PostsActionTypes.FETCH_ALL_POSTS_STARTED, fetchPosts);
}
export function* onFetchTagsStart () {
  yield takeLatest(PostsActionTypes.FETCH_ALL_TAGS_STARTED, fetchTags);
}
export function* onFetchPostStart () {
  yield takeLatest(PostsActionTypes.FETCH_POST_STARTED, fetchPostBySlug);
}
export function* postsSagas () {
  yield all([
    call(onFetchPostsStart),
    call(onFetchTagsStart),
    call(onFetchPostStart)

  ]);
}
