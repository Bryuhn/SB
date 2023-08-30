import React from 'react'
import flower from "../assests/flowers.jpg"




const Background = () => {
  return (
    <div>
    <div className='flex items-center'>
      <img
        className=""
        src={flower}
        alt="flower">
      </img>
      <div className='absolute flex justify-center items-center w-full'>
        <div className='ml-72 w-full'>
          <div className=''>
            <div className="text-8xl w-full py-10">Sophie & Brian</div>
            <hr className='bg-gray-800 h-0.5 w-16 rounded border-0'></hr>
            <div className="text-xl py-2 w-full font-Montserrat font-light py-5">WE'RE GETTING MARRIED! / ON SE MARIE !</div>
            <div className='text-xl'>
              <p className='text-6xl'>5 Août 2023</p>
              <p className='text-xl py-2 w-full font-Montserrat font-light py-5'>JOUQUES, BOUCHES-DU-RHÔNE</p>
            </div>
            <hr className='bg-gray-800 h-0.5 w-16 rounded border-0'></hr>

          </div>
        </div>
        <div className='mr-56 w-full bg-slate-100'>image</div>
      </div>
    </div>
    </div>
  )
}

export default Background