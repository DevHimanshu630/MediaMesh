import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import cartimg from "../images/cart.jpeg"
import RetailBussiness from '../Components/RetailBussiness';
import leftimg from "../images/client.png"
import ndtv from "../images/NDTV (1).svg"
import Footer from '../Components/Footer';

function Hospitality() {



    const data = {
        item1: { imageUrl: cartimg, heading: 'Branding', paragraph: 'Showcase corporate social responsibility initiatives on your digital signage. Reinforce brand values by showing company mission statement. Highlight your esteemed clientele & collaborators.' },
        item2: { imageUrl: cartimg, heading: 'Internal Communication', paragraph: 'Share project updates & key business stats. Show communication threads on internal channels like Slack. Create digital bulletin boards to display meeting schedules, meeting room details & event calendars.' },
        item3: { imageUrl: cartimg, heading: 'Employee Motivation', paragraph: 'Engage your staff with industry-specific RSS feeds, news, social media updates, leadership podcasts, etc. Introduce new recruits, or share personalized messages like Birthday wishes.' },
        item4: { imageUrl: cartimg, heading: 'Maps & Building Directory', paragraph: 'Large organizations & shared office spaces can use interactive kiosks to help visitors with way-finding maps of the premises, department extension numbers, and general information.' },
        // item5: { imageUrl: cartimg, heading: 'Maps & Building Directory', paragraph: 'Large organizations & shared office spaces can use interactive kiosks to help visitors with way-finding maps of the premises, department extension numbers, and general information.' },
    };
    const h = { heading: "60+ Digital Signage Content Apps ", subheading: "for hotels & resorts" }

    return (
        <>

            <div style={{
                backgroundImage:
                    'url("https://www.pickcel.com/assets/img/bg/industry-bg.png")',
            }}>
                <Navbar />
                <section className="w-[100%] py-24  flex items-center justify-center">
                    <div className='w-[70%] gap-10 flex flex-col justify-center items-center  '>
                        <div className='flex flex-col gap-14 items-center justify-center'>
                            <div className='w-[60%] text-center text-5xl'>
                                <span>Hospitality Digital Signage</span>
                            </div>
                            <div className='w-[80%] text-center text-xl'>
                                <span>Information in hotels and restaurants is hard to find, read, or even difficult to care about. This is where digital signage for hotels can help you improve your customers’ overall experience while making the location look more upscale and modern.</span>
                            </div>
                        </div>
                        <div className='flex gap-5 '>
                            <section>
                                <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                    <a
                                        style={{
                                            background:
                                                "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                        }}
                                        href="!"
                                        class=" md:px-10 md:py-3 py-3  hover:bg-white text-white block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  tracking-widest overflow-hidden"
                                    >
                                        Start Free Trial
                                    </a>
                                </div>
                            </section>
                            <a href="#" class="inline-flex items-center text-[11px] md:text-sm  shadow-lg justify-center h-fit px-3 py-2 md:px-8 md:py-3 text-base font-medium text-center   rounded-full  hover:shadow-2xl border border-black text-black hover:shadow-orange-300 bg-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Schedule My Demo
                            </a>
                        </div>
                    </div>
                </section>
            </div>


            <section className='flex py-20 justify-center items-center w-[100%]'>
                <div className="flex  w-[72%] gap-10 items-center justify-evenly  ">
                    <div className='flex flex-col gap-7'>
                        <div className=' text-[3.3rem] leading-tight '>Show content <br />that aligns with <br /> your company<br /> strategy</div>
                        <div className="w-[50px] h-[5px] rounded-full bg-gradient-to-r from-pink-600 via-red-600 to-orange-500"></div>
                    </div>

                    <div className='grid grid-cols-2 pr-4 gap-6 h-[90vh] '>
                        {Object.entries(data).map(([key, value]) => (
                            < div key={key} class="max-w-sm   border hover:shadow-md  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src={value.imageUrl} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{value.heading}</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.paragraph}</p>

                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section >

            <div style={{
                backgroundImage: 'url("https://www.pickcel.com/assets/img/bg/over-view-bg.png")',
                backgroundSize: 'cover',  // Adjust the background size as needed
                backgroundPosition: 'center',
            }} className="w-[100%] h-[70vh] flex py-10   opacity-[0.85] justify-around  items-center  mt-[20px]">
                <div className="w-[35%]  ml-[12%]">
                    <div>
                        <h1 className="text-[40px] leading-[50px] font-bold">
                            Enjoy more creative control with digital signage templates
                        </h1>
                        <p className="text-[18px] mt-[30px]">
                            Unlock a range of irresistible templates from Pickcel’s built-in design tool Artboard. Our templates are meticulously crafted to enhance customer engagement, elevate your hospitality brand communications, and create memorable guest experiences.
                        </p>
                    </div>
                    <div className="flex gap-3 mt-[30px]">
                        <div className="flex-col hover:font-semibold hover:text-black flex gap-1">
                            <section>
                                <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                    <a
                                        style={{
                                            background:
                                                "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                        }}
                                        href="!"
                                        class="button button--aylen md:px-10 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[10px] md:text-sm text-center font-semibold  tracking-widest overflow-hidden"
                                    >
                                        View Template
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="w-[40%]   ">
                    <div className="rounded w-fit border-2 shadow-2xl ">
                        <img
                            className="  shadow-lg "
                            src="https://www.pickcel.com/assets/img/industries/hospitality-template.webp"
                            width="470px"
                            height="265px"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[50vh] flex   opacity-[0.85] justify-around  items-center  mt-[20px]">
                <div className="w-[35%]  ml-[13%]">
                    <div>
                        <h1 className="text-[48px] leading-[50px] font-bold">
                            Your hotel bars & restaurants need the Pickcel menu board solution
                        </h1>
                        <p className="text-[18px] mt-[30px]">
                            Showcase mouthwatering delicacies to your hotel guests. Schedule your daily food menu and update them with one-click using the Pickcel digital menu board app.
                        </p>
                        <p className='my-3 text-xl text-[#ff5100]'>Explore our digital menu board solution</p>
                    </div>

                </div>
                <div className="w-[45%]   ">
                    <div className="rounded w-[550px]  border-2 shadow-2xl ">
                        <img
                            className="  shadow-lg "
                            src="https://www.pickcel.com/assets/img/industries/hospitality/pickcel-digital-menu-board.webp"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className='pl-12'>
                <RetailBussiness
                    heading={h.heading}
                    subheading={h.subheading}
                    leftImg1={leftimg}
                    leftImg2={leftimg}
                    leftImg3={leftimg}
                    leftImg4={leftimg}
                    rightImg={ndtv}
                />
            </div>
            <section className="w-[100%] pb-20  flex items-center justify-center">
                <div className='w-[60%] gap-5 flex flex-col justify-center items-center  '>
                    <div className='w-[65%] p-0'>
                        <img src="https://www.pickcel.com/assets/img/industries/hospitality/jm-marriot.webp" alt="" />
                    </div>
                    <div className='flex flex-col gap-7 items-center justify-center'>
                        <div className='w-[60%] text-center text-5xl'>
                            <span>Customer success story: JW Marriott</span>
                        </div>
                        <div className='w-[72%] text-center text-xl'>
                            <span>How the largest luxury hotel chain in the world uses Pickcel's digital signage for hotels solution to show flight time, conference schedules, wayfinding maps & more </span>
                        </div>
                    </div>
                    <div className='flex gap-5 '>
                        <section>
                            <div class="flex flex-wrap justify-center   w-fit rounded-full  ">
                                <a
                                    style={{
                                        background:
                                            "linear-gradient(113deg, #fd0036 24.5%,  #ffa800)",
                                    }}
                                    href="!"
                                    class="button button--aylen md:px-10 md:py-3 py-3  hover:bg-white text-white relative block focus:outline-none  rounded-full text-[13px]  text-center font-semibold  tracking-widest overflow-hidden"
                                >
                                    Read All Case Studies
                                </a>
                            </div>
                        </section>
                        <a href="#" class="inline-flex items-center text-[11px] md:text-sm  shadow-lg justify-center h-fit px-3 py-2 md:px-5 md:py-3 text-base font-medium text-center   rounded-full  hover:shadow-2xl border border-red-500 text-red-500 hover:shadow-orange-300 bg-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Read The JW Marriott Story
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Hospitality
