
import React from 'react';

const partners = [
    '/assets/eragon1.svg',
    '/assets/chingari.png',
    '/assets/petralayer.svg',
    '/assets/pontemnetwork.svg',
    '/assets/Twallet.svg',
    '/assets/coinstore.svg',
    '/assets/Ethosx.svg',
    '/assets/econia.png',
    '/assets/tradeview.svg',
];



const PartnersSection = () => (
    <div className="w-full flex flex-col items-center py-8">
        <h2 className="text-[#FFFFFF] opacity-50 font-normal text-sm text-center mb-6">With partners like</h2>
        {/* Mobile layout: 2x4 grid + 1 centered below; Desktop: horizontal flex */}
        <div className="block md:hidden w-full flex flex-col items-center">
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                {partners.slice(0, 4).map((img, idx) => (
                    <div key={idx} className="flex justify-center items-center">
                        <img src={img} alt={`Partner ${idx + 1}`} className="w-28 h-10 object-contain" />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mt-6">
                {partners.slice(4, 8).map((img, idx) => (
                    <div key={idx+4} className="flex justify-center items-center">
                        <img src={img} alt={`Partner ${idx + 5}`} className="w-28 h-10 object-contain" />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <img src={partners[8]} alt="Partner 9" className="w-32 h-10 object-contain" />
            </div>
        </div>
        {/* Desktop layout: 2 rows of 4 logos, 9th centered below */}
        <div className="hidden md:flex w-full flex-col items-center">
            <div className="grid grid-cols-4 gap-x-24 gap-y-12">
                {partners.slice(0, 4).map((img, idx) => (
                    <div key={idx} className="flex justify-center items-center">
                        <img src={img} alt={`Partner ${idx + 1}`} className="w-40 h-14 object-contain" />
                    </div>
                ))}
                {partners.slice(4, 8).map((img, idx) => (
                    <div key={idx+4} className="flex justify-center items-center">
                        <img src={img} alt={`Partner ${idx + 5}`} className="w-40 h-14 object-contain" />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <img src={partners[8]} alt="Partner 9" className="w-40 h-14 object-contain" />
            </div>
        </div>
    </div>
);

export default PartnersSection;