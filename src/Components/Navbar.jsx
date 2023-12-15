import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav class=" border-gray-200 dark:bg-gray-900 ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="md:h-20 h-10 md:mb-2" alt="MediaMesh Logo" />
                </Link>
                <div class="flex md:order-2 gap-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <p className=' hover:border-b-2 border-[#ff5100]   hover:cursor-pointer flex items-center '>Talk To Sale</p>
                    <button type="button" class="text-gray-900 hidden md:block  border border-[#ff5100] bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-[#ff5100] font-medium rounded-full text-sm px-6 py-2.5 me-2  dark:bg-gray-800 dark:text-white dark:border-[#ff5100] dark:hover:bg-gray-700 dark:hover:border-[#ff5100] dark:focus:ring-[#ff5100]  ">Login</button>
                    <button type="button" class="text-white  focus:outline-none hover:border-[#ff5100] hover:shadow-2xl  shadow-[#ff5100] focus:ring-[#ff5100] font-medium rounded-full text-sm px-4 py-2 text-center bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] dark:focus:ring-[#ff5100] hidden md:block">Start Free Trial</button>
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLineca="round" strokeLinejoinn="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full xl:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <div class="container mx-auto ">
                                <div class="group inline-block relative">
                                    <button class=" text-gray-700 font-semibold rounded inline-flex items-center">
                                        <span class="mr-1">Products</span>
                                    </button>
                                    <div class="hidden group-hover:block absolute p-3 border float-left w-44 bg-white text-gray-700 rounded-md shadow-lg  transition-transform transform origin-top-left">
                                        <a href="/retail" class="block hover:bg-blue-600 rounded-lg hover:text-white  px-4 py-2">Retail</a>
                                        <a href="#" class="block px-4 py-2">Item 2</a>
                                        <a href="#" class="block px-4 py-2">Item 3</a>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <div id="dropdownHover" style={{ backgroundImage: 'url("https://www.pickcel.com/assets/img/bg/industry-bg.webp")' }} class="z-10 hidden  divide-y divide-gray-100 rounded-xl shadow w-44 ">
                            <ul class="py-2 px-3 text-sm text-gray-700  dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                <li>
                                    <a href="/retail" class="block px-4 py-2  rounded-lg hover:bg-blue-600 hover:text-white">Retail</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2  rounded-lg hover:bg-blue-600 hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2  rounded-lg hover:bg-blue-600 hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2  rounded-lg hover:bg-blue-600 hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff5100] md:dark:hover:text-[#ff5100] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Customers</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff5100] d:dark:hover:text-[#ff5100] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                        </li>
                        <li>
                            <Link to="/pricing" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff5100] md:dark:hover:text-[#ff5100] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>



    )
}

export default Navbar
