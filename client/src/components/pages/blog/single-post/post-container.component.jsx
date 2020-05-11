import React from 'react';
import PostPage from './post.component';

const PostContainer = ({ ...singlePost }) => {
  return (
    <PostPage { ...singlePost } />
  )
};

export default PostContainer;