

import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="backdrop-blur-[50px] flex items-center justify-between 2xl:px-12 xl:px-12 lg:px-12 md:px-4 sm:px-4 py-2 bg-[#1d1e201a] fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-min z-[2] overflow-visible" style={{ fontFamily: "urbanist" }}>
      <div className="hidden md:block">
        <img
          src="https://app.kanalabs.io/_next/static/media/Kana-Logo.afc11a9c.svg"
          alt="Kana Labs Logo"
        />
      </div>
      <div className="block md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='26'%20height='34'%20viewBox='0%200%2026%2034'%20fill='none'%3e%3cg%20id='Logo'%3e%3cg%20id='Group%206'%3e%3cpath%20id='Ellipse%2054'%20d='M16.7905%201.70828C16.7905%201.14052%2016.3298%200.67689%2015.7632%200.71263C13.9714%200.825646%2012.2082%201.23371%2010.5452%201.92253C8.56518%202.74268%206.7661%203.94479%205.25067%205.46023C3.73523%206.97566%202.53312%208.77474%201.71297%2010.7548C0.892827%2012.7348%200.470703%2014.8569%200.470703%2017.0001C0.470703%2019.1432%200.892828%2021.2654%201.71298%2023.2454C2.53312%2025.2254%203.73523%2027.0245%205.25067%2028.5399C6.7661%2030.0554%208.56519%2031.2575%2010.5452%2032.0776C12.2082%2032.7664%2013.9714%2033.1745%2015.7632%2033.2875C16.3298%2033.3233%2016.7905%2032.8596%2016.7905%2032.2919L16.7905%201.70828Z' fill='url(%23paint0_linear_2074_8642)'/%3e%3cpath%20id='Ellipse%2055'%20d='M25.5284%205.04973C25.5284%204.48197%2025.0673%204.0173%2024.5014%204.06403C21.5034%204.31163%2018.6753%205.63727%2016.5328%207.8231C14.147%2010.2571%2012.8066%2013.5583%2012.8066%2017.0005C12.8066%2020.4426%2014.147%2023.7438%2016.5328%2026.1778C18.6753%2028.3636%2021.5034%2029.6893%2024.5014%2029.9369C25.0673%2029.9836%2025.5284%2029.5189%2025.5284%2028.9512V5.04973Z' fill='url(%23paint1_linear_2074_8642)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2074_8642'%20x1='0.272802'%20y1='36.7496'%20x2='25.8135'%20y2='-3.39804'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230194FF'/%3e%3cstop%20offset='1'%20stop-color='%231FF8D1'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_2074_8642'%20x1='12.6524'%20y1='32.6888'%20x2='33.1007'%20y2='1.14615'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230194FF'/%3e%3cstop%20offset='1'%20stop-color='%231FF8D1'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt="Kana Labs Logo Mobile"
        />
      </div>
      {/* Desktop Nav */}
      <div className="flex items-center gap-4 ml-2 md:ml-6">
        <div className="md:flex hidden items-center gap-10 mr-8  !outline-none">
          <a
            className="text-[#FFFFFFCC] hover:text-[#FFFFFFCC] text-sm font-bold"
            href="https://medium.com/kana-labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            className="text-[#FFFFFFCC] hover:text-[#FFFFFFCC] text-sm font-bold"
            href="https://docs.kanalabs.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
        </div>
        <a
          className="flex items-center justify-center text-[#0C0C0D] text-xs font-extrabold bg-[#00FFF0] rounded-[1rem] h-[2.5rem] gap-2 px-4 shadow-md border-[0.063rem] border-[#008181] hover:text-black hover:shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] hover:line-height-[24px]"
          href="https://www.kana.trade/"
          style={{
            lineHeight: "18px",
            overflowWrap: "break-word",
            fontFamily: "urbanist",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch App
          <img
            src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_767_1612)'%3e%3cpath%20d='M8.66643%207.33327L2.33309%2013.6666M9.34537%202.35892C10.1574%202.89772%2010.9379%203.53294%2011.6672%204.26227C12.4028%204.99788%2013.0427%205.78554%2013.5845%206.60511M6.16974%205.26403L4.25316%204.62517C4.03243%204.5516%203.78932%204.59842%203.61171%204.7487L1.70694%206.36043C1.31699%206.69039%201.42777%207.31833%201.90709%207.49492L3.71189%208.15985M7.78712%2012.235L8.45205%2014.0398C8.62864%2014.5191%209.25658%2014.6299%209.58654%2014.2399L11.1983%2012.3351C11.3486%2012.1575%2011.3954%2011.9144%2011.3218%2011.6937L10.6829%209.77711M12.8988%201.51376L9.62783%202.05892C9.27463%202.11779%208.95067%202.29139%208.70605%202.55288L4.29734%207.26564C3.15456%208.48723%203.18635%2010.3949%204.36918%2011.5778C5.55202%2012.7606%207.45974%2012.7924%208.68132%2011.6496L13.3941%207.24091C13.6556%206.99629%2013.8292%206.67233%2013.888%206.31913L14.4332%203.04815C14.5836%202.14572%2013.8012%201.36335%2012.8988%201.51376Z' stroke='%230C0C0D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_767_1612'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
            alt="Launch App"
          />
        </a>
      </div>
      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#060C0F] shadow-lg flex flex-col items-center py-4 z-50 md:hidden animate-fade-in">
          <a
            className="text-[#FFFFFFCC] hover:text-white text-base font-bold py-2"
            href="https://medium.com/kana-labs"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>
          <a
            className="text-[#FFFFFFCC] hover:text-white text-base font-bold py-2"
            href="https://docs.kanalabs.io/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Docs
          </a>
          <a
            className="flex items-center justify-center text-[#0C0C0D] text-xs font-extrabold bg-[#00FFF0] rounded-[1rem] h-[2.5rem] gap-2 px-4 shadow-md border-[0.063rem] border-[#008181] hover:text-black mt-2"
            href="https://www.kana.trade/"
            style={{
              lineHeight: "18px",
              overflowWrap: "break-word",
              fontFamily: "urbanist",
            }}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Launch App
            <img
              src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_767_1612)'%3e%3cpath%20d='M8.66643%207.33327L2.33309%2013.6666M9.34537%202.35892C10.1574%202.89772%2010.9379%203.53294%2011.6672%204.26227C12.4028%204.99788%2013.0427%205.78554%2013.5845%206.60511M6.16974%205.26403L4.25316%204.62517C4.03243%204.5516%203.78932%204.59842%203.61171%204.7487L1.70694%206.36043C1.31699%206.69039%201.42777%207.31833%201.90709%207.49492L3.71189%208.15985M7.78712%2012.235L8.45205%2014.0398C8.62864%2014.5191%209.25658%2014.6299%209.58654%2014.2399L11.1983%2012.3351C11.3486%2012.1575%2011.3954%2011.9144%2011.3218%2011.6937L10.6829%209.77711M12.8988%201.51376L9.62783%202.05892C9.27463%202.11779%208.95067%202.29139%208.70605%202.55288L4.29734%207.26564C3.15456%208.48723%203.18635%2010.3949%204.36918%2011.5778C5.55202%2012.7606%207.45974%2012.7924%208.68132%2011.6496L13.3941%207.24091C13.6556%206.99629%2013.8292%206.67233%2013.888%206.31913L14.4332%203.04815C14.5836%202.14572%2013.8012%201.36335%2012.8988%201.51376Z' stroke='%230C0C0D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_767_1612'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              alt="Launch App"
            />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;