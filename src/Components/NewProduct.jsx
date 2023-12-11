import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa"
function NewProduct() {
    return (
        <div className='bg-white'>
            <div className='w-[100%] h-[60vh] px-40  flex justify-evenly items-center ' style={{
                backgroundImage: 'url("https://www.pickcel.com/assets/img/bg/over-view-bg.png")',
                backgroundSize: 'cover',  // Adjust the background size as needed
                backgroundPosition: 'center',
            }}>
                <div className='w-[35%]   border-4 border-black'>
                    <video autoPlay muted loop className='' >
                        <source
                            src="https://www.pickcel.com/assets/img/home/product-overview.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                </div>
                <div className='w-[45%]'>
                    <h1 className='text-[40px] leading-10'>MediaMesh: Streamline Your Digital Display</h1>
                    <p className='text-[19px] mt-[20px] font-extralight text-justify'>Enhance your communication with MediaMesh's digital signage. Choose from a vast array of templates and manage your displays with ease, remotely and efficiently.</p>
                    <div className='flex gap-[40px] items-center mt-[30px] hover:text-[red]'>
                        Straightforward. Dependable. Adaptable. Experience MediaMesh.
                    </div>
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center h-[20vh] w-[100%]'>
                <p className='text-5xl'>Sophisticated digital signage content </p>
                <p className='text-5xl'> management system</p>
                <p className=' font-extralight text-gray-500 mt-4 text-2xl'>A platform that end-to-end unifies the cycle of designing, publishing & tracking your</p>
                <p className=' font-extralight text-gray-500 text-2xl'> media on digital signs.</p>
            </div>
        </div>
    )
}

export default NewProduct
