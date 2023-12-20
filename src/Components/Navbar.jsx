import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import Dropdown from '../Components/Dropdown';
import { MdKeyboardArrowDown } from "react-icons/md";


function Navbar() {
    return (
        <nav class=" border-gray-200 dark:bg-gray-900 ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                <Link to={"/"} class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="md:h-20 h-10 md:mb-5" alt="MediaMesh Logo" />
                </Link>
                <div class="flex md:order-2 mb-2 gap-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to={"/talktosales"} className='mt-1 hover:border-b-2 border-[#ff5100]   hover:cursor-pointer flex items-center '>Talk To Sale</Link>
                    <button type="button" class="text-gray-900 hidden md:block hover:text-[#ff5100] border hover:border-[#ff5100] bg-white focus:outline-none  font-medium rounded-full text-sm px-6 py-3 me-2  dark:bg-gray-800 dark:text-white dark:border-[#ff5100] dark:hover:bg-gray-700 dark:hover:border-[#ff5100] dark:focus:ring-[#ff5100]  ">Login</button>
                    <section>
                        <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                            <a
                                style={{ background: "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)" }}
                                href="!"
                                class="button button--aylen md:px-3 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  overflow-hidden"
                            >
                                Start Free Trial
                            </a>
                        </div>
                    </section>
                </div>
                <div class="items-center justify-between hidden w-full xl:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   rtl:space-x-reverse md:flex-row justify-end items-center md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className=''>
                            <div class="dropdown ">
                                <button class="dropbtn flex items-end gap-1">Products <MdKeyboardArrowDown size={20} />                                </button>
                                <div class="dropdown-content1  shadow-sm border border-l border-b border-r ">
                                    <div className=' flex gap-16 items-start justify-start   '>
                                        <div className='w-[15vw] flex flex-col gap-10 items-center shadow-md rounded-md hover:shadow-lg h-[30vh]'>
                                            <img src="https://www.pickcel.com/assets/img/menu-icon/product-01.jpg" alt="" />
                                            <span className='text-lg'>What is digital signage ?</span>
                                        </div>
                                        <div className=' grid grid-cols-3 w-[70%] h-80  ' >
                                            <div className='border-[#fee6ce] border-l h-[90%]'>
                                                <a href="/digital-signage-software" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Digital Signage Software</a>
                                                <a href="/" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 2</a>
                                                <a href="/" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 3</a>
                                            </div>
                                            <div className='border-[#fee6ce] border-l h-[90%]'>
                                                <a href="#" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 1</a>
                                                <a href="#" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 2</a>
                                                <a href="#" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 3</a>
                                            </div>
                                            <div className='border-[#fee6ce] border-l h-[90%]'>
                                                <a href="#" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 1</a>
                                                <a href="#" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 2</a>
                                                <a href="#" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 3</a>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li className=''>
                            <div class="dropdown ">
                                <button class="dropbtn flex items-end gap-1">Customers <MdKeyboardArrowDown size={20} />                                </button>
                                <div class="dropdown-content2  shadow-sm border border-l border-b border-r">
                                    <div className=' flex gap-16 items-start justify-start   '>
                                        <div className='w-[15vw] flex flex-col gap-10 items-center shadow-md rounded-md hover:shadow-lg h-[30vh]'>
                                            <img src="https://www.pickcel.com/assets/img/menu-icon/product-01.jpg" alt="" />
                                            <span className='text-lg'>What is digital signage ?</span>
                                        </div>
                                        <div className=' grid grid-cols-3 w-[70%] h-80  ' >
                                            <div className='border-[#fee6ce] border-l h-[90%]'>
                                                <a href="/retail" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Retail</a>
                                                <a href="/healthcare" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Healthcare</a>
                                                <a href="/hospitality" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Hospitality</a>
                                            </div>
                                            <div className='border-[#fee6ce] border-l h-[90%]'>
                                                <a href="/dooh" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">DOOH</a>
                                                <a href="/corporate" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Corporate</a>
                                                <a href="/government-and-ngo" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Government & NGO’s</a>
                                            </div>
                                            <div className='border-[#fee6ce] border-l h-[90%]'>
                                                <a href="#" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 1</a>
                                                <a href="#" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 2</a>
                                                <a href="#" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 3</a>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li className=''>
                            <div class="dropdown ">
                                <button class="dropbtn flex items-end gap-1">Resources <MdKeyboardArrowDown size={20} />                                </button>
                                <div class="dropdown-content3 shadow-sm border border-l border-b border-r">
                                    <div className=' flex gap-12 items-start justify-start   '>
                                        <div className='w-[20vw] flex flex-col gap-10 items-center shadow-md rounded-md hover:shadow-lg h-[30vh]'>
                                            <img src="https://www.pickcel.com/assets/img/menu-icon/product-01.jpg" alt="" />
                                            <span className='text-lg'>What is digital signage ?</span>
                                        </div>
                                        <div className=' grid grid-cols-1 w-[70%] h-80  ' >
                                            <div className='border-[#fee6ce] border-l h-[90%] '>
                                                <a href="/learn" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100] ">Learn</a>
                                                <a href="/" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 2</a>
                                                <a href="/" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 3</a>
                                                <a href="/" class="block  hover:text-[#ff5100]  hover:border-l border-[#ff5100]">Link 4</a>
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
