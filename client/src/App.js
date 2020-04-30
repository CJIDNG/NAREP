import React, { Suspense } from 'react';
import Spinner from '@Atoms/spinner/spinner.component';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import BaseRoute from '@Routes/routes';

const App = () => (
  <Suspense fallback={<Spinner />}>

    <ToastContainer />
    <BaseRoute />

  </Suspense>
);

export default App;
