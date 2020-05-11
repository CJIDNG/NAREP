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
    tags: [],
  });
  const {
    title, tags
  } = postCredentials;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [images, setImages] = useState({
    uploadedImages: []
  })
  const { uploadedImages
  } = images;
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
  const uploadImageCallBack = file => new Promise(
    (resolve, reject) => {
      var reader = new FileReader();
      let Images = uploadedImages;

      reader.readAsDataURL(file);

      let img = new Image();

      reader.onload = function (e) {
        img.src = this.result
        uploadedImages.push(img.src);
        setImages({ ...images, Images });
        resolve({
          data: {
            link: img.src
          }
        })
      }
    }
  );
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
      bannerImage: uploadedImages[0],
      tags: formObj.tags
    }
    await createNewPost(post);
  };
  return (
    <div className='w-3/4 mx-auto'>
      <button
        className="
        float-right
        mt-6
        mr-10
        text-teal-700 
        font-semibold hover:text-white 
        py-2 px-4 
        border  border-solid border-teal-500 
        hover:bg-teal-500
        hover:border-teal-500
        rounded"
        type="submit"
        onClick={ onSubmit }
      >
        Publish
        </button> 
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
          image: {
            uploadCallback: uploadImageCallBack,
            placeHolder: 'Write your story...',
            previewImage: true,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alignmentEnabled: false,
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: '500',
              width: '800',
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