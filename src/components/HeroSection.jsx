import React from 'react'
import Orb from './Orb'

const HeroSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Orb Background */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        right: 0, 
        width: '100%', 
        height: '100vh', 
        zIndex: 0,
        opacity: 0.6 
      }}>
       <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
      </div>
      <div className="2xl:mx-24 xl:mx-24 lg:mx-24 md:mx-10 sm:mx-0 flex flex-col justify-between min-h-screen relative z-10">
        <div></div>
        <div className="2xl:mb-8 xl:mb-8 lg:mb-8 md:mb-20 sm:mb-20">
          <div className="flex flex-col items-center md:items-start p-2 pl-0 md:pl-8 lg:pl-16 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[84px] font-bold text-[#67FFD1] break-words px-0 md:px-0 lg:px-4 text-transparent bg-clip-text leading-tight md:leading-[100px] text-center md:text-left w-full max-w-4xl" style={{ backgroundImage: "linear-gradient(93.41deg, rgb(103, 255, 209) -12.19%, rgb(79, 157, 255) 110.84%)", fontFamily: "Urbanist", marginLeft: 0 }}>
              Decentralised <br />
              <span className="text-[#67FFD1]">trading suite</span> <span className="text-white font-[500]">with</span><br />
              <span className="text-white font-[500] heading">CEX-like performance</span>
            </h1>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center md:items-start gap-4 md:gap-8 pt-6 w-full">
              <div className="flex flex-col items-center md:items-start p-4 bg-transparent rounded-lg">
                <div className="text-white text-lg sm:text-xl md:text-2xl font-extrabold">2 Million+</div>
                <div className="text-[#A5A5A6] text-sm sm:text-base md:text-[14px] font-normal">transactions</div>
              </div>
              <div className="hidden sm:block w-[1px] h-12 sm:h-[84px] bg-white opacity-10"></div>
              <div className="flex flex-col items-center md:items-start p-4 bg-transparent rounded-lg">
                <div className="text-white text-lg sm:text-xl md:text-2xl font-extrabold">$10 Billion+</div>
                <div className="text-[#A5A5A6] text-sm sm:text-base md:text-[14px] font-normal">in overall trading volume</div>
              </div>
              <div className="hidden sm:block w-[1px] h-12 sm:h-[84px] bg-white opacity-10"></div>
              <div className="flex flex-col items-center md:items-start p-4 bg-transparent rounded-lg">
                <div className="text-white text-lg sm:text-xl md:text-2xl font-extrabold">1.1 Million+</div>
                <div className="text-[#A5A5A6] text-sm sm:text-base md:text-[14px] font-normal">Active Wallets</div>
              </div>
            </div>
          </div>
          {/* Scroll icon removed as requested */}
        </div>
      </div></div>
  )
}

export default HeroSection
