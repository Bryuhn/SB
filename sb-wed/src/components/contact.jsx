import React from 'react'
import soups from "../assests/P1216479.jpg"


const Contact = () => {
  return (
    <div className='h-full absolute grid grid-cols-2 z-10 max-xl:flex flex-col items-center justify-center mx-32 max-lg:mx-42 max-md:mx-24 max-sm:mx-2'>
        <div className='w-full pr-5 max-xl:order-2'>
            <div className="text-6xl py-10 text-center">Contact Us</div>
            <div className='text-center'>
                <p className='p-2 text-xl font-Montserrat font-light'>Not sure about the dress code? Are children welcome? If you have any questions or comments, post them here and we'll receive them directly by email. Thank you!</p>
                <p className='p-2 text-xl font-Montserrat font-light italic'>Un doute sur le code vestimentaire ? Les enfants sont-ils les bienvenus ? Si vous avez la moindre question ou commentaire, posez-les ici et nous les recevrons directement par email. Merci !</p>
            </div>
        <hr className='h-0.5 w-32 rounded m-auto mt-10 mb-10'></hr>
        <div className='border flex flex-col items-center py-8'>
            <input className='my-2 p-2 h-10 w-[90%] border border-gray-300' placeholder='Nom'></input>
            <input className='my-2 p-2 h-10 w-[90%] border border-gray-300' placeholder='Email'></input>
            <input className='my-2 p-2 h-10 w-[90%] border border-gray-300' placeholder='Object'></input>
            <input className='my-2 p-2 h-32 w-[90%] border border-gray-300' placeholder='commentaire'></input>
            <submit className='text-white font-bold text-3xl my-2 p-2 rounded-md cursor-pointer m-auto bg-green-300 w-[80%] text-center'>Publier commentaire</submit>

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

export default Contact