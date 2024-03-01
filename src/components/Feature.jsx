import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Feature() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index)=>{
    cards[index].start({y: "0"})
  }

  const handleHoverEnd = (index)=>{
    cards[index].start({y: "100%"})
  }
    return (
    <div className='w-full py-24'>
      <div className='w-full px-10 border-b-[1px] border-zinc-700  pb-10'>
        <h1 className='text-[4.2vw] font-["Neue Montreal"] tracking-tight'>Featured Project</h1>
      </div>
      <div className="px-10">
        <div className='cards w-full flex gap-5 mt-10'>
            <motion.div 
            onHoverStart={()=>handleHover(0)}
            onHoverEnd={()=> handleHoverEnd(0)}
            className='cardscontainer relative w-1/2 h-[35vw] '>
                <h1 className='flex overflow-hidden absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-["Neue Montreal"] leading-none tracking-tighter font-extrabold text-[7vw]'>
                {"FYDE".split("").map((item, index) =>(
                        <motion.span 
                        initial={{y:"100%"}} 
                        animate={cards[0]}
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                        className="inline-block">{item}</motion.span>
                    ))}
                </h1>
                <div className="cards w-full h-full rounded-xl overflow-hidden">
                    <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </motion.div>
            <motion.div
            onHoverStart={()=>handleHover(1)}
            onHoverEnd={()=> handleHoverEnd(1)} 
            className='cardscontainer relative w-1/2 h-[35vw]'>
                <div className="cards w-full h-full rounded-xl overflow-hidden">
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-["Neue Montreal"] leading-none tracking-tighter font-extrabold text-[7vw]'>
                    {"VISE".split("").map((item, index) =>(
                        <motion.span 
                        initial={{y:"100%"}} 
                        animate={cards[1]}
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                        className="inline-block">{item}</motion.span>
                    ))}
                </h1>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Feature
