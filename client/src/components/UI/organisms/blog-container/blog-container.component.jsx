import React from 'react';
import Posts from '@Molecules/get-posts/get-posts.components'
import PostsTags from '@Atoms/posts-tags/posts-tags.component'
import { withRouter } from 'react-router-dom';
const BlogContainer = ({ history }) => {
  const handleCreateNewPost = (event) => {
    event.preventDefault();
    history.push('/blog/create');
  };
  return (
    <div className='m-20 '>
      <button
        type="button"
        className="px-8 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        onClick={ handleCreateNewPost }
      >
        Create Blog
        </button>

      <PostsTags />
      <Posts />
    </div>
  )
};

export default withRouter(BlogContainer);