import React, { useState } from 'react';
import DataUploadModal from '@Components/UI/atoms/modal/edit-modal.component';
import PropTypes from 'prop-types';

const DataUpload = ({
  title: defaultTitle = '', description: defaultDesc = '', onFormSubmit, trigger
}) => {
  const [fileCredentials, setFileCredentials] = useState({
    title: defaultTitle,
    description: defaultDesc,
    sector: '',
    file: null,
    tags: []

  });
  const {
    title, description, sector, file, tags
  } = fileCredentials;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFileCredentials({ ...fileCredentials, [name]: value });
  };
  const selectedTags = (items) => {
    setFileCredentials({ ...fileCredentials, tags: items });
  };
  const onChangeHandler = (event) => {
    setFileCredentials({ ...fileCredentials, file: event.target.files[0] });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('sector', sector);
    formData.append('tags', tags);
    await onFormSubmit(formData);
  };
  return (
    <DataUploadModal
      handleChange={ handleChange }
      handleSubmit={ handleSubmit }
      title={ title }
      description={ description }
      onChangeHandler={ onChangeHandler }
      selectedTags={ selectedTags }
      trigger={ trigger }
    />
  );
};

DataUpload.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onFormSubmit: PropTypes.func.isRequired,
  trigger: PropTypes.shape({}).isRequired,
};
DataUpload.defaultProps = {
  title: '',
  description: '',
};

export default DataUpload;
