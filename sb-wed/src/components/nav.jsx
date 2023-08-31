import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const[nav,setNav] = useState(false)
    
    const links = [
      {
        id:1,
        link:'Welcome!'
      },
      {
        id:2,
        link:"You're Coming?"
      },
      {
        id:3,
        link:"Car & Accommadation"
      },
      {
        id:4,
        link:"Questionaire"
      },
      {
        id:5,
        link:"Contact US"
      }
    ]
    
  return (
    <div className="relative z-20 w-full h-18 flex justify-between items-center uppercase shadow-md bg-green-500">
      <div className="ml-32 text-6xl font-bold bg-red-300 max-lg:ml-5">S&B</div>
        <ul className='bg-orange-200 flex justify-center items-center absolute right-24 font-Montserrat text-md font-light max-xl:hidden'>
          {links.map(({id,link}) => (
            <li
              key={id}
              className='hover:underline px-5'
            >
            {link}</li>
          ))}
        </ul>
      <div 
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-5 xl:hidden z-40'>
        {nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
      </div>
      {nav && (
        <ul className='xl:hidden flex flex-col justify-center items-center top-0 right-0 fixed w-1/3 h-screen bg-green-200 bg-opacity-50 rounded'>
          
        {links.map(({ id, link }) => (
            <li 
            key={link.id} 
            className='ps-4 cursor-pointer capitalize py-6 text-xl hover:text-white hover:scale-110 duration-500'>
              <li onClick={() => setNav(!nav)} 
                    to={link} 
                    smooth
                    duration={500}>
                {link}
              </li>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar