import React from 'react'

const HeroSection = () => {
  return (
    <div>
  <div className="2xl:mx-24 xl:mx-24 lg:mx-24 md:mx-10 sm:mx-0 flex flex-col justify-between min-h-screen">
        <div></div>
  <div className="2xl:mb-8 xl:mb-8 lg:mb-8 md:mb-20 sm:mb-20">
          <div className="flex justify-center lg:justify-normal p-2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[84px] font-bold text-[#67FFD1] break-words px-0 md:px-0 lg:px-4 text-transparent bg-clip-text leading-tight md:leading-[100px]" style={{backgroundImage: "linear-gradient(93.41deg, rgb(103, 255, 209) -12.19%, rgb(79, 157, 255) 110.84%)", fontFamily: "Urbanist"}}>
              Decentralised <br />
              <span className="text-[#67FFD1]">trading suite</span> <span className="text-white font-[500]">with</span><br />
              <span className="text-white font-[500]">CEX-like performance</span>
            </h1>
          </div>
          <div className="flex flex-row sm:flex-row justify-center items-center gap-4 md:gap-8 pt-8 md:pt-0 w-full">
            <div className="flex flex-col items-center p-4 bg-transparent rounded-lg">
              <div className="text-white text-lg sm:text-xl md:text-2xl font-extrabold">2 Million+</div>
              <div className="text-[#A5A5A6] text-sm sm:text-base md:text-[14px] font-normal">transactions</div>
            </div>
            <div className="hidden sm:block w-[1px] h-12 sm:h-[84px] bg-white opacity-10"></div>
            <div className="flex flex-col items-center p-4 bg-transparent rounded-lg">
              <div className="text-white text-lg sm:text-xl md:text-2xl font-extrabold">$10 Billion+</div>
              <div className="text-[#A5A5A6] text-sm sm:text-base md:text-[14px] font-normal">in overall trading volume</div>
            </div>
            <div className="hidden sm:block w-[1px] h-12 sm:h-[84px] bg-white opacity-10"></div>
            <div className="flex flex-col items-center p-4 bg-transparent rounded-lg">
              <div className="text-white text-lg sm:text-xl md:text-2xl font-extrabold">1.1 Million+</div>
              <div className="text-[#A5A5A6] text-sm sm:text-base md:text-[14px] font-normal">Active Wallets</div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-4">
            <div className="flex flex-row justify-between items-center">
              <p className="flex items-center justify-center text-center text-sm text-[#777879] font-bold h-8 w-24" style={{padding: "8px 12px 8px 16px", background: "rgba(255, 255, 255, 0.06)", borderRadius: "16px", backdropFilter: "blur(4px)", gap: "4px", display: "inline-flex"}}>
                <span className="text-[#777879] text-sm font-bold pr-1">Scroll</span>
                <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.00065%203.33301V12.6663M8.00065%2012.6663L12.6673%207.99967M8.00065%2012.6663L3.33398%207.99967'%20stroke='%23777879'%20stroke-width='1.33333'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" alt="ArrowDown" />
              </p>
            </div>
          </div>
        </div>
      </div></div>
  )
}

export default HeroSection