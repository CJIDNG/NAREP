import { createSelector } from 'reselect';

const selectItems = (state) => state.posts;
const selectSinglePost = (state) => state.singlePost;

export const selectPosts = createSelector([selectItems],
  (posts) => posts.posts);

export const selectPostsCount = createSelector([selectItems],
  (posts) => posts.numberOfPosts);

export const selectTags = createSelector([selectItems],
  (posts) => posts.tags);

export const selectPost = createSelector([selectSinglePost],
  (singlePost) => singlePost);