import React from 'react'
import soups from "../assests/P1216479.jpg"


const Text = () => {
  return (
    <div className='text-center absolute grid grid-cols-2 z-10 max-xl:flex flex-col items-center justify-center mx-32 max-lg:mx-42 max-md:mx-24 max-sm:mx-2'>
        <div className='w-full pr-5 max-xl:order-2'>
            <div className="text-8xl py-10">Sophie & Brian</div>
            <hr className='bg-gray-500 h-0.5 w-16 rounded m-auto'></hr>
            <div className="text-xl font-Montserrat font-light py-5">WE'RE GETTING MARRIED! / ON SE MARIE !</div>
            <div className='text-xl'>
                <p className='text-6xl'>5 Août 2023</p>
                <p className='text-xl font-Montserrat font-light py-5'>JOUQUES, BOUCHES-DU-RHÔNE</p>
            </div>
            <hr className='bg-gray-500 h-0.5 w-16 rounded m-auto'></hr>
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
            <div className='flex justify-center gap-1 text-4xl p-5'>
            <p className='mt-0.5'>SOPHIE</p>
            <p className='mb-0.5'>&</p>
            <p className='mt-0.5'>BRIAN</p>
        </div>
        <div className='flex justify-center font-Montserrat '>
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

export default Text