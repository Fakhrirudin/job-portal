import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Apply from '../components/Apply';
import Footer from '../components/Footer';

const Index = () => {
  return (
      <>
        <Navbar />
        <Home />
        <About />
        <Apply />
        <Footer />
    </>
  );
};

export default Index;
