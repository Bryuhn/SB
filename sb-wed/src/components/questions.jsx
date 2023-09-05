import React from 'react'
import soups from "../assests/P1216479.jpg"


const Questionaire = () => {
  return (
    <div className='h-full absolute grid grid-cols-2 z-10 max-xl:flex flex-col items-center justify-center mx-32 max-lg:mx-42 max-md:mx-24 max-sm:mx-2'>
        <div className='w-full pr-5 max-xl:order-2'>
            <div className="text-6xl py-10 text-center">Questionaire</div>
            <div className='text-center'>
                <p className='p-2 text-xl font-Montserrat font-light'>Please click the link below!</p>
                <p className='p-2 text-xl font-Montserrat font-light'>Cliquez sur le lien ci-dessous !</p>
                <a className='p-2 text-xl underline font-Montserrat font-light' href='https://docs.google.com/forms/d/e/1FAIpQLSfcMf40Rn1E0_tX56tihl1y1cjP6dTpCntOIBXyORroJaUfgg/viewform'>Questionnaire for the wedding / Questionnaire pour le mariage</a>
            </div>
        <hr className='bg-gray-300 h-0.5 w-32 rounded m-auto mt-20 mb-20'></hr>
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

export default Questionaire