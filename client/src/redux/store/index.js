import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import history from '@Utils/connect';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../root.reducers';
import rootSaga from '../root.sagas';

const enhancers = [];
const sagaMiddleware = createSagaMiddleware();
const createRouterMiddleeware = routerMiddleware(history);
const middlewares = [sagaMiddleware, createRouterMiddleeware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
  const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);
export const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
