import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '@Atoms/form-input/form-input.component';
import FormFile from '@Atoms/form-input/form-file.component';

const DatasetModalForm = ({
  title, handleChange, onChangeHandler,
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
      <FormFile
        type="file"
        name="file"
        onChange={onChangeHandler}
      />
    </>
);
DatasetModalForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  trigger: PropTypes.shape({}).isRequired,
};
export default DatasetModalForm;
