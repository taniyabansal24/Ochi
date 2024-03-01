import React from 'react'

function About() {
  return (
    <div className='w-full pt-20 pl-14 pr-16  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className="font-['Neue Montreal'] pr-40 text-[3.5vw] leading-[4vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need to {" "}
        <span className='underline md:underline-offset-[0.8vw]'>
        raise funds, sell products, explain complex ideas,</span> and <span className='underline md:underline-offset-[0.8vw]'>hire great people.</span> 
      
        </h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-4 mt-16 border-[#a1b562] ">
            <div className="w-1/2">
                <h1 className='text-[3.5vw]'>Our approach:</h1>
                <button className="flex gap-10 items-center px-7 py-3 bg-zinc-900 mt-10 rounded-full text-white">Read More
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
            </div>
            <div className="w-[50vw] h-[30vw] bg-red-500 rounded-lg">
                <img src="/Homepage-Photo-663x469.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
        </div>
    </div>
  )
}

export default About
