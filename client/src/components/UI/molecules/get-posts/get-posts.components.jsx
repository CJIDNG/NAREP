import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPosts, selectPostsCount } from '@Redux/posts/post.selectors';
import { fetchPostsStarted } from '@Redux/posts/posts.actions';
import { useLocation } from 'react-router-dom';
import PostsItem from '@Atoms/posts-item/posts-item.component';
import PostsTags from '@Atoms/posts-tags/posts-tags.component'
const Posts = ({ fetchPosts, posts }) => {
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
      <PostsTags />
      <div className="flex flex-wrap justify-around">
        {
          posts ? posts.map(({ id, ...otherProps }) => (


            <PostsItem key={ id } { ...otherProps } />

          )) : null
        }
      </div>
    </div>
  )
};
const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
  count: selectPostsCount
});
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (tags) => dispatch(fetchPostsStarted(tags))
});
export default connect(mapStateToProps, mapDispatchToProps)(Posts);