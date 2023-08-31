import React from 'react'

const Nav = () => {
  return (
    <div className='relative'>
      <nav className=" bg-stone-300 bg-gradient-to-b from-stone-300 from-2% to-stone-100 to-98% h-24 flex justify-between items-center text-gray-600 uppercase">
          <div className="ml-64 text-5xl bg-blue-400">S&B</div>
          <div className='mr-72 font-Montserrat text-md font-light flex'>
            <div className='px-5 hover:underline '>Welcome!</div>
            <div className='px-5 hover:underline '>You're Coming?</div>
            <div className='px-5 hover:underline '>Car & Accommadation</div>
            <div className='px-5 hover:underline '>Questionaire</div>
            <div className='px-5 hover:underline '>Contact US</div>
          </div>
      </nav>
    </div>
  )
}

export default Nav