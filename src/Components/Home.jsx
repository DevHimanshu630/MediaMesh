import React from 'react'
import Navbar from './Navbar'

import "../Css/Home.css"
import ClientCarousel from './ClientCarousel'
import NewProduct from './NewProduct'
import Faq from './Faq'
import Cart from './Cart'
import Empowering from './Empowering'
import Products from './Products'
import Delivering from './Delivering'
import Customer from './Customer'
import Footer from './Footer'
import Bottom from './Bottom'

function Home() {
    return (
        <>
            <div className='main__bg'>
                <div className="main__bg layer1"></div>
                <div className="main__bg layer2"></div>
                <Navbar />
                <div className='w-full  flex flex-col gap-3 items-center justify-center h-[65vh]  mt-16 '>
                    <h1 class=" text-4xl mt-3 font-bold leading-none tracking-wider text-gray-900 md:text-5xl lg:text-7xl dark:text-white">Welcome to the Future of Digital </h1>
                    <h1 className='class="mb-4 text-4xl font-bold leading-none  text-gray-900 md:text-[700px] tracking-wider lg:text-7xl dark:text-white"'>Signage with MediaMesh.</h1>
                    <p class=" leading-3 text-lg font-normal text-gray-500 lg:text-5xl sm:px-16 xl:px-48 mt-12 dark:text-gray-400">Engage, Inform, and Inspire with Our State-</p>
                    <p class="mb-6 text-lg font-normal text-gray-500 lg:text-4xl sm:px-16 xl:px-48 dark:text-gray-400">of-the-Art Digital Signage Solutions.</p>

                    <div className='flex gap-3'>

                        <div className='flex-col flex gap-1'>
                            <a href="#" class="inline-flex items-center justify-center px-6 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Start Free Trial
                            </a>
                            <p className=' text-center text-gray-400 text-[10px]'>No Credit Card Required</p>
                        </div>

                        <a href="#" class="inline-flex items-center justify-center h-fit px-5 py-2 text-base font-medium text-center border text-black  rounded-full  hover:text-blue-700 bg-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Schedule My Demo
                        </a>
                    </div>
                    <div className='w-full mt-20 flex items-center justify-center'>
                        <p className='text-[34px]'>Trusted by Govt. & MNCs</p>
                    </div>

                </div >
                <ClientCarousel />
            </div>
            <NewProduct />
            <Faq />
            <Cart />
            <Empowering />
            <Products />
            <Delivering />
            <Customer />
            <Bottom />
            <Footer />
        </>

    )
}

export default Home
