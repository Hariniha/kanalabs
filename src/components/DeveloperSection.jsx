import React from 'react'

const DeveloperSection = () => {
  return (
    <div>{/* Devs Section */}
            <div className="mb-8 h-full py-8 -mx-4">
              <div className="pl-4 lg:pl-[120px]">
                <h1 className="text-[#FFFFFF] font-bold text-[28px] mb-6 relative" style={{ fontFamily: "Urbanist" }}>For the Devs</h1>
              </div>
              <div className="absolute left-0 pointer-events-none flex justify-start mt-[-18rem] opacity-80">
                <img src="data:image/svg+xml,%3csvg%20width='1207'%20height='938'%20viewBox='0%200%201207%20938'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.15'%20filter='url(%23filter0_f_750_2912)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M397.579%20198.809C468.889%20192.129%20545.972%20227.25%20584.086%20287.889C618.566%20342.745%20575.034%20409.741%20570.797%20474.395C567.085%20531.052%20592.194%20590.425%20561.148%20637.964C524.656%20693.838%20464.204%20735.782%20397.579%20739.623C328.072%20743.63%20253.019%20715.636%20213.999%20657.976C178.336%20605.279%20212.648%20537.793%20218.089%20474.395C222.729%20420.344%20213.413%20365.295%20243.02%20319.836C280.145%20262.836%20329.851%20205.153%20397.579%20198.809Z' fill='%2300FFD1'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M574.557%20198.474C635.521%20202.224%20661.389%20274.775%20701.057%20321.221C735.528%20361.583%20778.152%20395.459%20787.431%20447.721C798.572%20510.46%20796.02%20579.519%20755.681%20628.845C712.317%20681.869%20641.018%20724.599%20574.557%20708.019C511.846%20692.374%20501.098%20610.634%20465.76%20556.517C442.112%20520.303%20410.416%20490.578%20404.582%20447.721C397.778%20397.732%20403.049%20346.318%20431.473%20304.637C466.258%20253.63%20512.934%20194.683%20574.557%20198.474Z' fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M737.816%20232.392C805.866%20229.351%20879.308%20193.057%20934.39%20233.132C993.306%20275.998%201010.37%20356.858%201009.01%20429.705C1007.68%20501.182%20978.269%20569.062%20927.209%20619.098C876.668%20668.625%20808.576%20694.772%20737.816%20695.461C666.324%20696.156%20581.014%20684.408%20544.703%20622.819C510.117%20564.157%20578.697%20497.76%20581.134%20429.705C583.382%20366.945%20519.005%20299.129%20558.059%20249.948C596.979%20200.935%20675.293%20235.186%20737.816%20232.392Z' fill='%2300C4FF'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_750_2912'%20x='0.654678'%20y='0.654678'%20width='1205.78'%20height='936.691'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='98.6727'%20result='effect1_foregroundBlur_750_2912'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e" alt="" className="bg-cover" />
              </div>
              <div className=" lg:w-[92%] xd:p-4 lg:p-0 lg:pl-[120px]">
                <div className=" border-[0.063rem] border-[#00ffff33] rounded-[1rem] flex xxl:flex-row xl:flex-row sxl:flex-row bxl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xd:flex-col-reverse justify-between lg:p-20 gap-2  backdrop-blur-[6.796rem]">
                  <div className=" flex flex-col lg:justify-start justify-center lg:items-start items-center text-white font-[900] lg:pt-0 md:pt-[32rem] pt-[18rem] lg:gap-2 gap-5 xxl:text-[2.5rem] xl:text-[2.5rem] sxl:text-[2.5rem] bxl:text-[2.5rem] md:text-[1.75rem] lg:text-[2.5rem] lg:p-0  p-6 xd:text-[1.75rem] sm:text-[1.75rem]">
                    <div className=" lg:inline hidden"><p>Explore Kana Build for cutting-</p><p>edge blockchain integration</p></div>
                    <div className=" lg:hidden inline-flex justify-center items-center align-middle text-center text-[1.5rem] break-words">Explore Kana Build for cutting-edge blockchain integration</div>
                    <a className="w-fit border border-[#FFFFFF1A] font-extrabold text-sm py-4 px-6 rounded-2xl lg:block  text-[#1D1E20]" href="https://www.kanalabs.build/" style={{background: "linear-gradient(99.48deg, rgb(125, 255, 253) -15.26%, rgb(89, 185, 255) 117.67%)"}}>Visit Kana Labs Build</a>
                  </div>
                  <div><img src="/assets/build.png" alt="DevImage" className=" absolute lg:h-[650px] lg:right-[-7rem] opacity-80 lg:mt-[-16rem] md:mt-[-8rem] xd:mt-[-1rem] sm:mt-[-1rem] " /></div>
                </div>
              </div>
            </div></div>
  )
}

export default DeveloperSection