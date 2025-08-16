import React from 'react';



const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between">

      <div className="2xl:mx-24 xl:mx-24 lg:mx-24 md:mx-10 sm:mx-0 flex flex-col items-start justify-center min-h-screen relative z-10">
        <div className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-8 pt-8">
          <h1
            className="text-[1.5rem] sm:text-3xl md:text-5xl lg:text-6xl font-bold sm:font-extrabold leading-tight mb-8 text-center w-full max-w-3xl"
            style={{ fontFamily: 'Urbanist' }}
          >
            {/* Mobile: 3 lines */}
            <span className="block sm:hidden text-transparent bg-clip-text bg-gradient-to-r from-[#67FFD1] to-[#4F9DFF]">Decentralised</span>
            <span className="block sm:hidden text-transparent bg-clip-text bg-gradient-to-r from-[#67FFD1] to-[#4F9DFF]">trading suite with</span>
            <span className="block sm:hidden text-white">CEX-like performance</span>
            
            {/* Desktop: 2 lines */}
            <span className="hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-[#67FFD1] to-[#4F9DFF]">Decentralised trading suite</span>
            <span className="hidden sm:block text-white">with CEX-like performance</span>
          </h1>
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-4 w-full max-w-lg mx-auto mb-2">
            <div className="flex flex-col items-center min-w-[80px] sm:min-w-[90px]">
              <div className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-extrabold">2 Million+</div>
              <div className="text-[#A5A5A6] text-[10px] sm:text-xs md:text-sm font-normal text-center">transactions</div>
            </div>
            <div className="w-[1px] h-6 sm:h-8 bg-white opacity-10"></div>
            <div className="flex flex-col items-center min-w-[80px] sm:min-w-[90px]">
              <div className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-extrabold">$10 Billion+</div>
              <div className="text-[#A5A5A6] text-[10px] sm:text-xs md:text-sm font-normal text-center">in overall trading volume</div>
            </div>
            <div className="w-[1px] h-6 sm:h-8 bg-white opacity-10"></div>
            <div className="flex flex-col items-center min-w-[80px] sm:min-w-[90px]">
              <div className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-extrabold">1.1 Million+</div>
              <div className="text-[#A5A5A6] text-[10px] sm:text-xs md:text-sm font-normal text-center">Active Wallets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

