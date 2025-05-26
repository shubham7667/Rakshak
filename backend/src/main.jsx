import { createRoot } from 'react-dom/client'


import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Home/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Home/Hero.jsx';
import Services from './components/Home/Services.jsx';
import Quicklinks from './components/Home/Quicklinks.jsx';
import DetailedFeatures from './components/Home/DetailedFeatures.jsx';
import Faq from './components//Home/Faq';
import RegisterFir from './components/Home/RegisterFir.jsx';
import Footer from './components/Home/Footer.jsx';
import Onlinefir from './components/forms/Onlinefir.jsx' // <-- Import your Onlinefir page
import CrimeRecord from './components/featurePages/crimeRecord.jsx';
import Emergencycall from './components/featurePages/Emergencycall.jsx';
import Registeration from './components/forms/Registeration.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
  
    <Routes>
      <Route path="/" element={
        <>
           <Nav />
          <Hero    /> 
          <Services />
          <Quicklinks />
           <DetailedFeatures />
          <Faq />
    <RegisterFir />
    <Footer />
        </>
      } />
      <Route path="/onlinefir" element={<Onlinefir />} /> 
      <Route path  ="/crimerecord" element={<CrimeRecord />} />
      <Route path  ="/emergencycall" element={<><Emergencycall /><Footer/></>} />
      <Route path  ="/registration" element={<><Registeration /></>} />
    </Routes>
    
  </BrowserRouter>
);