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
import Login from './components/forms/login.jsx'
import UserDash from './components/Dashboard/UserDash.jsx';
import Recorder from './components/video/Recorder.jsx';
import Profile from './components/dashboard sidebar/Profile.jsx';
import UserFir from './components/dashboard sidebar/yourFir.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >

    <Routes>
      <Route path="/" element={
        <>
          <Nav />
          <Hero />
          <Services />
          <Quicklinks />
          <DetailedFeatures />
          <Faq />
          <RegisterFir />
          <Footer />
        


        </>
      } />
      <Route path="/onlinefir" element={<Onlinefir />} />
      <Route path="/crimerecord" element={<CrimeRecord />} />
      <Route path="/emergencycall" element={<><Emergencycall /><Footer /></>} />
      <Route path="/registration" element={<><Registeration /></>} />
      <Route path="/login" element={<><Login /></>} />
      <Route path="/dashboard" element={<UserDash />} />
      <Route path="/recorder" element={<Recorder />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myfir" element={<UserFir />} />
    </Routes>

  </BrowserRouter>
);