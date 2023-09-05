import React from 'react'
import soups from "../assests/P1216479.jpg"


const Coming = () => {
  return (
    <div className='absolute grid grid-cols-2 z-10 max-xl:flex flex-col items-center justify-center mx-32 max-lg:mx-42 max-md:mx-24 max-sm:mx-2'>
        <div className='w-full pr-5 max-xl:order-2'>
            <div className="text-8xl py-10 text-center">You're coming?</div>
            <hr className='bg-gray-800 h-0.5 w-16 rounded border-0 m-auto'></hr>
            <div className='relative overflow-auto'>
                <div className='py-5 font-Montserrat font-light bg- bg-transparent sm:text-sm '>
                    <p className="py-2">To confirm your attendance at our wedding (before May 31st please), simply write your first name ("prénom") and name ("nom") below, and click on "Rechercher". Select your name and let us know if you can make it :)</p>
                    <p className="py-2 italic">Pour confirmer votre présence à notre mariage (avant le 31 mai s'il vous plait), écrivez simplement votre nom ci-dessous et cliquez sur « Rechercher ». Sélectionnez votre nom et dites-nous si vous pouvez venir ! :)</p>
                </div>
            </div>
            <hr className='bg-gray-800 h-0.5 w-16 rounded border-0 m-auto'></hr>
        <div className=' py-5 grid grid-cols-2 gap-4'>
            <input name='Prenom' id='Prenom' className='p-2 col-span-1 rounded-md border' placeholder='Prenom'></input>
            <input name='Nom' id='Nom' className='p-2 col-span-1 rounded-md border' placeholder='Nom'></input>
            <submit className='text-white font-bold text-3xl p-2 rounded-md col-span-2 cursor-pointer m-auto bg-green-300'>Rechercher</submit>
        </div>
        <div className='flex justify-center gap-1 text-4xl p-5'>
            <p className='mt-0.5'>SOPHIE</p>
            <p className='mb-0.5'>&</p>
            <p className='mt-0.5'>BRIAN</p>
        </div>
        <div className='flex justify-center text-3xl '>
            <p>5 AOÛT 2023</p>
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
)
}

export default Coming