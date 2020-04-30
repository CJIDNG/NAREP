import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPolicyPaperStarted } from '@Redux/policy-paper/create-policy-paper/create-policy-paper.actions';
import BaseDataset from '@Components/UI/molecules/dataset-upload/dataset-upload.component';

const CreateDataset = ({ createPolicyPaper }) => {
  const createNewPolicyPaper = async (formData) => createPolicyPaper(formData);

  return (
    <BaseDataset
      onFormSubmit={createNewPolicyPaper}
      trigger={(
        <button
          type="button"
          className="px-8 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload New
        </button>
      )}
    />
  );
};
CreateDataset.propTypes = {
  createPolicyPaper: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  createPolicyPaper: (payload) => dispatch(createPolicyPaperStarted(payload))
});
export default connect(null, mapDispatchToProps)(CreateDataset);
