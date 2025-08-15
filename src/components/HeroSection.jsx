import React from 'react'

const HeroSection = () => {
  return (
    <div><div className="xxl:mx-24 xl:mx-24 sxl:mx-24 bxl:mx-24 lg:mx-24 md:mx-10 sm:mx-0 xd:mx-0 flex flex-col justify-between h-screen">
        <div></div>
        <div className="xxl:mb-8 sxl:mb-8 xl:mb-8 lg:mb-8 bxl:mb-8 md:mb-20 sm:mb-20 xd:mb-20">
          <div className="flex xxl:justify-normal lg:p-0 p-2 sxl:justify-normal bxl:justify-normal xl:justify-normal lg:justify-normal md:justify-normal sm:justify-center xd:justify-center">
            <h1 className="!xxl:text-[84px] sxl:text-[84px] xl:text-[84px] bxl:text-[84px] lg:text-[84px]  sm:text-[2rem] xd:text-[2rem] font-bold text-[#67FFD1] break-words xxl:px-4 xl:px-4 sxl:px-4 bxl:px-4 md:px-0 sm:px-0 xd:px-0 md:mt-auto text-transparent bg-clip-text xl:leading-[100px] lg:leading-[100px] xxl:leading-[100px] sxl:leading-[100px] bxl:leading-[100px] xd:leading-[47px] sm:leading-[47px]" style={{backgroundImage: "linear-gradient(93.41deg, rgb(103, 255, 209) -12.19%, rgb(79, 157, 255) 110.84%)", fontFamily: "Urbanist"}}>
              Decentralised <br />trading suite <span className="text-white font-[500]">with</span><br /><span className="text-white font-[500]">CEX-like performance</span>
            </h1>
          </div>
          <div className="flex lg:justify-start md:justify-center sm:justify-center xd:justify-center">
            <div className="flex xxl:!justify-normal sxl:!justify-normal bxl:!justify-normal xl:!justify-normal lg:!justify-normal md:!justify-center sm:!justify-center xd:!justify-center">
              <div className="w-full flex md:flex-row gap-6 md:gap-8 xd:gap-4 shadow-lg bg-opacity-10 rounded-lg pt-8 md:pt-0 xd:pt-0">
                <div className="flex flex-col items-start p-4 md:p-6 bg-transparent rounded-lg">
                  <div className="text-white text-lg md:text-[22px] xd:text-[0.779rem] sm:text-[0.779rem] font-extrabold">2 Million+</div>
                  <div className="text-[#A5A5A6] text-sm md:text-[14px] xd:text-[0.496rem] sm:text-[0.496rem] font-normal">transactions</div>
                </div>
                <div className="hidden md:block w-[1px] h-[64px] md:h-[84px] bg-white opacity-10"></div>
                <div className="flex flex-col items-start p-4 md:p-6 bg-transparent rounded-lg">
                  <div className="text-white text-lg md:text-[22px] xd:text-[0.779rem] sm:text-[0.779rem] font-extrabold">$10 Billion+</div>
                  <div className="text-[#A5A5A6] text-sm md:text-[14px] xd:text-[0.496rem] sm:text-[0.496rem] font-normal">in overall trading volume</div>
                </div>
                <div className="hidden md:block w-[1px] h-[64px] md:h-[84px] bg-white opacity-10"></div>
                <div className="flex flex-col items-start p-4 md:p-6 bg-transparent rounded-lg">
                  <div className="text-white text-lg md:text-[22px] xd:text-[0.779rem] sm:text-[0.779rem] font-extrabold">1.1 Million+</div>
                  <div className="text-[#A5A5A6] text-sm md:text-[14px] xd:text-[0.496rem] sm:text-[0.496rem] font-normal">Active Wallets</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center align-middle xxl:pt-12 sxl:pt-12 xl:pt-12 lg:pt-12 bxl:pt-12 md:pt-8 sm:pt-4 xd:pt-4 ">
            <div className="xxl:fixed xl:fixed sxl:fixed bxl:fixed lg:fixed md:relative sm:relative xd:relative flex flex-row justify-between items-center ">
              <p className="flex items-center justify-center text-center text-sm text-[#777879] font-bold h-[2rem] w-[5.188rem]" style={{padding: "8px 12px 8px 16px", background: "rgba(255, 255, 255, 0.06)", borderRadius: "16px", backdropFilter: "blur(4px)", justifyContent: "flex-start", alignItems: "center", gap: "4px", display: "inline-flex"}}>
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