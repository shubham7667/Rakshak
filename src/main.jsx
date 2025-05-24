
import { createRoot } from 'react-dom/client'


import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
<Hero />  

</>

);