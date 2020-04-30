import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePolicyPaperStarted } from '@Redux/policy-paper/update-policy-paper/update-policy-paper.actions';
import EditModal from '@Molecules/dataset-upload/dataset-upload.component';
import EditIcon from '@Atoms/Icons/edit.icon';

const EditPolicyPaper = ({ updatePolicyPaper, slug, ...props }) => {
  const update = async (formData) => updatePolicyPaper({ slug, formData });
  return (
    <EditModal
      onFormSubmit={update}
      {...props}
      trigger={<EditIcon className="cursor-pointer" />}
      type="policy-paper"
    />
  );
};
EditPolicyPaper.propTypes = {
  slug: PropTypes.string.isRequired,
  updatePolicyPaper: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updatePolicyPaper: (payload) => dispatch(updatePolicyPaperStarted(payload))
});
export default connect(null, mapDispatchToProps)(EditPolicyPaper);
