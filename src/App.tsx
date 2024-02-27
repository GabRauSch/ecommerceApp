import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainRoutes></MainRoutes>
    </BrowserRouter>
  );
};

export default App;
