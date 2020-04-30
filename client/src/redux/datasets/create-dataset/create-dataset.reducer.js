import DataSetsActionTypes from './create-dataset.types';

const INITIAL_STATE = {
  dataset: {},
  isLoading: false,
  error: null,
};


const createDatasetReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DataSetsActionTypes.CREATE_DATASET_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case DataSetsActionTypes.CREATE_DATASET_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default createDatasetReducer;
