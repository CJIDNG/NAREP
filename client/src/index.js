import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '@Redux/store';
import history from '@Utils/connect';
import App from './App';
import './styles/tailwind.css';
import * as serviceWorker from './serviceWorker';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Router>
</Provider>,
document.getElementById('root'));
serviceWorker.unregister();
