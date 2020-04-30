import CreateDataSetsActionTypes from './create-dataset.types';

export const createDatasetStarted = (payload) => ({
  type: CreateDataSetsActionTypes.CREATE_DATASET_STARTED,
  payload
});

export const createDatasetFailed = (error) => ({
  type: CreateDataSetsActionTypes.CREATE_DATASET_FAILED,
  payload: error
});
