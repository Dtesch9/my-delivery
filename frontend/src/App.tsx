import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './styles/global';

import CreateDelivery from './pages/CreateDelivery';

const App: React.FC = () => {
  return (
    <>
      <CreateDelivery />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
