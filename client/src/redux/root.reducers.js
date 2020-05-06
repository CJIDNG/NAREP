import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import datasetsReducer from './datasets/get-datasets/datasets.reducer';
import singleDatasetReducer from './datasets/get-datasets/single-dataset.reducer';
import adminReducer from './admin/admin.reducer';
import policyPaperReducer from './policy-paper/get-policy-paper/policy-paper.reducer';
import postsReducer from './posts/posts.reducer'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'datasets']
};
const rootReducer = combineReducers({
  user: userReducer,
  datasets: datasetsReducer,
  singleDataset: singleDatasetReducer,
  admin: adminReducer,
  policyPapers: policyPaperReducer,
  posts: postsReducer
});

export default persistReducer(persistConfig, rootReducer);
