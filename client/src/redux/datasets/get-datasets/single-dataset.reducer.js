import DataSetsActionTypes from './datasets.types';

const INITIAL_STATE = {
  isLoading: true,
  error: null,
  sectors: [],
  tags: [],
  singleDataset: {}
};


const singleDatasetReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DataSetsActionTypes.FETCH_DATASET_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case DataSetsActionTypes.FETCH_DATASET_SUCCEEDED:
      return {
        ...state,
        singleDataset: payload.data.file,
        isLoading: false
      };
    case DataSetsActionTypes.FETCH_DATASET_FAILED:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default singleDatasetReducer;
