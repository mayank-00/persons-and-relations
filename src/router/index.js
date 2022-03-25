import React from 'react';
import { Route, Routes } from 'react-router-dom';

import publicRoutes from './routes';

const Router = () => {

  return <Routes>
    {
      publicRoutes.map(({ path, Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))
    }
  </Routes>
}

export default Router