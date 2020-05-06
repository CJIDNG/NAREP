import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import PropTypes from 'prop-types';
import EditDataset from '@Molecules/edit-dataset/dataset-edit.component';
import { deleteDatasetStarted } from '@Redux/datasets/delete-dataset/delete-dataset.actions';
import DeleteDataset from '@Molecules/delete-dataset/dataset-delete.component';
import DatasetPage from './dataset-component';

const DatasetContainer = ({ currentUser, deleteDataset, ...singleDataset }) => {
  const role = currentUser ? currentUser.role : null;
  const handleDelete = async (slug) => deleteDataset(slug);
  return (
    <div className="flex justify-center">
      <DatasetPage {...singleDataset} />
      <div className="mt-20">
        {
          role === 'admin' ? (
            <>
              <EditDataset {...singleDataset} />
              <DeleteDataset {...singleDataset} handleDelete={handleDelete} />
            </>
          ) : null
        }
      </div>
    </div>
  );
};
DatasetContainer.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string
  }),
  deleteDataset: PropTypes.func.isRequired,
};
DatasetContainer.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  deleteDataset: (payload) => dispatch(deleteDatasetStarted(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(DatasetContainer);
