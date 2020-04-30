import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '@Atoms/form-input/form-input.component';
import TextArea from '@Atoms/form-input/form-textarea.component';
import FormFile from '@Atoms/form-input/form-file.component';
import Select from '@Components/UI/atoms/form-input/form-select-datasets.component';
import TagsInput from '@Components/UI/molecules/create-dataset/create-tags.component';

const DatasetModalForm = ({
  title, handleChange, description, onChangeHandler, selectedTags
}) => (
    <>
      <FormInput
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        label="Title"
        required
      />
      <TextArea
        placeholder="Description"
        name="description"
        value={description}
        onChange={handleChange}
        required
      />
      <FormFile
        type="file"
        name="file"
        onChange={onChangeHandler}
      />
      <Select handleChange={handleChange} />
      <TagsInput selectedTags={selectedTags} />
    </>
);
DatasetModalForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selectedTags: PropTypes.func.isRequired,
  trigger: PropTypes.shape({}).isRequired,
};
export default DatasetModalForm;
