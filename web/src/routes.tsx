import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { Landing, TeacherList } from './pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/teacherlist" component={TeacherList} />
    </BrowserRouter>
  );
};

export default Routes;
