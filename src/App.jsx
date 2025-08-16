import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import DeveloperSection from './components/DeveloperSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 bg-[#060C0F]  no-scrollbar" style={{ fontFamily: "Manrope" }}>
      <Header />
      <HeroSection />
      <ProductsSection />
      <DeveloperSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default App;