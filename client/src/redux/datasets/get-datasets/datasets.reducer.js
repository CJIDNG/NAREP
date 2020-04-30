import DataSetsActionTypes from './datasets.types';

const INITIAL_STATE = {
  datasets: [],
  numberOfFiles: 0,
  isLoading: false,
  error: null,
  sectors: [],
  tags: []
};


const datasetsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DataSetsActionTypes.FETCH_ALL_SECTORS_STARTED:
    case DataSetsActionTypes.FETCH_ALL_DATASETS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case DataSetsActionTypes.FETCH_ALL_DATASETS_SUCCEEDED:
    case DataSetsActionTypes.SEARCH_DATASET_SUCCEEDED:
      return {
        ...state,
        datasets: payload.allFiles,
        numberOfFiles: Number(payload.filesCount),
        isLoading: false
      };
    case DataSetsActionTypes.FETCH_ALL_SECTORS_SUCCEEDED:
      return {
        ...state,
        sectors: payload,
        isLoading: false
      };

    case DataSetsActionTypes.FETCH_ALL_SECTORS_FAILED:
    case DataSetsActionTypes.FETCH_ALL_DATASETS_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default datasetsReducer;
