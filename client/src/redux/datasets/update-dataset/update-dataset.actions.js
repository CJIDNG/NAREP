import UpdateDataSetsActionTypes from './update-dataset.types';

export const updateDatasetStarted = (payload) => ({
  type: UpdateDataSetsActionTypes.UPDATE_DATASET_STARTED,
  payload
});

export const updateDatasetFailed = (error) => ({
  type: UpdateDataSetsActionTypes.UPDATE_DATASET_FAILED,
  payload: error
});
