import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { Landing } from './pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
    </BrowserRouter>
  );
};

export default Routes;
