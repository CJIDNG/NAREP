import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPosts } from '@Redux/posts/post.selectors';
import { fetchPostsStarted } from '@Redux/posts/posts.actions';
import { useLocation } from 'react-router-dom';
import PreviewPost from '@Atoms/preview-post/preview-post.component';

const Posts = ({ fetchPosts, posts, history }) => {
  const query = new URLSearchParams(useLocation().search);
  const queryString = query.get('tags');
  useEffect(() => {
    const getAllPosts = async () => {
      queryString ? await fetchPosts(queryString) : await fetchPosts()
    };
    getAllPosts();
  }, [fetchPosts, queryString]);

  return (
    <div className='m-20 '>

      <div className="flex flex-wrap justify-around">
        {
          posts.length ? posts.map(({ id, ...otherProps }) => (


            <PreviewPost key={ id } { ...otherProps } />

          )) : 'No posts'
        }
      </div>
    </div>
  )
};
const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
});
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (tags) => dispatch(fetchPostsStarted(tags))
});
export default connect(mapStateToProps, mapDispatchToProps)(Posts);