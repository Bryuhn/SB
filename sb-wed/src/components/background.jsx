import React from 'react'
import bottom from "../assests/bottom.jpg"
import top from "../assests/top.jpg"
import soups from "../assests/P1216479.jpg"

const Background = () => {
  return (
  <div className='relative h-full bg-green-100'>
    <img
      className="fixed inset-x-0 top-0"
      src={top}
      alt="top">
    </img>
    <div className="absolute z-10 w-full h-24 flex justify-between items-center uppercase shadow-md">
      <div className="ml-64 text-6xl font-bold">S&B</div>
      <div className='mr-72 font-Montserrat text-md font-light flex'>
        <div className='px-5 hover:underline '>Welcome!</div>
        <div className='px-5 hover:underline '>You're Coming?</div>
        <div className='px-5 hover:underline '>Car & Accommadation</div>
        <div className='px-5 hover:underline '>Questionaire</div>
        <div className='px-5 hover:underline '>Contact US</div>
      </div>
    </div>
    <div className='absolute grid grid-cols-2 pt-24 z-10 max-md:flex-col items-center justify-center mx-72 md:mx-32 flex-col sm:mx-2'>
      <div className='w-full pr-5'>
        <div className=''>
          <div className="text-8xl py-10">Sophie & Brian</div>
          <hr className='bg-gray-800 h-0.5 w-16 rounded border-0'></hr>
          <div className="text-xl font-Montserrat font-light py-5">WE'RE GETTING MARRIED! / ON SE MARIE !</div>
          <div className='text-xl'>
            <p className='text-6xl'>5 Août 2023</p>
            <p className='text-xl font-Montserrat font-light py-5'>JOUQUES, BOUCHES-DU-RHÔNE</p>
          </div>
          <hr className='bg-gray-800 h-0.5 w-16 rounded border-0'></hr>
          <div className='py-5 font-Montserrat font-light bg- bg-transparent sm:text-sm'>
            <p className="py-2">Congratulations, you have been handpicked from billions of people to be a part of our special day (lucky you!).</p>
            <p className="py-2 italic">Félicitations, vous avez été choisi parmi des milliards de personnes pour participer à notre journée de mariage (petits chanceux !).</p>
            <p className="py-2">We are so happy to have you join us on the day, that we have made this super quick questionnaire especially for you. Please fill it (one per guest) so that you get fed and watered correctly.</p>
            <p className="py-2 italic">Nous sommes tellement heureux de vous compter parmi nous ce jour-là que nous avons préparé ce questionnaire rapide spécialement pour vous. Veuillez le remplir (un par invité) afin que vous soyez nourri et abreuvé correctement.</p>
            <p className="py-2">Can't wait to see you on August 5th, 2023, 4pm at Jouques' Townhall then to party all night together here!</p>
            <p className="p2-2 italic">Nous sommes pressés de vous voir le 5 août 2023, à 16h, à la mairie de Jouques puis de faire la fête avec vous toute la nuit ici !</p>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <img
          className=""
          src={soups}
          alt="soup">
        </img>
      </div>
      <div className='z-10 bg-black col-span-2'>sitemap</div>
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