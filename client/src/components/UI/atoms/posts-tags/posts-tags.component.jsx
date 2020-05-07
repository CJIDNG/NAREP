import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchTagsStarted } from '@Redux/posts/posts.actions';
import { Link } from 'react-router-dom';
import { selectTags } from '@Redux/posts/post.selectors';
const PostsTags = ({ fetchTags, tags }) => {
  useEffect(() => {
    const getAllTags = async () => {
      await fetchTags();
    };
    getAllTags();
  }, [fetchTags]);
  return (
    <div className="px-6 py-4">
      {
        tags.map(({ id, name }) => (
          <Link key={ id } to={ `/blog?tags=${id}` }>
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 capitalize">
              { name }</span>
          </Link>

        ))

      }
    </div>
  )
};
const mapStateToProps = createStructuredSelector({
  tags: selectTags
});
const mapDispatchToProps = (dispatch) => ({
  fetchTags: () => dispatch(fetchTagsStarted())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsTags);
