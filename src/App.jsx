import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import DeveloperSection from './components/DeveloperSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#060C0F] overflow-x-hidden">
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