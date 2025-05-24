
import { createRoot } from 'react-dom/client'


import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero'
import Services from './components/Services';
import Quicklinks from './components/Quicklinks';
import DetailedFeatures from './components/DetailedFeatures';
import Faq from './components/Faq';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <BrowserRouter>
      <Nav />
    
<Hero />  
<Services />
<Quicklinks />
<DetailedFeatures />
</BrowserRouter>
<Faq /> 
</>

);