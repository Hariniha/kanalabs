import React from "react";

const Footer = () => (
  <footer className="bg-[#060C0F] text-white xxl:pt-[70px] sxl:pt-[70px] xl:pt-[70px] bxl:pt-[70px] lg:pt-[70px] md:pt-[20px] sm:pt-[20px] xd:pt-[20px] pb-8 px-12 border-t border-[#2C2D30] relative z-10 ">
    <div className="mx-auto overflow-hidden flex flex-col lg:flex-row justify-between md:mb-36 mb-10 relative">
      <div className="block mr-4 2xl:w-2/3 lg:w-1/3 w-3/3 xxl:inline sxl:inline bxl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden">
        <a href="https://kanalabs.io/" target="_blank" rel="noopener noreferrer"><img src="https://app.kanalabs.io/_next/static/media/Kana-Logo.afc11a9c.svg" className="w-40" alt="logo" /></a>
        <p className="text-xs text-[#FFFFFF] font-normal mt-5">Copyright 2024 Kana Labs</p>
      </div>
      <div className="2xl:w-1/3 lg:w-2/3 w-3/3 block sm:flex text-sm mt-6 lg:mt-0">
        <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full xxl:inline sxl:inline bxl:inline xl:inline lg:inline md:inline sm:hidden xd:hidden">
          <li className="inline-block py-2 text-[#FFFFFF] opacity-50 uppercase text-sm font-normal tracking-wide">Company</li>
          <li><a href="https://medium.com/kana-labs" target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-[#FFFFFF] font-[500] hover:text-white no-underline">Blog</a></li>
        </ul>
        <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full xxl:inline sxl:inline bxl:inline xl:inline lg:inline md:inline sm:hidden xd:hidden">
          <li className="inline-block py-2 text-white opacity-50 uppercase text-sm font-normal tracking-wide">Links</li>
          <li><a href="https://docs.kanalabs.io/" target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-[#FFFFFF] font-[500] hover:text-white no-underline">Documentation</a></li>
          <li><a href="https://app.kanalabs.io/" target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-[#FFFFFF] font-[500] hover:text-white no-underline">Launch App</a></li>
        </ul>
        <div className="xxl:hidden xl:hidden sxl:hidden lg:hidden bxl:hidden md:hidden xd:inline-flex sm:inline-flex flex justify-between w-full gap-20">
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="inline-block py-2 text-white opacity-50 uppercase text-sm font-normal tracking-wide">Company</li>
            <li><a href="https://medium.com/kana-labs" target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-[#FFFFFF] font-[500] hover:text-white no-underline">Blog</a></li>
          </ul>
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full pl-10">
            <li className="inline-block py-2 text-white opacity-50 uppercase text-sm font-normal tracking-wide">Links</li>
            <li><a href="https://docs.kanalabs.io/" target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-[#FFFFFF] font-[500] hover:text-white no-underline">Documentation</a></li>
            <li><a href="https://app.kanalabs.io/" target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-[#FFFFFF] font-[500]  hover:text-white no-underline">Launch App</a></li>
          </ul>
        </div>
        <div className="text-gray-700 flex flex-col w-full xxxl:pt-0 xxl:pt-0 xl:pt-0 lg:pt-0 md:pt-8 sm:pt-8 xd:pt-8">
          <div className=" py-2 text-white opacity-50 uppercase text-sm font-normal tracking-wide flex xxxl:justify-start xxl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center xd:justify-center ">Follow Us</div>
          <div className="flex xxxl:justify-start xxl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center xd:justify-center mt-2">
            <a className="flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="https://t.me/kanalabsofficial" target="_blank" rel="noopener noreferrer">
              {/* Telegram SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.80521 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71514 13.0565 6.78829 13.0795 6.86327 13.1038C7.37386 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0317 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02007C15.7125 8.0267 15.1355 8.22735 12.3583 9.38244Z" fill="white"></path></svg>
            </a>
            <a className="flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="https://x.com/kanalabs" target="_blank" rel="noopener noreferrer">
              {/* X/Twitter SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.28 20.1261C15.824 20.1261 19.952 13.8701 19.952 8.45412C19.952 8.27812 19.952 8.10212 19.944 7.92612C20.744 7.35012 21.44 6.62212 21.992 5.79812C21.256 6.12612 20.464 6.34212 19.632 6.44612C20.48 5.94212 21.128 5.13412 21.44 4.17412C20.648 4.64612 19.768 4.98212 18.832 5.16612C18.08 4.36612 17.016 3.87012 15.84 3.87012C13.576 3.87012 11.736 5.71012 11.736 7.97412C11.736 8.29412 11.776 8.60612 11.84 8.91012C8.432 8.74212 5.408 7.10212 3.384 4.62212C3.032 5.23012 2.832 5.93412 2.832 6.68612C2.832 8.11012 3.56 9.36612 4.656 10.1021C3.984 10.0781 3.352 9.89412 2.8 9.59012C2.8 9.60612 2.8 9.62212 2.8 9.64612C2.8 11.6301 4.216 13.2941 6.088 13.6701C5.744 13.7661 5.384 13.8141 5.008 13.8141C4.744 13.8141 4.488 13.7901 4.24 13.7421C4.76 15.3741 6.28 16.5581 8.072 16.5901C6.664 17.6941 4.896 18.3501 2.976 18.3501C2.648 18.3501 2.32 18.3341 2 18.2941C3.808 19.4461 5.968 20.1261 8.28 20.1261Z" fill="white"></path></svg>
            </a>
            <a className="flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="https://medium.com/kana-labs" target="_blank" rel="noopener noreferrer">
              {/* Medium SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.2812 11.9997C13.2812 15.1363 10.7558 17.6789 7.6407 17.6789C4.52561 17.6789 2 15.1363 2 11.9997C2 8.86317 4.52542 6.32031 7.6407 6.32031C10.756 6.32031 13.2812 8.86317 13.2812 11.9997ZM19.469 11.9997C19.469 14.9521 18.2063 17.3464 16.6487 17.3464C15.091 17.3464 13.8283 14.9521 13.8283 11.9997C13.8283 9.04733 15.0908 6.653 16.6485 6.653C18.2061 6.653 19.4688 9.04657 19.4688 11.9997H19.469ZM21.0081 16.7895C21.556 16.7895 22 14.6443 22 11.9997C22 9.35434 21.5558 7.2099 21.0081 7.2099C20.4604 7.2099 20.0163 9.35453 20.0163 11.9997C20.0163 14.6449 20.4602 16.7895 21.0081 16.7895Z" fill="white"></path></svg>
            </a>
            <a className="flex items-center text-gray-300 hover:text-white no-underline" href="https://discord.com/invite/CrqCaQ45kZ" target="_blank" rel="noopener noreferrer">
              {/* Discord SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.9308 5.64356C17.6561 5.05866 16.2892 4.62773 14.8599 4.38092C14.8339 4.37615 14.8079 4.38806 14.7945 4.41187C14.6187 4.72455 14.4239 5.13246 14.2876 5.45308C12.7503 5.22294 11.221 5.22294 9.71527 5.45308C9.57887 5.12533 9.37707 4.72455 9.20048 4.41187C9.18707 4.38885 9.16107 4.37695 9.13504 4.38092C7.70659 4.62694 6.33963 5.05787 5.06411 5.64356C5.05307 5.64832 5.04361 5.65626 5.03732 5.66657C2.44449 9.54021 1.73421 13.3186 2.08265 17.0502C2.08423 17.0685 2.09447 17.0859 2.10867 17.097C3.81934 18.3533 5.47642 19.116 7.10273 19.6215C7.12876 19.6294 7.15634 19.6199 7.1729 19.5985C7.55761 19.0731 7.90054 18.5192 8.19456 17.9367C8.21192 17.9025 8.19535 17.8621 8.15989 17.8486C7.61594 17.6422 7.098 17.3907 6.59977 17.105C6.56037 17.082 6.55721 17.0256 6.59346 16.9986C6.69831 16.92 6.80318 16.8383 6.9033 16.7558C6.92141 16.7407 6.94665 16.7375 6.96794 16.747C10.2411 18.2414 13.7846 18.2414 17.0191 16.747C17.0404 16.7367 17.0657 16.7399 17.0846 16.755C17.1847 16.8375 17.2895 16.92 17.3952 16.9986C17.4314 17.0256 17.4291 17.082 17.3897 17.105C16.8914 17.3962 16.3735 17.6422 15.8288 17.8478C15.7933 17.8613 15.7775 17.9025 15.7949 17.9367C16.0952 18.5184 16.4381 19.0723 16.8157 19.5977C16.8315 19.6199 16.8599 19.6294 16.8859 19.6215C18.5201 19.116 20.1772 18.3533 21.8879 17.097C21.9028 17.0859 21.9123 17.0693 21.9139 17.051C22.3309 12.7369 21.2154 8.98945 18.9568 5.66736C18.9513 5.65626 18.9419 5.64832 18.9308 5.64356ZM8.68335 14.7781C7.69792 14.7781 6.88594 13.8734 6.88594 12.7623C6.88594 11.6512 7.68217 10.7465 8.68335 10.7465C9.69239 10.7465 10.4965 11.6592 10.4807 12.7623C10.4807 13.8734 9.68451 14.7781 8.68335 14.7781ZM13.5316 12.7623C13.5316 13.8734 14.3435 14.7781 15.329 14.7781C16.338 14.7781 17.1264 13.8734 17.1264 12.7623C17.1421 11.6592 16.338 10.7465 15.329 10.7465C14.3278 10.7465 13.5316 11.6512 13.5316 12.7623Z" fill="white"></path></svg>
            </a>
          </div>
          <button className="rounded-[4px] p-[10px] mt-6 text-[#FFFFFF] hover:text-[#FFFFFF] font-semibold text-sm xxl:inline sxl:inline xl:inline bxl:inline lg:inline sm:hidden md:hidden xd:hidden" style={{borderWidth: 1, borderStyle: 'solid', borderColor: 'initial', borderImage: 'linear-gradient(90deg, rgb(79, 157, 255) 0%, rgb(103, 255, 209) 100%) 1'}}><a href="https://dev.kanalabs.io/contact-us-dev" target="_blank" rel="noopener noreferrer">Contact Us</a></button>
          <div className="xxl:hidden sxl:hidden xl:hidden bxl:hidden lg:hidden  md:inline-flex sm:inline-flex xd:inline-flex gap-2 pt-8  ">
            <button className="flex items-center justify-center text-[#FFFFFF] text-xs font-extrabold !rounded-[0.5rem] h-[2.5rem] gap-2 px-6 border-[0.063rem] border-[#00FFF0] hover:text-[#00FFF0] hover:shadow-[0px 6px 8px rgba(46,210,183,0.4), rgba(0,0,0,0.25) 0px 4px 8px, rgba(0,156,156,0.4) 0px 3px]" style={{borderWidth: 1, borderStyle: 'solid', borderColor: 'initial', borderImage: 'linear-gradient(90deg, rgb(79, 157, 255) 0%, rgb(103, 255, 209) 100%) 1'}}><a href="https://dev.kanalabs.io/contact-us-dev" target="_blank" rel="noopener noreferrer">Contact Us</a></button>
            <button className="flex items-center justify-center h-[2.5rem] gap-1 px-4"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.3335 2.66699C2.28683 2.66699 1.42667 3.47366 1.34001 4.50033L8.00016 8.09668L14.6603 4.50033C14.5737 3.47366 13.7135 2.66699 12.6668 2.66699H3.3335ZM1.3335 5.63053V11.3337C1.3335 12.437 2.23016 13.3337 3.3335 13.3337H12.6668C13.7702 13.3337 14.6668 12.437 14.6668 11.3337V5.63053L8.23714 9.1071C8.16381 9.1471 8.0835 9.16699 8.00016 9.16699C7.91683 9.16699 7.83652 9.1471 7.76318 9.1071L1.3335 5.63053Z" fill="#7D8595"></path></svg><a href="https://dev.kanalabs.io/contact-us-dev" target="_blank" rel="noopener noreferrer" className="text-[#7D8595] font-normal text-xs">hello@kanalabs.io</a></button>
          </div>
        </div>
      </div>
    </div>
    {/* <img src="" alt="Ellipse" className=" w-full h-full z-[-1]" /> */}
    <div className="flex justify-between mt-4 pt-6 text-[#7D8595] text-center font-normal text-xs relative">
      <div className="w-full flex md:flex-row flex-col items-center justify-between">
        <div className="block mr-4 2xl:w-2/3 lg:w-1/3 w-3/3 xxl:hidden sxl:hidden bxl:hidden xl:hidden lg:hidden md:inline sm:inline xd:inline">
          <a href="https://kanalabs.io/" target="_blank" rel="noopener noreferrer"><img src="https://app.kanalabs.io/_next/static/media/Kana-Logo.afc11a9c.svg" className="w-40" alt="logo" /></a>
          <p className="text-xs text-[#FFFFFF] font-normal mt-5">Copyright 2024 Kana Labs</p>
        </div>
        <div className="flex items-center gap-2 xxl:inline-flex sxl:inline-flex bxl:inline-flex xl:inline-flex lg:inline-flex md:hidden sm:hidden xd:hidden">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.3335 2.66699C2.28683 2.66699 1.42667 3.47366 1.34001 4.50033L8.00016 8.09668L14.6603 4.50033C14.5737 3.47366 13.7135 2.66699 12.6668 2.66699H3.3335ZM1.3335 5.63053V11.3337C1.3335 12.437 2.23016 13.3337 3.3335 13.3337H12.6668C13.7702 13.3337 14.6668 12.437 14.6668 11.3337V5.63053L8.23714 9.1071C8.16381 9.1471 8.0835 9.16699 8.00016 9.16699C7.91683 9.16699 7.83652 9.1471 7.76318 9.1071L1.3335 5.63053Z" fill="#7D8595"></path></svg>
          <p className="text-[#7D8595] font-normal text-xs">hello@kanalabs.io</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;