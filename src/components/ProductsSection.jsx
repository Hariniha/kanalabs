import React, { useRef, useState, useEffect } from 'react';

const ProductsSection = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = rect.height - windowHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);
      setProgress(totalScroll > 0 ? scrolled / totalScroll : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Horizontal translation for cards (even slower scroll)
  const translateX = `-${progress * 25}%`;

  return (
    <div className=" px-0 -mx-4">
      <section ref={sectionRef} className="relative  ">
        <div className="sticky top-0 flex flex-col justify-center h-auto my-auto overflow-hidden xxl:h-screen sxl:h-screen xl:h-screen bxl:h-screen lg:h-screen">
          <div className="pl-4 lg:pl-[120px]">
            <div className="flex items-center gap-4 mb-6 overflow-auto">
              {/* Perps Button */}
              <div className="flex flex-shrink-0 items-center justify-between xxl:!w-[200px] sxl:!w-[200px] bxl:!w-[200px] xl:!w-[200px] lg:!w-[200px] md:!w-[100px] sm:!w-[76px] xd:!w-[76px] xxl:py-4 sxl:py-4 bxl:py-4 xl:py-4 lg:py-4 md:py-0 sm:py-0 xd:py-0 xxl:px-6 sxl:px-6 bxl:px-6 xl:px-6 lg:px-6 md:px-2 sm:px-2 xd:px-2 xxl:rounded-[1rem] sxl:rounded-[1rem] bxl:rounded-[1rem] xl:rounded-[1rem] lg:rounded-[1rem] md:rounded-[0.5rem] xd:rounded-[0.5rem] sm:rounded-[0.5rem] text-[#FFFFFF] font-extrabold xxl:text-lg sxl:text-lg xl:text-lg bxl:text-lg lg:text-lg xd:text-[10px] sm:text-[10px] md:text-[10px] border border-[#FFFFFF1A] cursor-pointer backdrop-blur-sm hover:bg-[#17181a80] bg-transparent">
                Perps
                <a
                  href="https://www.kana.trade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-[#ffffff0f] rounded-[0.5rem] h-[2rem] flex justify-center items-center align-middle"
                >
                  <img
                    src="/assets/icon.png"
                    alt="Perps link"
                    className="xxl:w-[2rem] sxl:w-[2rem] xl:w-[2rem] lg:w-[2rem] md:w-[1rem] xd:w-[1rem] sm:w-[1rem] h-[2rem] xxl:mb-0 sxl:mb-0 bxl:mb-0 xl:mb-0 lg:mb-0 md:mb-1 xd:mb-1 sm:mb-1"
                  />
                </a>
              </div>
              {/* Swap Button */}
              <div className="flex flex-shrink-0 items-center justify-between xxl:!w-[200px] sxl:!w-[200px] bxl:!w-[200px] xl:!w-[200px] lg:!w-[200px] md:!w-[100px] sm:!w-[76px] xd:!w-[76px] xxl:py-4 sxl:py-4 bxl:py-4 xl:py-4 lg:py-4 md:py-0 sm:py-0 xd:py-0 xxl:px-6 sxl:px-6 bxl:px-6 xl:px-6 lg:px-6 md:px-2 sm:px-2 xd:px-2 xxl:rounded-[1rem] sxl:rounded-[1rem] bxl:rounded-[1rem] xl:rounded-[1rem] lg:rounded-[1rem] md:rounded-[0.5rem] xd:rounded-[0.5rem] sm:rounded-[0.5rem] text-[#FFFFFF] font-extrabold xxl:text-lg sxl:text-lg xl:text-lg bxl:text-lg lg:text-lg xd:text-[10px] sm:text-[10px] md:text-[10px] border border-[#FFFFFF1A] cursor-pointer backdrop-blur-sm hover:bg-[#17181a80] bg-transparent">
                Swap
                <a
                  href="https://app.kanalabs.io/swap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-[#ffffff0f] rounded-[0.5rem] h-[2rem] flex justify-center items-center align-middle"
                >
                  <img
                    src="/assets/icon.png"
                    alt="Swap link"
                    className="xxl:w-[2rem] sxl:w-[2rem] xl:w-[2rem] lg:w-[2rem] md:w-[1rem] xd:w-[1rem] sm:w-[1rem] h-[2rem] xxl:mb-0 sxl:mb-0 bxl:mb-0 xl:mb-0 lg:mb-0 md:mb-1 xd:mb-1 sm:mb-1"
                  />
                </a>
              </div>
            </div>
          
          </div>
          {/* Cards Section */}
          <div className="items-center hidden overflow-auto xxl:flex-row sxl:flex-row bxl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xd:flex-col lg:overflow-hidden xxl:inline-flex xl:inline-flex sxl:inline-flex bxl:inline-flex lg:inline-flex">
            <div
              className="flex xxl:flex-row sxl:flex-row bxl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xd:flex-col gap-4 pl-0 lg:pl-[120px] transition-transform duration-300"
              style={{ transform: `translateX(${translateX})` }}
            >
              {/* Perps Card */}
               <div className="relative lg:w-[800px] xxl:w-[800px] sxl:w-[800px] xl:w-[800px] bxl:w-[800px] md:w-[400px] xd:w-auto sm:w-auto max-h-[430px] flex-shrink-0 overflow-hidden border border-[#F5F7FA0F] hover:bg-[#17181A80] rounded-2xl" style={{background: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0) 100%)", backdropFilter: "blur(108.731px)", boxShadow: "rgba(9, 13, 20, 0.12) 0px 4px 4px 0px"}}>
                <div className="relative z-10 w-full h-full">
                  <div className="flex flex-col items-center w-full gap-4 p-4 lg:flex-row lg:p-16 lg:h-full text-start">
                    <div className="flex-1 w-full space-y-4">
                      <div className="lg:h-auto h-[54px]">
                        <h1 className="text-white font-bold lg:text-[28px] text-base lg:mb-2" style={{fontFamily: 'Urbanist'}}>Perps</h1>
                        <p className="text-[#A5A5A6] font-normal lg:text-xs text-[10px]">Perpetual futures, limitless opportunities</p>
                      </div>
                      <a className="w-fit border border-[#FFFFFF1A] font-extrabold text-sm py-4 px-6 rounded-2xl lg:block hidden" href="https://www.kana.trade/" style={{background: 'linear-gradient(99.48deg, rgb(125, 255, 253) -15.26%, rgb(89, 185, 255) 117.67%)'}}>Try Perps</a>
                    </div>
                    <div className="flex-1 w-full h-full">
                      <div className="lg:w-[330px] lg:h-[270px] w-[250px] h-[240px]">
                        <img src="/assets/perhaps.png" alt="perhaps" className="w-full h-full" />
                      </div>
                    </div>
                    <a className="w-full border border-[#FFFFFF1A] font-extrabold text-sm py-4 px-6 rounded-2xl block lg:hidden text-center" href="https://www.kana.trade/" style={{background: 'linear-gradient(99.48deg, rgb(125, 255, 253) -15.26%, rgb(89, 185, 255) 117.67%)'}}>Try Perps</a>
                  </div>
                </div>
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <img src="/assets/cardGraphic3.png" alt="" className="w-full h-full bg-cover" />
                </div>
              </div>
              {/* Swap Card */}
              <div className="relative lg:w-[800px] xxl:w-[800px] sxl:w-[800px] xl:w-[800px] bxl:w-[800px] md:w-[400px] xd:w-auto sm:w-auto max-h-[430px] flex-shrink-0 overflow-hidden border border-[#F5F7FA0F] hover:bg-[#17181A80] rounded-2xl" style={{background: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0) 100%)", backdropFilter: "blur(108.731px)", boxShadow: "rgba(9, 13, 20, 0.12) 0px 4px 4px 0px"}}>
                <div className="relative z-10 w-full h-full">
                  <div className="flex flex-col items-center w-full gap-4 p-4 lg:flex-row lg:p-16 lg:h-full text-start">
                    <div className="flex-1 w-full space-y-4">
                      <div className="lg:h-auto h-[54px]">
                        <h1 className="text-white font-bold lg:text-[28px] text-base lg:mb-2" style={{fontFamily: 'Urbanist'}}>Swap</h1>
                        <p className="text-[#A5A5A6] font-normal lg:text-xs text-[10px]">Swaps tokens across 9+ EVM & Non-EVM Chains</p>
                      </div>
                      <a className="w-fit border border-[#FFFFFF1A] font-extrabold text-sm py-4 px-6 rounded-2xl lg:block hidden" href="https://app.kanalabs.io/swap" style={{background: 'linear-gradient(99.48deg, rgb(125, 255, 253) -15.26%, rgb(89, 185, 255) 117.67%)'}}>Try Swap</a>
                    </div>
                    <div className="flex-1 w-full h-full">
                      <div className="lg:w-[330px] lg:h-[270px] w-[250px] h-[240px]">
                        <img src="/assets/swap.png" alt="" className="w-full h-full" />
                      </div>
                    </div>
                    <a className="w-full border border-[#FFFFFF1A] font-extrabold text-sm py-4 px-6 rounded-2xl block lg:hidden text-center" href="https://app.kanalabs.io/swap" style={{background: 'linear-gradient(99.48deg, rgb(125, 255, 253) -15.26%, rgb(89, 185, 255) 117.67%)'}}>Try Swap</a>
                  </div>
                </div>
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <img src="/assets/cardGraphic2.png" alt="" className="w-full h-full bg-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsSection;
