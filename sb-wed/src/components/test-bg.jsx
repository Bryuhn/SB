import React from 'react'
import bottom from "../assests/bottom.jpg"
import top from "../assests/top.jpg"

const Tester = () => {
  return (
    <div>
        <div className='relative bg-white h-screen'>
            <img 
                className="absolute inset-x-0 top-0 z-10"
                src={top}
                alt="top"
            ></img>
            <img 
                className=" absolute inset-x-0 bottom-0 z-0"
                src={bottom}
                alt="bottom"
            ></img>
        </div>
    </div>
  )
}

export default Tester