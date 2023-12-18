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
import Pricing from '../Pages/Pricing'

function Home() {

    const tailwindStyles = {
        '.btn-5': {
            width: '130px',
            height: '40px',
            lineHeight: '42px',
            padding: '0',
            border: 'none',
            background: 'linear-gradient(0deg, rgba(255, 27, 0, 1) 0%, rgba(251, 75, 2, 1) 100%)',
        },
        '.btn-5:hover': {
            color: '#f0094a',
            background: 'transparent',
            boxShadow: 'none',
        },
        '.btn-5::before, .btn-5::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            right: '0',
            height: '2px',
            width: '0',
            background: '#f0094a',
            boxShadow: '-1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003, 4px 4px 5px 0px #0002',
            transition: '400ms ease all',
        },
        '.btn-5::after': {
            right: 'inherit',
            top: 'inherit',
            left: '0',
            bottom: '0',
        },
        '.btn-5:hover::before, .btn-5:hover::after': {
            width: '100%',
            transition: '800ms ease all',
        },
    };


    return (
        <>
            <div class="context ">
                <h1></h1>
            </div>


            <div class="area " >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <div className='main__bg z-10'>
                    <div className="main__bg layer1 "></div>
                    <div className="main__bg layer2 "></div>
                    <Navbar />
                    <div className='w-full  flex flex-col gap-3 items-center justify-center md:h-[65vh]  lg:mt-16  mt-7'>
                        <h1 class="w-[90%] text-center text-3xl mt-3 font-bold leading-none  text-gray-900 md:text-3xl lg:text-5xl 2xl:text-7xl xl:text-6xl  dark:text-white">Welcome to the Future of Digital</h1>
                        <span className="mb-4 text-center flex text-2xl font-bold leading-none  md:text-3xl  xl:text-6xl lg:text-5xl  2xl:text-7xl dark:text-white">Signage with
                            <h1 class="font-extrabold text-transparent  md:text-3xl xl:text-6xl   2xl:text-7xl bg-clip-text lg:text-5xl bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800]">
                                &nbsp;MediaMesh
                            </h1>
                        </span>
                        <p class=" leading-3 tracking-tighter lg:text-md xl:text-4xl  text-sm md:text-md  font-thin lg:text-4xl text-gray-500 2xl:text-5xl sm:px-16 xl:px-48 md:wmt-12 dark:text-gray-400">Engage, Inform, and Inspire with Our State-</p>

                        <p class="mb-6 md:text-xl tracking-tighter text-sm font-thin text-gray-500 2xl:text-5xl xl:text-4xl lg:text-4xl sm:px-16 xl:px-48 dark:text-gray-400">of-the-Art Digital Signage Solutions.</p>

                        <div className='flex gap-3'>

                            <div className='flex-col hover:font-semibold hover:text-black flex gap-1'>
                                <section>
                                    <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                        <a
                                            style={{ background: "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)" }}
                                            href="!"
                                            class="button button--aylen md:px-5 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  tracking-widest overflow-hidden"
                                        >
                                            Start Free Trial
                                        </a>
                                    </div>
                                </section>
                                <p className=' text-center text-gray-400 text-[10px]'>No Credit Card Required</p>
                            </div>

                            <a href="#" class="inline-flex items-center text-[11px] md:text-sm  justify-center h-fit px-3 py-2 md:px-5 md:py-3 text-base font-medium text-center border text-black  rounded-full hover:shadow-2xl bg-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Schedule My Demo
                            </a>
                        </div>
                        <div className='w-full md:mt-20 mt-5 flex items-center justify-center'>
                            <p className='md:text-[34px] text-[20px]'>Trusted by Govt. & MNCs</p>
                        </div>

                    </div >
                    <ClientCarousel />
                </div>
            </div >
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
