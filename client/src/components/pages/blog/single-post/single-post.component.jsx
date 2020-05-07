import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { fetchSinglePostStarted } from '@Redux/posts/posts.actions';
import { selectPost } from '@Redux/posts/post.selectors';
import Spinner from '@Atoms/spinner/spinner.component';
import Header from '@Components/UI/organisms/header/header.component';
import PostContainer from './post-container.component';

const SinglePost = ({ match: { params: { slug } }, getSinglePost, singlePost: { isLoading, singlePost } }) => {
  useEffect(() => {
    const fetchSinglePost = async () => {
      await getSinglePost(slug);
    };
    fetchSinglePost();
  }, [slug, getSinglePost]);
  console.log(singlePost)
  return (
    <div>
      <Header />
      {
        isLoading ? <Spinner /> : <PostContainer { ...singlePost } />
      }
    </div>

  );
};
SinglePost.propTypes = {
  getSinglePost: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  singlePost: PropTypes.shape({
    isLoading: PropTypes.bool,
    singlePost: PropTypes.shape({})
  }).isRequired,
};
const mapStateToProps = createStructuredSelector({
  singlePost: selectPost,
});
const mapDispatchToProps = (dispatch) => ({
  getSinglePost: (slug) => dispatch(fetchSinglePostStarted(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
