import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../section/Header';
import Footer from '../section/Footer';
import Home from '../componets/Home/Home';


const Router = () => {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer />
    </>
  );
};

export default Router;
