import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createDatasetStarted } from '@Redux/datasets/create-dataset/create-dataset.actions';
import BaseDataset from '@Components/UI/molecules/dataset-upload/dataset-upload.component';

const CreateDataset = ({ createDataset }) => {
  const createNewDataset = async (formData) => createDataset(formData);

  return (
    <BaseDataset
      onFormSubmit={createNewDataset}
      trigger={(
        <button
          type="button"
          className="px-8 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Create New Dataset
        </button>
      )}
    />
  );
};
CreateDataset.propTypes = {
  createDataset: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  createDataset: (payload) => dispatch(createDatasetStarted(payload))
});
export default connect(null, mapDispatchToProps)(CreateDataset);
