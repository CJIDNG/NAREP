import DataSetsActionTypes from './datasets.types';

export const fetchDatasetsStarted = (payload) => ({
  type: DataSetsActionTypes.FETCH_ALL_DATASETS_STARTED,
  payload
});

export const fetchDatasetsSucceeded = (datasets) => ({
  type: DataSetsActionTypes.FETCH_ALL_DATASETS_SUCCEEDED,
  payload: datasets
});
export const fetchDatasetsFailed = (error) => ({
  type: DataSetsActionTypes.FETCH_ALL_DATASETS_FAILED,
  payload: error
});

export const fetchSectorsStarted = () => ({
  type: DataSetsActionTypes.FETCH_ALL_SECTORS_STARTED
});

export const fetchSectorsSucceeded = (datasets) => ({
  type: DataSetsActionTypes.FETCH_ALL_SECTORS_SUCCEEDED,
  payload: datasets
});

export const fetchSectorsFailed = (error) => ({
  type: DataSetsActionTypes.FETCH_ALL_SECTORS_FAILED,
  payload: error
});

export const fetchSingleDatasetStarted = (slug) => ({
  type: DataSetsActionTypes.FETCH_DATASET_STARTED,
  payload: slug
});

export const fetchSingleDatasetSucceeded = (dataset) => ({
  type: DataSetsActionTypes.FETCH_DATASET_SUCCEEDED,
  payload: dataset
});

export const fetchSingleDatasetFailed = (error) => ({
  type: DataSetsActionTypes.FETCH_DATASET_FAILED,
  payload: error
});

export const searchDatasetStarted = (payload) => ({
  type: DataSetsActionTypes.SEARCH_DATASET_STARTED,
  payload
});
export const searchDatasetSucceeded = (datasets) => ({
  type: DataSetsActionTypes.SEARCH_DATASET_SUCCEEDED,
  payload: datasets
});
export const searchDatasetFailed = (error) => ({
  type: DataSetsActionTypes.SEARCH_DATASET_FAILED,
  payload: error
});
