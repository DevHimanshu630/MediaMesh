import React, { useState } from 'react';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import Dropdown from '../Components/Dropdown';
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuNav, setIsMenuNav] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsMenuNav(!isMenuNav)
    };

    return (
        <>
            <nav class={`max-w-screen-xl   m-auto ${isMenuNav ? 'bg-white p-0' : ''} `}>
                <div class={` ${isMenuNav ? 'bg-white ' : ''}  flex flex-wrap items-center justify-between  `}>
                    <Link to={"/"} class="flex items-center ">
                        <img src={logo} class="h-12 sm:h-16 md:h-20   mb-5" alt="MediaMesh Logo" />
                    </Link>

                    <div class=" md:order-2 hidden lg:flex m-2 md:m-0 md:mb-2 gap-3 lg:mr-[2rem]  ">
                        <Link to={"/talktosales"} className='mt-1 hover:border-b-2 border-[#ff5100]    hover:cursor-pointer flex items-center '>Talk To Sale</Link>
                        <button type="button" class="text-gray-900  hover:text-[#ff5100] border hover:border-[#ff5100] bg-white focus:outline-none  font-medium rounded-full text-sm px-6 py-3 me-2  dark:bg-gray-800 dark:text-white dark:border-[#ff5100] dark:hover:bg-gray-700 dark:hover:border-[#ff5100] dark:focus:ring-[#ff5100]  ">Login</button>

                        <section className='hidden xl:block'>
                            <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                <a
                                    style={{ background: "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)" }}
                                    href="!"
                                    class="button button--aylen px-2 md:px-4 md:py-3 py-2   hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  overflow-hidden"
                                >
                                    Start Free Trial
                                </a>
                            </div>
                        </section>
                    </div>

                    <div class="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   rtl:space-x-reverse md:flex-row justify-end items-center md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className=''>
                                <div class="dropdown  ">
                                    <button class="dropbtn flex items-end gap-1 ">Products <MdKeyboardArrowDown size={20} />                                </button>
                                    <div class="dropdown-content1  2xl:p-10 p-5 lg:-left-[181px] 2xl:-left-[380px] shadow-lg border border-l border-b border-r ">
                                        <div className=' flex 2xl:gap-16 gap-12 items-start justify-start   '>
                                            <div className='2xl:w-[15vw] w-[16vw] flex flex-col 2xl:gap-10 gap-6 items-center shadow-md rounded-md hover:shadow-lg h-[33vh] 2xl:h-[30vh]'>
                                                <img src="https://www.pickcel.com/assets/img/menu-icon/product-01.jpg" alt="" />
                                                <span className='2xl:text-lg text-sm'>What is digital signage ?</span>
                                            </div>
                                            <div className=' grid grid-cols-3 w-[70%]  ' >
                                                <div className='border-[#fee6ce] border-l '>
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
                                    <div class="dropdown-content2 2xl:p-10 p-5 lg:-left-[290px] 2xl:-left-[490px] shadow-lg border border-l border-b border-r">
                                        <div className=' flex 2xl:gap-16 gap-12 items-start justify-start   '>
                                            <div className='2xl:w-[15vw] w-[16vw] flex flex-col 2xl:gap-10 gap-6 items-center shadow-md rounded-md hover:shadow-lg h-[33vh] 2xl:h-[30vh]'>
                                                <img src="https://www.pickcel.com/assets/img/menu-icon/product-01.jpg" alt="" />
                                                <span className='2xl:text-lg text-sm'>What is digital signage ?</span>
                                            </div>
                                            <div className=' grid grid-cols-3 w-[70%]  ' >
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
                                    <div class="dropdown-content3 p-5 2xl:p-10  lg:-left-[410px] 2xl:-left-[613px] shadow-lg border border-l border-b border-r">
                                        <div className=' flex gap-12 items-start justify-start   '>
                                            <div className='2xl:w-[15vw] w-[16vw] flex flex-col 2xl:gap-10 gap-6 items-center shadow-md rounded-md hover:shadow-lg h-[33vh] 2xl:h-[30vh]'>
                                                <img src="https://www.pickcel.com/assets/img/menu-icon/product-01.jpg" alt="" />
                                                <span className='2xl:text-lg text-sm'>What is digital signage ?</span>
                                            </div>
                                            <div className=' grid grid-cols-1 w-[70%] ' >
                                                <div className='border-[#fee6ce] border-l '>
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


                    <div className=' w-fit gap-3 lg:hidden mb-3 pr-3 flex items-center '>
                        <Link to={"/talktosales"} className=' hover:border-b-2 border-[#ff5100]    hover:cursor-pointer flex items-center '>Talk To Sale</Link>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center    justify-center p-2  h-10 text-sm text-black rounded-lg  focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-toggle"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>


            </nav>
            <div className={`w-full ${isMenuOpen ? 'block  ' : 'hidden'}  `} id="navbar-toggle">
                <div className='h-[90vh] bg-white flex flex-col items-center gap-10 '>
                    <ul class="flex flex-col w-full font-medium  rounded-lg   dark:bg-gray-800 dark:border-gray-700">
                        <li className='border'>
                            <a href="#" class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded " aria-current="page">Products <IoIosArrowForward size={24} /></a>
                        </li>
                        <li className='border'>
                            <a href="#" class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded ">Customers <IoIosArrowForward size={24} /></a>
                        </li>
                        <li className='border'>
                            <a href="#" class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded ">Resources <IoIosArrowForward size={24} /></a>
                        </li>
                        <li className='border'>
                            <a href="#" class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded ">Pricing <IoIosArrowForward size={24} /></a>
                        </li>
                    </ul>
                    <div className='flex gap-3'>

                        <div className='flex-col hover:font-semibold hover:text-black flex gap-1'>
                            <section>
                                <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                    <a
                                        style={{ background: "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)" }}
                                        href="!"
                                        class="button button--aylen md:px-8 md:py-3 py-3 px-10 hover:bg-white text-white relative block focus:outline-none  rounded-full text-[12px] md:text-sm text-center font-semibold   overflow-hidden"
                                    >
                                        Start Free Trial
                                    </a>
                                </div>
                            </section>
                            <p className=' text-center text-gray-400 text-[10px]'>No Credit Card Required</p>
                        </div>

                        <a href="#" class="inline-flex items-center text-[12px] md:text-sm  justify-center h-fit px-8 py-3 md:px-5 md:py-3  text-center border bg-white text-black rounded-full  hover:border-[#ff5100] hover:text-[#ff5100] hover:text-whit">
                            Schedule My Demo
                        </a>
                    </div>
                </div>
            </div>
        </>




    )
}

export default Navbar
