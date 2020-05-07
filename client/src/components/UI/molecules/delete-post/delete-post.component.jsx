import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import PropTypes from 'prop-types';
import { deletePostStarted } from '@Redux/posts/posts.actions';

const DeletePost = ({ deletePost, currentUser, slug }) => {
  const role = currentUser ? currentUser.role : null;
  const handleDelete = async (event) => {
    event.preventDefault();
    await deletePost({ slug });
  };
  return (
    <>
      {
        role === 'admin' ? (
          <button
            type="button"
            className="h-10 px-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={ handleDelete }
          >
            Delete
          </button>
        ) : null
      }
    </>
  )
};
DeletePost.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string
  }),
  deletePost: PropTypes.func.isRequired,
};
DeletePost.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  deletePost: (payload) => dispatch(deletePostStarted(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(DeletePost);