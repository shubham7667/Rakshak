
import { createRoot } from 'react-dom/client'


import React from 'react';
import ReactDOM from 'react-dom/client';
import DropdownLink from './components/Nav';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DropdownLink />
    </BrowserRouter>
  </React.StrictMode>
);