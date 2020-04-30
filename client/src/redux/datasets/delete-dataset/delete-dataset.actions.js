import DeleteDataSetActionTypes from './delete-dataset.types';

export const deleteDatasetStarted = (payload) => ({
  type: DeleteDataSetActionTypes.DELETE_DATASET_STARTED,
  payload
});

export const deleteDatasetFailed = (error) => ({
  type: DeleteDataSetActionTypes.DELETE_DATASET_FAILED,
  payload: error
});
