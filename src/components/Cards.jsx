import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-14 gap-5">
      <div className='cardcontainer w-1/2 h-[27vw]'>
        <div className='cards relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center '>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute px-3 py-1 rounded-full border-2 left-5 bottom-5 text-[1vw]">&copy;2019-2022</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[27vw]'>
        <div className='cards relative rounded-lg w-1/2 h-full bg-[#192826] flex items-center justify-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className="absolute px-3 py-1 rounded-full border-2 left-5 bottom-5 text-[1vw]">RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='cards relative rounded-lg w-1/2 h-full bg-[#192826] flex items-center justify-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className="absolute px-3 py-1 rounded-full border-2 left-5 bottom-5 text-[1vw]">BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
