import React from 'react';
import { convertFromRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import SocialShare from '@Atoms/social-share/social-share.component';
import { handleReadTime, handleDateFormat } from '@Utils/helpers';
import DeletePost from '@Molecules/delete-post/delete-post.component'
const PostPage = ({ title, readTime, body, slug, createdAt }) => {
  const contentState = convertFromRaw(JSON.parse(body));
  return (
    <>
      <div className='w-3/4 mx-auto my-10'>
        <DeletePost slug={ slug } />
        <p
          className='text-center font-semibold text-5xl mb-6 capitalize'
        >{ title }
        </p>
        <p className='text-center text-2xl text-gray-600 my-3'> { handleDateFormat(createdAt) } • { handleReadTime(readTime) }</p>
        <Editor
          editorClassName="main-editor text-3xl mt-6 capitalize"
          editorState={ EditorState.createWithContent(contentState) }
          toolbarHidden
          readOnly
        />
        <SocialShare title={ title } className='text-2xl' />
      </div>

    </>
  )
};

export default PostPage;