import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa"
function NewProduct() {
    return (
        <div className='bg-white flex flex-col justify-center text-center'>
            <div className='w-[100%]  md:h-[30vh] lg:h-[30vh] xl:h-[60vh] xl:px-40    p-5 md:flex justify-evenly items-center text-center md:text-start ' style={{
                backgroundImage: 'url("https://www.pickcel.com/assets/img/bg/over-view-bg.png")',
                backgroundSize: 'cover',  // Adjust the background size as needed
                backgroundPosition: 'center',
            }}>
                <div className='md:w-[35%] w-[100%]   border-4 border-black'>
                    <video autoPlay muted loop className='' >
                        <source
                            src="https://www.pickcel.com/assets/img/home/product-overview.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                </div>
                <div className='md:w-[45%] w-[100%] mt-9 md:mt-0'>
                    <p className=' md:text-2xl 2xl:text-[35px]  2xl:mb-16 leading-10'>MediaMesh: Streamline Your Digital Display</p>
                    <p className='2xl:text-[19px] mt-[0px]  font-thin text-justify'>Enhance your communication with MediaMesh's digital signage. Choose from a vast array of templates and manage your displays with ease, remotely and efficiently.</p>
                    <div className='flex gap-[40px] font-bold items-center text-sm cursor-pointer mt-[5px] hover:text-[red]'>
                        Straightforward. Dependable. Adaptable. Experience MediaMesh.
                    </div>
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center  my-10 md:mt-0  w-[100%] p-5 '>
                <p className='text-lg lg:text-2xl 2xl:text-5xl'>Sophisticated digital signage content </p>
                <p className='text-lg lg:text-2xl 2xl:text-5xl'>management system</p>
                <p className=' font-extralight text-gray-500 mt-12 xl:text-2xl text-xl sm:text-[17px] md:text-md  text-justify '>A platform that end-to-end unifies the cycle of designing, publishing & tracking your <span className='md:hidden'>media on digital signs.</span></p>
                <p className=' font-extralight text-gray-500 xl:text-2xl text-xl sm:text-[17px] md:text-md  md:block hidden '> media on digital signs.</p>
            </div>
        </div>
    )
}

export default NewProduct
