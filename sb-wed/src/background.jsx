import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

import bottom from "../assests/bottom.jpg"
import top from "../assests/top.jpg"
import soups from "../assests/P1216479.jpg"

const Background = () => {
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
  <div className='relative h-full bg-green-100'>
    <img
      className="fixed inset-x-0 top-0"
      src={top}
      alt="top">
    </img>
    <div className="absolute z-20 w-full h-24 flex justify-between items-center uppercase shadow-md">
      <div className="ml-32 text-6xl font-bold max-lg:ml-5">S&B</div>
        <ul className='flex justify-center items-center absolute right-24 font-Montserrat text-md font-light max-xl:hidden'>
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
    <div className='absolute grid grid-cols-2 pt-24 z-10 max-xl:flex flex-col items-center justify-center mx-32 max-lg:mx-42 max-md:mx-24 max-sm:mx-2'>
      <div className='w-full pr-5 max-xl:order-2'>
          <div className="text-8xl py-10">Sophie & Brian</div>
          <hr className='bg-gray-800 h-0.5 w-16 rounded border-0'></hr>
          <div className="text-xl font-Montserrat font-light py-5">WE'RE GETTING MARRIED! / ON SE MARIE !</div>
          <div className='text-xl'>
            <p className='text-6xl'>5 Août 2023</p>
            <p className='text-xl font-Montserrat font-light py-5'>JOUQUES, BOUCHES-DU-RHÔNE</p>
          </div>
          <hr className='bg-gray-800 h-0.5 w-16 rounded border-0'></hr>
          <div className='relative overflow-auto'>
            <div className='py-5 font-Montserrat font-light bg- bg-transparent sm:text-sm '>
              <p className="py-2">Congratulations, you have been handpicked from billions of people to be a part of our special day (lucky you!).</p>
              <p className="py-2 italic">Félicitations, vous avez été choisi parmi des milliards de personnes pour participer à notre journée de mariage (petits chanceux !).</p>
              <p className="py-2">We are so happy to have you join us on the day, that we have made this super quick questionnaire especially for you. Please fill it (one per guest) so that you get fed and watered correctly.</p>
              <p className="py-2 italic">Nous sommes tellement heureux de vous compter parmi nous ce jour-là que nous avons préparé ce questionnaire rapide spécialement pour vous. Veuillez le remplir (un par invité) afin que vous soyez nourri et abreuvé correctement.</p>
              <p className="py-2">Can't wait to see you on August 5th, 2023, 4pm at Jouques' Townhall then to party all night together here!</p>
              <p className="p2-2 italic">Nous sommes pressés de vous voir le 5 août 2023, à 16h, à la mairie de Jouques puis de faire la fête avec vous toute la nuit ici !</p>
            </div>
          </div>
      </div>
      <div className='w-full h-full flex justify-center items-center object-cover max-xl:order-1 mt-10'>
        <img
          className=""
          src={soups}
          alt="soup">
        </img>
      </div>
      <div className='z-10 col-span-2 font-Amatic text-xl flex justify-center items-center max-xl:order-3 bottom-0 h-24'>© 2023 Brian Brousse - all rights reserved</div>
    </div>
    <img
      className="fixed inset-x-0 bottom-0"
      src={bottom}
      alt="bottom">
    </img>
  </div>
  )
}

export default Background