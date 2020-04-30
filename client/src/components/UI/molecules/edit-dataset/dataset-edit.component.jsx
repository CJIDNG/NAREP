import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateDatasetStarted } from '@Redux/datasets/update-dataset/update-dataset.actions';
import EditModal from '@Molecules/dataset-upload/dataset-upload.component';
import EditIcon from '@Atoms/Icons/edit.icon';

const EditDataset = ({ updateDataset, slug, ...props }) => {
  const update = async (formData) => updateDataset({ slug, formData });
  return (
    <EditModal
      onFormSubmit={update}
      {...props}
      trigger={<EditIcon className="cursor-pointer" />}

    />
  );
};
EditDataset.propTypes = {
  slug: PropTypes.string.isRequired,
  updateDataset: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateDataset: (payload) => dispatch(updateDatasetStarted(payload))
});
export default connect(null, mapDispatchToProps)(EditDataset);
