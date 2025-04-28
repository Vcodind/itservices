import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../section/Header';
import Footer from '../section/Footer';
import Home from '../componets/Home/Home';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';


const Router = () => {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      
      <Footer />
    </>
  );
};

export default Router;
