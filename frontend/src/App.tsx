import React from 'react';

import GlobalStyles from './styles/global';

import CreateDelivery from './pages/CreateDelivery';

const App: React.FC = () => {
  return (
    <>
      <CreateDelivery />
      <GlobalStyles />
    </>
  );
};

export default App;
