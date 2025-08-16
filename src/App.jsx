import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import DeveloperSection from './components/DeveloperSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import Hyperspeed from './components/Hyperspeed';

function App() {
  return (
    <div className="relative bg-[#060C0F] overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
       <Hyperspeed
  effectOptions={{
     bloom: {
      luminanceThreshold: 100, // even higher threshold, less glow
      luminanceSmoothing: 1, // even more smoothing, softer glow
      resolutionScale: 1
    },
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
  }}
/>
      </div>
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ProductsSection />
        <DeveloperSection />
        <PartnersSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;