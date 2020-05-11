import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPolicyPaperStarted } from '@Redux/policy-paper/create-policy-paper/create-policy-paper.actions';
import BaseDataset from '@Components/UI/molecules/dataset-upload/dataset-upload.component';
import ButtonTeal from '@Atoms/button-teal/button-teal.component';

const CreateDataset = ({ createPolicyPaper }) => {
  const createNewPolicyPaper = async (formData) => createPolicyPaper(formData);

  return (
    <BaseDataset
      onFormSubmit={ createNewPolicyPaper }
      trigger={ (
        <ButtonTeal children='Upload New' />
      ) }
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
