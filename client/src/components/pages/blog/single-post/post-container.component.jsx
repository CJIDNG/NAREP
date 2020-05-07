import React from 'react';
import PostPage from './post.component';

const PostContainer = ({ ...singlePost }) => (
  <PostPage { ...singlePost } />
);

export default PostContainer;