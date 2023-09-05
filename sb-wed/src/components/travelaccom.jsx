import React from 'react'
import soups from "../assests/P1216479.jpg"


const Travel = () => {
  return (
    <div className='scrollbar-hide absolute grid grid-cols-2 z-10 max-xl:flex flex-col items-center justify-center mx-32 max-lg:mx-42 max-md:mx-24 max-sm:mx-2 '>
        <div className='max-h-screen overflow-y-auto scrollbar-hide w-full pr-5 max-xl:order-2'>
            <div className="text-5xl p-4 text-center capitalize font-Amatic">Car & Accomadation?</div>
            <div className="text-[18px] font-light italic p-4 text-center capitalize font-Montserrat">Location de voiture et hébergement
        </div>
        
        <hr className='bg-gray-300 h-0.5 w-32 rounded m-auto'></hr>
        <div className='bg-opacity-40 p-5 text-center font-[16px]'>
            <h1 className='text-3xl font-Amatic'>Recommendations / Recommandations</h1>
            <p className='p-2 font-bold font-Montserrat '>CAR / VOITURE</p>
            <p className='p-2 font-bold font-Montserrat'>/!\ Irish folks: don't forget we drive on the other side of the road! /!\</p>
            <div className='font-Montserrat font-light'>            
                <p className='p-2'>Regarding the car rental, I would advise to look outside of the usual rental places (Hertz, Avis, Rentacar...) that will be extra expensive at that time of the year and aim for private rental like below. Note that if you arrive at Marseille Airport or Aix TGV, you have shuttles to Marseille city center (20-30min) where you can find a lot of cheaper options for the cars.</p>
                <p className='p-2 italic'>Concernant la location de voiture, je conseillerais de ne pas chercher dans les agences de location habituelles (Hertz, Avis, Rentacar...) qui seront très chères à cette période de l'année et de viser la location de véhicule de particuliers. Notez que si vous arrivez à l'aéroport de Marseille ou à Aix TGV, vous avez des navettes pour le centre ville de Marseille (20-30min) où vous pouvez trouver beaucoup d'options moins chères.</p>
                <div className='flex flex-col gap-2 underline decoration-gray-500'>
                    <a href='https://www.ouicar.fr/'>OuiCar</a>
                    <a href='https://fr.getaround.com/'>Getaround</a>
                    <a href='https://www.free2move.com/'>Free2Move</a>
                </div>
                <p className='p-2 mb-2'>Or / ou: Kayak, Liligo etc.</p>
            </div>

            <hr className='bg-gray-300 h-0.5 w-32 rounded m-auto'></hr>
            
            <p className='p-2 font-Montserrat font-bold mt-2'>ACCOMMODATION / HEBERGEMENT</p>
            <p className='p-2 font-Montserrat font-bold'>/!\ Important note: The party will be here /!\</p>
            <p className='p-2 font-Montserrat font-light'>Here is a list of different places we found in the area to make it easier for you. If you look for something on your own, we would advise to aim for either Jouques or Peyrolles villages.</p>
            <p className='p-2 italic font-Montserrat'>Voici une liste de différents endroits que nous avons repéré pour vous. Si vous préférez chercher de votre coté, nous vous recommandons de viser entre les villages de Jouques et Peyrolles.</p>
            <p className='p-2 font-Montserrat font-light'>If you are looking to group up with people, let us know and we'll introduce you to great folks!</p>
            <p className='p-2 font-Montserrat font-light'>Si vous cherchez à vous regrouper avec d'autres personnes, faites-le nous savoir et nous vous présenterons des gens formidables !</p>
            <p className='p-2 font-Montserrat font-bold'>B&B / Gîtes:</p>
            <div className='flex flex-col gap-2 p-2'>
                <a className=' underline font-Montserrat font-light'href='https://www.le-catalan.com'>- Le Catalan</a>
                <a className='underline font-Montserrat font-light'href='https://www.lemirabeau.com'>- Le Mirabeau</a>
            </div>
            <p className='p-2 font-Montserrat font-bold'>Hotels:</p>
            <a className=' underline font-Montserrat font-light p-2' href='https://all.accor.com/hotel/5529/index.fr.shtml'>- Ibis Budget</a>
            <p className='p-2 font-Montserrat font-bold'>Airbnb:</p>
            <div className='font-Montserrat font-light flex flex-col gap-2'>
                <a className='underline' href='https://www.airbnb.fr/rooms/723008187360202042'> - Duplex - 2 people (1 bed)</a>
                <a className='underline' href='https://www.airbnb.fr/rooms/52087719'>- Appartement - 2 people (1 bed)</a>
                <a className='underline' href='https://www.airbnb.fr/rooms/23153962'>- Studio - 2 people (2 beds)</a>
                <a className='underline' href='https://www.airbnb.fr/rooms/49568597'>- Bedroom with view - 2 people (1 bed)</a>
                <a className='underline' href='https://www.airbnb.fr/rooms/8237298'>- House 1 - 8 people (4 beds)</a>
                <a className='underline' href='https://www.airbnb.fr/rooms/2537700'>- House 2 - 10 people (9 beds)</a>
                <a className='underline' href='https://www.airbnb.fr/rooms/49631518'>- House 4 - 6 people (3 beds)</a>
            </div>
            <p className='p-2 font-Montserrat font-light'>Let us know if you have questions.</p>
            <p className='p-2 font-Montserrat font-light italic'>Dites nous si vous avez des questions.</p>
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
        <div className='w-full h-full flex justify-center items-center object-cover max-xl:order-1  mt-10'>
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

export default Travel