import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { Dropdown } from 'flowbite'
import { MdKeyboardArrowDown } from "react-icons/md";


function Navbar() {
    return (
        <nav class=" border-gray-200 dark:bg-gray-900 ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="md:h-20 h-10 md:mb-5" alt="MediaMesh Logo" />
                </Link>
                <div class="flex md:order-2 mb-2 gap-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to={"/talktosales"} className='mt-1 hover:border-b-2 border-[#ff5100]   hover:cursor-pointer flex items-center '>Talk To Sale</Link>
                    <button type="button" class="text-gray-900 hidden md:block  border border-[#ff5100] bg-white focus:outline-none hover:bg-gray-100  font-medium rounded-full text-sm px-6 py-2.5 me-2  dark:bg-gray-800 dark:text-white dark:border-[#ff5100] dark:hover:bg-gray-700 dark:hover:border-[#ff5100] dark:focus:ring-[#ff5100]  ">Login</button>
                    <button type="button" class="text-white  focus:outline-none hover:border-[#ff5100] hover:shadow-2xl  shadow-[#ff5100] focus:ring-[#ff5100] font-medium rounded-full text-sm px-4 py-2 text-center bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] dark:focus:ring-[#ff5100] hidden md:block">Start Free Trial</button>
                </div>
                <div class="items-center justify-between hidden w-full xl:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn flex items-end gap-1">Products <MdKeyboardArrowDown size={20} /></button>
                                <div class="hidden group-hover:block absolute -left-[500px] top-10 p-3 border float-left w-[70vw] h-52  bg-white text-gray-700 rounded-md shadow-lg  transition-transform transform origin-top-left">
                                    <a href="/retail" class="block hover:bg-[#ffc107] rounded-lg hover:text-white  px-4 py-2">Retail</a>
                                    <a href="/healthcare" class="block hover:bg-[#ffc107]  rounded-lg hover:text-white  px-4 py-2">Healthcare</a>
                                    <a href="/hospitality" class="block hover:bg-[#ffc107]  rounded-lg hover:text-white  px-4 py-2">Hospitality</a>
                                    <a href="/corporate" class="block hover:bg-[#ffc107]  rounded-lg hover:text-white  px-4 py-2">Corporate</a>
                                </div>
                            </div>
                        </li>

                        <li className=''>
                            <div class="dropdown">
                                <button class="dropbtn flex items-end gap-1">Customers <MdKeyboardArrowDown size={20} /></button>

                                <div class="hidden group-hover:block absolute -left-[500px] top-10 p-3 border float-left w-[70vw] h-52  bg-white text-gray-700 rounded-md shadow-lg  transition-transform transform origin-top-left">
                                    <a href="/retail" class="block hover:bg-[#ffc107] rounded-lg hover:text-white  px-4 py-2">Retail</a>
                                    <a href="/healthcare" class="block hover:bg-[#ffc107]  rounded-lg hover:text-white  px-4 py-2">Healthcare</a>
                                    <a href="/hospitality" class="block hover:bg-[#ffc107]  rounded-lg hover:text-white  px-4 py-2">Hospitality</a>
                                    <a href="/corporate" class="block hover:bg-[#ffc107]  rounded-lg hover:text-white  px-4 py-2">Corporate</a>
                                </div>
                            </div>
                        </li>
                        <li className=''>
                            <div class="dropdown">
                                <button class="dropbtn flex items-end gap-1">Resoures <MdKeyboardArrowDown size={20} />                                </button>

                                <div class="dropdown-content  ">
                                    <div className=' flex gap-16 items-center   '>
                                        <div className='w-[15vw] shadow-md rounded-md hover:shadow-lg h-[30vh]'>
                                            <img src="https://www.pickcel.com/assets/img/menu-icon/product-01.jpg" alt="" />
                                        </div>
                                        <div className=' w-[70%] h-80 flex  ' >
                                            <div className='w-fit h-full'>
                                                <a href="/retail" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] rounded-lg hover:text-white   text-start">Retail</a>
                                                <a href="/healthcare" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800]  rounded-lg hover:text-white   text-start">Healthcare</a>
                                                <a href="/hospitality" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800]  rounded-lg hover:text-white   text-start">Hospitality</a>
                                                <a href="/corporate" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800]  rounded-lg hover:text-white   text-start">Corporate</a>
                                            </div>
                                            <div className='w-fit'>
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link to="/pricing" class="block p-3  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff5100] md:dark:hover:text-[#ff5100] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>



    )
}

export default Navbar
