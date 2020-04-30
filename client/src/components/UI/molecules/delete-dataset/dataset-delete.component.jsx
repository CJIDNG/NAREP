import React from 'react';
import PropTypes from 'prop-types';
import DeleteModal from '@Atoms/modal/delete-modal.component';

const DeleteDataset = ({ slug, handleDelete }) => {
  const deleteFile = async (event) => {
    event.preventDefault();
    await handleDelete({ slug });
  };
  return (
    <DeleteModal handleDelete={deleteFile} />
  );
};
DeleteDataset.propTypes = {
  slug: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DeleteDataset;
