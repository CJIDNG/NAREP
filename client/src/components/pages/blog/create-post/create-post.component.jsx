import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import Textarea from 'react-textarea-autosize';
import { EditorState, convertToRaw } from 'draft-js';
import { createPostStarted } from '@Redux/posts/posts.actions';
import TagsInput from '@Molecules/create-dataset/create-tags.component';

const CreatePost = ({ createNewPost }) => {
  const [postCredentials, setPostCredentials] = useState({
    title: '',
    tags: []

  });
  const {
    title, tags
  } = postCredentials;

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChange = (event) => {
    const { name, value } = event.target;
    setPostCredentials({ ...postCredentials, [name]: value });
  };
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const selectedTags = (items) => {
    setPostCredentials({ ...postCredentials, tags: items });

  };
  const uploadImageCallBack = (file) => {
    const url = 'https://api.cloudinary.com/v1_1/dcfc113t5/image/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ivyteam');
    return true;
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('tags', tags);
    const formObj = {};
    for (var pair of formData.entries()) {
      formObj[pair[0]] = pair[1]
    }
    const post = {
      title,
      description: title,
      body: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      plainText: JSON.stringify(editorState.getCurrentContent().getPlainText()),
      tags: formObj.tags
    };
    await createNewPost(post);
  };
  return (
    <div className='w-3/4 mx-auto'>
      <button className="article-button" type="submit" onClick={ onSubmit }>Publish</button>
      <div>
        <Textarea
          className="text-4xl text-gray-800 outline-none w-full border-none resize-none overflow-y-hidden font-semibold mb-8 "
          name="title"
          onChange={ onChange }
          placeholder="Title..." />
      </div>
      <Editor
        editorClassName="main-editor"
        placeholder="Write your story..."
        editorState={ editorState }
        onEditorStateChange={ onEditorStateChange }
        toolbarClassName="editor-toolbar"
        toolbar={ {
          options: ['inline', 'blockType', 'link', 'image'],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: false },
          history: { inDropdown: true },
          image: {
            uploadCallback: uploadImageCallBack,
            placeHolder: 'Write your story...',
            previewImage: true,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alignmentEnabled: false,
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: '500',
              width: '1000',
            },
          }
        } }
      />
      <TagsInput selectedTags={ selectedTags } />
    </div>
  )
};
const mapDispatchToProps = (dispatch) => ({
  createNewPost: (payload) => dispatch(createPostStarted(payload))
});
export default connect(null, mapDispatchToProps)(CreatePost);