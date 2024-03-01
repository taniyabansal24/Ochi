import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 text-white pt-1'>
      <div className='textstructure mt-40 px-20'>
        {["We Create", " Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className='masker'>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.7, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[5vw]">
                    <img className="rounded-md" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>)}
                <h1 className=' flex items-center uppercase text-[6vw] tracking-tighter h-full leading-[6vw] font-["Founders Grotesk X-Condensed"] font-light'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-3 px-20">
        {["For public and private companies", "For the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight	 leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-3 py-2 border-[1px] border-zinc-400 font-light text-sm uppercase rounded-full">Start the project</div>
          <div className="w-8 h-8 flex items-center justify-center border-[2px] border-zinc-500 font-light text-sm capitalize rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
