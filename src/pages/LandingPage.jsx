import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Contact from '../components/Contact';









const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default LandingPage;

