import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import Posts from '@Molecules/get-posts/get-posts.components'
import PostsTags from '@Atoms/posts-tags/posts-tags.component'
import { withRouter } from 'react-router-dom';
import ButtonTeal from '@Atoms/button-teal/button-teal.component';

const BlogContainer = ({ currentUser, history }) => {
  const role = currentUser ? currentUser.role : null;
  const handleCreateNewPost = (event) => {
    event.preventDefault();
    history.push('/blog/create');
  };
  return (
    <div className='m-20 '>
      {
        role === 'admin' ? (
          <>
            <ButtonTeal children='Create New Post' onClick={ handleCreateNewPost } />
          </>
        ) : null
      }
      <PostsTags />
      <Posts />
    </div>
  )
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default withRouter(connect(mapStateToProps)(BlogContainer));