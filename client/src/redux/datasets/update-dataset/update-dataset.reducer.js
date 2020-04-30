import DataSetsActionTypes from './update-dataset.types';

const INITIAL_STATE = {
  dataset: {},
  isLoading: false,
  error: null,
};


const updateDatasetReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DataSetsActionTypes.UPDATE_DATASET_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case DataSetsActionTypes.UPDATE_DATASET_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default updateDatasetReducer;
